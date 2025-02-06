export const createRewiewsCard = cardInfo => {
  return `<li class="reviews-item swiper-slide">
    <img class="reviews-img" src="${cardInfo.avatar_url}" alt="${cardInfo.author}">
    <h3 class="reviews-title">${cardInfo.author}</h3>
    <p class="reviews-text">${cardInfo.review}</p>
</li>`;
};
