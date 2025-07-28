"use client";

import { useEffect } from 'react';

export const ScriptLoader = () => {
  useEffect(() => {
    // Load Highlight.js for code syntax highlighting
    if (!document.querySelector('script[src*="highlight.min.js"]')) {
      const style = document.createElement('link');
      style.rel = 'stylesheet';
      style.href = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css';
      document.head.appendChild(style);

      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js';
      script.async = true;
      script.onload = () => {
        if (window.hljs) {
            window.hljs.configure({
                ignoreUnescapedHTML: true
            })
        }
      }
      document.body.appendChild(script);
    }

    // Load Tone.js for music generation
    if (!window.Tone) {
        if (!document.querySelector('script[src*="Tone.js"]')) {
            const script = document.createElement('script');
            script.src = 'https://cdnjs.cloudflare.com/ajax/libs/tone/15.0.4/Tone.js';
            script.async = true;
            document.body.appendChild(script);
        }
    }
  }, []);

  return null;
};

// Augment the Window interface
declare global {
    interface Window {
        hljs?: any;
        Tone?: any;
    }
}
