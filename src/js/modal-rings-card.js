// import { modalWindow } from './modal';

export function renderRingsCard([ringCard]) {
  // console.log('ringCard', ringCard);
  const modalContainer = document.querySelector('.modal-wrap');
  const oldContant = document.querySelector('.modal-wrap div');
  oldContant?.remove();
  const card = document.createElement('div');
  card.classList.add('modal-content');
  card.innerHTML = `
      <div class="rings-card-photo">
        <img src=${ringCard?.mainImage} alt=${ringCard?.name} />
        <img src=${ringCard?.secondImage} alt="" />
        <img src=${ringCard?.thirdImage} alt="" />
      </div>
      <div class="rings-card-box">
        <h2 class="rings-card-title">${ringCard?.name}</h2>
        <div class="rings-card-options">
          <p class="rings-card-options-text met">${ringCard?.metalCharacteristics}</p>
          <p class="rings-card-options-text st">${ringCard?.stoneCharacteristics}</p>
          <p class="rings-card-options-text wd">${ringCard?.width}</p>
          <p class="rinds-card-price">${ringCard?.price} грн.</p>  
        </div>
        <p class="rings-card-description">${ringCard?.productDescription}</p>
        <button class="rings-card-btn">Записатися на примірку</button
        ><button class="rings-card-consultation">Консультація</button>
        <h3 class="rings-card-arttext">Час діяти!</h3>
      </div>
    `;

  modalContainer.insertAdjacentElement('afterbegin', card);
}
