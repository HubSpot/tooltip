/* global Tether Drop */

const { extend } = Tether.Utils;

const _Drop = Drop.createContext({
  classPrefix: 'tooltip'
});

const defaults = {
  position: 'top center',
  openOn: 'hover',
  classes: 'tooltip-theme-arrows',
  constrainToWindow: true,
  constrainToScrollParent: false
};

class Tooltip {
  constructor(options) {
    this.options = options;

    if (!this.options.target) {
      throw new Error('Tooltip Error: You must provide a target for Tooltip to attach to');
    }

    const position = this.options.target.getAttribute('data-tooltip-position');
    if (position) {
      if (typeof this.options.position === 'undefined') {
        this.options.position = position;
      }
    }

    const content = this.options.target.getAttribute('data-tooltip');
    if (content) {
      if (typeof this.options.content === 'undefined') {
        this.options.content = content;
      }
    }

    if (!this.options.content) {
      throw new Error('Tooltip Error: You must provide content for Tooltip to display');
    }

    this.options = extend({}, defaults, this.options);

    this.drop = new _Drop(this.options);
  }

  close() {
    this.drop.close();
  }

  open() {
    this.drop.open();
  }

  toggle() {
    this.drop.toggle();
  }

  remove() {
    this.drop.remove();
  }

  destroy() {
    this.drop.destroy();
  }

  position() {
    this.drop.position();
  }
}

let initialized = [];

Tooltip.init = () => {
  const tooltipElements = document.querySelectorAll('[data-tooltip]');
  const len = tooltipElements.length;
  for (let i = 0; i < len; ++i) {
    const el = tooltipElements[i];
    if (initialized.indexOf(el) === -1) {
      new Tooltip({
        target: el
      });
      initialized.push(el);
    }
  }
};

document.addEventListener('DOMContentLoaded', () => {
  if (Tooltip.autoinit !== false) {
    Tooltip.init();
  }
});
