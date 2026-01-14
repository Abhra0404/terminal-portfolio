export interface Command {
  description: string;
  execute: (args: string[]) => string;
}

export const commands: Record<string, Command> = {
  help: {
    description: 'List available commands',
    execute: () => `
Available Commands:
------------------
  help              Show this help message
  whoami            Short introduction
  skills            Technical stack and expertise
  projects          List of projects
  project <name>    Detailed project case study
  github            GitHub profile and activity
  contact           Email and social links
  resume            Download resume
  clear             Clear terminal output
  
Easter Eggs:
  sudo hire <name>  Hiring message
  coffee            Get motivated
  exit              Try it and see

Type any command and press Enter.
    `,
  },

  whoami: {
    description: 'Short introduction',
    execute: () => `
┌─────────────────────────────────────────┐
│  Hi, I'm Abhra Jaiswal                  │
│  CS Student & Web Developer             │
└─────────────────────────────────────────┘

Motivated Computer Science undergraduate with a strong foundation
in programming, data structures, and web development. Passionate
about building real-world projects and learning industry best
practices.

I've solved 25+ DSA problems on LeetCode, participated in hackathons,
and actively contribute to open-source projects on GitHub.

Type 'skills' to see my technical stack.
Type 'projects' to see what I've built.
Type 'contact' to reach out!
    `,
  },

  skills: {
    description: 'Technical stack',
    execute: () => `
Technical Stack:
---------------

Languages:
  • JavaScript             ████████████ 90%
  • Python                 ██████████░░ 85%
  • C/C++                  ███████░░░░░ 70%
  • HTML/CSS               ████████████ 98%

Frontend:
  • React.js
  • Next.js
  • Tailwind CSS
  • HTML/CSS

Backend & Databases:
  • Node.js / Express
  • MongoDB
  • MySQL

Core CS:
  • Data Structures & Algorithms
  • Object-Oriented Programming (OOP)
  • Database Management Systems (DBMS)

Tools & Others:
  • Git / GitHub
  • VS Code
  • Postman
  • Vercel

Achievements:
  ✓ 25+ DSA problems solved on LeetCode
  ✓ Hackathon participant
  ✓ Active GitHub contributor
  ✓ Certifications in API development & Prompt Engineering
    `,
  },

  projects: {
    description: 'List of projects',
    execute: () => `
Projects:
--------

1. CryptoX – Crypto Education Platform
   Built a responsive web platform to simplify crypto concepts
   Tech: React, Tailwind CSS, Vercel
   → Type: project cryptox
   Status: Live | GitHub

2. Kaizen – Productivity Dashboard
   A productivity dashboard to track habits and personal growth
   Tech: React, Tailwind CSS, Responsive Design
   → Type: project kaizen
   Status: Live | GitHub

Type 'project <name>' for detailed case study.
    `,
  },

  project: {
    description: 'Detailed project case study',
    execute: (args) => {
      if (args.length === 0) {
        return 'Usage: project <name>\nType "projects" to see available projects.';
      }

      const projectName = args.join('-');

      const projectDetails: Record<string, string> = {
        'cryptox': `
CryptoX – Crypto Education Platform
====================================

Overview:
A responsive web platform designed to simplify cryptocurrency
concepts for beginners. Makes complex blockchain ideas accessible.

Tech Stack:
  • React.js
  • Tailwind CSS
  • Vercel (Deployment)

Key Features:
  ✓ Responsive design for all devices
  ✓ Reusable UI components
  ✓ Fast and reliable hosting
  ✓ Educational content focused on beginners

Implementation:
  • Built reusable React components
  • Styled with Tailwind CSS for consistency
  • Deployed on Vercel for optimal performance

GitHub: Check profile for repository
Live: View deployment on Vercel
        `,
        'kaizen': `
Kaizen – Productivity Dashboard
===============================

Overview:
A productivity dashboard created to help track habits and monitor
personal growth. Built with a focus on clean, minimal design.

Tech Stack:
  • React.js
  • Tailwind CSS
  • Responsive Design

Key Features:
  ✓ Habit tracking
  ✓ Personal growth monitoring
  ✓ Clean, minimal interface
  ✓ Smooth user experience
  ✓ Fully responsive

Implementation:
  • Designed with user experience in mind
  • Responsive layout for mobile and desktop
  • Smooth transitions and interactions

GitHub: Check profile for repository
Live: View deployment
        `,
      };

      return projectDetails[projectName] || `Project "${projectName}" not found.\nType "projects" to see available projects.`;
    },
  },

  github: {
    description: 'GitHub profile and activity',
    execute: () => `
GitHub Profile:
--------------

Username: Abhra Jaiswal
Profile:  https://github.com/Abhra0404

Highlights:
  ✓ Active contributor with consistent commits
  ✓ Projects: CryptoX, Kaizen, and more
  ✓ Languages: JavaScript, Python, C/C++
  ✓ Focus: Web development & DSA

Recent Work:
  ✓ CryptoX - Crypto Education Platform
  ✓ Kaizen - Productivity Dashboard
  ✓ Solving DSA problems on LeetCode
  ✓ Exploring open-source projects

Visit my GitHub to see all my work!
    `,
  },

  contact: {
    description: 'Email and social links',
    execute: () => `
Contact Information:
-------------------

📧 Email:     aforabhra@gmail.com
📱 Phone:     +91 9044824518
🐙 GitHub:    https://www.github.com/Abhra0404
💼 LinkedIn:  https://www.linkedin.com/in/abhra0404
📍 Location:  India

Feel free to reach out for:
  • Job opportunities
  • Collaboration
  • Open source projects
  • Hackathon partnerships
  • Just to say hi!

I'm open to new opportunities and always excited to learn!
    `,
  },

  resume: {
    description: 'Download resume',
    execute: () => `
Resume Download:
---------------

📄 Abhra_Jaiswal_Resume.pdf

Download: /Resume.pdf

Education:
  • Bachelor of Technology in Computer Science & AI (2025-2029)
    Newton School of Technology, CGPA: X.XX / 10
  • Class XII – CBSE (2024-25): 90%
  • Class X – CBSE (2022-23): 93.6%

Key Qualifications:
  ✓ Full Stack Web Development (React, Node.js, Express)
  ✓ Database Design (MongoDB, MySQL)
  ✓ Data Structures & Algorithms
  ✓ 25+ LeetCode problems solved
  ✓ Active GitHub contributor

Certifications:
  ✓ API Beginner Learning Path – Postman
  ✓ Introduction to Prompt Engineering – Microsoft GitHub Copilot

Last updated: January 2026
    `,
  },

  clear: {
    description: 'Clear terminal output',
    execute: () => 'CLEAR_TERMINAL', // Special flag for terminal clearing
  },

  sudo: {
    description: 'Superuser do',
    execute: (args) => {
      if (args[0] === 'hire' && args.length > 1) {
        const name = args.slice(1).join(' ');
        return `
┌───────────────────────────────────────────────┐
│  [sudo] password for ${name}:                    │
│  ✓ Authenticating...                          │
│  ✓ Permission granted                         │
│                                               │
│  Hiring ${name}...                              │
│  ✓ Contract generated                         │
│  ✓ Offer letter sent                          │
│  ✓ Welcome package prepared                   │
│                                               │
│  Congratulations! 🎉                          │
│  You're hired! (If only it were that easy)   │
└───────────────────────────────────────────────┘
        `;
      }
      return 'sudo: command not found. Try "sudo hire <name>"';
    },
  },

  coffee: {
    description: 'Get motivated',
    execute: () => {
      const quotes = [
        '"Code is like humor. When you have to explain it, it\'s bad." - Cory House',
        '"First, solve the problem. Then, write the code." - John Johnson',
        '"Experience is the name everyone gives to their mistakes." - Oscar Wilde',
        '"In order to be irreplaceable, one must always be different." - Coco Chanel',
        '"Java is to JavaScript what car is to Carpet." - Chris Heilmann',
        '"It works on my machine." - Every Developer Ever',
        '"Programming is the art of telling another human what one wants the computer to do." - Donald Knuth',
      ];
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      return `
☕ Coffee Break
--------------

${randomQuote}

*sip* Now back to coding...
      `;
    },
  },

  exit: {
    description: 'Exit terminal',
    execute: () => `
Leaving so soon?

logout: Process completed.

Just kidding! You can't escape that easily. 😉
This is a portfolio, not a real terminal.

Type 'help' to see what else you can explore!
    `,
  },
};

export const getCommand = (name: string): Command | undefined => {
  return commands[name.toLowerCase()];
};

export const getAllCommands = (): string[] => {
  return Object.keys(commands);
};
