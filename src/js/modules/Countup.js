import { CountUp } from 'countup.js';
import Helper from './helpers/Helper';

class Countup {
  constructor(options) {
    this.element = options.element;
    this.value = Number(options.value);
    this.delay = Number(options.delay);
    this.duration = Number(options.duration);
    this.start = Number(options.start);
    this.id = String(options.id);
    this.countup = new CountUp(this.id, this.value, {
      startVal: this.start || 0,
      duration: this.duration,
    });

    this.init();
  }

  get isShow() {
    return Helper.isVisibleFull(this.element);
  }

  init() {
    this.startAnimate = this.startAnimate.bind(this);
    document.addEventListener('scroll', this.startAnimate);
    document.addEventListener('transitionend', this.startAnimate);
  }

  startAnimate() {
    if (this.isShow) {
      setTimeout(() => this.countup.start(), this.delay);

      document.removeEventListener('scroll', this.startAnimate);
      document.removeEventListener('transitionend', this.startAnimate);
    }
  }

  static initAll() {
    const elements = document.querySelectorAll('[data-countup]');

    elements.length &&
      elements.forEach((element) => {
        const value = element.dataset.countup;
        const delay = element.dataset.delay || 0;
        const duration = element.dataset.duration || 1;
        const start = element.dataset.start || 0;
        const id = element.id;

        // eslint-disable-next-line no-new
        new Countup({
          element: element,
          value: value,
          delay: delay,
          duration: duration,
          start: start,
          id: id,
        });
      });
  }
}

Countup.initAll();
