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
<svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="rgba(250, 250, 250, 0.2)" stroke="rgba(250, 250, 250, 0.2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <rect x="9" y="9" width="11" height="11" rx="2" ry="2"></rect>
  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
</svg>
            </button>

            <button class="btn-speech" type="button">
<svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 24 24" fill="rgba(250, 250, 250, 0.2)" stroke="rgba(250, 250, 250, 0.2)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
  <polygon points="3 9 9 3 9 21 3 15"></polygon>
  <path d="M17 8a5 5 0 0 1 0 8"></path>
  <path d="M21 5a9 9 0 0 1 0 14"></path>
</svg>

            </button>

          <tt class="time-ai">${getTime()}</tt>
        </div>
`;
