/**
 * Profile Model
 * Manages profile data
 * Follows Single Responsibility Principle - only handles profile data
 */
export class ProfileModel {
  /**
   * Get profile information
   * @returns {Object} Profile data object
   */
  getProfile() {
    return {
      name: 'Javier Fernández (DogSoulDev / DsD)',
      title: 'Strategic Blue Team Candidate | Cybersecurity & IT Systems Engineering',
      subtitle: 'Master\'s in Cybersecurity | 10+ Years IT Infrastructure & Full-Stack Development',
      description: 'Transforming 10+ years of IT Systems Engineering and Full-Stack Development expertise into strategic Blue Team capabilities. Ready to deliver efficient threat detection and incident response in high-tempo SOC operations.',
      img: 'img/perretes.png',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'Portfolio', url: 'https://dogsouldev.github.io/Web/', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}