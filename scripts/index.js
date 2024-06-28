const container = document.querySelector('.places__list');

function createCard(cardData, deleteCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDelete = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardDelete.addEventListener('click', () => deleteCard(cardElement));

  return cardElement;
}

function deleteCard(currentCard) {
  currentCard.remove();
}

initialCards.forEach((card) => {
  container.append(createCard(card, deleteCard));
});
