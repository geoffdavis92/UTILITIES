'use strict';

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (descriptor.value) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var Plugin = (function () {
  function Plugin(name, site, code) {
    _classCallCheck(this, Plugin);

    this.name = name;
    this.site = site;
    this.code = code;
  }

  _createClass(Plugin, [{
    key: 'require',
    value: function require(module) {
      if (!module) {
        try {
          throw 'No Module!';
        } catch (e) {
          console.log(e);
        }
      } else {
        var head = document.querySelector('head');
        var html = head.innerHTML();
        html += '<script src="' + module.code + '"></script>';
      }
    }
  }]);

  return Plugin;
})();

var jquery = new Plugin('jquery', 'http://www.jquery.com/', 'https://code.jquery.com/jquery-2.1.3.min.js');

require(jquery);
