(function() {
  var init, isMobile, setupHero;

  isMobile = $(window).width() < 567;

  init = function() {
    return setupHero();
  };

  setupHero = function() {
    var $target, frameLengthMS, frames, openAllDrops, openIndex, openNextDrop, position, positions, _i, _len;
    $target = $('.tooltip-target-demo');
    positions = ['top left', 'left top', 'left middle', 'left bottom', 'bottom left', 'bottom center', 'bottom right', 'right bottom', 'right middle', 'right top', 'top right', 'top center'];
    if (isMobile) {
      positions = ['top left', 'bottom left', 'bottom right', 'top right'];
    }
    window.drops = {};
    for (_i = 0, _len = positions.length; _i < _len; _i++) {
      position = positions[_i];
      drops[position] = new Tooltip({
        target: $target[0],
        position: position,
        openOn: '',
        content: $.map(position.split(' '), function(word) {
          return word.substr(0, 1).toUpperCase() + word.substr(1);
        }).join(' '),
        constrainToWindow: false
      });
    }
    openIndex = 0;
    frames = 0;
    frameLengthMS = 10;
    openAllDrops = function() {
      var drop, _results;
      _results = [];
      for (position in drops) {
        drop = drops[position];
        _results.push(drop.open());
      }
      return _results;
    };
    openNextDrop = function() {
      var drop;
      for (position in drops) {
        drop = drops[position];
        drop.close();
      }
      drops[positions[openIndex]].open();
      openIndex = (openIndex + 1) % positions.length;
      if (frames > 20) {
        return openAllDrops();
      }
      frames += 1;
      return setTimeout(openNextDrop, frameLengthMS * frames);
    };
    if (isMobile) {
      drops['top left'].open();
      return drops['bottom right'].open();
    } else {
      return openNextDrop();
    }
  };

  init();

}).call(this);
