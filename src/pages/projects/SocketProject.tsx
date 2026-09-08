import { useLanguage } from '../../contexts/LanguageContext';
import { ProjectSection } from '../../components/ProjectSection';
import Mermaid from '../../components/Mermaid';



const socketArchChart = `flowchart LR
    A["Client"] -->|"Socket Request"| B["Server"]
    B -->|"Business Request"| C["DAO"]
    C --> D[("MariaDB")]

    D --> C
    C --> B
    B -->|"Socket Response"| A`;

const socketFlowChart = `sequenceDiagram
    participant Client
    participant Server

    Client->>Server: 1 (Read Request)
    Note over Server: TODO Fetch (DB)
    Server-->>Client: TODO Data
    Server-->>Client: EOF (End of Message)

    Client->>Server: 3 (Create Request)
    Note over Server: TODO Insert (DB)
    Server-->>Client: Success Message
    Server-->>Client: EOF (End of Message)`;

export default function SocketProject() {
  const { t } = useLanguage();
  
  
  return (
          <ProjectSection 
            id="project-socket" 
            number="03" 
            title="ToDoList" 
            subtitle={t("Java Socket 기반 Client-Server ToDo 관리 시스템", "Java Socket-based Client-Server ToDo Management System")}
            focus={['Java', 'Socket Programming', 'JDBC', 'MariaDB', 'CS Fundamentals']}
          >
            {/* 1. 프로젝트 개요 (Overview) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8">
              <h3 className="text-2xl font-bold mb-4 text-white border-b border-game-muted/30 pb-2">{t("1. 프로젝트 개요", "1. Project Overview")}</h3>
              
              <div className="mb-6">
                <p className="text-game-muted text-sm leading-relaxed mb-4">
                  {t("간단한 ToDo CRUD 기능을 Socket 통신 기반 Client-Server 구조로 구현한 개인 프로젝트입니다.", "A personal project implementing simple ToDo CRUD features on a Socket-based Client-Server architecture.")}
                  <br className="mb-2"/>
                  {t("클라이언트가 DB에 직접 접근하지 않고 Socket Server를 통해 요청하도록 구성하여 통신 계층과 데이터 접근 계층을 분리하고, Java Socket과 JDBC를 직접 사용하며 네트워크 및 DB 통신의 기본 구조를 학습했습니다.", "Separated the communication and data access layers by making the client request via a Socket Server instead of accessing the DB directly. Learned the fundamentals of networking and database communication using pure Java Socket and JDBC.")}
                </p>
              </div>

              <div className="bg-game-dark p-4 rounded border border-game-muted/20 flex flex-col md:flex-row gap-6 text-sm">
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Team Size</span>
                  <span className="text-white">{t("개인 프로젝트", "Personal Project")}</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">Project Tech Stack</span>
                  <span className="text-white">Java, Socket, JDBC, MariaDB</span>
                </div>
                <div className="flex-1">
                  <span className="text-game-accent font-mono block mb-1">GitHub Repository</span>
                  <a href="https://github.com/ByungilOh-Fillip/ToDoList" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline">{t("소스코드 확인하기 (Link)", "View Source Code")}</a>
                </div>
              </div>
            </div>

            {/* 2. 핵심 아키텍처 및 구현 (Architecture & Implementation) */}
            <div className="bg-game-card p-8 rounded-xl border border-game-accent/30 mb-12 relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-game-accent"></div>
              <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("2. 핵심 구조 및 주요 구현", "2. Core Architecture & Implementation")}</h3>
              
              <div className="flex flex-col gap-8 mb-8">
                <div>
                  <h4 className="font-bold text-white mb-2">{t("Architecture Message", "Architecture Message")}</h4>
                  <p className="text-game-accent text-sm mb-6 leading-relaxed border-l-2 border-game-accent pl-3 py-1">
                    {t("Client는 DB에 직접 접근하지 않고 Socket Server를 통해 제한된 기능을 요청하도록 구성했습니다.", "The Client does not access the DB directly, but requests limited functionalities through the Socket Server.")}
                  </p>
                  
                  <h4 className="font-bold text-white mb-2">{t("주요 구현 내용", "Key Implementations")}</h4>
                  <ul className="list-disc list-inside text-game-muted text-sm space-y-3">
                    <li><strong className="text-white">Client-Server:</strong> Java ServerSocket / Socket 기반 통신 및 BufferedReader / BufferedWriter 데이터 송수신</li>
                    <li><strong className="text-white">Data Separation:</strong> DTO를 이용한 데이터 모델 분리 및 DAO를 통한 로직 분리</li>
                    <li><strong className="text-white">DB Access:</strong> JDBC + DAO를 이용한 MariaDB 접근 및 PreparedStatement 기반 안전한 SQL 처리</li>
                  </ul>
                </div>
                
                {/* Mermaid Architecture Flow */}
                <div className="bg-black/80 p-6 rounded-lg border border-game-muted/20 flex flex-col justify-center items-center">
                  <h5 className="font-mono text-xs text-game-accent mb-4 w-full">▼ Architecture Flow (Mermaid)</h5>
                  <Mermaid chart={socketArchChart} />
                </div>
              </div>
            </div>

            {/* 3. 문제 해결 */}
            <h3 className="text-2xl font-bold mb-6 text-white border-b border-game-muted/30 pb-4">{t("3. 문제 해결 (Application Protocol 설계)", "3. Problem Solving (App Protocol Design)")}</h3>
            
            <div className="bg-game-card p-8 rounded-xl border border-game-card/50 mb-8 flex flex-col gap-8">
              <div className="flex-1">
                <h4 className="text-xl font-bold text-white mb-4">Socket 응답 종료 시점 판별 (EOF Protocol)</h4>
                <div className="bg-game-dark p-6 rounded-lg border border-game-muted/20 text-sm mb-4">
                  <p className="mb-3"><strong className="text-red-400">Problem:</strong> {t("Socket의 스트림 기반 통신에서는 여러 줄의 응답을 전송한 뒤 클라이언트가 메시지의 끝을 명확히 구분할 기준(종료 시점)이 없었습니다.", "In stream-based socket communication, the client had no clear standard to distinguish the end of a multi-line message.")}</p>
                  <p><strong className="text-green-400">Solution:</strong> {t("애플리케이션 레벨에서 'EOF'라는 문자열을 종료 신호로 정의하여, Request → Response Data → EOF 형태의 간단한 나만의 통신 규칙(Protocol)을 직접 구성했습니다.", "Defined 'EOF' as an application-level termination signal, establishing a simple custom protocol in the format: Request → Response Data → EOF.")}</p>
                </div>
              </div>
              
              <div className="flex-1 bg-black/80 border border-game-muted/20 rounded-xl overflow-hidden p-6 flex flex-col justify-center">
                <span className="text-game-accent font-mono text-xs mb-4">▼ Socket Communication Flow (Mermaid)</span>
                <Mermaid chart={socketFlowChart} />
              </div>
            </div>
            
            <div className="bg-game-dark p-6 rounded-xl border border-game-muted/30 text-center mt-8">
              <p className="text-game-muted text-sm leading-relaxed">
                <strong className="text-white block mb-2">{t("💡 Project Point", "💡 Project Point")}</strong>
                {t("작은 기능을 직접 구현하며 Socket 통신, Client-Server 분리 구조, JDBC, DAO 패턴 등 컴퓨터 공학(CS)의 핵심 기초를 깊이 있게 이해하고 학습한 프로젝트입니다.", "A CS fundamentals project that deeply explores Socket communication, Client-Server separation, JDBC, and the DAO pattern by implementing core functionalities from scratch.")}
              </p>
            </div>

          </ProjectSection>
        );
}
