import { fetchReviews } from './reviews-request';
import { createRewiewsCard } from './reviews-rendering';
import { createErrorCard } from './reviews-rendering';
import Swiper from 'swiper/bundle';

const reviewsList = document.querySelector('.reviews-list');
const createRewiews = async () => {
  try {
    const { data } = await fetchReviews();
    const cardTemplate = data.map(el => createRewiewsCard(el)).join('');
    reviewsList.innerHTML = cardTemplate;
    const swiper = new Swiper('.reviews-wrapper', {
      initialSlide: 0,
      slidesPerView: 'auto',
      centeredSlides: false,
      watchOverflow: true,
      speed: 200,
      navigation: {
        nextEl: '.rev-swiper-button-next',
        prevEl: '.rev-swiper-button-prev',
      },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 16,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 16,
        },
        // when window width is >= 1440px
        1440: {
          slidesPerView: 4,
          spaceBetween: 16,
        },
      },
    });
  } catch (error) {
    reviewsList.innerHTML = createErrorCard();
  }
};
createRewiews();
