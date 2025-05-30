const cardTemplate = document.querySelector("#card-template").content;
const createCard = (content, onDeleteCard, onLikeCard) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);

  const deleteButton = cardElement.querySelector(".card__delete-button");
  const likeButton = cardElement.querySelector(".card__like-button");
  cardElement.querySelector(".card__image").src = content.link;
  cardElement.querySelector(
    ".card__image"
  ).alt = `Фотография места: ${content.name}`;
  cardElement.querySelector(".card__title").textContent = content.name;
  deleteButton.addEventListener("click", () => onDeleteCard(cardElement));
  likeButton.addEventListener("click", () => onLikeCard(likeButton));
  return cardElement;
};
const deleteCard = (cardElement) => {
  cardElement.remove();
};
const likeCard = (element) => {
  element.classList.toggle("card__like-button_is-active");
};
export { createCard, deleteCard, likeCard };
