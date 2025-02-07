import LocalStorageForm from './local-storage';
import { postQueryComment } from './portfolio-api';
import { onModalMessage } from './wt-modal';
import iziToast from 'izitoast';
import { iziToastCommonOptions } from '/js/iziToastCommonOptions';

const formWorkTogether = document.querySelector('.work-t-form');

let localStorageForm = new LocalStorageForm('form-work-together', formWorkTogether);
console.log(localStorage);

const createPostQuery = async e => {
  e.preventDefault();

  let emailValue = e.target.elements[0].value.trim();
  let commentValue = e.target.elements[1].value.trim();

  if (commentValue === '') {
    return;
  }

  try {
    await postQueryComment(emailValue, commentValue);
    localStorageForm.clearDataFormLS(e);
    const commentEl = formWorkTogether.querySelector('[id="comment"]');
    commentEl.classList.remove('js-success');
    onModalMessage();
  } catch (error) {
    iziToast.show({
      ...iziToastCommonOptions,
      message: `Sorry, you have error ${searchedThema}. Please try again!`,
    });
  }
};

localStorageForm.fillFormFromLS();

if (formWorkTogether.elements[1].value.trim() !== '') {
  formWorkTogether.elements[1].classList.add('js-success');
}

formWorkTogether.addEventListener('input', localStorageForm.saveDataFormToLS);
formWorkTogether.addEventListener('submit', createPostQuery);
