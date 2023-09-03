export function fittingModal([ringCard]) {
  const fitting = document.querySelector('.rings-card-btn');
  const consultation = document.querySelector('.rings-card-consultation');
  fitting.addEventListener('click', renderFittingModal);
  consultation.addEventListener('click', renderFittingModal);

  function renderFittingModal(e) {
    console.log('e.target', e.target.classList.value);
    const modalContainer = document.querySelector('.modal-wrap');
    const oldContant = document.querySelector('.modal-wrap div');
    oldContant?.remove();
    if (e.target.classList.value === 'rings-card-btn') {
      const fitting = document.createElement('div');
      fitting.classList.add('modal-order');
      fitting.innerHTML = `
        <h2 class="modal-order-title">Запис на примірку</h2>
        <form class="modal-order-form">
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="user-name"
                type="text"
                placeholder="І’мя"
                minlength="2"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </span>
          </label>
          <div>
            <label class="modal-input-text">
              <input
                class="modal-input"
                id="user-width"
                name="user-width"
                placeholder="Розмір каблучки"
              ></input>
            </label>
            <div class="modal-field">
              <input
                class="modal-check visually-hidden"
                id="nowidth"
                name="nowidth"
                type="checkbox"
                value="true"
                required
              />
              <label class="modal-text" for="nowidth">
                <span>
                  <svg class="icon-check" width="10" height="8">
                    <use href="./images/icons.svg#icon-check"></use>
                  </svg>
                </span>
                не знаю розміра
              </label>
            </div>
          </div>
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="user-tel"
                type="tel"
                title="+380 (99) 111-22-33"
                placeholder="+380"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </span>
          </label>
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="user-email"
                type="email"
                placeholder="Email"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-email"></use>
              </svg>
            </span>
          </label>
          <button class="modal-btn btn" type="submit">Записатись на примірку</button>
        </form>
      `;
      modalContainer.insertAdjacentElement('afterbegin', fitting);
    } else {
      const consultation = document.createElement('div');
      consultation.classList.add('modal-order');
      consultation.innerHTML = `
        <h2 class="modal-order-title">Зворотній дзвінок</h2>
        <form class="modal-order-form">
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="user-name"
                type="text"
                placeholder="І’мя"
                minlength="2"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-person"></use>
              </svg>
            </span>
          </label>          
          <label class="modal-input-text">
            <span class="modal-input-wrap">
              <input
                class="modal-input"
                name="user-tel"
                type="tel"
                title="+380 (99) 111-22-33"
                placeholder="+380"
                required
              />
              <svg class="modal-icon" width="18" height="24">
                <use href="./images/icons.svg#icon-phone"></use>
              </svg>
            </span>
          </label>          
          <button class="modal-btn btn" type="submit">Передзвоніть мені</button>
        </form>
      `;
      modalContainer.insertAdjacentElement('afterbegin', consultation);
    }
  }
}
