export const createModalWT = () => {
  const modalElWT = document.createElement('div');
  modalElWT.classList.add('modal-backdrop');
  modalElWT.innerHTML = `
  <div class="modal-wt">
  <button class="modal-wt__btn" type="button">
    <svg class="modal-wt__icon" width="12" height="12" aria-label="close modal window">
      <use href="./img/icons/icons.svg#icon-close"></use>
    </svg>
  </button>
  <h3 class="modal-wt__title">Thank you for your interest in cooperation!</h3>
  <p class="modal-wt__text">The manager will contact you shortly to discuss further details and opportunities for
    cooperation. Please stay
    in touch.</p>
    </div>`;

  return modalElWT;
};
