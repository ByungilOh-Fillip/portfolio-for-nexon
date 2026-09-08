import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { ProjectSection } from '../components/ProjectSection';
import Mermaid from '../components/Mermaid';
import { useLanguage } from '../contexts/LanguageContext';
import { useEffect, useState } from 'react';
import erdMemoryImg from '../assets/other_projects/erd_memory.png';
import materialHelperHeroImg from '../assets/material_helper/material_helper_hero.png';
import aireMaterialUsageImg from '../assets/aire/aire_material_usage.png';
import palworldIssueImg from '../assets/other_projects/palworld_issue.png';
import materialHelperSandboxImg from '../assets/material_helper/material_helper_sandbox.png';
import imgAireHitDetection from '../assets/aire/aire_hit_detection.jpg';
import imgAireAnimNotify from '../assets/aire/aire_anim_notify.png';
import imgAireDodgeCurve from '../assets/aire/aire_dodge_curve.png';

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

const palArchChart = `flowchart TD
    subgraph DataLayer
        DA_Pal["UDataAsset (UPalData)"]
        Stats["Base Stats, Model, Type"]
        DA_Pal -->|Defines| Stats
    end
    
    subgraph RuntimeLayer
        AC_Pal["UPalComponent (Actor Component)"]
        HP["Current HP, Status"]
        Tags["Gameplay Tags"]
        AC_Pal -->|Manages| HP
        AC_Pal -->|Uses| Tags
    end
    
    DA_Pal -->|Loaded by| AC_Pal
    Clients["Client Proxies"]
    AC_Pal -->|Replicated to| Clients`;

const socketArchChart = `flowchart LR\n    A["Client"] -->|"Socket Request"| B["Server"]\n    B -->|"Business Request"| C["DAO"]\n    C --> D[("MariaDB")]\n\n    D --> C\n    C --> B\n    B -->|"Socket Response"| A`;

const socketFlowChart = `sequenceDiagram
    participant Client
    participant Server

    Client->>Server: 1 (Read Request)
    Note over Server: TODO Fetch (DB)
    Server-->>Client: TODO Data
    Server-->>Client: EOF (End of Message)

    Client->>Server: 3 (Create Request)
    Note over Server: TODO Insert (DB)
    Server-->>Client: Success Message
    Server-->>Client: EOF (End of Message)`;

const materialArchChart = `flowchart LR
    A["React UI"] --> B["React Flow<br/>Material Graph"]
    B --> C["Material<br/>Interpreter"]
    C --> D["Three.js<br/>Visualizer"]
    B --> E["UE5 T3D<br/>Exporter"]
    E --> F["Unreal Engine"]`;


