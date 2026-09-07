const fs = require('fs');
let content = fs.readFileSync('src/components/Mermaid.tsx', 'utf8');

content = content.replace(
  "setErrorMsg(error.message || String(error));",
  "setErrorMsg(error instanceof Error ? error.message : String(error));"
);

fs.writeFileSync('src/components/Mermaid.tsx', content, 'utf8');
console.log("Fixed TS error.");
