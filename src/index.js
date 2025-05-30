import "./pages/index.css";
import initialCards from "./utils/initialCards.js";
import { createCard, deleteCard, likeCard } from "./components/card.js";
import { openModal, closeModal, openCardModal } from "./components/modal.js";
import {
  fillFormInputs,
  modalRestForm,
  handleFormSubmit,
} from "./components/form.js";
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const placesList = document.querySelector(".places__list");
const profileEditButton = document.querySelector(".profile__edit-button");
const profleEditModal = document.querySelector(".popup_type_edit");
const profileEditForm = profleEditModal.querySelector(".popup__form");
const nameInput = profileEditForm.querySelector(".popup__input_type_name");
const descriptionInput = profileEditForm.querySelector(
  ".popup__input_type_description"
);
const profileAddModal = document.querySelector(".popup_type_new-card");
const profileAddForm = profileAddModal.querySelector(".popup__form");
const imageModal = document.querySelector(".popup_type_image");
const profileAddButton = document.querySelector(".profile__add-button");
const modalArray = document.querySelectorAll(".popup");
initialCards.forEach((cardContent) => {
  const card = createCard(cardContent, deleteCard, likeCard);
  placesList.append(card);
});
placesList.addEventListener("click", (e) => {
  if (e.target.classList.contains("card__image")) {
    const card = e.target.closest(".card");
    const img = card.querySelector(".card__image");
    const title = card.querySelector(".card__title");
    openCardModal(imageModal, img, title);
  }
});
profileEditButton.addEventListener("click", () => {
  fillFormInputs(
    [nameInput, descriptionInput],
    [profileTitle, profileDescription]
  );
  openModal(profleEditModal);
});
profileAddButton.addEventListener("click", () => openModal(profileAddModal));
modalArray.forEach((modal) => {
  modal.addEventListener("click", (event) => {
    if (
      event.target === modal ||
      event.target.classList.contains("popup__close")
    ) {
      closeModal(modal);
      modalRestForm(modal);
    }
  });
});
profileAddForm.addEventListener("submit", (e) => {
  const cardContent = handleFormSubmit(e);
  closeModal(profileAddModal);
  const card = createCard(cardContent, deleteCard, likeCard);
  placesList.prepend(card);
});
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.querySelector(".popup_is-opened")) {
    modalRestForm(document.querySelector(".popup_is-opened"));
    closeModal(document.querySelector(".popup_is-opened"));
  }
});
