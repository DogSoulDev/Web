/**
 * Experience Model
 * Manages professional experience data
 * Follows Single Responsibility Principle - only handles experience data
 */
export class ExperienceModel {
  /**
   * Get professional experience
   * @returns {Array<Object>} Array of experience objects
   */
  getExperience() {
    return [
      {
        title: "Master's in Software Development (MSD)",
        company: 'Assembler Institute of Technology - Remote, Spain',
        period: '01/01/2022 – 12/11/2022',
        description: 'Skilled and versatile Full-Stack Software Developer with proven ability to design, develop, and deploy comprehensive software solutions across various platforms, tailored to client specifications. Expert in building robust web architectures, crafting intuitive user experiences (UX), and managing complex server-side logic and databases. Proficient in modern technologies including HTML, CSS, JavaScript, React, PHP, Laravel, MongoDB, Express, and Node.js. Adept at leading projects from initial concept through to successful completion, consistently ensuring cross-platform optimization, seamless API development, and rigorous testing. Committed to collaborating effectively with interdisciplinary teams, translating both technical requirements and end-user needs into high-quality, innovative solutions, while continuously staying abreast of the latest industry advancements and emerging technologies.'
      },
      {
        title: 'Self-Employed Computer Technician',
        company: 'Ponferrada, Spain',
        period: '2018 – 2022',
        description: 'Experienced technician and instructor with proven track record in comprehensive assembly, repair, and maintenance of computer systems, servers, and network infrastructure (Hardware & Software). Specialized in microsoldering and detailed performance analysis. Managed store operations, resolving customer and operational incidents, and handling all aspects of invoicing and accounting. Drove business strategy by preparing detailed reports based on key performance indicators (KPIs). Oversaw inventory management, supplier meetings, and provided excellent customer service. As instructor, provided instruction on advanced computer system diagnostics and repair, covering everything from fault detection to component-level troubleshooting, in collaboration with Formación Profesional - Junta de Castilla y León (JCYL) and Ponferrada IES Virgen de la Encina. Taught essential skills in advanced system assembly, basic electrical knowledge, and network systems, including LAN/WLAN setup, server configuration, rack assembly, and network protocols.'
      },
      {
        title: 'IT Systems Administrator / Technical Support Specialist',
        company: 'Valencia - Madrid, Spain',
        period: '2005 – 2018',
        description: 'Results-driven IT professional with comprehensive skill set in managing and maintaining full range of IT systems, infrastructure, and user support. Expert in ensuring seamless business operations and maximizing uptime through proactive diagnostics, repair, and maintenance of computers, servers, and peripherals. Specializes in designing, installing, and securing robust network architectures (LAN, VPN, WLAN), complemented by expertise in implementing advanced security protocols, firewalls, and data encryption to protect critical corporate information. Proficient in executing system upgrades, software installations, and meticulous troubleshooting across diverse operating systems and business applications. Committed to delivering exceptional first and second-level technical support, resolving hardware, software, and network issues efficiently to ensure high user satisfaction. Additionally, possesses capabilities in web development for e-commerce platforms (WordPress, Magento) and strong command of creating and implementing robust data backup and recovery strategies, including critical SQL database backups, alongside meticulous IT asset management and documentation.'
      }
    ];
  }
}