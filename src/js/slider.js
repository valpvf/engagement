import './jquery-3.7.0.min.js';
import './slick.min.js';
import { getDataApi } from '../servises/productsApi.js';

async function foo() {
  const mainData = await getDataApi().then(res => res.products);
  const images = mainData.map(el => el.mainImage);

  const totalSlides = images.length;

  let slidesToShow = Math.min(totalSlides, 16);
  slidesToShow = Math.max(slidesToShow, 4);

  const slider = document.querySelector('.slider');
  for (let i = 0; i < totalSlides; i++) {
    const slide = document.createElement('div');
    slide.classList.add('slider__item');
    slide.innerHTML = `
        <img src="${images[i]}" alt="Image ${i + 1}" height="350">
    `;
    slider.insertAdjacentElement('afterbegin', slide);
  }

  $(document).ready(function () {
    $('.slider').slick({
      arrows: true,
      dots: true,
      adaptiveHeight: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 1000,
      easing: 'ease',
      //Бескнечность слайдера
      infinite: true,
      //Стартовый слайд
      initialSlide: 0,
      autoplay: true,
      autoplaySpeed: 1500,
      pauseOnDotsHover: true,
      pauseOnFocus: true,
      pauseOnHover: true,
      //Перемещение мышкой и пальцем
      draggable: true,
      swipe: true,
      centerMode: true,
      responsive: [
        {
          breakpoint: 768,
          setting: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 375,
          setting: {
            slidesToShow: 1,
          },
        },
      ],
      mobileFirst: true,
      // appendArrows: $('.content'),
      // appendDots: $('.content'),
    });
  });
}

foo();
