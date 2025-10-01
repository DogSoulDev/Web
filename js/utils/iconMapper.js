/**
 * Icon Mapper Utility
 * Follows DRY principle - centralized icon mapping logic
 */
export class IconMapper {
  static getTechIcon(tech) {
    const iconMap = {
      'JavaScript': '🔓',      // Unlocked padlock - web hacking
      'HTML': '🌐',            // Globe - web security
      'CSS': '🎨',             // Art palette - design
      'React': '⚛️',           // Atom - React
      'Node.js': '🛡️',         // Shield - backend security
      'Python': '🐍',          // Snake - Python scripting
      'Git': '🔐',             // Locked with key - version control security
      'MongoDB': '🗄️',         // File cabinet - database
      'Express': '⚡',         // Lightning - fast backend
      'TypeScript': '🔑',      // Key - typed security
      'Various': '🎯'          // Target - penetration testing
    };
    return iconMap[tech] || '🔒';  // Locked padlock - default cybersecurity
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
