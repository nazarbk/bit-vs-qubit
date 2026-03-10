import { use, useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Eye, EyeOff } from 'lucide-react';
import { BlockMath } from 'react-katex';
import { span, style } from 'framer-motion/client';

const Module3 = () => {
    const {t} = useLanguage();

    const [isObserved, setIsObserved] = useState(false);
    const [collapseResult, setCollapseResult] = useState(null);
    const [collapsePosition, setCollapsePosition] = useState({x: 0, y: 0})

    const handleObserve = () => {
        const result = Math.random() > 0.5 ? 0 : 1;
        setCollapseResult(result);

        const randomX = Math.floor(Math.random() * 200) - 100;
        const randomY = Math.floor(Math.random() * 140) - 70;
        setCollapsePosition({x: randomX, y: randomY});
        
        setIsObserved(true);
    }

    const handleReset = () => {
        setIsObserved(false);
        setCollapseResult(null);
    }

    return (
        <div className='module-content'>
            <header className='module-header'>
                <h2>{t.module3.title}</h2>
            </header>


            <div className='theory-section'>
                <div className='theory-block highlight' style={{borderColor: "var(--accent-pink)"}}>
                    <h3 style={{color: "var(--accent-pink)"}}>
                        {t.module3.theory.title}
                    </h3>
                    <p>
                        {t.module3.theory.text1}
                    </p>
                    <br></br>
                    <p>
                        {t.module3.theory.text2}
                    </p>
                </div>
            </div>

            <h3 className='section-divider'>{t.module3.interactionTitle}</h3>

            <div className='interaction-grid' style={{gridTemplateColumns: '1fr'}}>
                <div className='card'>
                    <span className={`badge ${!isObserved ? 'quantum' : ''}`} style={isObserved ? { backgroundColor: 'var(--accent-pink)', color: 'white' } : {}}>
                        {!isObserved ? t.module3.unobserved : t.module3.observed}
                    </span>

                    <div className='glass-box'>
                        {isObserved && (
                            <motion.div 
                                initial={{ opacity: 0.8 }} 
                                animate={{ opacity: 0 }} 
                                className="flash-effect" 
                            />
                        )}

                        <motion.div
                            className='quantum-particle'
                            initial={{
                                filter: "blur(10px)",
                                backgroundColor: "var(--primary-quantum)",
                                borderRadius: "40%",
                                scale: 1
                            }}
                            animate={{
                                x: !isObserved ? [-40, 50, -30, 40, 0, 40, -30, 50, -40] : collapsePosition.x,
                                y: !isObserved ? [-30, 40, 20, -40, 0, -40, 20, 40, -30] : collapsePosition.y,
                                scale: !isObserved ? [1, 1.5, 0.8, 1.2, 1] : 0.5,
                                filter: !isObserved ? "blur(8px)" : "blur(0px)",
                                backgroundColor: !isObserved ? ["var(--primary-quantum)", "var(--accent-pink)", "var(--primary-quantum)"] : "var(--accent-pink)",
                                borderRadius: !isObserved ? ["40%", "60%", "30%", "50%", "40%"] : "50%"
                            }}
                            transition={{
                                duration: !isObserved ? 6 : 0.2,
                                repeat: !isObserved ? Infinity : 0,
                                ease: "easeInOut",

                                filter: { duration: 0.3 }
                            }}
                        >
                            {isObserved && <span className='particle-text'>{collapseResult}</span>}
                        </motion.div>
                    </div>

                    <p className='status-label' style={{margin: '1.5rem 0'}}>
                        {isObserved ? `${t.module3.state2} ${collapseResult} ` : `${t.module3.state1}`}
                    </p>

                    <div style={{display: 'flex', gap: '1rem'}}>
                        {!isObserved ? (
                            <button className='action-btn' onClick={handleObserve} style={{borderColor: "var(--accent-pink)", color: "var(--accent-pink)"}}>
                                <Eye size={18}></Eye> {t.module3.btnObserve}
                            </button>
                        ) : (
                            <button className='action-btn' onClick={handleReset}>
                                <EyeOff size={18}></EyeOff> {t.module3.btnReset}
                            </button>
                        )}
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Module3;