const modal = document.querySelector('.modal-container');
const exitbtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.modal-overlay');
const orderbtn = document.querySelector('.modal-order-btn');
const btnOpenMenu = document.querySelector('.menu-toggle');

function closeModal() {
  backdrop.classList.add('is-closed');

  exitbtn.removeEventListener('click', closeModal);
  backdrop.removeEventListener('click', closeModal);
  document.removeEventListener('keydown', closeModalESC);
}
function openModal() {
  backdrop.classList.remove('is-closed');
}

const closeModalESC = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

exitbtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalESC);

btnOpenMenu.addEventListener('click', openModal);

orderbtn.addEventListener('click', function () {});
