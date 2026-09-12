import { motion } from 'framer-motion';

import { useLanguage } from '../../contexts/LanguageContext';

export default function OtherWorks() {
  const { t } = useLanguage();
  
  const works = [
    { name: 'Algorithm', tech: 'JAVA/C++', desc: t('문제 해결 능력을 위한 알고리즘 학습 및 풀이', 'Algorithm study and problem-solving practice') },
    { name: 'CS Study', tech: 'OS / Network / DB', desc: t('컴퓨터 공학 기초 개념 심화 학습', 'In-depth study of computer science fundamentals') },
    { name: 'GPS Attendance', tech: 'Spring, MyBatis', desc: t('위치 기반 출석 체크 애플리케이션 프로토타입', 'Location-based attendance check application prototype') },
    { name: 'SIGNAL-BUDDY', tech: 'Programmers BE DevCourse', desc: t('과정 내 파이널 프로젝트 발표 영상', 'Team project and demo video completed during the DevCourse'), link: 'https://youtu.be/TKJ9lo2Jkq4?si=nEj4TWRdHN6iTvpy' },
    { name: 'Development Experiments', tech: 'Various', desc: t('다양한 기술 스택 R&D 및 최적화 테스트', 'Various tech stack R&D and optimization tests') },
  ];

  return (
    <section className="py-20 px-8 md:px-24 border-t border-game-card" id="other">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-xl">03.</span> {t('기타', 'Other Works')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {works.map((work, idx) => (
            <div key={idx} className="bg-game-card p-4 rounded border border-game-card/50 hover:border-game-muted/30 transition-colors">
              <h3 className="font-bold text-white text-lg flex items-center gap-2">
                {work.name}
                {work.link && (
                  <a href={work.link} target="_blank" rel="noopener noreferrer" className="text-game-accent hover:text-white transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </h3>
              <span className="text-xs font-mono text-game-accent my-2 inline-block">{work.tech}</span>
              <p className="text-sm text-game-muted">{work.desc}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
