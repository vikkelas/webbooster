import IMask from 'imask';
import RenderPage from './RenderPage';
import formValid from './valid';

export default class SubmitPage {
  constructor(products) {
    this.renderPage = new RenderPage();
    this.buyBtn = null;
    this.formBtn = null;
    this.products = products;
    this.form = null;
  }

  init() {
    this.renderPage.renderCard(this.products);
    this.submitOnCkick();
  }

  submitOnCkick() {
    this.buyBtn = document.querySelectorAll('.card');
    this.buyBtn.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        if (e.target.classList.contains('card__buy')) {
          const infoCar = {
            title: e.currentTarget.querySelector('.card__title').innerText,
            price: e.currentTarget.querySelector('.card__price').innerText,
          };
          this.renderPage.renderModal(infoCar);
          const inputTell = document.querySelector('#phone');
          const maskOptions = {
            mask: '+{7}(000)000-00-00',
          };
          const mask = IMask(inputTell, maskOptions);
          this.btnClickSubmit();
        }
      });
    });
  }

  btnClickSubmit() {
    this.closeBtn = document.querySelector('.modal__close');
    this.closeBtn.addEventListener('click', () => {
      this.renderPage.modalRemove();
      document.forms.application.reset();
    });
    this.formBtn = document.querySelector('.modal__btn');
    this.formBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.sendForm();
    });
  }

  sendForm() {
    this.formData = new FormData(document.forms.application);
    if (formValid(this.formData)) {
      console.log('form send');
      document.querySelector('.loadingPage__load').style.display = 'flex';
      fetch('mail.php', {
        method: 'POST',
        body: this.formData,
      }).then((response) => {
        if (response.ok) {
          this.renderPage.modalRemove();
          document.forms.application.reset();
          document.querySelector('.loadingPage__load').style.display = 'none';
        }
      });
    }
  }
}
