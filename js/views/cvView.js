import { BaseView } from './BaseView.js';

export class CVView extends BaseView {
    constructor() {
        super();
    }

    async render() {
        return `
            <div class="cv-container">
                <!-- CV content will go here -->
            </div>
        `;
    }

    afterRender() {
        // Animation logic will go here
    }
}
