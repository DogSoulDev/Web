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
    
    // Configuración
    this.FIRST_DRAW_COLOR = '#ffffff';
    this.FINAL_STROKE_COLOR = '#000000';
    this.ANIMATION_DURATION = 2000; // ms por trazo
    this.FILL_DELAY = 400; // ms después del último trazo
    this.TOTAL_ANIMATION_TIME = 6000; // 6 segundos total
    
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
      <div class="loading-text">DogSoulDev</div>
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
    // Obtener el grupo principal con los paths
    const mainGroup = this.svg.querySelector('g');
    if (!mainGroup) return;

    // Crear grupo de strokes (para animación)
    const strokesGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    strokesGroup.id = 'strokes';
    
    // Crear grupo de fills (para después)
    this.fillsGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    this.fillsGroup.id = 'fills';
    this.fillsGroup.style.opacity = '0';

    // Clonar paths para strokes y fills
    const paths = mainGroup.querySelectorAll('path');
    paths.forEach(path => {
      // Path para stroke (animación)
      const strokePath = path.cloneNode(true);
      strokePath.style.fill = 'none';
      strokePath.style.stroke = this.FIRST_DRAW_COLOR;
      strokePath.style.strokeWidth = '2';
      
      const length = strokePath.getTotalLength();
      strokePath.style.strokeDasharray = length;
      strokePath.style.strokeDashoffset = length;
      
      strokesGroup.appendChild(strokePath);
      this.strokes.push(strokePath);
      
      // Path para fill (relleno final)
      const fillPath = path.cloneNode(true);
      fillPath.style.stroke = 'none';
      fillPath.style.fill = '#000000';
      this.fillsGroup.appendChild(fillPath);
    });

    // Limpiar y añadir nuevos grupos
    mainGroup.innerHTML = '';
    mainGroup.appendChild(strokesGroup);
    mainGroup.appendChild(this.fillsGroup);
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

    // Mostrar rellenos y ocultar animación
    setTimeout(() => {
      this.showFills();
      setTimeout(() => this.hideAnimation(), 1000);
    }, delay + this.FILL_DELAY);
  }

  drawStroke(stroke, duration) {
    stroke.style.transition = `stroke-dashoffset ${duration}ms ease-in-out`;
    stroke.style.strokeDashoffset = '0';
  }

  showFills() {
    if (this.fillsGroup) {
      this.fillsGroup.style.transition = 'opacity 0.6s ease';
      this.fillsGroup.style.opacity = '1';
    }
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
