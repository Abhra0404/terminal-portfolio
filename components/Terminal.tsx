'use client';

import React, { useState, useRef, useEffect } from 'react';
import { OutputBlock } from './OutputBlock';
import { parseCommand, executeCommand } from './CommandHandler';
import { commands } from '@/data/commands';

interface HistoryEntry {
  prompt: string;
  command: string;
  output: string;
}

const PROMPT = 'abhra@portfolio:~$';
const WELCOME_MESSAGE = `
Welcome to my Terminal Portfolio!
==================================

Type 'help' to see available commands.
Type 'whoami' to learn more about me.

This is a fully interactive terminal experience.
Navigate using keyboard commands.
`;

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([
    { prompt: '', command: '', output: WELCOME_MESSAGE },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);
  const outputEndRef = useRef<HTMLDivElement>(null);

  // Auto-focus input on mount and when clicking anywhere
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  // Scroll to bottom when history updates
  useEffect(() => {
    outputEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (input: string) => {
    const trimmedInput = input.trim();
    
    if (!trimmedInput) {
      return;
    }

    // Parse and execute command
    const { command, args } = parseCommand(trimmedInput);
    const output = executeCommand(command, args, commands);

    // Handle clear command specially
    if (output === 'CLEAR_TERMINAL') {
      setHistory([]);
      setCurrentInput('');
      return;
    }

    // Add to history
    setHistory((prev) => [
      ...prev,
      { prompt: PROMPT, command: trimmedInput, output },
    ]);

    // Add to command history
    setCommandHistory((prev) => [...prev, trimmedInput]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Handle Enter key
    if (e.key === 'Enter') {
      e.preventDefault();
      handleCommand(currentInput);
      return;
    }

    // Handle Up arrow (previous command)
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length === 0) return;

      const newIndex =
        historyIndex === -1
          ? commandHistory.length - 1
          : Math.max(0, historyIndex - 1);
      
      setHistoryIndex(newIndex);
      setCurrentInput(commandHistory[newIndex]);
      return;
    }

    // Handle Down arrow (next command)
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex === -1) return;

      const newIndex = historyIndex + 1;
      
      if (newIndex >= commandHistory.length) {
        setHistoryIndex(-1);
        setCurrentInput('');
      } else {
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[newIndex]);
      }
      return;
    }

    // Handle Tab (autocomplete - basic)
    if (e.key === 'Tab') {
      e.preventDefault();
      const input = currentInput.trim().toLowerCase();
      
      if (!input) return;

      const matchingCommands = Object.keys(commands).filter((cmd) =>
        cmd.startsWith(input)
      );

      if (matchingCommands.length === 1) {
        setCurrentInput(matchingCommands[0]);
      } else if (matchingCommands.length > 1) {
        // Show suggestions
        const suggestions = matchingCommands.join('  ');
        setHistory((prev) => [
          ...prev,
          { prompt: PROMPT, command: currentInput, output: suggestions },
        ]);
      }
    }
  };

  const handleTerminalClick = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      ref={terminalRef}
      onClick={handleTerminalClick}
      className="h-screen w-full bg-terminal-bg text-terminal-text overflow-y-auto p-8 cursor-text font-mono"
    >
      <div className="max-w-5xl mx-auto">
        {/* Command history output */}
        {history.map((entry, index) => (
          <OutputBlock
            key={index}
            prompt={entry.prompt}
            command={entry.command}
            output={entry.output}
          />
        ))}

        {/* Current input line */}
        <div className="flex items-center text-sm tracking-wider">
          <span className="text-terminal-prompt font-bold select-none">{PROMPT}</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="ml-3 flex-1 bg-transparent outline-none border-none caret-terminal-accent text-sm tracking-wide"
            style={{ 
              color: '#c9d1d9',
              fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
              fontSize: '14px',
              fontWeight: '400',
              letterSpacing: '0.05em',
            }}
            spellCheck={false}
            autoComplete="off"
            autoCapitalize="off"
            autoCorrect="off"
          />
          <span className="cursor-blink text-terminal-accent ml-1">▊</span>
        </div>

        {/* Scroll anchor */}
        <div ref={outputEndRef} />
      </div>
    </div>
  );
};
