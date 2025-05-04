
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

// Create a netlify.toml file for SPA redirects
const netlifyConfig = `
[build]
  publish = "dist"
  command = "npm run build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
`;

try {
  console.log('Building project for production...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('Creating netlify.toml file...');
  fs.writeFileSync('netlify.toml', netlifyConfig);
  
  console.log('Build completed successfully!');
  console.log('To deploy to Netlify:');
  console.log('1. Sign up or log in to Netlify (https://netlify.com)');
  console.log('2. Drag and drop the "dist" folder to Netlify');
  console.log('Or use Netlify CLI for deployment.');
  
} catch (error) {
  console.error('Build failed:', error);
  process.exit(1);
}
