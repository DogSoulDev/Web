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
      description: 'Strategic Blue Team Candidate with exceptional 10+ year background in IT Systems Engineering, Network Architecture, and Full-Stack Development. I leverage this deep infrastructure knowledge to provide superior context for threat detection and analysis. Core value: quickly triage security alerts and mitigate risks due to comprehensive understanding of how systems are built, secured, and attacked. Hands-on skills in log analysis, security monitoring, Linux environments, and Python/Bash scripting. Results-driven, committed to applying rigor, methodological approach, and team-first mindset for early threat detection and efficient incident response in high-tempo SOC operations.',
      img: 'img/perretes.png',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'Portfolio', url: 'https://dogsouldev.github.io/Web/', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}