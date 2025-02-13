document.addEventListener('DOMContentLoaded', () => {
  // Get the current review count from localStorage
  let reviewCount = localStorage.getItem('reviewCount');
  
  // If no review count exists, initialize it to 0
  if (!reviewCount) {
    reviewCount = 0;
  } else {
    reviewCount = parseInt(reviewCount, 10);
  }

  // Increment the review count
  reviewCount += 1;

  // Save the updated review count back to localStorage
  localStorage.setItem('reviewCount', reviewCount);

  // Display the review count on the page
  document.getElementById('review-counter').textContent = reviewCount;
});
