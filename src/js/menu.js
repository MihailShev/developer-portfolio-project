document.addEventListener('DOMContentLoaded', function () {
  const menuBtn = document.querySelector('.menu-close');
  const menuList = document.querySelector('.nav-menu-list');
  const menuLinks = document.querySelectorAll('.menu-link-header');

  if (!menuBtn || !menuList || menuLinks.length === 0) return;

  // Функція для відкриття/закриття меню
  menuBtn.addEventListener('click', () => {
    const isOpen = menuBtn.classList.toggle('active');

    menuBtn.setAttribute('aria-expanded', isOpen);
    menuList.setAttribute('aria-hidden', !isOpen);
  });

  // Додаємо плавний скрол при натисканні на пункт меню
  menuLinks.forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();

      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      if (targetSection) {
        // const headerOffset =
        //   document.querySelector('header')?.offsetHeight || 80;
        // const elementPosition = targetSection.getBoundingClientRect().top;
        // const offsetPosition = elementPosition + window.scrollY - headerOffset;

        // window.scrollTo({
        //   top: offsetPosition,
        //   behavior: 'smooth',
        // });
      }

      menuBtn.classList.remove('active');
      menuList.setAttribute('aria-hidden', 'true');
    });
  });
});



