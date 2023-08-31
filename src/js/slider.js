import { getDataApi, getProducts } from '../servises/productsApi.js';
let mainData;
const prod = getProducts();
console.log('prod', prod);

foo();

export default async function foo() {
  try {
    const mainData = await getDataApi().then(res => res.products);
    // console.log('mainData', mainData);
    const images = [...mainData]
      .filter(el => el.uniquePrice > 0)
      .map(el => el.mainImage);

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
    // return mainData;
  } catch (error) {
    console.log(error);
  } finally {
    $(document).ready(function () {
      $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
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
}
let productstList = mainData;
console.log('productstList', productstList);
