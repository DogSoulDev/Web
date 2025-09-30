export class ProfileModel {
  getProfile() {
    return {
      name: 'Hiroshi Tanaka',
      title: 'Manga Illustrator & Web Designer',
      subtitle: 'Creating digital art and clean web experiences',
      description: 'Manga artist and web developer blending traditional illustration with modern design. Passionate about storytelling through visuals and code.',
      img: 'img/avatar.svg',
      social: [
        { name: 'GitHub', url: 'https://github.com/hiroshit', icon: 'icons/github.svg' },
        { name: 'LinkedIn', url: 'https://linkedin.com/in/hiroshit', icon: 'icons/linkedin.svg' },
        { name: 'Portfolio', url: 'https://hiroshit.dev', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}