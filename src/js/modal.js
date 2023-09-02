export function modalWindow() {
  const refs = {
    openModalBtn: document.querySelectorAll('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  for (const el of refs.openModalBtn) {
    // for (let i = 0; i < refs.openModalBtn.length; i++) {
    el.addEventListener('click', toggleModal);
  }
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal(e) {
    console.log(e.target.dataset);
    console.log(e.target.dataset.exclusive);
    refs.modal.classList.toggle('is-hidden');
  }
}
