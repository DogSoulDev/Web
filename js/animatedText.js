/**
 * Animated Text Component
 * Creates interactive text with mouse follow effect
 * Based on: https://codepen.io/soulwire/pen/mEMPrK
 * 
 * Author: DogSoulDev (DsD)
 * Copyright © 2025 DogSoulDev. All rights reserved.
 */

export class AnimatedText {
  constructor(containerId, text) {
    this.container = document.getElementById(containerId);
    if (!this.container) return;
    
    this.text = text;
    this.particles = [];
    this.mouse = { x: 0, y: 0 };
    
    this.init();
  }
  
  init() {
    this.createParticles();
    this.bindEvents();
    this.animate();
  }
  
  createParticles() {
    const letters = this.text.split('');
    const span = document.createElement('span');
    span.style.visibility = 'hidden';
    span.style.position = 'absolute';
    span.style.fontSize = '2rem';
    span.style.fontFamily = 'var(--font-manga)';
    document.body.appendChild(span);
    
    let x = 20;
    letters.forEach((letter, i) => {
      span.textContent = letter;
      const width = span.offsetWidth;
      
      const particle = {
        letter: letter,
        x: x,
        y: 20,
        baseX: x,
        baseY: 20,
        vx: 0,
        vy: 0,
        element: null
      };
      
      const el = document.createElement('span');
      el.textContent = letter;
      el.style.position = 'absolute';
      el.style.left = x + 'px';
      el.style.top = '20px';
      el.style.fontSize = '2rem';
      el.style.fontWeight = 'bold';
      el.style.color = '#1a1a1a';
      el.style.transition = 'color 0.3s';
      this.container.appendChild(el);
      
      particle.element = el;
      this.particles.push(particle);
      
      x += width + 5;
    });
    
    document.body.removeChild(span);
  }
  
  bindEvents() {
    this.container.addEventListener('mousemove', (e) => {
      const rect = this.container.getBoundingClientRect();
      this.mouse.x = e.clientX - rect.left;
      this.mouse.y = e.clientY - rect.top;
    });
    
    this.container.addEventListener('mouseleave', () => {
      this.mouse.x = -1000;
      this.mouse.y = -1000;
    });
  }
  
  animate() {
    this.particles.forEach(particle => {
      const dx = this.mouse.x - particle.x;
      const dy = this.mouse.y - particle.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      if (distance < 100) {
        const force = (100 - distance) / 100;
        particle.vx -= (dx / distance) * force * 0.5;
        particle.vy -= (dy / distance) * force * 0.5;
      }
      
      // Return to base position
      const returnForce = 0.05;
      particle.vx += (particle.baseX - particle.x) * returnForce;
      particle.vy += (particle.baseY - particle.y) * returnForce;
      
      // Apply drag
      particle.vx *= 0.9;
      particle.vy *= 0.9;
      
      // Update position
      particle.x += particle.vx;
      particle.y += particle.vy;
      
      // Update DOM
      particle.element.style.left = particle.x + 'px';
      particle.element.style.top = particle.y + 'px';
      
      // Color change based on distance
      if (distance < 100) {
        const intensity = 1 - (distance / 100);
        particle.element.style.color = `rgb(${Math.floor(231 * (1 - intensity) + 26 * intensity)}, ${Math.floor(76 * (1 - intensity) + 26 * intensity)}, ${Math.floor(60 * (1 - intensity) + 26 * intensity)})`;
      } else {
        particle.element.style.color = '#1a1a1a';
      }
    });
    
    requestAnimationFrame(() => this.animate());
  }
  
  destroy() {
    this.particles.forEach(p => {
      if (p.element && p.element.parentNode) {
        p.element.parentNode.removeChild(p.element);
      }
    });
    this.particles = [];
  }
}
