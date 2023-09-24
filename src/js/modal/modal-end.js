export function modalEnd(typeForm) {
  const modalContainer = document.querySelector('.modal-wrap');
  const order = document.createElement('div');
  order.classList.add('modal-order');
  if (typeForm === 'rings-card-btn') {
    order.innerHTML = `
      <h3 class="modal-end-art">Вітаємо!</h3>
      <h2 class="modal-end-title">Ви успішно записалися на примірку</h2>
      <p class="modal-end-text">Чекаємо на Вас у нашому шоу-румі з 10:00 до 19:00 </p>
    `;
  } else {
    order.innerHTML = `
      <h3 class="modal-end-art">Дякуємо за Ваш запит!</h3>
      <h2 class="modal-end-title">Ми передзвонемо Вам найближчим часом!</h2>
    `;
  }
  modalContainer.insertAdjacentElement('afterbegin', order);
}
