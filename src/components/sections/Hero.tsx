import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Briefcase } from 'lucide-react';

import { useLanguage } from '../../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const [showToast, setShowToast] = useState(false);

  const handleCopyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText('dhquddlf5@gmail.com').then(() => {
      setShowToast(true);
      setTimeout(() => setShowToast(false), 2000);
    });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center items-start px-8 md:px-24 py-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-game-accent font-mono mb-4 text-lg md:text-xl">
          {t('탄탄한 기초 위에 확장성 있는 시스템을 설계하는', 'Designing scalable systems on a solid foundation,')}
        </h2>
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-white">Game Programmer.</h1>
        <h3 className="text-3xl md:text-4xl text-game-muted font-bold mb-8">
          {t('데이터 주도 설계와 네트워크 동기화에 집중합니다.', 'Focused on Data-Driven Design & Network Synchronization.')}
        </h3>
        
        <p className="text-game-muted max-w-2xl text-lg mb-12 leading-relaxed">
          {t('Unreal Engine 5와 C++ 기반의 게임 클라이언트 개발에 주력하고 있습니다. 단순한 하드코딩을 지양하고 확장성 있는 게임플레이 아키텍처를 고민하며, 멀티플레이어 환경에서의 상태 동기화나 복잡한 시스템 분리 같은 깊이 있는 기술적 챌린지를 즐깁니다.', 'I specialize in game client development using Unreal Engine 5 and C++. I avoid simple hardcoding in favor of thinking through scalable gameplay architectures, and I thoroughly enjoy deep technical challenges such as state synchronization in multiplayer environments and separating complex systems.')}
        </p>

        <div className="flex gap-6">
          <a href="https://github.com/ByungilOh-Fillip" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-game-muted hover:text-white transition-colors cursor-pointer">
            <Briefcase size={24} />
            <span>GitHub</span>
          </a>
          <button onClick={handleCopyEmail} className="flex items-center gap-2 text-game-muted hover:text-white transition-colors cursor-pointer">
            <Mail size={24} />
            <span>Contact</span>
          </button>
        </div>
      </motion.div>

      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, x: '-50%' }}
            animate={{ opacity: 1, y: 0, x: '-50%' }}
            exit={{ opacity: 0, y: 50, x: '-50%' }}
            className="fixed bottom-10 left-1/2 flex items-center gap-2 bg-game-accent text-white px-6 py-3 rounded-full shadow-lg z-[100] font-bold"
          >
            <Mail size={18} />
            {t('이메일 주소가 복사되었습니다!', 'Email address copied!')}
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
