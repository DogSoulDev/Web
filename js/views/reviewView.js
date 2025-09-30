// reviewView.js// reviewView.js// reviewView.js// reviewView.js

// View rendering for user reviews

// View rendering for user reviews

function renderReviews(reviews) {

  const reviewsSection = document.getElementById('reviews');// View rendering for user reviews// View rendering for user reviews

  if (!reviewsSection) return;

  reviewsSection.innerHTML = `function renderReviews(reviews) {

    <h3>Reviews</h3>

    <div class=\"reviews-list\">  const reviewsSection = document.getElementById('reviews');

      ${reviews.map(review => `

        <div class=\"review\">  if (!reviewsSection) return;

          <strong>${review.author}</strong>

          <p>${review.text}</p>  reviewsSection.innerHTML = `function renderReviews(reviews) {function renderReviews(reviews) {

        </div>

      `).join('')}    <h3>Reviews</h3>

    </div>

  `;    <div class=\"reviews-list\">  const reviewsSection = document.getElementById('reviews');  const reviewsSection = document.getElementById('reviews');

}

      ${reviews.map(review => `

        <div class=\"review\">  if (!reviewsSection) return;  if (!reviewsSection) return;

          <strong>${review.author}</strong>

          <p>${review.text}</p>  reviewsSection.innerHTML = `  reviewsSection.innerHTML = `

        </div>

      `).join('')}    <h3>Reviews</h3>    <h3>Reviews</h3>

    </div>

  `;    <div class=\"reviews-list\">    <div class="reviews-list">

}

      ${reviews.map(review => `      ${reviews.map(review => `

        <div class=\"review\">        <div class="review">

          <strong>${review.author}</strong>          <strong>${review.author}</strong>

          <p>${review.text}</p>          <p>${review.text}</p>

        </div>        </div>

      `).join('')}      `).join('')}

    </div>    </div>

  `;  `;

}}

