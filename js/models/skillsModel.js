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
      { name: 'Penetration Testing', level: '' },
      { name: 'Cybersecurity Incident Response', level: '' },
      { name: 'Linux Administration (CLI)', level: '' },
      { name: 'Information Security Management', level: '' },
      { name: 'Malware Analysis', level: '' },
      { name: 'Security in Linux-based Architectures', level: '' },
      { name: 'Corporate Network Security', level: '' },
      { name: 'OSINT (Open Source Intelligence)', level: '' },
      { name: 'Web Security', level: '' },
      { name: 'Cryptography', level: '' },
      { name: 'Python Scripting', level: '' },
      { name: 'Bash Scripting', level: '' },
      { name: 'Git Version Control', level: '' },
      { name: 'SIEM (Security Information and Event Management)', level: '' },
      { name: 'Log Analysis / Alert Triage', level: '' },
      { name: 'Incident Response (IR) Fundamentals', level: '' },
      { name: 'Threat Intelligence (TI) Integration', level: '' },
      { name: 'Vulnerability Management', level: '' },
      { name: 'Security Monitoring', level: '' },
      { name: 'Networking Protocols (TCP/IP)', level: '' },
      { name: 'Windows Security / Event Log Analysis', level: '' },
      { name: 'Network Security', level: '' },
      { name: 'Cybersecurity Policy & Compliance', level: '' },
      { name: 'Problem-Solving & Critical Thinking', level: '' },
      { name: 'Cross-Functional Team Collaboration', level: '' },
      { name: 'Documentation & Technical Reporting', level: '' },
      { name: 'Risk Mitigation', level: '' }
    ];
  }
}