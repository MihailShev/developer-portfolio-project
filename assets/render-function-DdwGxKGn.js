(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function c(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(t){if(t.ep)return;t.ep=!0;const s=c(t);fetch(t.href,s)}})();const i=()=>{const e=new Date;return`${e.getHours()}:${String(e.getMinutes()).padStart(2,"0")}`},a=()=>{const e=document.createElement("div");return e.classList.add("modal-backdrop"),e.innerHTML=`
  <div class="modal-wt">
  <button class="modal-wt__btn" type="button">

  </button>
  <h3 class="modal-wt__title">Thank you for your interest in cooperation!</h3>
  <p class="modal-wt__text">The manager will contact you shortly to discuss further details and opportunities for
    cooperation. Please stay
    in touch.</p>
    </div>`,e},l=e=>`
       <div class="message-user">
          <b>You</b>

          <p class="message-text">
          ${e}
          </p>

          <tt class="time-user">${i()}</tt>
        </div>
`,u=e=>`
       <div class="message-ai">
          <b>AI</b>

          <p class="message-text">
          ${e}
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

          <tt class="time-ai">${i()}</tt>
        </div>
`;export{u as a,a as c,l as r};
//# sourceMappingURL=render-function-DdwGxKGn.js.map
