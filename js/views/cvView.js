/**
 * MANGA CV VIEW - SHORT VERSION (2 PAGES MAX)
 * Simple humor • B&W style • English only
 */

import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
                
                <!-- ==========================================
                     PAGE 1: WHO AM I?
                     ========================================== -->
                <div class="manga-page">
                    <h1 class="page-title">The Tech Geek</h1>
                    <p class="page-subtitle">Born 1985 • Hardware Hacker • Ethical Defender</p>
                    
                    <span class="manga-sfx sfx-top-right">BOOM!</span>
                    
                    <!-- Origin Story -->
                    <div class="manga-panel">
                        <h3 class="panel-title">⚡ The Origin Story</h3>
                        <div class="speech-bubble">
                            "1985: A tech geek was born! My first victim? A computer. 
                            My weapon? A screwdriver. My defense? 'I was just curious!' 
                            Spoiler: I became an IT expert."
                        </div>
                        <p class="panel-text">
                            <strong>Childhood superpower:</strong> Breaking electronics to understand them.<br>
                            <strong>Result:</strong> Became the neighborhood's tech support at age 10!
                        </p>
                    </div>

                    <!-- Skills -->
                    <h2 class="section-title">💪 Skills Arsenal</h2>
                    <div class="skills-grid">
                        <div class="skill-item">HTML/CSS/JS</div>
                        <div class="skill-item">React • Vue • Node</div>
                        <div class="skill-item">PHP • Python</div>
                        <div class="skill-item">Cybersecurity</div>
                        <div class="skill-item">Ethical Hacking</div>
                        <div class="skill-item">UI/UX Design</div>
                    </div>

                    <!-- Education -->
                    <h2 class="section-title">📚 Training Arc</h2>
                    <div class="timeline-item">
                        <div class="timeline-year">2016</div>
                        <div class="timeline-content">
                            <div class="timeline-title">FP Superior DAM</div>
                            <div class="timeline-desc">
                                Multiplatform App Development - Learned to code properly 
                                (no more "it works on my machine" excuses!)
                            </div>
                        </div>
                    </div>

                    <span class="page-number">1/2</span>
                </div>

                <!-- ==========================================
                     PAGE 2: WHAT I DO?
                     ========================================== -->
                <div class="manga-page">
                    <h1 class="page-title">The Professional</h1>
                    <p class="page-subtitle">2018-Present • Dogsoul Digital</p>
                    
                    <span class="manga-sfx sfx-top-left">CODE!</span>
                    
                    <!-- Work -->
                    <div class="manga-panel">
                        <h3 class="panel-title">💼 What I Actually Do</h3>
                        <p class="panel-text">
                            <strong>Fullstack Developer • Designer • Ethical Hacker</strong><br><br>
                            • Build apps from scratch (frontend + backend)<br>
                            • Design interfaces that don't make users cry<br>
                            • Hunt security bugs before bad guys do<br>
                            • Fix things I break (and things others break)<br>
                            • Drink unhealthy amounts of coffee ☕
                        </p>
                    </div>

                    <!-- Mission -->
                    <div class="manga-panel">
                        <h3 class="panel-title">🛡️ My Mission</h3>
                        <div class="speech-bubble">
                            "I want to join the Blue Team - defending people who can't 
                            defend themselves from cyber threats! Because not everyone 
                            knows what 'phishing' means (hint: it's not about fish 🐟)"
                        </div>
                    </div>

                    <!-- Personality -->
                    <h2 class="section-title">🤘 Beyond The Code</h2>
                    <p class="panel-text">
                        <strong>Music:</strong> Rock & Metal 🎸<br>
                        <strong>Sports:</strong> American Football 🏈 • Rugby 🏉 • Fitness 💪<br>
                        <strong>Hobbies:</strong> Cooking 🍳 • Traveling 🌍 • Trying new foods<br>
                        <strong>Reading:</strong> Tech books & Japanese manga (humor style!)<br>
                        <strong>Core belief:</strong> All humans are equal. Period. ✊
                    </p>

                    <!-- Download -->
                    <div class="download-section">
                        <h2 style="margin-top:0;">Want the Full Story?</h2>
                        <p style="margin: 15px 0;">
                            Download my professional CV (the boring version without manga panels 😅)
                        </p>
                        <a href="./docs/CV.pdf" download class="download-btn">
                            ⚡ Download CV ⚡
                        </a>
                    </div>

                    <!-- The End -->
                    <div class="manga-end">
                        <div class="end-circle">END</div>
                        <p style="margin-top: 15px; font-size: 14px;">
                            "To be continued... Will YOU be part of the next chapter?"
                        </p>
                    </div>

                    <span class="page-number">2/2</span>
                </div>

            </div>
        `;
    }

    afterRender() {
        // Simple animation
        const panels = document.querySelectorAll('.manga-panel');
        panels.forEach((panel, index) => {
            panel.style.opacity = '0';
            panel.style.transform = 'translateY(20px)';
            panel.style.transition = 'all 0.5s ease';
            
            setTimeout(() => {
                panel.style.opacity = '1';
                panel.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }
}
