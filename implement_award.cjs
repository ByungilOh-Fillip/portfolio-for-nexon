const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// 1. Add Badge to Hero Video
const oldHero = `{/* 1. 메인 썸네일/영상 */}
            <div className="mb-8 w-full h-64 md:h-[500px] bg-black border border-game-card rounded-xl flex items-center justify-center relative overflow-hidden group">
              <iframe 
                className="w-full h-full"`;
                
const newHero = `{/* 1. 메인 썸네일/영상 */}
            <div className="mb-8 w-full h-64 md:h-[500px] bg-black border border-game-card rounded-xl flex items-center justify-center relative overflow-hidden group">
              {/* Award Badge Overlay */}
              <div className="absolute top-4 right-4 md:top-6 md:right-6 z-10 bg-gradient-to-r from-yellow-600/90 to-yellow-500/90 border border-yellow-400 text-white px-4 py-2 rounded-full shadow-[0_0_20px_rgba(234,179,8,0.4)] backdrop-blur-sm flex items-center gap-2 pointer-events-none">
                <span className="text-xl drop-shadow-md">🏆</span>
                <span className="font-bold text-sm md:text-base tracking-wide drop-shadow-md">{t("최우수상 (정보통신산업진흥원장상)", "Grand Prize (NIPA Director's Award)")}</span>
              </div>
              <iframe 
                className="w-full h-full"`;
                
content = content.replace(oldHero, newHero);


// 2. Add Award to Dashboard & Update Role
const oldDashboard = `<div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
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
                  <a href="https://github.com/ByungilOh-Fillip/portfolio-for-nexon" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>`;

const newDashboard = `<div className="flex flex-col gap-4">
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
                    <a href="https://github.com/ByungilOh-Fillip/portfolio-for-nexon" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
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
              </div>`;

content = content.replace(oldDashboard, newDashboard);


// 3. Update My Role in Section 2
const oldRole = `{t("클라이언트 로직 전담, UI/UX 구현, DB 설계(AI 장기기억), 레벨 디자인, 프로젝트 관리", "Client Logic, UI/UX, DB Design, Level Design, PM")}`;
const newRole = `{t("클라이언트 로직 전담, UI/UX, DB 설계, 레벨 디자인, 영상 제작, 프로젝트 관리", "Client Logic, UI/UX, DB Design, Level Design, Video Production, PM")}`;
content = content.replace(oldRole, newRole);


// 4. Update Contribution List with AI
const oldContrib = `<li><strong className="text-white">AI Communication:</strong> Backend 연동 시스템 구축(JSON) 및 장기기억을 위한 DB 스키마 설계</li>
                  </ul>`;
const newContrib = `<li><strong className="text-white">AI Communication:</strong> Backend 연동 시스템 구축(JSON) 및 장기기억을 위한 DB 스키마 설계</li>
                    <li><strong className="text-white">AI-Assisted Workflow:</strong> Hunyuan(모델), Seedance 2.5(트레일러 영상) 활용 및 LLM 기반 디버깅·문서화·기능 구현 방법론 탐색을 통한 생산성 극대화</li>
                  </ul>`;
content = content.replace(oldContrib, newContrib);


fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Award and Roles updated!");
