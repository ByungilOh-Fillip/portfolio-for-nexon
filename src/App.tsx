import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './contexts/LanguageContext';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';

function Nav() {
  const { language, toggleLanguage, t } = useLanguage();
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="fixed top-0 w-full bg-game-dark/80 backdrop-blur-md border-b border-game-card z-50 px-8 py-4 flex justify-between items-center">
      <Link to="/" className="font-mono font-bold text-xl text-white">Oh Byungil<span className="text-game-accent">.</span></Link>
      <div className="flex items-center gap-6">
        {isHome && (
          <div className="hidden md:flex gap-6 text-sm font-mono">
            <a href="#about" className="hover:text-game-accent transition-colors">01. {t('소개', 'About')}</a>
            <a href="#projects" className="hover:text-game-accent transition-colors">02. {t('프로젝트', 'Projects')}</a>
            <a href="#other" className="hover:text-game-accent transition-colors">03. {t('기타', 'Other')}</a>
            <a href="#awards" className="hover:text-game-accent transition-colors">04. {t('수상', 'Awards')}</a>
            <a href="#skills" className="hover:text-game-accent transition-colors">05. {t('기술', 'Skills')}</a>
          </div>
        )}
        <button onClick={toggleLanguage} className="text-xs font-bold border border-game-muted/50 px-2 py-1 rounded hover:bg-game-card transition-colors">
          {language === 'ko' ? 'EN' : 'KO'}
        </button>
      </div>
    </nav>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <div className="bg-game-dark min-h-screen text-game-text selection:bg-game-accent selection:text-white flex flex-col">
          <Nav />

          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/project/:id" element={<ProjectDetail />} />
            </Routes>
          </main>

          <footer className="py-8 text-center text-game-muted font-mono text-sm border-t border-game-card">
            <p>Built for Nexon Nectorial Application</p>
            <p className="mt-2 text-xs">React, Tailwind CSS, Framer Motion</p>
          </footer>
        </div>
      </Router>
    </LanguageProvider>
  );
}

export default App;
