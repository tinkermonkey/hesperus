#!/usr/bin/env node

import { mkdir, copyFile, writeFile, rm, readFile, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

async function getADR1Components(srcDir) {
  // Read index.js and extract which component files are exported
  const indexPath = join(srcDir, 'index.js');
  const indexContent = await readFile(indexPath, 'utf-8');

  // Extract all component file imports from index.js
  // Matches: from './ComponentName' or from './utility'
  const importMatches = indexContent.match(/from\s+['"]\.\/([^'"]+)['"]/g) || [];

  const componentFiles = new Set();
  for (const match of importMatches) {
    const fileName = match.match(/from\s+['"]\.\/([^'"]+)['"]/)[1];
    componentFiles.add(fileName);
  }

  return componentFiles;
}

async function transpileJSXFiles(srcDir, outDir) {
  const adder1Components = await getADR1Components(srcDir);
  const files = await readdir(srcDir, { recursive: true });
  const jsxFiles = files.filter(f => f.endsWith('.jsx'));

  for (const file of jsxFiles) {
    // Extract the component/utility name without extension
    const name = file.replace(/\.jsx$/, '');

    // Only transpile files that are exported from index.js (ADR-1 compliance)
    if (!adder1Components.has(name)) {
      continue;
    }

    const srcPath = join(srcDir, file);
    const outPath = join(outDir, file.replace(/\.jsx$/, '.js'));

    await mkdir(dirname(outPath), { recursive: true });

    // No bundle: true or external — esbuild will naturally leave React imports as-is
    // Preserve process.env.NODE_ENV so consumers' bundlers can tree-shake dev warnings
    await esbuild.build({
      entryPoints: [srcPath],
      format: 'esm',
      outfile: outPath,
      jsx: 'automatic',
      jsxImportSource: 'react',
      define: { 'process.env.NODE_ENV': 'process.env.NODE_ENV' },
    });
  }
}

async function generateTypeDeclarations(srcDir, outDir) {
  const adder1Components = await getADR1Components(srcDir);
  const files = await readdir(srcDir, { recursive: true });
  const jsxFiles = files.filter(f => f.endsWith('.jsx'));

  for (const file of jsxFiles) {
    // Extract the component/utility name without extension
    const name = file.replace(/\.jsx$/, '');

    // Only generate .d.ts for files that are exported from index.js (ADR-1 compliance)
    if (!adder1Components.has(name)) {
      continue;
    }

    const srcPath = join(srcDir, file);
    const outPath = join(outDir, file.replace(/\.jsx$/, '.d.ts'));

    await mkdir(dirname(outPath), { recursive: true });

    const content = await readFile(srcPath, 'utf-8');
    const dtsContent = generateDTSContent(content, file);

    await writeFile(outPath, dtsContent);
  }

  // Generate index.d.ts from actual index.js exports
  const indexJsPath = join(srcDir, 'index.js');
  const indexJsContent = await readFile(indexJsPath, 'utf-8');

  // Extract all export statements from index.js
  const exportMatches = indexJsContent.match(/^export\s+\{[^}]+\}\s+from\s+'\.\/[^']+';$/gm) || [];

  const indexDts = exportMatches.join('\n')
    .replace(/from '\.\/([^']+)';?$/gm, "from './$1.js';");

  const indexDtsPath = join(outDir, 'index.d.ts');
  await writeFile(indexDtsPath, indexDts + '\n');
}

