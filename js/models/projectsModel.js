export class ProjectsModel {
  async getProjects() {
    try {
      const response = await fetch('https://api.github.com/users/DogSoulDev/repos?sort=updated&per_page=6');
      if (!response.ok) throw new Error('Failed to fetch repos');
      const repos = await response.json();
      return repos.map(repo => ({
        title: repo.name,
        description: repo.description || 'No description available.',
        url: repo.html_url,
        tech: repo.language ? [repo.language] : ['Various']
      }));
    } catch (error) {
      console.error('Error fetching projects:', error);
      // Fallback to static data
      return [
        {
          title: 'Manga Portfolio Site',
          description: 'A hand-drawn manga-style portfolio built with pure HTML, CSS, and JS. Features MVC architecture and clean code principles.',
          url: '#',
          tech: ['HTML', 'CSS', 'JavaScript']
        },
        {
          title: 'Illustrated Blog',
          description: 'A blog with manga illustrations, focusing on web development and art.',
          url: '#',
          tech: ['HTML', 'CSS', 'JS']
        }
      ];
    }
  }
}