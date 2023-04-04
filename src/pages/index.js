import '../pages/index.css';

import {
  formValidationConfig as config,
  nameInput,
  jobInput,
  cardList,
  popupAddOpenButtonElement,
  popupOpenButtonElement,
  profileNameElement,
  profileCharacteristicElement,
  profileAvatarElement,
  formElement,
  formAddElement,
  formAvatarElement,
  popupChangeAvatarButton,
  options
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { Section } from "../components/Section.js";
import { UserInfo } from "../components/UserInfo.js";
import { PopupConfirmDelete } from "../components/PopupConfirmDelete.js";
import { Api } from "../components/Api.js";

const api = new Api(options);

// popup with photo

const popupImage = new PopupWithImage('.popup_type_photo');
popupImage.setEventListeners();

// function to opem popup with photo

const handleCardclick = (name, link) => {
  popupImage.open(name, link);
}

// render card

const renderCard = (mesto) => {
  const card = new Card({...mesto, myId: user.id}, '#template-card', {
    handleCardclick,
    handleDeleteCard: () => {
      popupDeleteCard.open();
      popupDeleteCard.setSubmit(() => {
        api
        .deleteCard(mesto._id)
        .then(() => {
          card.handleDelete();
          popupDeleteCard.close();
        })
        .catch(console.log)
      })
    },
    handlePutLike: () => {
      api
      .setLike(mesto._id)
      .then((res) => {
        card.counterLikes(res.likes.length);
        card._handleButtonPutlike();
      })
      .catch(console.log);
    },
    handleDeleteLike: () => {
      api
      .deleteLike(mesto._id)
      .then((res) => {
        card.counterLikes(res.likes.length);
        card._handleButtonDeletelike();
      })
      .catch(console.log);
    },
  });
  return card.generateCard();
}

// Section for add card

const cardSection = new Section(
  {
    renderer: (item) => {
      cardSection.addItem(renderCard(item));
    }
  },
  cardList
);

// profile info

const user = new UserInfo({
  profileName: profileNameElement,
  profileInfo: profileCharacteristicElement,
  profileAvatar: profileAvatarElement,
});

// Сollect promis in one for working with cards

Promise.all([api.getInfoProfile(), api.getInitialCards()])
.then(([info, res]) => {
  user.setUserInfo(info);
  cardSection.renderItems(res, user);
})
.catch(console.log);

// create popup for card

const popupAddCard = new PopupWithForm ('#popup-add', {
  handleSubmitForm: ({cardName, cardSrc}) => {
    api
    .createCard({name: cardName, link: cardSrc})
    .then((mesto) => {
      const card = renderCard({...mesto, myId: user.id});
      cardSection.addItem(card);
      popupAddCard.close();
    })
    .catch(console.log)
  }
});
popupAddCard.setEventListeners();

//button for open popupAddCard

popupAddOpenButtonElement.addEventListener('click', () => {
  formValidCard.disableSubmitButton();
  popupAddCard.open();
  formAddElement.reset();
});

// edit profile

const popupEditProfile = new PopupWithForm ('#popup-edit', {
  handleSubmitForm: ({userName, userInfo}) => {
    popupEditProfile.profileLoading(true);
    api
    .editProfile({name: userName, about: userInfo})
    .then((userInfo) => {
      user.setUserInfo(userInfo);
      popupEditProfile.close();
    })
    .catch(console.log)
    .finally(() => popupEditProfile.profileLoading(false))
  },
});
popupEditProfile.setEventListeners();

// button for open popupEditProfile

popupOpenButtonElement.addEventListener('click', () =>{
  popupEditProfile.setValueInput(user.getUserInfo());
  formValidProfile.disableSubmitButton();
  popupEditProfile.open();
});

// popup for change avatar

const popupChangeAvatar = new PopupWithForm('.popup_type_new-avatar', {
  handleSubmitForm: ({newAvatar}) => {
    popupChangeAvatar.profileLoading(true);
    api
    .changeAvatar({avatar: newAvatar})
    .then((userInfo) => {
      user.setUserInfo(userInfo);
      popupChangeAvatar.close();
    })
    .catch(console.log)
    .finally(() => popupChangeAvatar.profileLoading(false))
  },
});
popupChangeAvatar.setEventListeners();

//button for open popupChangeAvatar

popupChangeAvatarButton.addEventListener('click', () => {
  formValidAvatar.disableSubmitButton();
  popupChangeAvatar.open();
})

// delete card

const popupDeleteCard = new PopupConfirmDelete('.popup_type_delete-card');
popupDeleteCard.setEventListeners();

// validation

const formValidProfile = new FormValidator (formElement, config);
const formValidCard = new FormValidator (formAddElement, config);
const formValidAvatar = new FormValidator (formAvatarElement, config);
formValidProfile.enableValidation();
formValidCard.enableValidation();
formValidAvatar.enableValidation();

