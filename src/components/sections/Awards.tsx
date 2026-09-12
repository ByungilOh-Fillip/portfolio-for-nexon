import { motion } from 'framer-motion';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

import awardNipa from '../../assets/award_nipa.jpg';
import awardCapstone from '../../assets/award_capstone.jpg';
import awardStartup from '../../assets/award_startup.jpg';
import awardMayor from '../../assets/award_mayor.jpg';
import awardPresident from '../../assets/award_president.jpg';
import nipa3 from '../../assets/nipa_event_3.jpg';
import nipa4 from '../../assets/nipa_event_4.jpg';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

export default function Awards() {
  const { t } = useLanguage();
  const [activeGallery, setActiveGallery] = useState<string[] | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const awards = [
    {
      title: '제5기 가상융합기술 아카데미 최우수상',
      org: '정보통신산업진흥원(NIPA)',
      date: '2026.08',
      img: awardNipa,
      gallery: [awardNipa, nipa3, nipa4]
    },
    {
      title: '의정부시장 표창장 (우수 봉사)',
      org: '의정부시',
      date: '2024.02',
      img: awardMayor
    },
    {
      title: '경민대학교 총장 표창장',
      org: '경민대학교',
      date: '2023.02',
      img: awardPresident
    },
    {
      title: '산학연협력 캡스톤 디자인 경진대회 장려상',
      org: '경민대학교',
      date: '2022.11',
      img: awardCapstone
    },
    {
      title: '교내 우수 창업동아리 경진대회 금상',
      org: '경민대학교',
      date: '2021.11',
      img: awardStartup
    }
  ];

  return (
    <section className="py-20 px-8 md:px-24 border-t border-game-card" id="awards">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-xl">05.</span> {t('수상 내역', 'Awards & Honors')}
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {awards.map((award, idx) => (
            <motion.div 
              key={idx} 
              className="group cursor-pointer flex flex-col"
              whileHover={{ y: -5 }}
              onClick={() => { setActiveGallery(award.gallery || [award.img]); setCurrentIndex(0); }}
            >
              <div className="bg-game-card rounded-lg border border-game-card/50 group-hover:border-game-accent/50 transition-colors overflow-hidden mb-3 aspect-[3/4] relative">
                <img src={award.img} alt={award.title} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-white text-sm font-bold border border-white px-3 py-1 rounded backdrop-blur-sm">확대보기</span>
                </div>
              </div>
              <h3 className="font-bold text-white text-sm leading-tight mb-1">{award.title}</h3>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-game-muted">{award.org}</span>
                <span className="text-xs font-mono text-game-accent">{award.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {activeGallery && (
        <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black/95 p-4 md:p-12">
          
          <button 
            onClick={() => setActiveGallery(null)}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-2 bg-black/50 rounded-full backdrop-blur-md transition-colors z-50"
          >
            <X size={24} />
          </button>

          <div className="relative w-full max-w-5xl h-full flex items-center justify-center">
            {activeGallery.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => prev === 0 ? activeGallery.length - 1 : prev - 1); }}
                className="absolute left-4 z-50 p-3 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/80 transition-colors"
              >
                <ChevronLeft size={24} />
              </button>
            )}

            <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
              <motion.img 
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                src={activeGallery[currentIndex]} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl" 
                alt="Enlarged Award" 
              />
            </div>

            {activeGallery.length > 1 && (
              <button 
                onClick={(e) => { e.stopPropagation(); setCurrentIndex(prev => prev === activeGallery.length - 1 ? 0 : prev + 1); }}
                className="absolute right-4 z-50 p-3 bg-black/50 text-white rounded-full backdrop-blur-md hover:bg-black/80 transition-colors"
              >
                <ChevronRight size={24} />
              </button>
            )}
          </div>

          {activeGallery.length > 1 && (
            <div className="flex gap-2 mt-6">
              {activeGallery.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${currentIndex === idx ? 'bg-game-accent w-8' : 'bg-white/30 hover:bg-white/60'}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </section>
  );
}