export default function ProjectDetail() {
  const [selectedImg, setSelectedImg] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const renderProjectContent = () => {
    switch(id) {
      case 'aire':
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
case 'palworld':



        // 이미지 경로 변수 (이미지가 준비되면 여기에 경로를 입력하세요. 예: '/assets/palworld_issue.png')
        // 값이 없으면 화면에 렌더링되지 않습니다.
        const imgPalworldHero = ""; 
        const imgPalworldTag = ""; 
        const imgPalworldIssue = palworldIssueImg; 

        return (
          <ProjectSection 
            id="project-palworld" 
            number="02" 
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
              <div className="w-full bg-black/80 border border-game-muted/20 rounded-xl overflow-hidden mt-4 p-6 flex flex-col justify-center items-center">
                <span className="text-game-accent font-mono text-xs mb-4 w-full">▼ Data & Runtime Architecture (Mermaid)</span>
                <Mermaid chart={palArchChart} />
              </div>
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
                  {t("기능을 바로 구현하기보다 ", "Rather than coding immediately, ")}
                  <strong className="text-white">{t("작업 공통사항을 팀원들과 공유하기 위해 GitHub Issue를 적극적으로 활용", "I actively used GitHub Issues to share common practices and knowledge with the team.")}</strong>
                  {t("했습니다. 팀 프로젝트인 만큼, 개발 환경 세팅이나 복잡한 데이터 구조(Gameplay Tag 등)의 명세 등 파편화될 수 있는 정보들을 Issue에 문서화하여 합의를 선행했습니다.", " Given it's a team project, I documented dev environment setups and complex data structures (like Gameplay Tags) in Issues to build consensus before writing code.")}
                  <br/><br/>
                  {t("모든 코드 작업 역시 Issue에서 출발하여 단일 기능 단위로 Branch를 나누었고, 구현 후에는 반드시 PIE 2인 환경에서 Multiplayer 동작을 검증한 뒤 PR을 올리는 탄탄한 파이프라인을 정립했습니다.", "All coding tasks also started from an Issue, branched out by feature, and rigorously tested in a 2-client PIE environment for multiplayer sync before raising a PR.")}
                </p>
              </div>

              {imgPalworldIssue && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-6">
                  <img src={imgPalworldIssue} alt="GitHub Issue / PR" onClick={() => setSelectedImg(imgPalworldIssue)} className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" />
                </div>
              )}
            </div>

          </ProjectSection>
        );
      case 'socket':




        return (
          <ProjectSection 
            id="project-socket" 
            number="03" 
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
            number="04" 
            title="Material Helper" 
            subtitle={t("Unreal Engine Material 작업을 웹에서 프로토타이핑하고, 실제 UE5 Material Editor로 결과물을 옮길 수 있도록 만든 개발자용 툴", "A developer tool designed to prototype Unreal Engine Materials on the web and port the results directly to the UE5 Material Editor")}
            focus={['Tool Architecture', 'Graph Interpreter', 'T3D Exporter', 'Developer Productivity']}
          >
            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("단순한 웹 뷰어를 넘어, UE5의 Material Expression 구조를 웹에서 추상화하고 이를 다시 Unreal의 T3D 포맷으로 변환하는 파이프라인을 구축한 '개발 생산성 향상 도구'입니다.", "Beyond a simple web viewer, this is a developer productivity tool that abstracts UE5 Material Expressions on the web and builds a pipeline to convert them back into Unreal's T3D format.")}
                </p>
              </div>

              <a href="https://byungiloh-fillip.github.io/Material_Helper_Byungil/" target="_blank" rel="noopener noreferrer" className="block mb-8 w-full bg-black border border-game-accent/50 hover:border-game-accent rounded-xl flex items-center justify-center relative overflow-hidden group transition-all">
                <img src={materialHelperHeroImg} alt="Material Helper Thumbnail" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-game-accent text-black px-6 py-3 rounded-full font-bold shadow-lg">Try Material Helper (Web)</span>
                </div>
              </a>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("개인 프로젝트", "Personal Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">React Flow, Three.js, TypeScript</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/Material_Helper_Byungil" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>

              {/* AI-Assisted Rapid Development Callout */}
              <div className="mt-6 bg-purple-900/20 border border-purple-500/30 p-5 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="text-3xl hidden md:block">⚡</span>
                <p className="text-purple-200 text-sm leading-relaxed">
                  <strong className="text-purple-400 text-base">{t("AI-Assisted 1-Day Project:", "AI-Assisted 1-Day Project:")}</strong><br/>
                  {t("생성형 AI를 적극적으로 활용하여 아이디어 기획부터 T3D 변환 파이프라인 구축, 실시간 렌더링, 그리고 웹 배포까지 단 하루(1일) 만에 속도감 있게 완성한 프로젝트입니다.", "A project completed in just one day—from initial ideation to T3D pipeline implementation, real-time rendering, and web deployment—by aggressively leveraging Generative AI.")}
                </p>
              </div>
            </div>

            {/* 2. 아키텍처 (Architecture) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 아키텍처 (Architecture)", "2. Architecture")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8 flex flex-col gap-8">
              <div>
                <p className="text-game-accent text-sm mb-6 leading-relaxed border-l-2 border-game-accent pl-3 py-1">
                  {t("웹에서 구성한 Material Graph를 하나의 데이터 구조로 관리하고, 동일한 Graph 데이터를 Visualizer 계층과 UE5 Exporter 계층에서 각각 소비하도록 시스템을 설계했습니다.", "Managed the web-configured Material Graph as a single data structure, designing the system so the same graph data is consumed independently by the Visualizer layer and the UE5 Exporter layer.")}
                </p>
              </div>
              <div className="bg-black/80 p-6 rounded-lg border border-game-muted/20 flex flex-col items-center justify-center">
                <h5 className="font-mono text-xs text-game-accent mb-4 w-full">▼ Architecture Flow (Mermaid)</h5>
                <Mermaid chart={materialArchChart} />
              </div>
            </div>

            {/* 3. 핵심 구현 (Core Implementation) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 핵심 구현 (Core Implementation)", "3. Core Implementation")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <div className="flex flex-col gap-8">
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                    <span className="text-game-accent font-mono">01</span> Graph ➔ Unreal (T3D Exporter)
                  </h4>
                  <p className="text-game-muted text-sm leading-relaxed">
                    {t("React Flow의 Node와 Edge를 순회하며 언리얼 엔진의 Material Expression 클래스(예: MaterialExpressionMultiply, Sine 등)로 매핑하는 변환 계층을 직접 구현했습니다. 런타임에 노드 속성과 Pin LinkedTo 관계를 분석하여 언리얼이 해석 가능한 순수 T3D 텍스트 포맷을 생성해 내며, 이를 클립보드에 복사하여 언리얼 에디터에 그대로 붙여넣을 수 있습니다.", "Traverses React Flow Nodes/Edges and maps them directly to Unreal Engine Material Expression classes. Evaluates node attributes and pin 'LinkedTo' relations at runtime to generate pure T3D text format that Unreal can parse, allowing users to paste it directly into the Material Editor.")}
                  </p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                    <span className="text-game-accent font-mono">02</span> Graph ➔ Visualizer (Graph Interpreter)
                  </h4>
                  <p className="text-game-muted text-sm leading-relaxed">
                    {t("단순히 노드를 화면에 그리는 것에 그치지 않고, 노드의 연결 구조를 재귀적으로 추적하며 연산하는 자체 Graph Interpreter(evaluateGraph)를 구현했습니다. 순환 참조를 막기 위한 recursion depth guard를 포함하며, Three.js 기반의 WebGL Viewport에서 1,600개의 샘플 연산을 통해 실시간 Color/Mask 결과를 시각화합니다.", "Beyond simply rendering nodes on screen, I implemented a custom Graph Interpreter that recursively traces and evaluates node connections. It includes recursion depth guards to prevent infinite loops, and visualizes real-time Color/Mask outputs via 1,600 sample calculations on a Three.js WebGL viewport.")}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. 문제 해결 (Problem Solving) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("4. 문제 해결 (Problem Solving)", "4. Problem Solving")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">① Data 변환 (T3D)</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 웹 작업물을 엔진에서 재작업</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("웹에서 구성한 그래프 결과를 실제 UE5에서 사용하려면 에디터에서 똑같이 노드를 다시 이어야 하는 비효율이 발생했습니다. 이를 해결하기 위해 T3D Exporter를 구현하여 엔진으로 즉시 이식 가능하게 만들었습니다.", "To solve the inefficiency of manually recreating web-prototyped graphs in UE5, I implemented a T3D Exporter, enabling immediate porting to the engine.")}
                </p>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">② Runtime 시각화</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 노드 결과물 실시간 확인 불가</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("노드 텍스트만으로는 연산 결과를 알 수 없었습니다. 자체 Interpreter 엔진과 Three.js 뷰포트를 연동하여 머티리얼 연산 결과를 실시간(Runtime)으로 눈으로 볼 수 있게 해결했습니다.", "Since text nodes couldn't show results, I integrated a custom interpreter engine with a Three.js viewport to visualize material calculations in real-time.")}
                </p>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">③ 구조적 오류 방지</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 잘못된 논리 그래프 생성</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("무분별한 연결로 인한 Self-Loop나 중복 Input 등의 오류를 막기 위해, 입력(UI) 단계에서 isValidConnection() 로직을 거쳐 잘못된 논리 그래프 생성을 원천 차단했습니다.", "To prevent logic errors like Self-Loops or duplicate inputs, I implemented validation logic at the UI input stage to fundamentally block the creation of invalid logic graphs.")}
                </p>
              </div>
            </div>

            {/* 5. 실무 적용 사례 (Real-world Application) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("5. 실무 적용 사례 (Real-world Application)", "5. Real-world Application")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-game-accent mb-4">AIRE 프로젝트 UI 개발 적용</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("직접 개발한 Material Helper 툴이 단순한 토이 프로젝트에 그치지 않도록, 실제 ", "To ensure this wasn't just a toy project, I actively used the Material Helper tool to develop dynamic UI elements (like the waving 'M_Hunger' fluid effect) for the actual ")}<strong className="text-white">AIRE</strong>{t(" 프로젝트의 동적인 UI(M_Hunger 출렁이는 파도 효과)를 제작하는 데 활용했습니다.", " project.")}
                </p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("웹에서 Shader 로직을 먼저 프로토타이핑하여 시각적 결과(Wave, Masking)를 확인한 뒤, T3D Exporter를 통해 UE5로 즉시 넘겨 게임에 적용했습니다. ", "I prototyped the shader logic on the web to visually verify the wave and masking effects, then immediately exported it to UE5 via the T3D Exporter. This is a successful pipeline experience where ")}<strong className="text-white">{t("툴 개발이 실제 게임 개발의 생산성 향상으로 직결된 성공적인 파이프라인 경험", "tool development directly led to increased productivity in actual game development")}</strong>{t("입니다.", ".")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full bg-black/50 border border-game-muted/20 rounded-xl p-2 overflow-hidden">
                  <img src={aireMaterialUsageImg} alt="AIRE Material Usage" onClick={() => setSelectedImg(aireMaterialUsageImg)} className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity" />
                </div>
                <div className="w-full bg-black/50 border border-game-muted/20 rounded-xl p-2 overflow-hidden">
                  <img 
                    src={materialHelperSandboxImg} 
                    alt="Material Helper Sandbox" 
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => setSelectedImg(materialHelperSandboxImg)}
                  />
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

      {selectedImg && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 cursor-zoom-out"
          onClick={() => setSelectedImg(null)}
        >
          <img 
            src={selectedImg} 
            className="max-w-full max-h-full object-contain rounded-lg" 
            alt="Enlarged" 
          />
        </div>
      )}
    </div>
  );
}
