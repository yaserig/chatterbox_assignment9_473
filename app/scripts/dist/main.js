(function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var a = typeof require == "function" && require;
        if (!u && a) return a(o, !0);
        if (i) return i(o, !0);
        var f = new Error("Cannot find module '" + o + "'");
        throw f.code = "MODULE_NOT_FOUND", f
      }
      var l = n[o] = {
        exports: {}
      };
      t[o][0].call(l.exports, function(e) {
        var n = t[o][1][e];
        return s(n ? n : e)
      }, l, l.exports, e, t, n, r)
    }
    return n[o].exports
  }
  var i = typeof require == "function" && require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s
})({
  1: [function(require, module, exports) {
    'use strict';

    Object.defineProperty(exports, "__esModule", {
      value: true
    });

    var _createClass = function() {
      function defineProperties(target, props) {
        for (var i = 0; i < props.length; i++) {
          var descriptor = props[i];
          descriptor.enumerable = descriptor.enumerable || false;
          descriptor.configurable = true;
          if ("value" in descriptor) descriptor.writable = true;
          Object.defineProperty(target, descriptor.key, descriptor);
        }
      }
      return function(Constructor, protoProps, staticProps) {
        if (protoProps) defineProperties(Constructor.prototype, protoProps);
        if (staticProps) defineProperties(Constructor, staticProps);
        return Constructor;
      };
    }();

    function _classCallCheck(instance, Constructor) {
      if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
      }
    }

    var ChatApp = function ChatApp() {
      _classCallCheck(this, ChatApp);

      console.log('Hello ES6!');
    };

    // not part of assignment 9 ..


    var ChatMessage = function() {
      function ChatMessage(_ref) {
        var m = _ref.message,
          _ref$user = _ref.user,
          u = _ref$user === undefined ? 'batman' : _ref$user,
          _ref$timestamp = _ref.timestamp,
          t = _ref$timestamp === undefined ? new Date().getTime() : _ref$timestamp;

        _classCallCheck(this, ChatMessage);

        this.message = m;
        this.user = u;
        this.timestamp = t;
      }

      _createClass(ChatMessage, [{
        key: 'serialize',
        value: function serialize() {
          return {
            user: this.user,
            message: this.message,
            timestamp: this.timestamp
          };
        }
      }]);

      return ChatMessage;
    }();

    exports.default = ChatApp;

  }, {}],
  2: [function(require, module, exports) {
    'use strict';

    var _app = require('./app');

    var _app2 = _interopRequireDefault(_app);

    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }

    new _app2.default();

    console.log('hello'); // for testing watch

  }, {
    "./app": 1
  }]
}, {}, [2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lDQU0sTyxHQUNGLG1CQUFjO0FBQUE7O0FBQ1YsWUFBUSxHQUFSLENBQVksWUFBWjtBQUVILEM7O0FBR0w7OztJQUNNLFc7QUFDRiwrQkFJRztBQUFBLFlBSFUsQ0FHVixRQUhDLE9BR0Q7QUFBQSw2QkFGQyxJQUVEO0FBQUEsWUFGTyxDQUVQLDZCQUZXLFFBRVg7QUFBQSxrQ0FEQyxTQUNEO0FBQUEsWUFEWSxDQUNaLGtDQURpQixJQUFJLElBQUosRUFBRCxDQUFhLE9BQWIsRUFDaEI7O0FBQUE7O0FBQ0MsYUFBSyxPQUFMLEdBQWUsQ0FBZjtBQUNBLGFBQUssSUFBTCxHQUFZLENBQVo7QUFDQSxhQUFLLFNBQUwsR0FBaUIsQ0FBakI7QUFDSDs7OztvQ0FDVztBQUNSLG1CQUFPO0FBQ0gsc0JBQU0sS0FBSyxJQURSO0FBRUgseUJBQVMsS0FBSyxPQUZYO0FBR0gsMkJBQVcsS0FBSztBQUhiLGFBQVA7QUFLSDs7Ozs7O2tCQUtVLE87Ozs7O0FDN0JmOzs7Ozs7QUFDQTs7QUFFQSxRQUFRLEdBQVIsQ0FBWSxPQUFaLEUsQ0FBdUIiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgQ2hhdEFwcCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdIZWxsbyBFUzYhJyk7XG5cbiAgICB9XG59XG5cbi8vIG5vdCBwYXJ0IG9mIGFzc2lnbm1lbnQgOSAuLlxuY2xhc3MgQ2hhdE1lc3NhZ2Uge1xuICAgIGNvbnN0cnVjdG9yKHtcbiAgICAgICAgbWVzc2FnZTogbSxcbiAgICAgICAgdXNlcjogdSA9ICdiYXRtYW4nLFxuICAgICAgICB0aW1lc3RhbXA6IHQgPSAobmV3IERhdGUoKSkuZ2V0VGltZSgpXG4gICAgfSkge1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtO1xuICAgICAgICB0aGlzLnVzZXIgPSB1O1xuICAgICAgICB0aGlzLnRpbWVzdGFtcCA9IHQ7XG4gICAgfVxuICAgIHNlcmlhbGl6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcixcbiAgICAgICAgICAgIG1lc3NhZ2U6IHRoaXMubWVzc2FnZSxcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGhpcy50aW1lc3RhbXBcbiAgICAgICAgfTtcbiAgICB9XG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBDaGF0QXBwO1xuIiwiaW1wb3J0IENoYXRBcHAgZnJvbSAnLi9hcHAnO1xubmV3IENoYXRBcHAoKTtcblxuY29uc29sZS5sb2coJ2hlbGxvJyk7ICAvLyBmb3IgdGVzdGluZyB3YXRjaFxuIl19
