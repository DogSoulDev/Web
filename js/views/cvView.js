import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="section cv-section">
                <h2 class="section-title">My CV</h2>
                
                <!-- Intro Text -->
                <div class="cv-intro">
                    <p class="intro-text">If you want to hire me, my CV is below.</p>
                </div>
                
                <!-- Main CV Image -->
                <div class="cv-main-image">
                    <img src="./img/cv/a.png" alt="CV Main" class="cv-hero-img">
                </div>
                
                <!-- Manga CV Comic Style -->
                <div class="manga-comic">
                    
                    <!-- Panel 1 -->
                    <div class="manga-panel panel-medium">
                        <img src="./img/cv/a1.png" alt="CV Page 1" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                    <!-- Panel 2 -->
                    <div class="manga-panel panel-medium">
                        <img src="./img/cv/a2.png" alt="CV Page 2" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                    <!-- Panel 3 -->
                    <div class="manga-panel panel-medium">
                        <img src="./img/cv/a3.png" alt="CV Page 3" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                    <!-- Panel 4 -->
                    <div class="manga-panel panel-medium">
                        <img src="./img/cv/a4.png" alt="CV Page 4" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                    <!-- Panel 5 -->
                    <div class="manga-panel panel-medium">
                        <img src="./img/cv/a5.png" alt="CV Page 5" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                </div>
                
                <!-- Download Button Section -->
                <div class="download-section">
                    <a href="./docs/CV.pdf" download="Javier_Fernandez_CV.pdf" class="btn">
                        <span class="left-span"></span>
                        <p class="text-btn">Download CV</p>
                        <p class="hidden-text-btn">Thank you!</p>
                        <span class="right-span"></span>
                    </a>
                </div>
                
            </div>
        `;
    }

    afterRender() {
        // Manga panel animation on scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('panel-visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.manga-panel').forEach(panel => {
            observer.observe(panel);
        });
    }
}
