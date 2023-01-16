const popupElement = document.querySelector('#popup');
const popupCloseButtonElement = popupElement.querySelector('#popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const nameInput = popupElement.querySelector('#popup__profile-name');
const jobInput = popupElement.querySelector('#popup__profile-characteristic');
const profileNameElement = document.querySelector('.profile__name');
const profileCharacteristicElement = document.querySelector('.profile__characteristic');
const popupSaveButtonElement = popupElement.querySelector('#button-saved');
const formElement = popupElement.querySelector('#popup-edit-form')

const openPopup = function() {
  popupElement.classList.add('popup_is-opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileCharacteristicElement.textContent;
}

const closePopup = function() {
  popupElement.classList.remove('popup_is-opened');
}

const closePopupByClickOverlay = function(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  profileNameElement.textContent = nameInput.value;
  profileCharacteristicElement.textContent = jobInput.value;
  closePopup();
}


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);
formElement.addEventListener('submit', handleFormSubmit);


