import {Popup} from "./Popup.js";

export class PopupConfirmDelete extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector('.popup__form');
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitFormHandler();
    })
  }

  setSubmit(submit) {
    this._submitFormHandler = submit;
  }
}
