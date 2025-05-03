import initialCards from "./cards.js";
const placecList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const createCard = (content, deleteFunc) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = content.link;
  cardElement.querySelector(".card__title").textContent = content.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", deleteFunc);
  return cardElement;
};
const deleteCard = (e) => {
  e.target.closest(".card").remove();
};

initialCards.forEach((cardContent) => {
  const card = createCard(cardContent, deleteCard);
  placecList.append(card);
});
