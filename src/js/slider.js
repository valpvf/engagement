// import './jquery-3.7.0.min.js';
// import $ from 'jquery';
// import './slick.min.js';
import { getDataApi } from '../servises/productsApi.js';

foo();

async function foo() {
  console.log('foo');
  try {
    const mainData = await getDataApi().then(res => res.products);

    const images = mainData.map(el => el.mainImage);
    console.log('images', images);

    const totalSlides = images.length;

    let slidesToShow = Math.min(totalSlides, 16);
    slidesToShow = Math.max(slidesToShow, 4);

    const slider = document.querySelector('.slider');
    for (let i = 0; i < totalSlides; i++) {
      const slide = document.createElement('div');
      slide.classList.add('slider__item');
      slide.innerHTML = `
        <img src="${images[i]}" alt="Image ${i + 1}" height="324">
    `;
      slider.insertAdjacentElement('afterbegin', slide);
    }
    console.log('render end');
  } catch (error) {
    console.log(error);
  } finally {
    console.log('finally');
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
    console.log('slider render end');
  }
}
