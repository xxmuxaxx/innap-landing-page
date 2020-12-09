import Swiper from 'swiper/bundle';

var mySwiper = new Swiper('.whats-happening-slider-wrapper', {
  spaceBetween: 15,
  width: 120,

  breakpoints: {
    900: {
      spaceBetween: 30,
      width: 160,
    },
  },
});
