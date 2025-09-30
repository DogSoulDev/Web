export class ProfileModel {
  getProfile() {
    return {
      name: 'Akira Yamada',
      title: 'Manga Web Developer & Mangaka',
      subtitle: 'Hand-drawn interfaces and creative digital art',
      description: 'Mangaka and web developer specializing in manga-style portfolios, hand-drawn UIs, and digital creativity. Passionate about Japanese art, technology, and clean, legacy code.',
      img: 'img/avatar.svg',
      social: [
        { name: 'GitHub', url: 'https://github.com/akirayamada', icon: 'icons/github.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/akirayamada', icon: 'icons/linkedin.svg' },
        { name: 'Portfolio', url: 'https://akirayamada.dev', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}