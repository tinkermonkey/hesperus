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
      format: 'esm',
      outfile: outPath,
      jsxImportSource: 'react',
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

  // Also generate index.d.ts
  const indexDtsPath = join(outDir, 'index.d.ts');
  const indexDts = jsxFiles
    .map(f => {
      const componentName = f
        .replace(/\.jsx$/, '')
        .split('/')
        .pop();
      return `export * from './${f.replace(/\.jsx$/, '.js')}';`;
    })
    .join('\n');

  await writeFile(indexDtsPath, indexDts + '\n');
}

function generateDTSContent(jsxContent, fileName) {
  const typedefMatches = jsxContent.match(/@typedef\s+\{[^}]+\}\s+(\w+)/g) || [];
  const exports = jsxContent.match(/export\s+(?:const|function)\s+(\w+)/g) || [];

  let dts = '';

  for (const match of typedefMatches) {
    const typeName = match.match(/@typedef\s+\{[^}]+\}\s+(\w+)/)[1];
    dts += `export interface ${typeName} {
  [key: string]: any;
}\n\n`;
  }

  for (const match of exports) {
    const exportName = match.match(/export\s+(?:const|function)\s+(\w+)/)[1];
    dts += `export declare const ${exportName}: any;\n`;
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
    format: 'esm',
    outfile: join(distComponentsDir, 'index.js'),
    jsxImportSource: 'react',
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
