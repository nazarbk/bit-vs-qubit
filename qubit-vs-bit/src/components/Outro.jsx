import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Trophy, Github, Linkedin, Mail, RotateCcw, ExternalLink, Cpu, Layers, Activity } from 'lucide-react';

const Outro = ({ onRestart }) => {
  const { t } = useLanguage();

  return (
    <div className="module-content" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '70vh', textAlign: 'center', padding: '2rem 0' }}>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        style={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        
        <div style={{ marginBottom: '2rem' }}>
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
            <Trophy size={100} color="#fbbf24" style={{ filter: 'drop-shadow(0 0 30px rgba(251, 191, 36, 0.4))' }} />
          </motion.div>
        </div>

        <h1 style={{ 
          fontSize: 'clamp(2.5rem, 5vw, 2rem)', marginBottom: '1.5rem', 
          background: 'linear-gradient(135deg, #fbbf24, var(--accent-pink))', 
          WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.2'
        }}>
          {t.outro.title}
        </h1>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-main)', maxWidth: '700px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
          {t.outro.subtitle}
        </p>

        <div style={{ width: '100%', maxWidth: '900px', marginBottom: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--border-color)' }}>
          <h3 style={{ marginBottom: '2rem', color: 'var(--text-muted)' }}>{t.outro.moreProjects}</h3>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem', marginBottom: '2rem' }}>
            
            <motion.a href="https://bb84-protocol.streamlit.app/" target="_blank" className="card" whileHover={{ y: -5, borderColor: 'var(--primary-quantum)' }} style={{ textDecoration: 'none', textAlign: 'left', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }} transition={{ duration: 0.1 }}>
              <Cpu size={28} color="var(--primary-quantum)" />
              <h4 style={{ color: 'var(--text-main)', margin: 0 }}>{t.outro.proj1Title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{t.outro.proj1Desc}</p>
            </motion.a>

            <motion.a href="https://qonverse.vercel.app/" target="_blank" className="card" whileHover={{ y: -5, borderColor: 'var(--accent-pink)' }} style={{ textDecoration: 'none', textAlign: 'left', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }} transition={{ duration: 0.1 }}>
              <Layers size={28} color="var(--accent-pink)" />
              <h4 style={{ color: 'var(--text-main)', margin: 0 }}>{t.outro.proj2Title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{t.outro.proj2Desc}</p>
            </motion.a>

            <motion.a href="https://quantum-single-qubit-visualizer.streamlit.app/" target="_blank" className="card" whileHover={{ y: -5, borderColor: '#4ade80' }} style={{ textDecoration: 'none', textAlign: 'left', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem', cursor: 'pointer' }} transition={{ duration: 0.1 }}>
              <Activity size={28} color="#4ade80" />
              <h4 style={{ color: 'var(--text-main)', margin: 0 }}>{t.outro.proj3Title}</h4>
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', margin: 0 }}>{t.outro.proj3Desc}</p>
            </motion.a>

          </div>

          <a href="https://nazar-blanco-portfolio.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button whileHover={{ x: 5 }} className="action-btn" style={{ backgroundColor: 'var(--primary-quantum)', color: '#0f172a', border: 'none', fontWeight: 'bold' }} transition={{ duration: 0.1 }}>
              {t.outro.viewPortfolio} <ExternalLink size={16} style={{ marginLeft: '8px' }} />
            </motion.button>
          </a>
        </div>

        <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: 'bold' }}>
          {t.outro.cta}
        </p>
        
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="https://github.com/nazarbk/bit-vs-qubit" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button className="action-btn" whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }} style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)' }} transition={{ duration: 0.1 }}>
              <Github size={18} /> {t.outro.btnGithub}
            </motion.button>
          </a>
          <a href="https://www.linkedin.com/in/nazar-blanco-kataran/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <motion.button className="action-btn" whileHover={{ borderColor: '#0ea5e9', boxShadow: '0 0 15px rgba(14, 165, 233, 0.3)' }} style={{ backgroundColor: '#0ea5e9', border: '1px solid #0ea5e9', color: 'white' }} transition={{ duration: 0.1}}>
              <Linkedin size={18} /> {t.outro.btnLinkedin}
            </motion.button>
          </a>
          <a href="mailto:nazarblanco@gmail.com" style={{ textDecoration: 'none' }}>
            <motion.button className="action-btn" whileHover={{ borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)' }} style={{ backgroundColor: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)' }} transition={{ duration: 0.1 }}>
              <Mail size={18} /> {t.outro.btnEmail}
            </motion.button>
          </a>
        </div>

      </motion.div>
    </div>
  );
};

export default Outro;