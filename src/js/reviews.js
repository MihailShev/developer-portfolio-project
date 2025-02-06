import { fetchReviews } from './reviews-request';
import { createRewiewsCard } from './reviews-rendering';
const reviewsList = document.querySelector('.reviews-list');
// await fetchReviews();
console.dir(fetchReviews);
const createRewiews = async () => {
  const { data } = await fetchReviews();
  const cardTemplate = data.map(el => createRewiewsCard(el)).join('');
  reviewsList.innerHTML = cardTemplate;
};
createRewiews();
// const swiper = new Swiper('.reviews-container', {
//   speed: 400,
//   spaceBetween: 100,
// });
// const swiper = document.querySelector('.reviews-container').swiper;

// swiper.slideNext();
