const fs = require('fs');
let text = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// I know exactly where the bad code is. Let's find it.
text = text.replace('{\`\`\`\`mermaid', '{````mermaid'); // Wait, the issue is that it's NOT wrapped in a string!
// The JSX looks like:
// {````mermaid
// flowchart LR ...
// It SHOULD be:
// {````mermaid\nflowchart LR\n...`````} -> wait, no, three backticks inside a backtick string:
// {`\n\`\`\`mermaid\nflowchart LR\n...\n\`\`\`\n`}

const brokenPart = '{\`\`\`\`mermaid\nflowchart LR\n    A["Client"] -->|"Socket Request"| B["Server"]\n    B -->|"Business Request"| C["DAO"]\n    C --> D[("MariaDB")]\n\n    D --> C\n    C --> B\n    B -->|"Socket Response"| A\n\`\`\`\`}';

const fixedPart = '{\`\\`\\`\\`mermaid\\nflowchart LR\\n    A["Client"] -->|"Socket Request"| B["Server"]\\n    B -->|"Business Request"| C["DAO"]\\n    C --> D[("MariaDB")]\\n\\n    D --> C\\n    C --> B\\n    B -->|"Socket Response"| A\\n\\`\\`\\`\`}'

text = text.replace(brokenPart, fixedPart);
fs.writeFileSync('src/pages/ProjectDetail.tsx', text, 'utf8');
