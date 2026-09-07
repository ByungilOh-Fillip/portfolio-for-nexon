import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ProjectSection } from '../components/ProjectSection';
import Mermaid from '../components/Mermaid';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect } from 'react';
import erdMemoryImg from '../assets/erd_memory.png';
import aiCommandGatewayImg from '../assets/ai_command_gateway.png';
import dddWeaponImg from '../assets/ddd_weapon.png';
import dddItemImg from '../assets/ddd_item.png';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderProjectContent = () => {
    switch(id) {
      case 'aire':
        const imgAireHitDetection = "";
        const imgAireAnimNotify = "";
        const imgAireDebug = "";

        return (
          <ProjectSection 
            id="project-aire" 
            number="03" 
            title="AIRE" 
            subtitle={t("AI Companion 기반 Open-World Survival Game", "AI Companion based Open-World Survival Game")}
            focus={['Unreal Engine 5.8', 'C++', 'StateTree', 'GAS', 'AI Perception', 'Network / DB']}
          >
            {/* 1. 메인 썸네일/영상 */}
            <div className="mb-8 w-full h-64 md:h-[500px] bg-black border border-game-card rounded-xl flex items-center justify-center relative overflow-hidden group">
              {/* Award Badge Overlay */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-gradient-to-r from-yellow-600/90 to-yellow-500/90 border border-yellow-400 text-white px-4 py-2 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] backdrop-blur-sm flex items-center gap-2 pointer-events-none">
                <span className="text-xl drop-shadow-md">🏆</span>
                <span className="font-bold text-sm md:text-base tracking-wide drop-shadow-md">{t("최우수상 (정보통신산업진흥원장상)", "Grand Prize (NIPA Director's Award)")}</span>
              </div>
              <iframe 
                className="w-full h-full"
                src="https://www.youtube.com/embed/qQ4hkFAed04?autoplay=1&mute=1&loop=1&playlist=qQ4hkFAed04" 
                title="AIRE Gameplay Video"
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-game-accent mb-2">{t("어떤 프로젝트인가요?", "What is this project?")}</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("Unreal Engine 5.8 기반의 오픈월드 생존 게임으로, 플레이어와 능동적으로 상호작용하는 AI Companion 'MAKO'가 핵심인 프로젝트입니다. 채집, 제작, 사냥, 전투 등의 생존 요소뿐만 아니라, AI와의 실시간 대화, AI 직접 조작, 그리고 AI에게 채집이나 제작을 요청하는 심도 있는 상호작용이 가능합니다.", "An Unreal Engine 5.8 open-world survival game centered around 'MAKO', an active AI Companion. It features survival elements like gathering, crafting, hunting, and combat, alongside deep interactions such as real-time AI conversation, direct AI control, and delegating gathering/crafting tasks to the AI.")}
                </p>
                <p className="text-game-muted text-sm leading-relaxed">
                  <strong className="text-white">{t("멀티플랫폼 연동:", "Multi-platform Integration:")}</strong> {t("게임 내부뿐만 아니라 카카오톡, 디스코드, 자체 제작 웹페이지를 통해서도 게임 밖에서 AI와 대화하고 명령을 내릴 수 있도록 연동되어 있습니다.", "Interactions aren't limited to in-game; you can chat with and send commands to the AI externally via KakaoTalk, Discord, and a custom web page.")}
                </p>
              </div>

              <div className="flex flex-col gap-4">
                <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                  <div className="flex-1">
                    <span className="text-game-accent font-mono block mb-1">Team Size</span>
                    <span className="text-white">3명 (3 Members)</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                    <span className="text-white">UE 5.8, FastAPI, LangGraph, SQLite</span>
                  </div>
                  <div className="flex-1">
                    <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                    <a href="https://github.com/AIREProject/AI_RE" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                  </div>
                </div>
                {/* Award Banner */}
                <div className="bg-gradient-to-r from-yellow-900/30 to-game-dark border border-yellow-600/30 p-4 rounded flex items-center gap-4">
                  <div className="bg-yellow-500/20 w-10 h-10 rounded-full flex items-center justify-center border border-yellow-500/50">
                    <span className="text-xl">🏆</span>
                  </div>
                  <div>
                    <span className="text-yellow-500 font-mono text-xs block mb-1">Award / Honor</span>
                    <strong className="text-white text-sm md:text-base">{t("최우수상 - 정보통신산업진흥원장상", "Grand Prize - NIPA Director's Award")}</strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 2. 담당 역할 및 기여도 (My Role & Contributions) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 담당 역할 및 기여도", "2. My Role & Contributions")}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                <div>
                  <h4 className="font-bold text-white mb-2">{t("핵심 담당 역할 (Role)", "Core Role")}</h4>
                  <p className="text-game-accent text-sm mb-4">
                    {t("클라이언트 로직 전담, UI/UX, DB 설계, 레벨 디자인, 영상 제작, 프로젝트 관리", "Client Logic, UI/UX, DB Design, Level Design, Video Production, PM")}
                  </p>
                  
                  <h4 className="font-bold text-white mb-2">{t("기여도 (Contribution)", "Contribution")}</h4>
                  <p className="text-game-muted text-sm mb-4">
                    {t("Unreal Engine 클라이언트 아키텍처 및 게임플레이 로직 100% 구현", "Implemented 100% of Unreal Engine client architecture and gameplay logic")}
                  </p>

                  <h4 className="font-bold text-white mb-2">{t("사용 기술 (My Tech Stack)", "My Tech Stack")}</h4>
                  <p className="text-game-muted text-sm">
                    C++, Unreal Engine 5.8, StateTree, GAS, UMG, JSON
                  </p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-game-accent mb-4">{t("내가 직접 구현한 핵심 시스템", "Systems I Actually Implemented")}</h4>
                  <ul className="list-disc list-inside text-game-muted text-sm space-y-3">
                    <li><strong className="text-white">Player & Combat:</strong> GAS 기반 전투, 연속 타격 판정, 인벤토리/제작 시스템 구현</li>
                    <li><strong className="text-white">Companion AI:</strong> StateTree & AI Perception 기반 AI 아키텍처 설계 및 행동 패턴 구현</li>
                    <li><strong className="text-white">UI / UX:</strong> UMG를 활용하여 플레이어 상태, 인벤토리, 제작 시스템 등 핵심 게임플레이 HUD 및 인터페이스 구현 (AI 상호작용 UI 제외)</li>
                    <li><strong className="text-white">AI Communication:</strong> Backend 연동 시스템 구축(JSON) 및 장기기억을 위한 DB 스키마 설계</li>
                    <li><strong className="text-white">AI-Assisted Workflow:</strong> Hunyuan(모델), Seedance 2.5(트레일러 영상) 활용 및 LLM 기반 디버깅·문서화·기능 구현 방법론 탐색을 통한 생산성 극대화</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. AI Communication & Memory */}{/* 3. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">3. AI Communication & DB Schema (Long-term Memory)</h4>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm mb-2">
                  {t("AI Companion이 플레이어 및 게임 세상과 원활하게 커뮤니케이션하고, 지속적인 관계를 형성하기 위해 필수적인 데이터 통신 구조와 DB를 설계한 과정입니다.", "The process of designing the essential data communication structure and database required for the AI Companion to smoothly communicate with the player and form a continuous relationship.")}
                </p>
                <p className="text-game-muted text-sm">
                  {t("위 과정은 AI 담당자와 소통하기 위해 ERD Cloud에 메모를 남겨서 각 DB의 목적과 내용을 설명드렸습니다.", "I communicated this process to the AI developer by leaving detailed notes on ERD Cloud to explain the purpose and content of each DB table.")}
                </p>
              </div>

              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-6">
                <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("AI가 이전 플레이 경험이나 대화 맥락을 기억하지 못해 '반려자'로서의 몰입감이 단절되는 문제가 있었습니다.", "AI could not remember past gameplay or chat history, breaking the immersion of a 'Companion'.")}</p>
                <p className="mb-3"><strong className="text-green-400">Solution:</strong> {t("단기 기억(Chat Buffer), 장기 기억(Episodic Memory), 그리고 오프라인 작업(Offline Task)을 명확히 분류하는 DB 스키마(ERD)를 직접 설계했습니다.", "Designed a robust DB schema (ERD) categorizing Short-term (Chat Buffer), Long-term (Episodic Memory), and Offline Tasks.")}</p>
                <p><strong className="text-blue-400">Communication:</strong> {t("벡터 데이터, 위치 좌표(JSON), RAG 처리 등 장기기억 보장에 필요한 핵심 요구사항을 정의하고, 이를 기반으로 AI/백엔드 담당자와 원활하게 소통하여 구조를 확립했습니다.", "Defined core requirements like vector data, location coordinates, and RAG processing, and effectively communicated these specifications to the AI/Backend team.")}</p>
              </div>
              
              <pre className="text-game-accent font-mono text-xs mb-8 bg-black/30 p-4 rounded border border-game-muted/10 overflow-x-auto">
{`Game Event / Message -> Memory Processing (Backend) -> SQLite (Designed Schema) -> Context Retrieval -> AI Response`}
              </pre>

              <a 
                href="https://www.erdcloud.com/d/F8ByrHqChxHXfpqao" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full h-64 md:h-[500px] bg-black border border-game-muted/20 rounded-xl overflow-hidden flex items-center justify-center relative group block"
              >
                <img src={erdMemoryImg} alt="Memory ERD" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                  <span className="text-white font-bold text-lg font-mono tracking-wide">Click to view on ERDCloud</span>
                </div>
              </a>
            </div>

            
            {/* 4. AI Command Gateway */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">4. AI Command Gateway</h4>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm mb-2">
                  {t("LLM의 환각(Hallucination)으로부터 게임 시스템의 안정성을 보호하기 위한 검증 계층을 설계한 과정입니다.", "The process of designing a validation layer to protect game stability from LLM hallucinations.")}
                </p>
              </div>

              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-6">
                <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("LLM이 게임 상태를 무시하고 불가능한 명령(환각)을 생성하여 게임 안정성을 해칠 수 있었습니다.", "LLMs generated impossible commands (hallucinations) ignoring game state, breaking stability.")}</p>
                <p><strong className="text-green-400">Solution:</strong> {t("LLM의 출력은 실제 게임 명령이 아닌 Command Candidate로만 취급하고, 언리얼 엔진 내부에서 거리, 대상, 인벤토리, 중복 여부 등을 재검증하는 'Gateway 구조'를 설계하여 안정성과 분리를 이뤄냈습니다.", "Treated LLM outputs strictly as candidates and built a Gateway in Unreal to re-validate distance, target, inventory, etc., ensuring stability and separation of concerns.")}</p>
              </div>

              <div className="w-full bg-white/5 border border-game-muted/20 rounded-xl overflow-hidden flex items-center justify-center">
                <img src={aiCommandGatewayImg} alt="AI Command Gateway" className="w-full h-auto object-contain p-4" />
              </div>
            </div>

            {/* 5. Data-Driven Gameplay */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">5. Data-Driven Gameplay (DDD)</h4>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm mb-2">
                  {t("새로운 무기나 아이템을 추가할 때 빌드 없이 확장 가능하도록 데이터 기반 구조를 설계했습니다.", "Designed a data-driven structure to allow adding new weapons or items without rebuilding.")}
                </p>
              </div>

              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-6">
                <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("새로운 무기나 콘텐츠를 추가할 때마다 방대한 코드 수정과 빌드 작업이 반복되었습니다.", "Adding new weapons or content required repetitive code modification and builds.")}</p>
                <p><strong className="text-green-400">Solution:</strong> {t("DataTable과 DataAsset 기반으로 Weapon Definition 및 Item Definition을 구성하여 게임 콘텐츠와 실행 로직을 완전히 분리했습니다. 빌드 없이 에디터 내에서 데이터 설정만으로 콘텐츠를 확장 가능하게 했습니다.", "Separated logic and content by creating Definitions via DataTable/DataAsset. Allowed content expansion purely through data configuration in the editor without rebuilding.")}</p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="w-full bg-white/5 border border-game-muted/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6">
                  <span className="text-game-accent font-mono text-xs mb-4 text-left w-full">▼ Weapon Data-Driven Architecture</span>
                  <img src={dddWeaponImg} alt="Weapon DDD" className="w-full h-auto object-contain" />
                </div>
                <div className="w-full bg-white/5 border border-game-muted/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6">
                  <span className="text-game-accent font-mono text-xs mb-4 text-left w-full">▼ Item & Recipe Data-Driven Architecture</span>
                  <img src={dddItemImg} alt="Item DDD" className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>

            {/* 6 & 7. Combat & Animation */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-6">6 & 7. Combat, Hit Detection & Animation System</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  {imgAireHitDetection && (
                  <div className="w-full bg-black border border-game-muted/20 rounded overflow-hidden mb-4">
                    <img src={imgAireHitDetection} alt="Continuous Hit Detection" className="w-full h-auto object-contain" />
                  </div>
                )}
                  <h5 className="font-bold text-game-accent mb-2">Continuous Hit Detection</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("빠르게 움직이는 무기의 경우, 단일 Collision 검사만으로는 프레임 간격 사이에서 Hit 판정이 누락되는 문제가 발생했습니다.", "Fast-moving weapons missed hit detections between frames when using a single collision check.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("이전 프레임과 현재 프레임의 무기 Base/Tip 위치를 보간(Interpolation)하고, Substep 기반의 연속적인 Capsule Sweep을 통해 실제 무기 이동 궤적 전체를 누락 없이 판정하도록 구현했습니다.", "Interpolated previous and current weapon positions and used continuous Capsule Sweep to calculate the entire trajectory, eliminating missed hits.")}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  {imgAireAnimNotify && (
                  <div className="w-full bg-black border border-game-muted/20 rounded overflow-hidden mb-4">
                    <img src={imgAireAnimNotify} alt="AnimNotify State & Montage" className="w-full h-auto object-contain" />
                  </div>
                )}
                  <h5 className="font-bold text-game-accent mb-2">Animation-Logic Sync</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("공격 연출 애니메이션과 실제 타격 판정/콤보 로직의 타이밍이 어긋나는 경우가 빈번했습니다.", "Animation visuals often desynchronized with actual hit detection and combo logic timing.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("Linked Anim Layer와 Montage로 유연한 전환을 확보하고, AnimNotify State를 커스텀하여 애니메이션 툴 내에서 시각적으로 Combo Window와 Attack Timing을 제어함으로써 코드와 연출을 완벽히 동기화했습니다.", "Customized AnimNotify States within Montages to visually control combo windows and attack timing inside the animation editor, perfectly syncing logic with visuals.")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 8. Problem Solving */}
            <div className="bg-game-dark p-8 rounded-xl border border-red-900/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h4 className="text-xl font-bold text-white mb-4">8. 디버깅 및 문제 해결 (StateTree Evaluator 노출 이슈)</h4>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1">
                  <p className="text-game-muted text-sm mb-4">
                    <strong className="text-red-400">Problem:</strong> C++로 정상 컴파일된 StateTree Evaluator가 에디터에 노출되지 않음.
                  </p>
                  <p className="text-game-muted text-sm mb-4">
                    <strong className="text-yellow-400">Analysis:</strong> Reflection 시스템과 빌드 과정을 역추적하여, 사용되지 않는 클래스로 오인돼 <strong>Linker Optimization 단계에서 제거되는 현상</strong>임을 규명함.
                  </p>
                  <p className="text-game-muted text-sm">
                    <strong className="text-green-400">Solution:</strong> 빌드 과정에서 강제로 클래스를 유지하여 에디터 Reflection 시스템에 정상적으로 등록되도록 구조 개선.
                  </p>
                </div>
                {imgAireDebug && (
                  <div className="flex-1 bg-black/50 border border-game-muted/20 rounded overflow-hidden flex items-center justify-center">
                    <img src={imgAireDebug} alt="Debugging Before/After" className="w-full h-auto object-contain" />
                  </div>
                )}
              </div>
            </div>

            {/* 9. Competency Summary */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 text-center mb-12">
              <h4 className="text-xl font-bold text-white mb-6">{t("9. 프로젝트를 통해 검증된 핵심 역량", "Key Competencies Demonstrated")}</h4>
              <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
                <span className="bg-blue-900/30 text-blue-300 px-4 py-2 rounded-full border border-blue-900/50">C++ Gameplay Logic</span>
                <span className="bg-purple-900/30 text-purple-300 px-4 py-2 rounded-full border border-purple-900/50">GAS & StateTree</span>
                <span className="bg-green-900/30 text-green-300 px-4 py-2 rounded-full border border-green-900/50">AI & Server Integration</span>
                <span className="bg-yellow-900/30 text-yellow-300 px-4 py-2 rounded-full border border-yellow-900/50">Data-Driven Design</span>
                <span className="bg-red-900/30 text-red-300 px-4 py-2 rounded-full border border-red-900/50">System Debugging & Optimization</span>
              </div>
            </div>

          </ProjectSection>
        );
case 'palworld':
        // 이미지 경로 변수 (이미지가 준비되면 여기에 경로를 입력하세요. 예: '/assets/palworld_issue.png')
        // 값이 없으면 화면에 렌더링되지 않습니다.
        const imgPalworldHero = ""; 
        const imgPalworldArch = ""; 
        const imgPalworldTag = ""; 
        const imgPalworldIssue = ""; 

        return (
          <ProjectSection 
            id="project-palworld" 
            number="04" 
            title="PalWorld" 
            subtitle={t("Unreal Engine 5 기반 Multiplayer Pal System 구현 프로젝트", "UE5 Multiplayer Pal System Implementation Project")}
            focus={['Unreal Engine 5', 'C++', 'Gameplay Tag', 'StateTree', 'Multiplayer / Replication']}
          >
            {/* 메인 썸네일/영상 (조건부 렌더링) */}
            {imgPalworldHero && (
              <div className="mb-8 w-full h-64 md:h-[500px] bg-black border border-game-card rounded-xl flex items-center justify-center relative overflow-hidden group">
                <img src={imgPalworldHero} alt="PalWorld Hero" className="w-full h-full object-cover" />
              </div>
            )}

            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-game-accent mb-2">{t("어떤 프로젝트인가요?", "What is this project?")}</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("Palworld를 참고하여 Unreal Engine 5에서 Pal Character, AI, 상태 관리, 데이터 구조 및 Multiplayer 환경을 구현한 팀 프로젝트입니다.", "A team project implementing Pal Character, AI, state management, data structures, and multiplayer environments in UE5, inspired by Palworld.")}
                  <br className="mb-2"/>
                  {t("단순한 기능 구현을 넘어, 복잡한 상태와 데이터를 체계적으로 관리하기 위한 Gameplay Architecture 설계와 안정적인 협업 프로세스 구축에 집중했습니다.", "Beyond simple feature implementation, focused on designing Gameplay Architecture for systemic state/data management and establishing a stable collaboration process.")}
                </p>
              </div>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("팀 프로젝트", "Team Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">UE 5, C++, Gameplay Tag, StateTree, Replication</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/PalWorld" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>
            </div>

            {/* 2. 담당 역할 및 기여도 (My Role & Contributions) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 담당 역할 및 기여도", "2. My Role & Contributions")}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-2">{t("핵심 담당 역할 (Role)", "Core Role")}</h4>
                  <p className="text-game-accent text-sm mb-4">
                    {t("Pal 상태 관리 아키텍처 설계, 멀티플레이어 네트워크 동기화, AI 연동, 개발 프로세스 관리", "Pal State Architecture, Network Sync, AI Integration, Dev Process PM")}
                  </p>
                  
                  <h4 className="font-bold text-white mb-2">{t("사용 기술 (My Tech Stack)", "My Tech Stack")}</h4>
                  <p className="text-game-muted text-sm">
                    C++, Unreal Engine 5, Gameplay Tag, StateTree, RPC, Replication
                  </p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-game-accent mb-4">{t("내가 직접 구현한 핵심 시스템", "Systems I Actually Implemented")}</h4>
                  <ul className="list-disc list-inside text-game-muted text-sm space-y-3">
                    <li><strong className="text-white">Gameplay Architecture:</strong> Pal 고정 데이터(DataAsset)와 런타임 상태 컴포넌트 분리</li>
                    <li><strong className="text-white">State Management:</strong> Gameplay Tag 계층 구조(Work, Skill, Status) 설계 및 StateTree 연동</li>
                    <li><strong className="text-white">Multiplayer:</strong> FGameplayTagContainer Replication 및 OnRep 기반 Server-Client 상태 동기화</li>
                    <li><strong className="text-white">Dev Process:</strong> Issue 정의 → 구현 → 멀티플레이 테스트 → PR 리뷰 파이프라인 정립</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. 핵심 아키텍처 및 문제 해결 */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 핵심 아키텍처 및 문제 해결", "3. Core Architecture & Problem Solving")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">① Data & Runtime 분리 구조 (Pal System)</h4>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-4">
                <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Pal마다 서로 다른 데이터와 상태를 가져서, 캐릭터 내부에 모든 데이터를 직접 관리하면 Pal 종류가 증가할수록 코드 복잡도가 폭발적으로 증가할 수 있었습니다.", "Managing all varying data inside the Character directly risked explosive code complexity as Pal types increased.")}</p>
                <p><strong className="text-green-400">Solution:</strong> {t("기본 능력치, 스킬 등 고정적인 정보는 DataAsset으로, Runtime에서 변화하는 상태는 Character와 Component에서 관리하도록 완전히 분리했습니다. 이를 통해 기존 시스템 코드 수정 없이 DataAsset 추가만으로 새로운 Pal을 확장할 수 있었습니다.", "Completely separated fixed info into DataAssets and mutable states into runtime components, enabling new Pal expansions just by adding DataAssets without touching system code.")}</p>
              </div>
              {imgPalworldArch && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-4">
                  <img src={imgPalworldArch} alt="Architecture" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>

            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-4">② Gameplay Tag 기반 상태 설계 및 동기화</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                  <h5 className="font-bold text-game-accent mb-3">Data Fragmentation (데이터 통합)</h5>
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("작업 적성, 파트너 스킬, 상태 이상 등을 각각 Enum으로 관리할 경우, 상태 종류가 증가할수록 데이터가 파편화되는 문제가 있었습니다.", "Managing aptitudes, skills, and status effects with separate Enums caused severe data fragmentation as states grew.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("기존 Enum 데이터를 Gameplay Tag 계층 구조(Work.*, Skill.*, Status.*)로 통합했습니다. 이를 StateTree 행동 상태와 연결하여 AI 판단과 Gameplay 상태를 공통 인터페이스로 제어하게 했습니다.", "Integrated Enum data into a hierarchical Gameplay Tag structure and linked it with StateTree, creating a unified interface for AI and Gameplay.")}</p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                  <h5 className="font-bold text-game-accent mb-3">Multiplayer Sync (멀티플레이 동기화)</h5>
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Tag를 Local State로만 관리하면 Multiplayer 환경에서 Server와 Client의 상태가 불일치하는 문제가 발생합니다.", "Managing tags locally causes Server-Client state mismatches in Multiplayer.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("FGameplayTagContainer를 Replication으로 관리하고, Client는 OnRep_ActiveTags를 통해 상태 변경을 감지하여 동기화했습니다. Server는 OnRep가 호출되지 않는 특성을 고려해 Delegate를 직접 호출하도록 처리했습니다.", "Replicated FGameplayTagContainer, using OnRep_ActiveTags on Client and direct delegates on Server for perfect multiplayer state synchronization.")}</p>
                </div>
              </div>

              {imgPalworldTag && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-6">
                  <img src={imgPalworldTag} alt="Gameplay Tag" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>

            {/* 4. 나의 개발 방식 (Development Workflow) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("4. 나의 개발 방식 (Development Workflow)", "4. Development Workflow")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base font-mono">
                <div className="bg-game-dark border border-blue-500/50 text-blue-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(59,130,246,0.2)]">1. Issue 정의</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-purple-500/50 text-purple-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(168,85,247,0.2)]">2. 기능 구현</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-green-500/50 text-green-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">3. PIE 멀티플레이 테스트</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-yellow-500/50 text-yellow-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(234,179,8,0.2)]">4. Pull Request & Review</div>
              </div>

              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                <p className="text-game-muted leading-relaxed">
                  {t("기능을 바로 구현하기보다 먼저 ", "Rather than coding immediately, I prioritized ")}
                  <strong className="text-white">{t("GitHub Issue를 통해 문제와 데이터 구조를 정의", "defining problems and data structures via GitHub Issues")}</strong>
                  {t("하는 방식으로 작업했습니다. 예를 들어 Gameplay Tag 문서를 작성할 때, 태그의 계층 구조와 기존 Enum과의 관계를 미리 명세하여 팀 내 데이터 합의를 선행했습니다.", ". For example, before implementing Gameplay Tags, I documented the hierarchy and relations to existing Enums to reach a team consensus.")}
                  <br/><br/>
                  {t("모든 작업은 Issue에서 시작하여 단일 기능 단위로 Branch를 나누었고, 구현 후에는 반드시 PIE 2인 환경에서 Multiplayer 동작을 검증한 뒤 PR을 올리는 파이프라인을 정립했습니다.", "All work branched out from a specific Issue, and after implementation, multiplayer sync was rigorously tested in a 2-client PIE environment before raising a PR.")}
                </p>
              </div>

              {imgPalworldIssue && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-6">
                  <img src={imgPalworldIssue} alt="GitHub Issue / PR" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>

          </ProjectSection>
        );
      case 'socket':
const socketArchChart = `flowchart LR\n    A["Client"] -->|"Socket Request"| B["Server"]\n    B -->|"Business Request"| C["DAO"]\n    C --> D[("MariaDB")]\n\n    D --> C\n    C --> B\n    B -->|"Socket Response"| A`;

const socketFlowChart = `sequenceDiagram\n    participant Client\n    participant Server\n\n    Client->>Server: "1" (Read Request)\n    Note over Server: TODO Fetch (DB)\n    Server-->>Client: TODO Data\n    Server-->>Client: EOF (End of Message)\n\n    Client->>Server: "3" (Create Request)\n    Note over Server: TODO Insert (DB)\n    Server-->>Client: "Success" Message\n    Server-->>Client: EOF (End of Message)`;

        return (
          <ProjectSection 
            id="project-socket" 
            number="05" 
            title="ToDoList" 
            subtitle={t("Java Socket 기반 Client-Server ToDo 관리 시스템", "Java Socket-based Client-Server ToDo Management System")}
            focus={['Java', 'Socket Programming', 'JDBC', 'MariaDB', 'CS Fundamentals']}
          >
            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("간단한 ToDo CRUD 기능을 Socket 통신 기반 Client-Server 구조로 구현한 개인 프로젝트입니다.", "A personal project implementing simple ToDo CRUD features on a Socket-based Client-Server architecture.")}
                  <br className="mb-2"/>
                  {t("클라이언트가 DB에 직접 접근하지 않고 Socket Server를 통해 요청하도록 구성하여 통신 계층과 데이터 접근 계층을 분리하고, Java Socket과 JDBC를 직접 사용하며 네트워크 및 DB 통신의 기본 구조를 학습했습니다.", "Separated the communication and data access layers by making the client request via a Socket Server instead of accessing the DB directly. Learned the fundamentals of networking and database communication using pure Java Socket and JDBC.")}
                </p>
              </div>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("개인 프로젝트", "Personal Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">Java, Socket, JDBC, MariaDB</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/ToDoList" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>
            </div>

            {/* 2. 핵심 아키텍처 및 구현 (Architecture & Implementation) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 핵심 구조 및 주요 구현", "2. Core Architecture & Implementation")}</h3>
              
              <div className="flex flex-col gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-white mb-2">{t("Architecture Message", "Architecture Message")}</h4>
                  <p className="text-game-accent text-sm mb-6 leading-relaxed border-l-2 border-game-accent pl-3 py-1">
                    {t("Client는 DB에 직접 접근하지 않고 Socket Server를 통해 제한된 기능을 요청하도록 구성했습니다.", "The Client does not access the DB directly, but requests limited functionalities through the Socket Server.")}
                  </p>
                  
                  <h4 className="font-bold text-white mb-2">{t("주요 구현 내용", "Key Implementations")}</h4>
                  <ul className="list-disc list-inside text-game-muted text-sm space-y-3">
                    <li><strong className="text-white">Client-Server:</strong> Java ServerSocket / Socket 기반 통신 및 BufferedReader / BufferedWriter 데이터 송수신</li>
                    <li><strong className="text-white">Data Separation:</strong> DTO를 이용한 데이터 모델 분리 및 DAO를 통한 로직 분리</li>
                    <li><strong className="text-white">DB Access:</strong> JDBC + DAO를 이용한 MariaDB 접근 및 PreparedStatement 기반 안전한 SQL 처리</li>
                  </ul>
                </div>
                
                {/* Mermaid Architecture Flow */}
                <div className="bg-black/80 p-6 rounded-lg border border-game-muted/20 flex flex-col justify-center items-center">
                  <h5 className="font-mono text-xs text-game-accent mb-4 w-full">▼ Architecture Flow (Mermaid)</h5>
                  <Mermaid chart={socketArchChart} />
                </div>
              </div>
            </div>

            {/* 3. 문제 해결 */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 문제 해결 (Application Protocol 설계)", "3. Problem Solving (App Protocol Design)")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8 flex flex-col gap-8">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-4">Socket 응답 종료 시점 판별 (EOF Protocol)</h4>
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-4">
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Socket의 스트림 기반 통신에서는 여러 줄의 응답을 전송한 뒤 클라이언트가 메시지의 끝을 명확히 구분할 기준(종료 시점)이 없었습니다.", "In stream-based socket communication, the client had no clear standard to distinguish the end of a multi-line message.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("애플리케이션 레벨에서 'EOF'라는 문자열을 종료 신호로 정의하여, Request → Response Data → EOF 형태의 간단한 나만의 통신 규칙(Protocol)을 직접 구성했습니다.", "Defined 'EOF' as an application-level termination signal, establishing a simple custom protocol in the format: Request → Response Data → EOF.")}</p>
                </div>
              </div>
              
              <div className="flex-1 bg-black/80 border border-game-muted/20 rounded-xl overflow-hidden p-6 flex flex-col justify-center">
                <span className="text-game-accent font-mono text-xs mb-4">▼ Socket Communication Flow (Mermaid)</span>
                <Mermaid chart={socketFlowChart} />
              </div>
            </div>
            
            <div className="bg-game-dark p-6 rounded-xl border border-game-muted/30 text-center mt-8">
              <p className="text-game-muted text-sm leading-relaxed">
                <strong className="text-white block mb-2">{t("💡 Project Point", "💡 Project Point")}</strong>
                {t("작은 기능을 직접 구현하며 Socket 통신, Client-Server 분리 구조, JDBC, DAO 패턴 등 컴퓨터 공학(CS)의 핵심 기초를 깊이 있게 이해하고 학습한 프로젝트입니다.", "A CS fundamentals project that deeply explores Socket communication, Client-Server separation, JDBC, and the DAO pattern by implementing core functionalities from scratch.")}
              </p>
            </div>

          </ProjectSection>
        );
case 'material':
        return (
          <ProjectSection 
            id="project-material" 
            number="06" 
            title="Material Helper" 
            subtitle={t("반복적인 개발 작업을 줄이기 위해 Material 관련 workflow를 자동화한 developer tool.", "A developer tool that automated Material workflows to reduce repetitive tasks.")}
            focus={['Tool Development', 'Automation', 'Repetitive Workflow Reduction', 'Developer Productivity']}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-game-card p-6 rounded-xl border border-red-900/30 flex flex-col">
                <h4 className="font-bold text-red-400 mb-2">1. Problem (Before)</h4>
                <div className="flex-grow w-full min-h-[150px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mt-2">
                  <span className="text-game-muted text-sm">{t('기존의 반복적인 워크플로우 캡처', 'Repetitive Workflow Capture')}</span>
                </div>
              </div>
              <div className="bg-game-card p-6 rounded-xl border border-yellow-900/30 flex flex-col">
                <h4 className="font-bold text-yellow-400 mb-2">2. Tool UI</h4>
                <div className="flex-grow w-full min-h-[150px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mt-2">
                  <span className="text-game-muted text-sm">{t('개발된 툴 UI 캡처', 'Tool UI Capture')}</span>
                </div>
              </div>
              <div className="bg-game-card p-6 rounded-xl border border-blue-900/30 flex flex-col">
                <h4 className="font-bold text-blue-400 mb-2">3. Automated Workflow (Usage)</h4>
                <div className="flex-grow w-full min-h-[150px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mt-2">
                  <span className="text-game-muted text-sm">{t('툴 사용 과정 캡처', 'Tool Usage Capture')}</span>
                </div>
              </div>
              <div className="bg-game-card p-6 rounded-xl border border-green-900/30 flex flex-col">
                <h4 className="font-bold text-green-400 mb-2">4. Result (After)</h4>
                <div className="flex-grow w-full min-h-[150px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mt-2">
                  <span className="text-game-muted text-sm">{t('자동화 적용 후 결과 화면', 'Result After Automation')}</span>
                </div>
              </div>
            </div>
          </ProjectSection>
        );
      default:
        return <div className="py-40 text-center text-game-muted">Project not found</div>;
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="px-8 md:px-24 mb-4">
        <Link to="/" className="inline-flex items-center gap-2 text-game-muted hover:text-white transition-colors">
          <ArrowLeft size={20} />
          <span>{t('목록으로 돌아가기', 'Back to Projects')}</span>
        </Link>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {renderProjectContent()}
      </motion.div>
    </div>
  );
}