function generateDTSContent(jsxContent, fileName) {
  let dts = '';
  let imports = '';
  const interfaces = [];

  // Extract @typedef JSDoc blocks with their @property lines
  const typedefBlockRegex = /\/\*\*[\s\S]*?@typedef\s+\{Object\}\s+(\w+)([\s\S]*?)\*\//g;
  const typedefMatches = [...jsxContent.matchAll(typedefBlockRegex)];

  const typedefMap = new Map(); // Map typedef name to @property lines
  for (const match of typedefMatches) {
    const typedefName = match[1];
    const typedefBody = match[2];
    typedefMap.set(typedefName, typedefBody);
  }

  // Parse @property lines from JSDoc body
  function parseProperties(jsDocBody) {
    const properties = [];
    // Split by lines and parse @property declarations
    const propRegex = /@property\s+\{([^}]+)\}\s+(\[?)(\w+)\]?\s*(.*)/;
    const lines = jsDocBody.split('\n').filter(line => line.includes('@property'));

    for (const line of lines) {
      const match = propRegex.exec(line);
      if (match) {
        const type = match[1].trim();
        const isOptional = match[2] === '[';
        const propName = match[3];
        const description = match[4]?.trim() || '';
        properties.push({ name: propName, type, isOptional, description });
      }
    }
    return properties;
  }

  // Generate interface declarations
  for (const [typedefName, body] of typedefMap) {
    const properties = parseProperties(body);
    if (properties.length > 0) {
      let interfaceDef = `interface ${typedefName} {\n`;
      for (const prop of properties) {
        const optional = prop.isOptional ? '?' : '';
        // Convert JSDoc types to TypeScript types
        let tsType = prop.type;
        if (tsType === 'Function') tsType = '(...args: any[]) => any';
        if (tsType.includes('React.ReactNode')) tsType = 'React.ReactNode';
        interfaceDef += `  ${prop.name}${optional}: ${tsType};\n`;
      }
      interfaceDef += '}\n';
      interfaces.push(interfaceDef);
    }
  }

  // Extract React.forwardRef component exports
  const componentExports = jsxContent.match(/export\s+const\s+(\w+)\s*=\s*forwardRef/g) || [];

  for (const match of componentExports) {
    const componentName = match.match(/export\s+const\s+(\w+)/)[1];
    const propsTypeName = componentName + 'Props';

    // If we have a typedef for this component, use it; otherwise use a permissive type
    if (typedefMap.has(propsTypeName)) {
      dts += `export const ${componentName}: React.ForwardRefExoticComponent<${propsTypeName} & React.RefAttributes<HTMLElement>>;\n`;
    } else {
      // Use a permissive type that doesn't reject valid component-specific props
      dts += `export const ${componentName}: React.ForwardRefExoticComponent<Record<string, unknown> & React.RefAttributes<HTMLElement>>;\n`;
    }
  }

  // Extract function exports that aren't components
  const functionExports = jsxContent.match(/export\s+(?:function|const)\s+(\w+)(?!\s*=\s*forwardRef)/g) || [];

  for (const match of functionExports) {
    const functionName = match.match(/export\s+(?:function|const)\s+(\w+)/)[1];
    // Skip if already exported as a component
    if (!componentExports.some(c => c.includes(functionName))) {
      dts += `export function ${functionName}(...args: any[]): any;\n`;
    }
  }

  // Add React import for proper typing
  if (componentExports.length > 0 || interfaces.length > 0) {
    imports = `import * as React from 'react';\n\n`;
  }

  const interfaceDeclarations = interfaces.join('\n');
  return imports + interfaceDeclarations + (interfaceDeclarations ? '\n' : '') + dts || 'export {};\n';
}

async function build() {
  console.log('🏗️  Building Hesperus package with CSS and React components...\n');

  // Clean dist directory
  if (existsSync(distDir)) {
    await rm(distDir, { recursive: true });
    console.log('✅ Cleaned dist directory');
  }

  // Create dist directory
  await mkdir(distDir, { recursive: true });
  console.log('✅ Created dist directory');

  // Read and concatenate CSS files (tokens.css + overrides.css)
  const tokensCSS = await readFile(
    join(rootDir, 'src', 'tokens.css'),
    'utf-8'
  );
  const overridesCSS = await readFile(
    join(rootDir, 'src', 'overrides.css'),
    'utf-8'
  );

  // Build the main hesperus.css (tokens + overrides)
  const hesperusCSS = tokensCSS + '\n\n' + overridesCSS;
  await writeFile(
    join(distDir, 'hesperus.css'),
    hesperusCSS
  );
  console.log('✅ Built dist/hesperus.css');

  // Also export tokens.css separately for consumers who want to override
  await writeFile(
    join(distDir, 'tokens.css'),
    tokensCSS
  );
  console.log('✅ Exported dist/tokens.css');

  // Transpile React components from JSX to JS
  const srcComponentsDir = join(rootDir, 'src', 'components');
  const distComponentsDir = join(distDir, 'components');

  await mkdir(distComponentsDir, { recursive: true });
  await transpileJSXFiles(srcComponentsDir, distComponentsDir);
  console.log('✅ Transpiled React components to dist/components');

  // Copy utils.js to dist/components/ (needed by component imports)
  const utilsSrcPath = join(srcComponentsDir, 'utils.js');
  const utilsDistPath = join(distComponentsDir, 'utils.js');
  await copyFile(utilsSrcPath, utilsDistPath);
  console.log('✅ Copied utils.js to dist/components/');

  // Generate utils.d.ts
  const utilsDtsContent = `export function mergeClasses(baseClass: string, variants?: Record<string, boolean>, className?: string): string;
export function classNames(...args: (string | false | undefined | null)[]): string;
`;
  await writeFile(join(distComponentsDir, 'utils.d.ts'), utilsDtsContent);
  console.log('✅ Generated utils.d.ts');

  // Transpile index.js
  await esbuild.build({
    entryPoints: [join(srcComponentsDir, 'index.js')],
    bundle: true,
    format: 'esm',
    outfile: join(distComponentsDir, 'index.js'),
    jsx: 'automatic',
    jsxImportSource: 'react',
    external: ['react', 'react/jsx-runtime'],
    define: { 'process.env.NODE_ENV': 'process.env.NODE_ENV' },
  });
  console.log('✅ Transpiled components/index.js');

  // Generate TypeScript declarations
  await generateTypeDeclarations(srcComponentsDir, distComponentsDir);
  console.log('✅ Generated TypeScript declarations (.d.ts files)');

  console.log('\n✨ Package build complete! Ready for publishing.\n');
  console.log('📦 Package exports:');
  console.log('   - ./dist/hesperus.css (token overrides + BEM overrides)');
  console.log('   - ./dist/tokens.css (token overrides only)');
  console.log('   - ./dist/components (React components, transpiled)\n');
  console.log('🎨 Assets:');
  console.log('   - public/grid-background-light.svg');
  console.log('   - public/grid-background-dark.svg\n');
}

build().catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
