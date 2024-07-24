export function createCard(cardData, deleteCard, likeCard, openModal) {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
  const cardImage = cardElement.querySelector('.card__image');
  const cardTitle = cardElement.querySelector('.card__title');
  const cardDelete = cardElement.querySelector('.card__delete-button');
  const cardLikeButton = cardElement.querySelector('.card__like-button');

  cardImage.src = cardData.link;
  cardImage.alt = cardData.name;
  cardTitle.textContent = cardData.name;
  cardDelete.addEventListener('click', () => deleteCard(cardElement));
  cardLikeButton.addEventListener('click', (evt) => likeCard(evt));
  cardImage.addEventListener('click', () => {
    openModal(cardData);
  });

  return cardElement;
}

export function deleteCard(currentCard) {
  currentCard.remove();
}
