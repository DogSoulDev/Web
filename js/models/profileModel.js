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
      title: 'Cybersecurity Professional | Software Developer | IT Systems Administrator',
      subtitle: 'Master\'s in Cybersecurity & Software Development | Higher Technical Degree in IT Systems Management',
      description: 'Highly accomplished Cybersecurity professional backed by a triple academic foundation: Master\'s in Cybersecurity, Master\'s in Software Development, and Higher Technical Degree in IT Systems Management. Expert in vulnerability analysis, penetration testing, incident response, and secure software development. Strong team orientation with relentless determination forged through dedicated sports participation.',
      img: 'img/perretes.png',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'Portfolio', url: 'https://dogsouldev.github.io/Web/', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}