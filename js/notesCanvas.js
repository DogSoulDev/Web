import { CANVAS, MESSAGES, BREAKPOINTS } from './config/appConfig.js';

/**
 * 3D Neural Network Visualization
 * Interactive 3D network with rotating nodes and starfield background
 * Manga-style (black and white) aesthetic
 */
class NetworkVisualization {
  /**
   * Create a 3D network visualization
   * @param {string} canvasId - ID of the canvas element
   * @param {Object} data - Data containing nodes and configuration
   */
  constructor(canvasId, data) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      throw new Error(MESSAGES.ERROR.CANVAS_NOT_FOUND + `: "${canvasId}"`);
    }
    
    this.ctx = this.canvas.getContext('2d');
    if (!this.ctx) {
      throw new Error('Failed to get 2D context from canvas');
    }
    
    this.data = data;
    this.config = data.config;
    
    // Validate data structure
    if (!this.data.nodes || !Array.isArray(this.data.nodes) || this.data.nodes.length === 0) {
      throw new Error('Invalid data: nodes array is required');
    }
    
    if (!this.config) {
      throw new Error('Invalid data: config object is required');
    }
    
    // 3D space properties
    this.nodes = [];
    this.stars = [];
    this.particles = [];
    this.hoveredNode = null;
    
    // Camera and rotation
    this.camera = { x: 0, y: 0, z: -500 };
    this.rotation = { x: 0, y: 0 };
    this.targetRotation = { x: 0, y: 0 };
    this.autoRotate = true;
    this.autoRotateSpeed = 0.002;
    
    // Mouse interaction
    this.mouseX = 0;
    this.mouseY = 0;
    this.isDragging = false;
    this.lastMouseX = 0;
    this.lastMouseY = 0;
    
    // Zoom
    this.scale = 1;
    this.targetScale = 1;
    
    this.init();
  }
  
  /**
   * Initialize the visualization
   */
  init() {
    this.resize();
    window.addEventListener('resize', () => this.resize());
    
    this.initializeStars();
    this.initializeNodes3D();
    this.bindEvents();
    this.animate();
  }

  /**
   * Create starfield background
   */
  initializeStars() {
    const starCount = 200;
    for (let i = 0; i < starCount; i++) {
      this.stars.push({
        x: (Math.random() - 0.5) * 2000,
        y: (Math.random() - 0.5) * 2000,
        z: (Math.random() - 0.5) * 2000,
        size: Math.random() * 2 + 0.5,
        brightness: Math.random() * 0.5 + 0.5
      });
    }
  }

  /**
   * Initialize nodes in 3D space (sphere distribution)
   */
  initializeNodes3D() {
    const radius = 300;
    this.data.nodes.forEach((nodeData, index) => {
      // Distribute nodes on a sphere using Fibonacci sphere algorithm
      const phi = Math.acos(1 - 2 * (index + 0.5) / this.data.nodes.length);
      const theta = Math.PI * (1 + Math.sqrt(5)) * index;
      
      const node = {
        ...nodeData,
        // 3D coordinates
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        // Velocity for subtle floating effect
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        vz: (Math.random() - 0.5) * 0.3,
        radius: this.config.nodeRadius,
        pulse: Math.random() * Math.PI * 2,
        connections: []
      };
      this.nodes.push(node);
    });
    
    // Create connections between nearby nodes
    this.createConnections();
  }

  /**
   * Create connections between nearby nodes in 3D space
   */
  createConnections() {
    const connectionDistance = 150;
    
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const dx = this.nodes[i].x - this.nodes[j].x;
        const dy = this.nodes[i].y - this.nodes[j].y;
        const dz = this.nodes[i].z - this.nodes[j].z;
        const distance = Math.sqrt(dx * dx + dy * dy + dz * dz);
        
        if (distance < connectionDistance) {
          this.nodes[i].connections.push(j);
        }
      }
    }
  }

  /**
   * Project 3D point to 2D screen coordinates
   */
  project3D(x, y, z) {
    // Apply rotation
    const rotatedX = x * Math.cos(this.rotation.y) - z * Math.sin(this.rotation.y);
    const rotatedZ = x * Math.sin(this.rotation.y) + z * Math.cos(this.rotation.y);
    const rotatedY = y * Math.cos(this.rotation.x) - rotatedZ * Math.sin(this.rotation.x);
    const finalZ = y * Math.sin(this.rotation.x) + rotatedZ * Math.cos(this.rotation.x);
    
    // Apply camera
    const perspective = 800;
    const scale = perspective / (perspective + finalZ + this.camera.z);
    
    return {
      x: (rotatedX * scale * this.scale) + this.canvas.width / 2,
      y: (rotatedY * scale * this.scale) + this.canvas.height / 2,
      z: finalZ,
      scale: scale
    };
  }

  /**
   * Bind mouse event listeners
   */
  bindEvents() {
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseleave', () => this.handleMouseLeave());
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp());
    this.canvas.addEventListener('wheel', (e) => this.handleWheel(e));
    this.canvas.addEventListener('click', (e) => this.handleClick(e));
  }
  
  /**
   * Handle mouse move event
   */
  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mouseX = e.clientX - rect.left;
    this.mouseY = e.clientY - rect.top;
    
    if (this.isDragging) {
      const dx = this.mouseX - this.lastMouseX;
      const dy = this.mouseY - this.lastMouseY;
      
      this.targetRotation.y += dx * 0.005;
      this.targetRotation.x += dy * 0.005;
      
      // Limit X rotation to prevent flipping
      this.targetRotation.x = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, this.targetRotation.x));
      
      this.autoRotate = false;
      this.lastMouseX = this.mouseX;
      this.lastMouseY = this.mouseY;
      this.canvas.style.cursor = 'grabbing';
    } else {
      // Check for node hover
      this.checkNodeHover();
    }
  }

  /**
   * Check if mouse is hovering over a node
   */
  checkNodeHover() {
    let foundHover = false;
    
    for (const node of this.nodes) {
      const projected = this.project3D(node.x, node.y, node.z);
      
      if (projected.z < 0) continue; // Behind camera
      
      const dx = this.mouseX - projected.x;
      const dy = this.mouseY - projected.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const nodeRadius = node.radius * projected.scale * this.scale;
      
      if (distance < nodeRadius + CANVAS.NODE_HOVER_RADIUS_OFFSET) {
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
      this.canvas.style.cursor = 'grab';
    }
  }
  
  /**
   * Handle mouse leave event
   */
  handleMouseLeave() {
    this.hoveredNode = null;
    this.hideNodeInfo();
    this.isDragging = false;
    this.canvas.style.cursor = 'grab';
  }
  
  /**
   * Handle mouse down event
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
   */
  handleMouseUp() {
    this.isDragging = false;
    this.canvas.style.cursor = 'grab';
  }
  
  /**
   * Handle wheel event for zooming
   */
  handleWheel(e) {
    e.preventDefault();
    
    const zoomFactor = 1 + CANVAS.ZOOM_SENSITIVITY;
    const zoom = e.deltaY < 0 ? zoomFactor : 1 / zoomFactor;
    this.targetScale = Math.min(
      Math.max(CANVAS.ZOOM_MIN, this.targetScale * zoom),
      CANVAS.ZOOM_MAX
    );
  }
  
  /**
   * Handle click event
   */
  handleClick(e) {
    if (this.hoveredNode && !this.isDragging) {
      if (window.innerWidth <= BREAKPOINTS.TABLET) {
        const infoPanel = document.getElementById('nodeInfo');
        if (infoPanel) {
          infoPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }
    }
  }
  
  /**
   * Resize canvas to fit container
   */
  resize() {
    const container = this.canvas.parentElement;
    if (!container) {
      console.error('Canvas container not found');
      return;
    }
    
    const width = container.clientWidth || 800;
    const height = Math.max(container.clientHeight, CANVAS.MIN_HEIGHT);
    
    if (width > 0 && height > 0) {
      this.canvas.width = width;
      this.canvas.height = height;
    } else {
      // Fallback dimensions
      this.canvas.width = 800;
      this.canvas.height = CANVAS.MIN_HEIGHT;
    }
  }
  
  /**
   * Reset view to initial state
   */
  resetView() {
    this.targetScale = 1;
    this.targetRotation = { x: 0, y: 0 };
    this.autoRotate = true;
  }
  
  /**
   * Show node information panel
   */
  showNodeInfo(node) {
    const infoPanel = document.getElementById('nodeInfo');
    const titleEl = document.getElementById('nodeTitle');
    const descEl = document.getElementById('nodeDescription');
    
    if (infoPanel && titleEl && descEl) {
      titleEl.textContent = node.label;
      descEl.innerHTML = `
        <p><strong>Category:</strong> ${node.category}</p>
        <p><strong>Info:</strong> ${node.info}</p>
      `;
      infoPanel.classList.remove('hidden');
    }
  }
  
  /**
   * Hide node information panel
   */
  hideNodeInfo() {
    const infoPanel = document.getElementById('nodeInfo');
    if (infoPanel) {
      infoPanel.classList.add('hidden');
    }
  }
  
  /**
   * Update node positions with subtle floating effect
   */
  updateNodes() {
    this.nodes.forEach(node => {
      node.x += node.vx;
      node.y += node.vy;
      node.z += node.vz;
      
      // Bounce back towards origin if too far
      const distance = Math.sqrt(node.x * node.x + node.y * node.y + node.z * node.z);
      if (distance > 350) {
        node.vx *= -0.5;
        node.vy *= -0.5;
        node.vz *= -0.5;
      }
      
      // No pulse animation - nodes remain static
    });
  }
  
  /**
   * Draw starfield background
   */
  drawStars() {
    this.stars.forEach(star => {
      const projected = this.project3D(star.x, star.y, star.z);
      
      if (projected.z > -500 && projected.z < 500) {
        const alpha = star.brightness * (1 - Math.abs(projected.z) / 500);
        const size = star.size * projected.scale * this.scale;
        
        this.ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        this.ctx.beginPath();
        this.ctx.arc(projected.x, projected.y, size, 0, Math.PI * 2);
        this.ctx.fill();
      }
    });
  }
  
  /**
   * Draw connections between nodes
   */
  drawConnections() {
    this.nodes.forEach((node, index) => {
      const projectedNode = this.project3D(node.x, node.y, node.z);
      
      if (projectedNode.z < 0) return; // Behind camera
      
      node.connections.forEach(connIndex => {
        const connNode = this.nodes[connIndex];
        const projectedConn = this.project3D(connNode.x, connNode.y, connNode.z);
        
        if (projectedConn.z < 0) return; // Behind camera
        
        // Calculate opacity based on depth
        const avgZ = (projectedNode.z + projectedConn.z) / 2;
        const opacity = Math.max(0.1, 1 - (Math.abs(avgZ) / 400));
        
        // Highlight connections of hovered node
        const isHovered = this.hoveredNode === node || this.hoveredNode === connNode;
        const lineWidth = isHovered ? 2 : 1;
        const alpha = isHovered ? opacity * 0.8 : opacity * 0.3;
        
        this.ctx.strokeStyle = `rgba(0, 0, 0, ${alpha})`;
        this.ctx.lineWidth = lineWidth;
        this.ctx.beginPath();
        this.ctx.moveTo(projectedNode.x, projectedNode.y);
        this.ctx.lineTo(projectedConn.x, projectedConn.y);
        this.ctx.stroke();
      });
    });
  }
  
  /**
   * Draw nodes
   */
  drawNodes() {
    // Sort nodes by Z depth for proper rendering
    const sortedNodes = [...this.nodes].sort((a, b) => {
      const aProj = this.project3D(a.x, a.y, a.z);
      const bProj = this.project3D(b.x, b.y, b.z);
      return bProj.z - aProj.z; // Far to near
    });
    
    sortedNodes.forEach(node => {
      const projected = this.project3D(node.x, node.y, node.z);
      
      if (projected.z < 0) return; // Behind camera
      
      const radius = node.radius * projected.scale * this.scale;
      const isHovered = this.hoveredNode === node;
      
      // Calculate opacity based on depth
      const opacity = Math.max(0.3, 1 - (Math.abs(projected.z) / 400));
      
      // No pulse effect - static nodes for easier clicking
      const pulseSize = 0;
      
      // Draw node glow when hovered
      if (isHovered) {
        this.ctx.fillStyle = `rgba(0, 0, 0, ${opacity * 0.1})`;
        this.ctx.beginPath();
        this.ctx.arc(projected.x, projected.y, radius + pulseSize + 10, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      // Draw node
      this.ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
      this.ctx.strokeStyle = `rgba(0, 0, 0, ${opacity})`;
      this.ctx.lineWidth = isHovered ? 3 : 2;
      
      this.ctx.beginPath();
      this.ctx.arc(projected.x, projected.y, radius + pulseSize, 0, Math.PI * 2);
      this.ctx.fill();
      this.ctx.stroke();
      
      // Draw label when hovered or when zoomed in
      if (isHovered || this.scale > 1.5) {
        const fontSize = Math.max(10, 12 * projected.scale * this.scale);
        this.ctx.font = `bold ${fontSize}px 'Press Start 2P', monospace`;
        this.ctx.fillStyle = `rgba(0, 0, 0, ${opacity})`;
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        // Text shadow for readability
        this.ctx.shadowColor = 'rgba(255, 255, 255, 0.8)';
        this.ctx.shadowBlur = 4;
        
        this.ctx.fillText(node.label, projected.x, projected.y - radius - 15);
        
        this.ctx.shadowBlur = 0;
      }
    });
  }
  
  /**
   * Main animation loop
   */
  animate() {
    requestAnimationFrame(() => this.animate());
    
    // Clear canvas
    this.ctx.fillStyle = '#f5f5dc'; // Manga paper color
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Smooth rotation interpolation
    this.rotation.x += (this.targetRotation.x - this.rotation.x) * 0.1;
    this.rotation.y += (this.targetRotation.y - this.rotation.y) * 0.1;
    
    // Auto-rotate when not dragging
    if (this.autoRotate) {
      this.targetRotation.y += this.autoRotateSpeed;
    }
    
    // Smooth zoom interpolation
    this.scale += (this.targetScale - this.scale) * 0.1;
    
    // Update nodes
    this.updateNodes();
    
    // Draw in order: stars → connections → nodes
    this.drawStars();
    this.drawConnections();
    this.drawNodes();
  }
}

// Export as default
export default NetworkVisualization;

// Also export as named export for compatibility
export { NetworkVisualization };
