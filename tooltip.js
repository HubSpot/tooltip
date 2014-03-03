/*! tether-tooltip 0.2.2 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    define(factory);
  } else if (typeof exports === 'object') {
    module.exports = factory(require, exports, module);
  } else {
    root.Tooltip = factory();
  }
}(this, function(require, exports, module) {

(function() {
  var Tooltip, addClass, defaults, extend, initialized, removeClass, _Drop, _ref,
    __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

  _ref = Tether.Utils, addClass = _ref.addClass, removeClass = _ref.removeClass, extend = _ref.extend;

  _Drop = Drop.createContext({
    classPrefix: 'tooltip'
  });

  defaults = {
    position: 'top center',
    openOn: 'hover',
    classes: 'tooltip-theme-arrows',
    constrainToWindow: true,
    constrainToScrollParent: false
  };

  Tooltip = (function() {
    function Tooltip(options) {
      var _base, _base1;
      this.options = options;
      if (!this.options.target) {
        throw new Error("Tooltip Error: You must provide a target for Tooltip to attach to");
      }
      if ((_base = this.options).position == null) {
        _base.position = this.options.target.getAttribute('data-tooltip-position');
      }
      if ((_base1 = this.options).content == null) {
        _base1.content = this.options.target.getAttribute('data-tooltip');
      }
      this.options = extend({}, defaults, this.options);
      this.drop = new _Drop(this.options);
    }

    Tooltip.prototype.close = function() {
      return this.drop.close();
    };

    Tooltip.prototype.open = function() {
      return this.drop.open();
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
        target: el
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

return Tooltip;

}));
