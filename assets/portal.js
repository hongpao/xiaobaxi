/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/assets/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by xiangpitang on 17/1/11.
 */

var Dispatcher = __webpack_require__(14);

module.exports = new Dispatcher();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by hongpao on 2018/3/12.
 */

var keyMirror = __webpack_require__(16);

module.exports = keyMirror({
    CREATE_INFO: null,
    ADD_TAG: null,
    DELETE_TAG: null
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hongpao on 2018/3/12.
 */

var Navigation = function Navigation(props) {
    return React.createElement(
        "div",
        { className: "nav-box" },
        React.createElement(
            "div",
            { className: "nav-content" },
            React.createElement("img", { src: "../../../../images/rockets.png", className: "logo", alt: "" }),
            React.createElement(
                "div",
                { className: "nav-tab" },
                "\u9996\u9875"
            ),
            React.createElement(
                "div",
                { className: "nav-tab" },
                "\u5217\u8868"
            ),
            React.createElement(
                "div",
                { className: "nav-info" },
                "\u7EA2\u888D"
            )
        )
    );
};

exports.default = Navigation;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*
 *  Create by hongpao
 *  on 17/10/24
 *  异步请求处理公用方法
 * */

var HTTP = {
    ajax: function ajax(options) {
        setTimeout(function () {
            HTTP._ajax(options);
        }, 0);
    },
    beforeSendHandler: function beforeSendHandler() {},
    completeHandler: function completeHandler() {},
    successHandler: function successHandler(success, result) {
        if (result.code) {
            if (result.code === 1) {
                if (success !== undefined) {
                    success(result);
                }
            } else if (result.code === -1) {
                window.location.href = result.data.url || "";
            }
        }
    },
    errorHandler: function errorHandler() {},
    _ajax: function _ajax(options) {
        if ((typeof options === "undefined" ? "undefined" : _typeof(options)) === "object") {

            //异步请求默认初始值
            var type = 'get';
            var timeout = 15000;
            var isShowLoading = true;
            var url = options.url;
            var data = options.params || {};
            var _beforeSend = options.beforeSend || undefined;
            var reload = options.reload || undefined;
            var _success = options.success || undefined;
            var complete = options.complete || undefined;
            var error = options.error || undefined;
            var contentType = "application/x-www-form-urlencoded;application/json;charset=utf-8;";
            var processData = true;
            var async = true;
            var cache = false;

            //若有传值，则替换
            if (options.type !== undefined) {
                type = options.type;
            }
            if (options.contentType !== undefined) {
                contentType = options.contentType;
            }
            if (options.processData !== undefined) {
                processData = options.processData;
            }
            if (options.timeout !== undefined) {
                timeout = options.timeout;
            }
            if (options.showLoading !== undefined) {
                isShowLoading = options.showLoading;
            }

            //时间戳，防止缓存
            // let t = new Date();

            //默认需要添加的参数
            // data.t = t.getTime();

            var self = this;

            $.ajax({
                type: type,
                url: url,
                dataType: 'json',
                crossDomain: true,
                data: data,
                timeout: timeout,
                contentType: contentType,
                processData: processData,
                async: async,
                cache: cache,
                beforeSend: function beforeSend() {
                    if (_beforeSend) {
                        self.beforeSendHandler();
                    }
                },
                success: function success(result) {
                    self.successHandler(_success, result);
                },
                complete: function complete() {
                    if (self.complete) {
                        self.completeHandler();
                    }
                },
                error: function error(xhr, type, _error) {
                    var resp = {
                        xhr: xhr,
                        type: type,
                        error: _error
                    };
                    console.log("ajax error: ", resp);
                    self.errorHandler(resp);
                }
            });
        } else {
            throw new Error("options must's object");
        }
    }
};

exports.default = HTTP;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *  Create by hongpao
 *  on 18/3/13
 *  异步请求接口列表
 * */

// const BASE_URL = require(ENV_BASE_URL); //域名

var BASE_URL = {
    API_BASE_URL: "http://upload.2dfire-daily.com"
};

var URL = {
    //获取资源地址列表
    // API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/upfileandlist",


    API_SAVE_INFO: "http://localhost:1280/save",
    API_UPLOAD_FILES: "http://localhost:1280/uploadFiles"
};

module.exports = URL;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 9 */
/***/ (function(module, exports) {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.

function EventEmitter() {
  this._events = this._events || {};
  this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
  if (!isNumber(n) || n < 0 || isNaN(n))
    throw TypeError('n must be a positive number');
  this._maxListeners = n;
  return this;
};

EventEmitter.prototype.emit = function(type) {
  var er, handler, len, args, i, listeners;

  if (!this._events)
    this._events = {};

  // If there is no 'error' event listener then throw.
  if (type === 'error') {
    if (!this._events.error ||
        (isObject(this._events.error) && !this._events.error.length)) {
      er = arguments[1];
      if (er instanceof Error) {
        throw er; // Unhandled 'error' event
      } else {
        // At least give some kind of context to the user
        var err = new Error('Uncaught, unspecified "error" event. (' + er + ')');
        err.context = er;
        throw err;
      }
    }
  }

  handler = this._events[type];

  if (isUndefined(handler))
    return false;

  if (isFunction(handler)) {
    switch (arguments.length) {
      // fast cases
      case 1:
        handler.call(this);
        break;
      case 2:
        handler.call(this, arguments[1]);
        break;
      case 3:
        handler.call(this, arguments[1], arguments[2]);
        break;
      // slower
      default:
        args = Array.prototype.slice.call(arguments, 1);
        handler.apply(this, args);
    }
  } else if (isObject(handler)) {
    args = Array.prototype.slice.call(arguments, 1);
    listeners = handler.slice();
    len = listeners.length;
    for (i = 0; i < len; i++)
      listeners[i].apply(this, args);
  }

  return true;
};

EventEmitter.prototype.addListener = function(type, listener) {
  var m;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events)
    this._events = {};

  // To avoid recursion in the case that type === "newListener"! Before
  // adding it to the listeners, first emit "newListener".
  if (this._events.newListener)
    this.emit('newListener', type,
              isFunction(listener.listener) ?
              listener.listener : listener);

  if (!this._events[type])
    // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
  else if (isObject(this._events[type]))
    // If we've already got an array, just append.
    this._events[type].push(listener);
  else
    // Adding the second element, need to change to array.
    this._events[type] = [this._events[type], listener];

  // Check for listener leak
  if (isObject(this._events[type]) && !this._events[type].warned) {
    if (!isUndefined(this._maxListeners)) {
      m = this._maxListeners;
    } else {
      m = EventEmitter.defaultMaxListeners;
    }

    if (m && m > 0 && this._events[type].length > m) {
      this._events[type].warned = true;
      console.error('(node) warning: possible EventEmitter memory ' +
                    'leak detected. %d listeners added. ' +
                    'Use emitter.setMaxListeners() to increase limit.',
                    this._events[type].length);
      if (typeof console.trace === 'function') {
        // not supported in IE 10
        console.trace();
      }
    }
  }

  return this;
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.once = function(type, listener) {
  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  var fired = false;

  function g() {
    this.removeListener(type, g);

    if (!fired) {
      fired = true;
      listener.apply(this, arguments);
    }
  }

  g.listener = listener;
  this.on(type, g);

  return this;
};

// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
  var list, position, length, i;

  if (!isFunction(listener))
    throw TypeError('listener must be a function');

  if (!this._events || !this._events[type])
    return this;

  list = this._events[type];
  length = list.length;
  position = -1;

  if (list === listener ||
      (isFunction(list.listener) && list.listener === listener)) {
    delete this._events[type];
    if (this._events.removeListener)
      this.emit('removeListener', type, listener);

  } else if (isObject(list)) {
    for (i = length; i-- > 0;) {
      if (list[i] === listener ||
          (list[i].listener && list[i].listener === listener)) {
        position = i;
        break;
      }
    }

    if (position < 0)
      return this;

    if (list.length === 1) {
      list.length = 0;
      delete this._events[type];
    } else {
      list.splice(position, 1);
    }

    if (this._events.removeListener)
      this.emit('removeListener', type, listener);
  }

  return this;
};

EventEmitter.prototype.removeAllListeners = function(type) {
  var key, listeners;

  if (!this._events)
    return this;

  // not listening for removeListener, no need to emit
  if (!this._events.removeListener) {
    if (arguments.length === 0)
      this._events = {};
    else if (this._events[type])
      delete this._events[type];
    return this;
  }

  // emit removeListener for all listeners on all events
  if (arguments.length === 0) {
    for (key in this._events) {
      if (key === 'removeListener') continue;
      this.removeAllListeners(key);
    }
    this.removeAllListeners('removeListener');
    this._events = {};
    return this;
  }

  listeners = this._events[type];

  if (isFunction(listeners)) {
    this.removeListener(type, listeners);
  } else if (listeners) {
    // LIFO order
    while (listeners.length)
      this.removeListener(type, listeners[listeners.length - 1]);
  }
  delete this._events[type];

  return this;
};

EventEmitter.prototype.listeners = function(type) {
  var ret;
  if (!this._events || !this._events[type])
    ret = [];
  else if (isFunction(this._events[type]))
    ret = [this._events[type]];
  else
    ret = this._events[type].slice();
  return ret;
};

EventEmitter.prototype.listenerCount = function(type) {
  if (this._events) {
    var evlistener = this._events[type];

    if (isFunction(evlistener))
      return 1;
    else if (evlistener)
      return evlistener.length;
  }
  return 0;
};

EventEmitter.listenerCount = function(emitter, type) {
  return emitter.listenerCount(type);
};

function isFunction(arg) {
  return typeof arg === 'function';
}

function isNumber(arg) {
  return typeof arg === 'number';
}

function isObject(arg) {
  return typeof arg === 'object' && arg !== null;
}

function isUndefined(arg) {
  return arg === void 0;
}


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ManagementComponents = __webpack_require__(11);

var _ManagementComponents2 = _interopRequireDefault(_ManagementComponents);

var _IndexComponents = __webpack_require__(20);

var _IndexComponents2 = _interopRequireDefault(_IndexComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_ManagementComponents2.default.init();

//首页
/**
 * Created by hongpao on 2018/3/12.
 */

//后台管理系统

_IndexComponents2.default.init();

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _Navigation = __webpack_require__(4);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ManagementMain = __webpack_require__(12);

var _ManagementMain2 = _interopRequireDefault(_ManagementMain);

var _Actions = __webpack_require__(13);

var _Actions2 = _interopRequireDefault(_Actions);

var _Stores = __webpack_require__(19);

var _Stores2 = _interopRequireDefault(_Stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hongpao on 2018/3/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var ManagementComponents = function (_Component) {
    _inherits(ManagementComponents, _Component);

    function ManagementComponents(props) {
        _classCallCheck(this, ManagementComponents);

        var _this = _possibleConstructorReturn(this, (ManagementComponents.__proto__ || Object.getPrototypeOf(ManagementComponents)).call(this, props));

        _this._onChange = function () {
            _this.setState(_Stores2.default.getNewData());
        };

        _this.getContent = function () {
            var content = _this.editor.txt.html();
            _Actions2.default.submit(_this.state.createInfo, content);
        };

        _this.state = _Stores2.default.getNewData();
        return _this;
    }

    _createClass(ManagementComponents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            //初始化富文本编辑框
            var id = '#' + this.props.id;
            var E = window.wangEditor;
            this.editor = new E(id);
            // editor.customConfig.uploadImgShowBase64 = true;
            this.editor.create();

            _Stores2.default.addChangeListener(this._onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _Stores2.default.removeChangeListener(this._onChange);
        }

        // 获取内容

    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'whole-main' },
                _react2.default.createElement(_Navigation2.default, null),
                _react2.default.createElement(_ManagementMain2.default, _extends({}, this.state, { id: this.props.id, managementAction: _Actions2.default,
                    getContent: this.getContent }))
            );
        }
    }]);

    return ManagementComponents;
}(_react.Component);

