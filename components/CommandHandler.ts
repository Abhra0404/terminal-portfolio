import { Command } from '@/data/commands';

export interface ParsedCommand {
  command: string;
  args: string[];
}

export const parseCommand = (input: string): ParsedCommand => {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const command = parts[0] || '';
  const args = parts.slice(1);

  return { command, args };
};

export const executeCommand = (
  commandName: string,
  args: string[],
  commandMap: Record<string, Command>
): string => {
  const command = commandMap[commandName.toLowerCase()];

  if (!command) {
    return `Command not found: ${commandName}\nType 'help' for available commands.`;
  }

  const result = command.execute(args);
  
  if (typeof result === 'string') {
    return result;
  }
  
  return String(result);
};
