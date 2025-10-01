/**
 * Particle Network Animation
 * Interactive particle network with mouse interaction
 * Based on: https://codepen.io/soulwire/pen/mEMPrK
 * 
 * Author: DogSoulDev (DsD)
 * Copyright © 2025 DogSoulDev. All rights reserved.
 */

export class ParticleNetwork {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.particleCount = 80;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    this.isMouseActive = false;
    
    this.init();
    this.bindEvents();
    this.animate();
  }
  
  init() {
    this.resizeCanvas();
    this.createParticles();
  }
  
  resizeCanvas() {
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.height = this.canvas.offsetHeight;
  }
  
  createParticles() {
    this.particles = [];
    for (let i = 0; i < this.particleCount; i++) {
      this.particles.push({
        x: Math.random() * this.canvas.width,
        y: Math.random() * this.canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2 + 1
      });
    }
  }
  
  bindEvents() {
    window.addEventListener('resize', () => {
      this.resizeCanvas();
      this.createParticles();
    });
    
    this.canvas.addEventListener('mousemove', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
      this.isMouseActive = true;
    });
    
    this.canvas.addEventListener('mouseleave', () => {
      this.isMouseActive = false;
    });
  }
  
  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Update and draw particles
    this.particles.forEach((particle, i) => {
      // Move particle
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Mouse interaction
      if (this.isMouseActive) {
        const dx = this.mouse.x - particle.x;
        const dy = this.mouse.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 150) {
          const force = (150 - distance) / 150;
          particle.vx -= (dx / distance) * force * 0.2;
          particle.vy -= (dy / distance) * force * 0.2;
        }
      }
      
      // Bounce off edges
      if (particle.x < 0 || particle.x > this.canvas.width) {
        particle.vx *= -1;
        particle.x = Math.max(0, Math.min(this.canvas.width, particle.x));
      }
      if (particle.y < 0 || particle.y > this.canvas.height) {
        particle.vy *= -1;
        particle.y = Math.max(0, Math.min(this.canvas.height, particle.y));
      }
      
      // Apply drag
      particle.vx *= 0.99;
      particle.vy *= 0.99;
      
      // Draw particle
      this.ctx.fillStyle = 'rgba(26, 26, 26, 0.8)';
      this.ctx.beginPath();
      this.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
      this.ctx.fill();
      
      // Draw connections
      for (let j = i + 1; j < this.particles.length; j++) {
        const other = this.particles[j];
        const dx = particle.x - other.x;
        const dy = particle.y - other.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          const opacity = (1 - distance / 120) * 0.5;
          this.ctx.strokeStyle = `rgba(26, 26, 26, ${opacity})`;
          this.ctx.lineWidth = 1;
          this.ctx.beginPath();
          this.ctx.moveTo(particle.x, particle.y);
          this.ctx.lineTo(other.x, other.y);
          this.ctx.stroke();
        }
      }
    });
    
    requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    // Clean up if needed
    this.particles = [];
  }
}
