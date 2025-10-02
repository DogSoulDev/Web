import { BaseView } from './BaseView.js';
import { CVModel } from '../models/cvModel.js';

/**
 * CV View - CLASSIC MANGA STYLE (1985-2000)
 * ============================================
 * Authentic Japanese manga aesthetic in pure black & white
 * Inspired by legendary manga: Dragon Ball, Slam Dunk, JoJo's, One Piece, Rurouni Kenshin
 * 
 * Features:
 * - Traditional manga panels (vignettes/コマ)
 * - Hand-drawn ink aesthetic (手書き)
 * - Screentones and halftones (スクリーントーン)
 * - Japanese onomatopoeia (擬音語)
 * - Narrative storytelling about CV journey
 * - Speed lines and impact effects (効果線)
 * 
 * Story Arc: "The Developer's Journey" (開発者の旅)
 * Chapter 1: Birth of a Digital Warrior (デジタル戦士の誕生)
 * Chapter 2: The Ultimate Training (究極の修行)
 * Chapter 3: Epic Battles in the Code World (コードの世界の戦い)
 * Final Chapter: Download the Complete Power! (完全なる力をダウンロード！)
 */

export class CVView extends BaseView {
  constructor() {
    super();
    this.model = new CVModel();
  }

  /**
   * Generate radial action lines for manga effects
   * @param {number} count - Number of lines
   * @returns {string} HTML for action lines
   */
  generateActionLines(count = 24) {
    let lines = '';
    for (let i = 0; i < count; i++) {
      const rotation = (360 / count) * i;
      lines += `<div class="action-line" style="transform: translate(-50%, 0) rotate(${rotation}deg);"></div>`;
    }
    return lines;
  }

  /**
   * Generate speed lines for dynamic panels
   * @param {number} count - Number of lines
   * @returns {string} HTML for speed lines
   */
  generateSpeedLines(count = 15) {
    let lines = '';
    for (let i = 0; i < count; i++) {
      const left = Math.random() * 100;
      const opacity = 0.05 + Math.random() * 0.1;
      const rotation = -10 + Math.random() * 20;
      lines += `<div class="speed-line" style="left: ${left}%; opacity: ${opacity}; transform: rotate(${rotation}deg);"></div>`;
    }
    return lines;
  }

