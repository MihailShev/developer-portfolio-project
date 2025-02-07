import iziToast from 'izitoast';
import { iziToastCommonOptions} from '/iziToastCommonOptions';
const formData = { email: '', comment: '' };
const keyFormDataLS = 'feedback-form-state';

export const fillFormFromLS = formEl => {
  try {
    if (localStorage.length === 0) {
      return;
    }

    const dataFormFromLS = JSON.parse(localStorage.getItem(keyFormDataLS));

    for (let key in dataFormFromLS) {
      const value = dataFormFromLS[key];
      if (isFieldNonEmpty(value)) {
        formEl.elements[key].value = value;
        formData[key] = value;
      }
    }
  } catch (err) {
    iziToast.show({
      ...iziToastCommonOptions,
      message: `Sorry, you have error ${err}. Please try again!`,
    });
  }
};

export const saveDataFormToLS = event => {
  const formField = event.target;
  formData[formField.name] = formField.value;

  localStorage.setItem(keyFormDataLS, JSON.stringify(formData));
};

const isFieldNonEmpty = el => el.trim().length > 0;

const isFielsdNonEmpty = obj => Object.values(obj).every(isFieldNonEmpty);

export const clearDataFormLS = (event, formEl) => {
  event.preventDefault();
  if (isFielsdNonEmpty(formData)) {
    formEl.reset();
    Object.keys(formData).forEach(key => delete formData[key]);
    localStorage.removeItem(keyFormDataLS);
  } else {
    iziToast.show({
      ...iziToastCommonOptions,
      message: 'Fill please all fields',
    });
  }
};
