import "./pages/index.css";
import initialCards from "./utils/initialCards.js";
import Card from "./components/card.js";
import { Modal, ModalWithForm, ModalFromCards } from "./components/modal.js";
const mestoCardManager = new Card(
  "places__list",
  "card-template",
  initialCards
);
const profileEditModal = new ModalWithForm(
  "popup_type_edit",
  "profile__edit-button",
  "popup__form"
).register();
const createCardModal = new ModalWithForm(
  "popup_type_new-card",
  "profile__add-button",
  "popup__form"
).register();
const imageModal = new ModalFromCards(
  "popup_type_image",
  "places__list",
  "card",
  "card__image",
  "card__title",
  "popup__image",
  "popup__caption"
).register();
mestoCardManager.generate();
