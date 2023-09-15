let mask = document.querySelector('.mask');
window.addEventListener('load', () => {
  mask.classList.add('loader-hide');
  setTimeout(() => {
    mask.remove();
  }, 600);
});
