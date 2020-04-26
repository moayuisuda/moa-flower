// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({"src/shape/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shape =
/*#__PURE__*/
function () {
  function Shape(_ref) {
    var data = _ref.data,
        render = _ref.render,
        tick = _ref.tick,
        start = _ref.start,
        duration = _ref.duration;

    _classCallCheck(this, Shape);

    this.data = data;
    this.render = render;
    this.tick = tick;
    this.start = start;
    this.duration = duration;
    this.init();
  }

  _createClass(Shape, [{
    key: "init",
    value: function init() {
      this.proxy(this, this.data);
    }
  }, {
    key: "proxy",
    value: function proxy(target, data) {
      Object.keys(data).forEach(function (key) {
        Object.defineProperty(target, key, {
          get: function get() {
            return data[key];
          },
          set: function set(val) {
            data[key] = val;
          }
        });
      });
    }
  }]);

  return Shape;
}();

exports.Shape = Shape;
},{}],"src/shape/circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

var _base = require("./base");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Circle =
/*#__PURE__*/
function (_Shape) {
  _inherits(Circle, _Shape);

  function Circle(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        radius = _ref.radius,
        tick = _ref.tick,
        start = _ref.start,
        duration = _ref.duration,
        color = _ref.color,
        distance = _ref.distance;

    _classCallCheck(this, Circle);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Circle).call(this, {
      data: {
        origin: {
          x: x,
          y: y,
          radius: radius,
          color: color
        },
        x: x,
        y: y,
        color: color,
        radius: radius,
        distance: distance
      },
      start: start,
      duration: duration,
      tick: tick
    }));

    _this.initRender();

    return _this;
  }

  _createClass(Circle, [{
    key: "initRender",
    value: function initRender() {
      var _this2 = this;

      this.render = function (ctx) {
        ctx.fillStyle = _this2.color;
        ctx.arc(_this2.x, _this2.y, _this2.radius, 0, Math.PI * 2, false);
        ctx.fill();
      };
    }
  }]);

  return Circle;
}(_base.Shape);

exports.Circle = Circle;
},{"./base":"src/shape/base.js"}],"src/shape/triangle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = void 0;

var _base = require("./base");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var Triangle =
/*#__PURE__*/
function (_Shape) {
  _inherits(Triangle, _Shape);

  function Triangle(_ref) {
    var _this;

    var length = _ref.length,
        color = _ref.color,
        x = _ref.x,
        y = _ref.y,
        duration = _ref.duration;

    _classCallCheck(this, Triangle);

    _this.length = length;
    _this.data = {
      origin: {
        x: x,
        y: y,
        color: color,
        length: length
      },
      x: x,
      y: y,
      color: color,
      length: length
    };

    _this.initRender();

    return _possibleConstructorReturn(_this);
  }

  _createClass(Triangle, [{
    key: "initRender",
    value: function initRender() {
      var _this2 = this;

      this.render = function (ctx) {
        ctx.fillStyle = color;
        ctx.moveTo(_this2.x, _this2.y);
        ctx.lineTo(_this2.x + _this2.length, _this2.y);
        ctx.lineTo(_this2.x + _this2.x * 1 / 2, _this2.y + _this2.y * Math.pow(3, 2) / 2);
        ctx.fill();
      };
    }
  }]);

  return Triangle;
}(_base.Shape);

