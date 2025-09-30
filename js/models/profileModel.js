// ProfileModel - Datos del perfil
export const ProfileModel = {
  getProfile() {
    return {
      name: 'Akira Yamada',
      title: 'Manga Developer & Ethical Hacker',
      subtitle: 'Creador de mundos digitales y defensor de la seguridad',
      description: 'Mangaka y desarrollador web especializado en ciberseguridad, pentesting y programación. Apasionado por el arte japonés, la tecnología y la creatividad. Siempre explorando nuevas herramientas y técnicas para proteger y crear.',
      img: 'img/profile.jpg', // Avatar manga ficticio
      social: [
        { name: 'GitHub', url: 'https://github.com/akirayamada', icon: 'icons/python.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/akirayamada', icon: 'icons/java.svg' },
        { name: 'Portfolio', url: 'https://akirayamada.dev', icon: 'icons/html.svg' }
      ]
    };
  }
};
