import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Module1 from './components/modules/Module1';
import Module2 from './components/modules/Module2';
import Module3 from './components/modules/Module3';
import Module4 from './components/modules/Module4';
import Module5 from './components/modules/Module5';
import Module6 from './components/modules/Module6';
import Intro from './components/Intro';
import Outro from './components/Outro';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function AppContent() {
  const {t, toggleLanguage, language} = useLanguage();
  const[currentModule, setCurrentModule] = useState(1);
  const totalModules = 6;
  const [hasStarted, setHasStarted] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const nextModule = () => {
    if(currentModule === totalModules) {
      setHasFinished(true);
    } else {
      setCurrentModule((prev) => prev + 1);
    }
  }

  const prevModule = () => {
    if(currentModule > 1) {
      setCurrentModule(currentModule - 1)
    }
  }

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, [currentModule, hasStarted, hasFinished]);

  return (
    <div className={'app-container ${language}'}>
      <header>
        <div className='header-main'>
          <h1 
            onClick={() => {
              setHasStarted(false);
              setHasFinished(false);
              setCurrentModule(1);
            }}
            style={{ 
              cursor: 'pointer', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px' 
            }}
            title="Volver al inicio"
          >
            {t.title}
          </h1>
          <button onClick={toggleLanguage} className='lang-toggle'>
            {language === 'es' ? '🇺🇸 English': '🇪🇸 Español'}
          </button>
        </div>
      </header>

      <main className='main-content'>
        {!hasStarted ? (
          <Intro onStart={() => setHasStarted(true)}></Intro>
        ) : hasFinished ? 
        (
          <Outro onRestart={() => {
            setHasFinished(false);
            setCurrentModule(1);
          }}></Outro>
        ) : (
          <motion.div
            key={currentModule}
          >
            {currentModule === 1 && <Module1 />}
            {currentModule === 2 && <Module2 />}
            {currentModule === 3 && <Module3 />}
            {currentModule === 4 && <Module4 />}
            {currentModule === 5 && <Module5 />}
            {currentModule === 6 && <Module6 />}
          </motion.div>
        )}
      </main>

      {hasStarted && !hasFinished && (
        <footer className='navigation'>
          <button 
            className='nav-btn prev'
            onClick={prevModule}
            disabled={currentModule === 1}  
          >
            <ArrowLeft size={18}></ArrowLeft>{t.prev}
          </button>
          <span>
            {t.text1} {currentModule} {t.text2} {totalModules}
          </span>
          <button 
            className='nav-btn next'
            onClick={nextModule}
          >
            {currentModule === totalModules ? t.next + " (Final)" : t.next} <ArrowRight size={18} />
          </button>
        </footer>
      )}
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
};