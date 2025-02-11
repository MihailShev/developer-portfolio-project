import Swiper from 'swiper/bundle';
const projectsSwiper = new Swiper('.projects-swiper', {
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  direction: 'horizontal',
  navigation: {
    nextEl: '.projects-swiper-button-next',
    prevEl: '.projects-swiper-button-prev',
  },
  spaceBetween: 100,
});
