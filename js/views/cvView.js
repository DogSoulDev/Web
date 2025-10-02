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
        <!-- PORTADA ESTILO MANGA JAPONÉS -->
        <div class="manga-cover-page">
          <!-- Fondo con texturas tradicionales -->
          <canvas id="speedLinesCanvas" class="speed-lines-bg"></canvas>
          
          <!-- Título vertical japonés (tategaki) -->
          <div class="tategaki-title">
            <div class="kanji-large">履歴書</div>
            <div class="kanji-subtitle">RESUME</div>
          </div>
          
          <!-- Logo/Sello tradicional -->
          <div class="hanko-seal">
            <div class="seal-inner">
              <span class="seal-kanji">承</span>
              <span class="seal-kanji">認</span>
            </div>
          </div>
          
          <!-- Título principal estilo Weekly Shonen Jump -->
          <div class="main-title-block">
            <div class="title-badge">VOL.1</div>
            <h1 class="manga-main-title">
              <span class="title-line-1">THE</span>
              <span class="title-line-2">ETHICAL HACKER</span>
            </h1>
            <div class="subtitle-jp">倫理的ハッカー</div>
          </div>
          
          <!-- Stats estilo ficha de personaje -->
          <div class="character-profile">
            <div class="profile-header">キャラクター情報</div>
            <div class="stats-grid">
              ${cvData.stats.map(stat => `
                <div class="stat-row">
                  <span class="stat-label-jp">${stat.labelJp || stat.label}</span>
                  <span class="stat-dots">・・・</span>
                  <span class="stat-value">${stat.value}</span>
                </div>
              `).join('')}
            </div>
          </div>
          
          <!-- Sello de autor -->
          <div class="author-credit">
            <span class="by-text">著者</span>
            <span class="author-name">${cvData.author}</span>
          </div>
        </div>
        
        <!-- PÁGINA DE MANGA CON PANELES -->
        <div class="manga-panels-page">
          <!-- Número de página estilo manga -->
          <div class="page-number">P. 002</div>
          
          <!-- Grid de paneles estilo manga real -->
          <div class="manga-layout">
            ${cvData.chapters.map((chapter, index) => `
              <div class="manga-panel panel-${index + 1}">
                <!-- Borde de panel tradicional -->
                <div class="panel-border">
                  <!-- Contenido del panel -->
                  <div class="panel-content">
                    <!-- Número de capítulo en kanji -->
                    <div class="chapter-badge">
                      <span class="chapter-kanji">第${this.numberToKanji(chapter.number)}章</span>
                      <span class="chapter-number">CHAPTER ${chapter.number}</span>
                    </div>
                    
                    <!-- Icono grande -->
                    <div class="panel-icon">${chapter.icon}</div>
                    
                    <!-- Texto del capítulo -->
                    <div class="panel-text">
                      <h3 class="panel-title">${chapter.title}</h3>
                      <p class="panel-subtitle">${chapter.subtitle}</p>
                    </div>
                    
                    <!-- Efecto de velocidad -->
                    <div class="speed-lines-overlay"></div>
                  </div>
                </div>
                
                <!-- Bocadillo de diálogo opcional -->
                ${index === 0 ? `
                  <div class="cv-speech-bubble bubble-${index}">
                    <span class="bubble-text">始まり！</span>
                  </div>
                ` : ''}
              </div>
            `).join('')}
          </div>
        </div>
        
        <!-- PÁGINA FINAL ESTILO MANGA -->
        <div class="manga-end-page">
          <!-- Número de página -->
          <div class="page-number">P. 003</div>
          
          <!-- Gran símbolo "完" (Fin) -->
          <div class="owari-symbol">
            <div class="owari-circle">
              <span class="owari-kanji">完</span>
            </div>
            <div class="owari-text">END OF PREVIEW</div>
          </div>
          
          <!-- Panel de descarga estilo manga -->
          <div class="download-manga-panel">
            <!-- Borde grueso tradicional -->
            <div class="panel-thick-border">
              <!-- Título en japonés -->
              <div class="download-title-jp">続きはPDFで！</div>
              <div class="download-title-en">CONTINUE IN PDF</div>
              
              <!-- Icono grande -->
              <div class="download-icon-manga">📥</div>
              
              <!-- Botón estilo sello -->
              <a href="${cvData.pdfPath}" download="JavierFernandez_CV.pdf" class="download-btn-stamp">
                <div class="stamp-border">
                  <div class="stamp-inner">
                    <span class="stamp-text-jp">入手</span>
                    <span class="stamp-text-en">GET CV</span>
                  </div>
                </div>
              </a>
              
              <!-- Texto adicional -->
              <div class="download-subtitle">完全版履歴書</div>
            </div>
          </div>
          
          <!-- Información de publicación estilo manga -->
          <div class="manga-publication-info">
            <div class="pub-line">発行: DOGSOUL DIGITAL STUDIOS</div>
            <div class="pub-line">著者: Javier Fernández</div>
            <div class="pub-line">© 2024 All Rights Reserved</div>
          </div>
          
          <!-- Líneas de cierre tradicionales -->
          <div class="closing-lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
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
