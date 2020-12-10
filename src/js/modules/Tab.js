import { CountUp } from 'countup.js';

const _instances = {};

export default class TabsController {
  constructor(options) {
    this.id = options.id;
    this.$triggersWrap = options.$triggersWrap;
    this.$elsWrap = options.$elsWrap;
    this.$triggers = options.$triggers;
    this.$els = options.$els;
    this.$additional = options.$additional;
    this.$additionalItems = options.$additionalItems;
    this.activeAdditionalItem = null;

    this.init();
  }

  init() {
    _instances[this.id] = this;

    this.$triggers.forEach(($trigger) => {
      $trigger.addEventListener('click', () => this.open($trigger));
    });

    this.$additional &&
      this.$additionalItems.forEach((item) => {
        item.countup = new CountUp(item, item.innerHTML, { startVal: 0 });
      });

    this.open(this.$triggers[0]);
  }

  open($trigger) {
    const id = $trigger.getAttribute('data-tab');

    this.$triggers.forEach(($trigger) => {
      $trigger.classList.remove('active');
    });

    $trigger.classList.add('active');

    this.$els.forEach(($el, i) => {
      const isCurrent = $el.getAttribute('data-tab-content') === id;

      if (isCurrent) {
        $el.classList.add('active');
      } else {
        $el.classList.remove('active');
      }
    });

    this.$additional &&
      this.$additionalItems.forEach((item, index) => {
        const isCurrent = item.getAttribute('data-additional-tab') === id;

        if (isCurrent) {
          item.style.display = '';
          item.countup.start();
          this.activeAdditionalItem = index;

          this.$additionalItems.forEach((item, index) => {
            if (index !== this.activeAdditionalItem) {
              item.countup.reset();
              item.countup.startVal = this.$additionalItems[this.activeAdditionalItem].countup.endVal;
            }
          });
        } else {
          item.style.display = 'none';
        }
      });
  }

  close() {}

  static open(instanceId, $trigger) {
    _instances[instanceId].open($trigger);
  }

  static initAll() {
    const $triggersWraps = document.querySelectorAll('[data-tabs]');

    $triggersWraps.forEach(($triggersWrap) => {
      const id = $triggersWrap.getAttribute('data-tabs');
      const $triggers = $triggersWrap.querySelectorAll('[data-tab]');
      const $elsWrap = document.querySelector(`[data-tabs-contents="${id}"]`);
      const $additional = document.querySelector(`[data-additional-tabs="${id}"]`);
      const $additionalItems = $additional && $additional.querySelectorAll(`[data-additional-tab]`);

      if (!$elsWrap) return false;

      const $els = $elsWrap.querySelectorAll('[data-tab-content]');

      // eslint-disable-next-line no-new
      new TabsController({
        id: id,
        $triggersWrap,
        $elsWrap,
        $triggers: [...$triggers],
        $els: [...$els],
        $additional: $additional,
        $additionalItems: $additional && [...$additionalItems],
      });
    });
  }
}

TabsController.initAll();

window.TabsController = TabsController;
