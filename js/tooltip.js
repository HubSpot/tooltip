(function() {
  var Tooltip, addClass, defaults, initialized, removeClass, _Drop, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ref = Tether.Utils, addClass = _ref.addClass, removeClass = _ref.removeClass;

  _Drop = Drop.createContext({
    classPrefix: 'tooltip'
  });

  defaults = {
    position: 'top center'
  };

  Tooltip = (function() {
    function Tooltip(options) {
      var _base, _base1, _ref1;
      this.options = options;
      if ((_base = this.options).position == null) {
        _base.position = (_ref1 = this.options.el.getAttribute('data-tooltip-position')) != null ? _ref1 : defaults.position;
      }
      if ((_base1 = this.options).content == null) {
        _base1.content = this.options.el.getAttribute('data-tooltip');
      }
      console.log(this.options);
      new _Drop({
        target: this.options.el,
        content: this.options.content,
        classes: 'tooltip-theme-arrows',
        position: this.options.position,
        constrainToWindow: true,
        openOn: 'hover'
      });
    }

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
