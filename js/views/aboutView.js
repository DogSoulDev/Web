import { AboutModel } from '../models/aboutModel.js';

export class AboutView {
  constructor() {
    this.model = new AboutModel();
  }

  render() {
    const about = this.model.getAbout();
    return `
      <div class="section about">
        <h2 class="section-title">About Me</h2>
        <div class="speech-bubble">
          <p>${about.content.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `;
  }
}