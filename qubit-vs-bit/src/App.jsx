import { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import Module1 from './components/modules/Module1';
import Module2 from './components/modules/Module2';
import { ArrowLeft, ArrowRight } from 'lucide-react';

function AppContent() {
  const {t, toggleLanguage, language} = useLanguage();
  const[currentModule, setCurrentModule] = useState(1);
  const totalModules = 6;

  const nextModule = () => {
    if(currentModule < totalModules) {
      setCurrentModule(currentModule + 1);
    }
  }

  const prevModule = () => {
    if(currentModule > 1) {
      setCurrentModule(currentModule - 1)
    }
  }

  return (
    <div className={'app-container ${language}'}>
      <header>
        <div className='header-main'>
          <h1>{t.title}</h1>
          <button onClick={toggleLanguage} className='lang-toggle'>
            {language === 'es' ? '🇺🇸 English': '🇪🇸 Español'}
          </button>
        </div>
        <p>{t.subtitle}</p>
      </header>

      <main>
        {currentModule === 1 && <Module1 />}
        {currentModule === 2 && <Module2 />}
        {currentModule === 3 && <div>Cargando Módulo 3: La medida...</div>}
        {currentModule === 4 && <div>Cargando Módulo 4: No-clonación...</div>}
        {currentModule === 5 && <div>Cargando Módulo 5: Entrelazamiento</div>}
        {currentModule === 6 && <div>Cargando Módulo 6: Criptografía</div>}
      </main>

      <footer className='navigation'>
        <button 
          className='nav-btn prev'
          onClick={prevModule}
          disabled={currentModule === 1}  
        >
          <ArrowLeft size={18}></ArrowLeft>{t.prev}
        </button>
        <span>
          Módulo {currentModule} de {totalModules}
        </span>
        <button 
          className='nav-btn next'
          onClick={nextModule}
          disabled={currentModule === totalModules}
        >
          {t.next}<ArrowRight size={18}></ArrowRight>
        </button>
      </footer>
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