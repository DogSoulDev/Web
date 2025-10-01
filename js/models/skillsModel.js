/**
 * Skills Model
 * Manages skills data
 * Follows Single Responsibility Principle - only handles skills data
 */
export class SkillsModel {
  /**
   * Get skills list
   * @returns {Array<Object>} Array of skill objects with name and level
   */
  getSkills() {
    return [
      { name: 'Penetration Testing', level: 'Expert' },
      { name: 'Cybersecurity Incident Response', level: 'Expert' },
      { name: 'Linux', level: 'Advanced' },
      { name: 'Vulnerabilities Analysis', level: 'Expert' },
      { name: 'Information Security Management', level: 'Advanced' },
      { name: 'Malware Analysis', level: 'Advanced' },
      { name: 'Security in Linux-based Architectures', level: 'Advanced' },
      { name: 'Corporate Network Security', level: 'Advanced' },
      { name: 'OSINT Security, Open Source Research', level: 'Advanced' },
      { name: 'Web Security', level: 'Advanced' },
      { name: 'Cryptography', level: 'Intermediate' },
      { name: 'Python', level: 'Advanced' },
      { name: 'Bash', level: 'Advanced' },
      { name: 'Git', level: 'Proficient' },
      { name: 'Programming', level: 'Advanced' },
      { name: 'Full-Stack Development (HTML, CSS, JS, React, PHP, Laravel, MongoDB, Express, Node.js)', level: 'Advanced' }
    ];
  }
}