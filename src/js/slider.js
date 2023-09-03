import { getDataApi } from '../servises/productsApi.js';
import { modalWindow } from './modal.js';

export function getProducts(products) {
  window.prod = products;
  return window.products;
}

(async () => {
  try {
    const products = await getDataApi().then(res => res.products);
    getProducts(products);
    const images = [...products].filter(el => el.uniquePrice > 0);

    const totalSlides = images.length;

    let slidesToShow = Math.min(totalSlides, 16);
    slidesToShow = Math.max(slidesToShow, 4);

    const slider = document.querySelector('.slider');
    for (const image of images) {
      const slide = document.createElement('div');
      slide.classList.add('slider__item');
      slide.innerHTML = `
        <img src="${image.mainImage}" alt="${image.name}" data-id=${image.id} data-modal-open>
    `;
      slider.insertAdjacentElement('afterbegin', slide);
    }
    modalWindow();
  } catch (error) {
    console.log(error);
  } finally {
    $(document).ready(function () {
      $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: false,
        slidesToShow: 4,
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
        centerMode: false,
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
})();
