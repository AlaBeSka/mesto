import '../pages/index.css';

import { initialCards,
  formValidationConfig as config,
  nameInput,
  jobInput,
  cardList,
  popupAddOpenButtonElement,
  popupOpenButtonElement,
  profileNameElement,
  profileCharacteristicElement,
  formElement,
  formAddElement,
} from "../utils/Constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";

// popup with photo

const popupImage = new PopupWithImage('.popup_type_photo');
popupImage.setEventListeners();

// function to opem popup with photo

const handleCardclick = (name, link) => {
  popupImage.open(name, link);
}

// render card

const renderCard = (mesto) => {
  const card = new Card(mesto, '#template-card', handleCardclick);
  return card.generateCard();
}

// Section for add card

const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      cardSection.addItem(renderCard(item));
    }
  },
  cardList
)
cardSection.renderer();

// create popup for card

const popupAddCard = new PopupWithForm ('#popup-add', {
  handleSubmitForm: ({cardName, cardSrc}) => {
    const card = renderCard({
      name: cardName,
      link: cardSrc
    });
    cardSection.addItem(card);
    popupAddCard.close();
  },
});
popupAddCard.setEventListeners();

//button for open popupAddCard

popupAddOpenButtonElement.addEventListener('click', () => {
  formValidCard.disableSubmitButton();
  popupAddCard.open();
  formAddElement.reset();
});

// profile info

const user = new UserInfo({
  profileName: profileNameElement,
  profileInfo: profileCharacteristicElement
});

// edit profile

const popupEditProfile = new PopupWithForm ('#popup-edit', {
  handleSubmitForm: ({userName, userInfo}) => {
    user.setUserInfo({
      userName: userName,
      userInfo: userInfo
    });
    popupEditProfile.close();
  },
});
popupEditProfile.setEventListeners();

// button for open popupEditProfile

popupOpenButtonElement.addEventListener('click', () =>{
  const {userName, userInfo} = user.getUserInfo();
  nameInput.value = userName;
  jobInput.value = userInfo;
  formValidProfile.disableSubmitButton();
  popupEditProfile.open();
});

// validation

const formValidProfile = new FormValidator (formElement, config);
const formValidCard = new FormValidator (formAddElement, config);
formValidProfile.enableValidation();
formValidCard.enableValidation();

