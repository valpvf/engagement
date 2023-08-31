export let priceValue = '';
// Получите элементы DOM для работы с ними
const priceText = document.querySelector('.priceText');
const priceButton = document.querySelector('.choice-start-btn');
const priceOptions = document.querySelectorAll('.price-option');
const priceOptionsContainer = document.querySelector('.price-options');

// Функция для отображения или скрытия списка ценовых диапазонов
function togglePriceOptions() {
  priceButton.classList.toggle('show');
  priceOptionsContainer.classList.toggle('show');
}

// Функция для выбора ценового диапазона и обновления текста кнопки
function selectPriceOption(option) {
  priceValue = option.textContent; // Получаем текст выбранного варианта
  priceText.textContent = priceValue; // Обновляем текст кнопки
  if (priceOptionsContainer.classList.contains('show')) {
    priceOptionsContainer.classList.remove('show');
  }
}

// Добавьте слушатель события на кнопку для отображения списка при клике
priceButton.addEventListener('click', togglePriceOptions);

// Добавьте слушатели событий на каждый вариант ценового диапазона
priceOptions.forEach(option => {
  option.addEventListener('click', () => selectPriceOption(option));
});

// Добавьте слушатель события на всю страницу, чтобы скрыть список при клике вне него
document.addEventListener('click', event => {
  if (!priceButton.contains(event.target) && event.target !== priceText) {
    priceButton.classList.remove('show');
  }
  priceOptions.classList?.toggle('hide');
});
