export class Card {

  constructor (mesto, templateSelector, {handleCardclick, handleDeleteCard, handlePutLike, handleDeleteLike}) {
    this._name = mesto.name;
    this._image = mesto.link;
    this._likes = mesto.likes;
    this.myId = mesto.myId;
    this.ownerId = mesto.owner._id;
    this._selector = templateSelector;
    this._handleCardClick = handleCardclick;
    this._handleDeleteCard = handleDeleteCard;
    this._handlePutLike = handlePutLike;
    this._handleDeleteLike = handleDeleteLike;
  }

  _getTamplate() {
    return document
      .querySelector(this._selector)
      .content
      .querySelector('.element')
      .cloneNode(true);
  }

  _handleButtonPutlike() {
    this._likeButton.classList.add('element__button-like_active');
  }

  _handleButtonDeletelike() {
    this._likeButton.classList.remove('element__button-like_active');
  }

  _addLike() {
    this._handleButtonPutlike();
    this._handlePutLike();
  }

  _checkDeleteButton() {
    if(this.myId !== this.ownerId) {
      this._deleteButton.remove();
    }
  }

  _checkAmountLikes() {
    this._likes.forEach((like) => {
      if (like._id === this.myId) {
        this._addLike();
      }
    });
  }

  counterLikes (likes) {
    this._indicatorLikes.textContent = likes;
  }

  handleDelete() {
    this._element.remove();
  }

  _setEventListener() {
    this._likeButton.addEventListener('click', () => {
      if (this._likeButton.classList.contains('element__button-like_active')) {
        this._handleDeleteLike()
      } else {
        this._handlePutLike()
      }
    });
    this._deleteButton.addEventListener('click', () => {
      this._handleDeleteCard(this);
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
    this._indicatorLikes = this._element.querySelector('.element__counter');
    this.counterLikes(this._likes.length);
    this._checkAmountLikes();
    this._setEventListener();
    this._checkDeleteButton();
    this._setEventListener();

    return this._element;
  }
}

