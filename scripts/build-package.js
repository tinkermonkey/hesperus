#!/usr/bin/env node

import { mkdir, copyFile, writeFile, rm, readFile, cp } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

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

  // Copy React components to dist
  await mkdir(join(distDir, 'components'), { recursive: true });
  await cp(
    join(rootDir, 'src', 'components'),
    join(distDir, 'components'),
    { recursive: true }
  );
  console.log('✅ Copied React components to dist/components');

  console.log('\n✨ Package build complete! Ready for publishing.\n');
  console.log('📦 Package exports:');
  console.log('   - ./dist/hesperus.css (token overrides + BEM overrides)');
  console.log('   - ./dist/tokens.css (token overrides only)');
  console.log('   - ./dist/components (React components)\n');
  console.log('🎨 Assets:');
  console.log('   - public/grid-background-light.svg');
  console.log('   - public/grid-background-dark.svg\n');
}

build().catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
