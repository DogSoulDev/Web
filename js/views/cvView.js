import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
                
                <!-- Intro Text -->
                <div class="cv-intro">
                    <p class="intro-text">If you want to hire me, my CV is below.</p>
                </div>
                
                <!-- Manga CV Comic Style -->
                <div class="manga-comic">
                    
                    <!-- Panel 1 -->
                    <div class="manga-panel panel-large">
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
                    <div class="manga-panel panel-large">
                        <img src="./img/cv/a4.png" alt="CV Page 4" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                    <!-- Panel 5 -->
                    <div class="manga-panel panel-full">
                        <img src="./img/cv/a5.png" alt="CV Page 5" class="manga-img">
                        <div class="panel-border"></div>
                    </div>
                    
                </div>
                
                <!-- Download Button Section -->
                <div class="download-section">
                    <button class="btn" onclick="window.location.href='./docs/CV.pdf'">
                        <span class="left-span"></span>
                        <p class="text-btn">Download CV</p>
                        <p class="hidden-text-btn">Thank you!</p>
                        <span class="right-span"></span>
                    </button>
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
