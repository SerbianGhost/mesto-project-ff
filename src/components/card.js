class Card {
  constructor(containerClass, templateID, cardDataList) {
    this.container = document.querySelector(`.${containerClass}`);
    this.template = document.querySelector(`#${templateID}`).content;
    this.cardDataList = cardDataList;
  }
  data(el, obj, content) {
    for (const key of Object.keys(obj)) {
      el[key] = content[obj[key]];
    }
  }
  event(el, obj) {
    for (const eventName of Object.keys(obj)) {
      el.addEventListener(eventName, this[obj[eventName]]);
    }
  }
  create(content) {
    const cardElement = this.template.firstElementChild.cloneNode(true);
    const cardChilds = [...cardElement.querySelectorAll("*")].filter((el) => {
      return Object.keys(el.dataset).length > 0;
    });
    cardChilds.forEach((el) => {
      const bind = JSON.parse(el.dataset.bind);
      for (const method of Object.keys(bind)) {
        this[method](el, bind[method], content);
      }

      el.removeAttribute("data-bind");
    });
    return cardElement;
  }
  delete(e) {
    e.target.closest(".card").remove();
  }
  like(e) {
    e.target.classList.toggle("card__like-button_is-active");
  }
  add(cardContent) {
    const newCard = this.create(cardContent);
    this.container.prepend(newCard);
  }
  generate() {
    this.cardDataList.forEach((cardContent) => {
      this.add(cardContent);
    });
  }
}
export default Card;
