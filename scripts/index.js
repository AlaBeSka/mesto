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
const initialCards = [
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

const template = document.querySelector('#template-card');
const photoPopup = document.querySelector('#popup-photo');
const photoOpenPopup = photoPopup.querySelector('.popup__image');
const placeNameOpenPopup = photoPopup.querySelector('.popup__figcaption');


const createCard = (cardName) => {
  const card = template.content.querySelector('.element').cloneNode(true);
  card.querySelector('.element__place-name').textContent = cardName.name;
  card.querySelector('.element__photo').src = cardName.link;
  card.querySelector('.element__photo').alt = cardName.name;
  const changePhotoPopupValue = () => {
    photoOpenPopup.src = cardName.link;
    photoOpenPopup.alt =cardName.name;
    placeNameOpenPopup.textContent = cardName.name;
  };
  const buttonForPhotoPopup = card.querySelector('.element__photo');
  const deleteButton = card.querySelector('.element__button-delete');
  deleteButton.addEventListener('click', () => {
    card.remove();
  });
  const likeButton = card.querySelector('.element__button-like');
  likeButton.addEventListener('click', () => {
    likeButton.classList.toggle('element__button-like_active');
  });
  buttonForPhotoPopup.addEventListener('click', () => {
    changePhotoPopupValue(placeNameOpenPopup, photoOpenPopup), openPopup(photoPopup);
  });
  return card;
};

const renderCard = (twoitems) => {
  cardList.prepend(createCard(twoitems))
};

initialCards.forEach((item) => {
  renderCard(item);
});

const handleAddFormSubmit = (evt) => {
  disableSubmit(evt);
  const initialCard = {
    name: placeNameInput.value,
    link: placeUrlInput.value
  };
  renderCard(initialCard);
  formAddElement.reset();
  closePopup(popupAddElement);
  evt.submitter.classList.add('popup__button-saved_disabled')
evt.submitter.disabled = true;
};



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
popupOpenButtonElement.addEventListener('click', (pop)=>{
  openPopup(popupElement);
  changeName();
});
popupAddOpenButtonElement.addEventListener('click', (pop) => {
  openPopup(popupAddElement);
});
formElement.addEventListener('submit', handleFormSubmit);

