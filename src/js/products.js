export const renderProducts = numberValue => {
  const productsList = window.prod;

  let renderList =
    numberValue < 5
      ? [...productsList].filter(el => el.priceCategory == numberValue)
      : [...productsList].filter(el => el.oldPrice > 0);
  const productContainer = document.querySelector('.products-cover');
  productContainer.innerHTML = '';
  for (const card of renderList) {
    const ring = document.createElement('div');
    ring.classList.add('products-card');
    if (card.uniqueProposal > 0) {
      ring.dataset.modalOpen = '';
      ring.innerHTML = `
      <div class="exclusive-label">Exclusive</div>
      <img src="${card.mainImage}" alt="${
        card.name
      }" height="324" class="product-img">
      <h3 class="product-name">${card.name}</h3>
      <p class="product-text">${card.metalCharacteristics}</p>
      <span class="product-price-inner">
        <span class="product-price highlighted">${
          card.price.toLocaleString() + ' грн.'
        }</span>
        <span class="product-old-price">${
          card.oldPrice.toLocaleString() + ' грн.'
        }</span>
      </span>
    `;
    } else {
      ring.dataset.modalOpen = '';
      ring.innerHTML = `
      <img src="${card.mainImage}" alt="${
        card.name
      }" height="324" class="product-img">
      <h3 class="product-name">${card.name}</h3>
      <p class="product-text">${card.metalCharacteristics}</p>
      <p class="product-price">${card.price.toLocaleString() + ' грн.'}</p>
    `;
    }
    productContainer.insertAdjacentElement('afterbegin', ring);
  }
};
