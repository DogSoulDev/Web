// BlogModel - Datos de la sección Blog
export const BlogModel = {
  async getPosts() {
    // Ejemplo estático, puedes conectar a una API si lo deseas
    return [
      {
        title: 'Cómo empezar en Ciberseguridad',
        url: 'https://dogsouldev.com/blog/ciberseguridad',
        date: '2025-01-10',
        description: 'Guía para principiantes sobre los primeros pasos en ciberseguridad.'
      },
      {
        title: 'Herramientas esenciales de Kali Linux',
        url: 'https://dogsouldev.com/blog/kali-tools',
        date: '2025-02-15',
        description: 'Las mejores herramientas de hacking ético en Kali Linux.'
      }
    ];
  }
};
