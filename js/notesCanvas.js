/**
 * Notes Canvas - Interactive Whiteboard
 * Estilo Obsidian con persistencia y soporte táctil
 */

class NotesCanvas {
  constructor(canvasId, initialNodes = []) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    this.nodes = [];
    this.connections = [];
    this.selectedNode = null;
    this.draggingNode = null;
    this.connectingFrom = null;
    this.mousePos = { x: 0, y: 0 };
    this.touchStartTime = 0;
    this.lastTap = 0;

    // Configuración
    this.nodeRadius = 60;
    this.fontSize = 14;
    this.colors = ['#FF6B6B', '#4ECDC4', '#FFE66D', '#95E1D3', '#F38181', '#A8E6CF'];
    this.storageKey = 'notesCanvasData';

    this.init(initialNodes);
  }

  init(initialNodes) {
    this.resizeCanvas();
    window.addEventListener('resize', () => this.resizeCanvas());

    // Cargar datos guardados
    this.loadFromStorage(initialNodes);

    // Event listeners - Mouse
    this.canvas.addEventListener('mousedown', (e) => this.handleMouseDown(e));
    this.canvas.addEventListener('mousemove', (e) => this.handleMouseMove(e));
    this.canvas.addEventListener('mouseup', (e) => this.handleMouseUp(e));
    this.canvas.addEventListener('dblclick', (e) => this.handleDoubleClick(e));
    
    // Event listeners - Touch
    this.canvas.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: false });
    this.canvas.addEventListener('touchmove', (e) => this.handleTouchMove(e), { passive: false });
    this.canvas.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: false });
    
    document.addEventListener('keydown', (e) => this.handleKeyDown(e));

    // Botones
    document.getElementById('addNode')?.addEventListener('click', () => this.addRandomNode());
    document.getElementById('clearCanvas')?.addEventListener('click', () => this.clearAll());
    document.getElementById('resetCanvas')?.addEventListener('click', () => this.reset(initialNodes));

    this.draw();
  }

  // PERSISTENCIA
  saveToStorage() {
    const data = {
      nodes: this.nodes,
      connections: this.connections.map(conn => ({
        fromId: conn.from.id,
        toId: conn.to.id
      }))
    };
    localStorage.setItem(this.storageKey, JSON.stringify(data));
  }

  loadFromStorage(initialNodes) {
    const saved = localStorage.getItem(this.storageKey);
    
    if (saved) {
      try {
        const data = JSON.parse(saved);
        this.nodes = data.nodes.map(node => ({
          ...node,
          radius: this.nodeRadius
        }));
        
        data.connections.forEach(conn => {
          const from = this.nodes.find(n => n.id === conn.fromId);
          const to = this.nodes.find(n => n.id === conn.toId);
          if (from && to) {
            this.connections.push({ from, to });
          }
        });
      } catch (e) {
        this.nodes = initialNodes.map(node => ({
          ...node,
          radius: this.nodeRadius
        }));
      }
    } else {
      this.nodes = initialNodes.map(node => ({
        ...node,
        radius: this.nodeRadius
      }));
      this.saveToStorage();
    }
  }

  // SOPORTE TÁCTIL
  getTouchPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const touch = e.touches[0] || e.changedTouches[0];
    return {
      x: touch.clientX - rect.left,
      y: touch.clientY - rect.top
    };
  }

  handleTouchStart(e) {
    e.preventDefault();
    const pos = this.getTouchPos(e);
    const clickedNode = this.getNodeAt(pos.x, pos.y);
    
    const currentTime = new Date().getTime();
    const tapLength = currentTime - this.lastTap;
    
    if (tapLength < 300 && tapLength > 0 && !clickedNode) {
      this.handleDoubleTap(pos.x, pos.y);
      this.lastTap = 0;
    } else {
      this.lastTap = currentTime;
      
      if (clickedNode) {
        this.touchStartTime = currentTime;
        this.selectedNode = clickedNode;
        this.draggingNode = clickedNode;
      }
    }
    
    this.draw();
  }

  handleTouchMove(e) {
    e.preventDefault();
    const pos = this.getTouchPos(e);
    this.mousePos = pos;

    if (this.draggingNode) {
      this.draggingNode.x = pos.x;
      this.draggingNode.y = pos.y;
      this.draw();
    }
  }

  handleTouchEnd(e) {
    e.preventDefault();
    
    const touchDuration = new Date().getTime() - this.touchStartTime;
    
    if (touchDuration > 500 && this.selectedNode) {
      const pos = this.getTouchPos(e);
      const targetNode = this.getNodeAt(pos.x, pos.y);
      
      if (targetNode && targetNode !== this.selectedNode) {
        this.createConnection(this.selectedNode, targetNode);
      }
    }

    if (this.draggingNode) {
      this.saveToStorage();
    }

    this.draggingNode = null;
    this.connectingFrom = null;
    this.draw();
  }

  handleDoubleTap(x, y) {
    const text = prompt('Enter note text:');
    if (text) {
      this.addNode(x, y, text);
    }
  }

  // EVENTOS MOUSE
  resizeCanvas() {
    const container = this.canvas.parentElement;
    this.canvas.width = container.clientWidth;
    this.canvas.height = Math.min(600, window.innerHeight - 300);
    this.draw();
  }

  handleMouseDown(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedNode = this.getNodeAt(x, y);

    if (clickedNode) {
      if (e.shiftKey) {
        this.connectingFrom = clickedNode;
      } else {
        this.draggingNode = clickedNode;
        this.selectedNode = clickedNode;
      }
    } else {
      this.selectedNode = null;
    }

    this.draw();
  }

  handleMouseMove(e) {
    const rect = this.canvas.getBoundingClientRect();
    this.mousePos.x = e.clientX - rect.left;
    this.mousePos.y = e.clientY - rect.top;

    if (this.draggingNode) {
      this.draggingNode.x = this.mousePos.x;
      this.draggingNode.y = this.mousePos.y;
      this.draw();
    } else if (this.connectingFrom) {
      this.draw();
    }
  }

  handleMouseUp(e) {
    if (this.connectingFrom) {
      const rect = this.canvas.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const targetNode = this.getNodeAt(x, y);

      if (targetNode && targetNode !== this.connectingFrom) {
        this.createConnection(this.connectingFrom, targetNode);
      }

      this.connectingFrom = null;
    }

    if (this.draggingNode) {
      this.saveToStorage();
    }

    this.draggingNode = null;
    this.draw();
  }

  handleDoubleClick(e) {
    const rect = this.canvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const clickedNode = this.getNodeAt(x, y);

    if (!clickedNode) {
      const text = prompt('Enter note text:');
      if (text) {
        this.addNode(x, y, text);
      }
    }
  }

  handleKeyDown(e) {
    if (e.key === 'Delete' && this.selectedNode) {
      this.nodes = this.nodes.filter(node => node !== this.selectedNode);
      this.connections = this.connections.filter(conn =>
        conn.from !== this.selectedNode && conn.to !== this.selectedNode
      );
      this.selectedNode = null;
      this.saveToStorage();
      this.draw();
    }
  }

  // UTILIDADES
  getNodeAt(x, y) {
    return this.nodes.find(node => {
      const dx = x - node.x;
      const dy = y - node.y;
      return Math.sqrt(dx * dx + dy * dy) <= node.radius;
    });
  }

  createConnection(from, to) {
    const exists = this.connections.some(conn =>
      (conn.from === from && conn.to === to) ||
      (conn.from === to && conn.to === from)
    );

    if (!exists) {
      this.connections.push({ from, to });
      this.saveToStorage();
    }
  }

  addNode(x, y, text, color = null) {
    const newNode = {
      id: Date.now(),
      x: x,
      y: y,
      text: text,
      color: color || this.colors[Math.floor(Math.random() * this.colors.length)],
      radius: this.nodeRadius
    };
    this.nodes.push(newNode);
    this.saveToStorage();
    this.draw();
  }

  addRandomNode() {
    const x = Math.random() * (this.canvas.width - 200) + 100;
    const y = Math.random() * (this.canvas.height - 200) + 100;
    const text = prompt('Enter note text:');
    if (text) {
      this.addNode(x, y, text);
    }
  }

  clearAll() {
    if (confirm('Clear all notes? This affects all users.')) {
      this.nodes = [];
      this.connections = [];
      this.selectedNode = null;
      this.saveToStorage();
      this.draw();
    }
  }

  reset(initialNodes) {
    if (confirm('Reset to initial state? This affects all users.')) {
      this.nodes = initialNodes.map(node => ({
        ...node,
        radius: this.nodeRadius
      }));
      this.connections = [];
      this.selectedNode = null;
      this.saveToStorage();
      this.draw();
    }
  }

  // DIBUJO
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = '#fafafa';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.drawGrid();
    this.connections.forEach(conn => this.drawConnection(conn));

    if (this.connectingFrom) {
      this.ctx.strokeStyle = '#999';
      this.ctx.lineWidth = 2;
      this.ctx.setLineDash([5, 5]);
      this.ctx.beginPath();
      this.ctx.moveTo(this.connectingFrom.x, this.connectingFrom.y);
      this.ctx.lineTo(this.mousePos.x, this.mousePos.y);
      this.ctx.stroke();
      this.ctx.setLineDash([]);
    }

    this.nodes.forEach(node => this.drawNode(node));
  }

  drawGrid() {
    const gridSize = 30;
    this.ctx.strokeStyle = '#e0e0e0';
    this.ctx.lineWidth = 1;

    for (let x = 0; x < this.canvas.width; x += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(x, 0);
      this.ctx.lineTo(x, this.canvas.height);
      this.ctx.stroke();
    }

    for (let y = 0; y < this.canvas.height; y += gridSize) {
      this.ctx.beginPath();
      this.ctx.moveTo(0, y);
      this.ctx.lineTo(this.canvas.width, y);
      this.ctx.stroke();
    }
  }

  drawConnection(conn) {
    this.ctx.strokeStyle = '#333';
    this.ctx.lineWidth = 3;
    this.ctx.beginPath();
    this.ctx.moveTo(conn.from.x, conn.from.y);
    this.ctx.lineTo(conn.to.x, conn.to.y);
    this.ctx.stroke();

    const midX = (conn.from.x + conn.to.x) / 2;
    const midY = (conn.from.y + conn.to.y) / 2;
    const angle = Math.atan2(conn.to.y - conn.from.y, conn.to.x - conn.from.x);

    this.ctx.save();
    this.ctx.translate(midX, midY);
    this.ctx.rotate(angle);
    this.ctx.fillStyle = '#333';
    this.ctx.beginPath();
    this.ctx.moveTo(10, 0);
    this.ctx.lineTo(-10, -8);
    this.ctx.lineTo(-10, 8);
    this.ctx.closePath();
    this.ctx.fill();
    this.ctx.restore();
  }

  drawNode(node) {
    this.ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
    this.ctx.shadowBlur = 10;
    this.ctx.shadowOffsetX = 3;
    this.ctx.shadowOffsetY = 3;

    this.ctx.fillStyle = node.color;
    this.ctx.beginPath();
    this.ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
    this.ctx.fill();

    if (node === this.selectedNode) {
      this.ctx.strokeStyle = '#000';
      this.ctx.lineWidth = 4;
    } else {
      this.ctx.strokeStyle = '#333';
      this.ctx.lineWidth = 2;
    }
    this.ctx.stroke();

    this.ctx.shadowColor = 'transparent';

    this.ctx.fillStyle = '#000';
    this.ctx.font = `bold ${this.fontSize}px Arial`;
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';

    const words = node.text.split(' ');
    const maxWidth = node.radius * 1.5;
    let lines = [];
    let currentLine = '';

    words.forEach(word => {
      const testLine = currentLine + (currentLine ? ' ' : '') + word;
      const metrics = this.ctx.measureText(testLine);
      if (metrics.width > maxWidth && currentLine) {
        lines.push(currentLine);
        currentLine = word;
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);

    const lineHeight = this.fontSize + 4;
    const startY = node.y - ((lines.length - 1) * lineHeight) / 2;

    lines.forEach((line, i) => {
      this.ctx.fillText(line, node.x, startY + i * lineHeight);
    });
  }
}

window.NotesCanvas = NotesCanvas;
