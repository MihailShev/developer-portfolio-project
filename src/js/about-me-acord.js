import Accordion from 'accordion-js';

const accordion = new Accordion('.list-about', {
  duration: 700,
  elementClass: 'item-about',
  triggerClass: 'btn-about',
  panelClass: 'text-cv-about-container',
  activeClass: 'open',
});

import Swiper from 'swiper';
import 'swiper/css';

const buttonEl = document.querySelector('.swiper-next');
const swiperEl = document.querySelector('.about-me-swiper-container');

const swiperAbout = new Swiper('.about-me-skills', {
  speed: 800,
  loop: true,
  slidesPerView: 2,
  slideActiveClass: 'swiper-content-wrap-active',
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    invert: true,
  },
  breakpoints: {
    375: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
  slideToClickedSlide: true,
});

buttonEl.addEventListener('click', () => {
  swiperAbout.slideNext();
});

swiperEl.addEventListener('keydown', function (event) {
  event.preventDefault();

  if (event.key === 'ArrowRight') {
    swiperAbout.slideNext();
  } else if (event.key === 'ArrowLeft') {
    swiperAbout.slidePrev();
  }
});
