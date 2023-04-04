import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
  constructor(popup, {handleSubmitForm}){
    super(popup);
    this._handleSubmitForm = handleSubmitForm;
    this._form = this._popup.querySelector('.popup__form');
    this._inputs = this._form.querySelectorAll('.popup__input');
    this._saveButton = this._popup.querySelector('.popup__button-saved');
    this._saveButtonValue = this._saveButton.textContent;
  }

  setValueInput(data) {
    this._inputs.forEach((input) => {
      input.value = data[input.name];
    })
  }

  _getInputValues() {
    this._formContainer = {};
    this._inputs.forEach((input) => {
      this._formContainer[input.name] = input.value;
    });

    return this._formContainer;
  }

  profileLoading(isLoading) {
    if (isLoading) {
      this._saveButton.textContent = 'Сохранение...';
    } else {
      this._saveButton.textContent = this._saveButtonValue;
    }
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._handleSubmitForm(this._getInputValues());
    })
  }

  close() {
    super.close();
    this._form.reset();
  }
}
