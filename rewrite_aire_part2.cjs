const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// 1. Add image imports if they don't exist
if (!content.includes('aiCommandGatewayImg')) {
  content = content.replace("import erdMemoryImg from '../assets/erd_memory.png';",
    "import erdMemoryImg from '../assets/erd_memory.png';\nimport aiCommandGatewayImg from '../assets/ai_command_gateway.png';\nimport dddWeaponImg from '../assets/ddd_weapon.png';\nimport dddItemImg from '../assets/ddd_item.png';");
}

// 2. Extract the part to replace
const startIndex = content.indexOf('{/* 3. Companion AI Architecture */}');
const endIndex = content.indexOf("case 'palworld':");
const head = content.substring(0, startIndex);
const tail = content.substring(endIndex);

const newBody = `{/* 3. AI Communication & Memory */}` + content.substring(content.indexOf('{/* 4. AI Communication & Memory */}'), content.indexOf('{/* 5. Command Gateway & 6. Data-Driven */}'))
    .replace('4. AI Communication', '3. AI Communication')
    .replace('4. AI Communication', '3. AI Communication');

// I will write out the rest of the new blocks explicitly to make them vertical layout.
const restBody = `
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
                <div className="flex-1 min-h-[150px] bg-black/50 border border-game-muted/20 rounded flex items-center justify-center">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 문제 해결 전/후 에디터 화면 또는 코드스니펫", "Before/After Editor or Code Capture")}</span>
                </div>
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
`;

fs.writeFileSync('src/pages/ProjectDetail.tsx', head + newBody + restBody + tail, 'utf8');
console.log("Refactored layout successfully.");
