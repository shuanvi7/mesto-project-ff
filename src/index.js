import 'styles/index.css';
import { initialCards } from 'scripts/cards.js';
import { createCard, deleteCard } from 'scripts/card.js';
import { openModal, closeModal, closeModalOnOverlay } from 'scripts/modal.js';

const container = document.querySelector('.places__list');
const closeButtons = document.querySelectorAll('.popup__close');
const profileEditButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');

profileEditButton.addEventListener('click', () => openModal('.popup_type_edit'));
newPlaceButton.addEventListener('click', () => openModal('.popup_type_new-card'));

closeButtons.forEach((item) => {
  item.addEventListener('click', () => {
    closeModal('.popup');
  });
});

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard));
});
