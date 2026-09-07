const fs = require('fs');
const content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const head = content.substring(0, content.indexOf("case 'aire':"));
const tail = content.substring(content.indexOf("case 'palworld':"));

const aireBlock = `case 'aire':
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
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-8">
                <h4 className="font-bold text-game-accent mb-2">{t("어떤 프로젝트인가요?", "What is this project?")}</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("Unreal Engine 5.8 기반의 오픈월드 생존 게임으로, 플레이어와 능동적으로 상호작용하는 AI Companion 'MAKO'가 핵심인 프로젝트입니다. 채집, 제작, 사냥, 전투 등의 생존 요소뿐만 아니라, AI와의 실시간 대화, AI 직접 조작, 그리고 AI에게 채집이나 제작을 요청하는 심도 있는 상호작용이 가능합니다.", "An Unreal Engine 5.8 open-world survival game centered around 'MAKO', an active AI Companion. It features survival elements like gathering, crafting, hunting, and combat, alongside deep interactions such as real-time AI conversation, direct AI control, and delegating gathering/crafting tasks to the AI.")}
                </p>
                <p className="text-game-muted text-sm leading-relaxed">
                  <strong className="text-white">{t("멀티플랫폼 연동:", "Multi-platform Integration:")}</strong> {t("게임 내부뿐만 아니라 카카오톡, 디스코드, 자체 제작 웹페이지를 통해서도 게임 밖에서 AI와 대화하고 명령을 내릴 수 있도록 연동되어 있습니다.", "Interactions aren't limited to in-game; you can chat with and send commands to the AI externally via KakaoTalk, Discord, and a custom web page.")}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm">
                <div className="bg-game-dark p-4 rounded border border-game-muted/20">
                  <span className="text-game-accent font-mono block mb-1">Team</span>
                  <span className="text-white">2명 (2 Members)</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20 md:col-span-2">
                  <span className="text-game-accent font-mono block mb-1">My Role</span>
                  <span className="text-white">{t("플레이어 파트 개발, 레벨 디자인, 프로젝트 관리", "Player Dev, Level Design, PM")}</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20 md:col-span-2">
                  <span className="text-game-accent font-mono block mb-1">Tech Stack</span>
                  <span className="text-white">UE 5.8, C++, StateTree, GAS, FastAPI, SQLite</span>
                </div>
              </div>
            </div>

            {/* 2. 담당 업무 (Responsibilities) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 주요 구현 시스템", "2. Core Implemented Systems")}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                <h4 className="font-bold text-game-accent mb-4">🧠 AI Companion</h4>
                <ul className="list-disc list-inside text-game-muted text-sm space-y-2">
                  <li>StateTree 기반 AI 행동 구조 (Follow/Combat/Work 등)</li>
                  <li>AI Perception 기반 Threat 처리 및 우선순위 판단</li>
                  <li>외부 AI Server(Backend) 실시간 연동</li>
                </ul>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                <h4 className="font-bold text-game-accent mb-4">⚔️ Gameplay & Combat</h4>
                <ul className="list-disc list-inside text-game-muted text-sm space-y-2">
                  <li>GAS(Gameplay Ability System) 기반 Ability/Effect 처리</li>
                  <li>무기 궤적 기반 근접 전투 및 연속 Hit 판정</li>
                  <li>Equipment, Inventory, WorkOrder 제작 시스템</li>
                </ul>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                <h4 className="font-bold text-game-accent mb-4">📡 AI Communication & Data</h4>
                <ul className="list-disc list-inside text-game-muted text-sm space-y-2">
                  <li>JSON 기반 통신 및 AI Command Gateway 구축</li>
                  <li>Long-term Memory 연동 (Game Context 저장 및 조회)</li>
                </ul>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                <h4 className="font-bold text-game-accent mb-4">🎬 Animation</h4>
                <ul className="list-disc list-inside text-game-muted text-sm space-y-2">
                  <li>Linked Anim Layer & Montage 시스템 적용</li>
                  <li>AnimNotify State 기반 공격 타이밍/판정 동기화</li>
                </ul>
              </div>
            </div>

            {/* 3. Companion AI Architecture */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">3. Companion AI Architecture</h4>
              <div className="flex flex-col lg:flex-row gap-8 mb-4">
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] StateTree 로직 또는 AI 아키텍처 다이어그램", "StateTree / Architecture Diagram")}</span>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm mb-4">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("기존의 단순 상태 머신(FSM) 방식으로는 채집, 전투, 후퇴 등 복잡하게 얽힌 AI의 상황 판단 우선순위를 체계적으로 관리하기가 매우 어려웠습니다.", "Managing complex AI priority using traditional FSM led to unmanageable states.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("AI Perception(인지) → StateTree(상황 판단 및 우선순위) → GAS(실제 스킬/동작 실행) 로 이어지는 '판단과 실행의 분리 구조'를 설계하여 유연하고 확장성 높은 AI를 구축했습니다.", "Designed a 'Decision-Execution separation' structure: Perception -> StateTree -> GAS. This created a highly scalable AI brain.")}</p>
                  </div>
                  <pre className="text-game-accent font-mono text-xs">
{\`AI Perception (Threat Target) 
  ↓ 
StateTree (Evaluate Priority) 
  ↓ 
Behavior Selection (Event) 
  ↓ 
GAS Ability (Execution)\`}
                  </pre>
                </div>
              </div>
            </div>

            {/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">4. AI Communication & Long-term Memory</h4>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm mb-4">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("AI가 이전 플레이 경험이나 대화 맥락을 기억하지 못해 '반려자'로서의 몰입감이 단절되는 문제가 있었습니다.", "AI could not remember past gameplay or chat history, breaking the immersion of a 'Companion'.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("Unreal ↔ FastAPI ↔ SQLite 파이프라인을 구축해 인게임 이벤트를 '기억 객체'로 정제하여 저장하고, AI 호출 시 중요도/최신성에 따라 Context에 동적으로 주입했습니다.", "Built a full UE-FastAPI-SQLite pipeline. Serialized game events into Memory Objects and injected retrieved context based on importance/recency into the LLM.")}</p>
                  </div>
                  <pre className="text-game-accent font-mono text-xs">
{\`Game Event / Message -> Memory Processing (Backend) 
-> SQLite -> Context Retrieval -> LLM Generation -> AI Response\`}
                  </pre>
                </div>
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 메모리 통신 로그 또는 JSON 구조 캡처", "Memory Comm Log / JSON Capture")}</span>
                </div>
              </div>
            </div>

            {/* 5. Command Gateway & 6. Data-Driven */}
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="bg-game-card p-8 rounded-xl border border-game-card/50 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">5. AI Command Gateway</h4>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 mb-4 text-sm">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("LLM이 게임 상태를 무시하고 불가능한 명령(환각)을 생성하여 게임 안정성을 해칠 수 있었습니다.", "LLMs generated impossible commands (hallucinations) ignoring game state, breaking stability.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("LLM의 출력은 실제 게임 명령이 아닌 Command Candidate로만 취급하고, 언리얼 엔진 내부에서 거리, 대상, 인벤토리, 중복 여부 등을 재검증하는 'Gateway 구조'를 설계하여 안정성과 분리를 이뤄냈습니다.", "Treated LLM outputs strictly as candidates and built a Gateway in Unreal to re-validate distance, target, inventory, etc., ensuring stability and separation of concerns.")}</p>
                  </div>
                  <ul className="text-game-muted text-xs space-y-1 list-disc list-inside">
                    <li>검증 통과 시에만 StateTree / GAS / WorkOrder로 전달</li>
                  </ul>
                </div>
                <div className="flex-1 min-h-[200px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] Command Validation 다이어그램", "Command Validation Diagram")}</span>
                </div>
              </div>

              <div className="bg-game-card p-8 rounded-xl border border-game-card/50 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">6. Data-Driven Gameplay</h4>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 mb-4 text-sm">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("새로운 무기나 콘텐츠를 추가할 때마다 방대한 코드 수정과 빌드 작업이 반복되었습니다.", "Adding new weapons or content required repetitive code modification and builds.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("DataTable과 DataAsset 기반으로 Weapon Definition을 구성하여 게임 콘텐츠와 실행 로직을 완전히 분리했습니다. 무기별 Ability Set, Combo, Montage 등을 데이터화하여 빌드 없이 콘텐츠를 확장 가능하게 했습니다.", "Separated logic and content by creating Weapon Definitions via DataTable/DataAsset. Ability sets, combos, and montages became data, allowing content expansion without code builds.")}</p>
                  </div>
                </div>
                <div className="flex-1 min-h-[200px] bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] Weapon Definition DataAsset 화면", "Weapon Definition DataAsset Capture")}</span>
                </div>
              </div>
            </div>

            {/* 7. Combat & Hit Detection + 8. Animation */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-6">7 & 8. Combat, Hit Detection & Animation System</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="w-full h-48 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                    <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 무기 궤적 연속 Collision 디버그 화면", "Continuous Collision Debug Capture")}</span>
                  </div>
                  <h5 className="font-bold text-game-accent mb-2">Continuous Hit Detection</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("빠르게 움직이는 무기의 경우, 단일 Collision 검사만으로는 프레임 간격 사이에서 Hit 판정이 누락되는 문제가 발생했습니다.", "Fast-moving weapons missed hit detections between frames when using a single collision check.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("이전 프레임과 현재 프레임의 무기 Base/Tip 위치를 보간(Interpolation)하고, Substep 기반의 연속적인 Capsule Sweep을 통해 실제 무기 이동 궤적 전체를 누락 없이 판정하도록 구현했습니다.", "Interpolated previous and current weapon positions and used continuous Capsule Sweep to calculate the entire trajectory, eliminating missed hits.")}</p>
                  </div>
                </div>
                <div className="flex flex-col">
                  <div className="w-full h-48 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                    <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] AnimNotify State 및 몽타주 세팅 화면", "AnimNotify & Montage Setup Capture")}</span>
                  </div>
                  <h5 className="font-bold text-game-accent mb-2">Animation-Logic Sync</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("공격 연출 애니메이션과 실제 타격 판정/콤보 로직의 타이밍이 어긋나는 경우가 빈번했습니다.", "Animation visuals often desynchronized with actual hit detection and combo logic timing.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("Linked Anim Layer와 Montage로 유연한 전환을 확보하고, AnimNotify State를 커스텀하여 애니메이션 툴 내에서 시각적으로 Combo Window와 Attack Timing을 제어함으로써 코드와 연출을 완벽히 동기화했습니다.", "Customized AnimNotify States within Montages to visually control combo windows and attack timing inside the animation editor, perfectly syncing logic with visuals.")}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* 9. Problem Solving */}
            <div className="bg-game-dark p-8 rounded-xl border border-red-900/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <h4 className="text-xl font-bold text-white mb-4">9. 디버깅 및 문제 해결 (StateTree Evaluator 노출 이슈)</h4>
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
                <div className="flex-1 min-h-[150px] bg-black/50 border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 문제 해결 전/후 에디터 화면 또는 코드스니펫", "Before/After Editor or Code Capture")}</span>
                </div>
              </div>
            </div>

            {/* 10. Competency Summary */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 text-center">
              <h4 className="text-xl font-bold text-white mb-6">{t("10. 프로젝트를 통해 검증된 핵심 역량", "Key Competencies Demonstrated")}</h4>
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
      `;

fs.writeFileSync('src/pages/ProjectDetail.tsx', head + aireBlock + tail, 'utf8');
