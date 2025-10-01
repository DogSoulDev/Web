# Cybersecurity Portfolio - Javier Fernández

A professional cybersecurity portfolio website with manga-inspired design. Built with vanilla JavaScript following MVC architecture and enterprise-grade code quality standards.

## 🚀 Features

- **Single-Page Application** - Smooth navigation without page reloads
- **MVC Architecture** - Clean separation of concerns (Models, Views, Controllers)
- **Neural Network Visualization** - Interactive Canvas-based cybersecurity knowledge graph
- **GitHub Integration** - Dynamic project fetching from GitHub API
- **Security-First** - Strict CSP, XSS prevention, no unsafe operations
- **Zero Dependencies** - Pure HTML5, CSS3, and ES6+ JavaScript
- **Fully Responsive** - Optimized for all devices (320px - 1920px+)

## 📱 Responsive Design

**100% responsive across all devices:**
- ✅ **Desktop** (1920px+) - Full multi-column layout
- ✅ **Laptop** (1366px) - Optimized for smaller screens
- ✅ **Tablet** (768px) - 2-column grids, compact navigation
- ✅ **Mobile** (480px) - Single column, touch-optimized
- ✅ **Small Mobile** (360px) - Ultra-compact, minimal margins

**Key responsive features:**
- Adaptive grids using `minmax(min(100%, Xpx), 1fr)`
- Flexible navigation with wrap layout
- Touch-friendly buttons (>44px targets)
- Scalable typography and spacing
- Mobile-optimized forms and canvas

## 📁 Project Structure

```
├── index.html              # Entry point
├── css/                    # Modular stylesheets
│   ├── base.css           # Reset and base styles
│   ├── layout.css         # Layout and grid
│   ├── components.css     # UI components
│   ├── effects.css        # Animations and effects
│   └── logo-draw-animation.css
├── js/
│   ├── main.js            # Application entry point
│   ├── controllers/       # MVC Controllers
│   ├── models/            # Data models
│   ├── views/             # View renderers (extend BaseView)
│   └── utils/             # Utilities (IconMapper, etc.)
├── icons/                 # SVG icons
└── img/                   # Images and avatar
```

## 🎯 Sections

- **Profile** - Avatar, bio, social links (GitHub, LinkedIn, Email)
- **Projects** - Portfolio projects with video demos and tech stacks
- **Experience** - Professional work history
- **Education** - Academic background
- **Notes** - Interactive neural network of cybersecurity knowledge (77 nodes)
- **Contact** - Contact form with Formspree integration

## 🔒 Security

- Content Security Policy (CSP) enabled
- XSS prevention through HTML escaping
- No `eval()`, `innerHTML`, or unsafe DOM manipulation
- Input validation and sanitization
- No external libraries or CDN dependencies (except Google Fonts)

## 💻 Code Quality

Built following industry best practices:
- **SOLID Principles** - Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion
- **DRY** - No code duplication, reusable BaseView class
- **KISS** - Simple, focused methods
- **JSDoc** - Complete documentation for all public APIs

## 📜 License & Copyright

**© 2025 DogSoulDev (DsD) - All Rights Reserved**

This project is licensed under **MIT License with AI Training Restriction**.

### ⚠️ Important Legal Notices:

- **AI Training Prohibited**: This code **CANNOT** be used for training AI/ML models or LLMs
- **Attribution Required**: Any use, fork, or scraping **MUST** credit DogSoulDev (DsD)
- **Web Scraping**: Must preserve attribution with GitHub link and contact information

### ✅ You CAN:
- Use and modify the code with proper attribution
- Fork and create your own versions (with credit)
- Learn from the code structure

### ❌ You CANNOT:
- Train AI models with this code
- Remove copyright notices
- Scrape without attribution

**For permissions or questions**: dogsouldev@protonmail.com

See [LICENSE](./LICENSE) file for full legal terms.

## 👨‍💻 Author

**DogSoulDev (DsD)**  
Javier Fernández - Cybersecurity Professional

- 🐱 GitHub: [@DogSoulDev](https://github.com/DogSoulDev)
- 📧 Email: dogsouldev@protonmail.com
- 🌐 Portfolio: [Your Website]

---

**© 2025 DogSoulDev (DsD)**  
Built using vanilla JavaScript | MVC Architecture | 100% SOLID Compliant  
🚫 Protected against AI training | ⚖️ MIT License with restrictions