/**
 * Application Configuration
 * Centralized configuration for the entire application
 * Follows DRY principle - single source of truth for constants
 * 
 * @author DogSoulDev (DsD)
 * @copyright Copyright © 2025 DogSoulDev. All rights reserved.
 */

/**
 * Responsive breakpoints
 * Used across CSS and JavaScript
 * Must match CSS custom properties in base.css
 */
export const BREAKPOINTS = {
  MOBILE_SMALL: 360,
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
  DESKTOP_LARGE: 1440
};

/**
 * Spacing scale
 * Matches CSS custom properties
 */
export const SPACING = {
  XS: '0.25rem',
  SM: '0.5rem',
  MD: '1rem',
  LG: '1.5rem',
  XL: '2rem',
  XXL: '3rem'
};

/**
 * Animation durations (in milliseconds)
 */
export const ANIMATION = {
  PROJECT_VIDEO_DURATION: 4000,
  MAIN_CONTENT_DELAY: 500,
  SMOOTH_SCROLL_DURATION: 300,
  FLIP_CARD_DURATION: 800
};

/**
 * Canvas visualization settings
 */
export const CANVAS = {
  MIN_HEIGHT: 600,
  ZOOM_MIN: 0.5,
  ZOOM_MAX: 3,
  ZOOM_SENSITIVITY: 0.1,
  NODE_HOVER_RADIUS_OFFSET: 5
};

/**
 * API endpoints and external URLs
 */
export const API = {
  GITHUB_USER: 'DogSoulDev',
  GITHUB_REPOS_ENDPOINT: 'https://api.github.com/users/DogSoulDev/repos',
  REPOS_PER_PAGE: 6
};

/**
 * Application messages
 */
export const MESSAGES = {
  ERROR: {
    LOAD_APP: 'Failed to load application',
    LOAD_VISUALIZATION: 'Failed to load visualization',
    FETCH_REPOS: 'Failed to fetch repos',
    SECTION_NOT_FOUND: 'Section not found',
    CANVAS_NOT_FOUND: 'Canvas element not found'
  },
  INFO: {
    REFRESH_PAGE: 'Please refresh the page to try again.',
    HOVER_NODES: 'Hover over nodes to see detailed information',
    ZOOM_PAN: 'Mouse wheel to zoom | Drag to pan'
  }
};

/**
 * CSS class names
 * Centralized to avoid typos and make refactoring easier
 */
export const CSS_CLASSES = {
  HIDDEN: 'hidden',
  ACTIVE: 'active',
  IS_PLAYING: 'is-playing',
  IS_ENDED: 'is-ended',
  ERROR_CONTAINER: 'error-container'
};

/**
 * Helper function to check if current viewport matches a breakpoint
 * @param {string} breakpoint - Breakpoint name from BREAKPOINTS
 * @returns {boolean} True if viewport is at or below breakpoint
 */
export function isViewportBelow(breakpoint) {
  return window.innerWidth <= BREAKPOINTS[breakpoint];
}

/**
 * Helper function to get responsive value based on viewport
 * @param {Object} values - Object with breakpoint keys and values
 * @returns {*} Value corresponding to current viewport
 */
export function getResponsiveValue(values) {
  const width = window.innerWidth;
  
  if (width <= BREAKPOINTS.MOBILE_SMALL) return values.mobileSmall || values.mobile || values.default;
  if (width <= BREAKPOINTS.MOBILE) return values.mobile || values.default;
  if (width <= BREAKPOINTS.TABLET) return values.tablet || values.default;
  if (width <= BREAKPOINTS.DESKTOP) return values.desktop || values.default;
  
  return values.desktopLarge || values.desktop || values.default;
}
