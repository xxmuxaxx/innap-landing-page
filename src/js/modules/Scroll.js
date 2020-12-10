class Scroll {
  constructor(options) {
    this.$element = options.$element;
    this.$link = options.$link;

    this.init();
  }

  init() {
    this.$element.addEventListener('click', (event) => {
      event.preventDefault();

      let temp;

      // if (window.matchMedia('(min-width: 900px)').matches) {
      //   temp = document.querySelector('.header').classList.contains('fixed') ? 60 : 180;
      // } else {
      //   temp = 60;
      // }

      const scrollTarget = document.querySelector(this.$link);
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - 60;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth',
      });
    });
  }

  static initAll() {
    const $elements = document.querySelectorAll('[data-scroll-to]');

    $elements.forEach(($element) => {
      const $link = $element.getAttribute('data-scroll-to');

      // eslint-disable-next-line no-new
      new Scroll({
        $element: $element,
        $link: $link,
      });
    });
  }
}

Scroll.initAll();

export default Scroll;
