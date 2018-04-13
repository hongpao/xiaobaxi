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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by xiangpitang on 17/1/11.
 */

var Dispatcher = __webpack_require__(18);

module.exports = new Dispatcher();

/***/ }),
/* 2 */
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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Created by hongpao on 2018/3/12.
 */

var keyMirror = __webpack_require__(19);

module.exports = keyMirror({
    CREATE_INFO: null,
    ADD_TAG: null,
    DELETE_TAG: null,
    BANNER_IMAGE: null
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 *  Create by hongpao
 *  on 18/3/13
 *  异步请求接口列表
 * */

// const BASE_URL = require(ENV_BASE_URL); //域名

var BASE_URL = {
    // API_BASE_URL: "http://upload.2dfire-daily.com"
    API_BASE_URL: "http://localhost:1280"
};

var URL = {
    //获取资源地址列表
    // API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/upfileandlist",


    API_SAVE_INFO: BASE_URL.API_BASE_URL + "/save",
    API_UPLOAD_FILES: BASE_URL.API_BASE_URL + "/uploadFiles",
    API_GET_BANNER_PATH: BASE_URL.API_BASE_URL + "/getBannerImagePath"
};

module.exports = URL;

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 11 */
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
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */



var emptyFunction = __webpack_require__(8);

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if (process.env.NODE_ENV !== 'production') {
  var printWarning = function printWarning(format) {
    for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    var argIndex = 0;
    var message = 'Warning: ' + format.replace(/%s/g, function () {
      return args[argIndex++];
    });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function warning(condition, format) {
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.indexOf('Failed Composite propType: ') === 0) {
      return; // Ignore CompositeComponent proptype check.
    }

    if (!condition) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }

      printWarning.apply(undefined, [format].concat(args));
    }
  };
}

module.exports = warning;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _LoginComponents = __webpack_require__(38);

var _LoginComponents2 = _interopRequireDefault(_LoginComponents);

var _ManagementComponents = __webpack_require__(15);

var _ManagementComponents2 = _interopRequireDefault(_ManagementComponents);

var _IndexComponents = __webpack_require__(23);

var _IndexComponents2 = _interopRequireDefault(_IndexComponents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_LoginComponents2.default.init();

//后台管理系统
/**
 * Created by hongpao on 2018/3/12.
 */

//用户登录系统

_ManagementComponents2.default.init();

//首页

_IndexComponents2.default.init();

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _Navigation = __webpack_require__(11);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _ManagementMain = __webpack_require__(16);

var _ManagementMain2 = _interopRequireDefault(_ManagementMain);

var _Actions = __webpack_require__(17);

var _Actions2 = _interopRequireDefault(_Actions);

var _Stores = __webpack_require__(22);

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
/* 16 */
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


    var faceImagePart = [];
    if (createInfo.faceImagePath === "") {
        faceImagePart.push(React.createElement(
            "div",
            { className: "faceImgBox" },
            React.createElement("input", { type: "file", name: "Multiple", className: "fileBtn", onChange: managementAction.uploadImage })
        ));
    } else {
        faceImagePart.push(React.createElement("img", { src: createInfo.faceImagePath, className: "faceImage" }));
    }

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
                "div",
                { className: "form-tr clearfix" },
                React.createElement(
                    "span",
                    { className: "title" },
                    "\u5C01\u9762"
                ),
                faceImagePart,
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(1);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(3);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _saveInfoApi = __webpack_require__(20);

var _saveInfoApi2 = _interopRequireDefault(_saveInfoApi);

var _uploadFileApi = __webpack_require__(21);

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
/* 18 */
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

var invariant = __webpack_require__(2);

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
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 19 */
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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(5);

var _ajax2 = _interopRequireDefault(_ajax);

var _url = __webpack_require__(6);

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
        author: "一只不喜欢滚的轮胎"
    };

    return _ajax2.default.ajax(options);
};

module.exports = savePageData;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(5);

var _ajax2 = _interopRequireDefault(_ajax);

var _url = __webpack_require__(6);

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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(1);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(3);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _events = __webpack_require__(12);

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
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _Navigation = __webpack_require__(11);

var _Navigation2 = _interopRequireDefault(_Navigation);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

var _Actions = __webpack_require__(25);

var _Actions2 = _interopRequireDefault(_Actions);

var _Stores = __webpack_require__(27);

var _Stores2 = _interopRequireDefault(_Stores);

var _Swipe = __webpack_require__(28);

var _Swipe2 = _interopRequireDefault(_Swipe);

var _LeftBox = __webpack_require__(36);

var _LeftBox2 = _interopRequireDefault(_LeftBox);

var _RightBox = __webpack_require__(37);

