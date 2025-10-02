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
      author: 'Javier Fernández',
      tagline: 'A 10+ Year Journey Through IT Infrastructure & Cybersecurity',
      downloadText: 'Download Full Story',
      pdfPath: 'docs/CV.pdf',
      chapters: [
        {
          number: 1,
          title: 'ORIGIN ARC',
          subtitle: '学歴・教育',
          icon: '�'
        },
        {
          number: 2,
          title: 'TRAINING SAGA',
          subtitle: '技能・能力',
          icon: '⚔️'
        },
        {
          number: 3,
          title: 'BATTLE LOG',
          subtitle: '職務経歴',
          icon: '�'
        },
        {
          number: 4,
          title: 'DOWNLOAD',
          subtitle: '完全版入手',
          icon: '📥'
        }
      ],
      stats: [
        { 
          label: 'LEVEL', 
          labelJp: 'レベル',
          value: 'SENIOR', 
          icon: '⚡' 
        },
        { 
          label: 'TYPE', 
          labelJp: '職種',
          value: 'BLUE TEAM', 
          icon: '🛡️' 
        },
        { 
          label: 'EXPERIENCE', 
          labelJp: '経験',
          value: '10+ YEARS', 
          icon: '�' 
        },
        { 
          label: 'SPECIALTY', 
          labelJp: '専門',
          value: 'SOC/SIEM', 
          icon: '🎯' 
        }
      ]
    };
  }
}
