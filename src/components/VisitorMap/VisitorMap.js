import React, { useEffect, useRef } from 'react';
import './VisitorMap.css';

const VisitorMap = () => {
  const scriptRef = useRef(null);

  useEffect(() => {
    if (scriptRef.current) {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.id = 'clstr_globe';
      script.src = '//clustrmaps.com/globe.js?d=VeqnpzLlKW-Ot5DN3F-Amu4pFn2pWHIYPqjUluz5gTI';
      script.async = true;
      scriptRef.current.appendChild(script);
    }

    return () => {
      if (scriptRef.current) {
        const script = scriptRef.current.querySelector('script');
        if (script) {
          scriptRef.current.removeChild(script);
        }
      }
    };
  }, []);

  return (
    <div className="visitor-map">
      <h2>Visitor Globe</h2>
      <div id="clustrmaps-widget-container">
        <div id="clustrmaps-widget" ref={scriptRef}></div>
      </div>
    </div>
  );
};

export default VisitorMap;
