// reviewModel.js
// Data model for user reviews

const reviewModel = {
  reviews: [],
  addReview: function(review) {
    // Validate and add review
    this.reviews.push(review);
  }
};
