const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

// Replace 5 & 6
const old56 = `{/* 5. Command Gateway & 6. Data-Driven */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-game-card p-8 rounded-xl border border-game-card/50 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">5. AI Command Gateway</h4>
                <p className="text-game-muted text-sm mb-4">{t("LLM의 환각(Hallucination)으로부터 게임 시스템의 안정성을 보호하기 위한 검증 계층을 설계했습니다.", "Designed a validation layer to protect game state from LLM hallucinations.")}</p>
                <div className="flex-grow w-full h-40 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] Command Validation 다이어그램", "Command Validation Diagram")}</span>
                </div>
                <ul className="text-game-muted text-xs space-y-1 list-disc list-inside mt-auto">
                  <li>LLM 출력은 <strong>Command Candidate</strong>로만 취급</li>
                  <li>Unreal에서 거리, 대상, 인벤토리, 중복 여부 재검증</li>
                  <li>검증 통과 시에만 StateTree / GAS / WorkOrder로 전달</li>
                </ul>
              </div>

              <div className="bg-game-card p-8 rounded-xl border border-game-card/50 flex flex-col">
                <h4 className="text-xl font-bold text-white mb-2">6. Data-Driven Gameplay</h4>
                <p className="text-game-muted text-sm mb-4">{t("DataTable/DataAsset 기반으로 로직과 콘텐츠를 분리하여 재사용성을 극대화했습니다.", "Maximized reusability by separating logic and content using DT/DA.")}</p>
                <div className="flex-grow w-full h-40 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                  <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] Weapon Definition DataAsset 화면", "Weapon Definition DataAsset Capture")}</span>
                </div>
                <ul className="text-game-muted text-xs space-y-1 list-disc list-inside mt-auto">
                  <li>무기별 Ability Set, Combo, Montage 데이터화</li>
                  <li>코드 수정 없이 데이터 입력만으로 신규 무기/콘텐츠 확장 가능</li>
                </ul>
              </div>
            </div>`;

const new56 = `{/* 5. Command Gateway & 6. Data-Driven */}
            <div className="grid grid-cols-1 gap-8 mb-8">
              <div className="bg-game-card p-8 rounded-xl border border-game-card/50 flex flex-col md:flex-row gap-8">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-white mb-2">5. AI Command Gateway</h4>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 mb-4 text-sm">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("LLM이 게임 상태를 무시하고 불가능한 명령(환각)을 생성하여 게임 안정성을 해칠 수 있었습니다.", "LLMs generated impossible commands (hallucinations) ignoring game state, breaking stability.")}</p>
                    <p><strong className="text-green-400">Solution:</strong> {t("LLM의 출력은 실제 게임 명령이 아닌 Command Candidate로만 취급하고, 언리얼 엔진에서 거리, 대상, 인벤토리, 중복 여부 등을 재검증하는 'Gateway 구조'를 설계하여 안정성과 분리를 이뤄냈습니다.", "Treated LLM outputs strictly as candidates and built a Gateway in Unreal to re-validate distance, target, inventory, etc., ensuring stability and separation of concerns.")}</p>
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
            </div>`;

content = content.replace(old56, new56);


// Replace 7 & 8
const old78 = `{/* 7. Combat & Hit Detection + 8. Animation */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-4">7 & 8. Combat, Hit Detection & Animation System</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <div className="w-full h-48 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                    <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 무기 궤적 연속 Collision 디버그 라인 화면", "Continuous Collision Debug Line Capture")}</span>
                  </div>
                  <h5 className="font-bold text-game-accent mb-2">Continuous Hit Detection</h5>
                  <p className="text-game-muted text-sm">
                    빠르게 휘두르는 무기의 <strong>단일 판정 누락 문제</strong>를 해결하기 위해, 이전 프레임과 현재 프레임의 Base/Tip 소켓 간 이동 경로를 Substep 기반 Capsule Sweep으로 검사하여 궤적 전체를 안정적으로 판정했습니다.
                  </p>
                </div>
                <div>
                  <div className="w-full h-48 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                    <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] AnimNotify State 및 몽타주 세팅 화면", "AnimNotify & Montage Setup Capture")}</span>
                  </div>
                  <h5 className="font-bold text-game-accent mb-2">Animation-Logic Sync</h5>
                  <p className="text-game-muted text-sm">
                    Linked Anim Layer와 Montage를 활용해 상태별 애니메이션을 유연하게 교체하며, <strong>AnimNotify State로 콤보 윈도우와 공격 타이밍을 제어</strong>해 로직과 연출을 완벽히 동기화했습니다.
                  </p>
                </div>
              </div>
            </div>`;

const new78 = `{/* 7. Combat & Hit Detection + 8. Animation */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-6">7 & 8. Combat, Hit Detection & Animation System</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <div className="w-full h-48 bg-game-dark border border-game-muted/20 rounded flex items-center justify-center mb-4">
                    <span className="text-game-muted text-sm">{t("📌 [이미지 삽입] 무기 궤적 연속 Collision 디버그 화면", "Continuous Collision Debug Capture")}</span>
                  </div>
                  <h5 className="font-bold text-game-accent mb-2">Continuous Hit Detection</h5>
                  <div className="bg-game-dark p-4 rounded border border-game-muted/20 text-sm flex-grow">
                    <p className="mb-2"><strong className="text-red-400">Problem:</strong> {t("빠르게 움직이는 무기의 경우, 단일 Collision 검사만으로는 무기가 이동한 프레임 간격 사이에서 Hit 판정이 누락되는 문제가 발생했습니다.", "Fast-moving weapons missed hit detections between frames when using a single collision check.")}</p>
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
            </div>`;

content = content.replace(old78, new78);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated problem solving structures");
