import Accordion from 'accordion-js';

import Swiper from 'swiper';
import 'swiper/css';

const accordeonList = document.querySelector('.accordeon-list');

const accordion = new Accordion(accordeonList, {
  duration: 600,
  showMultiple: true,
  openOnInit: [0],
});

const accordionItems = document.querySelectorAll('.accordeon-title');

accordionItems.forEach(item => {
  item.addEventListener('click', function () {
    const arrow = item.querySelector('.title-icon');
    const description = item.nextElementSibling;
    arrow.classList.toggle('active-is');
    description.classList.toggle('hidden');
  });
});

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
  if (event.key === 'Tab') {
    swiperAbout.slideNext();
  } else {
    swiperAbout.slidePrev();
  }
});
