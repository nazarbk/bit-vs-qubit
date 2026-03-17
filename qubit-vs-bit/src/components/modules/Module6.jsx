import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { Send, Bug, Lock, ShieldAlert, RotateCcw } from 'lucide-react';
import { BlockMath } from 'react-katex';

const Module6 = () => {
    const { t } = useLanguage();

    const [simState, setSimState] = useState('idle');

    const sendSafe = () => {
        setSimState('sending_safe');
        setTimeout(() => setSimState('success'), 2500);
    };

    const sendHacked = () => {
        setSimState('sending_hacked');
        setTimeout(() => setSimState('alert'), 2500);
    };

    const resetSim = () => {
        setSimState('idle');
    };

    return (
        <div className="module-content">
            <header className="module-header">
                <h2>{t.module6.title}</h2>
            </header>

            <div className="theory-section">
                <div className="theory-block highlight">
                    <h3>{t.module6.theory.title}</h3>
                    <p>{t.module6.theory.text1}</p>
                    <br/>
                    <p>{t.module6.theory.text2}</p>
                    <div className="formula-box">
                        <BlockMath math="K = \{ |\uparrow\rangle, |\rightarrow\rangle, |\nearrow\rangle, |\searrow\rangle ... \}" />
                    </div>
                </div>
            </div>

            <h3 className="section-divider">{t.module6.interaction}</h3>
      
            <div className="interaction-grid" style={{ gridTemplateColumns: '1fr' }}>
                <div className="card">
                    <span className="badge" >PROTOCOLO BB84</span>

                    <div className="interactive-zone" style={{ minHeight: '220px', width: '100%' }}>
                        <div className="crypto-channel" style={{ width: '100%', maxWidth: '700px' }}>
            
                            <div className="node alice-node">
                                <span className="badge" style={{ position: 'absolute', bottom: 'calc(100% + 15px)', whiteSpace: 'nowrap' }}>
                                    {t.module6.sender}
                                </span>
                                <Lock size={32} color="var(--primary-quantum)" />
                            </div>

                            <div className={`node hacker-node ${simState === 'sending_hacked' || simState === 'alert' ? 'active' : ''}`}>
                                <span className="badge" style={{ position: 'absolute', bottom: 'calc(100% + 15px)', whiteSpace: 'nowrap', backgroundColor: 'var(--accent-pink)', color: 'white' }}>
                                    {t.module6.hacker}
                                </span>
                                <Bug size={32} color={simState === 'sending_hacked' || simState === 'alert' ? 'white' : 'var(--text-muted)'} />
                            </div>

                            <div className={`node bob-node ${simState === 'success' ? 'success' : ''} ${simState === 'alert' ? 'alert' : ''}`}>
                                <span className="badge" style={{ position: 'absolute', bottom: 'calc(100% + 15px)', whiteSpace: 'nowrap' }}>
                                    {t.module6.receiver}
                                </span>
                                {simState === 'alert' ? <ShieldAlert size={32} color="var(--accent-pink)" /> : <Lock size={32} color="var(--text-main)" />}
                            </div>

                            {(simState === 'sending_safe' || simState === 'sending_hacked') && (
                                <motion.div 
                                    className="traveling-qubit"
                                    initial={{ left: "10%" }}
                                    animate={{ 
                                        left: "90%",
                                        backgroundColor: simState === 'sending_hacked' ? ["var(--primary-quantum)", "var(--accent-pink)", "var(--accent-pink)"] : "var(--primary-quantum)",
                                        borderRadius: simState === 'sending_hacked' ? ["50%", "10%", "10%"] : ["40%", "60%", "30%", "50%"],
                                        filter: simState === 'sending_hacked' ? ["blur(6px)", "blur(0px)", "blur(0px)"] : "blur(6px)"
                                    }}
                                    transition={{ duration: 2.5, ease: "linear" }}
                                />
                            )}
                        </div>
                    </div>

                    <p className="status-label" style={{ 
                        color: simState === 'success' ? '#4ade80' : (simState === 'alert' ? 'var(--accent-pink)' : 'var(--text-muted)'), margin: '1.5rem 0' 
                    }}>
                        {simState === 'idle' && t.module6.statusIdle}
                        {simState === 'sending_safe' && "Transmitiendo qubits en superposición..."}
                        {simState === 'sending_hacked' && "Transmitiendo... ¡Intercepción detectada!"}
                        {simState === 'success' && t.module6.statusSafe}
                        {simState === 'alert' && t.module6.statusHacked}
                    </p>

                    <div className="controls-zone">
                        <button 
                            className="action-btn" 
                            onClick={sendSafe}
                            disabled={simState !== 'idle'}
                        >
                            <Send size={18} /> {t.module6.btnSendSafe}
                        </button>
                
                        <button 
                            className="action-btn" 
                            onClick={sendHacked}
                            disabled={simState !== 'idle'}
                            style={{ borderColor: 'var(--accent-pink)', color: 'var(--accent-pink)' }}
                        >
                            <Bug size={18} /> {t.module6.btnSendHack}
                        </button>

                        {(simState === 'success' || simState === 'alert') && (
                            <button className="nav-btn prev" onClick={resetSim}>
                                <RotateCcw size={18} style={{ marginRight: '8px' }}/> {t.module6.btnReset}
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Module6;