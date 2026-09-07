const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');
content = content.replace("import ProjectSection from '../components/ProjectSection';", 
    "import ProjectSection from '../components/ProjectSection';\nimport Mermaid from '../components/Mermaid';");
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');

// Fix the React unused import in Mermaid.tsx
let mermaidContent = fs.readFileSync('src/components/Mermaid.tsx', 'utf8');
mermaidContent = mermaidContent.replace("import React, { useEffect, useRef, useState } from 'react';", "import { useEffect, useRef, useState } from 'react';");
fs.writeFileSync('src/components/Mermaid.tsx', mermaidContent, 'utf8');
