const cardLists = document.querySelector('.places__list');

function addCard(cardPicture, cardHeading, deletingCard) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDelete = cardElement.querySelector('.card__delete-button');

  cardImage.src = cardPicture;
  cardTitle.textContent = cardHeading;
  cardDelete.addEventListener('click', () => deletingCard(cardElement));

  return cardElement;
}

function deletedCard(currentCard) {
  currentCard.remove();
}

initialCards.forEach((card) => {
  cardLists.append(addCard(card.link, card.name, deletedCard));
});
