const fs = require('fs');
let content = fs.readFileSync('src/components/Mermaid.tsx', 'utf8');

content = content.replace(
  "const [svg, setSvg] = useState<string>('');",
  "const [svg, setSvg] = useState<string>('');\n  const [errorMsg, setErrorMsg] = useState<string>('');"
);

content = content.replace(
  "console.error('Mermaid rendering error:', error);",
  "console.error('Mermaid rendering error:', error);\n        setErrorMsg(error.message || String(error));"
);

const returnTarget = `  return (
    <div 
      className="w-full flex justify-center overflow-x-auto" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );`;

const returnReplacement = `  if (errorMsg) {
    return (
      <div className="w-full p-4 bg-red-900/30 border border-red-500 rounded text-red-200 text-xs font-mono overflow-auto">
        <strong>Mermaid Error:</strong><br/>
        {errorMsg}
        <pre className="mt-2 text-[10px] text-gray-400">{chart}</pre>
      </div>
    );
  }

  return (
    <div 
      className="w-full flex justify-center overflow-x-auto" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );`;

content = content.replace(returnTarget, returnReplacement);
fs.writeFileSync('src/components/Mermaid.tsx', content, 'utf8');
console.log("Updated Mermaid to show errors on screen.");
