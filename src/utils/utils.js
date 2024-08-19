//уведомление пользователя о результатах загрузки
export const renderLoading = (isLoading, formElement) => {
  const buttonElement = formElement.querySelector('.popup__button');
  if (isLoading) {
    buttonElement.setAttribute('data-text', buttonElement.textContent);
    buttonElement.textContent = 'Сохранение...';
  } else {
    buttonElement.textContent = buttonElement.getAttribute('data-text');
    buttonElement.removeAttribute('data-text');
  }
};
