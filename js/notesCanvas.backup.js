import { CANVAS, MESSAGES, BREAKPOINTS } from './config/appConfig.js';

/**
 * Neural Network Visualization
 * Renders an interactive network of cybersecurity knowledge nodes
 * Follows Single Responsibility Principle - only handles visualization
 * Manga-style (black and white) aesthetic
 */
class NetworkVisualization {
  /**
   * Create a network visualization
   * @param {string} canvasId - ID of the canvas element
   * @param {Object} data - Data containing nodes and configuration
   */
  constructor(canvasId, data) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      throw new Error(MESSAGES.ERROR.CANVAS_NOT_FOUND + `: "${canvasId}"`);
    }
    
    this.ctx = this.canvas.getContext('2d');
    this.data = data;
    this.config = data.config;
    this.nodes = [];
    this.particles = [];
    this.hoveredNode = null;
    this.animationFrame = 0;
    this.mouseX = 0;
    this.mouseY = 0;
    this.scale = 1;
    this.offsetX = 0;
    this.offsetY = 0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    
    this.init();
  }
  
  /**
   * Initialize the visualization
   */
  init() {
    // Configurar canvas responsivo
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    // Crear nodos con posiciones aleatorias y velocidades
    this.initializeNodes();
    
    // Event listeners
    this.bindEvents();
    
    // Iniciar animación
    this.animate();
  }

  /**
   * Initialize all nodes with random positions and velocities
   */
  initializeNodes() {
    this.data.nodes.forEach(nodeData => {
      const node = {
        ...nodeData,
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * this.config.nodeSpeed,
        vy: (Math.random() - 0.5) * this.config.nodeSpeed,
        radius: this.config.nodeRadius,
        pulse: Math.random() * Math.PI * 2,
        connections: []
      };
      this.nodes.push(node);
    });
  }

  /**
   * Bind mouse event listeners
   */
  bindEvents() {
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
    this.canvas.addEventListener('click', (e) => this.handleClick(e));
    this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
  }
  
  /**
   * Resize canvas to fit container
   */
  resize() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = Math.max(container.clientHeight, CANVAS.MIN_HEIGHT);
  }
  
  /**
   * Reset zoom and pan to initial state
   */
  resetView() {
    this.scale = 1;
    this.offsetX = 0;
    this.offsetY = 0;
  }
  
  /**
   * Handle mouse move event
   * @param {MouseEvent} e - Mouse event
   */
  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
    
    // Handle panning
    if (this.isDragging) {
      const dx = this.mouseX - this.lastMouseX;
      const dy = this.mouseY - this.lastMouseY;
      this.offsetX += dx;
      this.offsetY += dy;
      this.lastMouseX = this.mouseX;
      this.lastMouseY = this.mouseY;
      return;
    }
    
    // Ajustar coordenadas del mouse para zoom y pan
    const adjustedX = (this.mouseX - this.offsetX) / this.scale;
    const adjustedY = (this.mouseY - this.offsetY) / this.scale;
    
    // Detectar hover sobre nodos
    let foundHover = false;
    for (const node of this.nodes) {
      const dx = adjustedX - node.x;
      const dy = adjustedY - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < node.radius + CANVAS.NODE_HOVER_RADIUS_OFFSET) {
        if (this.hoveredNode !== node) {
          this.hoveredNode = node;
          this.showNodeInfo(node);
        }
        foundHover = true;
        this.canvas.style.cursor = 'pointer';
        break;
      }
    }
    
    if (!foundHover && this.hoveredNode) {
      this.hoveredNode = null;
      this.hideNodeInfo();
      this.canvas.style.cursor = 'default';
    }
  }
  
  /**
   * Handle mouse leave event
   */
  handleMouseLeave() {
    this.hoveredNode = null;
    this.hideNodeInfo();
    this.canvas.style.cursor = 'default';
  }
  
  /**
   * Handle click event
   * @param {MouseEvent} e - Mouse event
   */
  handleClick(e) {
    if (this.hoveredNode && !this.isDragging) {
      // Hacer scroll suave al panel de información en móvil
      const infoPanel = document.getElementById('nodeInfo');
      if (window.innerWidth <= BREAKPOINTS.TABLET) {
        infoPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    }
  }
  
  /**
   * Handle wheel event for zooming
   * @param {WheelEvent} e - Wheel event
   */
  handleWheel(e) {
    e.preventDefault();
    
    const rect = this.canvas.getBoundingClientRect();
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const zoomFactor = 1 + CANVAS.ZOOM_SENSITIVITY;
    const zoom = e.deltaY < 0 ? zoomFactor : 1 / zoomFactor;
    const newScale = Math.min(
      Math.max(CANVAS.ZOOM_MIN, this.scale * zoom), 
      CANVAS.ZOOM_MAX
    );
    
    // Ajustar offset para hacer zoom hacia el puntero del mouse
    this.offsetX = mouseX - (mouseX - this.offsetX) * (newScale / this.scale);
    this.offsetY = mouseY - (mouseY - this.offsetY) * (newScale / this.scale);
    
    this.scale = newScale;
  }
  
  /**
   * Handle mouse down event for panning
   * @param {MouseEvent} e - Mouse event
   */
  handleMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.lastMouseX = e.clientX - rect.left;
    this.lastMouseY = e.clientY - rect.top;
    this.isDragging = true;
    this.canvas.style.cursor = 'grabbing';
  }
  
  /**
   * Handle mouse up event
   * @param {MouseEvent} e - Mouse event
   */
  handleMouseUp(e) {
    this.isDragging = false;
    this.canvas.style.cursor = this.hoveredNode ? 'pointer' : 'default';
  }
  
  /**
   * Show node information panel
   * @param {Object} node - Node to display information for
   */
  showNodeInfo(node) {
    const infoPanel = document.getElementById('nodeInfo');
    const titleEl = document.getElementById('nodeTitle');
    const descEl = document.getElementById('nodeDescription');
    
    titleEl.textContent = node.label;
    
    // Si hay content HTML detallado, usarlo; sino, usar info simple
    if (node.content) {
      descEl.innerHTML = node.content;
    } else {
      descEl.innerHTML = `<p>${node.info}</p>`;
    }
    
    infoPanel.classList.add('visible');
  }
  
  /**
   * Hide node information panel
   */
  hideNodeInfo() {
    const infoPanel = document.getElementById('nodeInfo');
    infoPanel.classList.remove('visible');
  }
  
  /**
   * Update all nodes positions and connections
   */
  updateNodes() {
    this.nodes.forEach(node => {
      // Movimiento orgánico
      node.x += node.vx;
      node.y += node.vy;
      
      // Rebote en los bordes
      if (node.x <= node.radius || node.x >= this.canvas.width - node.radius) {
        node.vx *= -1;
        node.x = Math.max(node.radius, Math.min(this.canvas.width - node.radius, node.x));
      }
      if (node.y <= node.radius || node.y >= this.canvas.height - node.radius) {
        node.vy *= -1;
        node.y = Math.max(node.radius, Math.min(this.canvas.height - node.radius, node.y));
      }
      
      // Actualizar pulso
      node.pulse += 0.03;
      
      // Calcular conexiones dinámicas (solo con nodos cercanos)
      node.connections = [];
      this.nodes.forEach(otherNode => {
        if (node.id !== otherNode.id) {
          const dx = otherNode.x - node.x;
          const dy = otherNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < this.config.maxDistance) {
            node.connections.push({
              node: otherNode,
              distance: distance,
              opacity: (1 - distance / this.config.maxDistance) * this.config.connectionOpacity
            });
          }
        }
      });
    });
  }
  
  /**
   * Update particles animation
   */
  updateParticles() {
    // Crear partículas en conexiones activas (cuando se hace hover)
    if (this.hoveredNode && this.animationFrame % 3 === 0) {
      this.hoveredNode.connections.forEach(conn => {
        if (Math.random() > 0.7) { // No todas las conexiones a la vez
          this.particles.push({
            x: this.hoveredNode.x,
            y: this.hoveredNode.y,
            targetX: conn.node.x,
            targetY: conn.node.y,
            progress: 0,
            life: 1
          });
        }
      });
    }
    
    // Actualizar partículas existentes
    this.particles = this.particles.filter(particle => {
      particle.progress += this.config.particleSpeed;
      particle.life -= 0.01;
      
      // Interpolación lineal hacia el objetivo
      particle.x = this.lerp(particle.x, particle.targetX, particle.progress);
      particle.y = this.lerp(particle.y, particle.targetY, particle.progress);
      
      return particle.progress < 1 && particle.life > 0;
    });
  }
  
  /**
   * Linear interpolation helper
   * @param {number} start - Start value
   * @param {number} end - End value
   * @param {number} t - Time/progress (0-1)
   * @returns {number} Interpolated value
   */
  lerp(start, end, t) {
    return start + (end - start) * t;
  }
  
  /**
   * Draw the entire network
   */
  draw() {
    // Fondo negro
    this.ctx.fillStyle = '#000';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Guardar el estado del contexto
    this.ctx.save();
    
    // Aplicar transformaciones de zoom y pan
    this.ctx.translate(this.offsetX, this.offsetY);
    this.ctx.scale(this.scale, this.scale);
    
    // Grid sutil de fondo (estilo manga)
    this.drawGrid();
    
    // Dibujar conexiones
    this.nodes.forEach(node => {
      node.connections.forEach(conn => {
        this.drawConnection(node, conn);
      });
    });
    
    // Dibujar partículas
    this.particles.forEach(particle => {
      this.drawParticle(particle);
    });
    
    // Dibujar nodos
    this.nodes.forEach(node => {
      this.drawNode(node);
    });
    
    // Dibujar etiquetas
    this.nodes.forEach(node => {
      this.drawLabel(node);
    });
    
    // Restaurar el estado del contexto
    this.ctx.restore();
  }
  
  drawGrid() {
    const gridSize = 50;
    this.ctx.strokeStyle = 'rgba(255, 255, 255, 0.03)';
    this.ctx.lineWidth = 1;
    
    // Líneas verticales
    for (let x = 0; x < this.canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }
    
    // Líneas horizontales
    for (let y = 0; y < this.canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }
  
  drawConnection(node, conn) {
    const isHovered = this.hoveredNode === node || this.hoveredNode === conn.node;
    
    this.ctx.beginPath();
    this.ctx.moveTo(node.x, node.y);
    this.ctx.lineTo(conn.node.x, conn.node.y);
    
    // Más brillante si está en hover
    const opacity = isHovered ? conn.opacity * 3 : conn.opacity;
    const width = isHovered ? 2 : 1;
    
    this.ctx.strokeStyle = `rgba(255, 255, 255, ${opacity})`;
    this.ctx.lineWidth = width;
    this.ctx.stroke();
  }
  
  drawParticle(particle) {
    const size = particle.life * 3;
    
    this.ctx.beginPath();
    this.ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
    this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.life})`;
    this.ctx.fill();
    
    // Glow effect
    this.ctx.shadowBlur = 10;
    this.ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
    this.ctx.fill();
    this.ctx.shadowBlur = 0;
  }
  
  /**
   * Draw a single node
   * @param {Object} node - Node to draw
   */
  drawNode(node) {
    const isHovered = this.hoveredNode === node;
    const pulseAmount = Math.sin(node.pulse) * 2;
    const radius = node.radius + pulseAmount;
    
    // Glow más intenso en hover
    if (isHovered) {
      const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, radius * 2);
      gradient.addColorStop(0, 'rgba(255, 255, 255, 0.3)');
      gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
      this.ctx.fillStyle = gradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius * 2, 0, Math.PI * 2);
      this.ctx.fill();
    }
    
    // Círculo del nodo
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    
    // Relleno
    this.ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.1)';
    this.ctx.fill();
    
    // Borde
    this.ctx.strokeStyle = isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)';
    this.ctx.lineWidth = isHovered ? 3 : 2;
    this.ctx.stroke();
    
    // Punto central
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, 2, 0, Math.PI * 2);
    this.ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
    this.ctx.fill();
  }
  
  /**
   * Draw node label
   * @param {Object} node - Node to draw label for
   */
  drawLabel(node) {
    const isHovered = this.hoveredNode === node;
    
    // Configurar texto
    this.ctx.font = isHovered ? 'bold 14px "Fredoka One", sans-serif' : '12px "Fredoka One", sans-serif';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    
    // Sombra para legibilidad
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
    this.ctx.shadowBlur = 4;
    this.ctx.shadowOffsetX = 0;
    this.ctx.shadowOffsetY = 0;
    
    // Texto
    this.ctx.fillStyle = isHovered ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.8)';
    this.ctx.fillText(node.label, node.x, node.y - node.radius - 12);
    
    // Reset shadow
    this.ctx.shadowBlur = 0;
    
    // Categoría (solo en hover)
    if (isHovered && node.category) {
      this.ctx.font = '10px "Fredoka One", sans-serif';
      this.ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      this.ctx.fillText(node.category, node.x, node.y + node.radius + 12);
    }
  }
  
  /**
   * Main animation loop
   */
  animate() {
    this.animationFrame++;
    
    // Actualizar
    this.updateNodes();
    this.updateParticles();
    
    // Dibujar
    this.draw();
    
    // Loop
    requestAnimationFrame(() => this.animate());
  }
}

// Exportar como módulo ES6
export default NetworkVisualization;
export { NetworkVisualization };
