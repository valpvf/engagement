import { modalWindow } from './modal';

export function renderRingsCard(ringCard) {
  console.log('ringCard', ringCard);
  const modalContainer = document.querySelector('.modal');
  const modalContant = document.querySelector('.modal-content');
  if (modalContant) modalContant.remove();
  console.log('modalContant', modalContant);
  const card = document.createElement('div');
  card.classList.add('modal-content');
  card.innerHTML = `
      <div class="rings-card-photo">
        <img src=${ringCard?.mainImage} alt=${ringCard?.name} />
        <img src=${ringCard?.secondImage} alt="" />
        <img src=${ringCard?.thirdImage} alt="" />
      </div>
      <div class="rings-card-box">
        <h3 class="rings-card-title">${ringCard?.name}</h3>
        <div class="rings-card-options">
          <p class="rings-card-options-text met">
       ${ringCard?.metalCharacteristics}
          </p>
          <p class="rings-card-options-text st">
${ringCard?.stoneCharacteristics}
          </p>
          <p class="rings-card-options-text wd">${ringCard?.width}
          </p>
      </div>
        <p class="rings-card-description">${ringCard?.productDescription}</p>
        <button class="rings-card-btn">Записатися на примірку</button
        ><a href="" class="rings-card-consultation">консультація</a>
        <p class="rings-card-arttext">Час діяти!</p>
    </div>
    `;
  modalContainer.insertAdjacentElement('beforeend', card);
}
