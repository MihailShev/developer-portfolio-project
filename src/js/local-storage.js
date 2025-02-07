import iziToast from 'izitoast';
import { iziToastCommonOptions } from '/js/iziToastCommonOptions';

class LocalStorageForm {
  keyFormDataLS;
  formData;
  formElement;
  
  constructor(keyFormDataLS, formElement) {
    this.keyFormDataLS = keyFormDataLS;
    this.formElement = formElement;
    const kength = formElement.elements.length;
    for (const i = 0; i < length; i++) {
      formData[key.name] = undefined;
    }
   
  }
  
  _isFieldNonEmpty = el => el.trim().length > 0;

  _isFielsdNonEmpty = obj => Object.values(obj).every(isFieldNonEmpty);
  
  fillFormFromLS = () => {
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
  
  saveDataFormToLS = event => {
    const formField = event.target;
    formData[formField.name] = formField.value;
  
    localStorage.setItem(keyFormDataLS, JSON.stringify(formData));
  };
  
  clearDataFormLS = event => {
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
}
export default LocalStorageForm;
