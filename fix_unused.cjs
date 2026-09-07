const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Remove unused imports in ProjectDetail.tsx
content = content.replace("import aiCommandGatewayImg from '../assets/ai_command_gateway.png';\n", "");
content = content.replace("import dddWeaponImg from '../assets/ddd_weapon.png';\n", "");
content = content.replace("import dddItemImg from '../assets/ddd_item.png';\n", "");

// Remove unused variables
content = content.replace('const imgPalworldArch = "";\n', "");

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
