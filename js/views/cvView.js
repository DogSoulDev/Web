import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
                
                <div class="manga-page">
                    <h1 class="page-title">The Cyber Defender</h1>
                    
                    <div class="manga-panel">
                        <div class="manga-sfx" style="top: 10px; right: 10px;">WHOOSH!</div>
                        <div class="panel-title">The Origin Story</div>
                        <div class="speech-bubble">
                            <strong>Meet Javier - Born 1985</strong><br><br>
                            "Not your typical kid. While others played with toys, I played with SCREWDRIVERS 
                            and computer motherboards!"
                        </div>
                        <p style="margin-top: 15px;">
                            From breaking electronics as a curious child to becoming a master of 
                            Cybersecurity and IT Systems. This is the journey from hardware geek to 
                            ethical hacker.
                        </p>
                    </div>
                    
                    <div class="manga-panel">
                        <div class="manga-sfx" style="top: 10px; right: 10px;">BOOM!</div>
                        <div class="panel-title">The Training Arc</div>
                        
                        <div class="content-section">
                            <h3>Master in Cybersecurity</h3>
                            <p><strong>Strategic Blue Team Candidate</strong></p>
                            <ul>
                                <li>Threat detection and analysis</li>
                                <li>Log analysis and SIEM operations</li>
                                <li>Security monitoring and incident response</li>
                                <li>Linux environments mastery</li>
                                <li>Python/Bash scripting for automation</li>
                            </ul>
                        </div>
                    </div>
                    
                    <div class="manga-panel">
                        <div class="manga-sfx" style="bottom: 10px; right: 10px;">READY!</div>
                        <div class="panel-title">The Mission</div>
                        
                        <div class="speech-bubble">
                            <strong>"My goal? Join a Blue Team SOC to defend against cyber threats!"</strong>
                        </div>
                        
                        <div class="thought-bubble">
                            Quick triage, risk mitigation, early threat detection. 
                            Protecting people who just want their systems to work safely.
                        </div>
                        
                        <p style="margin-top: 15px; font-weight: 700;">
                            Results-driven. Team-first mentality. High-tempo security operations.
                        </p>
                    </div>
                </div>
                
                <div class="manga-page">
                    <h1 class="page-title">Professional Journey</h1>
                    
                    <div class="manga-panel">
                        <div class="panel-title">The Path</div>
                        
                        <div class="timeline">
                            <div class="timeline-item">
                                <div class="timeline-year">2022 - Present</div>
                                <div class="timeline-title">Master in Software Development</div>
                                <div class="timeline-desc">
                                    Full-Stack Developer: React, PHP, Laravel, Node.js, MongoDB. 
                                    Building secure web architectures.
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-year">2018 - 2022</div>
                                <div class="timeline-title">Self-Employed Computer Technician</div>
                                <div class="timeline-desc">
                                    Hardware/Software specialist. Microsoldering expert. Network infrastructure.
                                </div>
                            </div>
                            
                            <div class="timeline-item">
                                <div class="timeline-year">2005 - 2018</div>
                                <div class="timeline-title">IT Systems Administrator</div>
                                <div class="timeline-desc">
                                    Network security specialist. VPN, firewalls, encryption. System maintenance.
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="manga-panel">
                        <div class="manga-sfx" style="top: 10px; right: 10px;">POW!</div>
                        <div class="panel-title">The Arsenal</div>
                        
                        <div class="skills-grid">
                            <div class="skill-category">
                                <h4>Cybersecurity</h4>
                                <div class="skill-list">
                                    Log Analysis<br>
                                    Security Monitoring<br>
                                    Threat Detection<br>
                                    Risk Mitigation<br>
                                    Network Security<br>
                                    VPN & Firewalls<br>
                                    Data Encryption
                                </div>
                            </div>
                            
                            <div class="skill-category">
                                <h4>IT Systems</h4>
                                <div class="skill-list">
                                    Linux Environments<br>
                                    Windows Server<br>
                                    Network Architecture<br>
                                    LAN/WLAN Setup<br>
                                    Hardware Diagnostics<br>
                                    Microsoldering<br>
                                    System Administration
                                </div>
                            </div>
                            
                            <div class="skill-category">
                                <h4>Programming</h4>
                                <div class="skill-list">
                                    Python<br>
                                    Bash<br>
                                    JavaScript<br>
                                    PHP & SQL<br>
                                    React & Node.js<br>
                                    Laravel<br>
                                    MongoDB
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="manga-panel">
                        <div class="panel-title">Beyond the Code</div>
                        
                        <div class="speech-bubble">
                            "When I am not hunting cyber threats, you will find me playing guitar 
                            (Blues, Rock, Metal), hitting the gym, or reading manga and 
                            cybersecurity books!"
                        </div>
                        
                        <div class="thought-bubble">
                            I believe in teamwork, continuous improvement, and defending those 
                            who cannot defend themselves. That is the TRUE hacker spirit!
                        </div>
                    </div>
                </div>
                
                <div class="download-section">
                    <div class="manga-sfx" style="top: 15px; left: 20px;">GRAB!</div>
                    <div class="manga-sfx" style="top: 15px; right: 20px;">NOW!</div>
                    
                    <div class="download-title">Ready to Join Forces?</div>
                    
                    <div class="speech-bubble" style="max-width: 600px; margin: 20px auto;">
                        Want the full professional CV? Download it below! 
                        Let us build a safer digital world together!
                    </div>
                    
                    <a href="./docs/CV.pdf" download class="download-btn">
                        DOWNLOAD FULL CV
                    </a>
                    
                    <div class="contact-info">
                        <strong>Email:</strong> dogsouldev@protonmail.com<br>
                        <strong>Phone:</strong> (+34) 637 029 755
                    </div>
                </div>
                
                <div class="manga-end">
                    <div class="end-box">END</div>
                    <p style="margin-top: 15px; font-size: 14px;">
                        "To be continued in: Season 2 - Blue Team Chronicles!"
                    </p>
                </div>
                
            </div>
        `;
    }

    afterRender() {
        const panels = document.querySelectorAll('.manga-panel');
        panels.forEach((panel, index) => {
            setTimeout(() => {
                panel.style.opacity = '0';
                panel.style.transform = 'translateY(20px)';
                panel.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                
                setTimeout(() => {
                    panel.style.opacity = '1';
                    panel.style.transform = 'translateY(0)';
                }, 50);
            }, index * 150);
        });
    }
}
