import 'styles/index.css';
import { initialCards } from 'components/cards.js';
import { createCard, deleteCard } from 'components/card.js';
import { openModal, closeModal, closeModalOnOverlay } from 'components/modal.js';

const container = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');
const modalEditProfile = document.querySelector('.popup_type_edit');
const modalAddPlace = document.querySelector('.popup_type_new-card');
const modalPlaceImage = document.querySelector('.popup_type_image');
const modals = document.querySelectorAll('.popup');

const formEditProfile = document.forms['edit-profile'];
const formEditName = formEditProfile.elements.name;
const formEditDescription = formEditProfile.elements.description;
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');

const formAddPlace = document.forms['new-place'];
const formEditPlaceName = formAddPlace['place-name'];
const formEditPlaceImage = formAddPlace['link'];

const cardImageModal = document.querySelector('.popup__image');
const cardImageModalTitle = document.querySelector('.popup__caption');

profileEditButton.addEventListener('click', () => {
  formEditName.value = profileTitle.textContent;
  formEditDescription.value = profileDescription.textContent;
  openModal(modalEditProfile);
});
newPlaceButton.addEventListener('click', () => openModal(modalAddPlace));

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__close')) {
    closeModal(event.target.closest('.popup'));
  }
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => closeModalOnOverlay(event));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formEditName.value;
  profileDescription.textContent = formEditDescription.value;

  closeModal(modalEditProfile);
}

function handleLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function handleOpenModalCard(cardData) {
  cardImageModal.src = cardData.link;
  cardImageModal.alt = cardData.name;
  cardImageModalTitle.textContent = cardData.name;
  openModal(modalPlaceImage);
}

function handlePlaceFormSubmit(evt) {
  evt.preventDefault();
  const newPlace = {
    name: formEditPlaceName.value,
    link: formEditPlaceImage.value,
  };
  container.prepend(createCard(newPlace, deleteCard, handleLikeCard, handleOpenModalCard));

  formAddPlace.reset();
  closeModal(modalAddPlace);
}

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddPlace.addEventListener('submit', handlePlaceFormSubmit);

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard, handleLikeCard, handleOpenModalCard));
});