function init() {
    var root = document.getElementById('J-main');
    if (root) {
        (0, _reactDom.render)(_react2.default.createElement(ManagementComponents, { id: 'fwb-content' }), root);
    }
}

exports.default = { init: init };

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hongpao on 2018/3/12.
 */

var ManagementMain = function ManagementMain(props) {
    var createInfo = props.createInfo,
        tag = props.tag,
        id = props.id,
        managementAction = props.managementAction,
        getContent = props.getContent;


    return React.createElement(
        "div",
        { className: "main-content" },
        React.createElement(
            "div",
            { className: "ad" },
            "\u5E7F\u544A\u4F4D"
        ),
        React.createElement(
            "form",
            { className: "create-info-form" },
            React.createElement(
                "label",
                { className: "form-tr clearfix" },
                React.createElement(
                    "span",
                    { className: "title" },
                    "\u6807\u9898"
                ),
                React.createElement("input", { type: "text", className: "form-input-big", value: createInfo.title, placeholder: "\u5728\u8FD9\u91CC\u8F93\u5165\u6807\u9898...",
                    maxLength: "20", onChange: managementAction.changeTitle }),
                React.createElement("span", { className: "error" })
            ),
            React.createElement(
                "label",
                { className: "form-tr clearfix" },
                React.createElement(
                    "span",
                    { className: "title" },
                    "\u6807\u7B7E\u6807\u7B7E"
                ),
                createInfo.tags.map(function (item) {
                    return React.createElement(
                        "p",
                        { className: "form-tag", onClick: managementAction.deleteTag.bind(undefined, item) },
                        item
                    );
                }),
                createInfo.tags.length < 10 ? React.createElement(
                    "div",
                    null,
                    React.createElement("input", { type: "text", className: "form-input-small", value: tag, maxLength: "4",
                        onChange: managementAction.changeTag }),
                    React.createElement("input", { type: "button", className: "form-btn", value: "\u786E\u5B9A",
                        onClick: managementAction.addTag })
                ) : null
            ),
            React.createElement(
                "label",
                { className: "form-tr clearfix" },
                React.createElement(
                    "span",
                    { className: "title" },
                    "\u5C01\u9762"
                ),
                React.createElement(
                    "div",
                    { className: "faceImgBox" },
                    React.createElement("img", { src: createInfo.faceImagePath, className: "faceImage" }),
                    React.createElement("input", { type: "file", name: "Multiple", className: "fileBtn", onChange: managementAction.uploadImage })
                ),
                React.createElement("span", { className: "error" })
            ),
            React.createElement(
                "label",
                { className: "form-tr clearfix" },
                React.createElement(
                    "span",
                    { className: "title" },
                    "\u5185\u5BB9"
                ),
                React.createElement(
                    "div",
                    { className: "editor-content" },
                    React.createElement("div", { id: id, contentEditable: "true" })
                )
            ),
            React.createElement(
                "label",
                { className: "form-tr clearfix" },
                React.createElement("span", { className: "title" }),
                React.createElement(
                    "div",
                    { className: "btn-box" },
                    React.createElement(
                        "div",
                        { className: "btn btn-submit", onClick: getContent },
                        "\u63D0\u4EA4"
                    ),
                    React.createElement(
                        "div",
                        { className: "btn btn-reload" },
                        "\u6E05\u7A7A"
                    )
                )
            )
        )
    );
};

