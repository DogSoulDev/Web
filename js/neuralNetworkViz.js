/**
 * Modern Neural Network Visualization
 * Beautiful interactive network inspired by modern UI designs
 * 
 * Author: DogSoulDev (DsD)
 * Copyright © 2025 DogSoulDev. All rights reserved.
 */

export class NeuralNetworkViz {
  constructor(canvasId, data) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) {
      throw new Error(`Canvas not found: ${canvasId}`);
    }
    
    this.ctx = this.canvas.getContext('2d');
    this.data = data;
    
    // Colors - Modern gradient palette
    this.colors = {
      background: '#0a0e27',
      node: '#667eea',
      nodeGlow: '#764ba2',
      connection: '#667eea',
      particle: '#a8c0ff',
      text: '#ffffff',
      hover: '#f093fb'
    };
    
    // Network properties
    this.nodes = [];
    this.particles = [];
    this.connections = [];
    this.mouse = { x: 0, y: 0, active: false };
    this.hoveredNode = null;
    
    // Animation
    this.time = 0;
    this.particleCount = 50;
    
    this.init();
  }
  
  init() {
    this.resize();
    this.createNodes();
    this.createConnections();
    this.createParticles();
    this.bindEvents();
    this.animate();
  }
  
  resize() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.offsetWidth;
    this.canvas.height = container.offsetHeight;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
  }
  
  createNodes() {
    const padding = 100;
    const usableWidth = this.width - padding * 2;
    const usableHeight = this.height - padding * 2;
    
    // Distribute nodes in a neural network pattern (layers)
    const layers = 4;
    const nodesPerLayer = Math.ceil(this.data.nodes.length / layers);
    
    this.data.nodes.forEach((nodeData, index) => {
      const layer = Math.floor(index / nodesPerLayer);
      const posInLayer = index % nodesPerLayer;
      const nodesInThisLayer = Math.min(nodesPerLayer, this.data.nodes.length - layer * nodesPerLayer);
      
      const x = padding + (layer / (layers - 1)) * usableWidth;
      const y = padding + (posInLayer / (nodesInThisLayer - 1 || 1)) * usableHeight;
      
      this.nodes.push({
        x: x || this.width / 2,
        y: y || this.height / 2,
        baseX: x || this.width / 2,
        baseY: y || this.height / 2,
        radius: 8,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        data: nodeData,
        layer: layer
      });
    });
  }
  
  createConnections() {
    // Connect nodes within proximity and between adjacent layers
    this.nodes.forEach((node, i) => {
      this.nodes.forEach((other, j) => {
        if (i < j) {
          const dx = node.baseX - other.baseX;
          const dy = node.baseY - other.baseY;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          // Connect if nodes are close or in adjacent layers
          if (distance < 250 || Math.abs(node.layer - other.layer) === 1) {
            this.connections.push({
              from: i,
              to: j,
              strength: Math.random() * 0.5 + 0.5
            });
          }
        }
      });
    });
  }
  
  createParticles() {
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.3
      });
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createNodes();
      this.createConnections();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.mouse.active = true;
      
      this.checkNodeHover();
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.active = false;
      this.hoveredNode = null;
      this.hideNodeInfo();
    });
    
    this.canvas.addEventListener('click', () => {
      if (this.hoveredNode !== null) {
        this.showNodeInfo(this.nodes[this.hoveredNode]);
      }
    });
  }
  
  checkNodeHover() {
    this.hoveredNode = null;
    this.nodes.forEach((node, i) => {
      const dx = this.mouse.x - node.x;
      const dy = this.mouse.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < node.radius + 10) {
        this.hoveredNode = i;
        this.canvas.style.cursor = 'pointer';
      }
    });
    
    if (this.hoveredNode === null) {
      this.canvas.style.cursor = 'default';
    }
  }
  
  showNodeInfo(node) {
    const panel = document.getElementById('nodeInfo');
    if (!panel) return;
    
    document.getElementById('nodeTitle').textContent = node.data.label;
    document.getElementById('nodeDescription').innerHTML = `
      <p><strong>Category:</strong> ${node.data.category}</p>
      <p>${node.data.info}</p>
    `;
    
    panel.classList.remove('hidden');
  }
  
  hideNodeInfo() {
    const panel = document.getElementById('nodeInfo');
    if (panel) {
      panel.classList.add('hidden');
    }
  }
  
  update() {
    this.time += 0.01;
    
    // Update particles
    this.particles.forEach(particle => {
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      if (particle.x < 0 || particle.x > this.width) particle.vx *= -1;
      if (particle.y < 0 || particle.y > this.height) particle.vy *= -1;
      
      particle.x = Math.max(0, Math.min(this.width, particle.x));
      particle.y = Math.max(0, Math.min(this.height, particle.y));
    });
    
    // Update nodes with subtle floating
    this.nodes.forEach((node, i) => {
      const offsetX = Math.sin(this.time + i * 0.5) * 3;
      const offsetY = Math.cos(this.time + i * 0.7) * 3;
      
      node.x = node.baseX + offsetX;
      node.y = node.baseY + offsetY;
      
      // Mouse interaction
      if (this.mouse.active) {
        const dx = this.mouse.x - node.x;
        const dy = this.mouse.y - node.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          node.x -= (dx / distance) * force * 5;
          node.y -= (dy / distance) * force * 5;
        }
      }
    });
  }
  
  draw() {
    // Clear with gradient background
    const gradient = this.ctx.createLinearGradient(0, 0, this.width, this.height);
    gradient.addColorStop(0, '#0a0e27');
    gradient.addColorStop(0.5, '#1a1f3a');
    gradient.addColorStop(1, '#0a0e27');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw background particles
    this.particles.forEach(particle => {
      this.ctx.fillStyle = `rgba(168, 192, 255, ${particle.alpha})`;
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    // Draw connections
    this.connections.forEach(conn => {
      const from = this.nodes[conn.from];
      const to = this.nodes[conn.to];
      
      const dx = to.x - from.x;
      const dy = to.y - from.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Pulsing effect
      const pulse = Math.sin(this.time * 2 + conn.from * 0.5) * 0.2 + 0.8;
      const alpha = (1 - distance / 500) * 0.3 * conn.strength * pulse;
      
      if (alpha > 0.05) {
        const gradient = this.ctx.createLinearGradient(from.x, from.y, to.x, to.y);
        gradient.addColorStop(0, `rgba(102, 126, 234, ${alpha})`);
        gradient.addColorStop(0.5, `rgba(118, 75, 162, ${alpha * 1.5})`);
        gradient.addColorStop(1, `rgba(102, 126, 234, ${alpha})`);
        
        this.ctx.strokeStyle = gradient;
        this.ctx.lineWidth = 1.5;
        this.ctx.beginPath();
        this.ctx.moveTo(from.x, from.y);
        this.ctx.lineTo(to.x, to.y);
        this.ctx.stroke();
        
        // Draw signal particles on connections
        if (Math.random() < 0.02) {
          const t = Math.random();
          const px = from.x + dx * t;
          const py = from.y + dy * t;
          
          this.ctx.fillStyle = 'rgba(240, 147, 251, 0.8)';
          this.ctx.beginPath();
          this.ctx.arc(px, py, 3, 0, Math.PI * 2);
          this.ctx.fill();
        }
      }
    });
    
    // Draw nodes
    this.nodes.forEach((node, i) => {
      const isHovered = this.hoveredNode === i;
      const radius = isHovered ? node.radius * 1.5 : node.radius;
      
      // Glow effect
      const glowGradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, radius * 3
      );
      glowGradient.addColorStop(0, isHovered ? 'rgba(240, 147, 251, 0.4)' : 'rgba(102, 126, 234, 0.3)');
      glowGradient.addColorStop(1, 'rgba(102, 126, 234, 0)');
      
      this.ctx.fillStyle = glowGradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius * 3, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Node gradient
      const nodeGradient = this.ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, radius
      );
      nodeGradient.addColorStop(0, isHovered ? '#f093fb' : '#667eea');
      nodeGradient.addColorStop(1, isHovered ? '#764ba2' : '#4c6fe3');
      
      this.ctx.fillStyle = nodeGradient;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Outer ring
      this.ctx.strokeStyle = isHovered ? 'rgba(240, 147, 251, 0.8)' : 'rgba(255, 255, 255, 0.3)';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, radius, 0, Math.PI * 2);
      this.ctx.stroke();
      
      // Label on hover
      if (isHovered) {
        this.ctx.fillStyle = '#ffffff';
        this.ctx.font = 'bold 14px "Roboto Mono", monospace';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        
        // Background for text
        const metrics = this.ctx.measureText(node.data.label);
        const padding = 10;
        this.ctx.fillStyle = 'rgba(10, 14, 39, 0.9)';
        this.ctx.fillRect(
          node.x - metrics.width / 2 - padding,
          node.y - radius - 30,
          metrics.width + padding * 2,
          20
        );
        
        this.ctx.fillStyle = '#ffffff';
        this.ctx.fillText(node.data.label, node.x, node.y - radius - 20);
      }
    });
    
    // Draw mouse cursor effect
    if (this.mouse.active) {
      this.ctx.strokeStyle = 'rgba(240, 147, 251, 0.3)';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(this.mouse.x, this.mouse.y, 30, 0, Math.PI * 2);
      this.ctx.stroke();
    }
  }
  
  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

export default NeuralNetworkViz;
