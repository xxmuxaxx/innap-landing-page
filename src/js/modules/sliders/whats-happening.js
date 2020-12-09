import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-new
new Swiper('.whats-happening-slider-wrapper', {
  spaceBetween: 15,
  slidesPerView: 'auto',

  breakpoints: {
    600: {
      spaceBetween: 30,
    },
  },
});
