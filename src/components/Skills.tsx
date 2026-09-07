import { motion } from 'framer-motion';

import { useLanguage } from '../contexts/LanguageContext';

export default function Skills() {
  const { t } = useLanguage();

  const skillsData = [
    {
      category: 'Programming',
      items: [
        { name: 'C++', level: t('구현', 'Implemented') },
        { name: 'Java', level: t('구현', 'Implemented') },
        { name: 'Kotlin', level: t('프로젝트 활용', 'Used in project') },
        { name: 'TypeScript', level: t('프로젝트 활용', 'Used in project') }
      ]
    },
    {
      category: 'Engine',
      items: [
        { name: 'Unreal Engine', level: t('구현', 'Implemented') },
        { name: 'Blueprint', level: t('구현', 'Implemented') },
        { name: 'StateTree', level: t('구현', 'Implemented') },
        { name: 'Animation', level: t('프로젝트 활용', 'Used in project') },
        { name: 'Material', level: t('프로젝트 활용', 'Used in project') }
      ]
    },
    {
      category: 'Systems',
      items: [
        { name: 'AI', level: t('구현', 'Implemented') },
        { name: 'HTTP / API / JSON', level: t('구현', 'Implemented') },
        { name: 'Socket / WebSocket', level: t('구현', 'Implemented') },
        { name: 'Database (MySQL)', level: t('이해도 / 학습', 'Understanding') }
      ]
    },
    {
      category: 'Collaboration',
      items: [
        { name: 'Git / GitHub', level: t('구현', 'Implemented') },
        { name: 'Issue / PR Workflow', level: t('구현', 'Implemented') },
        { name: 'Team Development', level: t('구현', 'Implemented') }
      ]
    },
    {
      category: 'Tools',
      items: [
        { name: 'MCP', level: t('프로젝트 활용', 'Used in project') },
        { name: 'Automation', level: t('프로젝트 활용', 'Used in project') },
        { name: 'Developer Tools', level: t('프로젝트 활용', 'Used in project') }
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
          <span className="text-game-accent font-mono text-xl">02.</span> {t('기술', 'Skills')}
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
                      skill.level === t('구현', 'Implemented') ? 'bg-blue-900/50 text-blue-300' :
                      skill.level === t('프로젝트 활용', 'Used in project') ? 'bg-purple-900/50 text-purple-300' :
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
