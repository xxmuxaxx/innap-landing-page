import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-new
new Swiper('.points-slider-wrapper', {
  spaceBetween: 15,
  width: 80,
  height: 80,

  breakpoints: {
    600: {
      spaceBetween: 40,
      width: 160,
      height: 160,
    },
  },
});
