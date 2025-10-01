/**
 * Notes Model
 * Manages cybersecurity knowledge network data
 * Follows Single Responsibility Principle - only handles notes/knowledge data
 */
export class NotesModel {
  /**
   * Get notes configuration and data for neural network visualization
   * @returns {Object} Notes configuration with nodes and settings
   */
  getNotes() {
    return {
      title: 'Cybersecurity Knowledge Network',
      description: 'Interactive neural network of cybersecurity concepts - Hover over nodes to explore',
      // Configuración de la red neuronal
      config: {
        maxDistance: 250,        // Distancia máxima para conectar nodos automáticamente
        nodeSpeed: 0.5,          // Velocidad de movimiento orgánico
        particleSpeed: 0.03,     // Velocidad de partículas en las conexiones
        nodeRadius: 6,           // Radio de los nodos
        connectionOpacity: 0.2,  // Opacidad base de las conexiones
        particlesPerConnection: 2
      },
      
      // Nodos con información detallada - Cada punto es un concepto único
      nodes: [
        { id: 1, label: 'CIA Triad', category: 'Foundational Concept', info: 'Confidentiality, Integrity, Availability: The fundamental model for developing security policy.' },
        { id: 2, label: 'Non-Repudiation', category: 'Foundational Concept', info: 'The assurance that a party cannot successfully deny the authenticity of a message or action. (Often considered the fourth principle).' },
        { id: 3, label: 'Risk Management', category: 'Governance', info: 'The process of identifying, assessing, and controlling threats to an organization\'s capital and earnings. Key terms: Risk Appetite, Residual Risk, Impact, Likelihood.' },
        { id: 4, label: 'Adversarial Thinking', category: 'Strategic Mindset', info: 'The essential mindset in security; reasoning about systems and defenses assuming a capable, malicious actor.' },
        { id: 5, label: 'Defense in Depth', category: 'Strategy', info: 'A strategy that places multiple, redundant layers of security controls throughout an IT system.' },
        { id: 6, label: 'Threat Modeling', category: 'Methodology', info: 'A process used to identify, communicate, and understand threats and mitigations within a system (e.g., using STRIDE methodology).' },
        { id: 7, label: 'Security Controls', category: 'Architecture', info: 'The classification of safeguards: Administrative (policies), Technical (software/hardware), and Physical (locks/guards).' },
        { id: 8, label: 'NIST CSF', category: 'Framework', info: 'National Institute of Standards and Technology Cyber Security Framework: Standards and best practices to manage cybersecurity risk.' },
        { id: 9, label: 'ISO/IEC 27001', category: 'Standard', info: 'International standard for an Information Security Management System (ISMS), covering requirements for its establishment and maintenance.' },
        { id: 10, label: 'MITRE ATT&CK', category: 'Framework', info: 'Adversarial Tactics, Techniques, and Common Knowledge: A knowledge base of adversary behavior used for threat hunting.' },
        { id: 11, label: 'GDPR/HIPAA/PCI DSS', category: 'Regulation/Standard', info: 'Data Regulations: Key compliance standards for data privacy, healthcare data, and credit card data, respectively.' },
        { id: 12, label: 'AAA', category: 'Access Control', info: 'Authentication, Authorization, and Accounting: The framework for controlling user access, permissions, and tracking actions.' },
        { id: 13, label: 'IAM', category: 'Technology', info: 'Identity and Access Management: Technologies and frameworks for managing digital identities and controlling access to resources.' },
        { id: 14, label: 'Zero Trust', category: 'Architecture', info: 'A security model that requires strict identity verification for every person and device accessing resources, regardless of location ("never trust, always verify").' },
        { id: 15, label: 'Least Privilege', category: 'Access Control', info: 'Principle of Least Privilege: A core tenet that a user or process should only have the minimum permissions necessary to perform its function.' },
        { id: 16, label: 'MFA', category: 'Technology', info: 'Multi-Factor Authentication: A security system requiring two or more verification inputs (e.g., password + one-time code).' },
        { id: 17, label: 'OSI Model', category: 'Networking', info: 'Open Systems Interconnection Model: The conceptual framework for network communication (must know all 7 layers).' },
        { id: 18, label: 'TCP/IP', category: 'Protocol Suite', info: 'Transmission Control Protocol/Internet Protocol: The protocol suite for the internet.' },
        { id: 19, label: 'Subnetting/CIDR', category: 'Networking', info: 'Classless Inter-Domain Routing: The method used to allocate IP addresses and route IP packets efficiently.' },
        { id: 20, label: 'BGP', category: 'Protocol', info: 'Border Gateway Protocol: The exterior gateway protocol used to exchange routing information between autonomous systems (AS) on the internet.' },
        { id: 21, label: 'VPN', category: 'Technology', info: 'Virtual Private Network: A technology that creates a secure, encrypted connection over a less secure network. Key protocols: IPsec, WireGuard.' },
        { id: 22, label: 'ACL', category: 'Access Control', info: 'Access Control List: A list of permissions associated with a network object (e.g., firewall rule sets).' },
        { id: 23, label: 'SIEM', category: 'Technology', info: 'Security Information and Event Management: Aggregates, analyzes, and correlates log and event data for real-time threat detection.' },
        { id: 24, label: 'SOAR', category: 'Technology', info: 'Security Orchestration, Automation, and Response: Tools that automate security operations, incident handling, and response workflows.' },
        { id: 25, label: 'XDR', category: 'Technology', info: 'Extended Detection and Response: A unified security platform correlating data across multiple layers (endpoint, cloud, network, email).' },
        { id: 26, label: 'IDS/IPS', category: 'Technology', info: 'Intrusion Detection/Prevention System: Tools that monitor network traffic for malicious activity and either alert (IDS) or block (IPS).' },
        { id: 27, label: 'EDR', category: 'Technology', info: 'Endpoint Detection and Response: A solution that continuously monitors end-user devices to detect and respond to threats.' },
        { id: 28, label: 'DLP', category: 'Technology', info: 'Data Loss Prevention: Tools and processes designed to ensure sensitive data is not lost, misused, or accessed by unauthorized users.' },
        { id: 29, label: 'NGFW', category: 'Technology', info: 'Next-Generation Firewall: A third-generation firewall that includes advanced features like application awareness and deep packet inspection.' },
        { id: 30, label: 'CSIRT/IR', category: 'Operations', info: 'Computer Security Incident Response Team: The organized approach to addressing and managing the aftermath of a security breach.' },
        { id: 31, label: 'TLS/SSL', category: 'Protocol', info: 'Transport Layer Security / Secure Sockets Layer: Cryptographic protocols that provide secure communication over a network.' },
        { id: 32, label: 'PKI', category: 'Cryptography', info: 'Public Key Infrastructure: A system for creating, managing, distributing, and revoking digital certificates.' },
        { id: 33, label: 'CA/CRL/OCSP', category: 'PKI', info: 'Certificate Authority / Certificate Revocation List / Online Certificate Status Protocol: Components of PKI used to issue and check the validity of digital certificates.' },
        { id: 34, label: 'Symmetric/Asymmetric', category: 'Cryptography', info: 'Symmetric (e.g., AES): Uses one shared key. Asymmetric (e.g., RSA): Uses a public/private key pair.' },
        { id: 35, label: 'Hashing', category: 'Cryptography', info: 'A one-way function (e.g., SHA-256, Bcrypt) to generate a fixed-size string, used for password storage and data integrity.' },
        { id: 36, label: 'Forward Secrecy', category: 'Cryptography', info: 'A property of key agreement protocols (e.g., ECDHE) that ensures a session key derived from a set of long-term keys will not be compromised if one of the long-term keys is later compromised.' },
        { id: 37, label: 'HSM', category: 'Technology', info: 'Hardware Security Module: A physical computing device that safeguards and manages digital keys for strong authentication.' },
        { id: 38, label: 'Quantum Crypto', category: 'Future Security', info: 'The study of applying quantum mechanics to cryptography, including the threat of Shor\'s Algorithm and the development of Post-Quantum Cryptography (PQC).' },
        { id: 39, label: 'SDLC/SDL', category: 'Process', info: 'Software Development Life Cycle / Security Development Lifecycle: Integrating security requirements and testing from the earliest phases of development (Shift Left).' },
        { id: 40, label: 'DevSecOps', category: 'Process', info: 'Integrating automated security practices at every phase of the software development and operations pipeline.' },
        { id: 41, label: 'SAST/DAST/IAST', category: 'Testing', info: 'Static, Dynamic, and Interactive Application Security Testing: Techniques for analyzing application security. SAST analyzes code, DAST tests the running app, IAST combines both.' },
        { id: 42, label: 'Microservices', category: 'Architecture', info: 'Architectural style where an application is a collection of smaller services. Containers (Docker) and Orchestration (Kubernetes) are key enabling technologies.' },
        { id: 43, label: 'IaC', category: 'DevOps', info: 'Infrastructure as Code: Managing and provisioning infrastructure through machine-readable definition files (e.g., Terraform).' },
        { id: 44, label: 'XSS', category: 'Web Attacks', info: 'Cross-Site Scripting: An injection attack where malicious scripts are injected into trusted websites. Types: Stored, Reflected, DOM-based.' },
        { id: 45, label: 'SQLi', category: 'Web Attacks', info: 'SQL Injection: A code injection technique that manipulates database queries.' },
        { id: 46, label: 'CSRF', category: 'Web Attacks', info: 'Cross-Site Request Forgery: An attack that forces an end user to execute unwanted actions on a web application where they are currently authenticated.' },
        { id: 47, label: 'CSP', category: 'Web Security', info: 'Content Security Policy: A key HTTP response header used to prevent XSS and data injection attacks by defining which dynamic resources are allowed to load.' },
        { id: 48, label: 'JWT', category: 'Protocol', info: 'JSON Web Token: A standard for securely transmitting information between parties as a JSON object, used for authentication.' },
        { id: 49, label: 'Buffer Overflow', category: 'Exploitation', info: 'Buffer Overflow: A classic vulnerability where a buffer is written past its boundary. ROP (Return-Oriented Programming): An advanced exploitation technique to bypass defenses like DEP/NX.' },
        { id: 50, label: 'Bash Scripting', category: 'Automation/Linux', info: 'Writing automation scripts using Bash (the default Linux shell) to automate system administration and security tasks.' },
        { id: 51, label: 'File Permissions', category: 'Linux Core', info: 'Managing rwx (read, write, execute) permissions and file ownership. SetUID/SetGID flags are critical security concepts.' },
        { id: 52, label: 'Grep/Sed/Awk', category: 'Log Analysis', info: 'Essential command-line utilities for searching, filtering, and manipulating text/log files. (Crucial for log analysis).' },
        { id: 53, label: 'SELinux/AppArmor', category: 'Linux Security', info: 'Mandatory Access Control (MAC) security policies for Linux that enforce granular rules for processes and applications.' },
        { id: 54, label: 'Nmap', category: 'Kali Tool', info: 'Network Mapper: The industry-standard tool for network discovery, port scanning, and security auditing.' },
        { id: 55, label: 'Metasploit', category: 'Kali Tool', info: 'An exploitation framework used to develop, test, and execute exploit code. Meterpreter is the advanced payload.' },
        { id: 56, label: 'Wireshark', category: 'Kali Tool', info: 'A network protocol analyzer for deep inspection of live network traffic (packet sniffing).' },
        { id: 57, label: 'Burp Suite', category: 'Kali Tool', info: 'The leading integrated platform for performing security testing of web applications (Proxy, Repeater, Scanner).' },
        { id: 58, label: 'Pivoting', category: 'Attack/Technique', info: 'The technique of using a compromised system to attack other systems on the same internal network that were previously inaccessible.' },
        { id: 59, label: 'Privilege Escalation', category: 'Attack/Technique', info: 'Exploiting a vulnerability or misconfiguration to gain higher access rights on a system (e.g., from user to root/administrator).' },
        { id: 60, label: 'Static/Dynamic Analysis', category: 'Malware Analysis', info: 'Static: Analyzing malware code without executing it (e.g., using IDA Pro, Ghidra). Dynamic: Running the malware in an isolated Sandbox or VM to monitor its behavior.' },
        { id: 61, label: 'Disassembler', category: 'RE Tools', info: 'Tools that convert machine code into assembly language (Disassembler) or high-level code (Decompiler).' },
        { id: 62, label: 'Debugger', category: 'RE Tools', info: 'Tools used to execute a program step-by-step, inspect memory, and monitor register values for runtime analysis.' },
        { id: 63, label: 'C2', category: 'Threat Infrastructure', info: 'Command and Control: The infrastructure or server an attacker uses to send commands to and receive data from compromised systems.' },
        { id: 64, label: 'PE Header', category: 'File Format', info: 'Portable Executable Header: The Windows file structure containing necessary information for the OS loader (crucial for Windows malware analysis).' },
        { id: 65, label: 'Packing/Obfuscation', category: 'Evasion', info: 'Techniques used by malware to conceal its true code and frustrate analysis by compressing or encrypting the payload.' },
        { id: 66, label: 'DGA', category: 'Evasion', info: 'Domain Generation Algorithm: A technique used by malware to generate a large number of potential C2 domains periodically, making network blocking difficult.' },
        { id: 67, label: 'IOC', category: 'Intelligence', info: 'Indicator of Compromise: Pieces of forensic data (file hashes, IP addresses, domain names) that indicate a system has been breached.' },
        { id: 68, label: 'YARA', category: 'Malware Analysis', info: 'A pattern-matching tool used to identify and classify malware samples based on textual or binary signatures.' },
        { id: 69, label: 'Memory Forensics', category: 'Forensics', info: 'The analysis of volatile memory (RAM) captured from a running computer system to extract artifacts, crucial for analyzing fileless malware and modern intrusions.' },
        { id: 70, label: 'OSINT', category: 'Intelligence', info: 'Open Source Intelligence: Collection and analysis of data gathered from publicly available sources (internet, social media, public records).' },
        { id: 71, label: 'Shodan/Censys', category: 'OSINT/Scanning', info: 'Search engines used to find and index internet-connected devices, ports, and services for reconnaissance.' },
        { id: 72, label: 'TTPs', category: 'Intelligence', info: 'Tactics, Techniques, and Procedures: The behavior patterns of a threat actor, categorized in frameworks like MITRE ATT&CK.' },
        { id: 73, label: 'IaaS/PaaS/SaaS', category: 'Cloud Models', info: 'Infrastructure, Platform, Software as a Service: The three main cloud service models.' },
        { id: 74, label: 'Shared Responsibility', category: 'Cloud Security', info: 'Defines the security tasks handled by the Cloud Service Provider (CSP) and those handled by the customer (crucial for cloud security).' },
        { id: 75, label: 'CASB', category: 'Technology', info: 'Cloud Access Security Broker: Software that sits between cloud users and cloud applications to enforce security policies.' },
        { id: 76, label: 'Serverless', category: 'Architecture', info: 'A cloud-native development model where the cloud provider manages the server infrastructure, and the developer deploys code (AWS Lambda).' },
        { id: 77, label: 'OT/ICS', category: 'Infrastructure Security', info: 'Operational Technology / Industrial Control Systems: Networked systems that monitor and control physical infrastructure (e.g., SCADA, power plants, manufacturing).' }
      ]
    };
  }
}
