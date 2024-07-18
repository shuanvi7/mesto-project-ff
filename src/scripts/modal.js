export function openModal(modal) {
  document.querySelector(modal).classList.add('popup_is-opened');
}

export function closeModal(modals) {
  document.querySelectorAll(modals).forEach((item) => {
    item.classList.remove('popup_is-opened');
  });
}

function closeModalOnOverlay(event) {
  if (event.target === event.currentTarget) {
    closeModal(event.currentTarget);
  }
}

const closeModalOnEscape = (event) => {
  if (event.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_is-opened');
    closeModal(currentPopup);
  }
};
