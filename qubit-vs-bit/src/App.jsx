import {useState} from 'react';

function App() {
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
    <div className='app-container'>
      <header>
        <h1>Descubriendo el Mundo Cuántico</h1>
        <p>Un viaje interactivo desde el Bit hasta la Criptografía Cuántica</p>
      </header>

      <main>
        {currentModule === 1 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
        {currentModule === 2 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
        {currentModule === 3 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
        {currentModule === 4 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
        {currentModule === 5 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
        {currentModule === 6 && <div>Cargando Módulo 1: Bit vs Qubit...</div>}
      </main>
    </div>
  )
}