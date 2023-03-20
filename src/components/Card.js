export class Card {

  constructor (mesto, templateSelector, handleCardclick) {
    this._name = mesto.name;
    this._image = mesto.link;
    this._selector = templateSelector;
    this._handleCardClick = handleCardclick;
  }

  _getTamplate() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _handleButtonlike() {
    this._likeButton.classList.toggle('element__button-like_active');
  }

  _handleButtonDelete() {
    this._element.remove();
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      this._handleButtonlike();
    });

    this._deleteButton.addEventListener('click', () => {
      this._handleButtonDelete();
    });

    this._cardImage.addEventListener('click', () => {
      this._handleCardClick(this._name, this._image);
    });
  };

  generateCard() {
    this._element = this._getTamplate();
    this._cardImage = this._element.querySelector('.element__photo');
    this._element.querySelector('.element__place-name').textContent = this._name;
    this._cardImage.src = this._image;
    this._cardImage.alt = this._name;
    this._deleteButton = this._element.querySelector('.element__button-delete');
    this._likeButton = this._element.querySelector('.element__button-like');
    this._setEventListener();

    return this._element;
  }
}

