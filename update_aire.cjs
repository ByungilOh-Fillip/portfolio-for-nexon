const fs = require('fs');

let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const oldOverview = `{/* 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <p className="text-lg text-game-muted leading-relaxed mb-8">
                {t("Unreal Engine 5.8 기반의 오픈월드 생존 게임으로, AI Companion 'MAKO'가 게임 내 상황을 판단하고 플레이어와 상호작용할 수 있도록 게임 시스템과 AI 연동 구조를 직접 설계하고 구현했습니다.", "An Unreal Engine 5.8 open-world survival game where I designed and implemented the game systems and AI integration structure to allow the AI Companion 'MAKO' to judge situations and interact with the player.")}
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div className="bg-game-dark p-4 rounded border border-game-muted/20">
                  <span className="text-game-accent font-mono block mb-1">Role</span>
                  <span className="text-white">Game Programmer</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20">
                  <span className="text-game-accent font-mono block mb-1">Engine / Lang</span>
                  <span className="text-white">UE 5.8 / C++</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20">
                  <span className="text-game-accent font-mono block mb-1">Backend / AI</span>
                  <span className="text-white">FastAPI, SQLite, LangGraph</span>
                </div>
                <div className="bg-game-dark p-4 rounded border border-game-muted/20">
                  <span className="text-game-accent font-mono block mb-1">Core Tech</span>
                  <span className="text-white">StateTree, GAS, JSON</span>
                </div>
              </div>
            </div>`;

const newOverview = `{/* 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-8">
                <h4 className="font-bold text-game-accent mb-2">{t("어떤 프로젝트인가요?", "What is this project?")}</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("Unreal Engine 5.8 기반의 오픈월드 생존 게임으로, 플레이어와 능동적으로 상호작용하는 AI Companion 'MAKO'가 핵심인 프로젝트입니다. 채집, 제작, 사냥, 전투 등의 생존 요소뿐만 아니라, AI와의 실시간 대화, AI 직접 조작, 그리고 AI에게 채집이나 제작을 요청하는 심도 있는 상호작용이 가능합니다.", "An Unreal Engine 5.8 open-world survival game centered around 'MAKO', an active AI Companion. It features survival elements like gathering, crafting, hunting, and combat, alongside deep interactions such as real-time AI conversation, direct AI control, and delegating gathering/crafting tasks to the AI.")}
                </p>
                <p className="text-game-muted text-sm leading-relaxed">
                  <strong className="text-white">{t("멀티플랫폼 연동:", "Multi-platform Integration:")}</strong> {t("게임 내부뿐만 아니라 카카오톡, 디스코드, 자체 제작 웹페이지를 통해서도 게임 밖에서 AI와 대화하고 명령을 내릴 수 있도록 구현되었습니다.", "Interactions aren't limited to in-game; you can chat with and send commands to the AI externally via KakaoTalk, Discord, and a custom web page.")}
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-sm mb-8">
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
            </div>`;

content = content.replace(oldOverview, newOverview);

// Also we need to add "문제 해결 과정" (Problem Solving Process) in core areas.
// The user asked "문제 해결 과정 이런 내용들이 핵심 핵심 핵심마다 필요할거 같아!"
// So for each section (like Data-driven, Combat, Animation), I should make sure the problem/solution structure is explicitly visible. I already have a "Problem Solving" section at the end, but they want it integrated into the core sections. I did write some problem/solution text in "Continuous Hit Detection", but I'll add a clear "Problem & Solution" block to each core section.

fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated overview");
