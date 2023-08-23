import '/scss/styles.scss';
import '/scss/header.scss';
import '/scss/hero.scss';
import '/scss/features.scss';
import '/scss/choice.scss';
import '/scss/products.scss';
import '/scss/exclusive.scss';
import '/scss/selections.scss';
import '/scss/footer.scss';
import { getDataApi } from './servises/productsApi';

window.onload = async function () {
  const mainData = await getDataApi().then(res => res.products);
  const images = mainData.map(el => el.mainImage);
  console.log('mainData', mainData);
  console.log('images', images);

  // window.onload = async function () {
  // Получаем данные из JSON-файла
  // const data = await fetch(mainData).then(response => response.json());

  // Получаем массив изображений
  // const images = data.mainImage;

  // Определяем количество изображений
  const totalSlides = images.length;

  // Определяем количество видимых слайдов (минимум 4, максимум 16)
  let slidesToShow = Math.min(totalSlides, 16);
  slidesToShow = Math.max(slidesToShow, 2);

  // Динамически создаем элементы слайдов и добавляем их в слайдер
  const slider = document.querySelector('.slider');
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement('div');
    slide.innerHTML = `
    <img src="${images[i]}" alt="Image ${i + 1} class="exclusive-img">
  `;
    slider.appendChild(slide);
  }

  // Инициализируем слайдер
  const slickOptions = {
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    infinite: true,
    variableWidth: true,
    centerMode: true,
    prevArrow: document.querySelector('.prev-btn'),
    nextArrow: document.querySelector('.next-btn'),
  };
  slider.slick(slickOptions);
};

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
