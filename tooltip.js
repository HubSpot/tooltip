(function() {
  var DropTooltip, Tooltip, defaults, initialized, _old, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  DropTooltip = Drop.createContext();

  defaults = {
    attach: 'top center'
  };

  Tooltip = (function() {
    function Tooltip(options) {
      var _base, _base1, _ref;
      this.options = options;
      if ((_base = this.options).attach == null) {
        _base.attach = (_ref = this.options.el.getAttribute('data-tooltip-attach')) != null ? _ref : defaults.attach;
      }
      if ((_base1 = this.options).content == null) {
        _base1.content = this.options.el.getAttribute('data-tooltip');
      }
      this.drop = new DropTooltip({
        target: this.options.el,
        className: 'drop-tooltip-theme-arrows',
        attach: this.options.attach,
        constrainToWindow: true,
        constrainToScrollParent: false,
        openOn: 'hover',
        content: this.options.content
      });
    }

    return Tooltip;

  })();

  initialized = [];

  Tooltip.init = function() {
    var el, _i, _len, _ref, _results;
    _ref = document.querySelectorAll('[data-tooltip]');
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      el = _ref[_i];
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

  if ((((_ref = document.documentElement) != null ? _ref.doScroll : void 0) != null) && (document.createEventObject != null)) {
    _old = document.onreadystatechange;
    document.onreadystatechange = function() {
      if (document.readyState === 'complete') {
        Tooltip.init();
      }
      return _old != null ? _old.apply(this, arguments) : void 0;
    };
  } else {
    document.addEventListener('DOMContentLoaded', function() {
      return Tooltip.init();
    }, false);
  }

  window.Tooltip = Tooltip;

}).call(this);
