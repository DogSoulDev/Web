import { BaseView } from './BaseView.js';
import { CVModel } from '../models/cvModel.js';

/**
 * CV View
 * Renders manga-style CV page with epic cover design
 * Follows SOLID principles: Single responsibility for CV presentation
 */
export class CVView extends BaseView {
  constructor() {
    super();
    this.model = new CVModel();
  }

  /**
   * Render CV page
   * @returns {string} HTML string
   */
  async render() {
    const cvData = this.model.getCVData();
    
    return `
      <div class="cv-manga-container">
        <!-- Manga Cover Hero Section -->
        <div class="manga-cover-hero">
          <!-- Background Effects -->
          <canvas id="speedLinesCanvas" class="speed-lines-bg"></canvas>
          <div class="manga-halftone-overlay"></div>
          
          <!-- Main Cover Content -->
          <div class="cover-content">
            <!-- Japanese Title -->
            <div class="manga-title-jp">
              <span class="title-main-jp">${cvData.mangaTitle.main}</span>
              <span class="title-sub-jp">${cvData.mangaTitle.sub}</span>
            </div>
            
            <!-- English Title -->
            <h1 class="manga-title-en">
              <span class="title-the">THE</span>
              <span class="title-main">ETHICAL HACKER</span>
            </h1>
            
            <!-- Volume Badge -->
            <div class="volume-badge">
              <span class="volume-text">VOLUME 1</span>
              <span class="volume-subtitle">Blue Team Chronicles</span>
            </div>
            
            <!-- Character Stats Box -->
            <div class="character-stats">
              ${cvData.stats.map(stat => `
                <div class="stat-item">
                  <span class="stat-icon">${stat.icon}</span>
                  <span class="stat-label">${stat.label}</span>
                  <span class="stat-value">${stat.value}</span>
                </div>
              `).join('')}
            </div>
            
            <!-- Tagline -->
            <p class="cover-tagline">${cvData.tagline}</p>
            
            <!-- Author Credit -->
            <p class="cover-author">${cvData.author}</p>
            
            <!-- Action Starburst -->
            <div class="action-starburst">
              <span class="starburst-text">NOW AVAILABLE!</span>
            </div>
          </div>
        </div>
        
        <!-- Chapters Preview Section -->
        <div class="chapters-preview">
          <h2 class="section-title">
            <span class="title-decoration">≫</span>
            INSIDE THIS VOLUME
            <span class="title-decoration">≪</span>
          </h2>
          
          <div class="chapters-grid">
            ${cvData.chapters.map((chapter, index) => `
              <div class="chapter-card" data-chapter="${index}">
                <div class="chapter-icon">${chapter.icon}</div>
                <div class="chapter-number">${chapter.number}</div>
                <h3 class="chapter-title">${chapter.title}</h3>
                <p class="chapter-subtitle">${chapter.subtitle}</p>
                <div class="chapter-arrow">→</div>
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- Download CTA Section -->
        <div class="download-cta">
          <div class="cta-content">
            <h2 class="cta-title">READY TO READ THE FULL STORY?</h2>
            <p class="cta-subtitle">Download the complete professional saga</p>
            
            <a href="${cvData.pdfPath}" download="JavierFernandez_CV.pdf" class="download-btn">
              <span class="btn-icon">📥</span>
              <span class="btn-text">${cvData.downloadText}</span>
              <span class="btn-subtext">PDF Format • Complete CV</span>
            </a>
            
            <!-- Manga-style speech bubble -->
            <div class="recruiter-bubble">
              <p>"This candidate's journey is impressive!"</p>
              <span class="bubble-tail"></span>
            </div>
          </div>
          
          <!-- Background decoration -->
          <div class="cta-decoration">
            <div class="speed-line"></div>
            <div class="speed-line"></div>
            <div class="speed-line"></div>
          </div>
        </div>
      </div>
    `;
  }

  /**
   * After render lifecycle hook
   * Initialize animations and effects
   */
  afterRender() {
    this.initSpeedLines();
    this.initHoverEffects();
    this.initScrollAnimations();
  }

  /**
   * Initialize speed lines canvas animation
   */
  initSpeedLines() {
    const canvas = document.getElementById('speedLinesCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const lines = [];
    const lineCount = 50;

    // Create speed lines
    for (let i = 0; i < lineCount; i++) {
      lines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: Math.random() * 100 + 50,
        speed: Math.random() * 3 + 1,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    // Animate speed lines
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        ctx.strokeStyle = `rgba(0, 0, 0, ${line.opacity})`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(line.x, line.y);
        ctx.lineTo(line.x - line.length, line.y);
        ctx.stroke();

        // Move line
        line.x += line.speed;
        
        // Reset if off screen
        if (line.x > canvas.width + line.length) {
          line.x = -line.length;
          line.y = Math.random() * canvas.height;
        }
      });

      requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
  }

  /**
   * Initialize hover effects for chapter cards
   */
  initHoverEffects() {
    const chapterCards = document.querySelectorAll('.chapter-card');
    
    chapterCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotate(2deg)';
      });
      
      card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotate(0deg)';
      });
    });
  }

  /**
   * Initialize scroll-triggered animations
   */
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, { threshold: 0.1 });

    // Observe elements
    document.querySelectorAll('.chapter-card, .download-cta').forEach(el => {
      observer.observe(el);
    });
  }
}
