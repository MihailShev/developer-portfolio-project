document.addEventListener('DOMContentLoaded', function () {
  const accordionItems = document.querySelectorAll('.item-about');

  const firstItem = accordionItems[0];
  firstItem.classList.add('open');

  accordionItems.forEach(item => {
    const btn = item.querySelector('.btn-about');
    const content = item.querySelector('.text-cv-about-container');

    btn.addEventListener('click', function () {
      const isOpen = item.classList.contains('open');

      if (isOpen) {
        item.classList.remove('open');
      } else {
        item.classList.add('open');
      }
    });
  });
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
