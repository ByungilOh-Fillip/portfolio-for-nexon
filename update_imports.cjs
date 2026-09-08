const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

content = content.replace(
  "import { useEffect } from 'react';",
  "import { useEffect, useState } from 'react';"
);

content = content.replace(
  "import palworldIssueImg from '../assets/palworld_issue.png';",
  "import palworldIssueImg from '../assets/palworld_issue.png';\nimport materialHelperSandboxImg from '../assets/material_helper_sandbox.png';"
);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated imports");
