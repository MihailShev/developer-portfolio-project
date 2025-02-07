const formData = { email: '', comment: '' };
const keyFormDataLS = 'feedback-form-state';

export const fillFormFromLS = (formEl) => {
  try {
    if (localStorage.length === 0) {
      return;
    }

    const dataFormFromLS = JSON.parse(localStorage.getItem(keyFormDataLS));

    for (let key in dataFormFromLS) {
      const value = dataFormFromLS[key];
      if (value) {
        formEl.elements[key].value = value;
        formData[key] = value;
      }
    }
  } catch (err) {
    console.log(err);
  }
};

export const saveDataFormToLS = event => {
  const formField = event.target;
  formData[formField.name] = formField.value;

  localStorage.setItem(keyFormDataLS, JSON.stringify(formData));
};

const isFielsdNonEmpty = obj => 
  Object.values(obj).every((el) => el.length > 0);

export const clearDataFormLS = (event, formEl) => {
  event.preventDefault();
  if (isFielsdNonEmpty(formData)) {
    formEl.reset();
    Object.keys(formData).forEach(key => delete formData[key]);
    localStorage.removeItem(keyFormDataLS);
  } else {
    console.log('Fill please all fields');
  }
};