import { AboutModel } from '../models/aboutModel.js';
import { BaseView } from './BaseView.js';

/**
 * About View
 * Follows MVC pattern and extends BaseView for DRY
 */
export class AboutView extends BaseView {
  constructor() {
    super(new AboutModel());
  }

  render() {
    const about = this.model.getAbout();
    return `
      <div class="section about">
        <h2 class="section-title">About Me</h2>
        <div class="speech-bubble">
          <p>${this.escapeHtml(about.content).replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `;
  }
}