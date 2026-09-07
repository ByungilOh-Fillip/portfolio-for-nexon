const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const oldBlock = `{/* 1. 프로젝트 개요 (Overview) */}
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
                  <span className="text-white">3명 (3 Members)</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20 md:col-span-2">
                  <span className="text-game-accent font-mono block mb-1">My Role</span>
                  <span className="text-white">{t("플레이어 파트 개발, 레벨 디자인, DB 설계(AI 장기기억), 프로젝트 관리", "Player Dev, Level Design, DB Design, PM")}</span>
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
            </div>`;

const newBlock = `{/* 1. 프로젝트 개요 (Overview) */}
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
                  <a href="#" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
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
                    {t("클라이언트 로직 전담, UI/UX 구현, DB 설계(AI 장기기억), 레벨 디자인, 프로젝트 관리", "Client Logic, UI/UX, DB Design, Level Design, PM")}
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
                    <li><strong className="text-white">UI / UX:</strong> UMG를 활용한 게임 내 모든 HUD 및 사용자 인터페이스(UI) 구현</li>
                    <li><strong className="text-white">AI Communication:</strong> Backend 연동 시스템 구축(JSON) 및 장기기억을 위한 DB 스키마 설계</li>
                  </ul>
                </div>
              </div>
            </div>`;

content = content.replace(oldBlock, newBlock);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Refactored AIRE Section 1 and 2 for better role/contribution clarity.");
