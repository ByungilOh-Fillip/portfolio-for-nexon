import { motion } from 'framer-motion';
import { Target, Search, Wrench, Bug, CheckCircle2, PlayCircle, Bot } from 'lucide-react';

import { useLanguage } from '../../contexts/LanguageContext';

export default function About() {
  const { t } = useLanguage();
  return (
    <section className="py-20 px-8 md:px-24 border-t border-game-card" id="about">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-4 text-white">
          <span className="text-game-accent font-mono text-xl">01.</span> {t('소개 및 철학', 'About & Philosophy')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('저는 이런 개발자입니다', 'Who I am')}</h3>
            <p className="text-game-muted text-lg leading-relaxed mb-6">
              {t('탄탄한 기본기 위에 확장성 있는 시스템을 설계하는 것을 목표로 하는 클라이언트 프로그래머입니다. 단순히 표면적인 버그를 덮는 것에 그치지 않고, 문제가 발생하면 언리얼 엔진의 내부 소스 코드(Engine Code)를 직접 분석하여 근본적인 원인을 파악하고 해결하는 과정을 중요하게 생각합니다.', 'I am a Client Programmer aiming to design scalable systems on a solid foundation. Rather than simply patching superficial bugs, when issues arise, I value the process of diving directly into Unreal Engine internal source code to identify and resolve the root cause.')}
            </p>
            <h3 className="text-2xl font-bold mb-4 mt-8 text-white">{t('AI 보조 개발 (AI-Assisted Development)', 'AI-Assisted Development')}</h3>
            <div className="bg-game-card p-6 rounded-lg border border-game-card">
              <p className="text-game-muted mb-4">{t('생산성 향상을 위해 생성형 AI 도구를 적극적으로 활용하되, 최종 로직에 대한 책임은 온전히 개발자가 져야 한다고 생각합니다.', 'I actively leverage Generative AI tools to enhance productivity while taking full responsibility for the final logic.')}</p>
              <div className="flex items-center gap-2 text-sm font-mono text-game-accent flex-wrap">
                <span className="flex items-center gap-1"><Bug size={16}/> Problem</span> &rarr;
                <span className="flex items-center gap-1"><Bot size={16}/> AI Investigation</span> &rarr;
                <span className="flex items-center gap-1"><Wrench size={16}/> Implementation</span> &rarr;
                <span className="flex items-center gap-1"><Search size={16}/> Human Validation</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">{t('문제 해결 철학', 'Problem-Solving Philosophy')}</h3>
            <p className="text-game-muted mb-8">{t('게임 개발 중 발생하는 복잡한 문제를 해결하는 접근 방식입니다.', 'My approach to complex issues in game development.')}</p>
            
            <div className="flex flex-col gap-4">
              {[
                { icon: <Target className="text-red-400"/>, title: "Reproduce", desc: t('이슈를 일관성 있게 재현합니다.', "Consistently trigger the issue.") },
                { icon: <Search className="text-yellow-400"/>, title: "Narrow Down", desc: t('문제가 발생한 시스템/모듈을 좁혀냅니다.', "Isolate the problematic system/module.") },
                { icon: <Bug className="text-orange-400"/>, title: "Find Root Cause", desc: t('논리적 결함이나 데이터 오류의 근본 원인을 파악합니다.', "Identify the logical flaw or data error.") },
                { icon: <Wrench className="text-blue-400"/>, title: "Implement", desc: t('확장성 있고 견고한 수정안을 개발합니다.', "Develop a robust, scalable fix.") },
                { icon: <CheckCircle2 className="text-green-400"/>, title: "Validate", desc: t('독립된 환경에서 수정 사항을 검증합니다.', "Verify in isolated environment.") },
                { icon: <PlayCircle className="text-purple-400"/>, title: "Test", desc: t('인게임 테스트를 통해 사이드 이펙트를 확인합니다.', "In-game testing for side effects.") }
              ].map((step, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-game-card p-4 rounded-lg">
                  <div className="mt-1">{step.icon}</div>
                  <div>
                    <h4 className="font-bold text-white">{step.title}</h4>
                    <p className="text-sm text-game-muted">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
