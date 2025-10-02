/**
 * CV Model
 * Manages CV page data
 * Follows Single Responsibility Principle - only handles CV data
 */
export class CVModel {
  /**
   * Get CV page information
   * @returns {Object} CV data object
   */
  getCVData() {
    return {
      title: 'THE ETHICAL HACKER',
      subtitle: 'Volume 1: Blue Team Chronicles',
      mangaTitle: {
        main: '倫理的ハッカー',  // "Ethical Hacker" in Japanese
        sub: 'ブルーチーム年代記'  // "Blue Team Chronicles" in Japanese
      },
      author: 'by Javier Fernández (DogSoulDev)',
      tagline: 'A 10+ Year Journey Through IT Infrastructure & Cybersecurity',
      downloadText: 'Download Full Story',
      pdfPath: 'docs/CV.pdf',
      chapters: [
        {
          number: 'CHAPTER 1',
          title: 'THE ORIGIN STORY',
          subtitle: 'Education & Training',
          icon: '📜'
        },
        {
          number: 'CHAPTER 2',
          title: 'TRAINING ARC',
          subtitle: 'Skills & Abilities',
          icon: '⚔️'
        },
        {
          number: 'CHAPTER 3',
          title: 'BATTLE RECORDS',
          subtitle: 'Work Experience',
          icon: '🎌'
        },
        {
          number: 'FINAL CHAPTER',
          title: 'DOWNLOAD SAGA',
          subtitle: 'Get Complete CV',
          icon: '🏆'
        }
      ],
      stats: [
        { label: 'LEVEL', value: 'Senior', icon: '⚡' },
        { label: 'ATTACK', value: 'Pentesting', icon: '🎯' },
        { label: 'DEFENSE', value: 'Blue Team', icon: '🛡️' },
        { label: 'EXP', value: '10+ Years', icon: '💎' }
      ]
    };
  }
}
