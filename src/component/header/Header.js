import './header.css'
document.querySelector('#header').innerHTML = `
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
`