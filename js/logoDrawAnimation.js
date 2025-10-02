/**
 * Logo Drawing Animation
 * Efecto de dibujo progresivo inspirado en Goku SVG Drawing
 */

class LogoDrawAnimation {
  constructor() {
    this.container = null;
    this.svg = null;
    this.strokes = [];
    this.fillsGroup = null;
    
    // Configuración responsive
    this.isMobile = window.innerWidth <= 768;
    this.isNarrowScreen = window.innerWidth <= 280; // Z Fold 6 cover display
    this.FIRST_DRAW_COLOR = '#ffffff';
    this.FINAL_STROKE_COLOR = '#000000';
    // Animación más rápida en pantallas estrechas
    this.ANIMATION_DURATION = this.isNarrowScreen ? 1000 : (this.isMobile ? 1500 : 2000);
    this.FILL_DELAY = this.isNarrowScreen ? 200 : (this.isMobile ? 300 : 400);
    this.TOTAL_ANIMATION_TIME = this.isNarrowScreen ? 3000 : (this.isMobile ? 4000 : 6000);
    
    this.init();
  }

  init() {
    // Crear contenedor de animación
    this.createContainer();
    
    // Cargar y preparar SVG
    this.loadSVG();
  }

  createContainer() {
    this.container = document.createElement('div');
    this.container.className = 'logo-animation-container';
    this.container.innerHTML = `
      <div id="logo-animated"></div>
    `;
    document.body.appendChild(this.container);
  }

  async loadSVG() {
    try {
      const response = await fetch('img/perros.svg');
      const svgText = await response.text();
      
      const logoContainer = document.getElementById('logo-animated');
      logoContainer.innerHTML = svgText;
      
      this.svg = logoContainer.querySelector('svg');
      if (!this.svg) {
        console.error('SVG no encontrado');
        this.hideAnimation();
        return;
      }

      // Preparar el SVG para la animación
      this.prepareSVG();
      
      // Iniciar animación
      setTimeout(() => this.animate(), 500);
      
    } catch (error) {
      console.error('Error cargando SVG:', error);
      this.hideAnimation();
    }
  }

  prepareSVG() {
    // Ocultar el rectángulo blanco de fondo si existe
    const rect = this.svg.querySelector('rect');
    if (rect) {
      rect.style.display = 'none';
    }

    // Obtener TODOS los paths del SVG (incluso en grupos anidados)
    const paths = this.svg.querySelectorAll('path');
    
    if (paths.length === 0) {
      console.warn('No se encontraron paths en el SVG');
      this.hideAnimation();
      return;
    }

    // Preparar cada path para la animación
    paths.forEach((path, index) => {
      // Guardar el fill original
      const originalFill = path.getAttribute('fill');
      path.dataset.originalFill = originalFill;
      
      // Configurar para animación de stroke (responsive)
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', this.FIRST_DRAW_COLOR);
      // Stroke más fino en pantallas estrechas
      const strokeWidth = this.isNarrowScreen ? '1.5' : (this.isMobile ? '2' : '3');
      path.setAttribute('stroke-width', strokeWidth);
      path.setAttribute('stroke-linecap', 'round');
      path.setAttribute('stroke-linejoin', 'round');
      
      // Calcular longitud del path y configurar dasharray
      const length = path.getTotalLength();
      path.style.strokeDasharray = `${length}`;
      path.style.strokeDashoffset = `${length}`;
      
      this.strokes.push(path);
    });
  }

  animate() {
    if (this.strokes.length === 0) {
      this.hideAnimation();
      return;
    }

    // Calcular duración por trazo
    const durationPerStroke = this.TOTAL_ANIMATION_TIME / this.strokes.length;
    
    let delay = 0;

    // Animar cada trazo secuencialmente
    this.strokes.forEach((stroke, index) => {
      setTimeout(() => {
        this.drawStroke(stroke, durationPerStroke);
      }, delay);

      delay += durationPerStroke;
    });

    // Restaurar fills originales y ocultar animación
    setTimeout(() => {
      this.strokes.forEach(stroke => {
        stroke.style.transition = 'all 0.5s ease';
        stroke.setAttribute('stroke', 'none');
        stroke.setAttribute('fill', stroke.dataset.originalFill || '#000000');
      });
      
      setTimeout(() => this.hideAnimation(), 800);
    }, delay + this.FILL_DELAY);
  }

  drawStroke(stroke, duration) {
    stroke.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    stroke.style.strokeDashoffset = '0';
  }

  hideAnimation() {
    if (this.container) {
      this.container.classList.add('hidden');
      setTimeout(() => {
        this.container.remove();
      }, 500);
    }
  }
}

// Inicializar animación cuando el DOM esté listo
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new LogoDrawAnimation();
  });
} else {
  new LogoDrawAnimation();
}

export default LogoDrawAnimation;
