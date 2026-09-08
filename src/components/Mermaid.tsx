import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

// A global queue to ensure Mermaid renders sequentially
let renderQueue = Promise.resolve();

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const [errorMsg, setErrorMsg] = useState<string>('');
  // Generate a strictly unique ID to prevent DOM conflicts during rapid re-renders
  const id = useRef(`mermaid-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    let isMounted = true;
    
    // Clear previous errors when chart changes
    setErrorMsg('');

    const enqueueRender = (retryCount = 0) => {
      const task = async () => {
        // If unmounted while waiting in queue, skip doing work
        if (!isMounted) return;

        try {
          const { svg: renderedSvg } = await mermaid.render(id.current, chart);
          
          if (isMounted) {
            setSvg(renderedSvg);
            setErrorMsg('');
          }
        } catch (error) {
          // If it's a transient error and we haven't exceeded retries
          if (retryCount < 1 && isMounted) {
            // Wait briefly to allow DOM to settle
            await new Promise(resolve => setTimeout(resolve, 200));
            // Re-enqueue this chart rendering to the end of the global queue
            if (isMounted) enqueueRender(retryCount + 1);
            return;
          }

          console.error('Mermaid rendering error:', error);
          if (isMounted) {
            setErrorMsg(error instanceof Error ? error.message : String(error));
          }
        }
      };

      // Chain the task onto the global queue
      renderQueue = renderQueue.then(task);
    };

    // Start the first attempt
    enqueueRender(0);

    return () => {
      isMounted = false;
      // In case Mermaid injected any rogue style/svg elements with this ID, attempt to clean up
      const element = document.getElementById(id.current);
      if (element) element.remove();
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
