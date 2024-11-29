const fs = require('fs');
const path = require('path');

const citiesDir = path.join(process.cwd(), 'data', 'cities');
const publicDir = path.join(process.cwd(), 'public', 'cities');

function createPublicFolders(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      createPublicFolders(fullPath);
    } else if (path.extname(file) === '.mdx') {
      const relativePath = path.relative(citiesDir, dir);
      const publicPath = path.join(publicDir, relativePath, path.parse(file).name);
      
      fs.mkdirSync(publicPath, { recursive: true });
    }
  });
}

createPublicFolders(citiesDir);
