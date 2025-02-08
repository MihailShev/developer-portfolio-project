const modal = document.querySelector('.modal-container');
const exitbtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.modal-overlay');
const orderbtn = document.querySelector('.modal-order-btn');
const btnOpenMenu = document.querySelector('.menu-toggle');

function closeModal() {
  backdrop.classList.add('is-closed');
}
function openModal() {
  backdrop.classList.remove('is-closed');
}

exitbtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

btnOpenMenu.addEventListener('click', openModal);

orderbtn.addEventListener('click', function () {});
