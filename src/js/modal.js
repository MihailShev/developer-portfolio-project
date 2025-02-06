const modal = document.querySelector('.modal-container');
const exitbtn = document.querySelector('.close-btn');
const backdrop = document.querySelector('.modal-overlay');
const orderbtn = document.querySelector('.modal-order-btn');

exitbtn.addEventListener('click', function () {
  modal.classList.add('is-closed');
});
backdrop.addEventListener('click', function () {
  modal.classList.add('is-closed');
});
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    modal.classList.add('is-closed');
  }
});

orderbtn.addEventListener('click', function () {});
