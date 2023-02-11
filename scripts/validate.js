const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-saved',
  inactiveButtonClass: 'popup__button-saved_disabled',
  inputErrorClass: 'popup__input_type_error',
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    form.addEventListener('submit', disableSubmit);
    form.addEventListener('input', () => {
      toogleButton(form, config);
    })
    addInputListeners(form, config);
    toogleButton(form, config);
  });
};

const handleFormInput = (evt, config) => {
  const input = evt.target;
  const inputId = input.id;
  const errorElement = document.querySelector(`#${inputId}-error`);
  if (input.validity.valid) {
    input.classList.remove(config.inputErrorClass);
    errorElement.textContent = '';
  } else {
    input.classList.add(config.inputErrorClass);
    errorElement.textContent = input.validationMessage;
  }
};

const toogleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle('popup__button-saved_disabled', !isFormValid);
};

const addInputListeners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((element) => {
    element.addEventListener('input', (evt) => {
      handleFormInput(evt, config);
    })
  });
};


enableValidation(formValidationConfig);
