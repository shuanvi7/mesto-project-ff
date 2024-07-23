export function openModal(modal) {
  modal.classList.add('popup_is-opened');
  document.addEventListener('keydown', closeModalOnEscape);
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
  document.removeEventListener('keydown', closeModalOnEscape);
}

export function closeModalOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

export function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    const currentPopup = document.querySelector('.popup_is-opened');
    closeModal(currentPopup);
  }
}
