const menuNav = document.querySelector('.header-nav-menu');
const menuBtn = document.querySelector('.menu-close');
const menuList = document.querySelector('.nav-menu-list');

const toggleMenu = () => {
  menuList.classList.toggle('active');
};

const closeMenu = e => {
  if (e.target.classList.contains('menu-link-header')) {
    menuList.classList.remove('active');
  }
};

menuBtn.addEventListener('click', toggleMenu);
menuNav.addEventListener('click', closeMenu);
