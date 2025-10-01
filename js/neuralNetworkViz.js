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
    
    this.nodes = [];
    this.connections = [];
    this.mouse = { x: 0, y: 0 };
    this.selectedNode = null;
    this.hoveredNode = null;
    this.isDragging = false;
    
    this.init();
  }
  
  init() {
    this.resize();
    this.createNodes();
    this.createConnections();
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
    this.nodes = [];
    
    for (let i = 0; i < nodeCount; i++) {
      this.nodes.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: 5,
        data: this.data.nodes[i]
      });
    }
  }
  
  createConnections() {
    this.connections = [];
    for (let i = 0; i < this.nodes.length; i++) {
      const connectionsCount = Math.floor(Math.random() * 3) + 1;
      for (let j = 0; j < connectionsCount; j++) {
        const targetIndex = Math.floor(Math.random() * this.nodes.length);
        if (targetIndex !== i) {
          this.connections.push({ from: i, to: targetIndex });
        }
      }
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resize();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      
      if (this.isDragging && this.selectedNode !== null) {
        this.nodes[this.selectedNode].x = this.mouse.x;
        this.nodes[this.selectedNode].y = this.mouse.y;
        this.nodes[this.selectedNode].vx = 0;
        this.nodes[this.selectedNode].vy = 0;
      } else {
        this.checkNodeHover();
      }
    });
    
    this.canvas.addEventListener('mousedown', (e) => {
      if (this.hoveredNode !== null) {
        this.selectedNode = this.hoveredNode;
        this.isDragging = true;
        this.canvas.style.cursor = 'grabbing';
      }
    });
    
    this.canvas.addEventListener('mouseup', () => {
      this.isDragging = false;
      this.canvas.style.cursor = this.hoveredNode !== null ? 'grab' : 'default';
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.isDragging = false;
      this.selectedNode = null;
      this.hoveredNode = null;
      this.canvas.style.cursor = 'default';
      this.hideNodeInfo();
    });
    
    this.canvas.addEventListener('click', () => {
      if (this.hoveredNode !== null && !this.isDragging) {
        this.showNodeInfo(this.nodes[this.hoveredNode]);
      }
    });
  }
  
  checkNodeHover() {
    this.hoveredNode = null;
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const dx = this.mouse.x - node.x;
      const dy = this.mouse.y - node.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < node.radius + 5) {
        this.hoveredNode = i;
        this.canvas.style.cursor = 'grab';
        break;
      }
    }
    
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
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      
      if (i === this.selectedNode && this.isDragging) {
        continue;
      }
      
      node.x += node.vx;
      node.y += node.vy;
      
      // Bounce off walls
      if (node.x < node.radius) {
        node.x = node.radius;
        node.vx *= -1;
      }
      if (node.x > this.width - node.radius) {
        node.x = this.width - node.radius;
        node.vx *= -1;
      }
      if (node.y < node.radius) {
        node.y = node.radius;
        node.vy *= -1;
      }
      if (node.y > this.height - node.radius) {
        node.y = this.height - node.radius;
        node.vy *= -1;
      }
      
      // Mouse interaction
      const dx = node.x - this.mouse.x;
      const dy = node.y - this.mouse.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        node.vx += (dx / distance) * force * 0.3;
        node.vy += (dy / distance) * force * 0.3;
      }
      
      // Damping
      node.vx *= 0.99;
      node.vy *= 0.99;
    }
  }
  
  draw() {
    // Clear with dark background
    this.ctx.fillStyle = '#0a0e27';
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw connections
    for (let i = 0; i < this.connections.length; i++) {
      const conn = this.connections[i];
      const nodeFrom = this.nodes[conn.from];
      const nodeTo = this.nodes[conn.to];
      
      const dx = nodeTo.x - nodeFrom.x;
      const dy = nodeTo.y - nodeFrom.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      const opacity = Math.max(0, 1 - distance / 300) * 0.3;
      
      this.ctx.strokeStyle = `rgba(80, 150, 255, ${opacity})`;
      this.ctx.lineWidth = 1;
      this.ctx.beginPath();
      this.ctx.moveTo(nodeFrom.x, nodeFrom.y);
      this.ctx.lineTo(nodeTo.x, nodeTo.y);
      this.ctx.stroke();
    }
    
    // Draw nodes
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      const isHovered = this.hoveredNode === i;
      const isSelected = this.selectedNode === i;
      
      // Outer glow for hovered/selected
      if (isHovered || isSelected) {
        const gradient = this.ctx.createRadialGradient(
          node.x, node.y, 0,
          node.x, node.y, 15
        );
        gradient.addColorStop(0, 'rgba(80, 150, 255, 0.4)');
        gradient.addColorStop(1, 'rgba(80, 150, 255, 0)');
        this.ctx.fillStyle = gradient;
        this.ctx.beginPath();
        this.ctx.arc(node.x, node.y, 15, 0, Math.PI * 2);
        this.ctx.fill();
      }
      
      // Node circle
      this.ctx.fillStyle = isHovered || isSelected ? '#5a9aff' : '#4080ff';
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Node border
      this.ctx.strokeStyle = '#ffffff';
      this.ctx.lineWidth = 1.5;
      this.ctx.beginPath();
      this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
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
