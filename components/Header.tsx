'use client';

import React from 'react';

export const Header: React.FC = () => {
  return (
    <div 
      className="sticky top-0 z-50 w-full backdrop-blur-3xl"
      style={{ 
        backgroundColor: 'transparent',
        borderBottom: 'none',
        boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
      }}
    >
      <div className="max-w-5xl mx-auto px-8 py-4 flex items-center justify-between">
        {/* Left: Logo/Name */}
        <div className="flex items-center gap-4">
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#14b8a6', boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)' }}
          />
          <div>
            <h1 
              className="text-xl font-bold"
              style={{ color: '#14b8a6' }}
            >
              ABHRA JAISWAL
            </h1>
            <p 
              className="text-xs mt-0.5"
              style={{ color: '#5eead4' }}
            >
              CS STUDENT & WEB DEVELOPER
            </p>
          </div>
        </div>

        {/* Right: Status Indicator */}
        <div className="flex items-center gap-2">
          <span 
            className="text-xs font-mono"
            style={{ color: '#5eead4' }}
          >
            ONLINE
          </span>
          <div 
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ backgroundColor: '#14b8a6' }}
          />
        </div>
      </div>
    </div>
  );
};
