import EventObserver from './EventObserver';

const AccordionObserver = new EventObserver();
const _instances = {};

export default class Accordion {
  constructor(options) {
    this.$el = options.el;
    this.id = options.id;
    this.$triggerBtn = options.triggerBtn;
    this.$hiddenEl = options.hiddenEl;
    // eslint-disable-next-line no-undef
    this.maxHeightHiddenEl = getComputedStyle(this.$hiddenEl).maxHeight.replace(/[^\d]/g, '');

    this.sliderInstance = this.$el.getAttribute('data-accordion-in-slider');

    this._isOpen = false;

    this.init();
  }

  init() {
    _instances[this.id] = this;

    setTimeout(() => {
      if (this.$hiddenEl.scrollHeight < this.maxHeightHiddenEl) {
        this.$el.classList.add('in-active');
      }
    }, 500);

    if (this.$triggerBtn) {
      this.$triggerBtn.addEventListener('click', (e) => {
        if (this._isOpen) {
          this.close();
        } else {
          this.open();
        }
        e.stopPropagation();
      });
    }

    AccordionObserver.subscribe(this.close.bind(this));
  }

  open() {
    if (this._isOpen) return false;

    AccordionObserver.broadcast();

    this.$el.classList.add('active');
    this.$hiddenEl.style.maxHeight = this.$hiddenEl.scrollHeight + 'px';

    this.updateHeight();

    this._isOpen = true;
  }

  close() {
    if (!this._isOpen) return false;

    this.$el.classList.remove('active');
    this.$hiddenEl.style.maxHeight = '';

    this.updateHeight();

    this._isOpen = false;
  }

  updateHeight() {
    if (this.sliderInstance && window[this.sliderInstance]) {
      window[this.sliderInstance].updateAutoHeight(300);
    }
  }

  static initAll() {
    const $els = document.querySelectorAll('[data-accordion]');

    $els.forEach((el) => {
      const id = el.getAttribute('data-accordion');
      const $hiddenEl = el.querySelector('.accordion-list');
      const $triggerBtn = el.querySelector('.accordion-button');

      // eslint-disable-next-line no-new
      new Accordion({
        el: el,
        id: id,
        triggerBtn: $triggerBtn,
        hiddenEl: $hiddenEl,
      });
    });
  }

  static open(id) {
    _instances[id].open();
  }

  static close(id) {
    _instances[id].close();
  }
}

Accordion.initAll();
