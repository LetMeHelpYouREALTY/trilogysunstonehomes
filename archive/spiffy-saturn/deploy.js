import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Simple deployment script for Cloudflare Pages
// This will help us understand what files need to be deployed

const distPath = path.join(__dirname, 'dist');
const files = [];

function walkDir(dir) {
  const dirFiles = fs.readdirSync(dir);
  dirFiles.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      walkDir(filePath);
    } else {
      const relativePath = path.relative(distPath, filePath);
      files.push({
        path: relativePath,
        size: stat.size
      });
    }
  });
}

console.log('Scanning dist directory...');
walkDir(distPath);
console.log(`Found ${files.length} files to deploy:`);
files.forEach(file => {
  console.log(`  ${file.path} (${file.size} bytes)`);
});

console.log('\nTo deploy manually:');
console.log('1. Go to https://dash.cloudflare.com/pages');
console.log('2. Select the trilogysunstonehomes project');
console.log('3. Go to Deployments tab');
console.log('4. Upload the dist folder contents'); 