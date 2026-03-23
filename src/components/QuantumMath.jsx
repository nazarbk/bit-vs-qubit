import { useMemo } from 'react';
import katex from 'katex';
import 'katex/dist/katex.min.css'; 
const QuantumMath = ({ formula }) => {
  const htmlString = useMemo(() => {
    try {
      return katex.renderToString(formula, {
        displayMode: true,
        throwOnError: false, 
        strict: false
      });
    } catch (error) {
      return `<span style="color: red;">Error: ${error.message}</span>`;
    }
  }, [formula]);

  return (
    <div 
      className="formula-box" 
      dangerouslySetInnerHTML={{ __html: htmlString }} 
    />
  );
};

export default QuantumMath;