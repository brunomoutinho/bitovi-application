import React, { useRef, useEffect } from 'react';
import Prism from 'prismjs';

export const Highlighter = ({ code }) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref && ref.current) {
      console.log(Prism);
      Prism.highlightElement(ref.current);
    }
  }, [code, ref]);
  return (
    <pre>
      <code ref={ref} className="language-jsx">
        {code.trim()}
      </code>
    </pre>
  );
};
