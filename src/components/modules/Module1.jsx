import {useState, useEffect} from 'react';
import {motion} from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {Power, Zap} from 'lucide-react';
import { BlockMath } from 'react-katex';

const Module1 = () => {
    const {t} = useLanguage();
    const [bitStatus, setBitStatus] = useState(0);

    const [glitchValue, setGlitchValue] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setGlitchValue((prev) => (prev === '0' ? '1' : '0'));
        }, 120);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='module-content'>
            <header className='module-header'>
                <h2>{t.module1.title}</h2>
            </header>

            <div className='theory-section'>
                <div className='theory-block'>
                    <h3>
                       {t.module1.theory.bitTitle} 
                    </h3>
                    <p>
                        {t.module1.theory.bitText}
                    </p>
                </div>
                <div className='theory-block highlight'>
                    <h3>
                        {t.module1.theory.qubitTitle}
                    </h3>
                    <p>
                        {t.module1.theory.qubitText}
                    </p>
                    <div className='formula-box'>
                       <BlockMath math="|ψ⟩ = α|0⟩ + β|1⟩" />
                    </div>
                </div>
            </div>

            <h3 className='section-divider'> 
                {t.module1.interactionTitle}
            </h3>
            <div className='interaction-grid'>
                <div className='card'>
                    <span className='badge'>{t.module1.bitLabel}</span>
                    <div className='interactive-zone'>
                        <div className={`bit-visual ${bitStatus === 1 ? 'on' : 'off'}`}>
                            {bitStatus}
                        </div>
                    </div>
                    <div className="controls-zone">
                        <button className='action-btn' onClick={() => setBitStatus(bitStatus === 0 ? 1 : 0)}>
                            <Power size={18}/> Switch Bit
                        </button>
                    </div>
                </div>

                <div className='card'>
                    <span className='badge quantum'>{t.module1.qubitLabel}</span>
                    <div className='interactive-zone'>
                        <motion.div
                            className='qubit-visual'
                            animate={{
                                borderRadius: [ 
                                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                                    "30% 60% 70% 40% / 50% 60% 30% 60%",
                                    "60% 40% 30% 70% / 60% 30% 70% 40%",
                                ]
                            }}
                            transition={{
                                duration: 5, 
                                repeat: Infinity, 
                                ease: "easeInOut"
                            }}
                        >
                            <motion.div
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}
                                animate={{
                                    rotate: 360
                                }}
                                transition={{
                                    duration: 8,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            >
                                <motion.span
                                    className='qubit-text'
                                    animate={{ 
                                        opacity: [0.5, 1, 0.5], 
                                        rotate: -360
                                    }}
                                    transition={{ 
                                        opacity: 0.12 , 
                                        repeat: Infinity, 
                                        rotate: {duration: 8, repeat: Infinity, ease: "linear"}
                                    }}
                                >
                                    {glitchValue}
                                </motion.span>
                            </motion.div>
                        </motion.div>
                    </div>
                    <div className="controls-zone">
                        <p className='status-label'>{t.module1.qubitInfo}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module1;