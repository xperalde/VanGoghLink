(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();document.querySelector("#aside").innerHTML=`
    <ul class="aside__container">
      <li >Доставка и оплата</li>
      <li >Гарантия и возврат</li>
      <li >EN</li>
    </ul>
`;document.querySelector("#header").innerHTML=`
	<div class="header__container">
		<img class="header__logo" src="./Image/LogoBlack.svg" alt="Logotype">
		<div class="burger-menu">
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul class="header__menu">
			<li>КАТАЛОГ</li>
			<li>О КОМПАНИИ</li>
			<li>КОНТАКТЫ</li>
		</ul>
		<div class="header__searchBasketContainer">
			<input class="header__search" type="text" placeholder="Лампы">
			<button class="header__buttonBasket" type="button">
				<span class="header__basket-wrapper">
					<img class="header__basket" src="./Image/Bag.svg" alt="Корзина">
					<span class="header__badge">3</span>
				</span>
			Корзина
			</button>
		</div>
	</div>
`;const g="modulepreload",h=function(s){return"/VanGoghLink/"+s},u={},v=function(o,a,r){let e=Promise.resolve();if(a&&a.length>0){let n=function(c){return Promise.all(c.map(d=>Promise.resolve(d).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),m=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));e=n(a.map(c=>{if(c=h(c),c in u)return;u[c]=!0;const d=c.endsWith(".css"),p=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${p}`))return;const l=document.createElement("link");if(l.rel=d?"stylesheet":g,d||(l.as="script"),l.crossOrigin="",l.href=c,m&&l.setAttribute("nonce",m),document.head.appendChild(l),d)return new Promise((_,f)=>{l.addEventListener("load",_),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${c}`)))})}))}function t(n){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=n,window.dispatchEvent(i),!i.defaultPrevented)throw n}return e.then(n=>{for(const i of n||[])i.status==="rejected"&&t(i.reason);return o().catch(t)})};document.addEventListener("DOMContentLoaded",async()=>{try{const{fetchProducts:s}=await v(async()=>{const{fetchProducts:r}=await import("./API-BuppiY2H.js");return{fetchProducts:r}},[]),o=await s(),a=o.map(r=>r.image);await y(a),b(o)}catch(s){console.error("Ошибка при инициализации:",s)}});function y(s){return new Promise((o,a)=>{let r=0;const e=s.length;if(e===0){o();return}s.forEach(t=>{const n=new Image;n.src=t,n.onload=()=>{r++,r===e&&o()},n.onerror=a})})}function b(s){const o=document.getElementById("main");if(!o){console.error("Элемент #main не найден");return}o.style.opacity=0,o.innerHTML="";const a=document.createElement("div");a.className="main__container";const r=document.createElement("p");r.className="main__title",r.textContent="Результаты поиска";const e=document.createElement("div");e.className="main__cardsContainer",a.appendChild(r),a.appendChild(e),s.forEach(t=>{const n=document.createElement("div");n.className="main__cardContainer",n.innerHTML=`
      <div class="main__imgWrapper">
        <img class="main__img" src="${t.image}" alt="${t.name}">
        ${t.hasDiscount?'<p class="main__promotion">Акция</p>':""}
				<div class="main__cardHoverInfo">
					<button class="main__cardHoverInfoBtn" type="button" class="main__btn">
					Подробнее</button>
				</div>
      </div>
      <p class="main__nameCard">${t.name}</p>
      ${t.hasDiscount?`
        <div class="main__price" style="gap: 16px;">
          <span style="color:#E45302;">
						<span>${t.price}</span>
						<span class="main__rouble">&#8381</span>
					</span>
          <span style="color: #808080;">
  					<span style="text-decoration: line-through;">${t.discountPrice}</span>
  					<span class="main__rouble">&#8381;</span>
					</span>
        </div>`:`<span class="main__price">
					<span>${t.price}</span>
					<span class="main__rouble">&#8381;</span>
				</span>`}
    `,e.appendChild(n)}),o.appendChild(a),o.style.opacity=1}document.addEventListener("DOMContentLoaded",()=>{document.querySelector("#footer").innerHTML=`
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
  `,window.onload=()=>{const s=document.querySelector(".footer");s&&s.classList.add("loaded")}});
