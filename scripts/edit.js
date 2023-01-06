const popupElement = document.querySelector('#popup');
const popupCloseButtonElement = popupElement.querySelector('#popup__close-button');
const popupOpenButtonElement = document.querySelector('.profile__edit-button');
const nameInput = popupElement.querySelector('#popup__profile-name');
const jobInput = popupElement.querySelector('#popup__profile-characteristic');
const ProfileNameElement = document.querySelector('.profile__name');
const ProfileCharacteristicElement = document.querySelector('.profile__characteristic');
const popupSaveButtonElement = popupElement.querySelector('#button-saved');

const openPopup = function() {
  popupElement.classList.add('popup__opened');
}

const closePopup = function() {
  popupElement.classList.remove('popup__opened');
}

const closePopupByClickOverlay = function(event) {
  if (event.target === event.currentTarget) {
    closePopup();
  }
}

function handleFormSubmit (evt) {
  evt.preventDefault();
  ProfileNameElement.textContent = nameInput.value;
  ProfileCharacteristicElement.textContent = jobInput.value;
}

popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('mousedown', closePopupByClickOverlay);
popupSaveButtonElement.addEventListener('click', handleFormSubmit);
popupSaveButtonElement.addEventListener('click', closePopup);
