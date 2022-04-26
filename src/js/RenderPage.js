import images from './images';

export default class RenderPage {
  constructor() {
    this.body = document.querySelector('body');
    this.containerCards = document.querySelector('.cards');
    this.modalWindow = null;
  }

  renderCard(item) {
    item.forEach((element) => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.setAttribute('id', element.id);
      card.insertAdjacentHTML('beforeend',
        `<img class="card__image" src="${element.image}"/>
        <div class="card__main">
          <h2 class="card__title">${element.title}</h2>
          <div class="card__description">${element.description}</div>
          <div class="card__shop-box">
            <div class="card__price">${element.price}$</div>
            <button class="card__buy">Buy</button>
          </div>
        </div>
        `);
      this.containerCards.insertAdjacentElement('beforeend', card);
    });
  }

  renderModal(item) {
    this.modalWindow = document.createElement('div');
    this.modalWindow.classList.add('modal-window');
    this.modalWindow.insertAdjacentHTML('beforeend', `
    <div class="modal"> 
    <img class="modal__close" src=${images.close}/>   
    <h2>Отправить заявку</h2>
    <form name="application" class="modal__form">
       <label class="modal__label">
          <span class="modal__description">Ваше имя</span>
          <input id="name"name="name" type="text" class="modal__input">
       </label>
       <label class="modal__label">
          <span class="modal__description">Ваш номер</span>
          <input name="phone" id="phone" type="text" class="modal__input" placeholder="+7(___)___-__-__">
       </label>
       <label class="modal__label">
          <span class="modal__description">Ваш email</span>
          <input id="email" name="email" type="text" class="modal__input">
       </label>
       <label class="modal__label">
          <span class="modal__description">Ваш заказ:</span>
          <input name="product" type="text" class="modal__input modal__input--novisual" value="${item.title} ${item.price}" readonly>
          <span>${item.title} ${item.price}</span>
       </label>
       <button class="modal__btn">Отправить</button>
    </form>
 </div>      
    `);
    this.body.insertAdjacentElement('afterbegin', this.modalWindow);
  }

  modalRemove() {
    this.body.removeChild(this.modalWindow);
  }
}
