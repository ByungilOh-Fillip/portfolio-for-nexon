const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const regex1 = /<div className="bg-black\/80 p-6 rounded-lg border border-game-muted\/20 flex flex-col justify-center">[\s\S]*?<\/div>/;
content = content.replace(regex1, `<div className="bg-black/80 p-6 rounded-lg border border-game-muted/20 flex flex-col justify-center items-center">
                  <h5 className="font-mono text-xs text-game-accent mb-4 w-full">▼ Architecture Flow (Mermaid)</h5>
                  <Mermaid chart={socketArchChart} />
                </div>`);

const regex2 = /<pre className="text-gray-300 font-mono text-xs overflow-x-auto whitespace-pre">[\s\S]*?<\/pre>/;
content = content.replace(regex2, `<Mermaid chart={socketFlowChart} />`);

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
