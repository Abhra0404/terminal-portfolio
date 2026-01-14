'use client';

import React, { useState, useRef, useEffect } from 'react';
import { OutputBlock } from './OutputBlock';
import { Welcome } from './Welcome';
import { parseCommand, executeCommand } from './CommandHandler';
import { commands } from '@/data/commands';

interface HistoryEntry {
  prompt: string;
  command: string;
  output: string;
}

const PROMPT = 'abhra@portfolio:~$';

export const Terminal: React.FC = () => {
  const [history, setHistory] = useState<HistoryEntry[]>([]);
  const [showWelcome, setShowWelcome] = useState(true);
  const [showHeader, setShowHeader] = useState(false);
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
      setShowHeader(false);
      setCurrentInput('');
      return;
    }

    // Add to history
    setHistory((prev) => [
      ...prev,
      { prompt: PROMPT, command: trimmedInput, output },
    ]);

    // Hide welcome after first command
    if (showWelcome) {
      setShowWelcome(false);
    }

    // Show header when help command is typed
    if (command.toLowerCase() === 'help') {
      setShowHeader(true);
    }

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
    <>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed top-0 left-0 w-full h-full -z-10 object-cover"
        style={{
          filter: 'brightness(0.9)',
          opacity: 1,
        }}
      >
        <source src="/video.mp4" type="video/mp4" />
      </video>
      <div className="fixed top-0 left-0 w-full h-full bg-black/80 -z-10"></div>

      <div
        ref={terminalRef}
        onClick={handleTerminalClick}
        className="h-screen w-full text-terminal-text overflow-y-auto p-8 cursor-text font-mono relative"
        style={{
          backgroundColor: 'transparent',
          textShadow: '0 2px 4px rgba(0,0,0,0.8)',
        }}
      >
        <div
          className="max-w-5xl mx-auto"
          style={{
            backgroundColor: 'transparent',
            padding: '0 2rem 4rem 2rem',
          }}
        >
          {/* Welcome Section - Show on initial load */}
          {showWelcome && <Welcome />}

          {/* Header shown after `help` command */}
          {showHeader && (
            <div
              className="mb-4 text-sm font-bold tracking-wider select-none"
              style={{ color: '#14b8a6', textShadow: '0 2px 4px rgba(0,0,0,0.8)' }}
            >
              Available commands
            </div>
          )}

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
            <span className="font-bold select-none" style={{ color: '#14b8a6' }}>{PROMPT}</span>
            <input
              ref={inputRef}
              type="text"
              value={currentInput}
              onChange={(e) => setCurrentInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="ml-3 flex-1 bg-transparent outline-none border-none text-sm tracking-wide"
              style={{
                color: '#5eead4',
                fontFamily: "'JetBrains Mono', 'Fira Code', monospace",
                fontSize: '14px',
                fontWeight: '400',
                letterSpacing: '0.05em',
                caretColor: '#14b8a6',
                textShadow: '0 2px 4px rgba(0,0,0,0.8)',
              }}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              autoCorrect="off"
            />
            <span className="cursor-blink ml-1" style={{ color: '#14b8a6' }}>▊</span>
          </div>

          {/* Scroll anchor */}
          <div ref={outputEndRef} />
        </div>
      </div>
    </>
  );
};
