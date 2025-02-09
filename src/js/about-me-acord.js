import Accordion from 'accordion-js';

const buttons = document.querySelectorAll('.btn-about');

const accordionItems = document.querySelectorAll('.ac');

document.addEventListener('DOMContentLoaded', () => {
  const acc = new Accordion('.accordion-container', {
    showMultiple: true,
    openOnInit: [0],
  });
  accordionItems.forEach(item => {
    const header = item.querySelector('.ac-header');
    const panel = item.querySelector('.ac-panel');

    header.addEventListener('click', () => {
      const isActive = panel.classList.contains('active');
      if (isActive) {
        acc.close(panel);
        panel.classList.remove('active');
        header.classList.remove('active');
      } else {
        acc.open(panel);
        panel.classList.add('active');
        header.classList.add('active');
      }
    });
  });
  buttons.forEach(button => {
    button.addEventListener('click', event => {
      const icon = event.currentTarget.querySelector('.icon-about');
      icon.classList.toggle('icon-close');
      icon.classList.toggle('icon-open');
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
