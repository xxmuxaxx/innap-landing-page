import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-unused-vars
var mySwiper = new Swiper('.whats-happening-slider-wrapper', {
  spaceBetween: 15,
  width: 120,

  breakpoints: {
    600: {
      spaceBetween: 30,
      width: 160,
    },
  },
});
