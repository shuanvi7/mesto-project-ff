import 'styles/index.css';
import { initialCards } from 'scripts/cards.js';
import { createCard, deleteCard } from 'scripts/card.js';
import { openModal, closeModal } from 'scripts/modal.js';

const container = document.querySelector('.places__list');
const profileEditButton = document.querySelector('.profile__edit-button');
const profileAddButton = document.querySelector('.profile__add-button');
const profileCloseButton = document.querySelectorAll('.popup__close');

profileEditButton.addEventListener('click', () => openModal('.popup_type_edit'));
profileAddButton.addEventListener('click', () => openModal('.popup_type_new-card'));
profileCloseButton.forEach((item) => {
  item.addEventListener('click', () => {
    closeModal('.popup');
  });
});

const formElement = document.forms['edit-profile'];

function handleFormSubmit(evt) {
  evt.preventDefault();

  const nameInput = formElement.name;
  const jobInput = formElement.description.value;
  const profileTitle = document.querySelector('.profile__title');
  const profileDescription = document.querySelector('.profile__description');

  profileTitle.textContent(nameInput);
  profileDescription.textContent(jobInput);
}

formElement.addEventListener('submit', () => handleFormSubmit());

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard));
});
