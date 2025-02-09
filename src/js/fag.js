
document.addEventListener('DOMContentLoaded', () => {
  const triggers = document.querySelectorAll('.ac-trigger');

  triggers.forEach(trigger => {
    const content = trigger.querySelector('.ac-panel');
    const btn = trigger.querySelector('.btn-faq');
    
    trigger.addEventListener('click', function () {
      const isOpen = trigger.classList.contains('open');

      if (isOpen) {
        trigger.classList.remove('open');
      } else {
        trigger.classList.add('open');
      }
    });
  });
});
