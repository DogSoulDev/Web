// reviewView.js
// View rendering for user reviews

function renderReviews(reviews) {
  const reviewsSection = document.getElementById('reviews');
  if (!reviewsSection) return;
  reviewsSection.innerHTML = `
    <h3>Reviews</h3>
    <div class="reviews-list">
      ${reviews.map(review => `
        <div class="review">
          <strong>${review.author}</strong>
          <p>${review.text}</p>
        </div>
      `).join('')}
    </div>
  `;
}
