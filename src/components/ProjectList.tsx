import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';

export default function ProjectList() {
  const { t } = useLanguage();

  const projects = [
    {
      id: 'aire',
      number: '01',
      title: 'AIRE',
      subtitle: t("AI Companion 기반 Open-World Survival Game. Unreal Engine 5.8 기반.", "AI Companion based Open-World Survival Game, built on Unreal Engine 5.8."),
      focus: ['AI', 'AI Server', 'Gameplay', 'StateTree'],
      thumbnail: '', // Add image path here if available
    },
    {
      id: 'palworld',
      number: '02',
      title: 'PalWorld',
      subtitle: t("Unreal Engine 기반 Multiplayer 프로젝트를 통해 Client / Server 구조와 팀 개발 workflow를 경험한 프로젝트.", "An Unreal Engine-based Multiplayer project focused on Client/Server architecture and team development workflows."),
      focus: ['Multiplayer', 'Replication', 'RPC', 'Network Debugging'],
      thumbnail: '',
    },
    {
      id: 'socket',
      number: '03',
      title: 'Socket TODO Server',
      subtitle: t("Java를 활용한 Client/Server 통신 및 CS 기초 역량 증명", "Demonstration of CS fundamentals and Client/Server communication using Java."),
      focus: ['Java', 'Socket', 'CS fundamentals'],
      thumbnail: '',
    },
    
    {
      id: 'material',
      number: '04',
      title: 'Material Helper',
      subtitle: t("반복적인 개발 작업을 줄이기 위해 Material 관련 workflow를 자동화한 developer tool.", "A developer tool that automated Material workflows to reduce repetitive tasks."),
      focus: ['Tool Development', 'Automation', 'Developer Productivity'],
      thumbnail: '',
    }
  ];

  return (
    <section className="py-20 px-8 md:px-24 border-t border-game-card" id="projects">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-xl">02.</span> {t('프로젝트', 'Projects')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link to={`/project/${project.id}`} key={project.id} className="block group">
              <div className="bg-game-card rounded-xl border border-game-card/50 hover:border-game-accent/50 transition-colors overflow-hidden h-full flex flex-col">
                {project.thumbnail && (
                  <div className="w-full h-48 bg-black/50 overflow-hidden relative">
                    <img src={project.thumbnail} alt={project.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                )}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-game-accent transition-colors">{project.title}</h3>
                    <span className="text-game-accent font-mono text-sm">{project.number}</span>
                  </div>
                  <p className="text-game-muted mb-6 flex-grow">{project.subtitle}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.focus.map((tag) => (
                      <span key={tag} className="text-xs font-mono bg-game-dark text-game-muted px-2 py-1 rounded border border-game-muted/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-game-accent font-bold transition-transform duration-300 group-hover:translate-x-2">
                    {t('프로젝트 상세 보기', 'Click to View Detail')} <span>➔</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
