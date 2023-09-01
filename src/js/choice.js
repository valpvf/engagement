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
let selectedPrice = ''; // Глобальная переменная для хранения выбранного ценового диапазона

function selectPriceOption(option) {
  const priceValue = option.textContent;
  priceText.textContent = priceValue;
  selectedPrice = priceValue; // Обновляем значение глобальной переменной
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
  // Изменение: проверяем кликнули ли мы на элементы списка ценовых диапазонов
  if (
    !priceButton.contains(event.target) &&
    !priceOptionsContainer.contains(event.target)
  ) {
    // Изменение: скрываем список
    priceOptionsContainer.classList.remove('show');
    priceButton.classList.remove('show');
  }
});

// Изменение: скрываем список ценовых диапазонов при клике на текст кнопки
priceText.addEventListener('click', () => {
  if (priceOptionsContainer.classList.contains('show')) {
    priceOptionsContainer.classList.remove('show');
  }
});

// Изменение: изменяем классы элементов в цикле
priceOptions.forEach(option => {
  option.addEventListener('click', () => {
    priceOptions.forEach(otherOption => {
      if (otherOption !== option) {
        otherOption.classList.add('hide');
      }
    });
    option.classList.add('selected');
    selectPriceOption(option);
  });
});

// function renderOtherComponent() {
//   console.log(selectedPrice);
