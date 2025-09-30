// ProfileModel - Datos del perfil
export const ProfileModel = {
  getProfile() {
    return {
      name: 'DogSoulDev',
      title: 'Cybersecurity Expert & Ethical Hacker',
      subtitle: 'Innovador en IA, Gemini Nano Banana, y defensa digital',
      description: 'Apasionado por la ciberseguridad, hacking ético y la creatividad digital. Experto en proteger sistemas, crear soluciones seguras y liderar proyectos innovadores. Siempre explorando nuevas tecnologías como Gemini Nano Banana.',
  img: 'img/profile.svg',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/dogsouldev', icon: 'icons/linkedin.svg' },
        { name: 'Gemini', url: 'https://gemini.google.com/app', icon: 'icons/gemini.svg' }
      ]
    };
  }
};
