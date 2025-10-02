![DogSoulDev Portfolio](img/perretes.png)

# Cybersecurity Portfolio - Javier Fernández

🔗 **Live Demo**: [https://dogsouldev.github.io/Web/](https://dogsouldev.github.io/Web/)

> Strategic Blue Team Candidate | Cybersecurity & IT Systems Engineering | 10+ Years Experience

Professional manga-inspired portfolio website showcasing cybersecurity expertise, built with vanilla JavaScript following MVC architecture and enterprise-grade standards.



## 🚀 Features

- **Single-Page Application** - Smooth navigation without page reloads
- **MVC Architecture** - Clean separation of concerns (Models, Views, Controllers)
- **Particle Network Canvas** - Interactive 3D visualization
- **GitHub API Integration** - Dynamic project fetching from GitHub repositories
- **Manga-Inspired Design** - Authentic Japanese manga aesthetic with black/white/gray scheme
- **Security-First** - Strict CSP, XSS prevention, no unsafe operations
- **Zero Dependencies** - Pure HTML5, CSS3, and ES6+ JavaScript
- **Fully Responsive** - Optimized for all devices (360px - 1920px+)
- **Logo Draw Animation** - Animated SVG logo on page load
- **Typewriter Effects** - Dynamic text animations for engaging UX



## 📁 Project Structure

```
├── index.html              # Entry point with CSP headers
├── css/                    # Modular stylesheets
│   ├── base.css            # Reset, variables, utilities
│   ├── layout.css          # Grid layouts, responsive breakpoints
│   ├── components.css      # UI components (navbar, cards, forms)
│   ├── effects.css         # Animations and manga effects
│   ├── particles.css       # Canvas visualization styles
│   ├── logo-draw-animation.css  # Logo animation
│   └── cv-manga.css        # CV page manga styling
├── js/
│   ├── main.js             # Application entry point
│   ├── config/
│   │   └── appConfig.js    # Centralized configuration
│   ├── controllers/        # Business logic
│   │   ├── appController.js      # Main app orchestration
│   │   └── projectsController.js # Project interactions
│   ├── models/             # Data layer
│   │   ├── profileModel.js
│   │   ├── projectsModel.js
│   │   ├── experienceModel.js
│   │   ├── educationModel.js
│   │   ├── aboutModel.js
│   │   ├── skillsModel.js
│   │   └── cvModel.js
│   ├── views/              # Presentation layer
│   │   ├── BaseView.js           # Abstract base class
│   │   ├── profileView.js
│   │   ├── projectsView.js
│   │   ├── experienceView.js
│   │   ├── educationView.js
│   │   ├── contactView.js
│   │   └── cvView.js
│   ├── utils/
│   │   └── iconMapper.js         # Icon/tech mapping
│   ├── particleNetwork.js        # Canvas particle visualization
│   ├── animatedText.js           # Typewriter effects
│   └── logoDrawAnimation.js      # SVG logo animation
├── icons/                  # Custom SVG icons (15 icons)
├── img/                    # Images and assets
└── docs/                   # CV PDF for download
```



## 🎯 Portfolio Sections

- **Profile** - Avatar, bio, typewriter effect, skills grid with manga speech bubbles, social links
- **Projects** - Dynamic portfolio with GitHub API integration and animated project cards
- **Experience** - Professional work history (10+ years) with flip card animations
- **Education** - Academic background: Master's in Cybersecurity, Master's in Software Development
- **CV** - Epic manga-style CV download page with authentic Japanese magazine design
- **Contact** - Responsive contact form with Formspree integration

## � Responsive Design

**100% responsive across all devices:**

- ✅ **Desktop** (1920px+) - Full multi-column layout with advanced animations
- ✅ **Laptop** (1366px) - Optimized for smaller screens
- ✅ **Tablet** (768px) - 2-column grids, compact navigation
- ✅ **Mobile** (480px) - Single column, touch-optimized
- ✅ **Small Mobile** (360px) - Ultra-compact, minimal margins

**Key responsive features:**
- Adaptive grids using CSS Grid and Flexbox
- Mobile-optimized logo animation with viewport fixes
- Touch-friendly buttons (>44px touch targets)
- Scalable typography and spacing
- Mobile-optimized canvas visualizations

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