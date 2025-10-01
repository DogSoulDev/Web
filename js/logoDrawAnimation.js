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
    this.FIRST_DRAW_COLOR = '#ffffff';
    this.FINAL_STROKE_COLOR = '#000000';
    this.ANIMATION_DURATION = this.isMobile ? 1500 : 2000; // ms por trazo
    this.FILL_DELAY = this.isMobile ? 300 : 400; // ms después del último trazo
    this.TOTAL_ANIMATION_TIME = this.isMobile ? 4000 : 6000; // Más rápido en móviles
    
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
      const response = await fetch('img/ddd.svg');
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
    // Ocultar el rectángulo blanco de fondo
    const rect = this.svg.querySelector('rect');
    if (rect) {
      rect.style.display = 'none';
    }

    // Obtener el grupo principal con los paths
    const mainGroup = this.svg.querySelector('g');
    if (!mainGroup) return;

    // Obtener todos los paths originales
    const paths = mainGroup.querySelectorAll('path');

    // Preparar cada path para la animación
    paths.forEach(path => {
      // Guardar el fill original
      const originalFill = path.getAttribute('fill');
      path.dataset.originalFill = originalFill;
      
      // Configurar para animación de stroke (responsive)
      path.setAttribute('fill', 'none');
      path.setAttribute('stroke', this.FIRST_DRAW_COLOR);
      path.setAttribute('stroke-width', this.isMobile ? '1.5' : '2');
      
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
