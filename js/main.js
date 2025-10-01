import { AppController } from './controllers/appController.js';

/**
 * Application Entry Point
 * Initializes the application when DOM is ready
 * Follows KISS principle - simple, clear initialization
 */

/**
 * Initialize the application
 */
async function initApp() {
  try {
    const app = new AppController();
    await app.init();
  } catch (error) {
    console.error('Failed to initialize application:', error);
    // Show error message to user
    document.getElementById('app').innerHTML = `
      <div class="error-container">
        <h2>Failed to load application</h2>
        <p>Please refresh the page to try again.</p>
      </div>
    `;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
