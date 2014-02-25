Polymer('lim-', {
  x: "x",
  a: "a"
});

Polymer('deriv-', {
  x: "x"
});

Polymer('par-deriv-', {
  x: "x"
});

Polymer('inte-', {
  x: "x"
});

Polymer('def-inte-', {
  a: "a",
  b: "b",
  x: "x"
});

Polymer('sum-', {
  i: "i",
  m: "m",
  n: "n"
});

Polymer('prod-', {
  i: "i",
  m: "m",
  n: "n"
});

/*jslint browser: true */

(function () {
  'use strict';
  function adjust_height() {
    var i, bracket, brackets, container_height;
    brackets = document.getElementsByTagName('brack-');
    for (i = 0; i < brackets.length; i += 1) {
      bracket = brackets[i];
      container_height  = parseInt(window.getComputedStyle(bracket).getPropertyValue('height'), 10);
      bracket.style.fontSize = container_height + 'px';
    }
  }
  adjust_height();
  window.addEventListener('resize', adjust_height);
}());