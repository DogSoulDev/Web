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
                    <h1 class="page-title">THE CYBER DEFENDER</h1>
                    
                    <!-- Visual Hero Panel -->
                    <div class="visual-panel">
                        <img src="./img/cv/manga-hero.svg" 
                             alt="Manga Hero" 
                             class="manga-image medium">
                        
                        <div class="speech-bubble">
                            <strong>Javier - Born 1985</strong><br>
                            From hardware geek to ethical hacker!
                        </div>
                    </div>
                    
                    <!-- Manga Character Image -->
                    <div class="visual-panel">
                        <img src="./img/cv/manga-shield.svg" 
                             alt="Blue Team Defender" 
                             class="manga-image small">
                    </div>
                    
                    <!-- Mission Panel -->
                    <div class="visual-panel">
                        <div class="ascii-character">
    ╔════════════════════════════════╗
    ║      BLUE TEAM MISSION         ║
    ╠════════════════════════════════╣
    ║  Defending - Hunting - SOC     ║
    ╚════════════════════════════════╝
                        </div>
                        
                        <div class="speech-bubble">
                            Join Blue Team SOC to defend against cyber threats!
                        </div>
                    </div>
                </div>
                
                <!-- PAGE 2: PROFESSIONAL JOURNEY -->
                <div class="manga-page">
                    <h1 class="page-title">PROFESSIONAL JOURNEY</h1>
                    
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
                    
                    <!-- Computer Hacker Image -->
                    <div class="visual-panel">
                        <img src="./img/cv/manga-tech.svg" 
                             alt="Cybersecurity Work" 
                             class="manga-image medium">
                    </div>
                    
                    <!-- Skills Panel -->
                    <div class="visual-panel">
                        <div class="manga-sfx" style="bottom: 20px; left: 20px;">ZAP!</div>
                        
                        <div class="speech-bubble" style="max-width: 700px;">
                            <strong>ARSENAL:</strong><br><br>
                            SECURITY: SIEM, Threat Detection, Log Analysis, Firewalls<br>
                            SYSTEMS: Linux, Windows Server, Networks, Hardware<br>
                            CODE: Python, Bash, JavaScript, PHP, SQL
                        </div>
                    </div>
                </div>
                
                <!-- DOWNLOAD BUTTON -->
                <div class="download-section">
                    <a href="./docs/CV.pdf" download class="download-btn">
                        DOWNLOAD CV
                    </a>
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
