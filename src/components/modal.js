export function openModal(modal) {
  modal.classList.add('popup_is-opened');
}

export function closeModal(modal) {
  modal.classList.remove('popup_is-opened');
}

export function closeModalOnOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    closeModal(evt.currentTarget);
  }
}

export function closeModalOnEscape(event) {
  if (event.key === 'Escape') {
    const currentPopup = document.querySelectorAll('.popup_is-opened');
    currentPopup.forEach((item) => closeModal(item));
  }
}
