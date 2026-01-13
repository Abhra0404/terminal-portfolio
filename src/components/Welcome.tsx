'use client';

import React from 'react';

export const Welcome: React.FC = () => {
  return (
    <div className="mb-20 font-mono">
      <pre className="text-sm md:text-base leading-tight mb-6" style={{ color: '#14b8a6', marginLeft: '-2rem' }}>
        {String.raw` 
         _    ____  _   _ ____      _             
        / \  | __ )| | | |  _ \    / \            
       / _ \ |  _ \| |_| | |_) |  / _ \           
      / ___ \| |_) |  _  |  _ <  / ___ \          
     /_/  _\_\____/|_| |_|_|_\_\/_/  _\_\   _     
         | | / \  |_ _/ ___\ \      / / \  | |    
      _  | |/ _ \  | |\___ \\ \ /\ / / _ \ | |    
     | |_| / ___ \ | | ___) |\ V  V / ___ \| |___ 
      \___/_/   \_\___|____/  \_/\_/_/   \_\_____|                                           
    `}
      </pre>

      <div className="space-y-4 text-base" style={{ color: '#99f6e4' }}>
        <p className="leading-relaxed">
          Welcome to my terminal portfolio. (Version 1.1.0)
        </p>

        <p className="leading-relaxed">
          ----
        </p>

        <p className="leading-relaxed">
          This project&#39;s source code can be found in this project&#39;s{' '}
          <a
            href="https://github.com/Abhra0404/terminal-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:no-underline"
            style={{ color: '#14b8a6' }}
          >
            GitHub repo
          </a>.
        </p>

        <p className="leading-relaxed">
          ----
        </p>

        <p className="leading-relaxed mb-8">
          For a list of available commands, type <span className="font-bold px-2 py-1 rounded" style={{ color: '#14b8a6', backgroundColor: 'rgba(20, 184, 166, 0.3)' }}>&#39;help&#39;</span>.
        </p>
      </div>
    </div>
  );
};
