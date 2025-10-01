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
      { name: 'Vulnerability Analysis', level: 'Expert' },
      { name: 'Incident Response', level: 'Expert' },
      { name: 'Linux Security', level: 'Advanced' },
      { name: 'Network Security', level: 'Advanced' },
      { name: 'Malware Analysis', level: 'Advanced' },
      { name: 'Python & Bash Scripting', level: 'Advanced' },
      { name: 'Cryptography', level: 'Advanced' },
      { name: 'OSINT (Open Source Intelligence)', level: 'Advanced' },
      { name: 'Web Security', level: 'Advanced' },
      { name: 'Security in Linux-based Architectures', level: 'Advanced' },
      { name: 'Information Security Management', level: 'Advanced' },
      { name: 'Full-Stack Development', level: 'Advanced' },
      { name: 'React, Node.js, Express', level: 'Advanced' },
      { name: 'PHP, Laravel', level: 'Advanced' },
      { name: 'MongoDB, Database Design', level: 'Proficient' },
      { name: 'Git Version Control', level: 'Proficient' }
    ];
  }
}