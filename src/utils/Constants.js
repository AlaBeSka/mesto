export const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


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



