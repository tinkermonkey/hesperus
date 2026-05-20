#!/usr/bin/env node

import { mkdir, copyFile, writeFile, rm, readFile, readdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname, extname, relative } from 'path';
import { fileURLToPath } from 'url';
import * as esbuild from 'esbuild';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

async function transpileJSXFiles(srcDir, outDir) {
  const files = await readdir(srcDir, { recursive: true });
  const jsxFiles = files.filter(f => f.endsWith('.jsx'));

  for (const file of jsxFiles) {
    const srcPath = join(srcDir, file);
    const outPath = join(outDir, file.replace(/\.jsx$/, '.js'));

    await mkdir(dirname(outPath), { recursive: true });

    await esbuild.build({
      entryPoints: [srcPath],
      bundle: true,
      format: 'esm',
      outfile: outPath,
      jsx: 'automatic',
      jsxImportSource: 'react',
      external: ['react', 'react/jsx-runtime'],
    });
  }
}

async function generateTypeDeclarations(srcDir, outDir) {
  const files = await readdir(srcDir, { recursive: true });
  const jsxFiles = files.filter(f => f.endsWith('.jsx'));

  for (const file of jsxFiles) {
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

  // Extract React.forwardRef component exports
  const componentExports = jsxContent.match(/export\s+const\s+(\w+)\s*=\s*forwardRef/g) || [];

  for (const match of componentExports) {
    const componentName = match.match(/export\s+const\s+(\w+)/)[1];
    dts += `export const ${componentName}: React.ForwardRefExoticComponent<React.HTMLAttributes<HTMLElement> & React.RefAttributes<HTMLElement>>;\n`;
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
  if (componentExports.length > 0) {
    dts = `import * as React from 'react';\n\n${dts}`;
  }

  return dts || 'export {};\n';
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

  // Transpile index.js
  await esbuild.build({
    entryPoints: [join(srcComponentsDir, 'index.js')],
    bundle: true,
    format: 'esm',
    outfile: join(distComponentsDir, 'index.js'),
    jsx: 'automatic',
    jsxImportSource: 'react',
    external: ['react', 'react/jsx-runtime'],
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
