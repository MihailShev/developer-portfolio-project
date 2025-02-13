// function typeEffect(element, speed = 100) {
//     const text = element.textContent;
//     element.textContent = '';
//     let i = 0;

//     function type() {
//     if (i < text.length) {
//     element.textContent += text[i];
//     i++;
//     setTimeout(type, speed);
//     }
//     }

//     type();
//     }

//     document.addEventListener('DOMContentLoaded', () => {
//     const title = document.querySelector('.title');
//     typeEffect(title, 80);
//     });

const heroSection = document.getElementById('hero');
const sckrollBtn = document.querySelector('.wrap-scroll-top');

function isInViewportHero(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

const viewporScrollTopBtn = e => {
  e.preventDefault();

  if (!isInViewportHero(heroSection)) {
    sckrollBtn.style.opacity = '1';
  } else {
    sckrollBtn.style.opacity = '0';
  }
};

window.addEventListener('scroll', viewporScrollTopBtn);
window.addEventListener('load', viewporScrollTopBtn);
