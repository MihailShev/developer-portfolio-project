import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

new Swiper('.swiper', {
  speed: 600,
  slidesPerGroup: 1, // Прокручує лише 1 елемент за раз
  loop: true,
  navigation: {
    nextEl: '.arrow',
  },
  breakpoints: {
    320: { slidesPerView: 2 },
    768: { slidesPerView: 3 },
    1440: { slidesPerView: 6 },
  },
});
