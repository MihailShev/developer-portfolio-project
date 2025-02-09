const menuNav = document.querySelector('.header-nav-menu');
const menuBtn = document.querySelector('.menu-close');
const menuList = document.querySelector('.nav-menu-list');

const closeMenu = () => {
  menuList.classList.remove('active');
};

const toggleMenu = e => {
  e.stopPropagation();
  menuList.classList.toggle('active');
};

const handleClickHederMenu = e => {
  const clickInsideMenu = e.composedPath().includes(menuList);
  const isMenuLink = e.target.classList.contains('menu-link-header');

  if (!clickInsideMenu || isMenuLink) {
    closeMenu();
  }
};

menuBtn.addEventListener('click', toggleMenu);
document.addEventListener('click', handleClickHederMenu);