exports.Triangle = Triangle;
},{"./base":"src/shape/base.js"}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App =
/*#__PURE__*/
function () {
  function App(_ref) {
    var width = _ref.width,
        height = _ref.height,
        container = _ref.container,
        amount = _ref.amount;

    _classCallCheck(this, App);

    this.width = width;
    this.height = height;
    this.container = container;
    this.amount = amount;
    this.shapes = [];
    this.canvas;
    this.startAt;
    this.angle;
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.startAt = performance.now();
      this.angle = Math.PI * 2 / this.amount;
      this.initCanvas();
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = this.canvas = document.createElement("canvas");
      canvas.height = this.height;
      canvas.width = this.width;
      this.container.appendChild(canvas);
      this.ctx = this.canvas.getContext("2d"); // clip

      var angle_side = (Math.PI - this.angle) / 2;
      var height = this.width / 2 * Math.tan(angle_side);
      var ctx = this.ctx;
      this.ctx.beginPath();

      if (height > this.height) {
        var halfLength = Math.tan(this.angle / 2) * this.height;
        ctx.moveTo(this.width / 2 - halfLength, 0);
        ctx.lineTo(this.width / 2 + halfLength, 0);
        ctx.lineTo(this.width / 2, this.height);
        ctx.closePath();
      } else {
        ctx.fillStyle = '#000000';
        ctx.moveTo(this.width / 2, this.height);
        ctx.lineTo(0, this.height - height);
        ctx.lineTo(0, 0);
        ctx.lineTo(this.width, 0);
        ctx.lineTo(this.width, this.height - height);
        ctx.fill();
        ctx.closePath();
      }

      debugger;
      ctx.clip();
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var frame = function frame(t) {
        _this.ctx.clearRect(0, 0, _this.width, _this.height);

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = _this.shapes[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var i = _step.value;
            var time = t - _this.startAt;
            var progresstion = (time - i.start) / i.duration;

            if (progresstion <= 1) {
              i.tick(progresstion);
            }

            ;

            _this.draw(i);
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        requestAnimationFrame(frame);
      };

      frame(performance.now());
    }
  }, {
    key: "draw",
    value: function draw(shape) {
      this.ctx.beginPath();
      shape.render(this.ctx);
    }
  }, {
    key: "add",
    value: function add() {
      var _this$shapes;

      (_this$shapes = this.shapes).push.apply(_this$shapes, arguments);
    }
  }]);

  return App;
}();

exports.App = App;
},{}],"src/index.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Shape", {
  enumerable: true,
  get: function () {
    return _base.Shape;
  }
});
Object.defineProperty(exports, "Circle", {
  enumerable: true,
  get: function () {
    return _circle.Circle;
  }
});
Object.defineProperty(exports, "Triangle", {
  enumerable: true,
  get: function () {
    return _triangle.Triangle;
  }
});
Object.defineProperty(exports, "App", {
  enumerable: true,
  get: function () {
    return _app.App;
  }
});

var _base = require("./shape/base");

var _circle = require("./shape/circle");

var _triangle = require("./shape/triangle");

var _app = require("./app");
},{"./shape/base":"src/shape/base.js","./shape/circle":"src/shape/circle.js","./shape/triangle":"src/shape/triangle.js","./app":"src/app.js"}],"src/instance.js":[function(require,module,exports) {
"use strict";

var _index = require("./index.js");

var app = new _index.App({
  width: 200,
  height: 400,
  container: document.querySelector('#container'),
  amount: 6
});
var shape0 = new _index.Shape({
  data: {
    origin: {
      x: 0,
      y: 0
    },
    x: 0,
    y: 0,
    distance: {
      y: 500
    }
  },
  render: function render(ctx) {
    ctx.fillStyle = "#1E6FFF";
    ctx.fillRect(this.x, this.y, 200, 100);
  },
  tick: function tick(p) {
    var value = Math.pow(p, 2);
    this.y = this.origin.y + this.distance.y * value;
  },
  start: 0,
  duration: 1000
});
var shape1 = new _index.Circle({
  radius: 100,
  color: '#339933',
  distance: {
    y: 500
  },
  x: 100,
  y: 0,
  tick: function tick(p) {
    var value = Math.pow(p, 2);
    this.y = this.origin.y + this.distance.y * value;
  },
  start: 0,
  duration: 2000
});
app.add(shape0, shape1);
app.run();
},{"./index.js":"src/index.js"}],"C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "59559" + '/');

  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},["C:/Users/Administrator/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/instance.js"], null)
//# sourceMappingURL=/instance.2de8bb10.map