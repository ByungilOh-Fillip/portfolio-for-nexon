const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const badBlock = `{````mermaid
flowchart LR
    A["Client"] -->|"Socket Request"| B["Server"]
    B -->|"Business Request"| C["DAO"]
    C --> D[("MariaDB")]

    D --> C
    C --> B
    B -->|"Socket Response"| A
\`\`\`\`}
                  </pre>`;

const goodBlock = "{\````mermaid\\n" +
"flowchart LR\\n" +
"    A[\"Client\"] -->|\"Socket Request\"| B[\"Server\"]\\n" +
"    B -->|\"Business Request\"| C[\"DAO\"]\\n" +
"    C --> D[(\"MariaDB\")]\\n\\n" +
"    D --> C\\n" +
"    C --> B\\n" +
"    B -->|\"Socket Response\"| A\\n" +
"```\`}                  </pre>";

// wait simpler: let's just use string replace carefully
content = content.replace("{\\`\\`\\`\\`mermaid", "{`\\`\\`\\`mermaid");
content = content.replace("{\\`\\`\\`mermaid", "{`\\`\\`\\`mermaid");

// let's just completely replace the section using regex
content = content.replace(/\{````mermaid[\s\S]*?A\n````\}/, 
"{\`\\`\\`\\`mermaid\\nflowchart LR\\n    A[\\\"Client\\\"] -->|\\\"Socket Request\\\"| B[\\\"Server\\\"]\\n    B -->|\\\"Business Request\\\"| C[\\\"DAO\\\"]\\n    C --> D[(\\\"MariaDB\\\")]\\n\\n    D --> C\\n    C --> B\\n    B -->|\\\"Socket Response\\\"| A\\n\\`\\`\\`\`}");

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
