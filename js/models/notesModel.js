export class NotesModel {
  getNotes() {
    return {
      title: 'Knowledge Network',
      description: 'Hover over nodes to explore my knowledge base',
      // Configuración de la red neuronal
      config: {
        maxDistance: 200,        // Distancia máxima para conectar nodos automáticamente
        nodeSpeed: 0.3,          // Velocidad de movimiento orgánico
        particleSpeed: 0.02,     // Velocidad de partículas en las conexiones
        nodeRadius: 8,           // Radio de los nodos
        connectionOpacity: 0.15, // Opacidad base de las conexiones
        particlesPerConnection: 3
      },
      
      // Nodos con información detallada
      nodes: [
        // === SEGURIDAD ===
        {
          id: 1,
          label: 'Cryptography',
          category: 'Security',
          info: 'Criptografía moderna y primitivas criptográficas',
          content: `
            <h4>🔐 Cifrado Simétrico</h4>
            <ul>
              <li><strong>AES-256:</strong> Estándar actual, 256-bit key</li>
              <li><strong>ChaCha20:</strong> Stream cipher, usado en TLS 1.3</li>
              <li><strong>Blowfish/Twofish:</strong> Algoritmos clásicos</li>
            </ul>
            
            <h4>🔑 Cifrado Asimétrico</h4>
            <ul>
              <li><strong>RSA:</strong> 2048/4096 bits, clave pública/privada</li>
              <li><strong>ECC:</strong> Curvas elípticas, más eficiente</li>
              <li><strong>Ed25519:</strong> Firmas digitales rápidas</li>
            </ul>
            
            <h4>🎲 Funciones Hash</h4>
            <ul>
              <li><strong>SHA-256/SHA-3:</strong> Integridad de datos</li>
              <li><strong>bcrypt/Argon2:</strong> Hashing de contraseñas</li>
              <li><strong>HMAC:</strong> Autenticación de mensajes</li>
            </ul>
            
            <h4>🛠️ Herramientas</h4>
            <p>OpenSSL, GnuPG, HashCat, John the Ripper, CyberChef</p>
          `
        },
        {
          id: 2,
          label: 'Web Security',
          category: 'Security',
          info: 'OWASP Top 10 y seguridad en aplicaciones web',
          content: `
            <h4>⚠️ OWASP Top 10 (2021)</h4>
            <ul>
              <li><strong>A01 Broken Access Control:</strong> IDOR, path traversal</li>
              <li><strong>A02 Cryptographic Failures:</strong> Datos sensibles expuestos</li>
              <li><strong>A03 Injection:</strong> SQL, NoSQL, Command, LDAP injection</li>
              <li><strong>A04 Insecure Design:</strong> Fallas en el diseño</li>
              <li><strong>A05 Security Misconfiguration:</strong> Configuración incorrecta</li>
              <li><strong>A06 Vulnerable Components:</strong> Librerías desactualizadas</li>
              <li><strong>A07 Authentication Failures:</strong> Sesiones débiles</li>
              <li><strong>A08 Data Integrity Failures:</strong> CI/CD inseguros</li>
              <li><strong>A09 Logging Failures:</strong> Sin monitoreo adecuado</li>
              <li><strong>A10 SSRF:</strong> Server-Side Request Forgery</li>
            </ul>
            
            <h4>🎯 Técnicas de Ataque</h4>
            <ul>
              <li><strong>XSS:</strong> Reflected, Stored, DOM-based, mXSS</li>
              <li><strong>CSRF:</strong> Falsificación de peticiones</li>
              <li><strong>XXE:</strong> XML External Entity injection</li>
              <li><strong>Deserialization:</strong> Inyección de objetos</li>
            </ul>
            
            <h4>🛡️ Herramientas</h4>
            <p>Burp Suite Pro, OWASP ZAP, SQLMap, Nikto, WPScan</p>
          `
        },
        {
          id: 3,
          label: 'Network Security',
          category: 'Security',
          info: 'Protocolos, firewalls y seguridad de red',
          content: `
            <h4>🌐 Protocolos Seguros</h4>
            <ul>
              <li><strong>TLS 1.3:</strong> Transport Layer Security</li>
              <li><strong>SSH:</strong> Secure Shell, autenticación de clave pública</li>
              <li><strong>IPsec:</strong> VPN site-to-site</li>
              <li><strong>WireGuard:</strong> VPN moderna, rápida y segura</li>
              <li><strong>DNSSEC:</strong> Seguridad en DNS</li>
            </ul>
            
            <h4>🔥 Firewalls & IDS/IPS</h4>
            <ul>
              <li><strong>iptables/nftables:</strong> Firewall Linux</li>
              <li><strong>pfSense:</strong> Firewall open-source</li>
              <li><strong>Snort/Suricata:</strong> IDS/IPS</li>
              <li><strong>WAF:</strong> ModSecurity, Cloudflare</li>
            </ul>
            
            <h4>🎯 Ataques de Red</h4>
            <p>MITM, ARP Spoofing, DNS Poisoning, DDoS (SYN flood, UDP flood), BGP Hijacking</p>
          `
        },
        {
          id: 4,
          label: 'Pentesting',
          category: 'Security',
          info: 'Metodologías y herramientas de pentesting',
          content: `
            <h4>🔍 Metodologías</h4>
            <ul>
              <li><strong>PTES:</strong> Penetration Testing Execution Standard</li>
              <li><strong>OWASP WSTG:</strong> Web Security Testing Guide</li>
              <li><strong>OSSTMM:</strong> Open Source Security Testing</li>
              <li><strong>NIST SP 800-115:</strong> Technical Guide to Testing</li>
            </ul>
            
            <h4>📋 Fases de Pentesting</h4>
            <ol>
              <li><strong>Reconnaissance:</strong> OSINT, passive/active recon</li>
              <li><strong>Scanning:</strong> Nmap, vulnerability scanning</li>
              <li><strong>Enumeration:</strong> Services, users, shares</li>
              <li><strong>Exploitation:</strong> Metasploit, manual exploits</li>
              <li><strong>Post-Exploitation:</strong> Privilege escalation, persistence</li>
              <li><strong>Reporting:</strong> Documentación detallada</li>
            </ol>
            
            <h4>🛠️ Herramientas Clave</h4>
            <p>Kali Linux, Metasploit Framework, Cobalt Strike, Empire, BloodHound</p>
          `
        },
        
        // === DESARROLLO WEB ===
        {
          id: 5,
          label: 'Frontend',
          category: 'Development',
          info: 'HTML5, CSS3, JavaScript moderno',
          content: `
            <h4>⚛️ Frameworks/Librerías</h4>
            <ul>
              <li><strong>React:</strong> Hooks, Context API, React Router</li>
              <li><strong>Vue 3:</strong> Composition API, Pinia</li>
              <li><strong>Svelte:</strong> Compilador, menos boilerplate</li>
              <li><strong>Angular:</strong> TypeScript, RxJS</li>
            </ul>
            
            <h4>🎨 CSS Moderno</h4>
            <ul>
              <li><strong>Tailwind CSS:</strong> Utility-first</li>
              <li><strong>CSS Grid/Flexbox:</strong> Layouts avanzados</li>
              <li><strong>CSS Variables:</strong> Temas dinámicos</li>
              <li><strong>Animations:</strong> @keyframes, transitions</li>
            </ul>
            
            <h4>📦 Build Tools</h4>
            <p>Vite, Webpack 5, esbuild, Rollup, PostCSS</p>
            
            <h4>✅ Testing</h4>
            <p>Jest, Vitest, Testing Library, Cypress, Playwright</p>
          `
        },
        {
          id: 6,
          label: 'Backend',
          category: 'Development',
          info: 'APIs, servidores y lógica de negocio',
          content: `
            <h4>🟢 Node.js</h4>
            <ul>
              <li><strong>Express:</strong> Minimalista, middlewares</li>
              <li><strong>Fastify:</strong> Alta performance</li>
              <li><strong>NestJS:</strong> TypeScript, arquitectura modular</li>
              <li><strong>Koa:</strong> Async/await nativo</li>
            </ul>
            
            <h4>🐍 Python</h4>
            <ul>
              <li><strong>Flask:</strong> Micro-framework flexible</li>
              <li><strong>Django:</strong> Full-stack, ORM potente</li>
              <li><strong>FastAPI:</strong> Async, validación automática</li>
            </ul>
            
            <h4>📡 APIs</h4>
            <ul>
              <li><strong>REST:</strong> Stateless, HTTP verbs, JSON</li>
              <li><strong>GraphQL:</strong> Queries flexibles, Apollo Server</li>
              <li><strong>WebSockets:</strong> Comunicación bidireccional</li>
              <li><strong>gRPC:</strong> Protocol Buffers, alta performance</li>
            </ul>
            
            <h4>🔐 Autenticación</h4>
            <p>JWT, OAuth 2.0, Passport.js, Sessions, Refresh Tokens</p>
          `
        },
        {
          id: 7,
          label: 'Databases',
          category: 'Development',
          info: 'SQL, NoSQL y gestión de datos',
          content: `
            <h4>🗄️ SQL</h4>
            <ul>
              <li><strong>PostgreSQL:</strong> JSONB, full-text search, replication</li>
              <li><strong>MySQL/MariaDB:</strong> InnoDB, sharding</li>
              <li><strong>SQLite:</strong> Embebida, testing</li>
            </ul>
            
            <h4>📦 NoSQL</h4>
            <ul>
              <li><strong>MongoDB:</strong> Documentos, aggregation pipeline</li>
              <li><strong>Redis:</strong> Key-value, cache, pub/sub</li>
              <li><strong>Cassandra:</strong> Wide-column, alta disponibilidad</li>
              <li><strong>Neo4j:</strong> Grafos, relaciones complejas</li>
            </ul>
            
            <h4>🔗 ORMs</h4>
            <p>Sequelize, TypeORM, Prisma (TypeScript), SQLAlchemy (Python)</p>
            
            <h4>⚡ Optimización</h4>
            <p>Indexes, query optimization, connection pooling, caching strategies</p>
          `
        },
        
        // === INFRAESTRUCTURA ===
        {
          id: 8,
          label: 'DevOps',
          category: 'Infrastructure',
          info: 'CI/CD, automatización y contenedores',
          content: `
            <h4>🐳 Containerización</h4>
            <ul>
              <li><strong>Docker:</strong> Images, volumes, networks, Compose</li>
              <li><strong>Kubernetes:</strong> Pods, services, deployments, Helm</li>
              <li><strong>Container Security:</strong> Scanning, distroless images</li>
            </ul>
            
            <h4>🔄 CI/CD</h4>
            <ul>
              <li><strong>GitHub Actions:</strong> Workflows, matrix builds</li>
              <li><strong>GitLab CI:</strong> Pipelines, auto DevOps</li>
              <li><strong>Jenkins:</strong> Pipelines as code, plugins</li>
              <li><strong>ArgoCD:</strong> GitOps para Kubernetes</li>
            </ul>
            
            <h4>📜 Infrastructure as Code</h4>
            <ul>
              <li><strong>Terraform:</strong> Multi-cloud provisioning</li>
              <li><strong>Ansible:</strong> Configuration management</li>
              <li><strong>CloudFormation:</strong> AWS nativo</li>
            </ul>
            
            <h4>📊 Monitoring</h4>
            <p>Prometheus, Grafana, ELK Stack, Datadog, New Relic</p>
          `
        },
        {
          id: 9,
          label: 'Cloud',
          category: 'Infrastructure',
          info: 'AWS, Azure, GCP y arquitecturas cloud',
          content: `
            <h4>☁️ AWS</h4>
            <ul>
              <li><strong>Compute:</strong> EC2, Lambda, ECS, EKS, Fargate</li>
              <li><strong>Storage:</strong> S3, EBS, EFS, Glacier</li>
              <li><strong>Database:</strong> RDS, DynamoDB, Aurora, ElastiCache</li>
              <li><strong>Network:</strong> VPC, Route53, CloudFront, ALB/NLB</li>
              <li><strong>Security:</strong> IAM, KMS, Secrets Manager, WAF</li>
            </ul>
            
            <h4>🔷 Azure</h4>
            <p>App Service, Azure Functions, Cosmos DB, Azure DevOps</p>
            
            <h4>🟦 Google Cloud Platform</h4>
            <p>Compute Engine, Cloud Run, BigQuery, GKE</p>
            
            <h4>🏗️ Arquitecturas</h4>
            <p>Microservicios, Serverless, Event-driven, Multi-cloud, Hybrid cloud</p>
          `
        },
        {
          id: 10,
          label: 'Linux',
          category: 'Infrastructure',
          info: 'Administración de sistemas Linux',
          content: `
            <h4>🐧 Distribuciones</h4>
            <ul>
              <li><strong>Ubuntu/Debian:</strong> Servidores, APT</li>
              <li><strong>RHEL/CentOS:</strong> Enterprise, YUM/DNF</li>
              <li><strong>Arch Linux:</strong> Rolling release</li>
              <li><strong>Kali Linux:</strong> Pentesting y seguridad</li>
            </ul>
            
            <h4>📝 Shell Scripting</h4>
            <ul>
              <li><strong>Bash:</strong> Automatización, pipelines</li>
              <li><strong>Python:</strong> Scripts complejos</li>
              <li><strong>awk/sed/grep:</strong> Procesamiento de texto</li>
            </ul>
            
            <h4>⚙️ Administración</h4>
            <ul>
              <li><strong>systemd:</strong> Init system, units, timers</li>
              <li><strong>cron:</strong> Tareas programadas</li>
              <li><strong>Networking:</strong> iptables, netstat, ss, tcpdump</li>
              <li><strong>Users/Permisos:</strong> chmod, chown, ACLs</li>
            </ul>
            
            <h4>🔒 Hardening</h4>
            <p>SELinux, AppArmor, fail2ban, unattended-upgrades</p>
          `
        },
        
        // === HERRAMIENTAS ===
        {
          id: 11,
          label: 'Git',
          category: 'Tools',
          info: 'Control de versiones y colaboración',
          content: `
            <h4>🌳 Conceptos Core</h4>
            <ul>
              <li><strong>Branching:</strong> feature, develop, main/master</li>
              <li><strong>Merging:</strong> merge, rebase, squash</li>
              <li><strong>Workflows:</strong> Git Flow, GitHub Flow, Trunk-based</li>
            </ul>
            
            <h4>🛠️ Comandos Avanzados</h4>
            <p>cherry-pick, stash, bisect, reflog, interactive rebase</p>
            
            <h4>🔗 Plataformas</h4>
            <p>GitHub, GitLab, Bitbucket, self-hosted (Gitea, Gogs)</p>
          `
        },
        {
          id: 12,
          label: 'Security Tools',
          category: 'Tools',
          info: 'Herramientas de seguridad y pentesting',
          content: `
            <h4>🔍 Reconnaissance</h4>
            <p>Nmap, Masscan, Shodan, theHarvester, Recon-ng, Amass</p>
            
            <h4>🎯 Exploitation</h4>
            <p>Metasploit, Exploit-DB, searchsploit, Cobalt Strike</p>
            
            <h4>🌐 Web Testing</h4>
            <p>Burp Suite, OWASP ZAP, SQLMap, Nikto, ffuf, Gobuster</p>
            
            <h4>📡 Network</h4>
            <p>Wireshark, tcpdump, Ettercap, Responder, Bettercap</p>
            
            <h4>🔓 Password Cracking</h4>
            <p>Hashcat, John the Ripper, Hydra, Medusa, CrackMapExec</p>
          `
        }
      ]
    };
  }
}

