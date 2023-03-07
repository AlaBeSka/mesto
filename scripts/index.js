import { initialCards, formValidationConfig as config } from "./Constants.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popupElement = document.querySelector('#popup-edit');
const popupCloseButtonElements = document.querySelectorAll('.popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const nameInput = popupElement.querySelector('#popup-profile-name');
const jobInput = popupElement.querySelector('#popup-profile-characteristic');
const profileNameElement = document.querySelector('.profile__name');
const profileCharacteristicElement = document.querySelector('.profile__characteristic');
const popupSaveButtonElement = popupElement.querySelector('#button-saved');
const formElement = popupElement.querySelector('#popup-edit-form');
const popupAddElement = document.querySelector('#popup-add');
const popupAddOpenButtonElement = document.querySelector('.profile__add-button');


const changeName = () => {
  nameInput.value=profileNameElement.textContent;
  jobInput.value=profileCharacteristicElement.textContent;
}

const disableSubmit = (evt) => {
  evt.preventDefault();
}

const openPopup = function(pop) {
  pop.classList.add('popup_is-opened');
  document.addEventListener('keydown', closePopupByEscape);
}

const closePopup = function(pop) {
  pop.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closePopupByEscape);
}

const closePopupByEscape = (evt) => {
  if (evt.key === "Escape"){
    closePopup(document.querySelector('.popup_is-opened'));
  };
};

function handleFormSubmit (evt) {
  disableSubmit(evt);
  profileNameElement.textContent = nameInput.value;
  profileCharacteristicElement.textContent = jobInput.value;
  closePopup(popupElement);
}

const popups = document.querySelectorAll('.popup');

const cardList = document.querySelector('.elements');
const placeNameInput = popupAddElement.querySelector('#popup-place-name');
const placeUrlInput = popupAddElement.querySelector('#popup-place-url');
const formAddElement = popupAddElement.querySelector('#popup-add-form');


const photoPopup = document.querySelector('#popup-photo');
const photoOpenPopup = photoPopup.querySelector('.popup__image');
const placeNameOpenPopup = photoPopup.querySelector('.popup__figcaption');

// создание карточки

const handleCardclick = (name, link) => {
  photoOpenPopup.src = link;
  photoOpenPopup.alt = name;
  placeNameOpenPopup.textContent = name;
  openPopup(photoPopup);
};

const renderCard = (mesto) => {
  const card = new Card (mesto, '#template-card', handleCardclick);
  cardList.prepend(card.generateCard());
};

initialCards.forEach(renderCard);

const handleAddFormSubmit = (evt) => {
  disableSubmit(evt);
  const initialCard = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };
  renderCard(initialCard);
  formAddElement.reset();
  closePopup(popupAddElement);
};

// валидация

const formValidProfile = new FormValidator (formElement, config);
const formValidCard = new FormValidator (formAddElement, config);



popups.forEach((popup) => {
  popup.addEventListener('mousedown', (evt) => {
      if (evt.target.classList.contains('popup_is-opened')) {
          closePopup(popup)
      } else {
        if (evt.target.classList.contains('popup__close-button')) {
        closePopup(popup)
      }
    }
  })
});

formAddElement.addEventListener('submit', handleAddFormSubmit);
popupOpenButtonElement.addEventListener('click', (pop)=> {
  openPopup(popupElement);
  changeName();
});
popupAddOpenButtonElement.addEventListener('click', (pop) => {
  openPopup(popupAddElement);
});
formElement.addEventListener('submit', handleFormSubmit);

formValidProfile.enableValidation();
formValidCard.enableValidation();

