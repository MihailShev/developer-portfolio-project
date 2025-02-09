import { createModalWT } from './render-function';

let modalElWT;
let closeBtn;
let bodyEl;

const closeModalWindow = () => {
  modalElWT.remove();
  bodyEl.style.overflow = 'auto';
  document.removeEventListener('click', closeModalWindowAnyKey);
  closeBtn.removeEventListener('click', closeModalWindow);
  document.removeEventListener('keydown', closeModalWindowESC);
};

const closeModalWindowESC = e => {
  if (e.key === 'Escape') {
    closeModalWindow();
  }
};

const closeModalWindowAnyKey = e => {
  const click = e.composedPath().some(el => el.className === 'modal-wt');
  if (!click) {
    closeModalWindow();
  }
};

export const onModalMessage = () => {
  const footerEl = document.querySelector('.container.container-work-together');
  bodyEl = document.querySelector('body');
  bodyEl.style.overflow = 'hidden';
  modalElWT = createModalWT();
  footerEl.append(modalElWT);
  closeBtn = document.querySelector('.modal-wt__btn');

  document.addEventListener('click', closeModalWindowAnyKey);
  closeBtn.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindowESC);
};
