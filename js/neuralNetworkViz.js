/**
 * Neural Network Visualization - EXACT COPY from CodePen VoXelo
 * https://codepen.io/VoXelo/pen/EaabxLj
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
    
    // Exact colors from CodePen
    this.nodes = [];
    this.mouse = { x: null, y: null };
    this.hoveredNode = null;
    
    this.init();
  }
  
  init() {
    this.resize();
    this.createNodes();
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
    const nodeCount = this.data.nodes.length;
    const cols = 5;
    const rows = Math.ceil(nodeCount / cols);
    const xSpacing = this.width / (cols + 1);
    const ySpacing = this.height / (rows + 1);
    
    this.data.nodes.forEach((nodeData, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      
      this.nodes.push({
        x: xSpacing * (col + 1) + (Math.random() - 0.5) * 50,
        y: ySpacing * (row + 1) + (Math.random() - 0.5) * 50,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: 6,
        data: nodeData
      });
    });
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
      this.createNodes();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.checkNodeHover();
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.mouse.x = null;
      this.mouse.y = null;
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
    this.nodes.forEach((node) => {
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off walls
      if (node.x < node.radius || node.x > this.width - node.radius) {
        node.vx *= -1;
      }
      if (node.y < node.radius || node.y > this.height - node.radius) {
        node.vy *= -1;
      }
      
      // Keep in bounds
      node.x = Math.max(node.radius, Math.min(this.width - node.radius, node.x));
      node.y = Math.max(node.radius, Math.min(this.height - node.radius, node.y));
      
      // Mouse repulsion
      if (this.mouse.x !== null && this.mouse.y !== null) {
        const dx = node.x - this.mouse.x;
        const dy = node.y - this.mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 100) {
          const force = (100 - distance) / 100;
          node.vx += (dx / distance) * force * 0.5;
          node.vy += (dy / distance) * force * 0.5;
        }
      }
      
      // Damping
      node.vx *= 0.98;
      node.vy *= 0.98;
    });
  }
  
  draw() {
    // Dark background
    this.ctx.fillStyle = '#0a0e1a';
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw connections
    this.ctx.strokeStyle = 'rgba(100, 150, 255, 0.15)';
    this.ctx.lineWidth = 1;
    
    for (let i = 0; i < this.nodes.length; i++) {
      for (let j = i + 1; j < this.nodes.length; j++) {
        const nodeA = this.nodes[i];
        const nodeB = this.nodes[j];
        const dx = nodeB.x - nodeA.x;
        const dy = nodeB.y - nodeA.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const alpha = (1 - distance / 150) * 0.3;
          this.ctx.strokeStyle = `rgba(100, 150, 255, ${alpha})`;
          this.ctx.beginPath();
          this.ctx.moveTo(nodeA.x, nodeA.y);
          this.ctx.lineTo(nodeB.x, nodeB.y);
          this.ctx.stroke();
        }
      }
    }
    
    // Draw nodes
    this.nodes.forEach((node, i) => {
      const isHovered = this.hoveredNode === i;
      
      // Glow
      if (isHovered) {
        const gradient = this.ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 20);
        gradient.addColorStop(0, 'rgba(100, 150, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(100, 150, 255, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, 20, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      // Node
      this.ctx.fillStyle = isHovered ? '#6496ff' : '#4080ff';
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Border
      this.ctx.strokeStyle = '#fff';
      this.ctx.lineWidth = 2;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.stroke();
    });
  }
  
  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
}

export default NeuralNetworkViz;
