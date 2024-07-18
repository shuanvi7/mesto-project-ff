import 'styles/index.css';
import { initialCards } from 'components/cards.js';
import { createCard, deleteCard } from 'components/card.js';
import {
  openModal,
  closeModal,
  closeModalOnOverlay,
  closeModalOnEscape,
} from 'components/modal.js';

const container = document.querySelector('.places__list');

const profileEditButton = document.querySelector('.profile__edit-button');
const newPlaceButton = document.querySelector('.profile__add-button');
const modals = document.querySelectorAll('.popup');

profileEditButton.addEventListener('click', () => openModal('.popup_type_edit'));
newPlaceButton.addEventListener('click', () => openModal('.popup_type_new-card'));

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('popup__close')) {
    closeModal(event.target.parentNode.parentNode);
  }
});

modals.forEach((modal) => {
  modal.addEventListener('click', (event) => closeModalOnOverlay(event));
});

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard));
});
