(function() {
  var Tooltip, addClass, defaults, initialized, removeClass, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ref = Tether.Utils, addClass = _ref.addClass, removeClass = _ref.removeClass;

  defaults = {
    attach: 'top center'
  };

  Tooltip = (function() {
    function Tooltip(options) {
      var content, _base, _base1, _ref1,
        _this = this;
      this.options = options;
      if ((_base = this.options).attach == null) {
        _base.attach = (_ref1 = this.options.el.getAttribute('data-tooltip-attach')) != null ? _ref1 : defaults.attach;
      }
      if ((_base1 = this.options).content == null) {
        _base1.content = this.options.el.getAttribute('data-tooltip');
      }
      this.tip = document.createElement('div');
      addClass(this.tip, 'tooltip-theme-arrows tooltip');
      content = document.createElement('div');
      addClass(content, 'tooltip-content');
      this.tip.appendChild(content);
      if (typeof this.options.content === 'string') {
        content.innerHTML = this.options.content;
      } else {
        content.appendChild(this.options.content);
      }
      this.tether = new Tether({
        target: this.options.el,
        element: this.tip,
        classPrefix: 'tooltip',
        enabled: false,
        constraints: [
          {
            to: 'window',
            pin: true,
            attachment: 'together'
          }
        ],
        attachment: this.options.attach
      });
      this.options.el.addEventListener('mouseover', function() {
        return _this.open();
      });
      this.options.el.addEventListener('mouseout', function() {
        return _this.close();
      });
    }

    Tooltip.prototype.open = function() {
      if (this.tip.parentNode == null) {
        document.body.appendChild(this.tip);
      }
      addClass(this.tip, 'tooltip-open');
      return this.tether.enable();
    };

    Tooltip.prototype.close = function() {
      removeClass(this.tip, 'tooltip-open');
      return this.tether.disable();
    };

    return Tooltip;

  })();

  initialized = [];

  Tooltip.init = function() {
    var el, _i, _len, _ref1, _results;
    _ref1 = document.querySelectorAll('[data-tooltip]');
    _results = [];
    for (_i = 0, _len = _ref1.length; _i < _len; _i++) {
      el = _ref1[_i];
      if (!(__indexOf.call(initialized, el) < 0)) {
        continue;
      }
      new Tooltip({
        el: el
      });
      _results.push(initialized.push(el));
    }
    return _results;
  };

  document.addEventListener('DOMContentLoaded', function() {
    if (Tooltip.autoinit !== false) {
      return Tooltip.init();
    }
  });

  window.Tooltip = Tooltip;

}).call(this);
