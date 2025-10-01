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
      content: `Highly accomplished Cybersecurity professional backed by a triple academic foundation: a Master's Degree in Cybersecurity, a Master's in Software Development, and a Higher Technical Degree in IT Systems Management. My technical expertise is complemented by a strong team orientation and relentless determination—qualities forged through dedicated sports participation. I excel at collaborative problem-solving and possess the willpower to achieve challenging objectives in vulnerability analysis and complex risk mitigation. Seeking to leverage this blend of advanced technical skills and a proven team-first, goal-driven mindset to enhance organizational security.

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