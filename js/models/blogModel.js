export class BlogModel {
  getPosts() {
    return [
      {
        title: 'Building Clean Manga Portfolios',
        date: '2023-10-01',
        excerpt: 'How to create hand-drawn web designs using pure CSS and JS.'
      },
      {
        title: 'Legacy Code Best Practices',
        date: '2023-09-15',
        excerpt: 'Applying SOLID principles in modern web development.'
      }
    ];
  }
}