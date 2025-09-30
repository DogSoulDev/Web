// BlogView - Renderiza la sección Blog
export const BlogView = {
  async render(containerId = 'app') {
    const container = document.getElementById(containerId);
    const posts = await window.BlogModel.getPosts();
    container.innerHTML = `
      <section>
        <h2 class="section-title">Blog</h2>
        <div class="blog-list">
          ${posts.map(post => `
            <div class="blog-post">
              <a href="${post.url}" target="_blank" rel="noopener noreferrer"><strong>${post.title}</strong></a>
              <div>${post.date}</div>
              <div>${post.description}</div>
            </div>
          `).join('')}
        </div>
      </section>
    `;
  }
};
