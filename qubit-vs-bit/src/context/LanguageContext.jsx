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
        }
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
        }
    }
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