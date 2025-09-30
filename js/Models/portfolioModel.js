// portfolioModel.js
// Data model for portfolio projects

const portfolioModel = {
  projects: [],
  addProject: function(project) {
    // Validate and add project
    this.projects.push(project);
  }
};
