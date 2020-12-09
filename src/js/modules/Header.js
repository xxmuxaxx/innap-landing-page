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

        window.addEventListener('scroll', () => this.checkPosition());

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

  checkPosition() {
    window.pageYOffset !== 0 ? this.$header.classList.add('fixed') : this.$header.classList.remove('fixed');

    this.currentScroll = window.pageYOffset;
  }

  addPadding() {
    const $body = document.body;
    $body.style.paddingTop = '';

    const paddingTop = Number(
      // eslint-disable-next-line no-undef
      getComputedStyle($body).paddingTop.replace(/[^\d]/g, '')
    );

    $body.style.paddingTop = paddingTop + this.$header.clientHeight + 'px';
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
