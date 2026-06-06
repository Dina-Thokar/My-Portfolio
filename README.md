# Dina Tamang Portfolio v2.0 - React + Vite

A modern, high-performance cybersecurity and developer portfolio built with **React 18** and **Vite**.

## ✨ Features

- ⚡ **Lightning-fast** with Vite (instant HMR)
- 🎨 **Dark cybersecurity-themed** UI with neon accents
- 🖱️ **Custom animated cursor** with smooth tracking
- 📱 **Fully responsive** design (mobile-first)
- 🎯 **Smooth scroll animations** with Intersection Observer
- 📊 **Interactive skills showcase** with animated bars
- 💼 **Project portfolio** with hover effects
- ✉️ **Contact form** with validation
- 🔄 **Optimized performance** with code splitting
- ♿ **Accessible** and SEO-friendly

## 🛠️ Tech Stack

| Technology | Purpose |
|-----------|---------|
| **React 18** | UI Library |
| **Vite** | Build tool & dev server |
| **CSS3** | Styling & animations |
| **Custom Hooks** | Intersection Observer pattern |

## 🚀 Quick Start

### Prerequisites
- Node.js 14+
- npm or yarn

### Installation

```bash
cd "c:\Users\Asus\Downloads\My_Portfolio"
npm install
```

### Development

```bash
npm run dev
```
Opens at `http://localhost:3000` with hot reload

### Production Build

```bash
npm run build
```

Generates optimized build in `dist/` folder

### Preview Build

```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx        # Sticky navbar with scroll detection
│   ├── Hero.jsx              # Landing section with terminal
│   ├── About.jsx             # About section with stats
│   ├── Skills.jsx            # Skills with animated bars
│   ├── Projects.jsx          # Portfolio grid
│   ├── Contact.jsx           # Contact form & socials
│   ├── CustomCursor.jsx      # Animated custom cursor
│   ├── Footer.jsx            # Footer
│   └── [Component].css       # Component-scoped styles
├── hooks/
│   └── useIntersectionObserver.js  # Reusable scroll reveal hook
├── App.jsx
├── App.css
├── index.jsx
└── index.css
public/
├── index.html
└── manifest.json
vite.config.js
package.json
```

## 🎨 Customization

### Update Personal Info

Edit component files:
- **Hero section**: `src/components/Hero.jsx`
- **About content**: `src/components/About.jsx`
- **Skills data**: `src/components/Skills.jsx` (hardcoded array)
- **Projects**: `src/components/Projects.jsx` (hardcoded array)
- **Contact email**: `src/components/Contact.jsx`

### Change Colors

Edit CSS variables in `src/App.css`:
```css
:root {
  --bg: #040a0f;
  --accent: #00ffe0;
  --danger: #ff3c5e;
  /* ... more colors ... */
}
```

### Add New Sections

1. Create component: `src/components/NewSection.jsx`
2. Create styles: `src/components/NewSection.css`
3. Import in `src/App.jsx`

## 📦 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

Or connect GitHub repo to Vercel Dashboard

### GitHub Pages

```bash
npm install --save-dev gh-pages
```

Update `vite.config.js`:
```js
export default defineConfig({
  base: '/repo-name/',
  // ... other config
})
```

Add to `package.json`:
```json
{
  "homepage": "https://yourusername.github.io/repo-name/",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

Deploy:
```bash
npm run deploy
```

### Netlify

- Connect GitHub repo to Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## 🔄 Performance

- ✅ Code splitting with Vite
- ✅ Lazy animations with Intersection Observer
- ✅ CSS transforms for smooth animations
- ✅ Minimal dependencies (2 packages)
- ✅ Tree-shaking enabled by default

## 🌐 Browser Support

| Browser | Support |
|---------|---------|
| Chrome | Latest ✓ |
| Firefox | Latest ✓ |
| Safari | Latest ✓ |
| Edge | Latest ✓ |

## 📝 Available Scripts

```bash
npm run dev      # Start dev server with HMR
npm run build    # Build for production
npm run preview  # Preview production build locally
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## 🔐 Security

- No external form submission (client-side validation only)
- Secure headers recommended for deployment
- No sensitive data in code

## 📄 License

MIT License - feel free to use this template!

## 👨‍💻 Author

**Dina Tamang**
- Email: dina.tamang@email.com
- GitHub: [@dina-tamang](https://github.com)
- LinkedIn: [Dina Tamang](https://linkedin.com)

---

**Made with ❤️ and security in mind** — Last updated June 2026
"# Portfolio" 
