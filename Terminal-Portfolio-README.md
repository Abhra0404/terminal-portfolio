# 🖥️ Terminal Portfolio (CLI-Based Personal Website)

A keyboard-first, interactive **terminal-style portfolio** that feels like SSH-ing into a developer’s personal system.  
Built to stand out, showcase real engineering thinking, and leave a lasting impression.

> “Not a website. An experience.”

---

## 🚀 Overview

This project is a **CLI / Terminal-inspired portfolio** where users interact using commands instead of clicks.  
It mimics a real terminal environment and presents personal information, skills, and projects in a memorable way.

The goal is to:
- Break away from traditional portfolio layouts
- Demonstrate strong frontend + UX thinking
- Showcase personality, clarity, and engineering mindset

---

## ✨ Key Features

### 🧠 Core Terminal Experience
- Full-screen terminal UI
- Monospace font with dark theme
- Keyboard-first interaction
- Real-time command parsing
- Blinking cursor & prompt

### ⌨️ Supported Commands
- `help` → list available commands
- `whoami` → short intro
- `skills` → technical stack
- `projects` → list of projects
- `project <name|id>` → detailed project case study
- `github` → GitHub profile & activity
- `contact` → email & social links
- `resume` → resume download
- `clear` → clear terminal output

### 🧪 Easter Eggs (Optional but Fun)
- `sudo hire <name>` → playful hiring message
- `coffee` → motivational quote
- `exit` → witty response

### 📱 Responsive Design
- Works smoothly on mobile
- Auto-focuses input
- Tap anywhere to focus terminal
- No broken layouts or scrolling issues

---

## 🛠️ Tech Stack

### Frontend
- **Next.js** – routing, performance, SEO
- **React** – component-based UI
- **Tailwind CSS** – fast, consistent styling
- **Framer Motion** (optional) – subtle animations

### Styling & UI
- JetBrains Mono / Fira Code
- Dark terminal color palette
- Minimal neon accents

### Data
- Local JSON / JS objects for command mapping
- (Optional) GitHub API for live stats

### Deployment
- **Vercel** (recommended)
- Static, fast, and globally accessible

---

## 🎨 UI / UX Design Philosophy

### Design Principles
- Minimal
- Calm
- Confident
- Developer-first

### Visual Style
- Background: `#0b0f14`
- Text: `#c9d1d9`
- Accent: soft green / cyan
- No flashy gradients or distractions

### UX Decisions
- No mouse dependency
- No unnecessary animations
- Clear readable outputs
- Terminal behaves like a real shell

---

## 🧩 How It Works (Architecture)

### Command Flow
1. User types a command
2. Input is captured on `Enter`
3. Command is parsed (command + arguments)
4. Matched against a command map
5. Output is printed to terminal history
6. Cursor returns to prompt

---

## 📁 Project Structure

```
src/
 ├─ components/
 │   ├─ Terminal.tsx
 │   ├─ CommandHandler.ts
 │   └─ OutputBlock.tsx
 ├─ data/
 │   └─ commands.ts
 ├─ pages/
 │   └─ index.tsx
 ├─ styles/
 │   └─ globals.css
```

---

## 🔮 Future Enhancements

- Typing animation for outputs
- GitHub live commit & PR feed
- Command history navigation
- Themes & personalization
- Blog via terminal commands

---



---

## 📄 License

MIT License

---

> Build things people remember.
