import React from 'react';

interface OutputBlockProps {
  prompt: string;
  command: string;
  output: string;
}

export const OutputBlock: React.FC<OutputBlockProps> = ({
  prompt,
  command,
  output,
}) => {
  return (
    <div className="mb-4 font-mono text-sm tracking-wide backdrop-blur-2xl rounded-xl p-4" style={{ backgroundColor: 'transparent', border: 'none', boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)' }}>
      <div className="flex items-center mb-2">
        <span className="font-bold select-none" style={{ color: '#14b8a6' }}>{prompt}</span>
        <span className="ml-2 font-normal" style={{ color: '#5eead4' }}>{command}</span>
      </div>
      {output && (
        <div className="whitespace-pre-wrap ml-0 leading-relaxed font-mono text-sm" style={{ color: '#99f6e4' }}>
          {output}
        </div>
      )}
    </div>
  );
};
