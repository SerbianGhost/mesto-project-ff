const openModal = (modal) => {
  modal.classList.add("popup_is-opened");
};
const closeModal = (modal) => {
  modal.classList.remove("popup_is-opened");
};
const openCardModal = (modal, img, title) => {
  modal.querySelector(".popup__image").src = img.src;
  modal.querySelector(".popup__image").alt = img.alt;
  modal.querySelector(".popup__caption").textContent = title.textContent;
  openModal(modal);
};
export { openModal, closeModal, openCardModal };
