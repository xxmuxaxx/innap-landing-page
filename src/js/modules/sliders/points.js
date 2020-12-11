import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-new
new Swiper('.points-slider-wrapper', {
  spaceBetween: 15,
  slidesPerView: 'auto',
  autoplay: {
    delay: 5000,
  },

  breakpoints: {
    600: {
      spaceBetween: 40,
    },
  },
});
