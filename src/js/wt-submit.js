import LocalStorageForm from './local-storage';
import { postQueryComment } from './portfolio-api';
import { onModalMessage } from './wt-modal';
import { iziToastCommonOptions} from './iziToastCommonOptions';
import iziToast from 'izitoast';


const formWorkTogether = document.querySelector('.work-t-form');

let localStorageForm = new LocalStorageForm('form-work-together', formWorkTogether);
const createPostQuery = async e => {
  e.preventDefault();

  let emailValue = e.target.elements[0].value.trim();
  let commentValue = e.target.elements[1].value.trim();

  if (commentValue === '') {
    return;
  }

  try {
    await postQueryComment(emailValue, commentValue);
    localStorageForm.clearDataFormLS(e, formWorkTogether);
    const commentEl = formWorkTogether.querySelector('[id="comment"]');
    commentEl.classList.remove('js-success');
    onModalMessage();
  } catch (error) {
    iziToast.show({
      ...iziToastCommonOptions,
      message: `Sorry, you have error ${error}. Please try again!`,
    });
  }
};

localStorageForm.fillFormFromLS(formWorkTogether);

if (formWorkTogether.elements[1].value.trim() !== '') {
  formWorkTogether.elements[1].classList.add('js-success');
}

formWorkTogether.addEventListener('input', localStorageForm.saveDataFormToLS);
formWorkTogether.addEventListener('submit', createPostQuery);
