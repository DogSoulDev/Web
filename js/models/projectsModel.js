// ProjectsModel - Obtiene proyectos públicos de GitHub
export const ProjectsModel = {
  async getProjects() {
    try {
      const response = await fetch('https://api.github.com/users/DogSoulDev/repos');
      if (!response.ok) throw new Error('GitHub API error');
      const repos = await response.json();
      // Solo los repositorios públicos, ordenados por popularidad
      return repos
        .filter(repo => !repo.fork && !repo.private)
        .sort((a, b) => b.stargazers_count - a.stargazers_count)
        .map(repo => ({
          name: repo.name,
          description: repo.description || 'No description',
          url: repo.html_url,
          icon: 'icons/github.svg',
          stars: repo.stargazers_count
        }));
    } catch (e) {
      return [{
        name: 'Error loading projects',
        description: 'Could not fetch GitHub repositories.',
        url: '#',
        icon: 'icons/github.svg',
        stars: 0
      }];
    }
  }
};
