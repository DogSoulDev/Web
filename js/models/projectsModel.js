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
      return [
        {
          name: 'MangaPortfolio',
          description: 'Portfolio web dibujado a mano, con navegación SPA y estilo manga japonés.',
          url: 'https://github.com/akirayamada/MangaPortfolio',
          stars: 210,
          icon: 'icons/html.svg'
        },
        {
          name: 'OtakuSec',
          description: 'Herramienta de pentesting y defensa digital para artistas y desarrolladores manga.',
          url: 'https://github.com/akirayamada/OtakuSec',
          stars: 180,
          icon: 'icons/pentesting.svg'
        },
        {
          name: 'HandDrawnUI',
          description: 'Framework para crear interfaces web con componentes dibujados a mano.',
          url: 'https://github.com/akirayamada/HandDrawnUI',
          stars: 150,
          icon: 'icons/css.svg'
        }
      ];
    }
      }
    }
