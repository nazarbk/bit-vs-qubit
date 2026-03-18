import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { FileText, Copy, AlertOctagon, RotateCcw } from 'lucide-react';
import { BlockMath } from 'react-katex';

const Module4 = () => {
    const { t } = useLanguage();

    const [clonedClassic, setClonedClassic] = useState(false);
    const [clonedQuantum, setClonedQuantum] = useState(false);

    const resetAll = () => {
        setClonedClassic(false);
        setClonedQuantum(false);
    };

    return (
        <div className="module-content">
            <header className="module-header">
            <h2>{t.module4.title}</h2>
            </header>

            <div className="theory-section">
                <div className="theory-block highlight">
                    <h3>{t.module4.theory.title}</h3>
                    <p>{t.module4.theory.text1}</p>
                    <br/>
                    <p>{t.module4.theory.text2}</p>
                    <div className="formula-box">
                    <BlockMath 
                        math={`|\\psi\\rangle \\xrightarrow{\\text{${t.module4.formula}}} |\\psi\\rangle |\\psi\\rangle \\quad (\\text{${t.module4.formula2}})`} 
                    />
                    </div>
                </div>
            </div>

             <h3 className='section-divider'>{t.module4.interaction}</h3>

             <div className='interaction-grid'>
                <div className='card'>
                    <span className='badge'>{t.module4.classicalLabel} </span>
                    <div className="interactive-zone">
                        <div className='clone-area' style={{display: 'flex', gap: '2rem', height: '100px', alignItems: 'center', justifyContent: 'center'}}>
                            <motion.div className='file-icon' layout>
                                <FileText size={48} color='var(--secondary-classic)'></FileText>
                            </motion.div>

                            {clonedClassic && (
                                <motion.div 
                                    className='file-icon'
                                    initial={{opacity: 0, x: -20}}
                                    animate={{opacity: 1, x: 0}}
                                    transition={{type: "spring", stiffness: 200}}
                                >
                                    <FileText size={48} color='var(--secondary-classic)'></FileText>
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <p className='status-label' style={{color: clonedClassic ? '#4ade80' : 'var(--text-muted)', margin: '1.5rem 0'}}>
                        {clonedClassic ? t.module4.successMsg : t.module4.instruction}
                    </p>
                    <div className="controls-zone">
                        {clonedClassic ? (
                            <button 
                                className="nav-btn prev" 
                                onClick={resetAll}
                                style={{ 
                                borderColor: 'var(--text-muted)', 
                                color: 'var(--text-muted)',
                                opacity: 0.5
                                }}    
                            >
                                <RotateCcw size={18} style={{ marginRight: '8px' }}/> {t.module4.btnReset}
                            </button>
                        ) : 
                        (
                            <button 
                                className='action-btn'
                                onClick={() => setClonedClassic(true)}
                                disabled={clonedClassic}
                                style={{opacity: clonedClassic ? 0.5 : 1}}
                            >
                                <Copy size={18}></Copy>{t.module4.btnClone}
                            </button>
                        )}
                    </div>
                </div>

                <div className="card" style={{ borderColor: clonedQuantum ? 'var(--accent-pink)' : '' }}>
                    <span className="badge quantum">{t.module4.quantumLabel}</span>
                    <div className="interactive-zone">
                        <div className="clone-area" style={{ display: 'flex', gap: '2rem', height: '100px', alignItems: 'center', justifyContent: 'center' }}>
                            <motion.div 
                                className="mini-qubit"
                                animate={{
                                    borderRadius: clonedQuantum ? "10%" : ["40%", "60%", "30%", "50%", "40%"],
                                    backgroundColor: clonedQuantum ? "var(--accent-pink)" : ["var(--primary-quantum)", "var(--accent-pink)", "var(--primary-quantum)"],
                                    rotate: clonedQuantum ? 0 : 360,
                                }}
                                transition={{
                                    duration: clonedQuantum ? 0.2 : 4,
                                    repeat: clonedQuantum ? 0 : Infinity,
                                    ease: "easeInOut"
                                }}
                                style={{
                                    width: 70, height: 70, 
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    boxShadow: clonedQuantum ? '0 0 15px var(--accent-pink)' : '0 0 15px var(--primary-quantum)'
                                }}
                                >
                                {clonedQuantum ? '0' : '?'}
                            </motion.div>

                            {clonedQuantum && (
                                <motion.div 
                                    className="mini-qubit-error"
                                    initial={{ opacity: 0, scale: 0, rotate: -45 }}
                                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                                    transition={{ type: "spring", bounce: 0.6 }}
                                    style={{
                                    width: 50, height: 50, 
                                    backgroundColor: 'transparent',
                                    border: '2px dashed var(--accent-pink)',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    color: 'var(--accent-pink)'
                                    }}
                                >
                                    <AlertOctagon size={24} />
                                </motion.div>
                            )}
                        </div>
                    </div>
                    <p className="status-label" style={{ color: clonedQuantum ? 'var(--accent-pink)' : 'var(--text-muted)', margin: '1.5rem 0' }}>
                        {clonedQuantum ? t.module4.errorMsg : t.module4.instruction2}
                    </p>
                    <div className="controls-zone">
                        {clonedQuantum ? (
                            <button 
                                className="nav-btn prev" 
                                onClick={resetAll}
                                style={{ 
                                borderColor: "var(--accent-pink)", 
                                color: "var(--accent-pink)",
                                opacity: 0.5
                                }}    
                            >
                                <RotateCcw size={18} style={{ marginRight: '8px' }}/> {t.module4.btnReset}
                            </button>
                        ) : (
                            <button 
                                className="action-btn" 
                                onClick={() => setClonedQuantum(true)}
                                disabled={clonedQuantum}
                                style={{ 
                                borderColor: "var(--primary-quantum)", 
                                color: "var(--primary-quantum)"
                                }}
                            >
                                <Copy size={18} /> {t.module4.btnClone}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Module4;
