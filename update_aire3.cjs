const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Replace 3 & 4
const old3 = `{/* 3. Companion AI Architecture */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">3. Companion AI Architecture</h4>
              <p className="text-game-muted text-sm mb-6">{t("단순 반복 행동이 아닌, AI Perception으로 주변을 파악하고 StateTree로 상황을 판단하여 GAS로 실행하는 명확한 '판단 → 실행' 분리 구조를 구현했습니다.", "Implemented a strict 'Decision -> Execution' separation structure using AI Perception, StateTree, and GAS.")}</p>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] StateTree 로직 또는 AI 아키텍처 다이어그램", "StateTree / Architecture Diagram")}</span>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <pre className="text-game-accent font-mono text-xs mb-4">
{`AI Perception (Threat Target) 
  ↓ 
StateTree (Survival / Combat / Work) 
  ↓ 
Behavior Selection (Event) 
  ↓ 
GAS Ability -> Gameplay Effect`}
                  </pre>
                  <ul className="text-game-muted text-sm space-y-2 list-disc list-inside">
                    <li><strong className="text-white">AI Perception:</strong> 주변 적 탐지 및 Threat Target 관리</li>
                    <li><strong className="text-white">StateTree:</strong> 최적의 행동(Combat, Follow 등) 우선순위 선택</li>
                    <li><strong className="text-white">GAS:</strong> Health/Stamina, Attack/Evade 쿨다운 및 Cost 검증</li>
                  </ul>
                </div>
              </div>
            </div>`;

const new3 = `{/* 3. Companion AI Architecture */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">3. Companion AI Architecture</h4>
              <div className="flex flex-col lg:flex-row gap-8 mb-4">
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] StateTree 로직 또는 AI 아키텍처 다이어그램", "StateTree / Architecture Diagram")}</span>
                </div>
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm mb-4">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("기존의 단순 FSM 방식으로는 채집, 전투, 후퇴 등 복잡하게 얽힌 AI의 상황 판단 우선순위를 체계적으로 관리하기가 매우 어려웠습니다.", "Managing complex AI priority (combat, gathering, fleeing) using traditional FSM led to spaghetti code and unmanageable states.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("AI Perception(인지) → StateTree(상황 판단 및 우선순위) → GAS(실제 스킬/동작 실행) 로 이어지는 '판단과 실행의 분리 구조'를 설계하여 확장성 높고 유지보수가 용이한 AI 엔진을 구축했습니다.", "Designed a 'Decision-Execution separation' structure: Perception (sense) -> StateTree (evaluate/prioritize) -> GAS (execute). This created a highly scalable and maintainable AI brain.")}</p>
                  </div>
                  <pre className="text-game-accent font-mono text-xs">
{`AI Perception (Threat Target) -> StateTree (Evaluate Priority) 
-> Behavior Selection (Event) -> GAS Ability (Execution)`}
                  </pre>
                </div>
              </div>
            </div>`;

const old4 = `{/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">4. AI Communication & Long-term Memory</h4>
              <p className="text-game-muted text-sm mb-6">{t("게임 종료 후에도 플레이어와의 경험을 기억하는 AI를 위해 Unreal Engine ↔ Backend ↔ Database 통신 파이프라인을 구축했습니다.", "Built a full UE <-> Backend <-> DB pipeline to allow AI to remember gameplay experiences across sessions.")}</p>
              
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <pre className="text-game-accent font-mono text-xs mb-4">
{`Game Event / Message
  ↓ 
Memory Classification & Validation (Backend)
  ↓ 
SQLite (External DB)
  ↓ 
Memory Retrieval -> AI Context -> LLM Response`}
                  </pre>
                  <p className="text-game-muted text-sm">
                    {t("단순 대화 저장이 아닌, 게임 내 주요 이벤트를 데이터화하여 중요도와 최신성 기반으로 조회 및 Context에 주입하는 구조입니다.", "Not just saving chats, but serializing game events and retrieving them based on importance and recency to inject into the AI Context.")}
                  </p>
                </div>
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 메모리 통신 로그 또는 JSON 구조 캡처", "Memory Comm Log / JSON Capture")}</span>
                </div>
              </div>
            </div>`;

const new4 = `{/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">4. AI Communication & Long-term Memory</h4>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm mb-4">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("AI가 이전 플레이 경험이나 대화 맥락을 기억하지 못해 '반려자'로서의 연속성(Long-term Memory)이 완전히 단절되는 문제가 있었습니다.", "AI could not remember past gameplay or chat history, completely breaking the immersion of a long-term 'Companion'.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("Unreal ↔ FastAPI Backend ↔ SQLite 데이터베이스 통신망을 구축하고, 단순 대화뿐만 아니라 인게임 주요 이벤트를 '기억 객체'로 정제하여 저장했습니다. 이후 AI 호출 시 중요도/최신성에 따라 관련 기억만 추출해 LLM Context에 동적으로 주입하도록 구현했습니다.", "Built a full UE-Backend-SQLite pipeline. Serialized game events into Memory Objects. Upon AI call, retrieved context based on importance/recency to inject dynamically into the LLM.")}</p>
                  </div>
                  <pre className="text-game-accent font-mono text-xs">
{`Game Event / Message -> Memory Processing (Backend) -> SQLite 
-> Context Retrieval -> LLM Generation -> AI Response`}
                  </pre>
                </div>
                <div className="w-full lg:w-1/2 h-64 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 메모리 통신 로그 또는 JSON 구조 캡처", "Memory Comm Log / JSON Capture")}</span>
                </div>
              </div>
            </div>`;

content = content.replace(old3, new3).replace(old4, new4);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated problem solving structures for 3 & 4");
