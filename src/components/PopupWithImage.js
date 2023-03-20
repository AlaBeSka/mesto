import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
  constructor(popup) {
    super(popup);
    this._popupImage = this._popup.querySelector('.popup__image');
    this._popupImadeFigcaption = this._popup.querySelector('.popup__figcaption');
  }

  open(name, link) {
    this._popupImage.alt = name;
    this._popupImage.src = link;
    this._popupImadeFigcaption.textContent = name;
    super.open();
  }
}
