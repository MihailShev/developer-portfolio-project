import { createModalWT } from './render-function';

let modalElWT;
let closeBtn;

const closeModalWindow = () => {
  modalElWT.remove();
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
  modalElWT = createModalWT();
  footerEl.append(modalElWT);
  closeBtn = document.querySelector('.modal-wt__btn');

  document.addEventListener('click', closeModalWindowAnyKey);
  closeBtn.addEventListener('click', closeModalWindow);
  document.addEventListener('keydown', closeModalWindowESC);
};
