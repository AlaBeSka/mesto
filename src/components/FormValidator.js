export class FormValidator {
  constructor(form, config) {
    this._form = form;
    this._input = config.inputSelector;
    this._submitButton = config.submitButtonSelector;
    this._buttonSave = this._form.querySelector(this._submitButton);
    this._inactiveButton = config.inactiveButtonClass;
    this._inputError = config.inputErrorClass;
    this._inputList = [...this._form.querySelectorAll(this._input)];
  }

  _showInputError(evt) {
    const errorElement = document.querySelector(`#${evt.id}-error`);
    errorElement.textContent = evt.validationMessage;
    evt.classList.add(this._inputError);
  }

  _hideInputError(evt) {
    const errorElement = document.querySelector(`#${evt.id}-error`);
    errorElement.textContent = '';
    evt.classList.remove(this._inputError);
  }

  _handleFormInput = (inputElement) => {
    if (inputElement.validity.valid) {
      this._hideInputError(inputElement);
    } else {
      this._showInputError (inputElement);
    }
  }

  _toogleButton() {
    const isFormValid = this._inputList.every((input) => input.validity.valid);
    this._buttonSave.disabled = !isFormValid;
    this._buttonSave.classList.toggle(this._inactiveButton, !isFormValid);
  }

  _addInputListeners() {
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._handleFormInput(inputElement);
        this._toogleButton();
      });
    });
  }

  disableSubmitButton() {
    this._toogleButton();
    this._inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  enableValidation() {
    this._toogleButton();
    this._addInputListeners();
  }
}

