# Cybersecurity Portfolio - Javier Fernández

A professional cybersecurity portfolio website with manga-inspired design. Built with vanilla JavaScript following MVC architecture and enterprise-grade code quality standards.

## 🚀 Features

- **Single-Page Application** - Smooth navigation without page reloads
- **MVC Architecture** - Clean separation of concerns (Models, Views, Controllers)
- **3D Neural Network Visualization** - Interactive 3D Canvas visualization with 97 cybersecurity knowledge nodes
- **GitHub Integration** - Dynamic project fetching from GitHub API
- **Security-First** - Strict CSP, XSS prevention, no unsafe operations
- **Zero Dependencies** - Pure HTML5, CSS3, and ES6+ JavaScript
- **Fully Responsive** - Optimized for all devices (360px - 1920px+)
- **Manga-Inspired Design** - Unique black & white aesthetic with speed lines and effects
- **Typewriter Effects** - Dynamic text animations for engaging user experience

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
├── index.html              # Entry point with CSP headers
├── css/                    # Modular stylesheets (separation of concerns)
│   ├── base.css           # Reset, CSS variables, scrollbar
│   ├── layout.css         # Layout, grid, responsive breakpoints
│   ├── components.css     # UI components (navbar, cards, forms)
│   ├── effects.css        # Animations (typewriter, glitch, speed-lines)
│   └── logo-draw-animation.css  # Logo animation with responsive breakpoints
├── js/
│   ├── main.js            # Application entry point
│   ├── config/
│   │   └── appConfig.js   # Centralized configuration (DRY principle)
│   ├── controllers/       # MVC Controllers (business logic)
│   │   ├── appController.js      # Main app orchestration
│   │   ├── projectsController.js # Project interactions
│   │   └── notesController.js    # Notes visualization controls
│   ├── models/            # Data models (data layer)
│   │   ├── profileModel.js
│   │   ├── projectsModel.js
│   │   ├── experienceModel.js
│   │   ├── educationModel.js
│   │   ├── notesModel.js         # 97 cybersecurity nodes
│   │   ├── aboutModel.js
│   │   └── skillsModel.js
│   ├── views/             # View renderers (presentation layer)
│   │   ├── BaseView.js            # Abstract base class (DRY)
│   │   ├── profileView.js
│   │   ├── projectsView.js
│   │   ├── experienceView.js
│   │   ├── educationView.js
│   │   ├── notesView.js
│   │   ├── contactView.js
│   │   └── skillsView.js
│   ├── utils/             # Utilities
│   │   └── iconMapper.js          # Icon/tech mapping utility
│   ├── notesCanvas.js     # 3D visualization engine
│   └── logoDrawAnimation.js # Animated logo with device detection
├── icons/                 # SVG icons (15 custom icons)
└── img/                   # Images and avatar
```

## 🎯 Sections

- **Profile** - Avatar, bio, typewriter effect, skills grid, social links
- **Projects** - Dynamic portfolio projects with animated panels and GitHub integration
- **Experience** - Professional work history with flip cards
- **Education** - Academic background with 3D flip card animations
- **Notes** - Interactive 3D neural network visualization with 97 cybersecurity knowledge nodes
  - Technologies: XSS, SQL Injection, Buffer Overflow, Cryptography, OSINT, and more
  - 3D rotating sphere with Fibonacci distribution
  - Zoom, pan, and rotate controls
  - Starfield background for depth effect
- **Contact** - Responsive contact form with Formspree integration

## 🔒 Security

- **Content Security Policy (CSP)** - Strict CSP headers with `unsafe-inline` only for styles
- **XSS Prevention** - All user input escaped through `escapeHtml()` utility
- **No Unsafe Operations** - No `eval()`, `Function()`, or unsafe DOM manipulation
- **Input Validation** - Form validation and sanitization
- **HTTPS Only** - External resources loaded over HTTPS
- **No External Dependencies** - Reduces attack surface (only Google Fonts CDN)
- **Secure Headers** - CSP prevents inline scripts and unauthorized resources

## 💻 Code Quality

Built following industry best practices with **95/100 architecture score**:

### SOLID Principles ✅
- **S**ingle Responsibility - Each class has one clear purpose
- **O**pen/Closed - Extensible without modification (BaseView pattern)
- **L**iskov Substitution - All views interchangeable
- **I**nterface Segregation - No forced unused methods
- **D**ependency Inversion - High-level modules depend on abstractions

### DRY (Don't Repeat Yourself) ✅
- BaseView abstract class eliminates view duplication
- Centralized configuration in `appConfig.js`
- CSS variables for consistent theming
- Reusable utilities (IconMapper)

### KISS (Keep It Simple, Stupid) ✅
- Clear, self-documenting method names
- No over-engineering or unnecessary abstractions
- Straightforward logic flows
- Minimal cognitive load

### MVC Pattern ✅
- **Models**: Pure data management (`js/models/*.js`)
- **Views**: HTML generation only (`js/views/*.js`)
- **Controllers**: Event handling and business logic (`js/controllers/*.js`)
- Clean separation of concerns throughout

### Additional Quality Standards
- **JSDoc** - Complete documentation for all public APIs
- **Error Handling** - Try/catch blocks with user-friendly messages
- **No Magic Numbers** - All constants in configuration
- **Consistent Naming** - camelCase (JS), kebab-case (CSS)
- **Modular CSS** - Separated by purpose (base, layout, components, effects)

## �️ Technologies

### Core
- **HTML5** - Semantic markup, Canvas API
- **CSS3** - Grid, Flexbox, Custom Properties, Animations
- **JavaScript (ES6+)** - Modules, Classes, Async/Await, Promises

### Design Patterns
- **MVC Architecture** - Separation of concerns
- **Module Pattern** - ES6 imports/exports
- **Observer Pattern** - Event-driven architecture
- **Factory Pattern** - View creation
- **Singleton Pattern** - Configuration management

### APIs & Integrations
- **Canvas API** - 3D visualization rendering
- **GitHub API** - Dynamic project fetching
- **Formspree** - Contact form handling
- **Web Animations API** - Smooth transitions

### Build & Deployment
- **No Build Process** - Pure vanilla JavaScript
- **GitHub Pages** - Static hosting
- **Git** - Version control

## �📜 License & Copyright

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

---

**© 2025 DogSoulDev (DsD)**  
Built using vanilla JavaScript | MVC Architecture | 100% SOLID Compliant  
🚫 Protected against AI training | ⚖️ MIT License with restrictions