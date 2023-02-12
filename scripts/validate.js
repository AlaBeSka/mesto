const formValidationConfig = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-saved',
  inactiveButtonClass: 'popup__button-saved_disabled',
  inputErrorClass: 'popup__input_type_error',
};

const showInputError = (evt, config) => {
  const errorElement = document.querySelector(`#${evt.id}-error`);
  errorElement.textContent = evt.validationMessage;
  evt.classList.add(config.inputErrorClass);
  };

const hideInputError = (evt, config) => {
  const errorElement = document.querySelector(`#${evt.id}-error`);
  errorElement.textContent = '';
  evt.classList.remove(config.inputErrorClass);
  };


const handleFormInput = (evt, config) => {
  if (evt.validity.valid) {
    hideInputError(evt, config);
  } else {
    showInputError (evt, config);
  }
};

const toogleButton = (form, config) => {
  const buttonSubmit = form.querySelector(config.submitButtonSelector);
  const isFormValid = form.checkValidity();
  buttonSubmit.disabled = !isFormValid;
  buttonSubmit.classList.toggle(config.inactiveButtonClass, !isFormValid);
};

const addInputListeners = (form, config) => {
  const inputList = Array.from(form.querySelectorAll(config.inputSelector));
  inputList.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      handleFormInput(inputElement, config);
    })
  });
  form.addEventListener('input', () => {
    toogleButton(form, config);
  })
};

const enableValidation = (config) => {
  const formList = Array.from(document.querySelectorAll(config.formSelector));
  formList.forEach((form) => {
    addInputListeners(form, config);
    toogleButton(form, config);
  });
};

enableValidation(formValidationConfig);
