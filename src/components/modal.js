import Card from "./card.js";
class Modal {
  constructor(modalClass, openElementClass) {
    this.modalClass = modalClass;
    this.modal = document.querySelector(`.${this.modalClass}`);
    this.openElement = document.querySelector(`.${openElementClass}`);
    this.closeButton = this.modal.querySelector(".popup__close");
    this.handleEscClose = this.handleEscClose.bind(this);
    this.handleOverlayClose = this.handleOverlayClose.bind(this);
    this.handleClose = this.close.bind(this);
  }

  open() {
    this.modal.classList.add("popup_is-opened");
    document.addEventListener("keydown", this.handleEscClose);
    this.modal.addEventListener("click", this.handleOverlayClose);
  }

  close() {
    this.modal.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", this.handleEscClose);
    this.modal.removeEventListener("click", this.handleOverlayClose);
  }

  handleEscClose(e) {
    if (e.key === "Escape") {
      this.close();
    }
  }

  handleOverlayClose(e) {
    if (e.target.classList.contains(this.modalClass)) {
      this.close();
    }
  }

  register() {
    this.openElement.addEventListener("click", this.open.bind(this));
    this.closeButton.addEventListener("click", this.handleClose);
  }
}

class ModalWithForm extends Modal {
  constructor(modalClass, openElementClass, formClass) {
    super(modalClass, openElementClass);
    this.form = this.modal.querySelector(`.${formClass}`);
  }
  submit(e) {
    e.preventDefault();
    const formData = new FormData(this.form);
    const formObject = Object.fromEntries(formData.entries());
    if (this.modalClass === "popup_type_new-card") {
      const card = new Card("places__list", "card-template");
      card.add(formObject);
      this.close();
    }
  }
  close() {
    super.close();
    this.form.reset();
  }
  register() {
    super.register();
    this.form.addEventListener("submit", (e) => this.submit(e));
  }
}

class ModalFromCards extends Modal {
  constructor(
    modalClass,
    openElementClass,
    cardClass,
    cardImageClass,
    cardTitleClass,
    popupImageClass,
    popupTitleClass
  ) {
    super(modalClass, openElementClass);
    this.cardClass = cardClass;
    this.cardImageClass = cardImageClass;
    this.cardTitleClass = cardTitleClass;
    this.popupImage = document.querySelector(`.${popupImageClass}`);
    this.popupTitle = document.querySelector(`.${popupTitleClass}`);
  }
  open(e) {
    if (e.target.classList.contains(this.cardImageClass)) {
      this.popupImage.src = e.target.src;
      this.popupTitle.textContent = e.target
        .closest(`.${this.cardClass}`)
        .querySelector(`.${this.cardTitleClass}`).textContent;

      super.open();
    }
  }
}

export { Modal, ModalWithForm, ModalFromCards };
