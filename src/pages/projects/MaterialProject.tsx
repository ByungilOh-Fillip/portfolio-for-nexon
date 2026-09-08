import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectSection } from '../../components/ProjectSection';
import Mermaid from '../../components/Mermaid';
import materialHelperHeroImg from '../../assets/material_helper/material_helper_hero.png';
import materialHelperSandboxImg from '../../assets/material_helper/material_helper_sandbox.png';
import aireMaterialUsageImg from '../../assets/aire/aire_material_usage.png';


const materialArchChart = `flowchart LR
    A["React UI"] --> B["React Flow<br/>Material Graph"]
    B --> C["Material<br/>Interpreter"]
    C --> D["Three.js<br/>Visualizer"]
    B --> E["UE5 T3D<br/>Exporter"]
    E --> F["Unreal Engine"]`;

interface Props {
  setSelectedImg: (img: string | null) => void;
}

export default function MaterialProject({ setSelectedImg }: Props) {
  const { t } = useLanguage();
  
  
  return (
          <ProjectSection 
            id="project-material" 
            number="04" 
            title="Material Helper" 
            subtitle={t("Unreal Engine Material 작업을 웹에서 프로토타이핑하고, 실제 UE5 Material Editor로 결과물을 옮길 수 있도록 만든 개발자용 툴", "A developer tool designed to prototype Unreal Engine Materials on the web and port the results directly to the UE5 Material Editor")}
            focus={['Tool Architecture', 'Graph Interpreter', 'T3D Exporter', 'Developer Productivity']}
          >
            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("단순한 웹 뷰어를 넘어, UE5의 Material Expression 구조를 웹에서 추상화하고 이를 다시 Unreal의 T3D 포맷으로 변환하는 파이프라인을 구축한 '개발 생산성 향상 도구'입니다.", "Beyond a simple web viewer, this is a developer productivity tool that abstracts UE5 Material Expressions on the web and builds a pipeline to convert them back into Unreal's T3D format.")}
                </p>
              </div>

              <a href="https://byungiloh-fillip.github.io/Material_Helper_Byungil/" target="_blank" rel="noopener noreferrer" className="block mb-8 w-full bg-black border border-game-accent/50 hover:border-game-accent rounded-xl flex items-center justify-center relative overflow-hidden group transition-all">
                <img src={materialHelperHeroImg} alt="Material Helper Thumbnail" className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-game-accent text-black px-6 py-3 rounded-full font-bold shadow-lg">Try Material Helper (Web)</span>
                </div>
              </a>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("개인 프로젝트", "Personal Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">React Flow, Three.js, TypeScript</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/Material_Helper_Byungil" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>

              {/* AI-Assisted Rapid Development Callout */}
              <div className="mt-6 bg-purple-900/20 border border-purple-500/30 p-5 rounded-lg flex flex-col md:flex-row items-start md:items-center gap-4">
                <span className="text-3xl hidden md:block">⚡</span>
                <p className="text-purple-200 text-sm leading-relaxed">
                  <strong className="text-purple-400 text-base">{t("AI-Assisted 1-Day Project:", "AI-Assisted 1-Day Project:")}</strong><br/>
                  {t("생성형 AI를 적극적으로 활용하여 아이디어 기획부터 T3D 변환 파이프라인 구축, 실시간 렌더링, 그리고 웹 배포까지 단 하루(1일) 만에 속도감 있게 완성한 프로젝트입니다.", "A project completed in just one day—from initial ideation to T3D pipeline implementation, real-time rendering, and web deployment—by aggressively leveraging Generative AI.")}
                </p>
              </div>
            </div>

            {/* 2. 아키텍처 (Architecture) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 아키텍처 (Architecture)", "2. Architecture")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8 flex flex-col gap-8">
              <div>
                <p className="text-game-accent text-sm mb-6 leading-relaxed border-l-2 border-game-accent pl-3 py-1">
                  {t("웹에서 구성한 Material Graph를 하나의 데이터 구조로 관리하고, 동일한 Graph 데이터를 Visualizer 계층과 UE5 Exporter 계층에서 각각 소비하도록 시스템을 설계했습니다.", "Managed the web-configured Material Graph as a single data structure, designing the system so the same graph data is consumed independently by the Visualizer layer and the UE5 Exporter layer.")}
                </p>
              </div>
              <div className="bg-black/80 p-6 rounded-lg border border-game-muted/20 flex flex-col items-center justify-center">
                <h5 className="font-mono text-xs text-game-accent mb-4 w-full">▼ Architecture Flow (Mermaid)</h5>
                <Mermaid chart={materialArchChart} />
              </div>
            </div>

            {/* 3. 핵심 구현 (Core Implementation) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 핵심 구현 (Core Implementation)", "3. Core Implementation")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <div className="flex flex-col gap-8">
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                    <span className="text-game-accent font-mono">01</span> Graph ➔ Unreal (T3D Exporter)
                  </h4>
                  <p className="text-game-muted text-sm leading-relaxed">
                    {t("React Flow의 Node와 Edge를 순회하며 언리얼 엔진의 Material Expression 클래스(예: MaterialExpressionMultiply, Sine 등)로 매핑하는 변환 계층을 직접 구현했습니다. 런타임에 노드 속성과 Pin LinkedTo 관계를 분석하여 언리얼이 해석 가능한 순수 T3D 텍스트 포맷을 생성해 내며, 이를 클립보드에 복사하여 언리얼 에디터에 그대로 붙여넣을 수 있습니다.", "Traverses React Flow Nodes/Edges and maps them directly to Unreal Engine Material Expression classes. Evaluates node attributes and pin 'LinkedTo' relations at runtime to generate pure T3D text format that Unreal can parse, allowing users to paste it directly into the Material Editor.")}
                  </p>
                </div>
                
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20">
                  <h4 className="font-bold text-white mb-3 text-lg flex items-center gap-2">
                    <span className="text-game-accent font-mono">02</span> Graph ➔ Visualizer (Graph Interpreter)
                  </h4>
                  <p className="text-game-muted text-sm leading-relaxed">
                    {t("단순히 노드를 화면에 그리는 것에 그치지 않고, 노드의 연결 구조를 재귀적으로 추적하며 연산하는 자체 Graph Interpreter(evaluateGraph)를 구현했습니다. 순환 참조를 막기 위한 recursion depth guard를 포함하며, Three.js 기반의 WebGL Viewport에서 1,600개의 샘플 연산을 통해 실시간 Color/Mask 결과를 시각화합니다.", "Beyond simply rendering nodes on screen, I implemented a custom Graph Interpreter that recursively traces and evaluates node connections. It includes recursion depth guards to prevent infinite loops, and visualizes real-time Color/Mask outputs via 1,600 sample calculations on a Three.js WebGL viewport.")}
                  </p>
                </div>
              </div>
            </div>

            {/* 4. 문제 해결 (Problem Solving) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("4. 문제 해결 (Problem Solving)", "4. Problem Solving")}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">① Data 변환 (T3D)</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 웹 작업물을 엔진에서 재작업</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("웹에서 구성한 그래프 결과를 실제 UE5에서 사용하려면 에디터에서 똑같이 노드를 다시 이어야 하는 비효율이 발생했습니다. 이를 해결하기 위해 T3D Exporter를 구현하여 엔진으로 즉시 이식 가능하게 만들었습니다.", "To solve the inefficiency of manually recreating web-prototyped graphs in UE5, I implemented a T3D Exporter, enabling immediate porting to the engine.")}
                </p>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">② Runtime 시각화</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 노드 결과물 실시간 확인 불가</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("노드 텍스트만으로는 연산 결과를 알 수 없었습니다. 자체 Interpreter 엔진과 Three.js 뷰포트를 연동하여 머티리얼 연산 결과를 실시간(Runtime)으로 눈으로 볼 수 있게 해결했습니다.", "Since text nodes couldn't show results, I integrated a custom interpreter engine with a Three.js viewport to visualize material calculations in real-time.")}
                </p>
              </div>
              <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 flex flex-col">
                <h4 className="font-bold text-game-accent mb-3">③ 구조적 오류 방지</h4>
                <p className="text-red-400 text-sm mb-2 font-bold">문제: 잘못된 논리 그래프 생성</p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("무분별한 연결로 인한 Self-Loop나 중복 Input 등의 오류를 막기 위해, 입력(UI) 단계에서 isValidConnection() 로직을 거쳐 잘못된 논리 그래프 생성을 원천 차단했습니다.", "To prevent logic errors like Self-Loops or duplicate inputs, I implemented validation logic at the UI input stage to fundamentally block the creation of invalid logic graphs.")}
                </p>
              </div>
            </div>

            {/* 5. 실무 적용 사례 (Real-world Application) */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("5. 실무 적용 사례 (Real-world Application)", "5. Real-world Application")}</h3>
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-12">
              <div className="mb-8">
                <h4 className="text-xl font-bold text-game-accent mb-4">AIRE 프로젝트 UI 개발 적용</h4>
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("직접 개발한 Material Helper 툴이 단순한 토이 프로젝트에 그치지 않도록, 실제 ", "To ensure this wasn't just a toy project, I actively used the Material Helper tool to develop dynamic UI elements (like the waving 'M_Hunger' fluid effect) for the actual ")}<strong className="text-white">AIRE</strong>{t(" 프로젝트의 동적인 UI(M_Hunger 출렁이는 파도 효과)를 제작하는 데 활용했습니다.", " project.")}
                </p>
                <p className="text-game-muted text-sm leading-relaxed">
                  {t("웹에서 Shader 로직을 먼저 프로토타이핑하여 시각적 결과(Wave, Masking)를 확인한 뒤, T3D Exporter를 통해 UE5로 즉시 넘겨 게임에 적용했습니다. ", "I prototyped the shader logic on the web to visually verify the wave and masking effects, then immediately exported it to UE5 via the T3D Exporter. This is a successful pipeline experience where ")}<strong className="text-white">{t("툴 개발이 실제 게임 개발의 생산성 향상으로 직결된 성공적인 파이프라인 경험", "tool development directly led to increased productivity in actual game development")}</strong>{t("입니다.", ".")}
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="w-full bg-black/50 border border-game-muted/20 rounded-xl p-2 overflow-hidden">
                  <img src={aireMaterialUsageImg} alt="AIRE Material Usage" onClick={() => setSelectedImg(aireMaterialUsageImg)} className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity" />
                </div>
                <div className="w-full bg-black/50 border border-game-muted/20 rounded-xl p-2 overflow-hidden">
                  <img 
                    src={materialHelperSandboxImg} 
                    alt="Material Helper Sandbox" 
                    className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity" 
                    onClick={() => setSelectedImg(materialHelperSandboxImg)}
                  />
                </div>
              </div>
            </div>
          </ProjectSection>
        );
}
