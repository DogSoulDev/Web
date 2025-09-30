// userModel.js
// Data model for user information


class UserModel {
  constructor() {
    this.profile = {
      name: 'DogSoulDev',
      role: 'Ethical Hacker & Cybersecurity Analyst',
      bio: 'Passionate about offensive security, threat hunting, and cyber defense. I help companies stay secure and compliant.',
    };
    this.skills = [
      'Penetration Testing',
      'Vulnerability Assessment',
      'Incident Response',
      'Threat Intelligence',
      'Red Team/Blue Team',
      'Network Security',
      'Web Application Security',
      'Reverse Engineering',
      'SIEM & Log Analysis',
      'Linux & Windows Hardening',
      'Cloud Security',
    ];
    this.experience = [
      'Lead Pentester at CyberSecOps (2022-2025)',
      'Security Analyst at SecureIT (2020-2022)',
      'Freelance Bug Bounty Hunter (2018-2020)',
    ];
    this.contact = {
      Email: 'contact@dogsouldev.com',
      LinkedIn: 'linkedin.com/in/dogsouldev',
      GitHub: 'github.com/DogSoulDev',
    };
  }

  getProfile() {
    return this.profile;
  }
  getSkills() {
    return this.skills;
  }
  getExperience() {
    return this.experience;
  }
  getContact() {
    return this.contact;
  }
}

export default UserModel;
