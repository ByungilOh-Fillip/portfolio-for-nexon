const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Add import
content = content.replace("import { useEffect } from 'react';", "import { useEffect } from 'react';\nimport erdMemoryImg from '../assets/erd_memory.png';");

// Replace img tag
content = content.replace('<img src="/src/assets/erd_memory.png"', '<img src={erdMemoryImg}');

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Fixed image import");
