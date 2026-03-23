import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Eye, RotateCcw, Globe, Rocket } from 'lucide-react';
import { BlockMath } from 'react-katex';

const Module5 = () => {
  const { t } = useLanguage();
  
  const [systemState, setSystemState] = useState('entangled');
  const [result, setResult] = useState(null);
  const [measuredBy, setMeasuredBy] = useState(null);

  const measureSystem = (who) => {
    const finalValue = Math.random() > 0.5 ? 0 : 1;
    setResult(finalValue);
    setMeasuredBy(who);
    setSystemState('collapsed');
  };

  const resetSystem = () => {
    setSystemState('entangled');
    setResult(null);
    setMeasuredBy(null);
  };

  return (
    <div className="module-content">
      <header className="module-header">
        <h2>{t.module5.title}</h2>
      </header>

      <div className="theory-section">
        <div className="theory-block highlight">
          <h3>{t.module5.theory.title}</h3>
          <p>{t.module5.theory.text1}</p>
          <br/>
          <p>{t.module5.theory.text2}</p>
          <div className="formula-box">
              <BlockMath math="|Φ^+⟩ = \frac{1}{\sqrt{2}}(|00⟩ + |11⟩)" />
          </div>
        </div>
      </div>

      <h3 className="section-divider">{t.module5.interaction}</h3>
      
      <div className="interaction-grid" style={{ position: 'relative' }}>
        
        {systemState === 'entangled' && (
          <motion.div 
            className="entanglement-link"
            animate={{ opacity: [0.3, 0.8, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        )}

        <div className="card" style={{ zIndex: 2, borderColor: measuredBy === 'alice' ? 'var(--accent-pink)' : '' }}>
          <span className="badge"  style={{ display: 'flex', alignItems: 'center', gap: '5px'}}>
            <Globe size={14} /> {t.module5.earth}
          </span>
          <div className="interactive-zone">
            <motion.div 
              className="quantum-particle"
              animate={{
                scale: systemState === 'entangled' ? [0.8, 1, 0.8] : 0.8,
                borderRadius: systemState === 'entangled' ? ["40%", "60%", "40%"] : "10%",
                filter: systemState === 'entangled' ? "blur(8px)" : "blur(0px)",
                backgroundColor: systemState === 'entangled' ? ["var(--primary-quantum)", "var(--accent-pink)", "var(--primary-quantum)"] : "var(--accent-pink)",
                rotate: systemState === 'entangled' ? 360 : 0
              }}
              transition={{
                default: { duration: systemState === 'entangled' ? 3 : 0.3, repeat: systemState === 'entangled' ? Infinity : 0 },
                filter: { duration: 0.3 }
              }}
            >
              {systemState === 'collapsed' && <span className="particle-text">{result}</span>}
            </motion.div>
          </div>
          <p className="status-label" style={{ color: systemState === 'collapsed' ? 'var(--accent-pink)' : 'var(--primary-quantum)', margin: '1.5rem 0' }}>
              {systemState === 'entangled' ? t.module5.statusLinked : t.module5.statusCollapsed}
          </p>
          <div className="controls-zone">    
            {systemState === 'collapsed' ? (
              <button className="nav-btn prev" onClick={resetSystem}>
                <RotateCcw size={18} style={{ marginRight: '8px' }}/> {t.module5.btnReset}
              </button>
              ) : (
              <button 
                className="action-btn" 
                onClick={() => measureSystem('alice')}
                disabled={systemState === 'collapsed'}
              >
                <Eye size={18} /> {t.module5.btnMeasure}
              </button>
            )}
          </div>  
        </div>

        <div className="card" style={{ zIndex: 2, borderColor: measuredBy === 'bob' ? 'var(--accent-pink)' : '' }}>
          <span className="badge" style={{ display: 'flex', alignItems: 'center', gap: '5px', backgroundColor: '#fb923c', color: 'black' }}>
            <Rocket size={14} /> {t.module5.mars}
          </span>
          <div className="interactive-zone">
            <motion.div 
              className="quantum-particle"
              animate={{
                scale: systemState === 'entangled' ? [0.8, 1, 0.8] : 0.8,
                borderRadius: systemState === 'entangled' ? ["60%", "40%", "60%"] : "10%",
                filter: systemState === 'entangled' ? "blur(8px)" : "blur(0px)",
                backgroundColor: systemState === 'entangled' ? ["var(--primary-quantum)", "var(--accent-pink)", "var(--primary-quantum)"] : "var(--accent-pink)",
                rotate: systemState === 'entangled' ? -360 : 0
              }}
              transition={{
                default: { duration: systemState === 'entangled' ? 3 : 0.3, repeat: systemState === 'entangled' ? Infinity : 0 },
                filter: { duration: 0.3 }
              }}
            >
              {systemState === 'collapsed' && <span className="particle-text">{result}</span>}
            </motion.div>
          </div>
          <p className="status-label" style={{ color: systemState === 'collapsed' ? 'var(--accent-pink)' : 'var(--primary-quantum)', margin: '1.5rem 0' }}>
              {systemState === 'entangled' ? t.module5.statusLinked : t.module5.statusCollapsed}
          </p>
          <div className="controls-zone">      
            {systemState === 'collapsed' ? (
              <button className="nav-btn prev" onClick={resetSystem}>
                <RotateCcw size={18} style={{ marginRight: '8px' }}/> {t.module5.btnReset}
              </button>
              ) : (
              <button 
                className="action-btn" 
                onClick={() => measureSystem('bob')}
                disabled={systemState === 'collapsed'}
              >
                <Eye size={18} /> {t.module5.btnMeasure}
              </button>
            )}
          </div>  
        </div>
      </div>
    </div>
  );
};

export default Module5;