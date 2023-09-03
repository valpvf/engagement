export function fittingModal([ringCard]) {
  const fitting = document.querySelector('.rings-card-btn');
  fitting.addEventListener('click', renderFittingModal);

  function renderFittingModal() {
    const modalContainer = document.querySelector('.modal-wrap');
    const oldContant = document.querySelector('.modal-wrap div');
    oldContant?.remove();
    const fitting = document.createElement('div');
    fitting.classList.add('modal-order');
    fitting.innerHTML = `
<p class="modal-title">Leave your contacts and we will call you back</p>
<form class="modal-form">
  <label class="modal-input-text">
    <span>Name *</span>
    <span class="modal-input-wrap">
      <input
        class="modal-input"
        name="user-name"
        type="text"
        placeholder="John Kirby"
        minlength="2"
        required
      />
      <svg class="modal-icon" width="18" height="24">
        <use href="./images/icons.svg#icon-person"></use>
      </svg>
    </span>
  </label>
  <label class="modal-input-text">
    <span>Phone *</span>
    <span class="modal-input-wrap">
      <input
        class="modal-input"
        name="user-tel"
        type="tel"
        title="+380 (99) 111-22-33"
        placeholder="+11 (000) 111-11-11"
        required
      />
      <svg class="modal-icon" width="18" height="24">
        <use href="./images/icons.svg#icon-phone"></use>
      </svg>
    </span>
  </label>
  <label class="modal-input-text">
    <span>Email *</span>
    <span class="modal-input-wrap">
      <input
        class="modal-input"
        name="user-email"
        type="email"
        placeholder="info@devstudio.com"
        required
      />
      <svg class="modal-icon" width="18" height="24">
        <use href="./images/icons.svg#icon-email"></use>
      </svg>
    </span>
  </label>
  <label class="modal-input-text">
    <span>Comment</span>
    <textarea
      class="modal-input"
      id="user-comment"
      name="user-comment"
      placeholder="Text input"
    ></textarea>
  </label>
  <div class="modal-field">
    <input
      class="modal-check visually-hidden"
      id="policy"
      name="policy"
      type="checkbox"
      value="true"
      required
    />
    <label class="modal-text" for="policy">
      <span>
        <svg class="icon-check" width="10" height="8">
          <use href="./images/icons.svg#icon-check"></use>
        </svg>
      </span>
      I accept the terms and conditions of the
      <a href="#"> Privacy Policy</a>
    </label>
  </div>
  <button class="modal-btn btn" type="submit">Send</button>
</form>
    `;
    modalContainer.insertAdjacentElement('afterbegin', fitting);
  }
}

//       <div class="rings-card-photo">
//         <img src=${ringCard?.mainImage} alt=${ringCard?.name} />
//         <img src=${ringCard?.secondImage} alt="" />
//         <img src=${ringCard?.thirdImage} alt="" />
//       </div>
//       <div class="rings-card-box">
//         <h3 class="rings-card-title">${ringCard?.name}</h3>
//         <div class="rings-card-options">
//           <p class="rings-card-options-text met">
//        ${ringCard?.metalCharacteristics}
//           </p>
//           <p class="rings-card-options-text st">
// ${ringCard?.stoneCharacteristics}
//           </p>
//           <p class="rings-card-options-text wd">${ringCard?.width}
//           </p>
//       </div>
//         <p class="rings-card-description">${ringCard?.productDescription}</p>
//         <button class="rings-card-btn">Записатися на примірку</button
//         ><a href="" class="rings-card-consultation">консультація</a>
//         <p class="rings-card-arttext">Час діяти!</p>
//     </div>
