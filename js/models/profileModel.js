export class ProfileModel {
  getProfile() {
    return {
      name: 'Javier Fernández',
      title: 'Cybersecurity Professional',
      subtitle: 'Master\'s in Cybersecurity & Software Development',
      description: 'Highly accomplished Cybersecurity professional backed by a triple academic foundation: a Master\'s Degree in Cybersecurity, a Master\'s in Software Development, and a Higher Technical Degree in IT Systems Management. My technical expertise is complemented by a strong team orientation and relentless determination—qualities forged through dedicated sports participation. I excel at collaborative problem-solving and possess the willpower to achieve challenging objectives in vulnerability analysis and complex risk mitigation. Seeking to leverage this blend of advanced technical skills and a proven team-first, goal-driven mindset to enhance organizational security.',
      img: 'img/D.png',
      social: [
        { name: 'GitHub', url: 'https://github.com/DogSoulDev', icon: 'icons/github.svg' },
        { name: 'Portfolio', url: 'https://dogsouldev.github.io/Web/', icon: 'icons/portfolio.svg' }
      ]
    };
  }
}