var _RightBox2 = _interopRequireDefault(_RightBox);

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
            _this.setState(_Stores2.default.getNewData());
        };

        _this.state = _Stores2.default.getNewData();
        return _this;
    }

    _createClass(IndexComponents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            _Stores2.default.addChangeListener(this._onChange);
            _Actions2.default.getBannerImagePath();
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
                _react2.default.createElement(_Navigation2.default, null),
                _react2.default.createElement(_Swipe2.default, { bannerImagePath: this.state.bannerImagePath }),
                _react2.default.createElement(
                    'div',
                    { className: 'whole-content clearfix' },
                    _react2.default.createElement(_LeftBox2.default, null),
                    _react2.default.createElement(_RightBox2.default, null)
                ),
                _react2.default.createElement(_Footer2.default, null)
            );
        }
    }]);

    return IndexComponents;
}(_react.Component);

function init() {
    var root = document.getElementById('J-index');
    if (root) {
        (0, _reactDom.render)(_react2.default.createElement(IndexComponents, null), root);
    }
}

exports.default = { init: init };

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hongpao on 2018/4/11.
 */

var Footer = function Footer() {

    return React.createElement(
        "div",
        { className: "footer" },
        "\u7EA2\u888D\u7684\u5B9E\u6218\u6F14\u7EC3\u573A 2018.3.23"
    );
};

exports.default = Footer;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(1);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(3);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _getBannerApi = __webpack_require__(26);

var _getBannerApi2 = _interopRequireDefault(_getBannerApi);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IndexAction = {

    /*
    * 获取banner图片地址
    * */
    getBannerImagePath: function getBannerImagePath() {
        (0, _getBannerApi2.default)({
            success: function success(result) {
                if (result.code === 1) {
                    _AppDispatcher2.default.dispatch({
                        actionType: _AppConstants2.default.BANNER_IMAGE,
                        data: result.path
                    });
                }
            }
        });
    }
}; /**
    * Created by hongpao on 2018/3/23.
    */

exports.default = IndexAction;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _ajax = __webpack_require__(5);

var _ajax2 = _interopRequireDefault(_ajax);

var _url = __webpack_require__(6);

var _url2 = _interopRequireDefault(_url);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Created by hongpao on 2018/1/17.
 */

var getBannerImagePath = function getBannerImagePath(options) {

    options = options || {};
    options.url = _url2.default.API_GET_BANNER_PATH;
    options.type = "get";

    return _ajax2.default.ajax(options);
};

module.exports = getBannerImagePath;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _AppDispatcher = __webpack_require__(1);

var _AppDispatcher2 = _interopRequireDefault(_AppDispatcher);

var _AppConstants = __webpack_require__(3);

var _AppConstants2 = _interopRequireDefault(_AppConstants);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

var _events = __webpack_require__(12);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import format from './format';

/**
 * Created by hongpao on 2018/3/23.
 */

var CHANGE_EVENT = "change";

var IndexStore = (0, _objectAssign2.default)({}, _events.EventEmitter.prototype, {
    bannerImagePath: [],

    //获取全部数据
    getNewData: function getNewData() {
        return {
            bannerImagePath: this.bannerImagePath
        };
    },


    //保存banner图片
    _setBannerImage: function _setBannerImage(data) {
        this.bannerImagePath = data;
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
        case _AppConstants2.default.BANNER_IMAGE:
            IndexStore._setBannerImage(action.data);
            break;
    }
});

exports.default = IndexStore;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _reactSwipe = __webpack_require__(29);

