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
  popupElement.classList.add('popup__opened');
  nameInput.value = profileNameElement.textContent;
  jobInput.value = profileCharacteristicElement.textContent;
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
  profileNameElement.textContent = nameInput.value;
  profileCharacteristicElement.textContent = jobInput.value;
  closePopup();
}


popupOpenButtonElement.addEventListener('click', openPopup);
popupCloseButtonElement.addEventListener('click', closePopup);
popupElement.addEventListener('click', closePopupByClickOverlay);
formElement.addEventListener('submit', handleFormSubmit);

const likeButtonElements = document.querySelectorAll('.element__button-like');
const likeButtonElement0 = likeButtonElements[0];
const likeButtonElement1 = likeButtonElements[1];
const likeButtonElement2 = likeButtonElements[2];
const likeButtonElement3 = likeButtonElements[3];
const likeButtonElement4 = likeButtonElements[4];
const likeButtonElement5 = likeButtonElements[5];

const likeButtonActive = function (btn) {
  btn.classList.toggle('element__button-like_active')
  }
likeButtonElement0.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement0)});
likeButtonElement1.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement1)});
likeButtonElement2.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement2)});
likeButtonElement3.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement3)});
likeButtonElement4.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement4)});
likeButtonElement5.addEventListener("click", function (btn) {
  likeButtonActive(likeButtonElement5)});
