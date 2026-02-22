import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import {Play, Square, RotateCcw } from 'lucide-react';
import { BlockMath } from 'react-katex';

const Module2 = () => {
    const {t} = useLanguage();

    const [coinState, setCoinState] = useState('spinning');

    const measureCoin = () => {
        const result = Math.random() > 0.5 ? '1' : '0';
        setCoinState(result);
    }

    const resetCoin = () => {
        setCoinState('spinning');
    };

    return (
        <div className='module-content'>
            <header className='module-header'>
                <h2>{t.module2.title}</h2>
            </header>


            <div className='theory-section'>
                <div className='theory-block highlight'>
                    <h3>
                       {t.module2.theory.title} 
                    </h3>
                    <p>
                        {t.module2.theory.text1}
                    </p>
                    <br></br>
                    <p>
                        {t.module2.theory.text2}
                    </p>
                    <div className='formula-box'>
                        <BlockMath math='|\psi\rangle = \frac{1}{\sqrt{2}}|0\rangle + \frac{1}{\sqrt{2}}|1\rangle'></BlockMath>
                    </div>
                </div>
            </div>

            <h3 className='section-divider'>
                {t.module2.interactionTitle}
            </h3>

            <div className='interaction-grid' style={{gridTemplateColumns: '1fr'}}>
                <div className='card'>
                    <span className={`badge &{coinState === 'spinning' ? 'quantum' : ''}`}>
                        {coinState === 'spinning' ? `${t.module2.status2}` : `${t.module2.status1}`}
                    </span>

                    <motion.div
                        className='quantum-coin'
                        animate={{
                            rotateY: coinState === 'spinning' ? [0,360] : 0,
                            scale: coinState === 'spinning' ? 1 : 1.1,
                            borderColor: coinState === 'spinning' ? "var(--primary-quantum)" : "var(--accent-pink)"
                        }}
                        transition={{
                            rotateY: {
                                duration: 0.4, 
                                repeat: coinState === 'spinning' ? Infinity : 0,
                                ease: "linear"
                            },
                            scale: {duration: 0.3}
                        }}
                    >   
                        {coinState === 'spinning' ? '?' : coinState}  
                    </motion.div>

                    <p className='status-label' style={{marginBottom: '1rem', minHeight: '24px'}}>
                        {coinState === 'spinning'
                            ? `${t.module2.state1}`
                            : `${t.module2.state2} ${coinState}`}
                    </p>

                    <div style={{display: 'flex', gap: '1rem'}}>
                            {coinState === 'spinning' ? (
                                <button className='action-btn' onClick={measureCoin}>
                                    <Square size={18}></Square>{t.module2.action1}
                                </button>
                            ) : (
                                <button className='action-btn' onClick={resetCoin}>
                                    <RotateCcw size={18}></RotateCcw>{t.module2.action2}
                                </button>
                            )}
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Module2;