import { BaseView } from './BaseView.js';
import { CVModel } from '../models/cvModel.js';

/**
 * CV View - Comedy Manga Style
 * Renders fun, humorous manga-style CV page
 * Inspired by comedy manga like Grand Blue, Komi-san, Yotsuba&!
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
        <!-- HERO SECTION - FUN & WELCOMING -->
        <div class="comedy-hero">
          <!-- Speed lines background -->
          <canvas id="speedLinesCanvas" class="speed-lines-bg"></canvas>
          
          <!-- Chibi character reaction (optional) -->
          <div class="chibi-character">
            <div class="chibi-face">
              <div class="chibi-eyes">
                <span class="eye">✨</span>
                <span class="eye">✨</span>
              </div>
              <div class="chibi-mouth">▿</div>
            </div>
            <div class="chibi-body">👔</div>
          </div>
          
          <!-- Big fun title with sound effect -->
          <div class="hero-title-block">
            <div class="sfx-top">キラキラ</div>
            <h1 class="comedy-main-title">
              <span class="title-shadow">THE ETHICAL</span>
              <span class="title-main">HACKER!</span>
              <span class="title-jp">よろしく！</span>
            </h1>
            <div class="sfx-bottom">ドキドキ</div>
          </div>
          
          <!-- Multiple speech bubbles with quick facts -->
          <div class="bubble-cluster">
            <div class="mini-bubble bubble-1">
              <span>🔒 Security</span>
            </div>
            <div class="mini-bubble bubble-2">
              <span>💻 Dev</span>
            </div>
            <div class="mini-bubble bubble-3">
              <span>🎨 Design</span>
            </div>
            <div class="mini-bubble bubble-4">
              <span>⚡ Fast!</span>
            </div>
          </div>
          
          <!-- Manga symbols floating -->
          <div class="floating-symbols">
            <span class="symbol star">⭐</span>
            <span class="symbol heart">💕</span>
            <span class="symbol sparkle">✨</span>
            <span class="symbol sweat">💧</span>
          </div>
        </div>
        
        <!-- COMEDY CHAPTERS - DYNAMIC PANELS -->
        <div class="comedy-chapters">
          ${cvData.chapters.map((chapter, index) => `
            <div class="comedy-panel panel-${index + 1}" data-chapter="${index}">
              <!-- Panel background with halftone -->
              <div class="panel-halftone"></div>
              
              <!-- Exaggerated expression -->
              <div class="expression-icon ${this.getExpressionClass(index)}">
                ${chapter.icon}
              </div>
              
              <!-- Sound effect -->
              <div class="panel-sfx">
                ${this.getSoundEffect(index)}
              </div>
              
              <!-- Dynamic speech bubble -->
              <div class="dynamic-bubble bubble-type-${index % 3}">
                <div class="bubble-tail"></div>
                <div class="bubble-content">
                  <h3 class="bubble-title">${chapter.title}</h3>
                  <p class="bubble-text">${chapter.subtitle}</p>
                  <span class="bubble-emoji">${this.getChapterEmoji(index)}</span>
                </div>
              </div>
              
              <!-- Manga motion lines -->
              <div class="motion-lines"></div>
              
              <!-- Chapter number (fun style) -->
              <div class="chapter-stamp">
                <span class="stamp-number">#${chapter.number}</span>
                <span class="stamp-kanji">章</span>
              </div>
            </div>
          `).join('')}
        </div>
        
        <!-- DOWNLOAD SECTION - EXCITED & FUN -->
        <div class="comedy-download">
          <!-- Big excited expression -->
          <div class="excited-face">
            <div class="face-container">
              <div class="big-eyes">
                <span class="eye sparkle">✨👁️✨</span>
                <span class="eye sparkle">✨👁️✨</span>
              </div>
              <div class="big-mouth">⌣</div>
            </div>
          </div>
          
          <!-- Enthusiasm sound effects -->
          <div class="download-sfx-cluster">
            <span class="sfx sfx-1">ワクワク!</span>
            <span class="sfx sfx-2">キラッ✨</span>
            <span class="sfx sfx-3">ドキドキ💕</span>
          </div>
          
          <!-- Excited speech bubble -->
          <div class="download-bubble-excited">
            <div class="bubble-tail-big"></div>
            <h2 class="download-title">
              <span class="title-en">DOWNLOAD NOW!</span>
              <span class="title-jp">今すぐダウンロード！</span>
            </h2>
            
            <!-- Fun download button -->
            <a href="${cvData.pdfPath}" download="JavierFernandez_CV.pdf" class="download-btn-fun">
              <span class="btn-icon">📥</span>
              <span class="btn-text">GET CV</span>
              <span class="btn-sparkle">✨</span>
            </a>
            
            <p class="download-subtitle">Full version available!</p>
          </div>
          
          <!-- Stars and hearts everywhere -->
          <div class="celebration-symbols">
            <span class="celebrate">⭐</span>
            <span class="celebrate">💕</span>
            <span class="celebrate">✨</span>
            <span class="celebrate">🎉</span>
            <span class="celebrate">⭐</span>
            <span class="celebrate">💫</span>
          </div>
          
          <!-- Motion lines -->
          <div class="impact-lines"></div>
        </div>
        
        <!-- FOOTER - CASUAL & FUN -->
        <div class="comedy-footer">
          <div class="footer-bubble">
            <span class="footer-text">Thanks for reading! ありがとう！</span>
            <span class="footer-emoji">😊</span>
          </div>
          <div class="footer-credit">© 2024 Javier Fernández - DOGSOUL DIGITAL 🐕</div>
        </div>
      </div>
    `;
  }


  /**
   * Get expression class based on chapter
   * @param {number} index - Chapter index
   * @returns {string} Expression class
   */
  getExpressionClass(index) {
    const expressions = ['shocked', 'excited', 'confident', 'happy'];
    return expressions[index % expressions.length];
  }

  /**
   * Get sound effect based on chapter
   * @param {number} index - Chapter index
   * @returns {string} Japanese sound effect
   */
  getSoundEffect(index) {
    const sfx = ['ドドド', 'キラキラ', 'バーン', 'ワクワク'];
    return sfx[index % sfx.length];
  }

  /**
   * Get chapter emoji
   * @param {number} index - Chapter index
   * @returns {string} Emoji
   */
  getChapterEmoji(index) {
    const emojis = ['🔥', '💻', '🎨', '⚡'];
    return emojis[index % emojis.length];
  }

  /**
   * After render lifecycle hook
   * Initialize animations and effects
   */
  afterRender() {
    this.initSpeedLines();
    this.initFloatingSymbols();
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
   * Initialize floating symbols animation
   */
  initFloatingSymbols() {
    const symbols = document.querySelectorAll('.floating-symbols .symbol, .celebration-symbols .celebrate');
    
    symbols.forEach((symbol, index) => {
      // Random animation delay
      symbol.style.animationDelay = `${index * 0.2}s`;
      
      // Random starting position
      const randomX = Math.random() * 100;
      const randomY = Math.random() * 100;
      symbol.style.left = `${randomX}%`;
      symbol.style.top = `${randomY}%`;
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

    // Observe comedy panels
    document.querySelectorAll('.comedy-panel, .comedy-download').forEach(el => {
      observer.observe(el);
    });
  }
}
