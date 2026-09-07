import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false,
  theme: 'dark',
  securityLevel: 'loose',
});

export default function Mermaid({ chart }: { chart: string }) {
  const [svg, setSvg] = useState<string>('');
  const id = useRef(`mermaid-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const renderChart = async () => {
      try {
        const { svg: renderedSvg } = await mermaid.render(id.current, chart);
        setSvg(renderedSvg);
      } catch (error) {
        console.error('Mermaid rendering error:', error);
      }
    };
    renderChart();
  }, [chart]);

  return (
    <div 
      className="w-full flex justify-center overflow-x-auto" 
      dangerouslySetInnerHTML={{ __html: svg }} 
    />
  );
}
