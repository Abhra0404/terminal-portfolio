# Terminal Portfolio - Quick Start Guide

## ✅ Project Setup Complete!

Your Terminal Portfolio has been successfully created and is ready to use!

## 📂 Location
```
/Users/abhra/Documents/Portfolio/terminal-portfolio/
```

## 🚀 How to Run

### Development Mode
```bash
cd /Users/abhra/Documents/Portfolio/terminal-portfolio
npm run dev
```

Then open: **http://localhost:3000**

### Production Build
```bash
npm run build
npm start
```

## 🎨 What's Included

### ✅ All Core Features Implemented:
- ✅ Full terminal UI with dark theme
- ✅ Keyboard-first interaction
- ✅ Command history (↑ ↓ arrows)
- ✅ Tab autocomplete
- ✅ Mobile responsive
- ✅ Blinking cursor
- ✅ Auto-focus input

### ✅ All Commands Working:
- `help` - List all commands
- `whoami` - Your introduction
- `skills` - Technical stack with progress bars
- `projects` - Project list
- `project <name>` - Detailed project info
- `github` - GitHub profile & stats
- `contact` - Contact information
- `resume` - Resume download link
- `clear` - Clear terminal

### ✅ Easter Eggs:
- `sudo hire <name>` - Playful hiring message
- `coffee` - Random motivational quotes
- `exit` - Witty response

## 📝 Customization Guide

### 1. Update Personal Information

Edit: `data/commands.ts`

Change:
- Your name in `whoami` command
- Skills in `skills` command
- Project details in `projects` and `project` commands
- GitHub username in `github` command
- Email and social links in `contact` command

### 2. Change Colors

Edit: `tailwind.config.ts`

```typescript
colors: {
  terminal: {
    bg: '#0b0f14',      // Background color
    text: '#c9d1d9',    // Text color
    accent: '#58a6ff',  // Accent/prompt color
    green: '#3fb950',   // Success color
    cyan: '#39c5cf',    // Info color
  },
}
```

### 3. Add Resume File

Place your resume PDF in:
```
/Users/abhra/Documents/Portfolio/terminal-portfolio/public/resume.pdf
```

### 4. Update Metadata (SEO)

Edit: `app/layout.tsx`

Change the metadata object to include your name and description.

## 📁 Project Structure

```
terminal-portfolio/
├── app/
│   ├── layout.tsx          # Root layout & metadata
│   ├── page.tsx            # Main page
│   └── globals.css         # Global styles
├── components/
│   ├── Terminal.tsx        # Terminal component
│   ├── CommandHandler.ts   # Command logic
│   └── OutputBlock.tsx     # Output display
├── data/
│   └── commands.ts         # All commands defined here
├── public/                 # Static files (add resume here)
├── tailwind.config.ts      # Tailwind colors & config
└── package.json
```

## 🚀 Deploy to Vercel

1. Install Vercel CLI:
```bash
npm install -g vercel
```

2. Deploy:
```bash
cd /Users/abhra/Documents/Portfolio/terminal-portfolio
vercel
```

3. Follow the prompts and your site will be live!

Or connect your GitHub repo to Vercel for automatic deployments.

## 🎯 Next Steps

1. **Customize Content**: Update all personal information in `data/commands.ts`
2. **Add Resume**: Place your PDF in `public/resume.pdf`
3. **Test Locally**: Run `npm run dev` and test all commands
4. **Deploy**: Push to GitHub and deploy to Vercel
5. **Share**: Add the link to your resume, LinkedIn, GitHub profile!

## 💡 Tips

- Click anywhere on the terminal to focus input
- Use ↑ ↓ arrows to navigate command history
- Press Tab for command autocomplete
- Type `help` anytime to see available commands
- Mobile friendly - works great on phones too!

## 🐛 Troubleshooting

### Port 3000 already in use?
```bash
PORT=3001 npm run dev
```

### Need to clear node_modules?
```bash
rm -rf node_modules package-lock.json
npm install
```

---

**Your terminal portfolio is ready! 🎉**

Type `help` when you run it to see all available commands.
