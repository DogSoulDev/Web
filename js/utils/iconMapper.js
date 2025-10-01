/**
 * Icon Mapper Utility
 * Follows DRY principle - centralized icon mapping logic
 */
export class IconMapper {
  static getTechIcon(tech) {
    const iconMap = {
      'JavaScript': 'js.svg',
      'HTML': 'html.svg',
      'CSS': 'ui.svg',
      'React': 'design.svg',
      'Node.js': 'js.svg',
      'Python': 'art.svg',
      'Git': 'github.svg',
      'MongoDB': 'portfolio.svg',
      'Express': 'js.svg',
      'TypeScript': 'js.svg'
    };
    return iconMap[tech] || 'manga.svg';
  }

  static getButtonStyle(index) {
    const buttonStyles = [
      'btn-style-1', // Azul eléctrico con glow
      'btn-style-2', // Verde neón con pulso
      'btn-style-3', // Rojo manga con border animado
      'btn-style-4', // Púrpura cyber con particles
      'btn-style-5', // Naranja fire con waves
      'btn-style-6'  // Cyan tech con scan effect
    ];
    return buttonStyles[index % buttonStyles.length];
  }
}
