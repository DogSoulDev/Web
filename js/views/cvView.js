import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
                
                <!-- PAGE 1: THE CYBER DEFENDER -->
                <div class="manga-page">
                    <h1 class="page-title">⚡ The Cyber Defender ⚡</h1>
                    
                    <!-- Visual Hero Panel -->
                    <div class="visual-panel">
                        <div class="manga-sfx" style="top: 20px; left: 20px;">BOOM!</div>
                        <div class="manga-sfx" style="top: 20px; right: 20px;">POW!</div>
                        
                        <div class="ascii-character">
    ██████╗██╗   ██╗██████╗ ███████╗██████╗ 
   ██╔════╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔══██╗
   ██║      ╚████╔╝ ██████╔╝█████╗  ██████╔╝
   ██║       ╚██╔╝  ██╔══██╗██╔══╝  ██╔══██╗
   ╚██████╗   ██║   ██████╔╝███████╗██║  ██║
    ╚═════╝   ╚═╝   ╚═════╝ ╚══════╝╚═╝  ╚═╝
                        </div>
                        
                        <div class="speech-bubble">
                            <strong>Javier - Born 1985</strong><br>
                            "From hardware geek to ethical hacker!"
                        </div>
                    </div>
                    
                    <!-- Mission Panel -->
                    <div class="visual-panel">
                        <div class="manga-icon-large shield"></div>
                        
                        <div class="speech-bubble">
                            <strong>MISSION: Join Blue Team SOC</strong><br>
                            Defending systems. Hunting threats. Protecting people.
                        </div>
                    </div>
                </div>
                
                <!-- PAGE 2: PROFESSIONAL JOURNEY -->
                <div class="manga-page">
                    <h1 class="page-title">🚀 Professional Journey 🚀</h1>
                    
                    <!-- Visual Timeline Panel -->
                    <div class="visual-panel">
                        <div class="manga-sfx" style="top: 10px; right: 20px;">READY!</div>
                        
                        <div class="ascii-character">
    ┌─────────────────────────────────────┐
    │  2005 ──▶ 2018 ──▶ 2022 ──▶ NOW   │
    │   IT      TECH      DEV      SOC    │
    └─────────────────────────────────────┘
                        </div>
                        
                        <div class="timeline-compact">
                            <div class="timeline-box">
                                <div class="timeline-year">2005-18</div>
                                <div class="timeline-title">IT Admin</div>
                            </div>
                            <div class="timeline-box">
                                <div class="timeline-year">2018-22</div>
                                <div class="timeline-title">Tech Expert</div>
                            </div>
                            <div class="timeline-box">
                                <div class="timeline-year">2022+</div>
                                <div class="timeline-title">Developer</div>
                            </div>
                        </div>
                    </div>
                    
                    <!-- Skills Panel -->
                    <div class="visual-panel">
                        <div class="manga-sfx" style="bottom: 20px; left: 20px;">ZAP!</div>
                        
                        <div class="skills-compact">
                            <div class="skill-box">
                                <h3>🔒 Security</h3>
                                <p>
                                    SIEM<br>
                                    Threat Detection<br>
                                    Log Analysis<br>
                                    Firewalls
                                </p>
                            </div>
                            
                            <div class="skill-box">
                                <h3>💻 Systems</h3>
                                <p>
                                    Linux<br>
                                    Windows Server<br>
                                    Networks<br>
                                    Hardware
                                </p>
                            </div>
                            
                            <div class="skill-box">
                                <h3>⚙️ Code</h3>
                                <p>
                                    Python<br>
                                    Bash<br>
                                    JavaScript<br>
                                    PHP/SQL
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <!-- DOWNLOAD BUTTON -->
                <div class="download-section">
                    <div class="manga-sfx" style="top: 20px; left: 30px; font-size: 50px;">GRAB!</div>
                    <div class="manga-sfx" style="top: 20px; right: 30px; font-size: 50px;">NOW!</div>
                    
                    <div class="speech-bubble" style="margin-bottom: 30px;">
                        <strong>Want the full story?</strong><br>
                        Download the complete CV!
                    </div>
                    
                    <a href="./docs/CV.pdf" download class="download-btn">
                        📥 DOWNLOAD CV 📥
                    </a>
                    
                    <p style="margin-top: 30px; font-size: 14px; font-weight: 600;">
                        📧 dogsouldev@protonmail.com | 📞 (+34) 637 029 755
                    </p>
                </div>
                
            </div>
        `;
    }

    afterRender() {
        const panels = document.querySelectorAll('.visual-panel');
        panels.forEach((panel, index) => {
            setTimeout(() => {
                panel.style.opacity = '0';
                panel.style.transform = 'scale(0.9)';
                panel.style.transition = 'all 0.6s ease';
                
                setTimeout(() => {
                    panel.style.opacity = '1';
                    panel.style.transform = 'scale(1)';
                }, 50);
            }, index * 200);
        });
    }
}
