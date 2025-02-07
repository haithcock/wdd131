const reviewsDisplay = document.querySelector("#review");

let numberReviews = Number(window.localStorage.getItem("numberReviews-ls")) || 0;

reviewsDisplay.textContent = numberReviews;
numberReviews++;

localStorage.setItem("numberReviews-ls", numberReviews);