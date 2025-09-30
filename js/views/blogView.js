import { BlogModel } from '../models/blogModel.js';

export class BlogView {
  constructor() {
    this.model = new BlogModel();
  }

  render() {
    const posts = this.model.getPosts();
    return `
      <div class="section blog">
        <h2 class="section-title">Blog</h2>
        <ul>
          ${posts.map(post => `
            <li>
              <h3>${post.title}</h3>
              <p>${post.date}</p>
              <p>${post.excerpt}</p>
            </li>
          `).join('')}
        </ul>
      </div>
    `;
  }
}