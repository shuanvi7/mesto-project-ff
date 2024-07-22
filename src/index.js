import 'styles/index.css';
import { initialCards } from 'components/cards.js';
import { createCard, deleteCard } from 'components/card.js';
import { openModal, closeModal, closeModalOnOverlay, closeModalOnEscape } from 'components/modal.js';

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

profileEditButton.addEventListener('click', () => openModal(modalEditProfile));
newPlaceButton.addEventListener('click', () => openModal(modalAddPlace));

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__close')) {
    closeModal(event.target.parentNode.parentNode);
  }
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => closeModalOnOverlay(event));
  document.addEventListener('keydown', (event) => closeModalOnEscape(event));
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = formEditName.value;
  profileDescription.textContent = formEditDescription.value;
  closeModal(evt.target.parentNode.parentNode);
}

function handleLikeCard(evt) {
  evt.target.classList.toggle('card__like-button_is-active');
}

function handleOpenModalCard() {
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
  closeModal(evt.target.parentNode.parentNode);
}

formEditName.value = profileTitle.textContent;
formEditDescription.value = profileDescription.textContent;

formEditProfile.addEventListener('submit', handleProfileFormSubmit);
formAddPlace.addEventListener('submit', handlePlaceFormSubmit);

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard, handleLikeCard, handleOpenModalCard));
});
