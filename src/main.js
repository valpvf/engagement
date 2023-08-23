import '/scss/styles.scss';
import '/scss/header.scss';
import '/scss/hero.scss';
import '/scss/features.scss';
import '/scss/choice.scss';
import '/scss/products.scss';
import '/scss/exclusive.scss';
import '/scss/selections.scss';
import '/scss/footer.scss';

$(document).ready(function () {
  $.getJSON('ссылка_на_ваш_json_файл.json', function (data) {
    let images = data.images; // Предполагаем, что в JSON есть массив "images" с ссылками на изображения
    let totalSlides = images.length; // Получаем количество изображений
    // Определяем количество видимых слайдов (минимум 4, максимум 16)
    let slidesToShow = Math.min(totalSlides, 16);
    slidesToShow = Math.max(slidesToShow, 4);
    // Динамически создаем элементы слайдов и добавляем их в слайдер
    let slider = $('.slider');
    for (let i = 0; i < totalSlides; i++) {
      let slide = $(
        '<div><img src="' + images[i] + '" alt="Image ' + (i + 1) + '"></div>'
      );
      slider.append(slide);
    }
    // Инициализируем слайдер
    slider.slick({
      slidesToShow: slidesToShow,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      infinite: true,
      variableWidth: true,
      centerMode: true,
      prevArrow: '<button class="prev-btn">←</button>',
      nextArrow: '<button class="next-btn">→</button>',
    });
  });
});

// import javascriptLogo from "../javascript.svg";
// import viteLogo from "../public/favicon/vite.svg";
// import { setupCounter } from "../counter.js";

// document.querySelector("#app").innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="${viteLogo}" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
//       <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
//     </a>
//     <h1>Hello Vite!</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite logo to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector("#counter"));
