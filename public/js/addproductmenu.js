'use strict';

(function () {
  var _btns = document.querySelectorAll('.drop-btn'),
    _eachBtn = function (callback) {
      Array.prototype.forEach.call(_btns, function (elem) {
        callback.call(this, elem);
      });
    },
    _initListener = function (e) {
      e.preventDefault();
      e.stopPropagation();
      _eachBtn(function (btn) {
        btn.classList.remove('dropdown-open');
      });
      this.classList.toggle('dropdown-open');
    },
    _hideAll = function () {
      _eachBtn(function (btn) {
        btn.classList.remove('dropdown-open');
      });
    };

  _eachBtn(function (btn) {
    btn.addEventListener('touchend', function (e) {
      _initListener.call(this, e);
    });

    btn.addEventListener('click', function (e) {
      _initListener.call(this, e);
    });
  });

  document.addEventListener('touchend', function () {
    _hideAll();
  });

  document.addEventListener('click', function () {
    _hideAll();
  });
})();
