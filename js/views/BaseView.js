/**
 * Base View Class
 * Follows DRY and SOLID principles (Single Responsibility)
 * All views should extend this class
 */
export class BaseView {
  constructor(model) {
    this.model = model;
  }

  /**
   * Render method to be implemented by child classes
   * @returns {string} HTML string
   */
  render() {
    throw new Error('render() must be implemented by subclass');
  }

  /**
   * Optional lifecycle hook called after render
   * Can be overridden by child classes for post-render logic
   */
  afterRender() {
    // Default: do nothing
  }

  /**
   * Helper to safely escape HTML
   * @param {string} str - String to escape
   * @returns {string} Escaped string
   */
  escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
}
