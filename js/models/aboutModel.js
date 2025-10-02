/**
 * About Model
 * Manages about section data
 * Follows Single Responsibility Principle - only handles about data
 */
export class AboutModel {
  /**
   * Get about information
   * @returns {Object} About data object with title and content
   */
  getAbout() {
    return {
      title: 'About Me',
      content: `Strategic Blue Team Candidate with a Master's Degree in Cybersecurity and an exceptional 10+ year background in IT Systems Engineering, Network Architecture, and Full-Stack Development. I leverage this deep infrastructure knowledge to provide a superior context for threat detection and analysis.

My core value is the ability to quickly triage security alerts and mitigate risks due to a comprehensive understanding of how systems are built, secured, and attacked. I possess hands-on skills in log analysis, security monitoring methodologies, Linux environments, and Python/Bash scripting—all essential for effective SOC operations.

I am results-driven and committed to applying my rigor, methodological approach, and team-first mindset to ensure early threat detection and efficient incident response within a high-tempo security operations center.

Personal Information:
• Work permit: Spanish | Gender: Male | Date of birth: 31/10/1985
• Place of birth: Vigo, Spain | Nationality: Spanish
• Home: La Coruña, Spain | Email: dogsouldev@protonmail.com | Phone: (+34) 637029755

Languages:
• Mother tongue: Spanish
• English: LISTENING C1, READING C1, WRITING C1, SPOKEN PRODUCTION B2, SPOKEN INTERACTION B2

Driving Licence: Cars B

Hobbies and Interests:
• Sport: Dedicated sports participation has been instrumental in developing core professional competencies reflected in team-first mentality, relentless determination, and strong focus on continuous personal improvement.
• Traveling: Extensive personal experience living and traveling across multiple countries has cultivated high degree of cultural awareness, adaptability, and critical thinking, translating into strong cross-cultural communication skills and ability to exercise sound judgment in complex, diverse, and fast-paced international environments.
• Reading: Technical Literature (IT/Cybersecurity) and Japanese Manga.
• Music: Blues, Rock, and Metal. Playing guitar has sharpened concentration, fine motor skills, and creative problem-solving ability, highlighting capacity for methodical practice, disciplined execution, and continuous mastery.`
    };
  }
}