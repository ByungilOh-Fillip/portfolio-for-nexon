const fs = require('fs');
let content = fs.readFileSync('src/pages/ProjectDetail.tsx', 'utf8');

const oldText = `{t("기능을 바로 구현하기보다 먼저 ", "Rather than coding immediately, I prioritized ")}
                  <strong className="text-white">{t("GitHub Issue를 통해 문제와 데이터 구조를 정의", "defining problems and data structures via GitHub Issues")}</strong>
                  {t("하는 방식으로 작업했습니다. 예를 들어 Gameplay Tag 문서를 작성할 때, 태그의 계층 구조와 기존 Enum과의 관계를 미리 명세하여 팀 내 데이터 합의를 선행했습니다.", ". For example, before implementing Gameplay Tags, I documented the hierarchy and relations to existing Enums to reach a team consensus.")}
                  <br/><br/>
                  {t("모든 작업은 Issue에서 시작하여 단일 기능 단위로 Branch를 나누었고, 구현 후에는 반드시 PIE 2인 환경에서 Multiplayer 동작을 검증한 뒤 PR을 올리는 파이프라인을 정립했습니다.", "All work branched out from a specific Issue, and after implementation, multiplayer sync was rigorously tested in a 2-client PIE environment before raising a PR.")}`;

const newText = `{t("기능을 바로 구현하기보다 ", "Rather than coding immediately, ")}
                  <strong className="text-white">{t("작업 공통사항을 팀원들과 공유하기 위해 GitHub Issue를 적극적으로 활용", "I actively used GitHub Issues to share common practices and knowledge with the team.")}</strong>
                  {t("했습니다. 팀 프로젝트인 만큼, 개발 환경 세팅이나 복잡한 데이터 구조(Gameplay Tag 등)의 명세 등 파편화될 수 있는 정보들을 Issue에 문서화하여 합의를 선행했습니다.", " Given it's a team project, I documented dev environment setups and complex data structures (like Gameplay Tags) in Issues to build consensus before writing code.")}
                  <br/><br/>
                  {t("모든 코드 작업 역시 Issue에서 출발하여 단일 기능 단위로 Branch를 나누었고, 구현 후에는 반드시 PIE 2인 환경에서 Multiplayer 동작을 검증한 뒤 PR을 올리는 탄탄한 파이프라인을 정립했습니다.", "All coding tasks also started from an Issue, branched out by feature, and rigorously tested in a 2-client PIE environment for multiplayer sync before raising a PR.")}`;

content = content.replace(oldText, newText);
fs.writeFileSync('src/pages/ProjectDetail.tsx', content, 'utf8');
console.log("Updated workflow text.");