  /**
   * Generate impact lines from center
   * @param {number} count - Number of lines
   * @returns {string} HTML for impact lines
   */
  generateImpactLines(count = 12) {
    let lines = '';
    const angles = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330];
    for (let i = 0; i < count; i++) {
      const angle = angles[i];
      const width = 2 + Math.random() * 4;
      const length = 40 + Math.random() * 20;
      lines += `
        <div class="impact-line" style="
          width: ${width}px;
          height: ${length}%;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%) rotate(${angle}deg) translateY(-50%);
        "></div>
      `;
    }
    return lines;
  }

  /**
   * Main render method - Creates entire manga CV page
   * @returns {Promise<string>} HTML string
   */
  async render() {
    const cvData = this.model.getCVData();
    
    return `
      <div class="cv-manga-container">
        
        <!-- =============================================
             MANGA COVER PAGE - Shonen Jump Style
             ============================================= -->
        <div class="manga-cover">
          <!-- Background action lines -->
          <div class="cover-action-lines">
            ${this.generateActionLines(32)}
          </div>
          
          <!-- Official manga seal (top right) -->
          <div class="manga-seal no-select">CV</div>
          
          <!-- Main title logo -->
          <div class="cover-title">
            <h1 class="title-main">
              THE DEVELOPER'S<br>JOURNEY
            </h1>
            <p class="title-subtitle">開発者の旅</p>
            <p class="title-japanese">ジャビエル・フェルナンデス物語</p>
          </div>
          
          <!-- Introduction speech bubble -->
          <div class="cover-speech-bubble">
            <div class="bubble-tail"></div>
            <p class="bubble-text">
              "¡Desde los días del ZX Spectrum hasta convertirme en un maestro del código!
              Esta es mi historia de entrenamiento, batallas épicas contra bugs,
              y mi búsqueda del desarrollo perfecto..."
            </p>
          </div>
          
          <!-- Scroll indicator -->
          <div class="scroll-indicator">
            <span>▼ Scroll para comenzar la aventura ▼</span>
          </div>
        </div>
        
        <!-- =============================================
             CHAPTER 1: BIRTH OF A DIGITAL WARRIOR
             第1章: デジタル戦士の誕生
             ============================================= -->
        <div class="manga-page">
          <div class="page-number">Page 001</div>
          
          <div class="manga-panels">
            <!-- Panel 1: Origin story (Large splash) -->
            <div class="manga-panel panel-large panel-action">
              <div class="sfx-large sfx-top-right no-select">ドドド</div>
              <div class="panel-content">
                <h2 class="chapter-title">Chapter 1</h2>
                <h3 class="chapter-number-jp">第1章: デジタル戦士の誕生</h3>
                
                <div class="panel-speech-bubble narration-box">
                  <p>
                    <strong>Narrador:</strong> Todo comenzó en una época legendaria...
                    cuando los ordenadores tenían 48KB de RAM y los juegos se cargaban 
                    desde cassettes. Un joven de 8 años descubrió un ZX Spectrum...
                  </p>
                </div>
                
                <div class="panel-icon">💻</div>
                
                <div class="panel-speech-bubble shout-bubble">
                  <p>"¡Este es el inicio de mi camino como desarrollador!"</p>
                </div>
              </div>
              <div class="panel-speed-lines">
                ${this.generateSpeedLines(20)}
              </div>
              <div class="hatching-effect"></div>
            </div>
            
            <!-- Panel 2: Education Arc -->
            <div class="manga-panel">
              <div class="sfx-large sfx-bottom-left no-select">バーン</div>
              <div class="panel-content">
                <div class="panel-speech-bubble">
                  <p>
                    <strong>📚 El Entrenamiento Formal</strong><br><br>
                    <strong>FP Superior:</strong> Desarrollo de Aplicaciones Multiplataforma<br>
                    <em>"¡Aprendí los fundamentos del código!"</em>
                  </p>
                </div>
                
                <div class="panel-speech-bubble thought-bubble">
                  <p>
                    HTML, CSS, JavaScript, PHP, Java...
                    ¡Debo dominarlos todos!
                  </p>
                </div>
              </div>
              <div class="screentone-dots"></div>
            </div>
            
            <!-- Panel 3: First discoveries -->
            <div class="manga-panel">
              <div class="sfx-large sfx-top-right no-select">キラキラ</div>
              <div class="panel-content">
                <div class="panel-icon">🎨</div>
                
                <div class="panel-speech-bubble">
                  <p>
                    <strong>El Despertar del Diseño</strong><br><br>
                    "¡No solo código! También descubrí mi pasión por el diseño gráfico,
                    la edición de vídeo y la creación de contenido digital..."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- =============================================
             CHAPTER 2: THE ULTIMATE TRAINING
             第2章: 究極の修行
             ============================================= -->
        <div class="manga-page">
          <div class="page-number">Page 002</div>
          
          <div class="manga-panels">
            <!-- Panel 1: Skills montage (Large) -->
            <div class="manga-panel panel-large panel-climax">
              <div class="sfx-large sfx-top-right no-select">ゴゴゴ</div>
              <div class="panel-content">
                <h2 class="chapter-title">Chapter 2</h2>
                <h3 class="chapter-number-jp">第2章: 究極の修行</h3>
                
                <div class="panel-speech-bubble narration-box">
                  <p>
                    <strong>Narrador:</strong> Como todo héroe shonen, el entrenamiento fue duro.
                    Días y noches estudiando frameworks, lenguajes, herramientas...
                    ¡Pero cada skill dominada lo hacía más fuerte!
                  </p>
                </div>
                
                <div class="panel-speech-bubble shout-bubble">
                  <p>"¡Estos son mis poderes actuales!"</p>
                </div>
                
                <div class="panel-icon">⚡</div>
              </div>
              <div class="impact-lines">
                ${this.generateImpactLines(16)}
              </div>
            </div>
            
            <!-- Panel 2: Frontend Powers -->
            <div class="manga-panel">
              <div class="sfx-large sfx-top-right no-select">バシッ</div>
              <div class="panel-content">
                <div class="panel-speech-bubble">
                  <p>
                    <strong>🎨 HABILIDADES FRONTEND</strong><br><br>
                    ▸ HTML5 & CSS3 (Maestría nivel ∞)<br>
                    ▸ JavaScript ES6+ (Poder definitivo)<br>
                    ▸ React.js (Técnica especial)<br>
                    ▸ Vue.js (Ataque secundario)<br>
                    ▸ Responsive Design (Defensa total)<br>
                    ▸ SCSS/SASS (Combo de estilo)
                  </p>
                </div>
              </div>
              <div class="screentone-dots screentone-light"></div>
            </div>
            
            <!-- Panel 3: Backend & Security Powers -->
            <div class="manga-panel">
              <div class="sfx-large sfx-bottom-left no-select">ズザザ</div>
              <div class="panel-content">
                <div class="panel-speech-bubble">
                  <p>
                    <strong>🔒 HABILIDADES BACKEND & SECURITY</strong><br><br>
                    ▸ PHP & MySQL (Jutsu básico)<br>
                    ▸ Python (Serpiente digital)<br>
                    ▸ Node.js (Velocidad servidor)<br>
                    ▸ Ethical Hacking (Modo defensivo)<br>
                    ▸ Pentesting (Ataque analítico)<br>
                    ▸ Network Security (Barrera protectora)
                  </p>
                </div>
              </div>
              <div class="panel-speed-lines">
                ${this.generateSpeedLines(12)}
              </div>
            </div>
            
            <!-- Panel 4: Creative Powers -->
            <div class="manga-panel">
              <div class="sfx-large sfx-top-right no-select">ピカッ</div>
              <div class="panel-content">
                <div class="panel-icon">✨</div>
                
                <div class="panel-speech-bubble">
                  <p>
                    <strong>🎬 HABILIDADES CREATIVAS</strong><br><br>
                    ▸ Photoshop & Illustrator (Arte digital)<br>
                    ▸ Premiere & After Effects (Maestro del tiempo)<br>
                    ▸ Blender 3D (Mundo tridimensional)<br>
                    ▸ UI/UX Design (Visión perfecta)<br>
                    ▸ Video Editing (Cortes épicos)
                  </p>
                </div>
              </div>
              <div class="hatching-effect"></div>
            </div>
          </div>
        </div>
        
        <!-- =============================================
             CHAPTER 3: EPIC BATTLES IN CODE WORLD
             第3章: コードの世界の戦い
             ============================================= -->
        <div class="manga-page">
          <div class="page-number">Page 003</div>
          
          <div class="manga-panels">
            <!-- Panel 1: Battle intro -->
            <div class="manga-panel panel-large panel-action">
              <div class="sfx-large sfx-top-right no-select">ドカーン</div>
              <div class="panel-content">
                <h2 class="chapter-title">Chapter 3</h2>
                <h3 class="chapter-number-jp">第3章: コードの世界の戦い</h3>
                
                <div class="panel-speech-bubble narration-box">
                  <p>
                    <strong>Narrador:</strong> Armado con sus habilidades, nuestro héroe
                    se enfrentó a desafíos reales en el campo de batalla del desarrollo.
                    ¡Cada proyecto era un nuevo enemigo a vencer!
                  </p>
                </div>
                
                <div class="panel-icon">⚔️</div>
              </div>
              <div class="impact-lines">
                ${this.generateImpactLines(20)}
              </div>
            </div>
            
            <!-- Panel 2: Professional battles -->
            <div class="manga-panel">
              <div class="sfx-large sfx-top-right no-select">ガガガ</div>
              <div class="panel-content">
                <div class="panel-speech-bubble">
                  <p>
                    <strong>💼 BATALLA 1: DESARROLLADOR FULLSTACK</strong><br><br>
                    <em>DOGSOUL DIGITAL (2018 - Actualidad)</em><br><br>
                    "¡Creé webs, aplicaciones y sistemas completos!
                    Desde el frontend más bonito hasta el backend más robusto.
                    ¡Ningún bug pudo detenerme!"
                  </p>
                </div>
              </div>
              <div class="panel-speed-lines">
                ${this.generateSpeedLines(15)}
              </div>
            </div>
            
            <!-- Panel 3: Freelance adventures -->
            <div class="manga-panel">
              <div class="sfx-large sfx-bottom-left no-select">シュッ</div>
              <div class="panel-content">
                <div class="panel-speech-bubble">
                  <p>
                    <strong>🚀 BATALLA 2: FREELANCE WARRIOR</strong><br><br>
                    "¡Como un ninja del código, acepté misiones de clientes
                    de todo el mundo! E-commerce, landing pages, sistemas custom...
                    ¡100+ proyectos completados con éxito!"
                  </p>
                </div>
                
                <div class="panel-icon">🥷</div>
              </div>
              <div class="screentone-dots screentone-heavy"></div>
            </div>
            
            <!-- Panel 4: Security missions -->
            <div class="manga-panel">
              <div class="sfx-large sfx-top-right no-select">ビシッ</div>
              <div class="panel-content">
                <div class="panel-speech-bubble shout-bubble">
                  <p>
                    "¡Y como Ethical Hacker, protejo sistemas
                    y encuentro vulnerabilidades antes que los villanos!"
                  </p>
                </div>
                
                <div class="panel-icon">🛡️</div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- =============================================
             FINAL CHAPTER: DOWNLOAD THE COMPLETE POWER!
             最終章: 完全なる力をダウンロード！
             ============================================= -->
        <div class="download-finale">
          <!-- Dramatic background effects -->
          <div class="download-sfx sfx-download-1 no-select">ゴゴゴゴ</div>
          <div class="download-sfx sfx-download-2 no-select">キラキラ</div>
          
          <h2 class="finale-title">
            FINAL CHAPTER
            <span class="finale-title-jp">最終章: 究極のダウンロード！</span>
          </h2>
          
          <div class="finale-bubble">
            <p class="finale-bubble-text">
              "¡Has leído mi historia hasta aquí! Como recompensa final,
              puedes descargar el CV completo con TODOS los detalles
              de mis aventuras, habilidades y proyectos épicos.
              ¡Haz clic en el botón y obtén el poder completo!"
            </p>
            
            <a href="${cvData.pdfPath}" download="JavierFernandez_CV_EthicalHacker.pdf" class="download-btn-manga">
              <span>⬇️ DESCARGAR CV ⬇️</span>
            </a>
            
            <p class="finale-bubble-text" style="margin-top: 20px; font-size: 16px;">
              <em>¡Incluye información detallada de todos los proyectos, tecnologías y certificaciones!</em>
            </p>
          </div>
          
          <!-- Impact effects -->
          <div class="impact-lines">
            ${this.generateImpactLines(24)}
          </div>
        </div>
        
        <!-- =============================================
             MANGA END SYMBOL - "Owari" (終)
             ============================================= -->
        <div class="manga-end-symbol">
          <div class="end-circle">
            終
          </div>
          <p class="end-text">
            Fin del Capítulo 1<br>
            <small>La aventura continúa...</small>
          </p>
        </div>
        
        <!-- Footer credits -->
        <div class="manga-footer">
          <p style="text-align: center; padding: 40px 20px; font-size: 14px; color: var(--manga-black);">
            © 2024 Javier Fernández Vallejo - DOGSOUL DIGITAL<br>
            <em>Este CV manga fue creado con amor, código y muchas referencias a mangas legendarios</em>
          </p>
        </div>
      </div>
    `;
  }

  /**
   * After render lifecycle - Initialize animations and effects
   */
  afterRender() {
    this.initScrollAnimations();
    this.initActionLinesSVG();
    this.initHoverEffects();
  }

  /**
   * Initialize scroll-triggered panel animations
   */
  initScrollAnimations() {
    // Intersection Observer for panel reveals
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    });

    // Observe all manga panels
    document.querySelectorAll('.manga-panel, .download-finale').forEach(panel => {
      observer.observe(panel);
    });
  }

  /**
   * Initialize action lines SVG background
   */
  initActionLinesSVG() {
    // Add subtle parallax effect to speed lines on scroll
    let ticking = false;
    
    window.addEventListener('scroll', () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const speedLines = document.querySelectorAll('.speed-line');
          
          speedLines.forEach((line, index) => {
            const speed = (index % 3) * 0.1 + 0.1;
            line.style.transform = `translateX(${scrolled * speed}px) rotate(${-10 + Math.random() * 20}deg)`;
          });
          
          ticking = false;
        });
        
        ticking = true;
      }
    });
  }

  /**
   * Initialize hover effects on interactive elements
   */
  initHoverEffects() {
    // Download button hover effect
    const downloadBtn = document.querySelector('.download-btn-manga');
    if (downloadBtn) {
      downloadBtn.addEventListener('mouseenter', () => {
        // Add extra emphasis on hover
        const sfx = document.querySelectorAll('.download-sfx');
        sfx.forEach(s => {
          s.style.opacity = '0.3';
          s.style.transform = s.style.transform + ' scale(1.2)';
        });
      });
      
      downloadBtn.addEventListener('mouseleave', () => {
        const sfx = document.querySelectorAll('.download-sfx');
        sfx.forEach(s => {
          s.style.opacity = '0.15';
          s.style.transform = s.style.transform.replace(' scale(1.2)', '');
        });
      });
    }

    // Panel hover effects (subtle)
    document.querySelectorAll('.manga-panel').forEach(panel => {
      panel.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '12px 12px 0 rgba(0,0,0,0.4)';
      });
      
      panel.addEventListener('mouseleave', function() {
        this.style.transform = '';
        this.style.boxShadow = '';
      });
    });
  }
}
