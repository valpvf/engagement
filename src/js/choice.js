const buttonChoice = document.getElementById('buttonChoice');
const priceRange = document.getElementById('priceRange');
const buttonGet = document.getElementById('buttonGet');
const priceText = document.getElementById('priceText');

let isPriceRangeVisible = false;

buttonChoice.addEventListener('click', () => {
  if (isPriceRangeVisible) {
    priceRange.style.display = 'none';
    isPriceRangeVisible = false;
  } else {
    priceRange.style.display = 'block';
    priceRange.style.position = 'absolute';
    priceRange.style.width = '30vw';
    priceRange.style.height = '30vh';
    priceRange.style.backgroundColor = 'green';
    isPriceRangeVisible = true;
  }
});
priceRange.addEventListener('click', e => {
  if (e.target.classList.contains('price-option')) {
    priceText.textContent = e.target.textContent;

    buttonGet.disabled = false;
    buttonGet.style.backgroundColor = 'black';

    priceRange.style.display = 'none';
    isPriceRangeVisible = false;
  }
});

buttonGet.addEventListener('click', () => {
  alert('Выбран ценовой диапазон: ' + priceText.textContent);
});
