import { renderRingsCard } from './modal-rings-card.js';
import { fittingModal } from './modal-orders.js';

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
    renderRingsCard(ringCard);
    if (ringCard) fittingModal(ringCard);
    // if (e.target !== e.currentTarget) {
    //   refs.modal.classList.toggle('is-hidden');
    // }
    refs.modal.classList.toggle('is-hidden');
  }
}
