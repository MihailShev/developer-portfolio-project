export const createRewiewsCard = cardInfo => {
  return `<li class="reviews-item swiper-slide" id="${cardInfo._id}">
    <img class="reviews-img" src="${cardInfo.avatar_url}" alt="${cardInfo.author}">
    <h3 class="reviews-name">${cardInfo.author}</h3>
    <p class="reviews-text">${cardInfo.review}</p>
</li>`;
};
export const createErrorCard = () => {
  return `<li class="reviews-item swiper-slide error-item">
    <svg class="reviews-img reviews-img-err" width="48" height="48">
          <use href="./img/icons/icons.svg#img-err"></use>
        </svg>
    <h3 class="reviews-name error-title">Name not found</h3>
    <p class="reviews-text error-text">Not found</p>
</li><li class="reviews-item swiper-slide error-item tablet">
    <svg class="reviews-img reviews-img-err" width="48" height="48">
          <use href="./img/icons/icons.svg#img-err"></use>
        </svg>
    <h3 class="reviews-name error-title">Name not found</h3>
    <p class="reviews-text error-text">Not found</p>
</li><li class="reviews-item swiper-slide error-item desctop">
    <svg class="reviews-img reviews-img-err" width="48" height="48">
          <use href="./img/icons/icons.svg#img-err"></use>
        </svg>
    <h3 class="reviews-name error-title">Name not found</h3>
    <p class="reviews-text error-text">Not found</p>
</li><li class="reviews-item swiper-slide error-item desctop">
    <svg class="reviews-img reviews-img-err" width="48" height="48">
          <use href="./img/icons/icons.svg#img-err"></use>
        </svg>
    <h3 class="reviews-name error-title">Name not found</h3>
    <p class="reviews-text error-text">Not found</p>
</li>`;
};
