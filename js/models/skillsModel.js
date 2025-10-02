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
      { name: 'Linux Administration (CLI)', level: 'Advanced' },
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
      { name: 'SIEM (Security Information and Event Management)', level: 'Proficient' },
      { name: 'Log Analysis / Alert Triage', level: 'Proficient' },
      { name: 'Incident Response (IR) Fundamentals', level: 'Proficient' },
      { name: 'Threat Intelligence (TI) Integration', level: 'Proficient' },
      { name: 'Vulnerability Management', level: 'Proficient' },
      { name: 'Security Monitoring', level: 'Proficient' },
      { name: 'Networking Protocols (TCP/IP)', level: 'Proficient' },
      { name: 'Windows Security / Event Log Analysis', level: 'Proficient' },
      { name: 'Network Security', level: 'Proficient' },
      { name: 'Cybersecurity Policy & Compliance', level: 'Proficient' },
      { name: 'Problem-Solving & Critical Thinking', level: 'Expert' },
      { name: 'Cross-Functional Team Collaboration', level: 'Expert' },
      { name: 'Documentation & Technical Reporting', level: 'Expert' },
      { name: 'Risk Mitigation', level: 'Advanced' }
    ];
  }
}