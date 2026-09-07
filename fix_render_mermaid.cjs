const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Add import if not present
if (!content.includes('import Mermaid')) {
  content = content.replace("import ProjectSection from '../components/ProjectSection';", 
    "import ProjectSection from '../components/ProjectSection';\nimport Mermaid from '../components/Mermaid';");
}

// Extract string literals to variables (to avoid JSX string wrapping issues)
const chart1 = "const socketArchChart = `flowchart LR\\n" +
"    A[\"Client\"] -->|\"Socket Request\"| B[\"Server\"]\\n" +
"    B -->|\"Business Request\"| C[\"DAO\"]\\n" +
"    C --> D[(\"MariaDB\")]\\n\\n" +
"    D --> C\\n" +
"    C --> B\\n" +
"    B -->|\"Socket Response\"| A`;\\n";

const chart2 = "const socketFlowChart = `sequenceDiagram\\n" +
"    participant Client\\n" +
"    participant Server\\n\\n" +
"    Client->>Server: \"1\" (Read Request)\\n" +
"    Note over Server: TODO Fetch (DB)\\n" +
"    Server-->>Client: TODO Data\\n" +
"    Server-->>Client: EOF (End of Message)\\n\\n" +
"    Client->>Server: \"3\" (Create Request)\\n" +
"    Note over Server: TODO Insert (DB)\\n" +
"    Server-->>Client: \"Success\" Message\\n" +
"    Server-->>Client: EOF (End of Message)`;\\n";

// Insert chart strings at the top of case 'socket':
const caseSocket = "case 'socket':\n" + chart1 + "\n" + chart2;
content = content.replace("case 'socket':", caseSocket);

// Replace Block 1 (Architecture)
content = content.replace(/\{`\`\`\`mermaid[\s\S]*?A\n\`\`\``\}/, '<Mermaid chart={socketArchChart} />');

// Replace Block 2 (Sequence)
content = content.replace(/\{`\`\`\`mermaid[\s\S]*?Message\)\n\`\`\``\}/, '<Mermaid chart={socketFlowChart} />');

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
