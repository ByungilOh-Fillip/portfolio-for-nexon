const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Update Team size
content = content.replace('2명 (2 Members)', '3명 (3 Members)');

// Update Role
content = content.replace('플레이어 파트 개발, 레벨 디자인, 프로젝트 관리', '플레이어 파트 개발, 레벨 디자인, DB 설계(AI 장기기억), 프로젝트 관리');
content = content.replace('Player Dev, Level Design, PM', 'Player Dev, Level Design, DB Design, PM');

// Update Section 4 to include the ERD and DB design aspect
const oldSec4 = `{/* 4. AI Communication & Memory */}
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
            </div>`;

const newSec4 = `{/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-2">4. AI Communication & DB Schema (Long-term Memory)</h4>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm mb-4">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("AI가 이전 플레이 경험이나 대화 맥락을 기억하지 못해 '반려자'로서의 몰입감이 단절되는 문제가 있었습니다.", "AI could not remember past gameplay or chat history, breaking the immersion of a 'Companion'.")}</p>
                    <p className="mb-2"><strong className="text-green-400">Solution:</strong> {t("단기 기억(Chat Buffer), 장기 기억(Episodic Memory), 그리고 오프라인 작업(Offline Task)을 명확히 분류하는 DB 스키마(ERD)를 직접 설계했습니다.", "Designed a robust DB schema (ERD) categorizing Short-term (Chat Buffer), Long-term (Episodic Memory), and Offline Tasks.")}</p>
                    <p><strong className="text-blue-400">Communication:</strong> {t("벡터 데이터, 위치 좌표(JSON), RAG 처리 등 장기기억 보장에 필요한 핵심 요구사항을 정의하고, 이를 기반으로 AI/백엔드 담당자와 원활하게 소통하여 구조를 확립했습니다.", "Defined core requirements like vector data, location coordinates, and RAG processing, and effectively communicated these specifications to the AI/Backend team.")}</p>
                  </div>
                  <pre className="text-game-accent font-mono text-xs">
{\`Game Event / Message -> Memory Processing (Backend) 
-> SQLite (Designed Schema) -> Context Retrieval -> AI Response\`}
                  </pre>
                </div>
                <div className="w-full lg:w-1/2 bg-black border border-game-muted/20 rounded overflow-hidden flex items-center justify-center">
                  <img src="/src/assets/erd_memory.png" alt="Memory ERD" className="w-full h-full object-contain hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
            </div>`;

content = content.replace(oldSec4, newSec4);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated AIRE role and Section 4 with ERD");
