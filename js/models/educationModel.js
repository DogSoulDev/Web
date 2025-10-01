/**
 * Education Model
 * Manages education data
 * Follows Single Responsibility Principle - only handles education data
 */
export class EducationModel {
  /**
   * Get education history
   * @returns {Array<Object>} Array of education objects
   */
  getEducation() {
    return [
      {
        degree: "Master's Degree in Cybersecurity",
        institution: "Campus Internacional de Ciberseguridad - UCAM Universidad Católica San Antonio de Murcia",
        location: "Remote, Spain",
        period: "01/10/2024 – 01/09/2025",
        url: "https://www.ucam.edu/",
        description: "EQF Level 7. Information and Communication Technologies (ICTs): Database and network design and administration, Software and applications development and analysis. Specialized in penetration testing, vulnerability analysis, incident response, malware analysis, cryptography, OSINT, web security, and security in Linux-based architectures."
      },
      {
        degree: "Master's Degree in Software Development",
        institution: "Assembler Institute of Technology",
        location: "Remote, Spain",
        period: "01/03/2022 – 01/08/2023",
        url: "https://www.linkedin.com/school/assemblerinstitute-technology/?originalSubdomain=es",
        description: "EQF Level 6. Inter-disciplinary programmes involving Information and Communication Technologies. Software and applications development and analysis, Database and network design and administration. Full-stack development: HTML, CSS, JavaScript, React, PHP, Laravel, MongoDB, Express, Node.js."
      },
      {
        degree: "Certified in Microcomputing and Networks",
        institution: "Universidad Nebrija",
        location: "Madrid, Spain",
        period: "2016",
        url: "https://www.nebrija.com/",
        description: "EQF Level 6. Inter-disciplinary programmes involving Information and Communication Technologies. Software and applications development and analysis, Database and network design and administration. Computer systems, network administration, technical support."
      }
    ];
  }
}