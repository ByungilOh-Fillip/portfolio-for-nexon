const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const oldSec4 = `{/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-6">4. AI Communication & DB Schema (Long-term Memory)</h4>
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 flex flex-col justify-center">
                  <div className="mb-4">
                    <p className="text-game-muted text-sm mb-2">
                      {t("AI Companion이 플레이어 및 게임 세상과 원활하게 커뮤니케이션하고, 지속적인 관계를 형성하기 위해 필수적인 데이터 통신 구조와 DB를 설계한 과정입니다.", "The process of designing the essential data communication structure and database required for the AI Companion to smoothly communicate with the player and form a continuous relationship.")}
                    </p>
                    <p className="text-game-muted text-sm">
                      {t("위 과정은 AI 담당자와 소통하기 위해 ERD Cloud에 메모를 남겨서 각 DB의 목적과 내용을 설명드렸습니다.", "I communicated this process to the AI developer by leaving detailed notes on ERD Cloud to explain the purpose and content of each DB table.")}
                    </p>
                  </div>
                  <br></br><br></br>
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
                <a 
                  href="https://www.erdcloud.com/d/F8ByrHqChxHXfpqao" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full lg:w-1/2 bg-black border border-game-muted/20 rounded overflow-hidden flex items-center justify-center relative group block"
                >
                  <img src={erdMemoryImg} alt="Memory ERD" className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                    <span className="text-white font-bold text-lg font-mono tracking-wide">Click to view on ERDCloud</span>
                  </div>
                </a>
              </div>
            </div>`;

const newSec4 = `{/* 4. AI Communication & Memory */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">4. AI Communication & DB Schema (Long-term Memory)</h4>
              
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
{\`Game Event / Message -> Memory Processing (Backend) -> SQLite (Designed Schema) -> Context Retrieval -> AI Response\`}
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
            </div>`;

content = content.replace(oldSec4, newSec4);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated layout for Section 4");
