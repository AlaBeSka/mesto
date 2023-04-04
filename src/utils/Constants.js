export const options = {
  url: 'https://mesto.nomoreparties.co/v1/cohort-62',
  headers: {
    authorization: 'aeed9d86-5904-46bf-9ebc-2bd545ca66e7',
    'Content-Type': 'application/json',
  },
};

export const formValidationConfig = {
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button-saved',
  inactiveButtonClass: 'popup__button-saved_disabled',
  inputErrorClass: 'popup__input_type_error',
};



export const popupOpenButtonElement = document.querySelector('.profile__edit-button');
export const nameInput = document.querySelector('#popup-profile-name');
export const jobInput = document.querySelector('#popup-profile-characteristic');
export const profileNameElement = document.querySelector('.profile__name');
export const profileCharacteristicElement = document.querySelector('.profile__characteristic');
export const formElement = document.querySelector('#popup-edit-form');
export const popupAddOpenButtonElement = document.querySelector('.profile__add-button');
export const cardList = '.elements';
export const formAddElement = document.querySelector('#popup-add-form');
export const formAvatarElement = document.querySelector('#popup-new-avatar-form');
export const profileAvatarElement = document.querySelector('.profile__avatar');
export const popupChangeAvatarButton = document.querySelector('.profile__container-avatar');



