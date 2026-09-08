import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectSection } from '../../components/ProjectSection';
import Mermaid from '../../components/Mermaid';
import imgAireHitDetection from '../../assets/aire/aire_hit_detection.jpg';
import imgAireAnimNotify from '../../assets/aire/aire_anim_notify.png';
import imgAireDodgeCurve from '../../assets/aire/aire_dodge_curve.png';
import erdMemoryImg from '../../assets/other_projects/erd_memory.png';


const aireGatewayChart = `flowchart LR
    A["BT_AI (Behavior Tree)"] -->|Task Request| B["AI Controller"]
    B -->|Command| C["Command Gateway (C++)"]
    C -->|Execute| D["Movement / Attack / Skill"]
    C -->|Update State| E["BlackBoard"]
    E -->|Condition Check| A`;

const aireWeaponChart = `flowchart TD
    subgraph DataLayer
        DT_Weapon["DataTable (Weapon_DT)"]
        DA_Weapon["DataAsset (UWeaponData)"]
        DT_Weapon -->|Rows to Assets| DA_Weapon
    end
    
    subgraph LogicLayer
        WP_Base["AWeaponBase (C++)"]
        WP_Melee["AWeapon_Melee"]
        WP_Range["AWeapon_Range"]
        WP_Base --> WP_Melee
        WP_Base --> WP_Range
    end
    
    DA_Weapon -->|Injected into| WP_Base`;

const aireItemChart = `flowchart TD
    subgraph ItemData
        DA_Item["UItemData (DataAsset)"]
        Mesh["Static Mesh"]
        Icon["UI Icon (Texture2D)"]
        Stat["Effect Stats"]
        DA_Item -->|Includes| Mesh
        DA_Item -->|Includes| Icon
        DA_Item -->|Includes| Stat
    end
    
    subgraph System
        InvComp["UInventoryComponent"]
        InvComp -->|Array of| DA_Item
    end
    
    subgraph UI
        UI_Inv["WBP_Inventory"]
        UI_Inv -->|Reads Icon / Name| InvComp
    end`;

interface Props {
  setSelectedImg: (img: string | null) => void;
}

export default function AireProject({ setSelectedImg }: Props) {
  const { t } = useLanguage();
  const imgAireDebug = "";
  
  return (
          <ProjectSection 
            id="project-aire" 
            number="01" 
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
                className="w-full h-64 md:h-[500px] bg-black border border-game-muted/20 rounded-xl overflow-hidden flex items-center justify-center relative group"
              >
                <img src={erdMemoryImg} alt="Memory ERD" onClick={(e) => { e.preventDefault(); setSelectedImg(erdMemoryImg); }} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 cursor-pointer" />
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
                <Mermaid chart={aireGatewayChart} />
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

              <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
                <div className="w-full bg-white/5 border border-game-muted/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6">
                  <span className="text-game-accent font-mono text-xs mb-4 text-left w-full">▼ Weapon Data-Driven Architecture</span>
                  <Mermaid chart={aireWeaponChart} />
                </div>
                <div className="w-full bg-white/5 border border-game-muted/20 rounded-xl overflow-hidden flex flex-col items-center justify-center p-6">
                  <span className="text-game-accent font-mono text-xs mb-4 text-left w-full">▼ Item & Recipe Data-Driven Architecture</span>
                  <Mermaid chart={aireItemChart} />
                </div>
              </div>
            </div>

            {/* 6 & 7. Combat & Animation */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-6">6 & 7. Combat, Hit Detection & Animation System</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="flex flex-col">
                  {imgAireHitDetection && (
                  <div className="w-full bg-black border border-game-muted/20 rounded overflow-hidden mb-4">
                    <img src={imgAireHitDetection} alt="Continuous Hit Detection" className="w-full h-auto object-contain" />
                  </div>
                )}
                  <h5 className="font-bold text-game-accent mb-2">Continuous Hit Detection & Optimization</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("빠르게 움직이는 무기는 프레임 사이에서 Hit 판정이 누락될 수 있어 세밀한 궤적 보간(Substep)이 필요하지만, 이를 모든 캐릭터에 일괄 적용하면 불필요한 연산 비용이 발생합니다.", "Fast-moving weapons miss hits between frames, requiring sub-step interpolation. However, applying this to all characters causes unnecessary performance overhead.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("무기 특성에 맞춰 충돌 판정을 최적화했습니다. 빠른 공격을 하는 동료(마코)는 Substep 보간 처리를 적용했지만, 플레이어는 애니메이션이 비교적 느린 대검을 사용하여 궤적이 충분히 넓기 때문에 이전 프레임과 현재 위치를 잇는 단일 선분(Segment) 스윕만으로 처리했습니다. 결과적으로 판정 누락 없이 연산량을 크게 줄였습니다.", "Optimized hit detection based on weapon speed. While the companion (Mako) uses sub-step interpolation for fast attacks, the player's slower Greatsword relies on a simple single-segment sweep between frames. This provided accurate hit detection while significantly reducing computation cost.")}</p>
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
                <div className="flex flex-col">
                  {imgAireDodgeCurve && (
                  <div className="w-full bg-black border border-game-muted/20 rounded overflow-hidden mb-4">
                    <img src={imgAireDodgeCurve} alt="Dodge Roll Curve" className="w-full h-auto object-contain" />
                  </div>
                )}
                  <h5 className="font-bold text-game-accent mb-2">Natural Dodge Roll</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("구르기(Dodge)의 인게임 동작 시 캐릭터의 실제 이동 속도와 모션이 맞지 않아 움직임이 매우 어색했습니다.", "The in-game dodge roll looked unnatural because the character's movement speed did not match the animation motion.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("Unreal Engine의 Curve 데이터를 응용하여 구르기 모션 프레임에 맞춰 이동 속도 변화를 세밀하게 제어함으로써, 물리적으로 자연스럽고 역동적인 구르기 동작을 완성했습니다.", "Applied Unreal Engine Curve data to finely control movement speed variations according to the rolling motion frames, creating a physically natural and dynamic dodge action.")}</p>
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
}
