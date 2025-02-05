const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav');
const menuLinks = document.querySelectorAll('nav ul li a');

// Відкривати/закривати меню при кліку на кнопку
menuToggle.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
});

// Плавне прокручування та закриття меню після кліку на посилання
menuLinks.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }

    // Закриваємо меню після кліку на пункт навігації
    navMenu.classList.add('hidden');
  });
});
