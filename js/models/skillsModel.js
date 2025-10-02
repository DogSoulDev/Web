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
      { name: 'Penetration Testing', level: 'Advanced' },
      { name: 'Cybersecurity Incident Response', level: 'Advanced' },
      { name: 'Linux Systems', level: 'Advanced' },
      { name: 'Vulnerabilities Analysis', level: 'Advanced' },
      { name: 'Information Security Management', level: 'Advanced' },
      { name: 'Malware Analysis', level: 'Advanced' },
      { name: 'Security in Linux-based Architectures', level: 'Advanced' },
      { name: 'Corporate Network Security', level: 'Advanced' },
      { name: 'OSINT (Open Source Intelligence)', level: 'Advanced' },
      { name: 'Web Security', level: 'Advanced' },
      { name: 'Cryptography', level: 'Advanced' },
      { name: 'Python Scripting', level: 'Advanced' },
      { name: 'Bash Scripting', level: 'Advanced' },
      { name: 'Git Version Control', level: 'Proficient' },
      { name: 'Programming & Development', level: 'Proficient' }
    ];
  }
}