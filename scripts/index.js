const placesList = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;
const createCard = (content, onDeleteCard) => {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  cardElement.querySelector(".card__image").src = content.link;
  cardElement.querySelector(
    ".card__image"
  ).alt = `Фотография места: ${content.name}`;
  cardElement.querySelector(".card__title").textContent = content.name;
  const deleteButton = cardElement.querySelector(".card__delete-button");
  deleteButton.addEventListener("click", onDeleteCard);
  return cardElement;
};
const deleteCard = (e) => {
  e.target.closest(".card").remove();
};

initialCards.forEach((cardContent) => {
  const card = createCard(cardContent, deleteCard);
  placesList.append(card);
});