var _reactSwipe2 = _interopRequireDefault(_reactSwipe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swipe = function Swipe(props) {
    var bannerImagePath = props.bannerImagePath;

    var opt = {
        startSlide: 0,
        speed: 1000,
        auto: 3000,
        continuous: true
    };

    if (bannerImagePath.length > 0) {
        return React.createElement(
            _reactSwipe2.default,
            { className: "swipe", swipeOptions: opt },
            bannerImagePath.map(function (item, index) {
                return React.createElement("div", { className: "bannerBg", style: { backgroundImage: 'url(' + item + ')' }, key: index });
            })
        );
    } else {
        return null;
    }
}; /**
    * Created by hongpao on 2018/3/23.
    */

exports.default = Swipe;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = __webpack_require__(30);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _swipeJsIso = __webpack_require__(35);

var _swipeJsIso2 = _interopRequireDefault(_swipeJsIso);

var _objectAssign = __webpack_require__(7);

var _objectAssign2 = _interopRequireDefault(_objectAssign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactSwipe = function (_Component) {
  _inherits(ReactSwipe, _Component);

  function ReactSwipe() {
    _classCallCheck(this, ReactSwipe);

    return _possibleConstructorReturn(this, (ReactSwipe.__proto__ || Object.getPrototypeOf(ReactSwipe)).apply(this, arguments));
  }

  _createClass(ReactSwipe, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var swipeOptions = this.props.swipeOptions;


      this.swipe = (0, _swipeJsIso2.default)(this.container, swipeOptions);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps) {
      var _props = this.props,
          childCount = _props.childCount,
          swipeOptions = _props.swipeOptions;


      if (prevProps.childCount !== childCount) {
        this.swipe.kill();
        this.swipe = (0, _swipeJsIso2.default)(this.container, swipeOptions);
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.swipe.kill();
      this.swipe = void 0;
    }
  }, {
    key: 'next',
    value: function next() {
      this.swipe.next();
    }
  }, {
    key: 'prev',
    value: function prev() {
      this.swipe.prev();
    }
  }, {
    key: 'slide',
    value: function slide() {
      var _swipe;

      (_swipe = this.swipe).slide.apply(_swipe, arguments);
    }
  }, {
    key: 'getPos',
    value: function getPos() {
      return this.swipe.getPos();
    }
  }, {
    key: 'getNumSlides',
    value: function getNumSlides() {
      return this.swipe.getNumSlides();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props2 = this.props,
          id = _props2.id,
          className = _props2.className,
          style = _props2.style,
          children = _props2.children;


      return _react2.default.createElement(
        'div',
        { ref: function ref(container) {
            return _this2.container = container;
          }, id: id, className: 'react-swipe-container ' + className, style: style.container },
        _react2.default.createElement(
          'div',
          { style: style.wrapper },
          _react2.default.Children.map(children, function (child) {
            if (!child) {
              return null;
            }

            var childStyle = child.props.style ? (0, _objectAssign2.default)({}, style.child, child.props.style) : style.child;

            return _react2.default.cloneElement(child, { style: childStyle });
          })
        )
      );
    }
  }]);

  return ReactSwipe;
}(_react.Component);

