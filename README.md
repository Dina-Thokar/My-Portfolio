# Dina Tamang Portfolio - React

A modern, responsive cybersecurity and developer portfolio built with **React**.

## Features

- ✨ Modern, sleek design with custom cursor
- 🎨 Dark cybersecurity-themed UI with neon accents
- 📱 Fully responsive (mobile, tablet, desktop)
- ⚡ Smooth animations and scroll reveals
- 🎯 Interactive components
- 📊 Skills showcase with animated progress bars
- 💼 Project portfolio with filtering
- 📞 Contact section with social links

## Tech Stack

- **Frontend:** React 18
- **Styling:** CSS3 (with CSS Modules)
- **Build Tool:** Create React App
- **Deployment:** Vercel / GitHub Pages

## Getting Started

### Prerequisites

- Node.js 14+
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/dina-tamang-portfolio.git
cd dina-tamang-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm start
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Project Structure

```
src/
├── components/
│   ├── Navigation.jsx
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Contact.jsx
│   └── Footer.jsx
├── styles/
│   ├── App.css
│   ├── Navigation.css
│   ├── Hero.css
│   ├── About.css
│   ├── Skills.css
│   ├── Projects.css
│   ├── Contact.css
│   └── Footer.css
├── App.jsx
└── index.jsx
public/
├── index.html
└── favicon.ico
```

## Customization

### Edit Content

All text content can be edited directly in the component files:
- Update hero section in `src/components/Hero.jsx`
- Modify skills data in `src/components/Skills.jsx`
- Edit projects in `src/components/Projects.jsx`
- Change contact info in `src/components/Contact.jsx`

### Update Colors

Edit the CSS custom properties in `src/styles/App.css`:
```css
:root {
  --bg: #040a0f;
  --accent: #00ffe0;
  --danger: #ff3c5e;
  /* ... more colors ... */
}
```

### Add New Sections

Create a new component in `src/components/` and import it in `src/App.jsx`

## Deployment

### Deploy to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

### Deploy to GitHub Pages

1. Update `package.json` with: `"homepage": "https://yourusername.github.io/dina-tamang-portfolio"`
2. Install gh-pages: `npm install --save-dev gh-pages`
3. Add to scripts in `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```
4. Deploy: `npm run deploy`

## Performance

- ✅ Lazy-loaded components
- ✅ Optimized animations using CSS transforms
- ✅ Scroll reveal with Intersection Observer
- ✅ Custom cursor with smooth animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the MIT License.

## Author

**Dina Tamang**
- Email: dina.tamang@email.com
- GitHub: [@dina-tamang](https://github.com/dina-tamang)
- LinkedIn: [Dina Tamang](https://linkedin.com/in/dina-tamang)

---

Made with ❤️ and security in mind.
"# Portfolio" 
