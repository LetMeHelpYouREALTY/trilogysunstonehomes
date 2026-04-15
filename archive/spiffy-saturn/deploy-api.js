import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Cloudflare Pages API deployment script
// This requires a Cloudflare API token with Pages:Edit permissions

const ACCOUNT_ID = '2cc579c1ec9e426ed585e933ebf4753b';
const PROJECT_NAME = 'trilogysunstonehomes';

console.log('Cloudflare Pages API Deployment Script');
console.log('=====================================');
console.log('');
console.log('To deploy using the Cloudflare API:');
console.log('');
console.log('1. Create a Cloudflare API token with the following permissions:');
console.log('   - Account:Cloudflare Pages:Edit');
console.log('   - Zone:Zone:Read');
console.log('');
console.log('2. Set the API token as an environment variable:');
console.log('   set CLOUDFLARE_API_TOKEN=your_token_here');
console.log('');
console.log('3. Run this script with the API token:');
console.log('   CLOUDFLARE_API_TOKEN=your_token_here node deploy-api.js');
console.log('');
console.log('Alternatively, you can deploy manually:');
console.log('1. Go to https://dash.cloudflare.com/pages');
console.log('2. Select the trilogysunstonehomes project');
console.log('3. Go to Deployments tab');
console.log('4. Click "Create a deployment"');
console.log('5. Upload the dist folder contents');
console.log('');
console.log('The site should then be available at:');
console.log('https://trilogysunstonehomes.pages.dev');
console.log('https://trilogysunstonehomes.com'); 