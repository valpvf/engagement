import { getDataApi } from '../servises/productsApi.js';
import { modalWindow } from './modal/modal.js';

console.log('window. innerHeight', window.innerHeight);

export function getProducts(products) {
  window.prod = products;
  return window.products;
}

(async () => {
  try {
    const products = await getDataApi().then(res => res.products);
    getProducts(products);
    const images = [...products].filter(el => el.oldPrice > 0);

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
    window.location.href = './404.html';
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
            breakpoint: 1280,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
        mobileFirst: false,
        // appendArrows: $('.content'),
        // appendDots: $('.content'),
      });
    });
  }
})();

const scrollBtn = document.querySelector('.arrow-up');

window.onscroll = () => {
  if (window.scrollY > window.innerHeight) {
    scrollBtn.classList.remove('.arrow-up_hide');
  } else {
    scrollBtn.classList.add('.arrow-up_hide');
  }
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};
