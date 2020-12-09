import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-new
new Swiper('.points-slider-wrapper', {
  slidesPerView: 3,
  spaceBetween: 15,

  breakpoints: {
    900: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    600: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
  },
});
