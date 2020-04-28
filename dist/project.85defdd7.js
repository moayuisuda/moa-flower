// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
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

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
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
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"src/shapes/base.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Shape = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Shape = /*#__PURE__*/function () {
  function Shape(_ref) {
    var data = _ref.data,
        render = _ref.render,
        tick = _ref.tick,
        start = _ref.start,
        duration = _ref.duration,
        effect = _ref.effect,
        rotate = _ref.rotate;

    _classCallCheck(this, Shape);

    this.data = data;
    this.render = render;
    this.tick = tick;
    this.start = start;
    this.duration = duration;
    this.effect = effect;
    this.rotate = rotate;
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
},{}],"src/shapes/circle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Circle = void 0;

var _base = require("./base");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Circle = /*#__PURE__*/function (_Shape) {
  _inherits(Circle, _Shape);

  var _super = _createSuper(Circle);

  function Circle(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        radius = _ref.radius,
        tick = _ref.tick,
        start = _ref.start,
        duration = _ref.duration,
        color = _ref.color,
        distance = _ref.distance,
        effect = _ref.effect,
        rotate = _ref.rotate;

    _classCallCheck(this, Circle);

    _this = _super.call(this, {
      data: {
        origin: {
          x: x,
          y: y,
          color: color
        },
        x: x,
        y: y,
        color: color,
        distance: distance
      },
      start: start,
      duration: duration,
      effect: effect,
      tick: tick,
      rotate: rotate
    });
    _this.origin.radius = radius;
    _this.radius = radius;

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
},{"./base":"src/shapes/base.js"}],"src/shapes/triangle.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Triangle = void 0;

var _base = require("./base");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Triangle = /*#__PURE__*/function (_Shape) {
  _inherits(Triangle, _Shape);

  var _super = _createSuper(Triangle);

  function Triangle(_ref) {
    var _this;

    var x = _ref.x,
        y = _ref.y,
        tick = _ref.tick,
        start = _ref.start,
        duration = _ref.duration,
        color = _ref.color,
        distance = _ref.distance,
        effect = _ref.effect,
        topAngle = _ref.topAngle,
        length = _ref.length,
        rotate = _ref.rotate;

    _classCallCheck(this, Triangle);

    _this = _super.call(this, {
      data: {
        origin: {
          x: x,
          y: y,
          color: color,
          topAngle: topAngle
        },
        x: x,
        y: y,
        color: color,
        distance: distance,
        topAngle: topAngle
      },
      start: start,
      duration: duration,
      effect: effect,
      tick: tick,
      rotate: rotate
    });
    _this.origin.length = length;
    _this.length = length;

    _this.initRender();

    return _this;
  }

  _createClass(Triangle, [{
    key: "initRender",
    value: function initRender() {
      var _this2 = this;

      this.render = function (ctx) {
        ctx.fillStyle = _this2.color;
        ctx.moveTo(_this2.x - _this2.length / 2, _this2.y);
        ctx.lineTo(_this2.x + _this2.length / 2, _this2.y);
        ctx.lineTo(_this2.x, _this2.y - _this2.length / 2 / Math.tan(_this2.topAngle / 2));
        ctx.fill();
      };
    }
  }]);

  return Triangle;
}(_base.Shape);

