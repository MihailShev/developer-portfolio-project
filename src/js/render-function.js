const getTime = () => {
  const now = new Date();
  return `${now.getHours()}:${String(now.getMinutes()).padStart(2, '0')}`;
};

export const createModalWT = () => {
  const modalElWT = document.createElement('div');
  modalElWT.classList.add('modal-backdrop');
  modalElWT.innerHTML = `
  <div class="modal-wt">
  <button class="modal-wt__btn" type="button">

  </button>
  <h3 class="modal-wt__title">Thank you for your interest in cooperation!</h3>
  <p class="modal-wt__text">The manager will contact you shortly to discuss further details and opportunities for
    cooperation. Please stay
    in touch.</p>
    </div>`;

  return modalElWT;
};

// Requesr user
export const requesr = text =>
  `
       <div class="message-user">
          <b>You</b>

          <p class="message-text">
          ${text}
          </p>

          <tt class="time-user">${getTime()}</tt>
        </div>
`;

// Answer AI
export const answer = text =>
  `
       <div class="message-ai">
          <b>AI</b>

          <p class="message-text">
          ${text}
          </p>

          <div class="inner-message-svg">
            <button class="btn-copy" type="button">
              <svg class="" width="17" height="17">
                <use href="./img/icons/icons-chat.svg#icon-copy"></use>
              </svg>
            </button>

            <button class="btn-speech" type="button">
              <svg class="" width="17" height="17">
                <use href="./img/icons/icons-chat.svg#icon-volume"></use>
              </svg>
            </button>

          <tt class="time-ai">${getTime()}</tt>
        </div>
`;
