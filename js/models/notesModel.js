export class NotesModel {
  getNotes() {
    return {
      title: 'My Notes & Ideas',
      description: 'Interactive whiteboard - Click and drag to create connections between ideas',
      initialNodes: [
        { id: 1, x: 200, y: 150, text: 'Cybersecurity', color: '#FF6B6B' },
        { id: 2, x: 400, y: 200, text: 'Web Development', color: '#4ECDC4' },
        { id: 3, x: 300, y: 350, text: 'Ethical Hacking', color: '#FFE66D' },
        { id: 4, x: 550, y: 300, text: 'Full Stack', color: '#95E1D3' },
        { id: 5, x: 150, y: 400, text: 'Penetration Testing', color: '#F38181' }
      ]
    };
  }
}
