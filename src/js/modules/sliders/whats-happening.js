import Swiper from 'swiper/bundle';

// eslint-disable-next-line no-new
new Swiper('.whats-happening-slider-wrapper', {
  spaceBetween: 15,
  slidesPerView: 'auto',
  centeredSlides: true,
  centeredSlidesBounds: true,

  breakpoints: {
    600: {
      initialSlide: 3,
      spaceBetween: 30,
    },
  },
});
