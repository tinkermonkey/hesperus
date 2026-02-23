#!/usr/bin/env node

import { mkdir, copyFile, writeFile, rm } from 'fs/promises';
import { existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const distDir = join(rootDir, 'dist');

async function build() {
  console.log('🏗️  Building Hesperus theme package...\n');

  // Clean dist directory
  if (existsSync(distDir)) {
    await rm(distDir, { recursive: true });
    console.log('✅ Cleaned dist directory');
  }
  
  // Create dist directory
  await mkdir(distDir, { recursive: true });
  console.log('✅ Created dist directory');

  // Copy theme.js
  await copyFile(
    join(rootDir, 'src', 'theme.js'),
    join(distDir, 'theme.js')
  );
  console.log('✅ Copied theme.js');

  // Copy index.css
  await copyFile(
    join(rootDir, 'src', 'index.css'),
    join(distDir, 'index.css')
  );
  console.log('✅ Copied index.css');

  // Create TypeScript declaration file
  const dtsContent = `import type { CustomFlowbiteTheme } from 'flowbite-react';

export declare const hesperusTheme: CustomFlowbiteTheme;
`;

  await writeFile(
    join(distDir, 'theme.d.ts'),
    dtsContent
  );
  console.log('✅ Created TypeScript declarations');

  console.log('\n✨ Package build complete! Ready for publishing.\n');
  console.log('📦 Package contents:');
  console.log('   - dist/theme.js');
  console.log('   - dist/theme.d.ts');
  console.log('   - dist/index.css');
  console.log('   - public/grid-background-*.svg\n');
}

build().catch((error) => {
  console.error('❌ Build failed:', error);
  process.exit(1);
});