exports.Triangle = Triangle;
},{"./base":"src/shapes/base.js"}],"src/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(_ref) {
    var length = _ref.length,
        container = _ref.container,
        _ref$remain = _ref.remain,
        remain = _ref$remain === void 0 ? false : _ref$remain,
        _ref$loop = _ref.loop,
        loop = _ref$loop === void 0 ? false : _ref$loop;

    _classCallCheck(this, App);

    this.length = length;
    this.container = container;
    this.remain = remain;
    this.loop = loop;
    this.shapes = []; // full pic

    this.intactCanvas;
    this.intactCtx; // single element

    this.canvas;
    this.ctx;
    this.copies;
    this.startPoint;
    this.init();
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      this.initCanvas();
      this.initIntactCanvas();
    }
  }, {
    key: "initIntactCanvas",
    value: function initIntactCanvas() {
      var intactCanvas = this.intactCanvas = document.createElement("canvas");
      intactCanvas.style.backgroundColor = "#0e0d51";
      this.container.appendChild(intactCanvas);
      this.intactCanvas.width = this.length * 2;
      this.intactCanvas.height = this.length * 2;
      this.ctxIntact = intactCanvas.getContext("2d");
    }
  }, {
    key: "initCanvas",
    value: function initCanvas() {
      var canvas = this.canvas = document.createElement("canvas");
      canvas.height = this.length;
      canvas.width = this.length;
      this.container.appendChild(canvas);
      this.ctx = this.canvas.getContext("2d");
    }
  }, {
    key: "run",
    value: function run() {
      var _this = this;

      var frame = function frame(t) {
        if (!_this.remain) {
          _this.ctx.clearRect(0, 0, _this.length, _this.length);

          _this.ctxIntact.clearRect(0, 0, _this.intactCanvas.width, _this.intactCanvas.height);

          console.log('end');
        }

        var _iterator = _createForOfIteratorHelper(_this.shapes),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var i = _step.value;
            // caculate time
            var progresstion = (t - i.start) / i.duration;

            if (progresstion <= 1) {
              i.tick(progresstion);
            } else {
              _this.shapes.splice(_this.shapes.indexOf(i), 1);
            }

            _this.draw(i);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }

        _this.drawIntact();

        requestAnimationFrame(frame);
      };

      frame(performance.now());
    }
  }, {
    key: "drawIntact",
    value: function drawIntact() {
      this.ctxIntact.drawImage(this.canvas, this.length, this.length);

      for (var i = 0; i < 3; i++) {
        this.ctxIntact.translate(this.length, this.length);
        this.ctxIntact.rotate(Math.PI * 1 / 2);
        this.ctxIntact.translate(-this.length, -this.length);
        this.ctxIntact.drawImage(this.canvas, this.length, this.length);
      }

      this.ctxIntact.translate(this.length, this.length);
      this.ctxIntact.rotate(Math.PI * 1 / 2);
      this.ctxIntact.translate(-this.length, -this.length);
    }
  }, {
    key: "draw",
    value: function draw(shape) {
      this.ctx.beginPath();
      this.ctx.globalCompositeOperation = shape.effect ? shape.effect : "source-over";

      if (shape.rotate) {
        this.ctx.rotate(shape.rotate);
      }

      shape.render(this.ctx);
      if (shape.rotate) this.ctx.rotate(-shape.rotate);
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

var _base = require("./shapes/base");

var _circle = require("./shapes/circle");

var _triangle = require("./shapes/triangle");

var _app = require("./app");
},{"./shapes/base":"src/shapes/base.js","./shapes/circle":"src/shapes/circle.js","./shapes/triangle":"src/shapes/triangle.js","./app":"src/app.js"}],"project/variable.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.effects = exports.colors = exports.global = void 0;
var global = {
  length: 500
};
exports.global = global;
var colors = ['#0e0d51', '#ffffff', '#005acf', '#01c8fa', '#fd0908', '#02b25e', '#fecf11', '#80809c', '#fce593', '#79d7f3'];
exports.colors = colors;
var effects = {
  circle: ['xor', 'source-over'],
  triangle: ['xor']
};
exports.effects = effects;
},{}],"src/util.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.randomIn = randomIn;
exports.randomInDouble = randomInDouble;

function isObj(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
}

function isArray(arr) {
  return Object.prototype.toString.call(arr) === '[object Array]';
}

function isComplecated(obj) {
  return obj instanceof Object;
}

function randomIn(min, max) {
  return function () {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };
}

function randomInDouble(min, max) {
  return function () {
    return Math.random() * (max - min + 1) + min;
  };
}
},{}],"project/layers/layer_triangle.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _triangle = require("../../src/shapes/triangle");

var _variable = require("../variable");

var _util = require("../../src/util");

var getLength = (0, _util.randomIn)(150, 400);
var getAngle = (0, _util.randomInDouble)(Math.PI / 180 * 10, Math.PI / 180 * 20);
var getDuration = (0, _util.randomIn)(5000, 15000);

function getColor() {
  return _variable.colors[(0, _util.randomIn)(0, _variable.colors.length - 1)()];
}

function getEffect() {
  return _variable.effects.triangle[(0, _util.randomIn)(0, _variable.effects.triangle.length - 1)()];
}