exports.default = ManagementMain;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(0);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(1);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _saveInfoApi = __webpack_require__(17);

var _saveInfoApi2 = _interopRequireDefault(_saveInfoApi);

var _uploadFileApi = __webpack_require__(18);

var _uploadFileApi2 = _interopRequireDefault(_uploadFileApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hongpao on 2018/3/13.
 */

var ManagementActions = {

    /*
    * 更改标题
    * 类型：1
    * */
    changeTitle: function changeTitle(e) {
        var title = e.target.value;
        _AppDispatcher2.default.dispatch({
            actionType: _AppConstants2.default.CREATE_INFO,
            data: { type: 1, title: title }
        });
    },


    /*
    * 更改标签
    * 类型：2
    * */
    changeTag: function changeTag(e) {
        var tag = e.target.value;
        _AppDispatcher2.default.dispatch({
            actionType: _AppConstants2.default.CREATE_INFO,
            data: { type: 2, tag: tag }
        });
    },


    /*
    * 增加标签
    * */
    addTag: function addTag() {
        _AppDispatcher2.default.dispatch({
            actionType: _AppConstants2.default.ADD_TAG
        });
    },


    /*
    * 删除标签
    * */
    deleteTag: function deleteTag(tagName) {
        _AppDispatcher2.default.dispatch({
            actionType: _AppConstants2.default.DELETE_TAG,
            data: { tagName: tagName }
        });
    },


    /*
    * 提交保存
    * */
    submit: function submit(createInfo, content) {
        createInfo.content = content;
        (0, _saveInfoApi2.default)(createInfo, {
            success: function success(result) {
                if (result.code === 1) {
                    var data = result.data || {};
                }
            }
        });
    },


    /*
    * 上传图片
    * */
    uploadImage: function uploadImage() {
        var form = new FormData();
        var file = document.getElementsByName("Multiple")[0];

        //获取选中资源的数组
        var fileList = file.files;

        var item = fileList[0];
        var fileType = item.type.toLocaleLowerCase();

        //符合格式的后缀
        var imageFormat = ['image/png', 'image/jpeg', 'image/gif'];

        if (imageFormat.indexOf(fileType) > -1) {
            form.append('image', item);

            (0, _uploadFileApi2.default)({
                data: form,
                success: function success(result) {
                    if (result.code === 1) {
                        _AppDispatcher2.default.dispatch({
                            actionType: _AppConstants2.default.CREATE_INFO,
                            data: { type: 3, faceImagePath: result.path }
                        });
                    }
                }
            });
        }
    }
};

exports.default = ManagementActions;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * 
 * @preventMunge
 */



exports.__esModule = true;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var invariant = __webpack_require__(15);

var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *         case 'city-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

var Dispatcher = (function () {
  function Dispatcher() {
    _classCallCheck(this, Dispatcher);

    this._callbacks = {};
    this._isDispatching = false;
    this._isHandled = {};
    this._isPending = {};
    this._lastID = 1;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   */

  Dispatcher.prototype.register = function register(callback) {
    var id = _prefix + this._lastID++;
    this._callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   */

  Dispatcher.prototype.unregister = function unregister(id) {
    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
    delete this._callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   */

  Dispatcher.prototype.waitFor = function waitFor(ids) {
    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this._isPending[id]) {
        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
        continue;
      }
      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
      this._invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   */

  Dispatcher.prototype.dispatch = function dispatch(payload) {
    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
    this._startDispatching(payload);
    try {
      for (var id in this._callbacks) {
        if (this._isPending[id]) {
          continue;
        }
        this._invokeCallback(id);
      }
    } finally {
      this._stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   */

  Dispatcher.prototype.isDispatching = function isDispatching() {
    return this._isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @internal
   */

  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
    this._isPending[id] = true;
    this._callbacks[id](this._pendingPayload);
    this._isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
    for (var id in this._callbacks) {
      this._isPending[id] = false;
      this._isHandled[id] = false;
    }
    this._pendingPayload = payload;
    this._isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */

  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
    delete this._pendingPayload;
    this._isDispatching = false;
  };

  return Dispatcher;
})();

module.exports = Dispatcher;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (process.env.NODE_ENV !== 'production') {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(5)))

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 */



/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  if (!(obj instanceof Object && !Array.isArray(obj))) {
    throw new Error('keyMirror(...): Argument must be an object.');
  }
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(6);

var _ajax2 = _interopRequireDefault(_ajax);

var _url = __webpack_require__(7);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hongpao on 2018/1/17.
 */

var savePageData = function savePageData(createInfo, options) {

    options = options || {};
    options.url = _url2.default.API_SAVE_INFO;
    options.type = "post";
    options.contentType = "application/x-www-form-urlencoded";
    options.params = {
        content: createInfo.content,
        faceImage: createInfo.faceImagePath,
        title: createInfo.title,
        tags: createInfo.tags.toString(),
        author: "hongpao"
    };

    return _ajax2.default.ajax(options);
};

module.exports = savePageData;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(6);

var _ajax2 = _interopRequireDefault(_ajax);

var _url = __webpack_require__(7);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hongpao on 2017/10/23.
 */

var uploadFile = function uploadFile(options) {
    options = options || {};
    options.url = _url2.default.API_UPLOAD_FILES;
    options.type = "post";
    options.contentType = false;
    options.processData = false;
    options.async = false;
    options.cache = false;
    options.params = options.data;

    return _ajax2.default.ajax(options);
};

module.exports = uploadFile;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(0);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(1);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _objectAssign = __webpack_require__(8);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _events = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import format from './format';

/**
 * Created by hongpao on 2018/3/13.
 */

var CHANGE_EVENT = "change";

var ManagementStores = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {

    createInfo: {
        title: "",
        tags: [],
        faceImagePath: ""
    },
    tag: "",

    //获取全部数据
    getNewData: function getNewData() {
        return {
            createInfo: this.createInfo,
            tag: this.tag
        };
    },


    //保存编辑后的数据
    _setSaveInfo: function _setSaveInfo(data) {
        var createInfo = this.createInfo;

        switch (data.type) {
            case 1:
                createInfo.title = data.title;
                break;
            case 2:
                this.tag = data.tag.trim();
                break;
            case 3:
                createInfo.faceImagePath = window.location.origin + data.faceImagePath;
                break;
        }

        this.createInfo = createInfo;
        this.emit(CHANGE_EVENT);
    },


    //新增标签
    _addTag: function _addTag() {
        var createInfo = this.createInfo;
        var tag = this.tag;

        if (tag !== "" && createInfo.tags.indexOf(tag) === -1) {
            createInfo.tags.push(tag);

            this.createInfo = createInfo;
            this.tag = "";
            this.emit(CHANGE_EVENT);
        }
    },


    //删除标签
    _deleteTag: function _deleteTag(data) {
        var createInfo = this.createInfo;
        var index = createInfo.tags.indexOf(data.tagName);

        createInfo.tags.splice(index, 1);

        this.createInfo = createInfo;
        this.emit(CHANGE_EVENT);
    },


    addChangeListener: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

_AppDispatcher2.default.register(function (action) {
    switch (action.actionType) {
        case _AppConstants2.default.CREATE_INFO:
            ManagementStores._setSaveInfo(action.data);
            break;
        case _AppConstants2.default.ADD_TAG:
            ManagementStores._addTag();
            break;
        case _AppConstants2.default.DELETE_TAG:
            ManagementStores._deleteTag(action.data);
            break;
        default:
    }
});

exports.default = ManagementStores;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(3);

var _Navigation = __webpack_require__(4);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Actions = __webpack_require__(21);

var _Actions2 = _interopRequireDefault(_Actions);

var _Stores = __webpack_require__(22);

var _Stores2 = _interopRequireDefault(_Stores);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hongpao on 2018/3/23.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var IndexComponents = function (_Component) {
    _inherits(IndexComponents, _Component);

    function IndexComponents(props) {
        _classCallCheck(this, IndexComponents);

        var _this = _possibleConstructorReturn(this, (IndexComponents.__proto__ || Object.getPrototypeOf(IndexComponents)).call(this, props));

        _this._onChange = function () {
            // this.setState(ManagementStore.getNewData());
        };

        _this.state = _Stores2.default.getNewData();
        return _this;
    }

    _createClass(IndexComponents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _Stores2.default.addChangeListener(this._onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            _Stores2.default.removeChangeListener(this._onChange);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { className: 'whole-main' },
                _react2.default.createElement(_Navigation2.default, null)
            );
        }
    }]);

    return IndexComponents;
}(_react.Component);

function init() {
    var root = document.getElementById('J-main');
    if (root) {
        (0, _reactDom.render)(_react2.default.createElement(IndexComponents, null), root);
    }
}

exports.default = { init: init };

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(0);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(1);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hongpao on 2018/3/23.
 */

var IndexAction = {

    /*
    * 更改标题
    * 类型：1
    * */
    // changeTitle(e) {
    //     let title = e.target.value;
    //     AppDispatcher.dispatch({
    //         actionType: AppConstants.CREATE_INFO,
    //         data: {type: 1, title: title}
    //     });
    // }
};

exports.default = IndexAction;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(0);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(1);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _objectAssign = __webpack_require__(8);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _events = __webpack_require__(9);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import format from './format';

/**
 * Created by hongpao on 2018/3/23.
 */

var CHANGE_EVENT = "change";

var IndexStore = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {

    //获取全部数据
    getNewData: function getNewData() {
        return {};
    },


    //保存编辑后的数据
    // _setSaveInfo(data) {
    //     let createInfo = this.createInfo;
    //
    //     switch (data.type) {
    //         case 1:
    //             createInfo.title = data.title;
    //             break;
    //         case 2:
    //             this.tag = data.tag.trim();
    //             break;
    //         case 3:
    //             createInfo.faceImagePath = window.location.origin + data.faceImagePath;
    //             break;
    //     }
    //
    //     this.createInfo = createInfo;
    //     this.emit(CHANGE_EVENT);
    // },

    addChangeListener: function addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

_AppDispatcher2.default.register(function (action) {
    switch (action.actionType) {}
}
// case AppConstants.CREATE_INFO:
//     IndexStore._setSaveInfo(action.data);
//     break;
);

exports.default = IndexStore;

/***/ })
/******/ ]);