ReactSwipe.propTypes = {
  swipeOptions: _propTypes2.default.shape({
    startSlide: _propTypes2.default.number,
    speed: _propTypes2.default.number,
    auto: _propTypes2.default.number,
    continuous: _propTypes2.default.bool,
    disableScroll: _propTypes2.default.bool,
    stopPropagation: _propTypes2.default.bool,
    swiping: _propTypes2.default.func,
    callback: _propTypes2.default.func,
    transitionEnd: _propTypes2.default.func
  }),
  style: _propTypes2.default.shape({
    container: _propTypes2.default.object,
    wrapper: _propTypes2.default.object,
    child: _propTypes2.default.object
  }),
  id: _propTypes2.default.string,
  className: _propTypes2.default.string,
  childCount: _propTypes2.default.number
};
ReactSwipe.defaultProps = {
  swipeOptions: {},
  style: {
    container: {
      overflow: 'hidden',
      visibility: 'hidden',
      position: 'relative'
    },

    wrapper: {
      overflow: 'hidden',
      position: 'relative'
    },

    child: {
      float: 'left',
      width: '100%',
      position: 'relative',
      transitionProperty: 'transform'
    }
  },
  className: '',
  childCount: 0
};
exports.default = ReactSwipe;
module.exports = exports['default'];


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var REACT_ELEMENT_TYPE = (typeof Symbol === 'function' &&
    Symbol.for &&
    Symbol.for('react.element')) ||
    0xeac7;

  var isValidElement = function(object) {
    return typeof object === 'object' &&
      object !== null &&
      object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(31)(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(34)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(2);
var warning = __webpack_require__(13);
var assign = __webpack_require__(32);

var ReactPropTypesSecret = __webpack_require__(9);
var checkPropTypes = __webpack_require__(33);

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          invariant(
            false,
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            warning(
              false,
              'You are manually calling a React.PropTypes validation ' +
              'function for the `%s` prop on `%s`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.',
              propFullName,
              componentName
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunction.thatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOf, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues);
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + propValue + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (propValue.hasOwnProperty(key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? warning(false, 'Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunction.thatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        warning(
          false,
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received %s at index %s.',
          getPostfixForTypeWarning(checker),
          i
        );
        return emptyFunction.thatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (process.env.NODE_ENV !== 'production') {
  var invariant = __webpack_require__(2);
  var warning = __webpack_require__(13);
  var ReactPropTypesSecret = __webpack_require__(9);
  var loggedTypeFailures = {};
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (typeSpecs.hasOwnProperty(typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          invariant(typeof typeSpecs[typeSpecName] === 'function', '%s: %s type `%s` is invalid; it must be a function, usually from ' + 'the `prop-types` package, but received `%s`.', componentName || 'React class', location, typeSpecName, typeof typeSpecs[typeSpecName]);
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        warning(!error || error instanceof Error, '%s: type specification of %s `%s` is invalid; the type checker ' + 'function must return `null` or an `Error` but returned a %s. ' + 'You may have forgotten to pass an argument to the type checker ' + 'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' + 'shape all require an argument).', componentName || 'React class', location, typeSpecName, typeof error);
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          warning(false, 'Failed %s type: %s%s', location, error.message, stack != null ? stack : '');
        }
      }
    }
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var emptyFunction = __webpack_require__(8);
var invariant = __webpack_require__(2);
var ReactPropTypesSecret = __webpack_require__(9);

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(
      false,
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 35 */
/***/ (function(module, exports) {

/*
 * Swipe 2.0.0
 * Brad Birdsall
 * https://github.com/thebird/Swipe
 * Copyright 2013-2015, MIT License
 *
*/

(function (root, factory) {
    if (typeof module !== 'undefined' && module.exports) {
        module.exports = factory();
    } else {
        root.Swipe = factory();
    }
}(this, function () {
  'use strict';

  return function Swipe (container, options) {
    // utilities
    var noop = function() {}; // simple no operation function
    var offloadFn = function(fn) { setTimeout(fn || noop, 0); }; // offload a functions execution

    // check browser capabilities
    var browser = {
      addEventListener: !!window.addEventListener,
      touch: ('ontouchstart' in window) || window.DocumentTouch && document instanceof window.DocumentTouch,
      transitions: (function(temp) {
        var props = ['transitionProperty', 'WebkitTransition', 'MozTransition', 'OTransition', 'msTransition'];
        for ( var i in props ) if (temp.style[ props[i] ] !== undefined) return true;
        return false;
      })(document.createElement('swipe'))
    };

    // quit if no root element
    if (!container) return;
    var element = container.children[0];
    var slides, slidePos, width, length;
    options = options || {};
    var index = parseInt(options.startSlide, 10) || 0;
    var speed = options.speed || 300;
    var continuous = options.continuous = options.continuous !== undefined ? options.continuous : true;

    function setup() {

      // cache slides
      slides = element.children;
      length = slides.length;

      // set continuous to false if only one slide
      continuous = slides.length < 2 ? false : options.continuous;

      //special case if two slides
      if (browser.transitions && continuous && slides.length < 3) {
        element.appendChild(slides[0].cloneNode(true));
        element.appendChild(element.children[1].cloneNode(true));
        slides = element.children;
      }

      // create an array to store current positions of each slide
      slidePos = new Array(slides.length);

      // determine width of each slide
      width = Math.round(container.getBoundingClientRect().width || container.offsetWidth);

      element.style.width = (slides.length * width) + 'px';

      // stack elements
      var pos = slides.length;
      while(pos--) {

        var slide = slides[pos];

        slide.style.width = width + 'px';
        slide.setAttribute('data-index', pos);

        if (browser.transitions) {
          slide.style.left = (pos * -width) + 'px';
          move(pos, index > pos ? -width : (index < pos ? width : 0), 0);
        }

      }

      // reposition elements before and after index
      if (continuous && browser.transitions) {
        move(circle(index-1), -width, 0);
        move(circle(index+1), width, 0);
      }

      if (!browser.transitions) element.style.left = (index * -width) + 'px';

      container.style.visibility = 'visible';

    }

    function prev() {

      if (continuous) slide(index-1);
      else if (index) slide(index-1);

    }

    function next() {

      if (continuous) slide(index+1);
      else if (index < slides.length - 1) slide(index+1);

    }

    function circle(index) {

      // a simple positive modulo using slides.length
      return (slides.length + (index % slides.length)) % slides.length;

    }

    function slide(to, slideSpeed) {

      // do nothing if already on requested slide
      if (index == to) return;

      if (browser.transitions) {

        var direction = Math.abs(index-to) / (index-to); // 1: backward, -1: forward

        // get the actual position of the slide
        if (continuous) {
          var natural_direction = direction;
          direction = -slidePos[circle(to)] / width;

          // if going forward but to < index, use to = slides.length + to
          // if going backward but to > index, use to = -slides.length + to
          if (direction !== natural_direction) to =  -direction * slides.length + to;

        }

        var diff = Math.abs(index-to) - 1;

        // move all the slides between index and to in the right direction
        while (diff--) move( circle((to > index ? to : index) - diff - 1), width * direction, 0);

        to = circle(to);

        move(index, width * direction, slideSpeed || speed);
        move(to, 0, slideSpeed || speed);

        if (continuous) move(circle(to - direction), -(width * direction), 0); // we need to get the next in place

      } else {

        to = circle(to);
        animate(index * -width, to * -width, slideSpeed || speed);
        //no fallback for a circular continuous if the browser does not accept transitions
      }

      index = to;
      offloadFn(options.callback && options.callback(index, slides[index]));
    }

    function move(index, dist, speed) {

      translate(index, dist, speed);
      slidePos[index] = dist;

    }

    function translate(index, dist, speed) {

      var slide = slides[index];
      var style = slide && slide.style;

      if (!style) return;

      style.webkitTransitionDuration =
      style.MozTransitionDuration =
      style.msTransitionDuration =
      style.OTransitionDuration =
      style.transitionDuration = speed + 'ms';

      style.webkitTransform = 'translate(' + dist + 'px,0)' + 'translateZ(0)';
      style.msTransform =
      style.MozTransform =
      style.OTransform = 'translateX(' + dist + 'px)';

    }

    function animate(from, to, speed) {

      // if not an animation, just reposition
      if (!speed) {

        element.style.left = to + 'px';
        return;

      }

      var start = +new Date();

      var timer = setInterval(function() {

        var timeElap = +new Date() - start;

        if (timeElap > speed) {

          element.style.left = to + 'px';

          if (delay) begin();

          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

          clearInterval(timer);
          return;

        }

        element.style.left = (( (to - from) * (Math.floor((timeElap / speed) * 100) / 100) ) + from) + 'px';

      }, 4);

    }

    // setup auto slideshow
    var delay = options.auto || 0;
    var interval;

    function begin() {
      clearTimeout(interval);
      interval = setTimeout(next, delay);

    }

    function stop() {

      delay = 0;
      clearTimeout(interval);

    }


    // setup initial vars
    var start = {};
    var delta = {};
    var isScrolling;

    // setup event capturing
    var events = {

      handleEvent: function(event) {

        switch (event.type) {
          case 'touchstart': this.start(event); break;
          case 'touchmove': this.move(event); break;
          case 'touchend': offloadFn(this.end(event)); break;
          case 'webkitTransitionEnd':
          case 'msTransitionEnd':
          case 'oTransitionEnd':
          case 'otransitionend':
          case 'transitionend': offloadFn(this.transitionEnd(event)); break;
          case 'resize': offloadFn(setup); break;
        }

        if (options.stopPropagation) event.stopPropagation();

      },
      start: function(event) {

        var touches = event.touches[0];

        // measure start values
        start = {

          // get initial touch coords
          x: touches.pageX,
          y: touches.pageY,

          // store time to determine touch duration
          time: +new Date()

        };

        // used for testing first move event
        isScrolling = undefined;

        // reset delta and end measurements
        delta = {};

        // attach touchmove and touchend listeners
        element.addEventListener('touchmove', this, false);
        element.addEventListener('touchend', this, false);

      },
      move: function(event) {

        // ensure swiping with one touch and not pinching
        if ( event.touches.length > 1 || event.scale && event.scale !== 1) return;

        if (options.disableScroll) return;

        var touches = event.touches[0];

        // measure change in x and y
        delta = {
          x: touches.pageX - start.x,
          y: touches.pageY - start.y
        };

        // determine if scrolling test has run - one time test
        if ( typeof isScrolling == 'undefined') {
          isScrolling = !!( isScrolling || Math.abs(delta.x) < Math.abs(delta.y) );
        }

        // if user is not trying to scroll vertically
        if (!isScrolling) {

          // prevent native scrolling
          event.preventDefault();

          // stop slideshow
          stop();

          // increase resistance if first or last slide
          if (continuous) { // we don't add resistance at the end

            translate(circle(index-1), delta.x + slidePos[circle(index-1)], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(circle(index+1), delta.x + slidePos[circle(index+1)], 0);

          } else {

            delta.x =
              delta.x /
                ( (!index && delta.x > 0 ||         // if first slide and sliding left
                  index == slides.length - 1 &&     // or if last slide and sliding right
                  delta.x < 0                       // and if sliding at all
                ) ?
                ( Math.abs(delta.x) / width + 1 )      // determine resistance level
                : 1 );                                 // no resistance if false

            // translate 1:1
            translate(index-1, delta.x + slidePos[index-1], 0);
            translate(index, delta.x + slidePos[index], 0);
            translate(index+1, delta.x + slidePos[index+1], 0);
          }
          options.swiping && options.swiping(-delta.x / width);

        }

      },
      end: function(event) {

        // measure duration
        var duration = +new Date() - start.time;

        // determine if slide attempt triggers next/prev slide
        var isValidSlide =
              Number(duration) < 250 &&         // if slide duration is less than 250ms
              Math.abs(delta.x) > 20 ||         // and if slide amt is greater than 20px
              Math.abs(delta.x) > width/2;      // or if slide amt is greater than half the width

        // determine if slide attempt is past start and end
        var isPastBounds =
              !index && delta.x > 0 ||                      // if first slide and slide amt is greater than 0
              index == slides.length - 1 && delta.x < 0;    // or if last slide and slide amt is less than 0

        if (continuous) isPastBounds = false;

        // determine direction of swipe (true:right, false:left)
        var direction = delta.x < 0;

        // if not scrolling vertically
        if (!isScrolling) {

          if (isValidSlide && !isPastBounds) {

            if (direction) {

              if (continuous) { // we need to get the next in this direction in place

                move(circle(index-1), -width, 0);
                move(circle(index+2), width, 0);

              } else {
                move(index-1, -width, 0);
              }

              move(index, slidePos[index]-width, speed);
              move(circle(index+1), slidePos[circle(index+1)]-width, speed);
              index = circle(index+1);

            } else {
              if (continuous) { // we need to get the next in this direction in place

                move(circle(index+1), width, 0);
                move(circle(index-2), -width, 0);

              } else {
                move(index+1, width, 0);
              }

              move(index, slidePos[index]+width, speed);
              move(circle(index-1), slidePos[circle(index-1)]+width, speed);
              index = circle(index-1);

            }

            options.callback && options.callback(index, slides[index]);

          } else {

            if (continuous) {

              move(circle(index-1), -width, speed);
              move(index, 0, speed);
              move(circle(index+1), width, speed);

            } else {

              move(index-1, -width, speed);
              move(index, 0, speed);
              move(index+1, width, speed);
            }

          }

        }

        // kill touchmove and touchend event listeners until touchstart called again
        element.removeEventListener('touchmove', events, false);
        element.removeEventListener('touchend', events, false);
        element.removeEventListener('touchforcechange', function() {}, false);

      },
      transitionEnd: function(event) {

        if (parseInt(event.target.getAttribute('data-index'), 10) == index) {

          if (delay) begin();

          options.transitionEnd && options.transitionEnd.call(event, index, slides[index]);

        }

      }

    };

    // trigger setup
    setup();

    // start auto slideshow if applicable
    if (delay) begin();


    // add event listeners
    if (browser.addEventListener) {

      // set touchstart event on element
      if (browser.touch) {
        element.addEventListener('touchstart', events, false);
        element.addEventListener('touchforcechange', function() {}, false);
      }

      if (browser.transitions) {
        element.addEventListener('webkitTransitionEnd', events, false);
        element.addEventListener('msTransitionEnd', events, false);
        element.addEventListener('oTransitionEnd', events, false);
        element.addEventListener('otransitionend', events, false);
        element.addEventListener('transitionend', events, false);
      }

      // set resize event on window
      window.addEventListener('resize', events, false);

    } else {

      window.onresize = function () { setup(); }; // to play nice with old IE

    }

    // expose the Swipe API
    return {
      setup: function() {

        setup();

      },
      slide: function(to, speed) {

        // cancel slideshow
        stop();

        slide(to, speed);

      },
      prev: function() {

        // cancel slideshow
        stop();

        prev();

      },
      next: function() {

        // cancel slideshow
        stop();

        next();

      },
      stop: function() {

        // cancel slideshow
        stop();

      },
      getPos: function() {

        // return current index position
        return index;

      },
      getNumSlides: function() {

        // return total number of slides
        return length;
      },
      kill: function() {

        // cancel slideshow
        stop();

        // reset element
        element.style.width = '';
        element.style.left = '';

        // reset slides
        var pos = slides.length;
        while(pos--) {

          var slide = slides[pos];
          slide.style.width = '';
          slide.style.left = '';

          if (browser.transitions) translate(pos, 0, 0);
        }

        // removed event listeners
        if (browser.addEventListener) {

          // remove current event listeners
          element.removeEventListener('touchstart', events, false);
          element.removeEventListener('webkitTransitionEnd', events, false);
          element.removeEventListener('msTransitionEnd', events, false);
          element.removeEventListener('oTransitionEnd', events, false);
          element.removeEventListener('otransitionend', events, false);
          element.removeEventListener('transitionend', events, false);
          window.removeEventListener('resize', events, false);

        } else {
          window.onresize = null;
        }
      }
    };
  };
}));


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hongpao on 2018/4/7.
 */

var LeftBox = function LeftBox(props) {
    // let {} = props;

    return React.createElement(
        "div",
        { className: "left-part" },
        React.createElement(
            "div",
            { className: "part" },
            React.createElement(
                "ul",
                { className: "news" },
                React.createElement(
                    "li",
                    { id: "note-26313782", "data-note-id": "26313782", className: "have-img" },
                    React.createElement(
                        "a",
                        { className: "wrap-img", href: "", target: "_blank" },
                        React.createElement("img", { className: "img-blur-done",
                            src: "//upload-images.jianshu.io/upload_images/1714291-e142d68d7234ee9b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" })
                    ),
                    React.createElement(
                        "div",
                        { className: "content" },
                        React.createElement(
                            "div",
                            { className: "author" },
                            React.createElement(
                                "a",
                                { className: "avatar", target: "_blank", href: "" },
                                React.createElement("img", {
                                    src: "//upload.jianshu.io/users/upload_avatars/1714291/c7ff14f51e1b?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" })
                            ),
                            React.createElement(
                                "div",
                                { className: "info" },
                                React.createElement(
                                    "a",
                                    { className: "nickname", target: "_blank", href: "" },
                                    "\u9ED1\u773C\u8C46\u8C46\u5199\u5B57\u7684\u5730\u65B9"
                                ),
                                React.createElement(
                                    "span",
                                    { className: "time", "data-shared-at": "2018-04-08T09:28:35+08:00" },
                                    "04.08 09:28"
                                )
                            )
                        ),
                        React.createElement(
                            "a",
                            { className: "title", target: "_blank", href: "" },
                            "\u4EBA\u6700\u53EF\u6015\u7684\u662F\u4ECE\u4E00\u7897\u9E21\u6C64\u91CC\u722C\u51FA\u6765\uFF0C\u53C8\u6389\u8FDB\u4E86\u53E6\u4E00\u7897\u9E21\u6C64"
                        ),
                        React.createElement(
                            "p",
                            { className: "abstract" },
                            "\u6700\u8FD1\uFF0C\u4E00\u7BC7\u540D\u4E3A\u300A\u6469\u62DC\u521B\u59CB\u4EBA\u80E1\u73AE\u709C\u5957\u73B015\u4EBF\uFF1A\u4F60\u7684\u540C\u9F84\u4EBA\u6B63\u5728\u629B\u5F03\u4F60\u300B\u7684\u6587\u7AE0\u5728\u5FAE\u4FE1\u670B\u53CB\u5708\u4E2D\u5E7F\u6CDB\u4F20\u64AD\u3002 \u6587\u7AE0\u4E3E\u4E86\u65E5\u524D\u6469\u62DC\u5355\u8F66\u88AB\u6536\u8D2D\uFF0C\u521B\u59CB\u4EBA\u80E1\u73AE\u709C\u521B\u4E1A3\u5E74\u5957\u73B015\u4EBF\u7684\u4F8B\u5B50\u3002 \u79F0\u572880..."
                        ),
                        React.createElement(
                            "ul",
                            { className: "meta" },
                            React.createElement(
                                "li",
                                null,
                                "\u263B 17826"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\u260E 99"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\u2665 618"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\xA5 4"
                            )
                        )
                    )
                ),
                React.createElement(
                    "li",
                    { id: "note-26313782", "data-note-id": "26313782", className: "have-img" },
                    React.createElement(
                        "a",
                        { className: "wrap-img", href: "", target: "_blank" },
                        React.createElement("img", { className: "img-blur-done",
                            src: "//upload-images.jianshu.io/upload_images/1714291-e142d68d7234ee9b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" })
                    ),
                    React.createElement(
                        "div",
                        { className: "content" },
                        React.createElement(
                            "div",
                            { className: "author" },
                            React.createElement(
                                "a",
                                { className: "avatar", target: "_blank", href: "" },
                                React.createElement("img", {
                                    src: "//upload.jianshu.io/users/upload_avatars/1714291/c7ff14f51e1b?imageMogr2/auto-orient/strip|imageView2/1/w/64/h/64" })
                            ),
                            React.createElement(
                                "div",
                                { className: "info" },
                                React.createElement(
                                    "a",
                                    { className: "nickname", target: "_blank", href: "" },
                                    "\u9ED1\u773C\u8C46\u8C46\u5199\u5B57\u7684\u5730\u65B9"
                                ),
                                React.createElement(
                                    "span",
                                    { className: "time", "data-shared-at": "2018-04-08T09:28:35+08:00" },
                                    "04.08 09:28"
                                )
                            )
                        ),
                        React.createElement(
                            "a",
                            { className: "title", target: "_blank", href: "" },
                            "\u4EBA\u6700\u53EF\u6015\u7684\u662F\u4ECE\u4E00\u7897\u9E21\u6C64\u91CC\u722C\u51FA\u6765\uFF0C\u53C8\u6389\u8FDB\u4E86\u53E6\u4E00\u7897\u9E21\u6C64"
                        ),
                        React.createElement(
                            "p",
                            { className: "abstract" },
                            "\u6700\u8FD1\uFF0C\u4E00\u7BC7\u540D\u4E3A\u300A\u6469\u62DC\u521B\u59CB\u4EBA\u80E1\u73AE\u709C\u5957\u73B015\u4EBF\uFF1A\u4F60\u7684\u540C\u9F84\u4EBA\u6B63\u5728\u629B\u5F03\u4F60\u300B\u7684\u6587\u7AE0\u5728\u5FAE\u4FE1\u670B\u53CB\u5708\u4E2D\u5E7F\u6CDB\u4F20\u64AD\u3002"
                        ),
                        React.createElement(
                            "ul",
                            { className: "meta" },
                            React.createElement(
                                "li",
                                null,
                                "\u263B 17826"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\u260E 99"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\u2665 618"
                            ),
                            React.createElement(
                                "li",
                                null,
                                "\xA5 4"
                            )
                        )
                    )
                )
            )
        )
    );
};

exports.default = LeftBox;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Created by hongpao on 2018/4/7.
 */

var RightBox = function RightBox(props) {
    // let {} = props;

    return React.createElement(
        "div",
        { className: "right-part" },
        React.createElement(
            "div",
            { className: "part" },
            React.createElement(
                "div",
                { className: "board" },
                React.createElement(
                    "a",
                    { href: "", className: "tab-1" },
                    React.createElement(
                        "span",
                        { className: "title" },
                        "7\u65E5\u70ED\u95E8"
                    ),
                    React.createElement("i", { className: "b-icon" })
                ),
                React.createElement(
                    "a",
                    { href: "", className: "tab-2" },
                    React.createElement(
                        "span",
                        { className: "title" },
                        "\u4E00\u5468\u70ED\u95E8"
                    ),
                    React.createElement("i", { className: "b-icon" })
                ),
                React.createElement(
                    "a",
                    { href: "", className: "tab-3" },
                    React.createElement(
                        "span",
                        { className: "title" },
                        "7\u65E5\u70ED\u95E8"
                    ),
                    React.createElement("i", { className: "b-icon" })
                ),
                React.createElement(
                    "a",
                    { href: "", className: "tab-4" },
                    React.createElement(
                        "span",
                        { className: "title" },
                        "7\u65E5\u70ED\u95E8"
                    ),
                    React.createElement("i", { className: "b-icon" })
                )
            )
        )
    );
};

exports.default = RightBox;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(10);

var _Footer = __webpack_require__(24);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by hongpao on 2018/4/12.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

// import ManagementAction from '../actions/Actions';
// import ManagementStore from '../stores/Stores';

var LoginComponents = function (_Component) {
    _inherits(LoginComponents, _Component);

    function LoginComponents(props) {
        _classCallCheck(this, LoginComponents);

        // this.state = ManagementStore.getNewData();
        var _this = _possibleConstructorReturn(this, (LoginComponents.__proto__ || Object.getPrototypeOf(LoginComponents)).call(this, props));

        _this._onChange = function () {
            // this.setState(ManagementStore.getNewData());
        };

        return _this;
    }

    _createClass(LoginComponents, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // ManagementStore.addChangeListener(this._onChange);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            // ManagementStore.removeChangeListener(this._onChange);
        }
    }, {
        key: 'render',
        value: function render() {
            var screenHeight = window.screen.availHeight;
            return _react2.default.createElement(
                'div',
                { className: 'loginBg', style: { backgroundImage: 'url(/images/banner/1.jpeg)' } },
                _react2.default.createElement(
                    'div',
                    { className: 'box' },
                    _react2.default.createElement(
                        'div',
                        { className: 'title' },
                        '\u5C0F\u4E8C'
                    ),
                    _react2.default.createElement(
                        'ul',
                        { className: 'login-info' },
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('input', { type: 'text', name: 'account', className: 'login-input', placeholder: '\u8D26\u53F7\u3001\u624B\u673A\u53F7\u6216\u90AE\u7BB1' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement('input', { type: 'password', name: 'pwd', className: 'login-input', placeholder: '\u5BC6\u7801' })
                        ),
                        _react2.default.createElement(
                            'li',
                            null,
                            _react2.default.createElement(
                                'p',
                                { className: 'forgot' },
                                '\u5FD8\u8BB0\u5BC6\u7801\uFF1F'
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'btn' },
                        '\u767B\u5F55'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'newSign' },
                    '\u6CA1\u6709\u8D26\u53F7\uFF1F',
                    _react2.default.createElement(
                        'i',
                        null,
                        '\u6CE8\u518C'
                    )
                )
            );
        }
    }]);

    return LoginComponents;
}(_react.Component);

function init() {
    var root = document.getElementById('J-login');
    if (root) {
        (0, _reactDom.render)(_react2.default.createElement(LoginComponents, null), root);
    }
}

exports.default = { init: init };

/***/ })
/******/ ]);