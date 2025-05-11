import './Main.css'

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const { fetchProducts } = await import('../../API/API.js');
    const products = await fetchProducts();

    const images = products.map(product => product.image);

    await preloadImages(images);

    renderProducts(products);
  } catch (err) {
    console.error('Ошибка при инициализации:', err);
  }
});

function preloadImages(images) {
  return new Promise((resolve, reject) => {
    let loaded = 0;
    const total = images.length;

    if (total === 0) {
      resolve();
      return;
    }

    images.forEach(image => {
      const img = new Image();
      img.src = image;
      img.onload = () => {
        loaded++;
        if (loaded === total) resolve();
      };
      img.onerror = reject;
    });
  });
}

function renderProducts(products) {
  const main = document.getElementById('main');
  if (!main) {
    console.error('Элемент #main не найден');
    return;
  }

  main.style.opacity = 0;
  main.innerHTML = '';

  const wrapper = document.createElement('div');
  wrapper.className = 'main__container';

  const title = document.createElement('p');
  title.className = 'main__title';
  title.textContent = 'Результаты поиска';

  const cards = document.createElement('div');
  cards.className = 'main__cardsContainer';

  wrapper.appendChild(title);
  wrapper.appendChild(cards);

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'main__cardContainer';

    card.innerHTML = `
      <div class="main__imgWrapper">
        <img class="main__img" src="${product.image}" alt="${product.name}">
        ${product.hasDiscount ? `<p class="main__promotion">Акция</p>` : ''}
				<div class="main__cardHoverInfo">
					<button class="main__cardHoverInfoBtn" type="button" class="main__btn">
					Подробнее</button>
				</div>
      </div>
      <p class="main__nameCard">${product.name}</p>
      ${product.hasDiscount ? `
        <div class="main__price" style="gap: 16px;">
          <span style="color:#E45302;">
						<span>${product.price}</span>
						<span class="main__rouble">&#8381</span>
					</span>
          <span style="color: #808080;">
  					<span style="text-decoration: line-through;">${product.discountPrice}</span>
  					<span class="main__rouble">&#8381;</span>
					</span>
        </div>` :
        `<span class="main__price">
					<span>${product.price}</span>
					<span class="main__rouble">&#8381;</span>
				</span>`}
    `;
    cards.appendChild(card);
  });

  main.appendChild(wrapper);

  main.style.opacity = 1;
}