function generate() {
  var length = getLength();
  var topAngle = getAngle();
  var color = getColor();
  var start = performance.now();
  var duration = getDuration();
  var effect = getEffect();
  var height = 1 / 2 * length / Math.tan(1 / 2 * topAngle);
  var t1 = new _triangle.Triangle({
    length: length,
    color: color,
    rotate: Math.PI / 180 * 90,
    distance: {
      y: -_variable.global.length - height,
      topAngle: -topAngle
    },
    x: 0,
    y: height,
    topAngle: topAngle,
    effect: effect,
    tick: function tick(p) {
      var value = Math.sqrt(p, 2);
      this.y = this.origin.y + this.distance.y * value;
      this.topAngle = this.origin.topAngle + this.distance.topAngle * value;
    },
    start: start,
    duration: duration
  });
  var t2 = new _triangle.Triangle({
    length: length,
    color: color,
    distance: {
      y: -_variable.global.length * Math.sqrt(2, 2) - height,
      topAngle: -topAngle
    },
    x: 0,
    y: height,
    rotate: Math.PI / 180 * 135,
    topAngle: topAngle,
    effect: effect,
    tick: function tick(p) {
      var value = Math.sqrt(p, 2);
      this.y = this.origin.y + this.distance.y * value;
      this.topAngle = this.origin.topAngle + this.distance.topAngle * value;
    },
    start: start,
    duration: duration
  });
  var t3 = new _triangle.Triangle({
    length: length,
    color: color,
    rotate: Math.PI / 180 * 180,
    distance: {
      y: -_variable.global.length - height,
      topAngle: -topAngle
    },
    x: 0,
    y: height,
    topAngle: topAngle,
    effect: effect,
    tick: function tick(p) {
      var value = Math.sqrt(p, 2);
      this.y = this.origin.y + this.distance.y * value;
      this.topAngle = this.origin.topAngle + this.distance.topAngle * value;
    },
    start: start,
    duration: duration
  });
  return [t1, t2, t3];
}

var _default = generate;
exports.default = _default;
},{"../../src/shapes/triangle":"src/shapes/triangle.js","../variable":"project/variable.js","../../src/util":"src/util.js"}],"project/layers/layer_circle.js":[function(require,module,exports) {

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _circle = require("../../src/shapes/circle");

var _variable = require("../variable");

var _util = require("../../src/util");

var getRadius = (0, _util.randomIn)(150, 400);
var getDuration = (0, _util.randomIn)(5000, 15000);

function getColor() {
  return _variable.colors[(0, _util.randomIn)(0, _variable.colors.length - 1)()];
}

function getEffect() {
  var index = (0, _util.randomIn)(0, _variable.effects.circle.length - 1)();
  return _variable.effects.circle[index];
}

function generate() {
  var radius = getRadius();
  var color = getColor();
  var start = performance.now();
  var duration = getDuration();
  var effect = getEffect();
  var t1 = new _circle.Circle({
    radius: radius,
    color: color,
    effect: effect,
    distance: {
      y: _variable.global.length + radius * 2
    },
    x: 0,
    y: -radius,
    tick: function tick(p) {
      var value = Math.pow(p, 2);
      this.y = this.origin.y + this.distance.y * value;
    },
    start: start,
    duration: duration
  });
  var t2 = new _circle.Circle({
    radius: radius,
    color: color,
    effect: effect,
    distance: {
      x: _variable.global.length + radius * 2,
      y: _variable.global.length + radius * 2
    },
    x: -radius,
    y: -radius,
    tick: function tick(p) {
      var value = Math.pow(p, 2);
      this.x = this.origin.x + this.distance.x * value;
      this.y = this.origin.y + this.distance.y * value;
    },
    start: start,
    duration: duration
  });
  var t3 = new _circle.Circle({
    radius: radius,
    color: color,
    effect: effect,
    distance: {
      x: _variable.global.length + radius * 2
    },
    x: -radius,
    y: 0,
    tick: function tick(p) {
      var value = Math.pow(p, 2);
      this.x = this.origin.x + this.distance.x * value;
    },
    start: start,
    duration: duration
  });
  return [t1, t2, t3];
}

var _default = generate;
exports.default = _default;
},{"../../src/shapes/circle":"src/shapes/circle.js","../variable":"project/variable.js","../../src/util":"src/util.js"}],"project/index.js":[function(require,module,exports) {

"use strict";

var _index = require("../src/index.js");

var _variable = require("./variable");

var _layer_triangle = _interopRequireDefault(require("./layers/layer_triangle"));

var _layer_circle = _interopRequireDefault(require("./layers/layer_circle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var app = new _index.App({
  length: _variable.global.length,
  // remain: true,
  container: document.querySelector('#container')
}); // if you want to every loop haw the same behavior, make sure the attrubute "duration" and "start" of different shapes have the same value

setInterval(function () {
  app.add.apply(app, _toConsumableArray((0, _layer_circle.default)()).concat(_toConsumableArray((0, _layer_triangle.default)())));
}, 2000);
app.run();
},{"../src/index.js":"src/index.js","./variable":"project/variable.js","./layers/layer_triangle":"project/layers/layer_triangle.js","./layers/layer_circle":"project/layers/layer_circle.js"}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "51724" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
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

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
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
}
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","project/index.js"], null)
//# sourceMappingURL=/project.85defdd7.js.map