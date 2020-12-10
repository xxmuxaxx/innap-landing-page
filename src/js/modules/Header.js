import Helper from './helpers/Helper';

class Header {
  constructor($header) {
    this.$header = $header;
    this.currentScroll = window.pageYOffset;

    this._init();
  }

  _init() {
    if (!this.$header) return false;

    this.checkTouch();
    this.bindHeaderHandler();
  }

  bindHeaderHandler() {
    this._isTransitionEnd = false;

    this.$header.addEventListener(
      'transitionend',
      () => {
        this.addPadding();
        this.checkPosition();

        this.currentScroll = window.scrollY;

        window.addEventListener('mousewheel', (event) => this.checkPosition(event));

        this._isTransitionEnd = true;
      },
      {
        once: true,
      }
    );

    window.addEventListener('load', () => {
      setTimeout(() => {
        if (!this._isTransitionEnd) {
          // eslint-disable-next-line no-undef
          const transitionendEvent = new Event('transitionend');
          this.$header.dispatchEvent(transitionendEvent);
        }
      }, 300);
    });
  }

  checkPosition(event) {
    try {
      if (event.wheelDelta >= 0) {
        // && window.scrollY < this.currentScroll + 100
        this.$header.classList.remove('fixed');
        // this.currentScroll = window.scrollY;
      } else if (event.wheelDelta < 0) {
        // && window.scrollY > this.currentScroll + 100
        this.$header.classList.add('fixed');
        // this.currentScroll = window.scrollY;
      }

      this.currentScroll = window.pageYOffset;
    } catch {}
  }

  addPadding() {
    document.body.style.paddingTop = this.$header.clientHeight + 'px';
  }

  checkTouch() {
    if (document.body.clientHeight >= window.innerHeight) {
      if (Helper.isMobileOrTablet()) {
        document.body.classList.add('touch-device');
      } else if ($header.offsetWidth === window.innerWidth) {
        this.$header.style.paddingRight = `${Helper.getScrollBarWidth()}px`;
      }
    }
  }
}

const $header = document.querySelector('.header');

let header = null;

if ($header) header = new Header($header);

export { header };
