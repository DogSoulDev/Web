import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-manga-container">
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
                    <button class="download-btn" onclick="window.location.href='./docs/CV.pdf'">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="btn-icon">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                        Download CV
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
