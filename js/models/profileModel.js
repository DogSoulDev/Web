// ProfileModel - Datos del perfil
export const ProfileModel = {
  getProfile() {
    return {
    name: 'Akira Yamada',
    title: 'Manga Web Developer & Mangaka',
    subtitle: 'Arte japonés, interfaces dibujadas a mano y creatividad digital',
    description: 'Mangaka y desarrollador web especializado en portafolios manga, interfaces ilustradas y creatividad digital. Apasionado por el arte japonés, la tecnología y el diseño dibujado a mano. Siempre explorando nuevas técnicas para crear y proteger.',
    img: 'img/avatar-manga.svg', // Avatar manga dibujado a mano
      social: [
        { name: 'GitHub', url: 'https://github.com/akirayamada', icon: 'icons/manga-skill.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/akirayamada', icon: 'icons/manga-skill.svg' },
        { name: 'Portfolio', url: 'https://akirayamada.dev', icon: 'icons/manga-skill.svg' }
      ]
    };
  }
};
