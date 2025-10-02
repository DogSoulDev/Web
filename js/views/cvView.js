/**
 * MANGA CV - Authentic Japanese Comic Style
 * Focus: Cybersecurity, Ethical Hacking, IT Technician
 * Style: Real manga panels with speech bubbles
 */

import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
                
                <!-- PAGE 1: THE HERO'S STORY -->
                <div class="manga-page">
                    <h1 class="page-title">The Cyber Defender</h1>
                    
                    <!-- Panel Grid -->
                    <div class="panels-grid">
                        
                        <!-- Panel 1: Introduction -->
                        <div class="panel panel-full">
                            <span class="sfx" style="top: 5px; right: 10px;">WHOOSH!</span>
                            <p class="character">Narrator:</p>
                            <div class="bubble">
                                <span class="manga-icon computer"></span>
                                "Meet Javier - Born 1985. Not your typical kid. While others played with toys, 
                                he played with SCREWDRIVERS and computers!"
                                <span class="manga-icon computer"></span>
                            </div>
                            <div class="bubble">
                                "From breaking electronics as a curious child... to becoming a MASTER of 
                                Cybersecurity and IT Systems! This is his story!"
                            </div>
                        </div>
                        
                        <!-- Panel 2: Master's Degree -->
                        <div class="panel">
                            <span class="sfx sfx-large" style="top: -5px; left: -5px;">BOOM!</span>
                            <p class="character">
                                <span class="manga-icon shield"></span> The Training:
                            </p>
                            <div class="bubble-shout">
                                Master's in Cybersecurity!
                            </div>
                            <p style="font-size: 13px; margin-top: 10px;">
                                <strong>Strategic Blue Team Candidate</strong><br>
                                Threat detection, log analysis, security monitoring, 
                                Linux environments, Python/Bash scripting
                            </p>
                        </div>
                        
                        <!-- Panel 3: Experience Years -->
                        <div class="panel">
                            <p class="character">
                                <span class="manga-icon lock"></span> The Power:
                            </p>
                            <div class="bubble">
                                "10+ years of IT Systems Engineering, Network Architecture, 
                                and Full-Stack Development!"
                            </div>
                            <div class="bubble-thought">
                                "I know how systems are built... which means I know how 
                                they're attacked!"
                            </div>
                        </div>
                        
                        <!-- Panel 4: Mission Statement -->
                        <div class="panel panel-full">
                            <span class="sfx" style="bottom: 10px; right: 10px;">READY!</span>
                            <p class="character">
                                <span class="manga-icon bug"></span> The Mission:
                            </p>
                            <div class="bubble">
                                "My goal? Join a <strong>Blue Team SOC</strong> to defend against cyber threats! 
                                Quick triage, risk mitigation, early threat detection - that's my specialty!"
                            </div>
                            <p style="font-size: 12px; margin-top: 10px; font-style: italic;">
                                "Results-driven. Team-first mentality. High-tempo security operations. LET'S GO!"
                            </p>
                        </div>
                        
                    </div>
                </div>
                
                <!-- PAGE 2: THE JOURNEY -->
                <div class="manga-page">
                    <h1 class="page-title">The Professional Journey</h1>
                    
                    <div class="panels-grid">
                        
                        <!-- Panel 5: Timeline Start -->
                        <div class="panel panel-full">
                            <p class="character">
                                <span class="manga-icon terminal"></span> The Path:
                            </p>
                            <div class="timeline">
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2022</div>
                                    <div class="timeline-title">Master's in Software Development</div>
                                    <div class="timeline-text">
                                        Full-Stack Developer expert: React, PHP, Laravel, Node.js, MongoDB. 
                                        Building secure web architectures and robust applications.
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2018-2022</div>
                                    <div class="timeline-title">Self-Employed Computer Technician</div>
                                    <div class="timeline-text">
                                        Hardware/Software specialist. Microsoldering expert. Network infrastructure 
                                        (LAN/WLAN, servers, racks). Taught advanced diagnostics at professional schools.
                                    </div>
                                </div>
                                
                                <div class="timeline-item">
                                    <div class="timeline-year">2005-2018</div>
                                    <div class="timeline-title">IT Systems Administrator</div>
                                    <div class="timeline-text">
                                        Network security specialist (VPN, firewalls, encryption). System maintenance, 
                                        SQL backups, technical support. Protected critical corporate information.
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                        
                        <!-- Panel 6: Skills -->
                        <div class="panel panel-full">
                            <span class="sfx" style="top: 5px; right: 5px;">POW!</span>
                            <p class="character">
                                <span class="manga-icon shield"></span> The Arsenal:
                            </p>
                            
                            <div class="skills-box">
                                <div class="skill-category">
                                    <span class="manga-icon lock"></span> Cybersecurity & Hacking:
                                </div>
                                <div class="skill-list">
                                    Log Analysis • Security Monitoring • Threat Detection • Risk Mitigation
                                    <br>Network Security • Firewalls • Data Encryption • VPN Configuration
                                </div>
                                
                                <div class="skill-category">
                                    <span class="manga-icon network"></span> IT Systems & Networks:
                                </div>
                                <div class="skill-list">
                                    Linux Environments • Windows Server • Network Architecture (LAN/WLAN)
                                    <br>Hardware Diagnostics • Microsoldering • System Administration
                                </div>
                                
                                <div class="skill-category">
                                    <span class="manga-icon terminal"></span> Programming & Scripting:
                                </div>
                                <div class="skill-list">
                                    Python • Bash • JavaScript • PHP • SQL
                                    <br>React • Node.js • Laravel • MongoDB
                                </div>
                            </div>
                        </div>
                        
                        <!-- Panel 7: Personality -->
                        <div class="panel panel-full">
                            <p class="character">Beyond the Code:</p>
                            <div class="bubble">
                                "When I'm not hunting cyber threats, you'll find me playing guitar 
                                (Blues, Rock, Metal), hitting the gym, or reading manga and 
                                cybersecurity books!"
                            </div>
                            <div class="bubble">
                                "I believe in teamwork, continuous improvement, and defending those 
                                who can't defend themselves. That's the TRUE hacker spirit!"
                            </div>
                        </div>
                        
                    </div>
                </div>
                
                <!-- FINAL PANEL: Download -->
                <div class="download-panel">
                    <span class="sfx sfx-large" style="position: absolute; top: 10px; left: 20px;">GRAB!</span>
                    <span class="sfx sfx-large" style="position: absolute; top: 10px; right: 20px;">NOW!</span>
                    
                    <div class="download-title">
                        <span class="manga-icon shield"></span>
                        Ready to Join Forces?
                        <span class="manga-icon shield"></span>
                    </div>
                    
                    <div class="bubble" style="max-width: 600px; margin: 20px auto;">
                        "Want the full professional CV? Download it below! Let's build a safer 
                        digital world together!"
                    </div>
                    
                    <a href="./docs/CV.pdf" download class="download-btn">
                        DOWNLOAD FULL CV
                    </a>
                    
                    <p style="margin-top: 20px; font-size: 13px;">
                        EMAIL: dogsouldev@protonmail.com | PHONE: (+34) 637029755
                    </p>
                </div>
                
                <!-- The End -->
                <div class="manga-end">
                    <div class="end-box">
                        END
                    </div>
                    <p style="font-size: 14px; margin-top: 15px;">
                        "To be continued in: Season 2 - Blue Team Chronicles!"
                    </p>
                </div>
                
            </div>
        `;
    }

    afterRender() {
        // Simple fade-in animation for panels
        const panels = document.querySelectorAll('.panel');
        panels.forEach((panel, index) => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(20px)';
            panel.style.transition = 'all 0.4s ease';
            
            setTimeout(() => {
                panel.style.opacity = '1';
                panel.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }
}
