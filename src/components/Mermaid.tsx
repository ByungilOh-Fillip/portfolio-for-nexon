import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

// A simple global queue to ensure Mermaid renders sequentially
let renderQueue = Promise.resolve();

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  const id = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let isMounted = true;

    const renderChart = async () => {
      try {
        // Wait for the previous render to finish
        const { svg: renderedSvg } = await mermaid.render(id.current, chart);
        if (isMounted) {
          setSvg(renderedSvg);
        }
      } catch (error) {
        console.error('Mermaid rendering error:', error);
        if (isMounted) {
          setErrorMsg(error instanceof Error ? error.message : String(error));
        }
      }
    };

    renderQueue = renderQueue.then(renderChart);

    return () => {
      isMounted = false;
    };
  }, [chart]);

  if (errorMsg) {
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
  );
}
