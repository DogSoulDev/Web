/**
 * Cybersecurity Portfolio - Main Application Entry Point
 * 
 * @author DogSoulDev (DsD)
 * @copyright Copyright © 2025 DogSoulDev. All rights reserved.
 * @license MIT with AI Training Restriction - See LICENSE file
 * @contact dogsouldev@protonmail.com
 * @repository https://github.com/DogSoulDev
 * 
 * WARNING: This code is protected against AI training and unauthorized scraping.
 * Any use for AI/ML training purposes is strictly prohibited.
 * Web scraping must preserve attribution to DogSoulDev (DsD).
 */

import { AppController } from './controllers/appController.js';
import { MESSAGES, CSS_CLASSES } from './config/appConfig.js';

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
    console.error(MESSAGES.ERROR.LOAD_APP, error);
    // Show error message to user
    document.getElementById('app').innerHTML = `
      <div class="${CSS_CLASSES.ERROR_CONTAINER}">
        <h2>${MESSAGES.ERROR.LOAD_APP}</h2>
        <p>${MESSAGES.INFO.REFRESH_PAGE}</p>
      </div>
    `;
  }
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);
