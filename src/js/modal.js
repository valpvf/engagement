import { renderRingsCard } from './modal-rings-card.js';

export function modalWindow() {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  for (const el of refs.openModalBtn) {
    el.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    const ringCard = window.prod.filter(el => el.id === e.target.dataset.id);
    renderRingsCard(ringCard[0]);
    // if (e.target !== e.currentTarget) {
    //   refs.modal.classList.toggle('is-hidden');
    // }
    refs.modal.classList.toggle('is-hidden');
  }
}
