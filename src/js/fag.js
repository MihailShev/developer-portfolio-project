import Accordion from 'accordion-js';

new Accordion('.accordion-container');

document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.ac-trigger');

  triggers.forEach(trigger => {
    trigger.addEventListener('click', function () {
      const parent = this.closest('.list-item');
      const iconUp = this.querySelector('.icon-up');
      const iconDown = this.querySelector('.icon-down');

      // Переключаем класс "hidden" на иконках
      if (parent.classList.contains('is-active')) {
        iconUp.classList.remove('hidden');
        iconDown.classList.add('hidden');
      } else {
        iconUp.classList.add('hidden');
        iconDown.classList.remove('hidden');
      }
    });
  });
});
