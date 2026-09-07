import { motion } from 'framer-motion';

const ProjectSection = ({ id, number, title, subtitle, focus, children }: any) => (
  <section className="py-20 px-8 md:px-24 border-t border-game-card" id={id}>
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="mb-12">
        <h2 className="text-4xl font-bold mb-4 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-2xl">{number}.</span> {title}
        </h2>
        {subtitle && <p className="text-xl text-game-muted mb-4">{subtitle}</p>}
        {focus && (
          <div className="flex flex-wrap gap-2 mt-4">
            {focus.map((tag: string) => (
              <span key={tag} className="text-xs font-mono bg-game-card text-game-accent px-3 py-1 rounded-full border border-game-muted/30">
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="space-y-16">
        {children}
      </div>
    </motion.div>
  </section>
);

const CaseStudy = ({ title, intro, result, contribution, problem, solution, diagram }: any) => (
  <div className="bg-game-card rounded-xl p-8 border border-game-card/50 hover:border-game-muted/50 transition-colors">
    <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{title}</h3>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <div>
          <h4 className="text-sm font-mono text-game-accent mb-2 uppercase">Introduction</h4>
          <p className="text-game-muted leading-relaxed">{intro}</p>
        </div>
        
        <div>
          <h4 className="text-sm font-mono text-game-accent mb-2 uppercase">My Contribution</h4>
          <ul className="list-disc list-inside text-game-muted space-y-1">
            {contribution.map((item: string, i: number) => <li key={i}>{item}</li>)}
          </ul>
        </div>
        
        <div className="bg-game-dark p-6 rounded-lg border border-red-900/30">
          <h4 className="text-sm font-mono text-red-400 mb-2 uppercase">Problem</h4>
          <p className="text-game-muted mb-4">{problem}</p>
          <h4 className="text-sm font-mono text-green-400 mb-2 uppercase">Solution</h4>
          <p className="text-game-muted">{solution}</p>
        </div>
      </div>

      <div className="flex flex-col space-y-4">
        <div>
          <h4 className="text-sm font-mono text-game-accent mb-4 uppercase">Final Result / Architecture</h4>
          <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 font-mono text-sm text-game-muted whitespace-pre-wrap flex items-center justify-center min-h-[200px]">
            {diagram}
          </div>
        </div>
        {result && (
          <div className="text-sm text-game-muted bg-game-dark p-4 rounded-lg border border-game-muted/20">
            {result}
          </div>
        )}
      </div>
    </div>
  </div>
);

export { ProjectSection, CaseStudy };
