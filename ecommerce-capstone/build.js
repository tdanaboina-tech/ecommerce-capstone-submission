// Zero-dependency asset minifier for production builds
const fs = require('fs');
const path = require('path');

fs.mkdirSync('dist', { recursive: true });

const css = fs.readFileSync('src/styles/main.css', 'utf8')
  .replace(/\/\*[\s\S]*?\*\//g, '')
  .replace(/\s+/g, ' ')
  .replace(/\s*([{}:;,])\s*/g, '$1')
  .trim();

fs.writeFileSync('dist/main.min.css', css);
console.log('Minified CSS written to dist/main.min.css');
