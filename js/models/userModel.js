// userModel.js// userModel.js// userModel.js// userModel.js

// Data model for user information

// Data model for user information

class UserModel {

  constructor() {// Data model for user information// Data model for user information

    this.profile = {

      name: 'DogSoulDev',class UserModel {

      role: 'Ethical Hacker & Cybersecurity Analyst',

      bio: 'Passionate about offensive security, threat hunting, and cyber defense. I help companies stay secure and compliant.',  constructor() {

    };

    this.skills = [    this.profile = {

      'Penetration Testing',

      'Vulnerability Assessment',      name: 'DogSoulDev',class UserModel {

      'Incident Response',

      'Threat Intelligence',      role: 'Ethical Hacker & Cybersecurity Analyst',

      'Red Team/Blue Team',

      'Network Security',      bio: 'Passionate about offensive security, threat hunting, and cyber defense. I help companies stay secure and compliant.',  constructor() {class UserModel {

      'Web Application Security',

      'Reverse Engineering',    };

      'SIEM & Log Analysis',

      'Linux & Windows Hardening',    this.skills = [    this.profile = {  constructor() {

      'Cloud Security',

    ];      'Penetration Testing',

    this.experience = [

      'Lead Pentester at CyberSecOps (2022-2025)',      'Vulnerability Assessment',      name: 'DogSoulDev',    this.profile = {

      'Security Analyst at SecureIT (2020-2022)',

      'Freelance Bug Bounty Hunter (2018-2020)',      'Incident Response',

    ];

    this.contact = {      'Threat Intelligence',      role: 'Ethical Hacker & Cybersecurity Analyst',      name: 'DogSoulDev',

      Email: 'contact@dogsouldev.com',

      LinkedIn: 'linkedin.com/in/dogsouldev',      'Red Team/Blue Team',

      GitHub: 'github.com/DogSoulDev',

    };      'Network Security',      bio: 'Passionate about offensive security, threat hunting, and cyber defense. I help companies stay secure and compliant.',      role: 'Ethical Hacker & Cybersecurity Analyst',

  }

      'Web Application Security',

  getProfile() {

    return this.profile;      'Reverse Engineering',    };      bio: 'Passionate about offensive security, threat hunting, and cyber defense. I help companies stay secure and compliant.',

  }

  getSkills() {      'SIEM & Log Analysis',

    return this.skills;

  }      'Linux & Windows Hardening',    this.skills = [    };

  getExperience() {

    return this.experience;      'Cloud Security',

  }

  getContact() {    ];      'Penetration Testing',    this.skills = [

    return this.contact;

  }    this.experience = [

}

      'Lead Pentester at CyberSecOps (2022-2025)',      'Vulnerability Assessment',      'Penetration Testing',

export default UserModel;

      'Security Analyst at SecureIT (2020-2022)',

      'Freelance Bug Bounty Hunter (2018-2020)',      'Incident Response',      'Vulnerability Assessment',

    ];

    this.contact = {      'Threat Intelligence',      'Incident Response',

      Email: 'contact@dogsouldev.com',

      LinkedIn: 'linkedin.com/in/dogsouldev',      'Red Team/Blue Team',      'Threat Intelligence',

      GitHub: 'github.com/DogSoulDev',

    };      'Network Security',      'Red Team/Blue Team',

  }

      'Web Application Security',      'Network Security',

  getProfile() {

    return this.profile;      'Reverse Engineering',      'Web Application Security',

  }

  getSkills() {      'SIEM & Log Analysis',      'Reverse Engineering',

    return this.skills;

  }      'Linux & Windows Hardening',      'SIEM & Log Analysis',

  getExperience() {

    return this.experience;      'Cloud Security',      'Linux & Windows Hardening',

  }

  getContact() {    ];      'Cloud Security',

    return this.contact;

  }    this.experience = [    ];

}

      'Lead Pentester at CyberSecOps (2022-2025)',    this.experience = [

export default UserModel;

      'Security Analyst at SecureIT (2020-2022)',      'Lead Pentester at CyberSecOps (2022-2025)',

      'Freelance Bug Bounty Hunter (2018-2020)',      'Security Analyst at SecureIT (2020-2022)',

    ];      'Freelance Bug Bounty Hunter (2018-2020)',

    this.contact = {    ];

      Email: 'contact@dogsouldev.com',    this.contact = {

      LinkedIn: 'linkedin.com/in/dogsouldev',      Email: 'contact@dogsouldev.com',

      GitHub: 'github.com/DogSoulDev',      LinkedIn: 'linkedin.com/in/dogsouldev',

    };      GitHub: 'github.com/DogSoulDev',

  }    };

  }

  getProfile() {

    return this.profile;  getProfile() {

  }    return this.profile;

  getSkills() {  }

    return this.skills;  getSkills() {

  }    return this.skills;

  getExperience() {  }

    return this.experience;  getExperience() {

  }    return this.experience;

  getContact() {  }

    return this.contact;  getContact() {

  }    return this.contact;

}  }

}

export default UserModel;

export default UserModel;
