import { motion } from 'framer-motion';

import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: 'Programming',
      items: [
        { name: 'C++', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Java', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Kotlin', level: t('Experienced (경험)', 'Experienced') },
        { name: 'TypeScript', level: t('Experienced (경험)', 'Experienced') }
      ]
    },
    {
      category: 'Engine',
      items: [
        { name: 'Unreal Engine', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Blueprint', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'StateTree', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Animation', level: t('Experienced (경험)', 'Experienced') },
        { name: 'Material', level: t('Experienced (경험)', 'Experienced') }
      ]
    },
    {
      category: 'Systems',
      items: [
        { name: 'AI', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'HTTP / API / JSON', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Socket / WebSocket', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Database (SQLite / MySQL)', level: t('Proficient (능숙)', 'Proficient') }
      ]
    },
    {
      category: 'Collaboration',
      items: [
        { name: 'Git / GitHub', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Issue / PR Workflow', level: t('Proficient (능숙)', 'Proficient') },
        { name: 'Team Development', level: t('Proficient (능숙)', 'Proficient') }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'MCP', level: t('Experienced (경험)', 'Experienced') },
        { name: 'Automation', level: t('Experienced (경험)', 'Experienced') },
        { name: 'Developer Tools', level: t('Experienced (경험)', 'Experienced') }
      ]
    }
  ];

  return (
    <section className="py-20 px-8 md:px-24 border-t border-game-card" id="skills">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-xl">04.</span> {t('기술', 'Skills')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skillGroup, idx) => (
            <div key={idx} className="bg-game-card p-6 rounded-lg border border-game-card hover:border-game-muted transition-colors">
              <h3 className="text-xl font-bold mb-6 text-white border-b border-game-muted pb-2">{skillGroup.category}</h3>
              <ul className="space-y-4">
                {skillGroup.items.map((skill, i) => (
                  <li key={i} className="flex justify-between items-center">
                    <span className="text-game-muted">{skill.name}</span>
                    <span className={`text-xs font-mono px-2 py-1 rounded ${
                      skill.level === t('Proficient (능숙)', 'Proficient') ? 'bg-blue-900/50 text-blue-300' :
                      skill.level === t('Experienced (경험)', 'Experienced') ? 'bg-purple-900/50 text-purple-300' :
                      'bg-gray-800 text-gray-400'
                    }`}>
                      {skill.level}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
