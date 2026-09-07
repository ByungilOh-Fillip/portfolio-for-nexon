import { motion } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';

import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-game-accent font-mono mb-4">{t('안녕하세요, 저는', 'Hello, I am')}</h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Game Programmer.</h1>
        <h3 className="text-3xl md:text-5xl text-game-muted font-bold mb-8">
          {t('시스템을 설계하고, 문제를 해결합니다.', 'Building systems, solving problems.')}
        </h3>
        
        <p className="text-game-muted max-w-2xl text-lg mb-12">
          {t('C++과 언리얼 엔진(Unreal Engine)을 전문으로 다룹니다. 견고한 게임플레이 시스템, AI, 네트워크 아키텍처를 설계하며 팀원들과 협업하여 가상 세계를 완성합니다.', 'I specialize in C++ and Unreal Engine. My focus is on developing robust Gameplay Systems, AI, and Network Architecture, collaborating effectively to bring virtual worlds to life.')}
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/ByungilOh-Fillip" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-game-muted hover:text-white transition-colors">
            <Briefcase size={24} />
            <span>GitHub</span>
          </a>
          <a href="mailto:your.email@example.com" className="flex items-center gap-2 text-game-muted hover:text-white transition-colors">
            <Mail size={24} />
            <span>Contact</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
