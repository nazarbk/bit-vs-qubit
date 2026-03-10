import React, {createContext, useState, useContext} from 'react';

const translations = {
    es: {
        title: "Quantum Lab",
        subtitle: "Un viaje interactivo desde el Bit hasta la Criptografía",
        next: "Siguiente",
        prev: "Anterior",
        module1: {
            title: "1. El Bit vs El Qubit",
            theory: {
                bitTitle: "¿Qué es un Bit?",
                bitText: "En la informática clásica, un bit es la unidad mínima de información. Imaginalo como un interruptor: solo puede estar en un estado a la vez, encendido (1) o apagado (0). Toda la tecnología que conoces hoy se construye combinando miles de millones de estos interruptores.",
                qubitTitle: "¿Qué es un Qubit?",
                qubitText: "Un bit cuántico (qubit) es diferente. Gracias a las leyes de la física a nivel atómico, un qubit no tiene que elegir entre 0 o 1. Puede ser una combinación de ambos. Esto permite que los ordenadores cuánticos procesen información de una manera que los clásicos nunca podrán."
            },
            interactionTitle: "Prueba la diferencia",
            bitLabel: "BIT CLÁSICO",
            qubitLabel: "BIT CUÁNTICO",
            qubitInfo: "Superposición de estados"
        },
        module2: {
            title: "2. Superposición",
            theory: {
                title: "¿Qué significa estar en superposición?",
                text1: "No es que el qubit sea '0 y 1' al mismo tiempo como un error del sistema. Es que el qubit existe en una 'onda de posibilidades'.",
                text2: "En física cuántica, hasta que no interactuamos con el qubit, este no se decide por un estado. Es como una moneda girando sobre una mesa: mientras gira, no es ni cara ni cruz, es un estado dinámico que contiene ambas posibilidades.",
            },
            interactionTitle: "Lanza la moneda cuántica",
            status1: "ESTADO COLAPSADO",
            status2: "EN SUPERPOSICIÓN",
            state1: "Calculando probabilidades (50% |0⟩ - 50% |1⟩)...",
            state2: "La moneda ha colapsado en el estado",
            action1: "Detener (Medir)",
            action2: "Volver a girar"
        },
        module3: {
            title: "3. La Medida (El Colapso)",
            theory: {
                title: "El Efecto Observador",
                text1: "En el mundo clásico, mirar un objeto no lo cambia. Si miras un coche aparcado, sigue estando aparcado. Pero en el mundo cuántico, el simple acto de 'medir' u 'observar' altera la realidad.",
                text2: "Mientras no miramos, el qubit es una onda de probabilidades (superposición). En el instante en que lo medimos, esa onda se rompe o 'colapsa' en un estado único y definitivo: un 0 o un 1. ¡La magia desaparece al mirarla!"
            },
            interactionTitle: "La Caja Tímida",
            unobserved: "ONDA DE PROBABILIDAD (NO OBSERVADA)",
            observed: "PARTÍCULA COLAPSADA (OBSERVADA)",
            btnObserve: "Observar (Medir)",
            btnReset: "Cerrar caja (Restaurar onda)",
            state1: "La onda fluye en superposición",
            state2: "¡Colapso detectado! Estado final:"
        },
        module4: {
            title: "4. El Teorema de No-Clonación",
            theory: {
                title: "El fin del Ctrl+C / Ctrl+V",
                text1: "En tu ordenador actual, copiar información es trivial. Puedes hacer un millón de copias exactas de un archivo PDF sin alterar el original.",
                text2: "En cuántica, esto es imposible. Para copiar algo, primero tienes que 'leerlo' (medirlo). Pero como vimos antes, medir un qubit en superposición hace que colapse. Al intentar copiarlo, destruyes irremediablemente el estado original y obtienes basura."
            },
            interaction: "La Máquina Clonadora",
            classicalLabel: "DSATOS CLÁSICOS (BIT)",
            quantumLabel: "DATOS CUÁNTICOS (QUBIT)",
            btnClone: "Intentar Clonar",
            btnReset: "Limpiar Máquina",
            successMsg: "¡Clonación exitosa! Original intacto.",
            errorMsg: "ERROR: Estado original destruido al medir.",
            formula: "clonar",
            formula2: "Falso",
            instruction: "Esperando superposición...",
            instruction2: "Superposición estable..."
        },
        module5: {
            title: "5. Entrelazamiento",
            theory: {
                title: "Acción fantasmal a distancia",
                text1: "El entrelazamiento ocurre cuando dos qubits se unen tan íntimamente que dejan de ser independientes. Pasan a compartir un único estado cuántico.",
                text2: "Si separas estos qubits entrelazados a años luz de distancia y mides uno de ellos (haciendo que colapse en 0 o 1), su gemelo colapsará INSTANTÁNEAMENTE en el mismo estado. ¡Es como si se comunicaran más rápido que la luz!"
            },
            interaction: "Los Portales Gemelos",
            earth: "Alice (Tierra)",
            mars: "Bob (Marte)",
            btnMeasure: "Medir Qubit",
            btnReset: "Crear nuevo par entrelazado",
            statusLinked: "Estado: Entrelazados en Superposición",
            statusCollapsed: "Estado: Vínculo roto. Ambos colapsados."
        },
    },
    en: { 
        title: "Quantum Lab",
        subtitle: "An interactive journey from Bit to Cryptography",
        next: "Next",
        prev: "Previous",
        module1: {
            title: "1. Bit vs Qubit",
            theory: {
                bitTitle: "¿What is a Bit?",
                bitText: "In classical computing, a bit is the smallest unit of information. Imagine it as a light switch: it can only be in one state at a time, ON (1) or OFF (0). All the technology you know today is built by combining billions of these switches.",
                qubitTitle: "¿What is a Qubit?",
                qubitText: "A quantum bit (qubit) is different. Thanks to the laws of physics at the atomic level, a qubit doesn't have to choose between 0 or 1. It can be a combination of both. This allows quantum computers to process information in ways classical ones never could."
            },
            interactionTitle: "Test the difference",
            bitLabel: "CLASSICAL BIT",
            qubitLabel: "QUANTUM BIT",
            qubitInfo: "State Superposition"
        },
        module2: {
            title: "2. Superposition",
            theory: {
                title: "¿What does Superposition mean?",
                text1: "It's not that the qubit is '0 and 1' at the same time like a system error. It's that the qubit exists in a 'wave of possibilities'.",
                text2: "In quantum physics, until we interact with the qubit, it doesn't settle on a state. It's like a coin spinning on a table: while it's spinning, it's neither heads nor tails, it's a dynamic state containing both possibilities."
            },
            interactionTitle: "Toss the quantum coin",
            status1: "COLLAPSED STATE",
            status2: "IN SUPERPOSITION",
            state1: "Calculating probabilities (50% |0⟩ - 50% |1⟩)...",
            state2: "The coin has collapsed into the state",
            action1: "Stop (Measure)",
            action2: "Turn again"
        },
        module3: {
            title: "3. Measurement (The Collapse)",
            theory: {
                title: "The Observer Effect",
                text1: "In the classical world, looking at an object doesn't change it. If you look at a parked car, it stays parked. But in the quantum world, the simple act of 'measuring' or 'observing' alters reality.",
                text2: "While unobserved, the qubit is a wave of probabilities (superposition). The instant we measure it, that wave breaks or 'collapses' into a single, definitive state: a 0 or a 1. The magic disappears when you look!"
            },
            interactionTitle: "The Shy Box",
            unobserved: "PROBABILITY WAVE (UNOBSERVED)",
            observed: "COLLAPSED PARTICLE (OBSERVED)",
            btnObserve: "Observe (Measure)",
            btnReset: "Close box (Restore wave)",
            state1: "The wave flows in superposition,",
            state2: "Collapse detected! Final state:"
        },
        module4: {
            title: "4. The No-Cloning Theorem",
            theory: {
                title: "The end of Ctrl+C / Ctrl+V",
                text1: "On your current computer, copying information is trivial. You can make a million exact copies of a PDF file without altering the original.",
                text2: "In quantum mechanics, this is impossible. To copy something, you first have to 'read' (measure) it. But as we saw earlier, measuring a qubit in superposition causes it to collapse. By trying to copy it, you irreversibly destroy the original state and get garbage."
            },
            interaction: "The Cloning Machine",
            classicalLabel: "CLASSICAL DATA (BIT)",
            quantumLabel: "QUANTUM DATA (QUBIT)",
            btnClone: "Attempt to Clone",
            btnReset: "Clear Machine",
            successMsg: "Cloning successful! Original intact.",
            errorMsg: "ERROR: Original state destroyed upon measurement.",
            formula: "clone",
            formula2: "False",
            instruction: "Waiting instruction...",
            instruction2: "Stable superposition..."
        },
        module5: {
            title: "5. Entanglement",
            theory: {
                title: "Spooky action at a distance",
                text1: "Entanglement happens when two qubits become so intimately linked that they are no longer independent. They share a single quantum state.",
                text2: "If you separate these entangled qubits by light-years and measure one of them (causing it to collapse to 0 or 1), its twin will INSTANTLY collapse to the exact same state. It's as if they communicate faster than light!"
            },
            interaction: "The Twin Portals",
            earth: "Alice (Earth)",
            mars: "Bob (Mars)",
            btnMeasure: "Measure Qubit",
            btnReset: "Create new entangled pair",
            statusLinked: "Status: Entangled in Superposition",
            statusCollapsed: "Status: Link broken. Both collapsed."
        }
    },
};

const LanguageContext = createContext();

export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('es');

    const t = translations[language];

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'es' ? 'en' : 'es'));
    };

    return (
        <LanguageContext.Provider value={{t, language, toggleLanguage}}>
            {children}
        </LanguageContext.Provider> 
    );
};

export const useLanguage = () => useContext(LanguageContext);