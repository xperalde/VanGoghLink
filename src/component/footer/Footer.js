import './Footer.css'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#footer').innerHTML = `
    <div class="footer__container">
      <img src="./Image/LogoWhite.svg" alt="GitHub Logo" class="footer__logo" />
      <p class="footer__txtOfCaptcha">Этот сайт защищен от спама службой reCAPTCHA Google. 
        <a class="footer__txtOfCaptchaSpan">Политика конфиденциальности/Условия предоставления услуг</a>
      </p>
      <div class="footer__block footer__block1">
        <div class="footer__blockPaddings">
          <p class="footer__title">Адрес</p>
          <p>Текст, Текст, Текст</p>
        </div>
        <div class="footer__blockPaddings">
          <p class="footer__title">Контакты</p>
          <p>Email: urban.dwelling@yandex.com</p>
          <p>Телефон: 8 (999) 999-99-99</p>
        </div>
      </div>
      <div class="footer__block footer__block2">
        <p class="footer__title">Услуги</p>
        <p>Каталог</p>
        <p>О компании</p>
        <p>Контакты</p>
        <p>Доставка и оплата</p>
        <p>Гарантия и возврат</p>
      </div>
      <div class="footer__moreInfo">
        <p style="padding-bottom: 20px;">Публичная оферта</p>
        <p>Политика персональных данных</p>
      </div>
      <img class="footer__logoPayments" src="./Image/Group 56.svg" alt="" />
    </div>
  `;

  window.onload = () => {
    const footer = document.querySelector('.footer');
    if (footer) {
      footer.classList.add('loaded');
    }
  };
});
