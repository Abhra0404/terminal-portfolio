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
    <div className="mb-4 font-mono text-sm tracking-wide">
      <div className="flex items-center mb-2">
        <span className="text-terminal-prompt font-bold select-none">{prompt}</span>
        <span className="ml-2 text-terminal-text font-normal">{command}</span>
      </div>
      {output && (
        <div className="text-terminal-text whitespace-pre-wrap ml-0 leading-relaxed font-mono text-sm opacity-90">
          {output}
        </div>
      )}
    </div>
  );
};
