import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectSection } from '../../components/ui/ProjectSection';
import Mermaid from '../../components/ui/Mermaid';
import palworldIssueImg from '../../assets/other_projects/palworld_issue.png';


const palArchChart = `flowchart TD
    subgraph DataLayer
        DA_Pal["UDataAsset (UPalData)"]
        Stats["Base Stats, Model, Type"]
        DA_Pal -->|Defines| Stats
    end
    
    subgraph RuntimeLayer
        AC_Pal["UPalComponent (Actor Component)"]
        HP["Current HP, Status"]
        Tags["Gameplay Tags"]
        AC_Pal -->|Manages| HP
        AC_Pal -->|Uses| Tags
    end
    
    DA_Pal -->|Loaded by| AC_Pal
    Clients["Client Proxies"]
    AC_Pal -->|Replicated to| Clients`;

interface Props {
  setSelectedImg: (img: string | null) => void;
}

export default function PalworldProject({ setSelectedImg }: Props) {
  const { t } = useLanguage();
  // 이미지 경로 변수 (이미지가 준비되면 여기에 경로를 입력하세요. 예: '/assets/palworld_issue.png')
        // 값이 없으면 화면에 렌더링되지 않습니다.
        const imgPalworldHero = ""; 
        const imgPalworldTag = ""; 
        const imgPalworldIssue = palworldIssueImg;
  
  return (
          <ProjectSection 
            id="project-palworld" 
            number="02" 
            title="PalWorld" 
            subtitle={t("Unreal Engine 5 기반 Multiplayer Pal System 구현 프로젝트", "UE5 Multiplayer Pal System Implementation Project")}
            focus={['Unreal Engine 5', 'C++', 'Gameplay Tag', 'StateTree', 'Multiplayer / Replication']}
          >
            {/* 메인 썸네일/영상 (조건부 렌더링) */}
            {imgPalworldHero && (
              <div className="mb-8 w-full h-64 md:h-[500px] bg-black border border-game-card rounded-xl flex items-center justify-center relative overflow-hidden group">
                <img src={imgPalworldHero} alt="PalWorld Hero" className="w-full h-full object-cover" />
              </div>
            )}

            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <h4 className="font-bold text-game-accent mb-2">{t("어떤 프로젝트인가요?", "What is this project?")}</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("Palworld를 참고하여 Unreal Engine 5에서 Pal Character, AI, 상태 관리, 데이터 구조 및 Multiplayer 환경을 구현한 팀 프로젝트입니다.", "A team project implementing Pal Character, AI, state management, data structures, and multiplayer environments in UE5, inspired by Palworld.")}
                  <br className="mb-2"/>
                  {t("단순한 기능 구현을 넘어, 복잡한 상태와 데이터를 체계적으로 관리하기 위한 Gameplay Architecture 설계와 안정적인 협업 프로세스 구축에 집중했습니다.", "Beyond simple feature implementation, focused on designing Gameplay Architecture for systemic state/data management and establishing a stable collaboration process.")}
                </p>
              </div>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("팀 프로젝트", "Team Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">UE 5, C++, Gameplay Tag, StateTree, Replication</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/PalWorld" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>
            </div>

            {/* 2. 담당 역할 및 기여도 (My Role & Contributions) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 담당 역할 및 기여도", "2. My Role & Contributions")}</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-white mb-2">{t("핵심 담당 역할 (Role)", "Core Role")}</h4>
                  <p className="text-game-accent text-sm mb-4">
                    {t("Pal 상태 관리 아키텍처 설계, 멀티플레이어 네트워크 동기화, AI 연동, 개발 프로세스 관리", "Pal State Architecture, Network Sync, AI Integration, Dev Process PM")}
                  </p>
                  
                  <h4 className="font-bold text-white mb-2">{t("사용 기술 (My Tech Stack)", "My Tech Stack")}</h4>
                  <p className="text-game-muted text-sm">
                    C++, Unreal Engine 5, Gameplay Tag, StateTree, RPC, Replication
                  </p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-game-accent mb-4">{t("내가 직접 구현한 핵심 시스템", "Systems I Actually Implemented")}</h4>
                  <ul className="list-disc list-inside text-game-muted text-sm space-y-3">
                    <li><strong className="text-white">Gameplay Architecture:</strong> Pal 고정 데이터(DataAsset)와 런타임 상태 컴포넌트 분리</li>
                    <li><strong className="text-white">State Management:</strong> Gameplay Tag 계층 구조(Work, Skill, Status) 설계 및 StateTree 연동</li>
                    <li><strong className="text-white">Multiplayer:</strong> FGameplayTagContainer Replication 및 OnRep 기반 Server-Client 상태 동기화</li>
                    <li><strong className="text-white">Dev Process:</strong> Issue 정의 → 구현 → 멀티플레이 테스트 → PR 리뷰 파이프라인 정립</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 3. 핵심 아키텍처 및 문제 해결 */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 핵심 아키텍처 및 문제 해결", "3. Core Architecture & Problem Solving")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h4 className="text-xl font-bold text-white mb-4">① Data & Runtime 분리 구조 (Pal System)</h4>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-4">
                <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Pal마다 서로 다른 데이터와 상태를 가져서, 캐릭터 내부에 모든 데이터를 직접 관리하면 Pal 종류가 증가할수록 코드 복잡도가 폭발적으로 증가할 수 있었습니다.", "Managing all varying data inside the Character directly risked explosive code complexity as Pal types increased.")}</p>
                <p><strong className="text-green-400">Solution:</strong> {t("기본 능력치, 스킬 등 고정적인 정보는 DataAsset으로, Runtime에서 변화하는 상태는 Character와 Component에서 관리하도록 완전히 분리했습니다. 이를 통해 기존 시스템 코드 수정 없이 DataAsset 추가만으로 새로운 Pal을 확장할 수 있었습니다.", "Completely separated fixed info into DataAssets and mutable states into runtime components, enabling new Pal expansions just by adding DataAssets without touching system code.")}</p>
              </div>
              <div className="w-full bg-black/80 border border-game-muted/20 rounded-xl overflow-hidden mt-4 p-6 flex flex-col justify-center items-center">
                <span className="text-game-accent font-mono text-xs mb-4 w-full">▼ Data & Runtime Architecture (Mermaid)</span>
                <Mermaid chart={palArchChart} />
              </div>
            </div>

            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <h4 className="text-xl font-bold text-white mb-4">② Gameplay Tag 기반 상태 설계 및 동기화</h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                  <h5 className="font-bold text-game-accent mb-3">Data Fragmentation (데이터 통합)</h5>
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("작업 적성, 파트너 스킬, 상태 이상 등을 각각 Enum으로 관리할 경우, 상태 종류가 증가할수록 데이터가 파편화되는 문제가 있었습니다.", "Managing aptitudes, skills, and status effects with separate Enums caused severe data fragmentation as states grew.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("기존 Enum 데이터를 Gameplay Tag 계층 구조(Work.*, Skill.*, Status.*)로 통합했습니다. 이를 StateTree 행동 상태와 연결하여 AI 판단과 Gameplay 상태를 공통 인터페이스로 제어하게 했습니다.", "Integrated Enum data into a hierarchical Gameplay Tag structure and linked it with StateTree, creating a unified interface for AI and Gameplay.")}</p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                  <h5 className="font-bold text-game-accent mb-3">Multiplayer Sync (멀티플레이 동기화)</h5>
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Tag를 Local State로만 관리하면 Multiplayer 환경에서 Server와 Client의 상태가 불일치하는 문제가 발생합니다.", "Managing tags locally causes Server-Client state mismatches in Multiplayer.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("FGameplayTagContainer를 Replication으로 관리하고, Client는 OnRep_ActiveTags를 통해 상태 변경을 감지하여 동기화했습니다. Server는 OnRep가 호출되지 않는 특성을 고려해 Delegate를 직접 호출하도록 처리했습니다.", "Replicated FGameplayTagContainer, using OnRep_ActiveTags on Client and direct delegates on Server for perfect multiplayer state synchronization.")}</p>
                </div>
              </div>

              {imgPalworldTag && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-6">
                  <img src={imgPalworldTag} alt="Gameplay Tag" className="w-full h-auto object-contain" />
                </div>
              )}
            </div>

            {/* 4. 나의 개발 방식 (Development Workflow) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("4. 나의 개발 방식 (Development Workflow)", "4. Development Workflow")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 mb-8 text-sm md:text-base font-mono">
                <div className="bg-game-dark border border-blue-500/50 text-blue-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(59,130,246,0.2)]">1. Issue 정의</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-purple-500/50 text-purple-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(168,85,247,0.2)]">2. 기능 구현</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-green-500/50 text-green-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(34,197,94,0.2)]">3. PIE 멀티플레이 테스트</div>
                <span className="text-game-muted">➔</span>
                <div className="bg-game-dark border border-yellow-500/50 text-yellow-400 px-4 py-2 rounded shadow-[0_0_10px_rgba(234,179,8,0.2)]">4. Pull Request & Review</div>
              </div>

              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm">
                <p className="text-game-muted leading-relaxed">
                  {t("기능을 바로 구현하기보다 ", "Rather than coding immediately, ")}
                  <strong className="text-white">{t("작업 공통사항을 팀원들과 공유하기 위해 GitHub Issue를 적극적으로 활용", "I actively used GitHub Issues to share common practices and knowledge with the team.")}</strong>
                  {t("했습니다. 팀 프로젝트인 만큼, 개발 환경 세팅이나 복잡한 데이터 구조(Gameplay Tag 등)의 명세 등 파편화될 수 있는 정보들을 Issue에 문서화하여 합의를 선행했습니다.", " Given it's a team project, I documented dev environment setups and complex data structures (like Gameplay Tags) in Issues to build consensus before writing code.")}
                  <br/><br/>
                  {t("모든 코드 작업 역시 Issue에서 출발하여 단일 기능 단위로 Branch를 나누었고, 구현 후에는 반드시 PIE 2인 환경에서 Multiplayer 동작을 검증한 뒤 PR을 올리는 탄탄한 파이프라인을 정립했습니다.", "All coding tasks also started from an Issue, branched out by feature, and rigorously tested in a 2-client PIE environment for multiplayer sync before raising a PR.")}
                </p>
              </div>

              {imgPalworldIssue && (
                <div className="w-full bg-black border border-game-muted/20 rounded-xl overflow-hidden mt-6">
                  <img src={imgPalworldIssue} alt="GitHub Issue / PR" onClick={() => setSelectedImg(imgPalworldIssue)} className="w-full h-auto object-contain cursor-pointer hover:opacity-90 transition-opacity" />
                </div>
              )}
            </div>

          </ProjectSection>
        );
}
