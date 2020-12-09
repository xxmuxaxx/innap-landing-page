import TypedJs from 'typed.js';

class Typed {
  constructor(options) {
    this.container = options.container;
    this.id = this.container.dataset.typed;
    this.images = options.images;
    this.text = options.text;
    this.output = options.output;

    this.init();
  }

  init() {
    this.text.id = `${this.id}_text`;
    this.output.id = `${this.id}_output`;

    this.typedJs = new TypedJs(`#${this.output.id}`, {
      stringsElement: `#${this.text.id}`,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 2000,
      loop: true,
      preStringTyped: (arrayPos) =>
        this.images.forEach((img, index) => {
          index !== arrayPos ? (img.style.display = 'none') : (img.style.display = 'block');
        }),
    });
  }

  static initAll() {
    const containers = document.querySelectorAll('[data-typed]');

    containers.length &&
      containers.forEach((container) => {
        const images = container.querySelectorAll('[data-image]');
        const text = container.querySelector('[data-text]');
        const output = container.querySelector('[data-output]');

        // eslint-disable-next-line no-new
        new Typed({
          container,
          images,
          text,
          output,
        });
      });
  }
}

Typed.initAll();
