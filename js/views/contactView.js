export class ContactView {
  constructor() {
    this.setupFormHandler();
  }

  setupFormHandler() {
    // Setup form submission handler after DOM loads
    setTimeout(() => {
      const form = document.getElementById('contact-form');
      if (form) {
        form.addEventListener('submit', this.handleSubmit.bind(this));
      }
    }, 100);
  }

  sanitizeInput(input) {
    // Remove HTML tags and dangerous characters
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML
      .replace(/[<>'"]/g, '')
      .trim();
  }

  validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  async handleSubmit(e) {
    e.preventDefault();
    
    const form = e.target;
    const submitBtn = form.querySelector('.contact-submit-btn');
    const statusMsg = form.querySelector('.form-status');
    
    // Get and sanitize form data
    const name = this.sanitizeInput(form.querySelector('#contact-name').value);
    const email = this.sanitizeInput(form.querySelector('#contact-email').value);
    const message = this.sanitizeInput(form.querySelector('#contact-message').value);
    
    // Validate inputs
    if (!name || name.length < 2) {
      this.showStatus(statusMsg, 'Please enter a valid name', 'error');
      return;
    }
    
    if (!this.validateEmail(email)) {
      this.showStatus(statusMsg, 'Please enter a valid email address', 'error');
      return;
    }
    
    if (!message || message.length < 10) {
      this.showStatus(statusMsg, 'Message must be at least 10 characters', 'error');
      return;
    }
    
    // Prevent multiple submissions
    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING...';
    
    try {
      // Create mailto link with sanitized data
      const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
      const body = encodeURIComponent(
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `\nMessage:\n${message}`
      );
      
      const mailtoLink = `mailto:dogsouldev@protonmail.com?subject=${subject}&body=${body}`;
      
      // Open email client
      window.location.href = mailtoLink;
      
      // Show success message
      this.showStatus(statusMsg, 'Opening your email client...', 'success');
      
      // Reset form after short delay
      setTimeout(() => {
        form.reset();
        submitBtn.disabled = false;
        submitBtn.textContent = 'SEND MESSAGE';
        this.showStatus(statusMsg, '', '');
      }, 3000);
      
    } catch (error) {
      this.showStatus(statusMsg, 'An error occurred. Please try again.', 'error');
      submitBtn.disabled = false;
      submitBtn.textContent = 'SEND MESSAGE';
    }
  }
  
  showStatus(element, message, type) {
    element.textContent = message;
    element.className = `form-status ${type}`;
  }

  render() {
    return `
      <div class="section contact">
        <h2 class="section-title">Contact Me</h2>
        <div class="contact-manga-container">
          <!-- Social Links with Emojis -->
          <div class="contact-social-links">
            <a href="https://github.com/DogSoulDev" target="_blank" class="social-link github-link" title="GitHub">
              <span class="social-emoji">🐙</span>
              <span class="social-text">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/dogsouldev" target="_blank" class="social-link linkedin-link" title="LinkedIn">
              <span class="social-emoji">💼</span>
              <span class="social-text">LinkedIn</span>
            </a>
          </div>

          <!-- Contact Form - Manga Style -->
          <div class="contact-form-wrapper">
            <div class="contact-form-header">
              <h3 class="contact-form-title">📬 Let's Connect!</h3>
              <p class="contact-form-subtitle">Send me a message and I'll get back to you soon</p>
            </div>
            
            <form id="contact-form" class="contact-form" novalidate>
              <div class="form-group">
                <label for="contact-name" class="form-label">
                  <span class="label-icon">👤</span>
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
                  autocomplete="name"
                />
              </div>

              <div class="form-group">
                <label for="contact-email" class="form-label">
                  <span class="label-icon">✉️</span>
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
                  autocomplete="email"
                />
              </div>

              <div class="form-group">
                <label for="contact-message" class="form-label">
                  <span class="label-icon">💬</span>
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

              <div class="form-status"></div>

              <button type="submit" class="contact-submit-btn">
                <span class="btn-text">SEND MESSAGE</span>
                <span class="btn-arrow">→</span>
              </button>
            </form>

            <div class="contact-form-footer">
              <p class="contact-email-direct">
                <span class="email-icon">📧</span>
                Or email directly: <a href="mailto:dogsouldev@protonmail.com">dogsouldev@protonmail.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    `;
  }
}