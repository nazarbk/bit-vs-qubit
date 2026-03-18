import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Rocket, Atom, Framer, Sigma } from 'lucide-react';
import { div } from 'framer-motion/client';

const Intro = ({ onStart }) => {
    const {t} = useLanguage();

    return (
        <div className="module-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0}}
                transition={{ duration: 0.8 }}
            >
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem'}}>
                    <motion.div
                        animate={{rotate: 360}}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear"}}
                    >
                        <Atom size={100} color='var(--primary-quantum)' style={{ filter: 'drop-shadow(0 0 20px rgba(0,210,255,0.4))'}}></Atom>
                    </motion.div>
                </div>

                <h1 style={{
                    fontSize: 'clamp(2.5rem, 5vw, 2rem)',
                    marginBottom: '1.5rem',
                    background: 'linear-gradient(135deg, var(--primary-quantum), var(--accent-pink))', 
                    WebkitBackgroundClip: 'text', 
                    WebkitTextFillColor: 'transparent',
                    lineHeight: '1.2'
                }}>
                    {t.intro.title}
                </h1>

                <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
                    {t.intro.subtitle}
                </p>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginBottom: '1rem', textTransform: 'uppercase', letterSpacing: '2px' }}>
                    {t.intro.techStack}
                </p>
                <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <motion.span 
                        className="badge" 
                        whileHover={{ scale: 1.05, borderColor: 'var(--primary-quantum)', color: 'var(--primary-quantum)', backgroundColor: 'rgba(0, 210, 255, 0.1)' }}
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer'}}
                    >
                        <Atom size={16} /> React.js
                    </motion.span>

                    <motion.span 
                        className="badge" 
                        whileHover={{ scale: 1.05, borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)', backgroundColor: 'rgba(244, 114, 182, 0.1)' }}
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                    >
                        <Framer size={16} /> Framer Motion
                    </motion.span>

                    <motion.span 
                        className="badge" 
                        whileHover={{ scale: 1.05, borderColor: '#4ade80', color: '#4ade80', backgroundColor: 'rgba(74, 222, 128, 0.1)' }}
                        style={{ backgroundColor: 'rgba(255,255,255,0.2)', border: '2px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                    >
                        <Sigma size={16} /> KaTeX
                    </motion.span>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
                    <button 
                        className="action-btn" 
                        onClick={onStart} 
                        style={{ 
                        fontSize: '1rem', 
                        padding: '1rem 2rem', 
                        borderRadius: '50px', 
                        boxShadow: '0 0 30px rgba(0, 210, 255, 0.3)', 
                        display: 'flex', 
                        alignItems: 'center', 
                        justifyContent: 'center' 
                        }}
                    >
                        <Rocket size={20} style={{ marginRight: '10px' }} /> {t.intro.startBtn}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};

export default Intro;