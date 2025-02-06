document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('.header-nav-menu');
  const closeMenu = document.querySelector('.menu-close');
  const menuLinks = document.querySelectorAll('.header-nav-menu ul li a');

  // Відкривати/закривати меню при кліку на бургер
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Закривати меню при кліку на "X"
  closeMenu.addEventListener('click', () => {
    navMenu.classList.remove('active');
    menuToggle.classList.remove('active');
  });

  // Закривати меню після кліку на посилання
  menuLinks.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Враховуємо висоту header
          behavior: 'smooth',
        });
      }

      navMenu.classList.remove('active');
      menuToggle.classList.remove('active');
    });
  });
});
