import { BaseView } from './BaseView.js';

/**
 * Contact View
 * Follows MVC pattern and extends BaseView for DRY
 * Formspree handles form submission directly (no model needed)
 */
export class ContactView extends BaseView {
  constructor() {
    super(null); // No model needed for contact form
  }

  render() {
    return `
      <div class="section contact">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-manga-container">
          <!-- Social Links with SVG Icons -->
          <div class="contact-social-links">
            <a href="https://github.com/DogSoulDev" target="_blank" class="social-link github-link" title="GitHub">
              <svg class="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" fill="currentColor"/>
              </svg>
              <span class="social-text">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/dogsouldev" target="_blank" class="social-link linkedin-link" title="LinkedIn">
              <svg class="social-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/>
              </svg>
              <span class="social-text">LinkedIn</span>
            </a>
          </div>

          <!-- Contact Form - Manga Style -->
          <div class="contact-form-wrapper">
            <div class="contact-form-header">
              <h3 class="contact-form-title">🔐 Let's Connect!</h3>
              <p class="contact-form-subtitle">Send me a secure message and I'll get back to you soon</p>
            </div>
            
            <!-- Formspree Direct Form -->
            <form action="https://formspree.io/f/mpwydvop" method="POST" class="contact-form">
              <div class="form-group">
                <label for="contact-name" class="form-label">
                  <span class="label-icon">🕵️</span>
                  NAME
                </label>
                <input 
                  type="text" 
                  id="contact-name" 
                  name="name" 
                  class="form-input"
                  placeholder="Your name..." 
                  required
                  maxlength="100"
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">
                  <span class="label-icon">📡</span>
                  EMAIL
                </label>
                <input 
                  type="email" 
                  id="contact-email" 
                  name="email" 
                  class="form-input"
                  placeholder="your.email@example.com" 
                  required
                  maxlength="100"
                />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">
                  <span class="label-icon">🔑</span>
                  MESSAGE
                </label>
                <textarea 
                  id="contact-message" 
                  name="message" 
                  class="form-textarea"
                  placeholder="Write your message here..." 
                  required
                  maxlength="1000"
                  rows="6"
                ></textarea>
              </div>

              <button type="submit" class="contact-submit-btn">
                <span class="btn-text">SEND MESSAGE</span>
                <span class="btn-arrow">→</span>
              </button>
            </form>

            <div class="contact-form-footer">
              <p class="contact-email-direct">
                <span class="email-icon">🛡️</span>
                Or email directly: <a href="mailto:dogsouldev@protonmail.com">dogsouldev@protonmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}