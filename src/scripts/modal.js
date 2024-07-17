export function openModal(modal) {
  document.querySelector(modal).classList.add('popup_is-opened');
}

export function closeModal(modal) {
  document.querySelectorAll(modal).forEach((item) => {
    item.classList.remove('popup_is-opened');
  });
}
