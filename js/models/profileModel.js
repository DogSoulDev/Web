export class ProfileModel {
  getProfile() {
    return {
      name: 'Javier Fernández (DogSoulDev / DsD)',
      title: 'Cybersecurity Professional',
      subtitle: 'Master\'s in Cybersecurity & Software Development',
      description: 'Cybersecurity professional with expertise in penetration testing, incident response, and secure software development. Passionate about team collaboration and continuous learning.',
      img: 'img/D.png',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'Portfolio', url: 'https://dogsouldev.github.io/Web/', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}