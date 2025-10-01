# Cybersecurity Portfolio - Javier Fernández

A professional cybersecurity portfolio website with manga-inspired design. Built with vanilla JavaScript following MVC architecture and enterprise-grade code quality standards.

## 🚀 Features

- **Single-Page Application** - Smooth navigation without page reloads
- **MVC Architecture** - Clean separation of concerns (Models, Views, Controllers)
- **Neural Network Visualization** - Interactive Canvas-based cybersecurity knowledge graph
- **GitHub Integration** - Dynamic project fetching from GitHub API
- **Security-First** - Strict CSP, XSS prevention, no unsafe operations
- **Zero Dependencies** - Pure HTML5, CSS3, and ES6+ JavaScript
- **Responsive Design** - Mobile-friendly manga-inspired aesthetics

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

## 🌐 Deployment

**GitHub Pages:**
1. Push to `main` branch
2. Go to Settings → Pages
3. Set source to `main` branch
4. Access at `https://<username>.github.io/<repo-name>/`

## 👨‍💻 Author

**Javier Fernández**  
Cybersecurity Professional

- GitHub: [@DogSoulDev](https://github.com/DogSoulDev)
- Portfolio: [Your Website]
- LinkedIn: [Your LinkedIn]

---

Built with ❤️ using vanilla JavaScript | MVC Architecture | 100% SOLID Compliant