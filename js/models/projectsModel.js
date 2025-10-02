/**
 * Projects Model
 * Manages project data from GitHub API
 * Follows Single Responsibility Principle - only handles project data fetching
 */
export class ProjectsModel {
  /**
   * Fetch projects from GitHub API
   * @returns {Promise<Array<Object>>} Array of project objects
   */
  async getProjects() {
    try {
      const response = await fetch('https://api.github.com/users/DogSoulDev/repos?sort=updated&per_page=6');
      if (!response.ok) throw new Error('Failed to fetch repos');
      const repos = await response.json();
      return repos.map(repo => ({
        title: repo.name,
        description: repo.description || 'A creative project.',
        url: repo.html_url,
        tech: repo.language ? [repo.language] : ['Various'],
        stars: repo.stargazers_count || 0,
        repoName: repo.full_name // DogSoulDev/repo-name
      }));
    } catch (error) {
      console.error('Error fetching projects:', error);
      return [
        {
          title: 'Manga Web Portfolio',
          description: 'A clean, manga-inspired portfolio site.',
          url: '#',
          tech: ['HTML', 'CSS', 'JavaScript'],
          stars: 0,
          repoName: 'DogSoulDev/Web'
        },
        {
          title: 'Illustrated Blog',
          description: 'Blog with manga illustrations.',
          url: '#',
          tech: ['HTML', 'CSS'],
          stars: 0,
          repoName: 'DogSoulDev/blog'
        }
      ];
    }
  }
}