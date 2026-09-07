const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Fix lines 439, 440
content = content.replace("A\`;\\n", "A\`;\n");
content = content.replace("EOF (End of Message)\`;\\n", "EOF (End of Message)\`;\n");

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
