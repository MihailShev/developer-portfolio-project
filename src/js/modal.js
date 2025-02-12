const modal = document.querySelector('.modal-container');
const exitbtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.modal-overlay');
const orderbtn = document.querySelector('.modal-order-btn');
const btnOpenMenu = document.querySelector('.menu-toggle');
const bodyElModal = document.querySelector('body');

function closeModal() {
  backdrop.classList.add('is-closed');
  bodyElModal.style.overflow = 'auto';
  document.removeEventListener('keydown', closeModalESC);
}
function openModal() {
  backdrop.classList.remove('is-closed');

  bodyElModal.style.overflow = 'hidden';
  document.addEventListener('keydown', closeModalESC);
}

const closeModalESC = event => {
  if (event.key === 'Escape') {
    closeModal();
  }
};

exitbtn.addEventListener('click', closeModal);
backdrop.addEventListener('click', closeModal);

btnOpenMenu.addEventListener('click', openModal);
