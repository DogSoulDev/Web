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
        
        <!-- Table of Contents Section (目次 - Mokuji) -->
        <div class="manga-toc-section">
          <!-- Traditional manga TOC header -->
          <div class="toc-header">
            <div class="toc-border-top"></div>
            <h2 class="toc-title">
              <span class="toc-jp">目次</span>
              <span class="toc-en">CONTENTS</span>
            </h2>
            <div class="toc-volume-info">
              <span>VOL.1</span>
              <span class="divider">|</span>
              <span>THE ETHICAL HACKER</span>
            </div>
          </div>
          
          <!-- Chapter list (traditional manga style) -->
          <div class="toc-list">
            ${cvData.chapters.map((chapter, index) => `
              <div class="toc-entry">
                <div class="entry-left">
                  <span class="entry-icon">${chapter.icon}</span>
                  <div class="entry-text">
                    <div class="entry-chapter">第${this.numberToKanji(chapter.number)}章</div>
                    <div class="entry-title">${chapter.title}</div>
                    <div class="entry-subtitle">${chapter.subtitle}</div>
                  </div>
                </div>
                <div class="entry-dots"></div>
                <div class="entry-page">P.${(index + 1) * 10}</div>
              </div>
            `).join('')}
          </div>
          
          <!-- Traditional manga separator -->
          <div class="manga-separator">
            <span class="separator-star">★</span>
            <span class="separator-line"></span>
            <span class="separator-star">★</span>
          </div>
        </div>
        
        <!-- Download Section (Manga Ending Page Style) -->
        <div class="manga-ending-section">
          <!-- Traditional manga ending frame -->
          <div class="ending-frame">
            <!-- Top border decoration -->
            <div class="frame-border-top">
              <div class="border-pattern"></div>
            </div>
            
            <!-- Main content -->
            <div class="ending-content">
              <!-- Japanese "Owari" symbol -->
              <div class="owari-mark">
                <span class="owari-text">完</span>
              </div>
              
              <!-- Message -->
              <div class="ending-message">
                <h2 class="ending-title">STORY CONTINUES...</h2>
                <p class="ending-subtitle">続きは本編で！</p>
              </div>
              
              <!-- Download panel (manga style) -->
              <div class="download-panel">
                <div class="panel-border">
                  <div class="panel-content">
                    <div class="panel-icon">📥</div>
                    <div class="panel-text">
                      <span class="panel-title">${cvData.downloadText}</span>
                      <span class="panel-subtitle">Complete Professional Story</span>
                    </div>
                  </div>
                  <a href="${cvData.pdfPath}" download="JavierFernandez_CV.pdf" class="download-btn-manga">
                    <span class="btn-text">DOWNLOAD NOW</span>
                    <span class="btn-arrow">→</span>
                  </a>
                </div>
              </div>
              
              <!-- Publication info (manga style) -->
              <div class="publication-info">
                <p>Published by: DOGSOUL DIGITAL STUDIOS</p>
                <p>Author: Javier Fernández</p>
                <p>© 2024 All Rights Reserved</p>
              </div>
            </div>
            
            <!-- Bottom border decoration -->
            <div class="frame-border-bottom">
              <div class="border-pattern"></div>
            </div>
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
    this.initScrollAnimations();
  }

  /**
   * Convert number to Kanji
   * @param {number} num - Number to convert
   * @returns {string} Kanji representation
   */
  numberToKanji(num) {
    const kanji = ['一', '二', '三', '四', '五', '六', '七', '八', '九', '十'];
    return kanji[num - 1] || num;
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
    document.querySelectorAll('.toc-entry, .manga-ending-section').forEach(el => {
      observer.observe(el);
    });
  }
}
