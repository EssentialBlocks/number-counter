(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/color-control/style.css":
/*!**************************************!*\
  !*** ./util/color-control/style.css ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/dimensions-control/style.scss":
/*!********************************************!*\
  !*** ./util/dimensions-control/style.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/image-avatar/style.scss":
/*!**************************************!*\
  !*** ./util/image-avatar/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/toggle-button/style.scss":
/*!***************************************!*\
  !*** ./util/toggle-button/style.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./util/unit-control/style.scss":
/*!**************************************!*\
  !*** ./util/unit-control/style.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);

/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","style-index"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/*! no static exports found */
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

/***/ "./node_modules/prop-types/checkPropTypes.js":
/*!***************************************************!*\
  !*** ./node_modules/prop-types/checkPropTypes.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (true) {
  var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
  var loggedTypeFailures = {};
  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;


/***/ }),

/***/ "./node_modules/prop-types/factoryWithTypeCheckers.js":
/*!************************************************************!*\
  !*** ./node_modules/prop-types/factoryWithTypeCheckers.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
var assign = __webpack_require__(/*! object-assign */ "./node_modules/object-assign/index.js");

var ReactPropTypesSecret = __webpack_require__(/*! ./lib/ReactPropTypesSecret */ "./node_modules/prop-types/lib/ReactPropTypesSecret.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
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
}

function emptyFunctionThatReturnsNull() {
  return null;
}

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
    elementType: createElementTypeTypeChecker(),
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
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
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
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
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

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
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
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
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
        if (has(propValue, key)) {
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : undefined;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
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

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
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
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ "./node_modules/prop-types/index.js":
/*!******************************************!*\
  !*** ./node_modules/prop-types/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(/*! ./factoryWithTypeCheckers */ "./node_modules/prop-types/factoryWithTypeCheckers.js")(ReactIs.isElement, throwOnDirectAccess);
} else {}


/***/ }),

/***/ "./node_modules/prop-types/lib/ReactPropTypesSecret.js":
/*!*************************************************************!*\
  !*** ./node_modules/prop-types/lib/ReactPropTypesSecret.js ***!
  \*************************************************************/
/*! no static exports found */
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

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (true) {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}


/***/ }),

/***/ "./node_modules/react-is/index.js":
/*!****************************************!*\
  !*** ./node_modules/react-is/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/constants/typographyPrefixConstants */ "./src/components/constants/typographyPrefixConstants.js");
/* harmony import */ var _components_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/helpers */ "./src/components/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread({
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "desktop"
  },
  // randomNumber attribute for making unique className
  randomNumber: {
    type: "number"
  }
}, Object(_components_helpers__WEBPACK_IMPORTED_MODULE_1__["generateTypographyAttributes"])(Object.values(_components_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), {}, {
  // MOBnumberFontFamily: { type: "string" },
  // MOBnumberFontSize: { type: "number" },
  // MOBnumberFontWeight: { type: "string" },
  // MOBnumberLetterSpacing: { type: "number" },
  // MOBnumberLetterSpacingUnit: { type: "string" },
  // MOBnumberLineHeight: { type: "number" },
  // MOBnumberLineHeightUnit: { type: "string" },
  // MOBnumberSizeUnit: { type: "string" },
  // MOBnumberTextDecoration: { type: "string" },
  // MOBnumberTextTransform: { type: "string" },
  // MOBprefixFontFamily: { type: "string" },
  // MOBprefixFontSize: { type: "number" },
  // MOBprefixFontWeight: { type: "string" },
  // MOBprefixLetterSpacing: { type: "number" },
  // MOBprefixLetterSpacingUnit: { type: "string" },
  // MOBprefixLineHeight: { type: "number" },
  // MOBprefixLineHeightUnit: { type: "string" },
  // MOBprefixSizeUnit: { type: "string" },
  // MOBprefixTextDecoration: { type: "string" },
  // MOBprefixTextTransform: { type: "string" },
  // MOBsuffixFontFamily: { type: "string" },
  // MOBsuffixFontSize: { type: "number" },
  // MOBsuffixFontWeight: { type: "string" },
  // MOBsuffixLetterSpacing: { type: "number" },
  // MOBsuffixLetterSpacingUnit: { type: "string" },
  // MOBsuffixLineHeight: { type: "number" },
  // MOBsuffixLineHeightUnit: { type: "string" },
  // MOBsuffixSizeUnit: { type: "string" },
  // MOBsuffixTextDecoration: { type: "string" },
  // MOBsuffixTextTransform: { type: "string" },
  // MOBtitleFontFamily: { type: "string" },
  // MOBtitleFontSize: { type: "number" },
  // MOBtitleFontWeight: { type: "string" },
  // MOBtitleLetterSpacing: { type: "number" },
  // MOBtitleLetterSpacingUnit: { type: "string" },
  // MOBtitleLineHeight: { type: "number" },
  // MOBtitleLineHeightUnit: { type: "string" },
  // MOBtitleSizeUnit: { type: "string" },
  // MOBtitleTextDecoration: { type: "string" },
  // MOBtitleTextTransform: { type: "string" },
  // TABnumberFontFamily: { type: "string" },
  // TABnumberFontSize: { type: "number" },
  // TABnumberFontWeight: { type: "string" },
  // TABnumberLetterSpacing: { type: "number" },
  // TABnumberLetterSpacingUnit: { type: "string" },
  // TABnumberLineHeight: { type: "number" },
  // TABnumberLineHeightUnit: { type: "string" },
  // TABnumberSizeUnit: { type: "string" },
  // TABnumberTextDecoration: { type: "string" },
  // TABnumberTextTransform: { type: "string" },
  // TABprefixFontFamily: { type: "string" },
  // TABprefixFontSize: { type: "number" },
  // TABprefixFontWeight: { type: "string" },
  // TABprefixLetterSpacing: { type: "number" },
  // TABprefixLetterSpacingUnit: { type: "string" },
  // TABprefixLineHeight: { type: "number" },
  // TABprefixLineHeightUnit: { type: "string" },
  // TABprefixSizeUnit: { type: "string" },
  // TABprefixTextDecoration: { type: "string" },
  // TABprefixTextTransform: { type: "string" },
  // TABsuffixFontFamily: { type: "string" },
  // TABsuffixFontSize: { type: "number" },
  // TABsuffixFontWeight: { type: "string" },
  // TABsuffixLetterSpacing: { type: "number" },
  // TABsuffixLetterSpacingUnit: { type: "string" },
  // TABsuffixLineHeight: { type: "number" },
  // TABsuffixLineHeightUnit: { type: "string" },
  // TABsuffixSizeUnit: { type: "string" },
  // TABsuffixTextDecoration: { type: "string" },
  // TABsuffixTextTransform: { type: "string" },
  // TABtitleFontFamily: { type: "string" },
  // TABtitleFontSize: { type: "number" },
  // TABtitleFontWeight: { type: "string" },
  // TABtitleLetterSpacing: { type: "number" },
  // TABtitleLetterSpacingUnit: { type: "string" },
  // TABtitleLineHeight: { type: "number" },
  // TABtitleLineHeightUnit: { type: "string" },
  // TABtitleSizeUnit: { type: "string" },
  // TABtitleTextDecoration: { type: "string" },
  // TABtitleTextTransform: { type: "string" },
  // numberFontFamily: { type: "string" },
  // numberFontSize: { type: "number" },
  // numberFontWeight: { type: "string", default: "400" },
  // numberLetterSpacing: { type: "number", default: 0 },
  // numberLetterSpacingUnit: { type: "string", default: "px" },
  // numberLineHeight: { type: "number", default: 1 },
  // numberLineHeightUnit: { type: "string", default: "em" },
  // numberSizeUnit: { type: "string", default: "px" },
  // numberTextDecoration: { type: "string", default: "initial" },
  // numberTextTransform: { type: "string", default: "none" },
  // prefixFontFamily: { type: "string" },
  // prefixFontSize: { type: "number" },
  // prefixFontWeight: { type: "string", default: "400" },
  // prefixLetterSpacing: { type: "number", default: 0 },
  // prefixLetterSpacingUnit: { type: "string", default: "px" },
  // prefixLineHeight: { type: "number", default: 1 },
  // prefixLineHeightUnit: { type: "string", default: "em" },
  // prefixSizeUnit: { type: "string", default: "px" },
  // prefixTextDecoration: { type: "string", default: "initial" },
  // prefixTextTransform: { type: "string", default: "none" },
  // suffixFontFamily: { type: "string" },
  // suffixFontSize: { type: "number" },
  // suffixFontWeight: { type: "string", default: "400" },
  // suffixLetterSpacing: { type: "number", default: 0 },
  // suffixLetterSpacingUnit: { type: "string", default: "px" },
  // suffixLineHeight: { type: "number", default: 1 },
  // suffixLineHeightUnit: { type: "string", default: "em" },
  // suffixSizeUnit: { type: "string", default: "px" },
  // suffixTextDecoration: { type: "string", default: "initial" },
  // suffixTextTransform: { type: "string", default: "none" },
  // titleFontFamily: { type: "string" },
  // titleFontSize: { type: "number" },
  // titleFontWeight: { type: "string", default: "400" },
  // titleLetterSpacing: { type: "number", default: 0 },
  // titleLetterSpacingUnit: { type: "string", default: "px" },
  // titleLineHeight: { type: "number", default: 1 },
  // titleLineHeightUnit: { type: "string", default: "em" },
  // titleSizeUnit: { type: "string", default: "px" },
  // titleTextDecoration: { type: "string", default: "initial" },
  // titleTextTransform: { type: "string", default: "none" },
  // counter settings attributes ⬇
  startValue: {
    type: "string",
    "default": "0"
  },
  target: {
    type: "string",
    "default": "5000"
  },
  duration: {
    type: "string",
    "default": "1000"
  },
  counterTitle: {
    type: "string",
    "default": "Active Users"
  },
  counterPrefix: {
    type: "string",
    "default": ""
  },
  counterSuffix: {
    type: "string",
    "default": "+"
  },
  isShowSeparator: {
    type: "boolean",
    "default": true
  },
  separator: {
    type: "string",
    "default": ","
  },
  separastorSelectLabel: {
    type: "string",
    "default": "Default"
  },
  wrapperFlexDirection: {
    type: "string",
    "default": "column"
  },
  layoutLabel: {
    type: "string",
    "default": "Default"
  },
  // color attributes ⬇
  titleColor: {
    type: "string",
    "default": "#566162"
  },
  numberColor: {
    type: "string",
    "default": "#3074ff"
  },
  numPrefixColor: {
    type: "string",
    "default": "#3074ff"
  },
  numSuffixColor: {
    type: "string",
    "default": "#3074ff"
  },
  TABtitleColor: {
    type: "string"
  },
  TABnumberColor: {
    type: "string"
  },
  TABnumPrefixColor: {
    type: "string"
  },
  TABnumSuffixColor: {
    type: "string"
  },
  MOBtitleColor: {
    type: "string"
  },
  MOBnumberColor: {
    type: "string"
  },
  MOBnumPrefixColor: {
    type: "string"
  },
  MOBnumSuffixColor: {
    type: "string"
  },
  // spacing attributes ⬇
  gapNumTitle: {
    type: "number",
    "default": 10
  },
  gapNumPrefix: {
    type: "number",
    "default": 0
  },
  gapNumSuffix: {
    type: "number",
    "default": 0
  },
  // margin padding attributes ⬇
  marginUnit: {
    type: "string",
    "default": "px"
  },
  marginTop: {
    type: "string",
    "default": "0"
  },
  marginRight: {
    type: "string",
    "default": "0"
  },
  marginBottom: {
    type: "string",
    "default": "0"
  },
  marginLeft: {
    type: "string",
    "default": "0"
  },
  paddingUnit: {
    type: "string",
    "default": "px"
  },
  paddingTop: {
    type: "string",
    "default": "50"
  },
  paddingRight: {
    type: "string",
    "default": "10"
  },
  paddingBottom: {
    type: "string",
    "default": "50"
  },
  paddingLeft: {
    type: "string",
    "default": "10"
  },
  // background attributes ⬇
  backgroundType: {
    type: "string",
    "default": "fill"
  },
  backgroundColor: {
    type: "string",
    "default": "transparent"
  },
  gradientColor: {
    type: "string",
    "default": "linear-gradient(45deg,#8200ff,#ff0071)"
  },
  backgroundSize: {
    type: "string",
    "default": "cover"
  },
  imageURL: {
    type: "string"
  },
  imageID: {
    type: "string"
  },
  // border attributes ⬇
  borderColor: {
    type: "string",
    "default": "#000000"
  },
  borderStyle: {
    type: "string",
    "default": "solid"
  },
  borderWidth: {
    type: "number",
    "default": 0
  },
  borderRadius: {
    type: "number",
    "default": 0
  },
  radiusUnit: {
    type: "string",
    "default": "px"
  },
  // shadow attributes  ⬇
  hOffset: {
    type: "number"
  },
  vOffset: {
    type: "number"
  },
  blur: {
    type: "number"
  },
  spread: {
    type: "number"
  },
  shadowColor: {
    type: "string"
  },
  inset: {
    type: "boolean",
    "default": false
  },
  shadowType: {
    type: "string",
    "default": "normal"
  },
  hoverHOffset: {
    type: "number"
  },
  hoverVOffset: {
    type: "number"
  },
  hoverBlur: {
    type: "number"
  },
  hoverSpread: {
    type: "number"
  },
  hoverShadowColor: {
    type: "string"
  },
  hoverInset: {
    type: "boolean",
    "default": false
  },
  isHover: {
    type: "boolean",
    "default": false
  },
  wrapperTransitionTime: {
    type: "string",
    "default": "500"
  } // // Typography Attributes  ⬇
  // // title typography attributes  ⬇
  // titleFontFamily: {
  // 	type: "string",
  // },
  // titleSizeUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // titleFontSize: {
  // 	type: "number",
  // },
  // titleFontWeight: {
  // 	type: "string",
  // 	default: "400",
  // },
  // titleTextTransform: {
  // 	type: "string",
  // 	default: "none",
  // },
  // titleTextDecoration: {
  // 	type: "string",
  // 	default: "initial",
  // },
  // titleLetterSpacingUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // titleLetterSpacing: {
  // 	type: "number",
  // 	default: 0,
  // },
  // titleLineHeightUnit: {
  // 	type: "string",
  // 	default: "em",
  // },
  // titleLineHeight: {
  // 	type: "number",
  // 	default: 1,
  // },
  // // number typography attributes  ⬇
  // numberFontFamily: {
  // 	type: "string",
  // },
  // numberSizeUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // numberFontSize: {
  // 	type: "number",
  // },
  // numberFontWeight: {
  // 	type: "string",
  // 	default: "400",
  // },
  // numberTextTransform: {
  // 	type: "string",
  // 	default: "none",
  // },
  // numberTextDecoration: {
  // 	type: "string",
  // 	default: "initial",
  // },
  // numberLetterSpacingUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // numberLetterSpacing: {
  // 	type: "number",
  // 	default: 0,
  // },
  // numberLineHeightUnit: {
  // 	type: "string",
  // 	default: "em",
  // },
  // numberLineHeight: {
  // 	type: "number",
  // 	default: 1,
  // },
  // // prefix typography attributes  ⬇
  // prefixFontFamily: {
  // 	type: "string",
  // },
  // prefixSizeUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // prefixFontSize: {
  // 	type: "number",
  // },
  // prefixFontWeight: {
  // 	type: "string",
  // 	default: "400",
  // },
  // prefixTextTransform: {
  // 	type: "string",
  // 	default: "none",
  // },
  // prefixTextDecoration: {
  // 	type: "string",
  // 	default: "initial",
  // },
  // prefixLetterSpacingUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // prefixLetterSpacing: {
  // 	type: "number",
  // 	default: 0,
  // },
  // prefixLineHeightUnit: {
  // 	type: "string",
  // 	default: "em",
  // },
  // prefixLineHeight: {
  // 	type: "number",
  // 	default: 1,
  // },
  // // suffix typography attributes  ⬇
  // suffixFontFamily: {
  // 	type: "string",
  // },
  // suffixSizeUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // suffixFontSize: {
  // 	type: "number",
  // },
  // suffixFontWeight: {
  // 	type: "string",
  // 	default: "400",
  // },
  // suffixTextTransform: {
  // 	type: "string",
  // 	default: "none",
  // },
  // suffixTextDecoration: {
  // 	type: "string",
  // 	default: "initial",
  // },
  // suffixLetterSpacingUnit: {
  // 	type: "string",
  // 	default: "px",
  // },
  // suffixLetterSpacing: {
  // 	type: "number",
  // 	default: 0,
  // },
  // suffixLineHeightUnit: {
  // 	type: "string",
  // 	default: "em",
  // },
  // suffixLineHeight: {
  // 	type: "number",
  // 	default: 1,
  // },

}));

/***/ }),

/***/ "./src/components/ResPanelBody.js":
/*!****************************************!*\
  !*** ./src/components/ResPanelBody.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var PanelBody = wp.components.PanelBody;

function ResPanelBody(props) {
  console.log("----------ResPanelBody", {
    props: props
  });
  var title = props.title,
      initialOpen = props.initialOpen,
      children = props.children,
      resRequiredProps = props.resRequiredProps;
  var resOption = resRequiredProps.resOption,
      setAttributes = resRequiredProps.setAttributes;

  var handleDesktopBtnClick = function handleDesktopBtnClick() {
    document.body.classList.add("eb-res-option-desktop");
    document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
    setAttributes({
      resOption: "desktop"
    });
  };

  var handleTabBtnClick = function handleTabBtnClick() {
    document.body.classList.add("eb-res-option-tab");
    document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
    setAttributes({
      resOption: "tab"
    });
  };

  var handleMobileBtnClick = function handleMobileBtnClick() {
    document.body.classList.add("eb-res-option-mobile");
    document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
    setAttributes({
      resOption: "mobile"
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PanelBody, {
    title: title,
    initialOpen: initialOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-resButtons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-desktop ".concat(resOption == "desktop" && "active"),
    onClick: handleDesktopBtnClick
  }, "Desktop"), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-tab ".concat(resOption == "tab" && "active"),
    onClick: handleTabBtnClick
  }, "Tab"), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-mobile ".concat(resOption == "mobile" && "active"),
    onClick: handleMobileBtnClick
  }, "Mobile")), children));
}

/* harmony default export */ __webpack_exports__["default"] = (ResPanelBody);

/***/ }),

/***/ "./src/components/constants.js":
/*!*************************************!*\
  !*** ./src/components/constants.js ***!
  \*************************************/
/*! exports provided: SEPARATOR_OPTIONS, LAYOUT_OPTIONS, FONT_WEIGHTS, TEXT_TRANSFORM, TEXT_DECORATION, FONT_SIZE_UNITS, LETTER_SPACING_LINE_HEIGHT_UNITS, BACKGROUND_TYPES, BACKGROUND_SIZES, BORDER_STYLES, SHADOW_HOVER_OPTIONS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEPARATOR_OPTIONS", function() { return SEPARATOR_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LAYOUT_OPTIONS", function() { return LAYOUT_OPTIONS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_WEIGHTS", function() { return FONT_WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_TRANSFORM", function() { return TEXT_TRANSFORM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TEXT_DECORATION", function() { return TEXT_DECORATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONT_SIZE_UNITS", function() { return FONT_SIZE_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LETTER_SPACING_LINE_HEIGHT_UNITS", function() { return LETTER_SPACING_LINE_HEIGHT_UNITS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_TYPES", function() { return BACKGROUND_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BACKGROUND_SIZES", function() { return BACKGROUND_SIZES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BORDER_STYLES", function() { return BORDER_STYLES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHADOW_HOVER_OPTIONS", function() { return SHADOW_HOVER_OPTIONS; });
var __ = wp.i18n.__;
var SEPARATOR_OPTIONS = [{
  label: __("Default"),
  value: "Default"
}, {
  label: __("Dot"),
  value: "Dot"
}, {
  label: __("Space"),
  value: "Space"
}];
var LAYOUT_OPTIONS = [{
  label: __("Default"),
  value: "Default"
}, {
  label: __("Reverse"),
  value: "Reverse"
}];
var FONT_WEIGHTS = [{
  label: __("100"),
  value: "100"
}, {
  label: __("200"),
  value: "200"
}, {
  label: __("300"),
  value: "300"
}, {
  label: __("400"),
  value: "400"
}, {
  label: __("500"),
  value: "500"
}, {
  label: __("600"),
  value: "600"
}, {
  label: __("700"),
  value: "700"
}, {
  label: __("800"),
  value: "800"
}, {
  label: __("900"),
  value: "900"
}];
var TEXT_TRANSFORM = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Lowercase"),
  value: "lowercase"
}, {
  label: __("Capitalize"),
  value: "capitalize"
}, {
  label: __("Uppercase"),
  value: "uppercase"
}];
var TEXT_DECORATION = [{
  label: __("Initial"),
  value: "initial"
}, {
  label: __("Overline"),
  value: "overline"
}, {
  label: __("Line Through"),
  value: "line-through"
}, {
  label: __("Underline"),
  value: "underline"
}, {
  label: __("Underline Oveline"),
  value: "underline overline"
}];
var FONT_SIZE_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "%",
  value: "%"
}];
var LETTER_SPACING_LINE_HEIGHT_UNITS = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];
var BACKGROUND_TYPES = [{
  label: __("Fill"),
  value: "fill"
}, {
  label: __("Gradient"),
  value: "gradient"
}, {
  label: __("Image"),
  value: "image"
}];
var BACKGROUND_SIZES = [{
  label: __("Auto"),
  value: "auto"
}, {
  label: __("Cover"),
  value: "cover"
}, {
  label: __("Contain"),
  value: "contain"
}];
var BORDER_STYLES = [{
  label: __("None"),
  value: "none"
}, {
  label: __("Dashed"),
  value: "dashed"
}, {
  label: __("Solid"),
  value: "solid"
}, {
  label: __("Dotted"),
  value: "dotted"
}, {
  label: __("Double"),
  value: "double"
}, {
  label: __("Groove"),
  value: "groove"
}, {
  label: __("Inset"),
  value: "inset"
}, {
  label: __("Outset"),
  value: "outset"
}, {
  label: __("Ridge"),
  value: "ridge"
}];
var SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}];

/***/ }),

/***/ "./src/components/constants/typographyPrefixConstants.js":
/*!***************************************************************!*\
  !*** ./src/components/constants/typographyPrefixConstants.js ***!
  \***************************************************************/
/*! exports provided: title, number, numPrefix, numSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "title", function() { return title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "number", function() { return number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numPrefix", function() { return numPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numSuffix", function() { return numSuffix; });
var title = "title";
var number = "number";
var numPrefix = "prefix";
var numSuffix = "suffix";

/***/ }),

/***/ "./src/components/edit.js":
/*!********************************!*\
  !*** ./src/components/edit.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inspector */ "./src/components/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/components/constants/typographyPrefixConstants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers */ "./src/components/helpers.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var _wp$element = wp.element,
    useRef = _wp$element.useRef,
    useEffect = _wp$element.useEffect;
var RichText = wp.blockEditor.RichText;
/**
 * Internal dependencies
 */





var Edit = function Edit(props) {
  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes;
  console.log("--------edit:", props);
  var randomNumber = attributes.randomNumber,
      target = attributes.target,
      duration = attributes.duration,
      counterTitle = attributes.counterTitle,
      counterSuffix = attributes.counterSuffix,
      counterPrefix = attributes.counterPrefix,
      startValue = attributes.startValue,
      isShowSeparator = attributes.isShowSeparator,
      separator = attributes.separator,
      wrapperFlexDirection = attributes.wrapperFlexDirection,
      titleColor = attributes.titleColor,
      numberColor = attributes.numberColor,
      numPrefixColor = attributes.numPrefixColor,
      numSuffixColor = attributes.numSuffixColor,
      TABtitleColor = attributes.TABtitleColor,
      TABnumberColor = attributes.TABnumberColor,
      TABnumPrefixColor = attributes.TABnumPrefixColor,
      TABnumSuffixColor = attributes.TABnumSuffixColor,
      MOBtitleColor = attributes.MOBtitleColor,
      MOBnumberColor = attributes.MOBnumberColor,
      MOBnumPrefixColor = attributes.MOBnumPrefixColor,
      MOBnumSuffixColor = attributes.MOBnumSuffixColor,
      gapNumTitle = attributes.gapNumTitle,
      gapNumPrefix = attributes.gapNumPrefix,
      gapNumSuffix = attributes.gapNumSuffix,
      marginUnit = attributes.marginUnit,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingUnit = attributes.paddingUnit,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      backgroundType = attributes.backgroundType,
      imageURL = attributes.imageURL,
      gradientColor = attributes.gradientColor,
      backgroundSize = attributes.backgroundSize,
      backgroundColor = attributes.backgroundColor,
      borderWidth = attributes.borderWidth,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderRadius = attributes.borderRadius,
      radiusUnit = attributes.radiusUnit,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      inset = attributes.inset,
      isHover = attributes.isHover,
      hoverShadowColor = attributes.hoverShadowColor,
      hoverHOffset = attributes.hoverHOffset,
      hoverVOffset = attributes.hoverVOffset,
      hoverBlur = attributes.hoverBlur,
      hoverSpread = attributes.hoverSpread,
      hoverInset = attributes.hoverInset,
      wrapperTransitionTime = attributes.wrapperTransitionTime;
  var counterRef = useRef(null);

  var CounterAnimation = function CounterAnimation() {
    var time = duration && Math.floor(Math.abs(duration)) > 499 ? Math.floor(Math.abs(duration)) - 200 : 300;
    var endTarget = target ? Math.floor(Math.abs(target)) : 0;
    var cleanStartValue = startValue && Math.floor(Math.abs(startValue)) < endTarget ? Math.floor(Math.abs(startValue)) : 0;
    var increaseBy = (endTarget - cleanStartValue) / time * 53;
    var timeoutIdInside;
    var timeoutId = setTimeout(function () {
      function updateCount() {
        cleanStartValue += increaseBy;
        counterRef.current.innerText = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["textInsideForEdit"])(Math.floor(cleanStartValue), isShowSeparator, separator);

        if (cleanStartValue < endTarget) {
          timeoutIdInside = setTimeout(function () {
            updateCount();
          }, 53);
        } else {
          counterRef.current.innerText = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["textInsideForEdit"])(endTarget, isShowSeparator, separator);
        }
      }

      updateCount();
    }, 200);
    return function () {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdInside);
    };
  };

  useEffect(function () {
    return CounterAnimation();
  }, [target, duration, startValue, separator, isShowSeparator]);
  useEffect(function () {
    var bodyClasses = document.body.className;

    if (!bodyClasses.includes("eb-res-option-")) {
      document.body.classList.add("eb-res-option-desktop");
    } else if (bodyClasses.includes("eb-res-option-desktop")) {
      setAttributes({
        resOption: "desktop"
      });
    } else if (bodyClasses.includes("eb-res-option-tab")) {
      setAttributes({
        resOption: "tab"
      });
    } else if (bodyClasses.includes("eb-res-option-mobile")) {
      setAttributes({
        resOption: "mobile"
      });
    }

    console.log("-----edit er moddhe theke useEffect on [] log holo", {
      bodyClasses: bodyClasses
    });
    var genRandomNumber = Object(_helpers__WEBPACK_IMPORTED_MODULE_2__["generateRandomNumber"])();
    var anotherSameClassElements = document.querySelectorAll(".eb-counter-wrapper-".concat(randomNumber));

    if (!randomNumber || anotherSameClassElements[1]) {
      setAttributes({
        randomNumber: genRandomNumber
      });
    }
  }, []); // function to generate typography styles for an element based on it's prefix

  var generateTypographyStyles = function generateTypographyStyles(prefixConstant) {
    var defaultFontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
        fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
        textTransform = attributes["".concat(prefixConstant, "TextTransform")],
        textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
        fontSize = attributes["".concat(prefixConstant, "FontSize")],
        sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
        letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
        letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
        lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
        lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
        TABfontFamily = attributes["TAB".concat(prefixConstant, "FontFamily")],
        TABfontWeight = attributes["TAB".concat(prefixConstant, "FontWeight")],
        TABtextTransform = attributes["TAB".concat(prefixConstant, "TextTransform")],
        TABtextDecoration = attributes["TAB".concat(prefixConstant, "TextDecoration")],
        TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
        TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
        TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
        TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
        TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
        TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
        MOBfontFamily = attributes["MOB".concat(prefixConstant, "FontFamily")],
        MOBfontWeight = attributes["MOB".concat(prefixConstant, "FontWeight")],
        MOBtextTransform = attributes["MOB".concat(prefixConstant, "TextTransform")],
        MOBtextDecoration = attributes["MOB".concat(prefixConstant, "TextDecoration")],
        MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
        MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
        MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
        MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
        MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")],
        MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")];
    var typoStylesDesktop = "\n\t\t\tfont-family: ".concat(fontFamily ? fontFamily : "inherit", ";\n\t\t\t\n\n\t\t");
    return {
      fontFamily: fontFamily ? fontFamily : "inherit",
      // fontSize: defaultFontSize
      // 	? `${attributes[`${prefix}FontSize`] || defaultFontSize}${
      // 			attributes[`${prefix}SizeUnit`]
      // 	  }`
      // 	: attributes[`${prefix}FontSize`]
      // 	? `${attributes[`${prefix}FontSize`]}${attributes[`${prefix}SizeUnit`]}`
      // 	: "inherit",
      fontSize: attributes["".concat(prefixConstant, "FontSize")] ? "".concat(attributes["".concat(prefixConstant, "FontSize")]).concat(attributes["".concat(prefixConstant, "SizeUnit")]) : defaultFontSize ? "".concat(defaultFontSize).concat(attributes["".concat(prefixConstant, "SizeUnit")]) : "inherit",
      fontWeight: attributes["".concat(prefixConstant, "FontWeight")],
      textTransform: attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration: attributes["".concat(prefixConstant, "TextDecoration")],
      letterSpacing: "".concat(attributes["".concat(prefixConstant, "LetterSpacing")]).concat(attributes["".concat(prefixConstant, "LetterSpacingUnit")], " "),
      lineHeight: "".concat(attributes["".concat(prefixConstant, "LineHeight")]).concat(attributes["".concat(prefixConstant, "LineHeightUnit")], " ")
    };
  };

  var titleStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__["title"], 40));

  var numberStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__["number"], 64));

  var numPrefixStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__["numPrefix"]));

  var numSuffixStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_1__["numSuffix"]));

  var wrapperStylesDesktop = "\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, "{\n\t\tmargin-top: ").concat(marginTop || 0).concat(marginUnit, ";\n\t\tmargin-bottom: ").concat(marginBottom || 0).concat(marginUnit, ";\n\t\tmargin-left: ").concat(marginLeft || 0).concat(marginUnit, ";\n\t\tmargin-right: ").concat(marginRight || 0).concat(marginUnit, ";\n\t\tpadding-top: ").concat(paddingTop || 0).concat(paddingUnit, ";\n\t\tpadding-bottom: ").concat(paddingBottom || 0).concat(paddingUnit, ";\n\t\tpadding-right: ").concat(paddingRight || 0).concat(paddingUnit, ";\n\t\tpadding-left: ").concat(paddingLeft || 0).concat(paddingUnit, ";\n\t\tgap: ").concat(gapNumTitle, "px;\n\t\tflex-direction: ").concat(wrapperFlexDirection, ";\n\t\tbackground-image:\n\t\t\t").concat(backgroundType === "image" && imageURL ? "url(\"".concat(imageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n\t\tbackground-size: ").concat(backgroundSize, ";\n\t\tbackground-color:\n\t\t\t").concat(backgroundType === "fill" && backgroundColor || "transparent", ";\n\t\tborder: ").concat(borderWidth || 0, "px ").concat(borderStyle, " ").concat(borderColor || "#000000", ";\n\t\tborder-radius: ").concat(borderRadius || 0).concat(radiusUnit, ";\n\t\tbox-shadow: ").concat(shadowColor || "#000000", " ").concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(inset ? "inset" : "", ";\n\t\ttransition: ").concat(wrapperTransitionTime ? "".concat(wrapperTransitionTime / 1000, "s") : ".5s", ";\n\t}\n\t");
  var numberStylesDesktop = "\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-number{\n\t\tcolor : ").concat(numberColor, ";\n\t\tpadding-left: ").concat(gapNumPrefix, "px;\n\t\tpadding-right: ").concat(gapNumSuffix, "px;\n\t}\n\t");
  var titleStylesDesktop = "\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-title{\n\t\tcolor : ").concat(titleColor, ";\n\t}\n\t");
  var numPrefixStylesDesktop = "\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-prefix{\n\t\tcolor : ").concat(numPrefixColor, ";\n\t}\n\t");
  var numSuffixStylesDesktop = "\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-suffix{\n\t\tcolor : ").concat(numSuffixColor, ";\n\t}\n\t");
  var numberStylesTab = "   .eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-number{\n\t\tcolor : ").concat(TABnumberColor || numberColor, ";\n\t} ");
  var titleStylesTab = "  \n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-title{\n\t\tcolor : ").concat(TABtitleColor || titleColor, ";\n\t}  ");
  var numPrefixStylesTab = "  \n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-prefix{\n\t\tcolor : ").concat(TABnumPrefixColor || numPrefixColor, ";\n\t}  ");
  var numSuffixStylesTab = "   \t\t\t\t\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-suffix{\n\t\tcolor : ").concat(TABnumSuffixColor || numSuffixColor, ";\n\t} ");
  var numberStylesMobile = " .eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-number{\n\t\tcolor : ").concat(MOBnumberColor || TABnumberColor || numberColor, ";\n\t}");
  var titleStylesMobile = "  \t\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-title{\n\t\tcolor : ").concat(MOBtitleColor || TABtitleColor || titleColor, ";\n\t} ");
  var numPrefixStylesMobile = "  \n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-prefix{\n\t\tcolor : ").concat(MOBnumPrefixColor || TABnumPrefixColor || numPrefixColor, ";\n\t}  ");
  var numSuffixStylesMobile = "   \t\n\t\t\t\t\n\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, " .eb-counter-suffix{\n\t\tcolor : ").concat(MOBnumSuffixColor || TABnumSuffixColor || numSuffixColor, ";\n\t}\n\n\t");
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_0__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\n\t\t\t\t".concat(wrapperStylesDesktop, "\n\t\t\t\t").concat(numberStylesDesktop, "\n\t\t\t\t").concat(titleStylesDesktop, "\n\t\t\t\t").concat(numPrefixStylesDesktop, "\n\t\t\t\t").concat(numSuffixStylesDesktop, "\n\t\t\t\t\n\n\t\t\t\t@media all and (max-width: 1030px) {\t\t\t\t\n\t\t\t\t\t").concat(numberStylesTab, "\n\t\t\t\t\t").concat(titleStylesTab, "\n\t\t\t\t\t").concat(numPrefixStylesTab, "\n\t\t\t\t\t").concat(numSuffixStylesTab, "\n\t\t\t\t}\n\n\t\t\t\t@media all and (max-width: 680px) {\n\t\t\t\t\t").concat(numberStylesMobile, "\n\t\t\t\t\t").concat(titleStylesMobile, "\n\t\t\t\t\t").concat(numPrefixStylesMobile, "\n\t\t\t\t\t").concat(numSuffixStylesMobile, "\n\t\t\t\t}\n\n\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-counter-wrapper eb-counter-wrapper-".concat(randomNumber),
    onMouseEnter: function onMouseEnter() {
      return setAttributes({
        isHover: true
      });
    },
    onMouseLeave: function onMouseLeave() {
      return setAttributes({
        isHover: false
      });
    }
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eb-counter-number"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-prefix",
    style: numPrefixStyles
  }, counterPrefix), /*#__PURE__*/React.createElement("span", {
    ref: counterRef,
    className: "eb-counter eb-counter-number",
    style: numberStyles
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-suffix",
    style: numSuffixStyles
  }, counterSuffix)), /*#__PURE__*/React.createElement(RichText, {
    tagName: "h3",
    style: titleStyles,
    className: "eb-counter-title",
    value: counterTitle,
    formattingControl: ["bold", "italic"],
    onChange: function onChange(counterTitle) {
      return setAttributes({
        counterTitle: counterTitle
      });
    }
  })))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/components/helpers.js":
/*!***********************************!*\
  !*** ./src/components/helpers.js ***!
  \***********************************/
/*! exports provided: generateTypographyAttributes, textInsideForEdit, generateRandomNumber */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// function to generate typography attributes for multiple typography control based on the array of prefix
var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var templateForTypographyAttributes = "{\n\t\t\"_prefix_FontFamily\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"_prefix_SizeUnit\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"px\"\n\t\t},\n\t\t\"_prefix_FontSize\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"_prefix_FontWeight\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"400\"\n\t\t},\n\t\t\"_prefix_TextTransform\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"none\"\n\t\t},\n\t\t\"_prefix_TextDecoration\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"initial\"\n\t\t},\n\t\t\"_prefix_LetterSpacingUnit\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"px\"\n\t\t},\n\t\t\"_prefix_LetterSpacing\":{\n\t\t\t\"type\":\"number\",\n\t\t\t\"default\":0\n\t\t},\n\t\t\"_prefix_LineHeightUnit\":{\n\t\t\t\"type\":\"string\",\n\t\t\t\"default\":\"em\"\n\t\t},\n\t\t\"_prefix_LineHeight\":{\n\t\t\t\"type\":\"number\",\n\t\t\t\"default\":1\n\t\t},\n\t\t\"TAB_prefix_FontFamily\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_SizeUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_FontSize\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"TAB_prefix_FontWeight\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_TextTransform\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_TextDecoration\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_LetterSpacingUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_LetterSpacing\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"TAB_prefix_LineHeightUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"TAB_prefix_LineHeight\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"MOB_prefix_FontFamily\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_SizeUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_FontSize\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"MOB_prefix_FontWeight\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_TextTransform\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_TextDecoration\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_LetterSpacingUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_LetterSpacing\":{\n\t\t\t\"type\":\"number\"\n\t\t},\n\t\t\"MOB_prefix_LineHeightUnit\":{\n\t\t\t\"type\":\"string\"\n\t\t},\n\t\t\"MOB_prefix_LineHeight\":{\n\t\t\t\"type\":\"number\"\n\t\t}\n\t\t\n\t}";
  return prefixArray.reduce(function (total, current) {
    var result = templateForTypographyAttributes.replace(/_prefix_/g, current);
    return _objectSpread(_objectSpread({}, total), JSON.parse(result));
  }, {});
}; // helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown

var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
};
var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
};

/***/ }),

/***/ "./src/components/inspector.js":
/*!*************************************!*\
  !*** ./src/components/inspector.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_dimensions_control__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../util/dimensions-control */ "./util/dimensions-control/index.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../util/unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../util/gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../util/image-avatar/ImageAvater */ "./util/image-avatar/ImageAvater.js");
/* harmony import */ var _util_reset_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../util/reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _util_toggle_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../util/toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _controls_typographyControl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../controls/typographyControl */ "./src/controls/typographyControl/index.js");
/* harmony import */ var _ResPanelBody__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ResPanelBody */ "./src/components/ResPanelBody.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants */ "./src/components/constants.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/components/constants/typographyPrefixConstants.js");
/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$blockEditor = wp.blockEditor,
    InspectorControls = _wp$blockEditor.InspectorControls,
    MediaUpload = _wp$blockEditor.MediaUpload;
var useEffect = wp.element.useEffect;
var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button,
    PanelBody = _wp$components.PanelBody,
    ToggleControl = _wp$components.ToggleControl,
    TextControl = _wp$components.TextControl,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RangeControl = _wp$components.RangeControl;
/**
 * Internal dependencies
 */













var Inspector = function Inspector(props) {
  console.log("--------inspector:", props);
  var attributes = props.attributes,
      setAttributes = props.setAttributes;
  var resOption = attributes.resOption,
      startValue = attributes.startValue,
      target = attributes.target,
      counterPrefix = attributes.counterPrefix,
      counterSuffix = attributes.counterSuffix,
      duration = attributes.duration,
      isShowSeparator = attributes.isShowSeparator,
      separastorSelectLabel = attributes.separastorSelectLabel,
      layoutLabel = attributes.layoutLabel,
      titleColor = attributes.titleColor,
      numberColor = attributes.numberColor,
      numPrefixColor = attributes.numPrefixColor,
      numSuffixColor = attributes.numSuffixColor,
      TABtitleColor = attributes.TABtitleColor,
      TABnumberColor = attributes.TABnumberColor,
      TABnumPrefixColor = attributes.TABnumPrefixColor,
      TABnumSuffixColor = attributes.TABnumSuffixColor,
      MOBtitleColor = attributes.MOBtitleColor,
      MOBnumberColor = attributes.MOBnumberColor,
      MOBnumPrefixColor = attributes.MOBnumPrefixColor,
      MOBnumSuffixColor = attributes.MOBnumSuffixColor,
      gapNumTitle = attributes.gapNumTitle,
      gapNumPrefix = attributes.gapNumPrefix,
      gapNumSuffix = attributes.gapNumSuffix,
      marginUnit = attributes.marginUnit,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingUnit = attributes.paddingUnit,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      backgroundType = attributes.backgroundType,
      backgroundColor = attributes.backgroundColor,
      gradientColor = attributes.gradientColor,
      imageURL = attributes.imageURL,
      imageID = attributes.imageID,
      backgroundSize = attributes.backgroundSize,
      borderWidth = attributes.borderWidth,
      radiusUnit = attributes.radiusUnit,
      borderRadius = attributes.borderRadius,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      shadowType = attributes.shadowType,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      inset = attributes.inset,
      hoverShadowColor = attributes.hoverShadowColor,
      hoverHOffset = attributes.hoverHOffset,
      hoverVOffset = attributes.hoverVOffset,
      hoverBlur = attributes.hoverBlur,
      hoverSpread = attributes.hoverSpread,
      hoverInset = attributes.hoverInset,
      wrapperTransitionTime = attributes.wrapperTransitionTime;

  var handleSeparatorChange = function handleSeparatorChange(separastorSelectLabel) {
    switch (separastorSelectLabel) {
      case "Default":
        setAttributes({
          separator: ","
        });
        break;

      case "Dot":
        setAttributes({
          separator: "."
        });
        break;

      case "Space":
        setAttributes({
          separator: " "
        });
        break;
    }

    setAttributes({
      separastorSelectLabel: separastorSelectLabel
    });
  };

  var handleLayoutChange = function handleLayoutChange(layoutLabel) {
    switch (layoutLabel) {
      case "Default":
        setAttributes({
          wrapperFlexDirection: "column"
        });
        break;

      case "Reverse":
        setAttributes({
          wrapperFlexDirection: "column-reverse"
        });
        break;
    }

    setAttributes({
      layoutLabel: layoutLabel
    });
  };

  console.log("---from inspector outside without any useEffect: ", {
    resOption: resOption
  });
  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption
  };

  var generateTypographyAttributes = function generateTypographyAttributes(prefixConstant) {
    var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
        fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
        textTransform = attributes["".concat(prefixConstant, "TextTransform")],
        textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
        fontSize = attributes["".concat(prefixConstant, "FontSize")],
        sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
        letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
        letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
        lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
        lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
        TABfontFamily = attributes["TAB".concat(prefixConstant, "FontFamily")],
        TABfontWeight = attributes["TAB".concat(prefixConstant, "FontWeight")],
        TABtextTransform = attributes["TAB".concat(prefixConstant, "TextTransform")],
        TABtextDecoration = attributes["TAB".concat(prefixConstant, "TextDecoration")],
        TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
        TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
        TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
        TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
        TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
        TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
        MOBfontFamily = attributes["MOB".concat(prefixConstant, "FontFamily")],
        MOBfontWeight = attributes["MOB".concat(prefixConstant, "FontWeight")],
        MOBtextTransform = attributes["MOB".concat(prefixConstant, "TextTransform")],
        MOBtextDecoration = attributes["MOB".concat(prefixConstant, "TextDecoration")],
        MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
        MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
        MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
        MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
        MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")],
        MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")];
    return {
      fontFamily: fontFamily,
      fontWeight: fontWeight,
      textTransform: textTransform,
      textDecoration: textDecoration,
      fontSize: fontSize,
      sizeUnit: sizeUnit,
      letterSpacing: letterSpacing,
      letterSpacingUnit: letterSpacingUnit,
      lineHeight: lineHeight,
      lineHeightUnit: lineHeightUnit,
      TABfontFamily: TABfontFamily,
      TABfontWeight: TABfontWeight,
      TABtextTransform: TABtextTransform,
      TABtextDecoration: TABtextDecoration,
      TABfontSize: TABfontSize,
      TABsizeUnit: TABsizeUnit,
      TABletterSpacing: TABletterSpacing,
      TABletterSpacingUnit: TABletterSpacingUnit,
      TABlineHeight: TABlineHeight,
      TABlineHeightUnit: TABlineHeightUnit,
      MOBfontFamily: MOBfontFamily,
      MOBfontWeight: MOBfontWeight,
      MOBtextTransform: MOBtextTransform,
      MOBtextDecoration: MOBtextDecoration,
      MOBfontSize: MOBfontSize,
      MOBsizeUnit: MOBsizeUnit,
      MOBletterSpacing: MOBletterSpacing,
      MOBletterSpacingUnit: MOBletterSpacingUnit,
      MOBlineHeight: MOBlineHeight,
      MOBlineHeightUnit: MOBlineHeightUnit
    };
  };

  var typoAttrr = generateTypographyAttributes(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["title"]);
  console.log("------------title typo attributes", {
    typoAttrr: typoAttrr
  });
  useEffect(function () {
    var bodyClasses = document.body.className;
    console.log("----log from inspector useEffect with empty []", {
      bodyClasses: bodyClasses
    });

    if (bodyClasses.includes("eb-res-option-desktop")) {
      setAttributes({
        resOption: "desktop"
      });
    } else if (bodyClasses.includes("eb-res-option-tab")) {
      setAttributes({
        resOption: "tab"
      });
    } else if (bodyClasses.includes("eb-res-option-mobile")) {
      setAttributes({
        resOption: "mobile"
      });
    }
  }, []);
  return /*#__PURE__*/React.createElement(InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Counter Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-start-value"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Starting Number"),
    value: startValue,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        startValue: value
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-end-value"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Ending Number"),
    value: target,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        target: value
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-duration"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Animation Duration"),
    value: duration,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        duration: value
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-prefix"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Number Prefix"),
    value: counterPrefix,
    onChange: function onChange(counterPrefix) {
      return setAttributes({
        counterPrefix: counterPrefix
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-suffix"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Number Suffix"),
    value: counterSuffix,
    onChange: function onChange(counterSuffix) {
      return setAttributes({
        counterSuffix: counterSuffix
      });
    }
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Layouts"),
    options: _constants__WEBPACK_IMPORTED_MODULE_9__["LAYOUT_OPTIONS"],
    value: layoutLabel,
    onChange: function onChange(value) {
      return handleLayoutChange(value);
    }
  }), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Thousand Separator"),
    checked: isShowSeparator,
    onChange: function onChange() {
      return setAttributes({
        isShowSeparator: !isShowSeparator
      });
    }
  }), isShowSeparator && /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Separator"),
    options: _constants__WEBPACK_IMPORTED_MODULE_9__["SEPARATOR_OPTIONS"],
    value: separastorSelectLabel,
    onChange: function onChange(value) {
      return handleSeparatorChange(value);
    }
  })), /*#__PURE__*/React.createElement(_ResPanelBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: __("Typography"),
    initialOpen: false,
    resRequiredProps: resRequiredProps
  }, /*#__PURE__*/React.createElement(_controls_typographyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Title",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["title"],
    typographyAttributes: generateTypographyAttributes(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["title"]),
    resOption: resOption,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_controls_typographyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Number",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["number"],
    typographyAttributes: generateTypographyAttributes(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["number"]),
    resOption: resOption,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_controls_typographyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Prefix",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["numPrefix"],
    typographyAttributes: generateTypographyAttributes(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["numPrefix"]),
    resOption: resOption,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement(_controls_typographyControl__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Suffix",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["numSuffix"],
    typographyAttributes: generateTypographyAttributes(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_10__["numSuffix"]),
    resOption: resOption,
    setAttributes: setAttributes
  })), /*#__PURE__*/React.createElement(_ResPanelBody__WEBPACK_IMPORTED_MODULE_8__["default"], {
    title: __("Colors"),
    initialOpen: false,
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number"),
    color: numberColor,
    onChange: function onChange(numberColor) {
      return setAttributes({
        numberColor: numberColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Title"),
    color: titleColor,
    onChange: function onChange(titleColor) {
      return setAttributes({
        titleColor: titleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Prefix"),
    color: numPrefixColor,
    onChange: function onChange(numPrefixColor) {
      return setAttributes({
        numPrefixColor: numPrefixColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Suffix"),
    color: numSuffixColor,
    onChange: function onChange(numSuffixColor) {
      return setAttributes({
        numSuffixColor: numSuffixColor
      });
    }
  })), resOption == "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number"),
    color: TABnumberColor || numberColor,
    onChange: function onChange(TABnumberColor) {
      return setAttributes({
        TABnumberColor: TABnumberColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Title"),
    color: TABtitleColor || titleColor,
    onChange: function onChange(TABtitleColor) {
      return setAttributes({
        TABtitleColor: TABtitleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Prefix"),
    color: TABnumPrefixColor || numPrefixColor,
    onChange: function onChange(TABnumPrefixColor) {
      return setAttributes({
        TABnumPrefixColor: TABnumPrefixColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Suffix"),
    color: TABnumSuffixColor || numSuffixColor,
    onChange: function onChange(TABnumSuffixColor) {
      return setAttributes({
        TABnumSuffixColor: TABnumSuffixColor
      });
    }
  })), resOption == "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number"),
    color: MOBnumberColor || TABnumberColor || numberColor,
    onChange: function onChange(MOBnumberColor) {
      return setAttributes({
        MOBnumberColor: MOBnumberColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Title"),
    color: MOBtitleColor || TABtitleColor || titleColor,
    onChange: function onChange(MOBtitleColor) {
      return setAttributes({
        MOBtitleColor: MOBtitleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Prefix"),
    color: MOBnumPrefixColor || TABnumPrefixColor || numPrefixColor,
    onChange: function onChange(MOBnumPrefixColor) {
      return setAttributes({
        MOBnumPrefixColor: MOBnumPrefixColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Number Suffix"),
    color: MOBnumSuffixColor || TABnumSuffixColor || numSuffixColor,
    onChange: function onChange(MOBnumSuffixColor) {
      return setAttributes({
        MOBnumSuffixColor: MOBnumSuffixColor
      });
    }
  }))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Spacing"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Number & Title Gap"),
    value: gapNumTitle,
    onChange: function onChange(gapNumTitle) {
      return setAttributes({
        gapNumTitle: gapNumTitle
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Number & Prefix Gap"),
    value: gapNumPrefix,
    onChange: function onChange(gapNumPrefix) {
      return setAttributes({
        gapNumPrefix: gapNumPrefix
      });
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Number & Suffix Gap"),
    value: gapNumSuffix,
    onChange: function onChange(gapNumSuffix) {
      return setAttributes({
        gapNumSuffix: gapNumSuffix
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Margin & Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: marginUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_9__["FONT_SIZE_UNITS"],
    onClick: function onClick(marginUnit) {
      return setAttributes({
        marginUnit: marginUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Margin"),
    top: marginTop,
    right: marginRight,
    bottom: marginBottom,
    left: marginLeft,
    onChange: function onChange(_ref) {
      var top = _ref.top,
          right = _ref.right,
          bottom = _ref.bottom,
          left = _ref.left;
      return setAttributes({
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left
      });
    }
  }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: paddingUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_9__["FONT_SIZE_UNITS"],
    onClick: function onClick(paddingUnit) {
      return setAttributes({
        paddingUnit: paddingUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_dimensions_control__WEBPACK_IMPORTED_MODULE_1__["default"], {
    label: __("Padding"),
    top: paddingTop,
    right: paddingRight,
    bottom: paddingBottom,
    left: paddingLeft,
    onChange: function onChange(_ref2) {
      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes({
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Type")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_9__["BACKGROUND_TYPES"].map(function (_ref3) {
    var value = _ref3.value,
        label = _ref3.label;
    return /*#__PURE__*/React.createElement(Button, {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes({
          backgroundType: value
        });
      }
    }, label);
  }))), backgroundType === "fill" && /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes({
        backgroundColor: backgroundColor
      });
    }
  }), backgroundType === "gradient" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Gradient"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_gradient_color_controller__WEBPACK_IMPORTED_MODULE_3__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes({
        gradientColor: gradientColor
      });
    }
  })), backgroundType === "image" && /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Background Image")
  }, /*#__PURE__*/React.createElement(MediaUpload, {
    onSelect: function onSelect(media) {
      return setAttributes({
        imageURL: media.url,
        imgeID: media.id
      });
    },
    type: "image",
    value: imageID,
    render: function render(_ref4) {
      var open = _ref4.open;
      return !imageURL && /*#__PURE__*/React.createElement(Button, {
        className: "eb-wrapper-upload-button",
        label: __("Upload Image"),
        icon: "format-image",
        onClick: open
      });
    }
  }), imageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_image_avatar_ImageAvater__WEBPACK_IMPORTED_MODULE_4__["default"], {
    imageUrl: imageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes({
        imageURL: null
      });
    }
  }), /*#__PURE__*/React.createElement(BaseControl, {
    label: __("Background Size")
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, _constants__WEBPACK_IMPORTED_MODULE_9__["BACKGROUND_SIZES"].map(function (_ref5) {
    var value = _ref5.value,
        label = _ref5.label;
    return /*#__PURE__*/React.createElement(Button, {
      isPrimary: backgroundSize === value,
      isSecondary: backgroundSize !== value,
      onClick: function onClick() {
        return setAttributes({
          backgroundSize: value
        });
      }
    }, label);
  })))))), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Border"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        borderWidth: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Width"),
    value: borderWidth,
    onChange: function onChange(borderWidth) {
      return setAttributes({
        borderWidth: borderWidth
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: radiusUnit,
    unitTypes: _constants__WEBPACK_IMPORTED_MODULE_9__["LETTER_SPACING_LINE_HEIGHT_UNITS"],
    onClick: function onClick(radiusUnit) {
      return setAttributes({
        radiusUnit: radiusUnit
      });
    }
  }), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        borderRadius: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Border Radius"),
    value: borderRadius,
    onChange: function onChange(borderRadius) {
      return setAttributes({
        borderRadius: borderRadius
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(SelectControl, {
    label: __("Border Style"),
    value: borderStyle,
    options: _constants__WEBPACK_IMPORTED_MODULE_9__["BORDER_STYLES"],
    onChange: function onChange(borderStyle) {
      return setAttributes({
        borderStyle: borderStyle
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes({
        borderColor: borderColor
      });
    }
  })), /*#__PURE__*/React.createElement(PanelBody, {
    title: __("Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement("span", {
    className: shadowType === "normal" ? "blueOnNormal" : "blueOnHover"
  }, /*#__PURE__*/React.createElement(_util_toggle_button__WEBPACK_IMPORTED_MODULE_6__["default"], {
    options: _constants__WEBPACK_IMPORTED_MODULE_9__["SHADOW_HOVER_OPTIONS"],
    onChange: function onChange(value) {
      return setAttributes({
        shadowType: value
      });
    }
  })), shadowType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Shadow Color"),
    color: shadowColor,
    onChange: function onChange(shadowColor) {
      return setAttributes({
        shadowColor: shadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        hOffset: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: hOffset,
    onChange: function onChange(hOffset) {
      return setAttributes({
        hOffset: hOffset
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        vOffset: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: vOffset,
    onChange: function onChange(vOffset) {
      return setAttributes({
        vOffset: vOffset
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        blur: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: blur,
    onChange: function onChange(blur) {
      return setAttributes({
        blur: blur
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        spread: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: spread,
    onChange: function onChange(spread) {
      return setAttributes({
        spread: spread
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Inset"),
    checked: inset,
    onChange: function onChange() {
      return setAttributes({
        inset: !inset
      });
    }
  })), shadowType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_0__["default"], {
    label: __("Hover Shadow Color"),
    color: hoverShadowColor,
    onChange: function onChange(hoverShadowColor) {
      return setAttributes({
        hoverShadowColor: hoverShadowColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        hoverHOffset: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Horizontal Offset"),
    value: hoverHOffset,
    onChange: function onChange(hoverHOffset) {
      return setAttributes({
        hoverHOffset: hoverHOffset
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        hoverVOffset: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Vertical Offset"),
    value: hoverVOffset,
    onChange: function onChange(hoverVOffset) {
      return setAttributes({
        hoverVOffset: hoverVOffset
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        hoverBlur: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Blur"),
    value: hoverBlur,
    onChange: function onChange(hoverBlur) {
      return setAttributes({
        hoverBlur: hoverBlur
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    onReset: function onReset() {
      return setAttributes({
        hoverSpread: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(RangeControl, {
    label: __("Shadow Spread"),
    value: hoverSpread,
    onChange: function onChange(hoverSpread) {
      return setAttributes({
        hoverSpread: hoverSpread
      });
    },
    min: 0,
    max: 20
  })), /*#__PURE__*/React.createElement(ToggleControl, {
    label: __("Inset"),
    checked: hoverInset,
    onChange: function onChange() {
      return setAttributes({
        hoverInset: !hoverInset
      });
    }
  })), /*#__PURE__*/React.createElement(BaseControl, {
    id: "eb-counter-transition-time"
  }, /*#__PURE__*/React.createElement(TextControl, {
    label: __("Transition"),
    value: wrapperTransitionTime,
    type: "number",
    onChange: function onChange(wrapperTransitionTime) {
      return setAttributes({
        wrapperTransitionTime: wrapperTransitionTime
      });
    }
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/components/save.js":
/*!********************************!*\
  !*** ./src/components/save.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/components/constants/typographyPrefixConstants.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */
var RichText = wp.blockEditor.RichText;
/**
 * Internal dependencies
 */



var Save = function Save(props) {
  var attributes = props.attributes;
  console.log("--------save:", props);
  var randomNumber = attributes.randomNumber,
      target = attributes.target,
      duration = attributes.duration,
      counterTitle = attributes.counterTitle,
      counterSuffix = attributes.counterSuffix,
      counterPrefix = attributes.counterPrefix,
      startValue = attributes.startValue,
      isShowSeparator = attributes.isShowSeparator,
      separator = attributes.separator,
      wrapperFlexDirection = attributes.wrapperFlexDirection,
      titleColor = attributes.titleColor,
      numberColor = attributes.numberColor,
      numPrefixColor = attributes.numPrefixColor,
      numSuffixColor = attributes.numSuffixColor,
      TABtitleColor = attributes.TABtitleColor,
      TABnumberColor = attributes.TABnumberColor,
      TABnumPrefixColor = attributes.TABnumPrefixColor,
      TABnumSuffixColor = attributes.TABnumSuffixColor,
      MOBtitleColor = attributes.MOBtitleColor,
      MOBnumberColor = attributes.MOBnumberColor,
      MOBnumPrefixColor = attributes.MOBnumPrefixColor,
      MOBnumSuffixColor = attributes.MOBnumSuffixColor,
      gapNumTitle = attributes.gapNumTitle,
      gapNumPrefix = attributes.gapNumPrefix,
      gapNumSuffix = attributes.gapNumSuffix,
      marginUnit = attributes.marginUnit,
      marginTop = attributes.marginTop,
      marginRight = attributes.marginRight,
      marginBottom = attributes.marginBottom,
      marginLeft = attributes.marginLeft,
      paddingUnit = attributes.paddingUnit,
      paddingTop = attributes.paddingTop,
      paddingRight = attributes.paddingRight,
      paddingBottom = attributes.paddingBottom,
      paddingLeft = attributes.paddingLeft,
      backgroundType = attributes.backgroundType,
      imageURL = attributes.imageURL,
      gradientColor = attributes.gradientColor,
      backgroundSize = attributes.backgroundSize,
      backgroundColor = attributes.backgroundColor,
      borderWidth = attributes.borderWidth,
      borderStyle = attributes.borderStyle,
      borderColor = attributes.borderColor,
      borderRadius = attributes.borderRadius,
      radiusUnit = attributes.radiusUnit,
      shadowColor = attributes.shadowColor,
      hOffset = attributes.hOffset,
      vOffset = attributes.vOffset,
      blur = attributes.blur,
      spread = attributes.spread,
      inset = attributes.inset,
      hoverShadowColor = attributes.hoverShadowColor,
      hoverHOffset = attributes.hoverHOffset,
      hoverVOffset = attributes.hoverVOffset,
      hoverBlur = attributes.hoverBlur,
      hoverSpread = attributes.hoverSpread,
      hoverInset = attributes.hoverInset,
      wrapperTransitionTime = attributes.wrapperTransitionTime; // function to generate typography styles for an element based on it's prefix

  var generateTypographyStyles = function generateTypographyStyles(prefixConstant) {
    var defaultFontSize = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
        fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
        textTransform = attributes["".concat(prefixConstant, "TextTransform")],
        textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
        fontSize = attributes["".concat(prefixConstant, "FontSize")],
        sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
        letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
        letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
        lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
        lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
        TABfontFamily = attributes["TAB".concat(prefixConstant, "FontFamily")],
        TABfontWeight = attributes["TAB".concat(prefixConstant, "FontWeight")],
        TABtextTransform = attributes["TAB".concat(prefixConstant, "TextTransform")],
        TABtextDecoration = attributes["TAB".concat(prefixConstant, "TextDecoration")],
        TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
        TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
        TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
        TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
        TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
        TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
        MOBfontFamily = attributes["MOB".concat(prefixConstant, "FontFamily")],
        MOBfontWeight = attributes["MOB".concat(prefixConstant, "FontWeight")],
        MOBtextTransform = attributes["MOB".concat(prefixConstant, "TextTransform")],
        MOBtextDecoration = attributes["MOB".concat(prefixConstant, "TextDecoration")],
        MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
        MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
        MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
        MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
        MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")],
        MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")];
    return {
      fontFamily: fontFamily ? fontFamily : "inherit",
      // fontSize: defaultFontSize
      // 	? `${attributes[`${prefix}FontSize`] || defaultFontSize}${
      // 			attributes[`${prefix}SizeUnit`]
      // 	  }`
      // 	: attributes[`${prefix}FontSize`]
      // 	? `${attributes[`${prefix}FontSize`]}${attributes[`${prefix}SizeUnit`]}`
      // 	: "inherit",
      fontSize: attributes["".concat(prefixConstant, "FontSize")] ? "".concat(attributes["".concat(prefixConstant, "FontSize")]).concat(attributes["".concat(prefixConstant, "SizeUnit")]) : defaultFontSize ? "".concat(defaultFontSize).concat(attributes["".concat(prefixConstant, "SizeUnit")]) : "inherit",
      fontWeight: attributes["".concat(prefixConstant, "FontWeight")],
      textTransform: attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration: attributes["".concat(prefixConstant, "TextDecoration")],
      letterSpacing: "".concat(attributes["".concat(prefixConstant, "LetterSpacing")]).concat(attributes["".concat(prefixConstant, "LetterSpacingUnit")], " "),
      lineHeight: "".concat(attributes["".concat(prefixConstant, "LineHeight")]).concat(attributes["".concat(prefixConstant, "LineHeightUnit")], " ")
    };
  };

  var titleStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__["title"], 40));

  var numberStyles = _objectSpread(_objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__["number"], 64)), {}, {
    // color: numberColor,
    paddingLeft: "".concat(gapNumPrefix, "px"),
    paddingRight: "".concat(gapNumSuffix, "px")
  });

  var numPrefixStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__["numPrefix"]));

  var numSuffixStyles = _objectSpread({}, generateTypographyStyles(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__["numSuffix"]));

  var wrapperStyles = {// marginTop: `${marginTop || 0}${marginUnit}`,
    // marginBottom: `${marginBottom || 0}${marginUnit}`,
    // marginLeft: `${marginLeft || 0}${marginUnit}`,
    // marginRight: `${marginRight || 0}${marginUnit}`,
    // paddingTop: `${paddingTop || 0}${paddingUnit}`,
    // paddingBottom: `${paddingBottom || 0}${paddingUnit}`,
    // paddingRight: `${paddingRight || 0}${paddingUnit}`,
    // paddingLeft: `${paddingLeft || 0}${paddingUnit}`,
    // gap: `${gapNumTitle}px`,
    // flexDirection: wrapperFlexDirection,
    // backgroundImage:
    // 	backgroundType === "image" && imageURL
    // 		? `url("${imageURL}")`
    // 		: backgroundType === "gradient"
    // 		? gradientColor
    // 		: "none",
    // backgroundSize: backgroundSize,
    // backgroundColor:
    // 	(backgroundType === "fill" && backgroundColor) || "transparent",
    // border: `${borderWidth || 0}px ${borderStyle} ${borderColor || "#000000"}`,
    // borderRadius: `${borderRadius || 0}${radiusUnit}`,
    // boxShadow: `${shadowColor || "#000000"} ${hOffset || 0}px ${
    // 	vOffset || 0
    // }px ${blur || 0}px ${spread || 0}px ${inset ? "inset" : ""}`,
    // transition: wrapperTransitionTime
    // 	? `${wrapperTransitionTime / 1000}s`
    // 	: ".5s",
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t\n\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-".concat(randomNumber, "{\n\t\t\t\t\t\t\n\t\t\t\t\tmargin-top: ").concat(marginTop || 0).concat(marginUnit, ";\n\t\t\t\t\tmargin-bottom: ").concat(marginBottom || 0).concat(marginUnit, ";\n\t\t\t\t\tmargin-left: ").concat(marginLeft || 0).concat(marginUnit, ";\n\t\t\t\t\tmargin-right: ").concat(marginRight || 0).concat(marginUnit, ";\n\t\t\t\t\tpadding-top: ").concat(paddingTop || 0).concat(paddingUnit, ";\n\t\t\t\t\tpadding-bottom: ").concat(paddingBottom || 0).concat(paddingUnit, ";\n\t\t\t\t\tpadding-right: ").concat(paddingRight || 0).concat(paddingUnit, ";\n\t\t\t\t\tpadding-left: ").concat(paddingLeft || 0).concat(paddingUnit, ";\n\t\t\t\t\tgap: ").concat(gapNumTitle, "px;\n\t\t\t\t\tflex-direction: ").concat(wrapperFlexDirection, ";\n\t\t\t\t\tbackground-image:\n\t\t\t\t\t\t").concat(backgroundType === "image" && imageURL ? "url(\"".concat(imageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n\t\t\t\t\tbackground-size: ").concat(backgroundSize, ";\n\t\t\t\t\tbackground-color:\n\t\t\t\t\t\t").concat(backgroundType === "fill" && backgroundColor || "transparent", ";\n\t\t\t\t\tborder: ").concat(borderWidth || 0, "px ").concat(borderStyle, " ").concat(borderColor || "#000000", ";\n\t\t\t\t\tborder-radius: ").concat(borderRadius || 0).concat(radiusUnit, ";\n\t\t\t\t\tbox-shadow: ").concat(shadowColor || "#000000", " ").concat(hOffset || 0, "px ").concat(vOffset || 0, "px ").concat(blur || 0, "px ").concat(spread || 0, "px ").concat(inset ? "inset" : "", ";\n\t\t\t\t\ttransition: ").concat(wrapperTransitionTime ? "".concat(wrapperTransitionTime / 1000, "s") : ".5s", ";\n\t\t\t\t}\n\n\t\t\t\t\n\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-number{\n\t\t\t\t\tcolor : ").concat(numberColor, ";\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-title{\n\t\t\t\t\tcolor : ").concat(titleColor, ";\n\t\t\t\t}\n\t\t\t\n\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-prefix{\n\t\t\t\t\tcolor : ").concat(numPrefixColor, ";\n\t\t\t\t}\n\t\t\t\n\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-suffix{\n\t\t\t\t\tcolor : ").concat(numSuffixColor, ";\n\t\t\t\t}\n\n\n\t\t\t\t@media all and (max-width: 1190px) {\n\t\t\t\t\th2 {\n\t\t\t\t\t\tcolor: blue !important;\n\t\t\t\t\t}\n\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-number{\n\t\t\t\t\t\tcolor : ").concat(TABnumberColor || numberColor, ";\n\t\t\t\t\t}\n\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-title{\n\t\t\t\t\t\tcolor : ").concat(TABtitleColor || titleColor, ";\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-prefix{\n\t\t\t\t\t\tcolor : ").concat(TABnumPrefixColor || numPrefixColor, ";\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-suffix{\n\t\t\t\t\t\tcolor : ").concat(TABnumSuffixColor || numSuffixColor, ";\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t@media all and (max-width: 700px) {\n\t\t\t\t\th2 {\n\t\t\t\t\t\tcolor: red !important;\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-number{\n\t\t\t\t\t\tcolor : ").concat(MOBnumberColor || TABnumberColor || numberColor, ";\n\t\t\t\t\t}\n\t\t\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-title{\n\t\t\t\t\t\tcolor : ").concat(MOBtitleColor || TABtitleColor || titleColor, ";\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-prefix{\n\t\t\t\t\t\tcolor : ").concat(MOBnumPrefixColor || TABnumPrefixColor || numPrefixColor, ";\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.eb-counter-wrapper-").concat(randomNumber, " .eb-counter-suffix{\n\t\t\t\t\t\tcolor : ").concat(MOBnumSuffixColor || TABnumSuffixColor || numSuffixColor, ";\n\t\t\t\t\t}\n\n\t\t\t\t}\n\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "eb-counter-wrapper eb-counter-wrapper-".concat(randomNumber),
    style: wrapperStyles,
    "data-shadowColor": shadowColor || "#00000000",
    "data-hOffset": hOffset || 0,
    "data-vOffset": vOffset || 0,
    "data-blur": blur || 0,
    "data-spread": spread || 0,
    "data-inset": inset ? "inset" : " ",
    "data-hoverShadowColor": hoverShadowColor || "#00000000",
    "data-hoverHOffset": hoverHOffset || 0,
    "data-hoverVOffset": hoverVOffset || 0,
    "data-hoverBlur": hoverBlur || 0,
    "data-hoverSpread": hoverSpread || 0,
    "data-hoverInset": hoverInset ? "inset" : " "
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eb-counter-number"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-prefix",
    style: numPrefixStyles
  }, counterPrefix), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter eb-counter-number",
    "data-duration": duration ? Math.floor(Math.abs(duration)) : 0,
    "data-startValue": startValue ? Math.floor(Math.abs(startValue)) : 0,
    "data-target": target ? Math.floor(Math.abs(target)) : 0,
    "data-separator": separator,
    "data-isShowSeparator": isShowSeparator,
    style: numberStyles
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-suffix",
    style: numSuffixStyles
  }, counterSuffix)), /*#__PURE__*/React.createElement(RichText.Content, {
    tagName: "h3",
    style: titleStyles,
    className: "eb-counter-title",
    value: counterTitle
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/controls/typographyControl/index.js":
/*!*************************************************!*\
  !*** ./src/controls/typographyControl/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../util/icons */ "./util/icons.js");
/* harmony import */ var _util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../util/typography-control/FontPicker */ "./util/typography-control/FontPicker.js");
/* harmony import */ var _util_unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../util/unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var __ = wp.i18n.__;
var _wp$components = wp.components,
    Button = _wp$components.Button,
    SelectControl = _wp$components.SelectControl,
    BaseControl = _wp$components.BaseControl,
    RangeControl = _wp$components.RangeControl,
    Dropdown = _wp$components.Dropdown;




function TypographyControllsDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes,
      typographyAttributes = _ref.typographyAttributes;
  var fontFamily = typographyAttributes.fontFamily,
      fontWeight = typographyAttributes.fontWeight,
      textTransform = typographyAttributes.textTransform,
      textDecoration = typographyAttributes.textDecoration,
      fontSize = typographyAttributes.fontSize,
      sizeUnit = typographyAttributes.sizeUnit,
      letterSpacing = typographyAttributes.letterSpacing,
      letterSpacingUnit = typographyAttributes.letterSpacingUnit,
      lineHeight = typographyAttributes.lineHeight,
      lineHeightUnit = typographyAttributes.lineHeightUnit,
      _typographyAttributes = typographyAttributes.TABfontFamily,
      TABfontFamily = _typographyAttributes === void 0 ? TABfontFamily || fontFamily : _typographyAttributes,
      _typographyAttributes2 = typographyAttributes.TABfontWeight,
      TABfontWeight = _typographyAttributes2 === void 0 ? TABfontWeight || fontWeight : _typographyAttributes2,
      _typographyAttributes3 = typographyAttributes.TABtextTransform,
      TABtextTransform = _typographyAttributes3 === void 0 ? TABtextTransform || textTransform : _typographyAttributes3,
      _typographyAttributes4 = typographyAttributes.TABtextDecoration,
      TABtextDecoration = _typographyAttributes4 === void 0 ? TABtextDecoration || textDecoration : _typographyAttributes4,
      _typographyAttributes5 = typographyAttributes.TABfontSize,
      TABfontSize = _typographyAttributes5 === void 0 ? TABfontSize || fontSize : _typographyAttributes5,
      _typographyAttributes6 = typographyAttributes.TABsizeUnit,
      TABsizeUnit = _typographyAttributes6 === void 0 ? TABsizeUnit || sizeUnit : _typographyAttributes6,
      _typographyAttributes7 = typographyAttributes.TABletterSpacing,
      TABletterSpacing = _typographyAttributes7 === void 0 ? TABletterSpacing || letterSpacing : _typographyAttributes7,
      _typographyAttributes8 = typographyAttributes.TABletterSpacingUnit,
      TABletterSpacingUnit = _typographyAttributes8 === void 0 ? TABletterSpacingUnit || letterSpacingUnit : _typographyAttributes8,
      _typographyAttributes9 = typographyAttributes.TABlineHeight,
      TABlineHeight = _typographyAttributes9 === void 0 ? TABlineHeight || lineHeight : _typographyAttributes9,
      _typographyAttributes10 = typographyAttributes.TABlineHeightUnit,
      TABlineHeightUnit = _typographyAttributes10 === void 0 ? TABlineHeightUnit || lineHeightUnit : _typographyAttributes10,
      _typographyAttributes11 = typographyAttributes.MOBfontFamily,
      MOBfontFamily = _typographyAttributes11 === void 0 ? MOBfontFamily || TABfontFamily || fontFamily : _typographyAttributes11,
      _typographyAttributes12 = typographyAttributes.MOBfontWeight,
      MOBfontWeight = _typographyAttributes12 === void 0 ? MOBfontWeight || TABfontWeight || fontWeight : _typographyAttributes12,
      _typographyAttributes13 = typographyAttributes.MOBtextTransform,
      MOBtextTransform = _typographyAttributes13 === void 0 ? MOBtextTransform || TABtextTransform || textTransform : _typographyAttributes13,
      _typographyAttributes14 = typographyAttributes.MOBtextDecoration,
      MOBtextDecoration = _typographyAttributes14 === void 0 ? MOBtextDecoration || TABtextDecoration || textDecoration : _typographyAttributes14,
      _typographyAttributes15 = typographyAttributes.MOBfontSize,
      MOBfontSize = _typographyAttributes15 === void 0 ? MOBfontSize || TABfontSize || fontSize : _typographyAttributes15,
      _typographyAttributes16 = typographyAttributes.MOBsizeUnit,
      MOBsizeUnit = _typographyAttributes16 === void 0 ? MOBsizeUnit || TABsizeUnit || sizeUnit : _typographyAttributes16,
      _typographyAttributes17 = typographyAttributes.MOBletterSpacing,
      MOBletterSpacing = _typographyAttributes17 === void 0 ? MOBletterSpacing || TABletterSpacing || letterSpacing : _typographyAttributes17,
      _typographyAttributes18 = typographyAttributes.MOBletterSpacingUnit,
      MOBletterSpacingUnit = _typographyAttributes18 === void 0 ? MOBletterSpacingUnit || TABletterSpacingUnit || letterSpacingUnit : _typographyAttributes18,
      _typographyAttributes19 = typographyAttributes.MOBlineHeight,
      MOBlineHeight = _typographyAttributes19 === void 0 ? MOBlineHeight || TABlineHeight || lineHeight : _typographyAttributes19,
      _typographyAttributes20 = typographyAttributes.MOBlineHeightUnit,
      MOBlineHeightUnit = _typographyAttributes20 === void 0 ? MOBlineHeightUnit || TABlineHeightUnit || lineHeightUnit : _typographyAttributes20;
  return /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "desktop" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_util_icons__WEBPACK_IMPORTED_MODULE_0__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(SizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), SizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: fontWeight,
        options: [{
          label: __("100"),
          value: "100"
        }, {
          label: __("200"),
          value: "200"
        }, {
          label: __("300"),
          value: "300"
        }, {
          label: __("400"),
          value: "400"
        }, {
          label: __("500"),
          value: "500"
        }, {
          label: __("600"),
          value: "600"
        }, {
          label: __("700"),
          value: "700"
        }, {
          label: __("800"),
          value: "800"
        }, {
          label: __("900"),
          value: "900"
        }],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: textTransform,
        options: [{
          label: __("None"),
          value: "none"
        }, {
          label: __("Lowercase"),
          value: "lowercase"
        }, {
          label: __("Capitalize"),
          value: "capitalize"
        }, {
          label: __("Uppercase"),
          value: "uppercase"
        }],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: textDecoration,
        options: [{
          label: __("Initial"),
          value: "initial"
        }, {
          label: __("Overline"),
          value: "overline"
        }, {
          label: __("Line Through"),
          value: "line-through"
        }, {
          label: __("Underline"),
          value: "underline"
        }, {
          label: __("Underline Oveline"),
          value: "underline overline"
        }],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      }));
    }
  })), resOption == "tab" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_util_icons__WEBPACK_IMPORTED_MODULE_0__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: TABfontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(SizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), SizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: TABfontWeight,
        options: [{
          label: __("100"),
          value: "100"
        }, {
          label: __("200"),
          value: "200"
        }, {
          label: __("300"),
          value: "300"
        }, {
          label: __("400"),
          value: "400"
        }, {
          label: __("500"),
          value: "500"
        }, {
          label: __("600"),
          value: "600"
        }, {
          label: __("700"),
          value: "700"
        }, {
          label: __("800"),
          value: "800"
        }, {
          label: __("900"),
          value: "900"
        }],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: TABtextTransform,
        options: [{
          label: __("None"),
          value: "none"
        }, {
          label: __("Lowercase"),
          value: "lowercase"
        }, {
          label: __("Capitalize"),
          value: "capitalize"
        }, {
          label: __("Uppercase"),
          value: "uppercase"
        }],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: TABtextDecoration,
        options: [{
          label: __("Initial"),
          value: "initial"
        }, {
          label: __("Overline"),
          value: "overline"
        }, {
          label: __("Line Through"),
          value: "line-through"
        }, {
          label: __("Underline"),
          value: "underline"
        }, {
          label: __("Underline Oveline"),
          value: "underline overline"
        }],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      }));
    }
  })), resOption == "mobile" && /*#__PURE__*/React.createElement(BaseControl, {
    label: __(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/React.createElement(Button, {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_util_icons__WEBPACK_IMPORTED_MODULE_0__["TypographyIcon"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_util_typography_control_FontPicker__WEBPACK_IMPORTED_MODULE_1__["default"], {
        label: __("Font Family"),
        value: MOBfontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "%",
          value: "%"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(SizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), SizeUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Font Weight"),
        value: MOBfontWeight,
        options: [{
          label: __("100"),
          value: "100"
        }, {
          label: __("200"),
          value: "200"
        }, {
          label: __("300"),
          value: "300"
        }, {
          label: __("400"),
          value: "400"
        }, {
          label: __("500"),
          value: "500"
        }, {
          label: __("600"),
          value: "600"
        }, {
          label: __("700"),
          value: "700"
        }, {
          label: __("800"),
          value: "800"
        }, {
          label: __("900"),
          value: "900"
        }],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Transform"),
        value: MOBtextTransform,
        options: [{
          label: __("None"),
          value: "none"
        }, {
          label: __("Lowercase"),
          value: "lowercase"
        }, {
          label: __("Capitalize"),
          value: "capitalize"
        }, {
          label: __("Uppercase"),
          value: "uppercase"
        }],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(SelectControl, {
        label: __("Text Decoration"),
        value: MOBtextDecoration,
        options: [{
          label: __("Initial"),
          value: "initial"
        }, {
          label: __("Overline"),
          value: "overline"
        }, {
          label: __("Line Through"),
          value: "line-through"
        }, {
          label: __("Underline"),
          value: "underline"
        }, {
          label: __("Underline Oveline"),
          value: "underline overline"
        }],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }), /*#__PURE__*/React.createElement(_util_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: [{
          label: "px",
          value: "px"
        }, {
          label: "em",
          value: "em"
        }],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(RangeControl, {
        label: __("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }));
    }
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyControllsDropdown);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Icon; });
function Icon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_1_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_1_)",
    d: "M60.7 61.1H5.3c-2.9 0-5.3-2.4-5.3-5.3V14.2c0-2.9 2.4-5.3 5.3-5.3h55.4c2.9 0 5.3 2.4 5.3 5.3v41.6c0 2.9-2.4 5.3-5.3 5.3zM5.3 11.8c-1.3 0-2.4 1.1-2.4 2.4v41.6c0 1.3 1.1 2.4 2.4 2.4h55.4c1.3 0 2.4-1.1 2.4-2.4V14.2c0-1.3-1.1-2.4-2.4-2.4H5.3z",
    className: "st0"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_2_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_2_)",
    cx: "21.5",
    cy: "16.6",
    r: "1.3",
    className: "st1"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_3_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_3_)",
    cx: "21.5",
    cy: "22.6",
    r: "1.3",
    className: "st2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_4_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_4_)",
    cx: "21.5",
    cy: "28.5",
    r: "1.3",
    className: "st3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_5_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_5_)",
    cx: "21.5",
    cy: "34.5",
    r: "1.3",
    className: "st4"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_6_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_6_)",
    cx: "21.5",
    cy: "40.4",
    r: "1.3",
    className: "st5"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_7_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_7_)",
    cx: "21.5",
    cy: "46.4",
    r: "1.3",
    className: "st6"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_8_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_8_)",
    cx: "21.5",
    cy: "52.3",
    r: "1.3",
    className: "st7"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_9_",
    x1: "-0.125",
    x2: "64.866",
    y1: "16.62",
    y2: "16.62",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_9_)",
    cx: "43.7",
    cy: "16.6",
    r: "1.3",
    className: "st8"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_10_",
    x1: "-0.125",
    x2: "64.866",
    y1: "22.572",
    y2: "22.572",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_10_)",
    cx: "43.7",
    cy: "22.6",
    r: "1.3",
    className: "st9"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_11_",
    x1: "-0.125",
    x2: "64.866",
    y1: "28.525",
    y2: "28.525",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_11_)",
    cx: "43.7",
    cy: "28.5",
    r: "1.3",
    className: "st10"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_12_",
    x1: "-0.125",
    x2: "64.866",
    y1: "34.477",
    y2: "34.477",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_12_)",
    cx: "43.7",
    cy: "34.5",
    r: "1.3",
    className: "st11"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_13_",
    x1: "-0.125",
    x2: "64.866",
    y1: "40.43",
    y2: "40.43",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_13_)",
    cx: "43.7",
    cy: "40.4",
    r: "1.3",
    className: "st12"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_14_",
    x1: "-0.125",
    x2: "64.866",
    y1: "46.382",
    y2: "46.382",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_14_)",
    cx: "43.7",
    cy: "46.4",
    r: "1.3",
    className: "st13"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_15_",
    x1: "-0.125",
    x2: "64.866",
    y1: "52.335",
    y2: "52.335",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("circle", {
    fill: "url(#COUNTER_SVGID_15_)",
    cx: "43.7",
    cy: "52.3",
    r: "1.3",
    className: "st14"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_16_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_16_)",
    d: "M55.9 28.7h-6v-1.8h8v1.7l-4.5 15.9h-2l4.5-15.8z",
    className: "st15"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_17_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_17_)",
    d: "M33.1 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z",
    className: "st16"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "COUNTER_SVGID_18_",
    x1: "-0.125",
    x2: "64.866",
    y1: "35.766",
    y2: "35.766",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#COUNTER_SVGID_18_)",
    d: "M12.5 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z",
    className: "st17"
  }));
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_edit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/edit */ "./src/components/edit.js");
/* harmony import */ var _components_save__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/save */ "./src/components/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_4__);
/**
 * WordPress depencencies
 */
var __ = wp.i18n.__;
var registerBlockType = wp.blocks.registerBlockType;
/**
 * Internal dependencies
 */




 // import example from "./example";


registerBlockType("block/counter-up-block", {
  title: __("Counter Up", "block"),
  description: __("Put spotlight on your statistics using animated Counter-Up for Gutenberg ", "block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_2__["default"],
  keywords: [__("EB counter up", "essential-blocks"), __("counter up", "essential-blocks"), __("counter", "essential-blocks")],
  edit: _components_edit__WEBPACK_IMPORTED_MODULE_0__["default"],
  save: _components_save__WEBPACK_IMPORTED_MODULE_1__["default"] // example: example,

});

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./util/color-control/style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_0__);
var _wp$element = wp.element,
    useState = _wp$element.useState,
    useEffect = _wp$element.useEffect;
var _wp$components = wp.components,
    BaseControl = _wp$components.BaseControl,
    Dropdown = _wp$components.Dropdown,
    Tooltip = _wp$components.Tooltip,
    ColorPicker = _wp$components.ColorPicker;


var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _onChangeComplete = function onChangeComplete(_ref2) {
    var rgb = _ref2.rgb,
        hex = _ref2.hex;
    var color = rgb ? "rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")") : hex;
    onChange(color);
  };

  var colorStyles = {
    padding: 2,
    borderRadius: 0,
    background: "white",
    border: "1px solid #ebebeb"
  };
  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(Dropdown, {
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(Tooltip, {
        text: color || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: color && colorStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          height: 16,
          width: 16,
          borderRadius: "0%",
          boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
          backgroundColor: color
        },
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": color || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(ColorPicker, {
        color: color,
        onChangeComplete: function onChangeComplete(color) {
          return _onChangeComplete(color);
        }
      });
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control/index.js":
/*!******************************************!*\
  !*** ./util/dimensions-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/dimensions-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var DimensionsControl = /*#__PURE__*/function (_Component) {
  _inherits(DimensionsControl, _Component);

  var _super = _createSuper(DimensionsControl);

  function DimensionsControl() {
    var _this;

    _classCallCheck(this, DimensionsControl);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));

    _defineProperty(_assertThisInitialized(_this), "state", {
      top: _this.props.top,
      right: _this.props.right,
      bottom: _this.props.bottom,
      left: _this.props.left,
      isLinked: false
    });

    _defineProperty(_assertThisInitialized(_this), "onButtonClick", function () {
      return _this.setState({
        isLinked: !_this.state.isLinked
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onInputChange", function (event) {
      var _this$state = _this.state,
          top = _this$state.top,
          right = _this$state.right,
          bottom = _this$state.bottom,
          left = _this$state.left,
          isLinked = _this$state.isLinked;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      if (isLinked) {
        top = right = bottom = left = value;

        _this.setState({
          top: top,
          right: right,
          bottom: bottom,
          left: left
        }, function () {
          var _this$state2 = _this.state,
              top = _this$state2.top,
              right = _this$state2.right,
              bottom = _this$state2.bottom,
              left = _this$state2.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      } else {
        _this.setState(_defineProperty({}, name, value), function () {
          var _this$state3 = _this.state,
              top = _this$state3.top,
              right = _this$state3.right,
              bottom = _this$state3.bottom,
              left = _this$state3.left;

          _this.props.onChange({
            top: top,
            right: right,
            bottom: bottom,
            left: left
          });
        });
      }
    });

    return _this;
  }

  _createClass(DimensionsControl, [{
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          top = _this$state4.top,
          right = _this$state4.right,
          bottom = _this$state4.bottom,
          left = _this$state4.left,
          isLinked = _this$state4.isLinked;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "dimention-label"
      }, this.props.label), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-container"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper-group"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "top",
        value: top,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Top")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "right",
        value: right,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Right")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "bottom",
        value: bottom,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Bottom")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "input-wrapper"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "number",
        name: "left",
        value: left,
        onChange: this.onInputChange
      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", {
        className: "dimentions-input-label"
      }, "Left"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
        onClick: this.onButtonClick
      })));
    }
  }]);

  return DimensionsControl;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

DimensionsControl.propTypes = {
  label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  top: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  right: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  bottom: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  left: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (DimensionsControl);

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPES, RADIAL_TYPES, FOCUS_COLOR */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPES", function() { return GRADIENT_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FOCUS_COLOR", function() { return FOCUS_COLOR; });
var GRADIENT_TYPES = [{
  label: "Linear",
  value: "linear"
}, {
  label: "Radial",
  value: "radial"
}];
var RADIAL_TYPES = [{
  label: "Ellipse",
  value: "ellipse"
}, {
  label: "Circle",
  value: "circle"
}];
var FOCUS_COLOR = "#007cba";

/***/ }),

/***/ "./util/gradient-color-controller/helpers.js":
/*!***************************************************!*\
  !*** ./util/gradient-color-controller/helpers.js ***!
  \***************************************************/
/*! exports provided: parseGradientColor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseGradientColor", function() { return parseGradientColor; });
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// parseGradientColor function parses the gradientColor Strings
var parseGradientColor = function parseGradientColor(_gradientColor) {
  console.log({
    _gradientColor: _gradientColor
  });
  var gradientColor = _gradientColor || "linear-gradient(45deg,#8200ff,#ff0071)";
  var angle = 45,
      color1Position = 0,
      color2Position = 100,
      radialShape,
      radialX = 50,
      radialY = 50;

  var _gradientColor$match = gradientColor.match(/\#[a-f\d]{6}|rgba?\([\d\,\.]{3,16}\)/gi),
      _gradientColor$match2 = _slicedToArray(_gradientColor$match, 2),
      color1 = _gradientColor$match2[0],
      color2 = _gradientColor$match2[1];

  var _gradientColor$match3 = gradientColor.match(/\w{6}(?=-)/i),
      _gradientColor$match4 = _slicedToArray(_gradientColor$match3, 1),
      gradientType = _gradientColor$match4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];
    var colorsPositions = gradientColor.match(/\d{1,3}(?=\%)/gi) || [0, 100];
    color1Position = colorsPositions[0];
    color2Position = colorsPositions[1];
  } else {
    radialShape = gradientColor.match(/\w+(?= at)/i)[0];
    radialX = gradientColor.match(/(?<=at )\d{1,3}/i)[0];
    radialY = gradientColor.match(/(?<=% )\d{1,3}/i)[0];
    color1Position = gradientColor.match(/\d{1,3}(?=% ,)/gi)[0];
    color2Position = gradientColor.match(/\d{1,3}(?=%\))/gi)[0];
  }

  return {
    gradientType: gradientType,
    angle: parseInt(angle),
    color1: color1,
    color2: color2,
    color1Position: parseInt(color1Position),
    color2Position: parseInt(color2Position),
    radialShape: radialShape,
    radialX: parseInt(radialX),
    radialY: parseInt(radialY)
  };
};

/***/ }),

/***/ "./util/gradient-color-controller/index.js":
/*!*************************************************!*\
  !*** ./util/gradient-color-controller/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers */ "./util/gradient-color-controller/helpers.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    RangeControl = _wp$components.RangeControl,
    BaseControl = _wp$components.BaseControl;
/**
 * Internal dependencies
 */








var GradientColorControl = function GradientColorControl(_ref) {
  var gradientColor = _ref.gradientColor,
      onChange = _ref.onChange;

  var _parseGradientColor = Object(_helpers__WEBPACK_IMPORTED_MODULE_5__["parseGradientColor"])(gradientColor),
      bgGradientType = _parseGradientColor.gradientType,
      firstColor = _parseGradientColor.color1,
      grColorOnePosition = _parseGradientColor.color1Position,
      secondColor = _parseGradientColor.color2,
      grColorTwoPosition = _parseGradientColor.color2Position,
      gradientAngle = _parseGradientColor.angle,
      grRadialShape = _parseGradientColor.radialShape,
      grRadialX = _parseGradientColor.radialX,
      grRadialY = _parseGradientColor.radialY;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(bgGradientType),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(firstColor || "transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(grColorOnePosition || 0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(secondColor || "transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(grColorTwoPosition || 100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(gradientAngle || 0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(grRadialShape || "ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(grRadialX || 50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(grRadialY || 50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(gradientType === "linear" ? getLinearGradient() : getRadialGradient());
  }, [gradientType, colorOne, colorOnePosition, colorTwo, colorTwoPosition, angle, radialShape, radialX, radialY]);

  var getColorString = function getColorString() {
    return "".concat(colorOne, " ").concat(colorOnePosition, "% , ").concat(colorTwo, " ").concat(colorTwoPosition, "%");
  };

  var getRadialGradient = function getRadialGradient() {
    return "radial-gradient(".concat(radialShape, " at ").concat(radialX, "% ").concat(radialY, "%, ").concat(getColorString(), ")");
  };

  var getLinearGradient = function getLinearGradient() {
    return "linear-gradient(".concat(angle, "deg, ").concat(getColorString(), ")");
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
    label: __("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPES"],
    defaultSelect: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["GRADIENT_TYPES"][1],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    },
    focusColor: _constants__WEBPACK_IMPORTED_MODULE_4__["FOCUS_COLOR"]
  })), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(BaseControl, {
    label: __("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_3__["default"], {
    options: _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"],
    defaultSelect: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_4__["RADIAL_TYPES"][1],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    },
    focusColor: _constants__WEBPACK_IMPORTED_MODULE_4__["FOCUS_COLOR"]
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("First Color"),
    color: colorOne,
    onChange: function onChange(colorOne) {
      return setColorOne(colorOne);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: __("Second Color"),
    color: colorTwo,
    onChange: function onChange(colorTwo) {
      return setColorTwo(colorTwo);
    }
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(RangeControl, {
    label: __("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
};

GradientColorControl.propTypes = {
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired,
  colorOne: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  colorTwo: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
  angle: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.number
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/icons.js":
/*!***********************!*\
  !*** ./util/icons.js ***!
  \***********************/
/*! exports provided: AccordionIcon, ButtonIcon, CountdownIcon, CallToActionIcon, FlipboxIcon, InfoboxIcon, CounterIcon, PricingTableIcon, ProgressbarIcon, InteractivePromoIcon, SocialIcon, TeamMembersIcon, TestimonialIcon, ImageComparisonIcon, TestIcon, WrapperIcon, InstagramIcon, ImageGalleryIcon, HeadingIcon, SliderIcon, TypingTextIcon, InstagramOriginalIcon, SaveIcon, ParallaxSliderIcon, CategoryIcon, ToggleContentIcon, TypographyIcon, UserIcon, LeftAlignIcon, RightAlignIcon, CenterAlignIcon, JustifyAlignIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionIcon", function() { return AccordionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonIcon", function() { return ButtonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CountdownIcon", function() { return CountdownIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CallToActionIcon", function() { return CallToActionIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlipboxIcon", function() { return FlipboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoboxIcon", function() { return InfoboxIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterIcon", function() { return CounterIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingTableIcon", function() { return PricingTableIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressbarIcon", function() { return ProgressbarIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InteractivePromoIcon", function() { return InteractivePromoIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return SocialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeamMembersIcon", function() { return TeamMembersIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialIcon", function() { return TestimonialIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageComparisonIcon", function() { return ImageComparisonIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestIcon", function() { return TestIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapperIcon", function() { return WrapperIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramIcon", function() { return InstagramIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageGalleryIcon", function() { return ImageGalleryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingIcon", function() { return HeadingIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderIcon", function() { return SliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypingTextIcon", function() { return TypingTextIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstagramOriginalIcon", function() { return InstagramOriginalIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveIcon", function() { return SaveIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParallaxSliderIcon", function() { return ParallaxSliderIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryIcon", function() { return CategoryIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleContentIcon", function() { return ToggleContentIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TypographyIcon", function() { return TypographyIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserIcon", function() { return UserIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeftAlignIcon", function() { return LeftAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightAlignIcon", function() { return RightAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CenterAlignIcon", function() { return CenterAlignIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JustifyAlignIcon", function() { return JustifyAlignIcon; });
var AccordionIcon = function AccordionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-8.333%",
    x2: "50%",
    y2: "108.44%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#6DC7FF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#E6ABFF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-2"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-icon-accordion"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C91.9749264,0 59.4418701,14.8956537 36.1835498,38.8488312 L203.514459,38.8488312 L203.514459,119.749264 L0.277056277,119.749264 C0.103064935,122.478823 0,125.227221 0,128 C0,130.065732 0.0664935065,132.11484 0.164017316,134.15619 L203.514459,134.15619 L203.514459,215.056623 L34.1732294,215.056623 C57.5468052,240.239931 90.9309784,256 128,256 C198.692571,256 256,198.692571 256,128 C256,57.3074286 198.692571,0 128,0 Z",
    id: "Path",
    fill: "url(#linearGradient-1)"
  }), /*#__PURE__*/React.createElement("polygon", {
    id: "Path",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    points: "186.891082 74.2621645 171.979913 74.2621645 171.979913 59.3509957 160.797922 59.3509957 160.797922 74.2621645 145.886753 74.2621645 145.886753 85.4441558 160.797922 85.4441558 160.797922 100.355325 171.979913 100.355325 171.979913 85.4441558 186.891082 85.4441558"
  }), /*#__PURE__*/React.createElement("rect", {
    id: "Rectangle",
    fill: "url(#linearGradient-2)",
    fillRule: "nonzero",
    x: "145.887",
    y: "169.015",
    width: "41.004",
    height: "11.183"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,67.662684 L15.0929177,67.662684 C10.9747532,75.3537662 7.62015584,83.5147359 5.12775758,92.0436364 L128.155152,92.0436364 L128.155152,67.662684 Z",
    id: "Path",
    fill: "#E5E5E5"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M128.155152,162.415931 L4.68668398,162.415931 C7.05939394,170.933749 10.2887619,179.09361 14.2805887,186.796883 L128.155152,186.796883 L128.155152,162.415931 Z",
    id: "Path",
    fill: "#E5E5E5"
  }))));
};
var ButtonIcon = function ButtonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "156",
    viewBox: "0 0 256 156",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-button",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M15.5151515,0 C6.98484752,0 0,6.98484752 0,15.5151515 L0,124.121212 C0,132.651516 6.98484752,139.636364 15.5151515,139.636364 C15.5151515,141.772726 17.2575767,143.515152 19.3939394,143.515152 C21.5303021,143.515152 23.2727273,141.772726 23.2727273,139.636364 L31.030303,139.636364 C31.030303,141.772726 32.7727282,143.515152 34.9090909,143.515152 C37.0454536,143.515152 38.7878788,141.772726 38.7878788,139.636364 L46.5454545,139.636364 C46.5454545,141.772726 48.2878798,143.515152 50.4242424,143.515152 C52.5606051,143.515152 54.3030303,141.772726 54.3030303,139.636364 L62.0606061,139.636364 C62.0606061,141.772726 63.8030313,143.515152 65.9393939,143.515152 C68.0757566,143.515152 69.8181818,141.772726 69.8181818,139.636364 L77.5757576,139.636364 C77.5757576,141.772726 79.3181828,143.515152 81.4545455,143.515152 C83.5909081,143.515152 85.3333333,141.772726 85.3333333,139.636364 L93.0909091,139.636364 C93.0909091,141.772726 94.8333343,143.515152 96.969697,143.515152 C99.1060596,143.515152 100.848485,141.772726 100.848485,139.636364 L108.606061,139.636364 C108.606061,141.772726 110.348486,143.515152 112.484848,143.515152 C114.621211,143.515152 116.363636,141.772726 116.363636,139.636364 L124.121212,139.636364 C124.121212,141.772726 125.863637,143.515152 128,143.515152 C130.136363,143.515152 131.878788,141.772726 131.878788,139.636364 L139.636364,139.636364 C139.636364,141.772726 141.378789,143.515152 143.515152,143.515152 C145.651514,143.515152 147.393939,141.772726 147.393939,139.636364 L155.151515,139.636364 C155.151515,141.772726 156.89394,143.515152 159.030303,143.515152 C161.166666,143.515152 162.909091,141.772726 162.909091,139.636364 L170.666667,139.636364 C170.666667,141.772726 172.409092,143.515152 174.545455,143.515152 C176.681817,143.515152 178.424242,141.772726 178.424242,139.636364 L186.181818,139.636364 C186.181818,141.772726 187.924243,143.515152 190.060606,143.515152 C192.196969,143.515152 193.939394,141.772726 193.939394,139.636364 L201.69697,139.636364 C201.69697,141.772726 203.439395,143.515152 205.575758,143.515152 C207.71212,143.515152 209.454545,141.772726 209.454545,139.636364 L217.212121,139.636364 C217.212121,141.772726 218.954546,143.515152 221.090909,143.515152 C223.227272,143.515152 224.969697,141.772726 224.969697,139.636364 L232.727273,139.636364 C232.727273,141.772726 234.469698,143.515152 236.606061,143.515152 C238.742423,143.515152 240.484848,141.772726 240.484848,139.636364 C249.015152,139.636364 256,132.651516 256,124.121212 L256,15.5151515 C256,6.98484752 249.015152,0 240.484848,0 L15.5151515,0 Z M15.5151515,7.75757576 L240.484848,7.75757576 C244.818184,7.75757576 248.242424,11.1818201 248.242424,15.5151515 L248.242424,124.121212 C248.242424,128.454547 244.818184,131.878788 240.484848,131.878788 L15.5151515,131.878788 C11.1818201,131.878788 7.75757576,128.454547 7.75757576,124.121212 L7.75757576,15.5151515 C7.75757576,11.1818201 11.1818201,7.75757576 15.5151515,7.75757576 Z M42.6666667,19.3939394 C40.530304,19.3939394 38.7878788,21.1363646 38.7878788,23.2727273 C38.7878788,25.4090899 40.530304,27.1515152 42.6666667,27.1515152 C44.8030293,27.1515152 46.5454545,25.4090899 46.5454545,23.2727273 C46.5454545,21.1363646 44.8030293,19.3939394 42.6666667,19.3939394 Z M58.1818182,19.3939394 C56.0454555,19.3939394 54.3030303,21.1363646 54.3030303,23.2727273 C54.3030303,25.4090899 56.0454555,27.1515152 58.1818182,27.1515152 C60.3181808,27.1515152 62.0606061,25.4090899 62.0606061,23.2727273 C62.0606061,21.1363646 60.3181808,19.3939394 58.1818182,19.3939394 Z M73.6969697,19.3939394 C71.560607,19.3939394 69.8181818,21.1363646 69.8181818,23.2727273 C69.8181818,25.4090899 71.560607,27.1515152 73.6969697,27.1515152 C75.8333324,27.1515152 77.5757576,25.4090899 77.5757576,23.2727273 C77.5757576,21.1363646 75.8333324,19.3939394 73.6969697,19.3939394 Z M89.2121212,19.3939394 C87.0757585,19.3939394 85.3333333,21.1363646 85.3333333,23.2727273 C85.3333333,25.4090899 87.0757585,27.1515152 89.2121212,27.1515152 C91.3484839,27.1515152 93.0909091,25.4090899 93.0909091,23.2727273 C93.0909091,21.1363646 91.3484839,19.3939394 89.2121212,19.3939394 Z M104.727273,19.3939394 C102.59091,19.3939394 100.848485,21.1363646 100.848485,23.2727273 C100.848485,25.4090899 102.59091,27.1515152 104.727273,27.1515152 C106.863635,27.1515152 108.606061,25.4090899 108.606061,23.2727273 C108.606061,21.1363646 106.863635,19.3939394 104.727273,19.3939394 Z M120.242424,19.3939394 C118.106062,19.3939394 116.363636,21.1363646 116.363636,23.2727273 C116.363636,25.4090899 118.106062,27.1515152 120.242424,27.1515152 C122.378787,27.1515152 124.121212,25.4090899 124.121212,23.2727273 C124.121212,21.1363646 122.378787,19.3939394 120.242424,19.3939394 Z M135.757576,19.3939394 C133.621213,19.3939394 131.878788,21.1363646 131.878788,23.2727273 C131.878788,25.4090899 133.621213,27.1515152 135.757576,27.1515152 C137.893938,27.1515152 139.636364,25.4090899 139.636364,23.2727273 C139.636364,21.1363646 137.893938,19.3939394 135.757576,19.3939394 Z M151.272727,19.3939394 C149.136365,19.3939394 147.393939,21.1363646 147.393939,23.2727273 C147.393939,25.4090899 149.136365,27.1515152 151.272727,27.1515152 C153.40909,27.1515152 155.151515,25.4090899 155.151515,23.2727273 C155.151515,21.1363646 153.40909,19.3939394 151.272727,19.3939394 Z M166.787879,19.3939394 C164.651516,19.3939394 162.909091,21.1363646 162.909091,23.2727273 C162.909091,25.4090899 164.651516,27.1515152 166.787879,27.1515152 C168.924241,27.1515152 170.666667,25.4090899 170.666667,23.2727273 C170.666667,21.1363646 168.924241,19.3939394 166.787879,19.3939394 Z M182.30303,19.3939394 C180.166668,19.3939394 178.424242,21.1363646 178.424242,23.2727273 C178.424242,25.4090899 180.166668,27.1515152 182.30303,27.1515152 C184.439393,27.1515152 186.181818,25.4090899 186.181818,23.2727273 C186.181818,21.1363646 184.439393,19.3939394 182.30303,19.3939394 Z M197.818182,19.3939394 C195.681819,19.3939394 193.939394,21.1363646 193.939394,23.2727273 C193.939394,25.4090899 195.681819,27.1515152 197.818182,27.1515152 C199.954544,27.1515152 201.69697,25.4090899 201.69697,23.2727273 C201.69697,21.1363646 199.954544,19.3939394 197.818182,19.3939394 Z M213.333333,19.3939394 C211.196971,19.3939394 209.454545,21.1363646 209.454545,23.2727273 C209.454545,25.4090899 211.196971,27.1515152 213.333333,27.1515152 C215.469696,27.1515152 217.212121,25.4090899 217.212121,23.2727273 C217.212121,21.1363646 215.469696,19.3939394 213.333333,19.3939394 Z M170.30303,55.4090899 C162.106062,55.4090899 156.818184,60.9242415 156.818184,69.8181818 C156.818184,78.7121222 162.045456,84.2272737 170.30303,84.2272737 C178.515153,84.2272737 183.757576,78.7121222 183.757576,69.8181818 C183.757576,60.9242415 178.515153,55.4090899 170.30303,55.4090899 Z M41.2727273,56.1515171 L41.2727273,83.4848504 L54.4090919,83.4848504 C60.2575748,83.4848504 63.9393939,80.3939413 63.9393939,75.6060625 C63.9393939,72.1212121 61.1818201,69.3333333 57.6060625,69.1515152 L57.6060625,68.7878788 C60.499999,68.3939413 62.6969716,65.9090928 62.6969716,62.969697 C62.6969716,58.7272727 59.469696,56.1515171 54.0151505,56.1515171 L41.2727273,56.1515171 Z M70.8636354,56.1515171 L70.8636354,74.0606061 C70.8636354,80.1818182 75.5454565,84.2272737 82.6515161,84.2272737 C89.7424252,84.2272737 94.4090919,80.1818182 94.4090919,74.0606061 L94.4090919,56.1515171 L87.4545455,56.1515171 L87.4545455,73.3181828 C87.4545455,76.499999 85.7272747,78.3636364 82.6515161,78.3636364 C79.560607,78.3636364 77.8181818,76.4848485 77.8181818,73.3181828 L77.8181818,56.1515171 L70.8636354,56.1515171 Z M190.848485,56.1515171 L190.848485,83.4848504 L197.439395,83.4848504 L197.439395,67.9545445 L197.803031,67.9545445 L209.212121,83.4848504 L214.727273,83.4848504 L214.727273,56.1515171 L208.136363,56.1515171 L208.136363,71.5303021 L207.772726,71.5303021 L196.393941,56.1515171 L190.848485,56.1515171 Z M101.318183,56.1666676 L101.318183,61.7424252 L109.196971,61.7424252 L109.196971,83.4848504 L116.121212,83.4848504 L116.121212,61.7424252 L124.015151,61.7424252 L124.015151,56.1666676 L101.318183,56.1666676 Z M129.40909,56.1666676 L129.40909,61.7424252 L137.287878,61.7424252 L137.287878,83.4848504 L144.227274,83.4848504 L144.227274,61.7424252 L152.121212,61.7424252 L152.121212,56.1666676 L129.40909,56.1666676 Z M48.2272737,61.0454536 L52.1666676,61.0454536 C54.530304,61.0454536 55.9242434,62.2272737 55.9242434,64.1818182 C55.9242434,66.1060616 54.439393,67.2878778 51.8939384,67.2878778 L48.2272737,67.2878778 L48.2272737,61.0454536 Z M170.30303,61.1666657 C174.136363,61.1666657 176.681817,64.5454545 176.681817,69.8181818 C176.681817,75.0909091 174.151517,78.4696979 170.30303,78.4696979 C166.424242,78.4696979 163.893938,75.0909091 163.893938,69.8181818 C163.893938,64.5454545 166.454547,61.1666657 170.30303,61.1666657 Z M48.2272737,71.5151515 L52.3939413,71.5151515 C55.2727273,71.5151515 56.8787898,72.7727282 56.8787898,75.0000019 C56.8787898,77.3181828 55.3030322,78.5757595 52.4242424,78.5757595 L48.2272737,78.5757595 L48.2272737,71.5151515 Z M42.6666667,112.484848 C40.530304,112.484848 38.7878788,114.227274 38.7878788,116.363636 C38.7878788,118.499999 40.530304,120.242424 42.6666667,120.242424 C44.8030293,120.242424 46.5454545,118.499999 46.5454545,116.363636 C46.5454545,114.227274 44.8030293,112.484848 42.6666667,112.484848 Z M58.1818182,112.484848 C56.0454555,112.484848 54.3030303,114.227274 54.3030303,116.363636 C54.3030303,118.499999 56.0454555,120.242424 58.1818182,120.242424 C60.3181808,120.242424 62.0606061,118.499999 62.0606061,116.363636 C62.0606061,114.227274 60.3181808,112.484848 58.1818182,112.484848 Z M73.6969697,112.484848 C71.560607,112.484848 69.8181818,114.227274 69.8181818,116.363636 C69.8181818,118.499999 71.560607,120.242424 73.6969697,120.242424 C75.8333324,120.242424 77.5757576,118.499999 77.5757576,116.363636 C77.5757576,114.227274 75.8333324,112.484848 73.6969697,112.484848 Z M89.2121212,112.484848 C87.0757585,112.484848 85.3333333,114.227274 85.3333333,116.363636 C85.3333333,118.499999 87.0757585,120.242424 89.2121212,120.242424 C91.3484839,120.242424 93.0909091,118.499999 93.0909091,116.363636 C93.0909091,114.227274 91.3484839,112.484848 89.2121212,112.484848 Z M104.727273,112.484848 C102.59091,112.484848 100.848485,114.227274 100.848485,116.363636 C100.848485,118.499999 102.59091,120.242424 104.727273,120.242424 C106.863635,120.242424 108.606061,118.499999 108.606061,116.363636 C108.606061,114.227274 106.863635,112.484848 104.727273,112.484848 Z M120.242424,112.484848 C118.106062,112.484848 116.363636,114.227274 116.363636,116.363636 C116.363636,118.499999 118.106062,120.242424 120.242424,120.242424 C122.378787,120.242424 124.121212,118.499999 124.121212,116.363636 C124.121212,114.227274 122.378787,112.484848 120.242424,112.484848 Z M135.757576,112.484848 C133.621213,112.484848 131.878788,114.227274 131.878788,116.363636 C131.878788,118.499999 133.621213,120.242424 135.757576,120.242424 C137.893938,120.242424 139.636364,118.499999 139.636364,116.363636 C139.636364,114.227274 137.893938,112.484848 135.757576,112.484848 Z M151.272727,112.484848 C149.136365,112.484848 147.393939,114.227274 147.393939,116.363636 C147.393939,118.499999 149.136365,120.242424 151.272727,120.242424 C153.40909,120.242424 155.151515,118.499999 155.151515,116.363636 C155.151515,114.227274 153.40909,112.484848 151.272727,112.484848 Z M166.787879,112.484848 C164.651516,112.484848 162.909091,114.227274 162.909091,116.363636 C162.909091,118.499999 164.651516,120.242424 166.787879,120.242424 C168.924241,120.242424 170.666667,118.499999 170.666667,116.363636 C170.666667,114.227274 168.924241,112.484848 166.787879,112.484848 Z M182.30303,112.484848 C180.166668,112.484848 178.424242,114.227274 178.424242,116.363636 C178.424242,118.499999 180.166668,120.242424 182.30303,120.242424 C184.439393,120.242424 186.181818,118.499999 186.181818,116.363636 C186.181818,114.227274 184.439393,112.484848 182.30303,112.484848 Z M197.818182,112.484848 C195.681819,112.484848 193.939394,114.227274 193.939394,116.363636 C193.939394,118.499999 195.681819,120.242424 197.818182,120.242424 C199.954544,120.242424 201.69697,118.499999 201.69697,116.363636 C201.69697,114.227274 199.954544,112.484848 197.818182,112.484848 Z M213.333333,112.484848 C211.196971,112.484848 209.454545,114.227274 209.454545,116.363636 C209.454545,118.499999 211.196971,120.242424 213.333333,120.242424 C215.469696,120.242424 217.212121,118.499999 217.212121,116.363636 C217.212121,114.227274 215.469696,112.484848 213.333333,112.484848 Z M27.1515152,147.393939 C25.0151525,147.393939 23.2727273,149.136365 23.2727273,151.272727 C23.2727273,153.40909 25.0151525,155.151515 27.1515152,155.151515 C29.2878778,155.151515 31.030303,153.40909 31.030303,151.272727 C31.030303,149.136365 29.2878778,147.393939 27.1515152,147.393939 Z M42.6666667,147.393939 C40.530304,147.393939 38.7878788,149.136365 38.7878788,151.272727 C38.7878788,153.40909 40.530304,155.151515 42.6666667,155.151515 C44.8030293,155.151515 46.5454545,153.40909 46.5454545,151.272727 C46.5454545,149.136365 44.8030293,147.393939 42.6666667,147.393939 Z M58.1818182,147.393939 C56.0454555,147.393939 54.3030303,149.136365 54.3030303,151.272727 C54.3030303,153.40909 56.0454555,155.151515 58.1818182,155.151515 C60.3181808,155.151515 62.0606061,153.40909 62.0606061,151.272727 C62.0606061,149.136365 60.3181808,147.393939 58.1818182,147.393939 Z M73.6969697,147.393939 C71.560607,147.393939 69.8181818,149.136365 69.8181818,151.272727 C69.8181818,153.40909 71.560607,155.151515 73.6969697,155.151515 C75.8333324,155.151515 77.5757576,153.40909 77.5757576,151.272727 C77.5757576,149.136365 75.8333324,147.393939 73.6969697,147.393939 Z M89.2121212,147.393939 C87.0757585,147.393939 85.3333333,149.136365 85.3333333,151.272727 C85.3333333,153.40909 87.0757585,155.151515 89.2121212,155.151515 C91.3484839,155.151515 93.0909091,153.40909 93.0909091,151.272727 C93.0909091,149.136365 91.3484839,147.393939 89.2121212,147.393939 Z M104.727273,147.393939 C102.59091,147.393939 100.848485,149.136365 100.848485,151.272727 C100.848485,153.40909 102.59091,155.151515 104.727273,155.151515 C106.863635,155.151515 108.606061,153.40909 108.606061,151.272727 C108.606061,149.136365 106.863635,147.393939 104.727273,147.393939 Z M120.242424,147.393939 C118.106062,147.393939 116.363636,149.136365 116.363636,151.272727 C116.363636,153.40909 118.106062,155.151515 120.242424,155.151515 C122.378787,155.151515 124.121212,153.40909 124.121212,151.272727 C124.121212,149.136365 122.378787,147.393939 120.242424,147.393939 Z M135.757576,147.393939 C133.621213,147.393939 131.878788,149.136365 131.878788,151.272727 C131.878788,153.40909 133.621213,155.151515 135.757576,155.151515 C137.893938,155.151515 139.636364,153.40909 139.636364,151.272727 C139.636364,149.136365 137.893938,147.393939 135.757576,147.393939 Z M151.272727,147.393939 C149.136365,147.393939 147.393939,149.136365 147.393939,151.272727 C147.393939,153.40909 149.136365,155.151515 151.272727,155.151515 C153.40909,155.151515 155.151515,153.40909 155.151515,151.272727 C155.151515,149.136365 153.40909,147.393939 151.272727,147.393939 Z M166.787879,147.393939 C164.651516,147.393939 162.909091,149.136365 162.909091,151.272727 C162.909091,153.40909 164.651516,155.151515 166.787879,155.151515 C168.924241,155.151515 170.666667,153.40909 170.666667,151.272727 C170.666667,149.136365 168.924241,147.393939 166.787879,147.393939 Z M182.30303,147.393939 C180.166668,147.393939 178.424242,149.136365 178.424242,151.272727 C178.424242,153.40909 180.166668,155.151515 182.30303,155.151515 C184.439393,155.151515 186.181818,153.40909 186.181818,151.272727 C186.181818,149.136365 184.439393,147.393939 182.30303,147.393939 Z M197.818182,147.393939 C195.681819,147.393939 193.939394,149.136365 193.939394,151.272727 C193.939394,153.40909 195.681819,155.151515 197.818182,155.151515 C199.954544,155.151515 201.69697,153.40909 201.69697,151.272727 C201.69697,149.136365 199.954544,147.393939 197.818182,147.393939 Z M213.333333,147.393939 C211.196971,147.393939 209.454545,149.136365 209.454545,151.272727 C209.454545,153.40909 211.196971,155.151515 213.333333,155.151515 C215.469696,155.151515 217.212121,153.40909 217.212121,151.272727 C217.212121,149.136365 215.469696,147.393939 213.333333,147.393939 Z M228.848485,147.393939 C226.712122,147.393939 224.969697,149.136365 224.969697,151.272727 C224.969697,153.40909 226.712122,155.151515 228.848485,155.151515 C230.984848,155.151515 232.727273,153.40909 232.727273,151.272727 C232.727273,149.136365 230.984848,147.393939 228.848485,147.393939 Z",
    id: "Shape"
  }))));
};
var CountdownIcon = function CountdownIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-countdown",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "33",
    x2: "30",
    y2: "38.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "36",
    r: "4",
    fill: "url(#SVGID_1__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "5.5",
    x2: "30",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M30,18c-9.925,0-18,8.075-18,18s8.075,18,18,18s18-8.075,18-18S39.925,18,30,18z M45.949,37 c-0.228,3.658-1.683,6.98-3.968,9.567l-1.375-1.375l-1.414,1.414l1.375,1.375c-2.587,2.285-5.91,3.74-9.568,3.968V50h-2v1.949 c-3.658-0.228-6.981-1.683-9.568-3.968l1.375-1.375l-1.414-1.414l-1.375,1.375c-2.284-2.587-3.74-5.91-3.968-9.567H16v-2h-1.949 c0.228-3.658,1.683-6.98,3.968-9.567l1.375,1.375l1.414-1.414l-1.375-1.375c2.587-2.285,5.91-3.74,9.568-3.968V22h2v-1.949 c3.658,0.228,6.981,1.683,9.568,3.968l-1.375,1.375l1.414,1.414l1.375-1.375c2.284,2.587,3.74,5.91,3.968,9.567H44v2H45.949z",
    fill: "url(#SVGID_2__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31,31.101V27h-2v4.101c-2.279,0.465-4,2.484-4,4.899c0,2.757,2.243,5,5,5 c2.415,0,4.434-1.721,4.899-4H39v-2h-4.101C34.5,33.044,32.956,31.5,31,31.101z M30,39c-1.654,0-3-1.346-3-3s1.346-3,3-3 s3,1.346,3,3S31.654,39,30,39z",
    fill: "url(#SVGID_3__43666)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43666",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "5.5",
    x2: "32",
    y2: "59.058",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54,33h-2.21C50.366,22.607,41.661,14.505,31,14.025v-0.167c1.72-0.447,3-1.999,3-3.858 c0-2.206-1.794-4-4-4s-4,1.794-4,4c0,1.859,1.28,3.411,3,3.858v0.167C17.332,14.55,8,24.205,8,36c0,12.131,9.869,22,22,22 c11.113,0,20.322-8.284,21.79-19H54c1.103,0,2-0.897,2-2v-2C56,33.897,55.103,33,54,33z M28,10c0-1.103,0.897-2,2-2s2,0.897,2,2 s-0.897,2-2,2S28,11.103,28,10z M30,56c-11.028,0-20-8.972-20-20s8.972-20,20-20s20,8.972,20,20S41.028,56,30,56z M54,37h-2.025 C51.99,36.668,52,36.335,52,36s-0.01-0.668-0.025-1H54V37z",
    fill: "url(#SVGID_4__43666)"
  }));
};
var CallToActionIcon = function CallToActionIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-cta",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "12",
    x2: "32",
    y2: "20.876",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M36,16.911c0,1.36-0.68,2.56-1.712,3.288c-0.296-0.984-1.208-1.688-2.288-1.688 c-1.08,0-1.992,0.704-2.288,1.688C28.68,19.471,28,18.271,28,16.911c0-2.208,1.792-4,4-4S36,14.703,36,16.911z",
    fill: "url(#SVGID_1__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "31",
    y: "6",
    width: "2",
    height: "4",
    fill: "url(#SVGID_2__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "41",
    y1: "4",
    x2: "41",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "39",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_3__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "23",
    y1: "4",
    x2: "23",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "21",
    y: "16",
    width: "4",
    height: "2",
    fill: "url(#SVGID_4__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "38.364",
    y1: "4",
    x2: "38.364",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "37.657,12.758 36.243,11.344 39.071,8.515 40.485,9.929",
    fill: "url(#SVGID_5__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "25.637",
    y1: "4",
    x2: "25.637",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "26.344,12.758 23.515,9.929 24.929,8.515 27.758,11.344",
    fill: "url(#SVGID_6__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "4",
    x2: "32",
    y2: "59.752",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M34,58h-4c-1.103,0-2-0.897-2-2V44h-9.013c-0.711,0-1.351-0.369-1.711-0.987 c-0.365-0.627-0.371-1.38-0.013-2.012l12.168-21.493C29.966,18.564,30.926,18.001,32,18c1.074,0,2.035,0.563,2.569,1.507 l12.168,21.494c0.357,0.632,0.353,1.384-0.014,2.012C46.363,43.631,45.724,44,45.013,44H36v12C36,57.103,35.103,58,34,58z M32.001,20c-0.166,0-0.577,0.049-0.829,0.493L19.003,41.986L30,42v14h4V42h11.013l0.854-0.507l-0.87,0.492L32.829,20.492 C32.577,20.048,32.166,20,32.001,20z",
    fill: "url(#SVGID_7__52516)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__52516",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "25.25",
    x2: "32",
    y2: "40.053",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M38.28,39H25.72c-0.766,0-1.247-0.828-0.867-1.493l6.28-10.99c0.383-0.671,1.35-0.671,1.733,0 l6.28,10.99C39.527,38.172,39.047,39,38.28,39z",
    fill: "url(#SVGID_8__52516)"
  }));
};
var FlipboxIcon = function FlipboxIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "600",
    height: "672",
    viewBox: "0 0 600 672",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Artboard",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-flipbox"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M410,0 L393.55469,13.82812 L301.36719,91.48437 L0,91.48437 L0,671.48437 L308.63281,671.48437 L410,586.13281 L410,0 Z M390,42.96875 L390,576.83593 L301.36719,651.48437 L20,651.48437 L20,111.48437 L308.63281,111.48437 L390,42.96875 Z M430,91.48437 C424.49219,91.48437 420,95.97656 420,101.48437 C420,106.99218 424.49219,111.48437 430,111.48437 C435.50781,111.48437 440,106.99218 440,101.48437 C440,95.97656 435.50781,91.48437 430,91.48437 Z M470,91.48437 C464.49219,91.48437 460,95.97656 460,101.48437 C460,106.99218 464.49219,111.48437 470,111.48437 C475.50781,111.48437 480,106.99218 480,101.48437 C480,95.97656 475.50781,91.48437 470,91.48437 Z M510,91.48437 C504.49219,91.48437 500,95.97656 500,101.48437 C500,106.99218 504.49219,111.48437 510,111.48437 C515.50781,111.48437 520,106.99218 520,101.48437 C520,95.97656 515.50781,91.48437 510,91.48437 Z M550,91.48437 C544.49219,91.48437 540,95.97656 540,101.48437 C540,106.99218 544.49219,111.48437 550,111.48437 C555.50781,111.48437 560,106.99218 560,101.48437 C560,95.97656 555.50781,91.48437 550,91.48437 Z M590,91.48437 C584.49219,91.48437 580,95.97656 580,101.48437 C580,106.99218 584.49219,111.48437 590,111.48437 C595.50781,111.48437 600,106.99218 600,101.48437 C600,95.97656 595.50781,91.48437 590,91.48437 Z M300,131.48437 C294.49219,131.48437 290,135.97656 290,141.48437 C290,146.99218 294.49219,151.48437 300,151.48437 C305.50781,151.48437 310,146.99218 310,141.48437 C310,135.97656 305.50781,131.48437 300,131.48437 Z M590,131.48437 C584.49219,131.48437 580,135.97656 580,141.48437 C580,146.99218 584.49219,151.48437 590,151.48437 C595.50781,151.48437 600,146.99218 600,141.48437 C600,135.97656 595.50781,131.48437 590,131.48437 Z M300,171.48437 C294.49219,171.48437 290,175.97656 290,181.48437 C290,186.99218 294.49219,191.48437 300,191.48437 C305.50781,191.48437 310,186.99218 310,181.48437 C310,175.97656 305.50781,171.48437 300,171.48437 Z M590,171.48437 C584.49219,171.48437 580,175.97656 580,181.48437 C580,186.99218 584.49219,191.48437 590,191.48437 C595.50781,191.48437 600,186.99218 600,181.48437 C600,175.97656 595.50781,171.48437 590,171.48437 Z M300,211.48437 C294.49219,211.48437 290,215.97656 290,221.48437 C290,226.99218 294.49219,231.48437 300,231.48437 C305.50781,231.48437 310,226.99218 310,221.48437 C310,215.97656 305.50781,211.48437 300,211.48437 Z M590,211.48437 C584.49219,211.48437 580,215.97656 580,221.48437 C580,226.99218 584.49219,231.48437 590,231.48437 C595.50781,231.48437 600,226.99218 600,221.48437 C600,215.97656 595.50781,211.48437 590,211.48437 Z M300,251.48437 C294.49219,251.48437 290,255.97656 290,261.48437 C290,266.99218 294.49219,271.48437 300,271.48437 C305.50781,271.48437 310,266.99218 310,261.48437 C310,255.97656 305.50781,251.48437 300,251.48437 Z M590,251.48437 C584.49219,251.48437 580,255.97656 580,261.48437 C580,266.99218 584.49219,271.48437 590,271.48437 C595.50781,271.48437 600,266.99218 600,261.48437 C600,255.97656 595.50781,251.48437 590,251.48437 Z M270,291.48437 L270,331.48437 L220,331.48437 C181.44531,331.48437 150,362.92968 150,401.48437 L150,491.48437 L170,491.48437 L170,401.48437 C170,373.75 192.26563,351.48437 220,351.48437 L270,351.48437 L270,391.48437 L330,341.48437 L270,291.48437 Z M590,291.48437 C584.49219,291.48437 580,295.97656 580,301.48437 C580,306.99218 584.49219,311.48437 590,311.48437 C595.50781,311.48437 600,306.99218 600,301.48437 C600,295.97656 595.50781,291.48437 590,291.48437 Z M590,331.48437 C584.49219,331.48437 580,335.97656 580,341.48437 C580,346.99218 584.49219,351.48437 590,351.48437 C595.50781,351.48437 600,346.99218 600,341.48437 C600,335.97656 595.50781,331.48437 590,331.48437 Z M590,371.48437 C584.49219,371.48437 580,375.97656 580,381.48437 C580,386.99218 584.49219,391.48437 590,391.48437 C595.50781,391.48437 600,386.99218 600,381.48437 C600,375.97656 595.50781,371.48437 590,371.48437 Z M300,411.48437 C294.49219,411.48437 290,415.97656 290,421.48437 C290,426.99218 294.49219,431.48437 300,431.48437 C305.50781,431.48437 310,426.99218 310,421.48437 C310,415.97656 305.50781,411.48437 300,411.48437 Z M590,411.48437 C584.49219,411.48437 580,415.97656 580,421.48437 C580,426.99218 584.49219,431.48437 590,431.48437 C595.50781,431.48437 600,426.99218 600,421.48437 C600,415.97656 595.50781,411.48437 590,411.48437 Z M300,451.48437 C294.49219,451.48437 290,455.97656 290,461.48437 C290,466.99218 294.49219,471.48437 300,471.48437 C305.50781,471.48437 310,466.99218 310,461.48437 C310,455.97656 305.50781,451.48437 300,451.48437 Z M590,451.48437 C584.49219,451.48437 580,455.97656 580,461.48437 C580,466.99218 584.49219,471.48437 590,471.48437 C595.50781,471.48437 600,466.99218 600,461.48437 C600,455.97656 595.50781,451.48437 590,451.48437 Z M300,491.48437 C294.49219,491.48437 290,495.97656 290,501.48437 C290,506.99218 294.49219,511.48437 300,511.48437 C305.50781,511.48437 310,506.99218 310,501.48437 C310,495.97656 305.50781,491.48437 300,491.48437 Z M590,491.48437 C584.49219,491.48437 580,495.97656 580,501.48437 C580,506.99218 584.49219,511.48437 590,511.48437 C595.50781,511.48437 600,506.99218 600,501.48437 C600,495.97656 595.50781,491.48437 590,491.48437 Z M300,531.48437 C294.49219,531.48437 290,535.97656 290,541.48437 C290,546.99218 294.49219,551.48437 300,551.48437 C305.50781,551.48437 310,546.99218 310,541.48437 C310,535.97656 305.50781,531.48437 300,531.48437 Z M590,531.48437 C584.49219,531.48437 580,535.97656 580,541.48437 C580,546.99218 584.49219,551.48437 590,551.48437 C595.50781,551.48437 600,546.99218 600,541.48437 C600,535.97656 595.50781,531.48437 590,531.48437 Z M300,571.48437 C294.49219,571.48437 290,575.97656 290,581.48437 C290,586.99218 294.49219,591.48437 300,591.48437 C305.50781,591.48437 310,586.99218 310,581.48437 C310,575.97656 305.50781,571.48437 300,571.48437 Z M590,571.48437 C584.49219,571.48437 580,575.97656 580,581.48437 C580,586.99218 584.49219,591.48437 590,591.48437 C595.50781,591.48437 600,586.99218 600,581.48437 C600,575.97656 595.50781,571.48437 590,571.48437 Z M300,611.48437 C294.49219,611.48437 290,615.97656 290,621.48437 C290,626.99218 294.49219,631.48437 300,631.48437 C305.50781,631.48437 310,626.99218 310,621.48437 C310,615.97656 305.50781,611.48437 300,611.48437 Z M590,611.48437 C584.49219,611.48437 580,615.97656 580,621.48437 C580,626.99218 584.49219,631.48437 590,631.48437 C595.50781,631.48437 600,626.99218 600,621.48437 C600,615.97656 595.50781,611.48437 590,611.48437 Z M350,651.48437 C344.49219,651.48437 340,655.97656 340,661.48437 C340,666.99218 344.49219,671.48437 350,671.48437 C355.50781,671.48437 360,666.99218 360,661.48437 C360,655.97656 355.50781,651.48437 350,651.48437 Z M390,651.48437 C384.49219,651.48437 380,655.97656 380,661.48437 C380,666.99218 384.49219,671.48437 390,671.48437 C395.50781,671.48437 400,666.99218 400,661.48437 C400,655.97656 395.50781,651.48437 390,651.48437 Z M430,651.48437 C424.49219,651.48437 420,655.97656 420,661.48437 C420,666.99218 424.49219,671.48437 430,671.48437 C435.50781,671.48437 440,666.99218 440,661.48437 C440,655.97656 435.50781,651.48437 430,651.48437 Z M470,651.48437 C464.49219,651.48437 460,655.97656 460,661.48437 C460,666.99218 464.49219,671.48437 470,671.48437 C475.50781,671.48437 480,666.99218 480,661.48437 C480,655.97656 475.50781,651.48437 470,651.48437 Z M510,651.48437 C504.49219,651.48437 500,655.97656 500,661.48437 C500,666.99218 504.49219,671.48437 510,671.48437 C515.50781,671.48437 520,666.99218 520,661.48437 C520,655.97656 515.50781,651.48437 510,651.48437 Z M550,651.48437 C544.49219,651.48437 540,655.97656 540,661.48437 C540,666.99218 544.49219,671.48437 550,671.48437 C555.50781,671.48437 560,666.99218 560,661.48437 C560,655.97656 555.50781,651.48437 550,651.48437 Z M590,651.48437 C584.49219,651.48437 580,655.97656 580,661.48437 C580,666.99218 584.49219,671.48437 590,671.48437 C595.50781,671.48437 600,666.99218 600,661.48437 C600,655.97656 595.50781,651.48437 590,651.48437 Z",
    id: "Shape"
  })))));
};
var InfoboxIcon = function InfoboxIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-info-box",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "19.203",
    x2: "32",
    y2: "45.242",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "43,19 21,19 21,25 29,25 29,45 35,45 35,25 43,25",
    fill: "url(#SVGID_1__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "9.359",
    x2: "32",
    y2: "55.428",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M54,9H10c-2.757,0-5,2.243-5,5v36c0,2.757,2.243,5,5,5h44c2.757,0,5-2.243,5-5V14 C59,11.243,56.757,9,54,9z M57,50c0,1.654-1.346,3-3,3H10c-1.654,0-3-1.346-3-3V14c0-1.654,1.346-3,3-3h44c1.654,0,3,1.346,3,3V50z",
    fill: "url(#SVGID_2__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "26.939",
    x2: "58",
    y2: "61.543",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S60.206,28,58,28z",
    fill: "url(#SVGID_3__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "58",
    y1: "30.125",
    x2: "58",
    y2: "33.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "58",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_4__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "26.939",
    x2: "6",
    y2: "61.543",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M6,28c-2.206,0-4,1.794-4,4s1.794,4,4,4s4-1.794,4-4S8.206,28,6,28z",
    fill: "url(#SVGID_5__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "6",
    y1: "30.125",
    x2: "6",
    y2: "33.875",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "6",
    cy: "32",
    r: "2",
    fill: "url(#SVGID_6__56360)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__56360",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "21.172",
    x2: "32",
    y2: "43.205",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("polygon", {
    points: "41,21 23,21 23,23 31,23 31,43 33,43 33,23 41,23",
    fill: "url(#SVGID_7__56360)"
  }));
};
var CounterIcon = function CounterIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "359",
    viewBox: "0 0 256 359",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-counter",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M128,0 C111.09568,0 97.28,13.815678 97.28,30.72 L97.28,40.96 L15.36,40.96 C6.9377536,40.96 0,47.8977536 0,56.32 L0,343.04 C0,351.462246 6.9377536,358.4 15.36,358.4 L240.64,358.4 C249.062246,358.4 256,351.462246 256,343.04 L256,56.32 C256,47.8977536 249.062246,40.96 240.64,40.96 L158.72,40.96 L158.72,30.72 C158.72,13.815678 144.90432,0 128,0 Z M128,10.24 C139.36832,10.24 148.48,19.351682 148.48,30.72 L148.48,66.56 C148.48,69.4529536 146.252954,71.68 143.36,71.68 L112.64,71.68 C109.747046,71.68 107.52,69.4529536 107.52,66.56 L107.52,30.72 C107.52,19.351682 116.63168,10.24 128,10.24 Z M128,25.6 C125.172302,25.6 122.88,27.8923021 122.88,30.72 C122.88,33.5476979 125.172302,35.84 128,35.84 C130.827698,35.84 133.12,33.5476979 133.12,30.72 C133.12,27.8923021 130.827698,25.6 128,25.6 Z M15.36,51.2 L97.28,51.2 L97.28,61.44 L92.16,61.44 C80.9096499,61.44 71.68,70.6696499 71.68,81.92 L71.68,87.04 L72.72,87.04 C75.0565325,95.7765786 82.7207987,102.4 92.16,102.4 L163.84,102.4 C173.279201,102.4 180.943468,95.7765786 183.28,87.04 L184.32,87.04 L184.32,81.92 C184.32,70.6696499 175.09035,61.44 163.84,61.44 L158.72,61.44 L158.72,51.2 L240.64,51.2 C243.532954,51.2 245.76,53.4270464 245.76,56.32 L245.76,343.04 C245.76,345.932954 243.532954,348.16 240.64,348.16 L15.36,348.16 C12.4670464,348.16 10.24,345.932954 10.24,343.04 L10.24,56.32 C10.24,53.4270464 12.4670464,51.2 15.36,51.2 Z M35.84,71.68 C33.0123021,71.68 30.72,73.9723021 30.72,76.8 C30.72,79.6276979 33.0123021,81.92 35.84,81.92 C38.6676979,81.92 40.96,79.6276979 40.96,76.8 C40.96,73.9723021 38.6676979,71.68 35.84,71.68 Z M92.16,71.68 L98.24,71.68 C100.376924,77.6054835 106.01919,81.92 112.64,81.92 L143.36,81.92 C149.98081,81.92 155.623076,77.6054835 157.76,71.68 L163.84,71.68 C169.55733,71.68 174.08,76.2026701 174.08,81.92 C174.08,87.6373299 169.55733,92.16 163.84,92.16 L92.16,92.16 C86.4426701,92.16 81.92,87.6373299 81.92,81.92 C81.92,76.2026701 86.4426701,71.68 92.16,71.68 Z M35.84,92.16 C33.0123021,92.16 30.72,94.4523021 30.72,97.28 C30.72,100.107698 33.0123021,102.4 35.84,102.4 C38.6676979,102.4 40.96,100.107698 40.96,97.28 C40.96,94.4523021 38.6676979,92.16 35.84,92.16 Z M35.84,112.64 C33.0123021,112.64 30.72,114.932302 30.72,117.76 C30.72,120.587698 33.0123021,122.88 35.84,122.88 C38.6676979,122.88 40.96,120.587698 40.96,117.76 C40.96,114.932302 38.6676979,112.64 35.84,112.64 Z M35.84,133.12 C33.0123021,133.12 30.72,135.412302 30.72,138.24 C30.72,141.067698 33.0123021,143.36 35.84,143.36 C38.6676979,143.36 40.96,141.067698 40.96,138.24 C40.96,135.412302 38.6676979,133.12 35.84,133.12 Z M35.84,153.6 C33.0123021,153.6 30.72,155.892302 30.72,158.72 C30.72,161.547698 33.0123021,163.84 35.84,163.84 C38.6676979,163.84 40.96,161.547698 40.96,158.72 C40.96,155.892302 38.6676979,153.6 35.84,153.6 Z M117.76,153.6 L121.180001,242.349998 L134.819999,242.349998 L138.24,153.6 L117.76,153.6 Z M35.84,174.08 C33.0123021,174.08 30.72,176.372302 30.72,179.2 C30.72,182.027698 33.0123021,184.32 35.84,184.32 C38.6676979,184.32 40.96,182.027698 40.96,179.2 C40.96,176.372302 38.6676979,174.08 35.84,174.08 Z M35.84,194.56 C33.0123021,194.56 30.72,196.852302 30.72,199.68 C30.72,202.507698 33.0123021,204.8 35.84,204.8 C38.6676979,204.8 40.96,202.507698 40.96,199.68 C40.96,196.852302 38.6676979,194.56 35.84,194.56 Z M35.84,215.04 C33.0123021,215.04 30.72,217.332302 30.72,220.16 C30.72,222.987698 33.0123021,225.28 35.84,225.28 C38.6676979,225.28 40.96,222.987698 40.96,220.16 C40.96,217.332302 38.6676979,215.04 35.84,215.04 Z M35.84,235.52 C33.0123021,235.52 30.72,237.812302 30.72,240.64 C30.72,243.467698 33.0123021,245.76 35.84,245.76 C38.6676979,245.76 40.96,243.467698 40.96,240.64 C40.96,237.812302 38.6676979,235.52 35.84,235.52 Z M35.84,256 C33.0123021,256 30.72,258.292302 30.72,261.12 C30.72,263.947698 33.0123021,266.24 35.84,266.24 C38.6676979,266.24 40.96,263.947698 40.96,261.12 C40.96,258.292302 38.6676979,256 35.84,256 Z M128,256.860001 C122.344604,256.860001 117.76,261.444605 117.76,267.100001 C117.76,272.755397 122.344604,277.340001 128,277.340001 C133.655396,277.340001 138.24,272.755397 138.24,267.100001 C138.24,261.444605 133.655396,256.860001 128,256.860001 Z M35.84,276.48 C33.0123021,276.48 30.72,278.772302 30.72,281.6 C30.72,284.427698 33.0123021,286.72 35.84,286.72 C38.6676979,286.72 40.96,284.427698 40.96,281.6 C40.96,278.772302 38.6676979,276.48 35.84,276.48 Z M35.84,296.96 C33.0123021,296.96 30.72,299.252302 30.72,302.08 C30.72,304.907698 33.0123021,307.2 35.84,307.2 C38.6676979,307.2 40.96,304.907698 40.96,302.08 C40.96,299.252302 38.6676979,296.96 35.84,296.96 Z M35.84,317.44 C33.0123021,317.44 30.72,319.732302 30.72,322.56 C30.72,325.387698 33.0123021,327.68 35.84,327.68 C38.6676979,327.68 40.96,325.387698 40.96,322.56 C40.96,319.732302 38.6676979,317.44 35.84,317.44 Z",
    id: "Shape"
  }))));
};
var PricingTableIcon = function PricingTableIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "256",
    height: "256",
    viewBox: "0 0 256 256",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-pricing-table",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M85.3333333,0 C77.4385707,0 70.8027733,5.47924907 68.8833323,12.8 L17.0666667,12.8 C7.69137493,12.8 0,20.4913749 0,29.8666667 L0,226.133333 C0,235.508625 7.69137493,243.2 17.0666667,243.2 L21.3333333,243.2 C23.6897483,243.2 25.6,241.289748 25.6,238.933333 C25.6,236.576918 23.6897483,234.666667 21.3333333,234.666667 L17.0666667,234.666667 C12.3022251,234.666667 8.53333333,230.897775 8.53333333,226.133333 L8.53333333,29.8666667 C8.53333333,25.1022251 12.3022251,21.3333333 17.0666667,21.3333333 L68.2666667,21.3333333 L68.2666667,51.2 L29.8666667,51.2 L29.8666667,59.7333333 L68.2666667,59.7333333 L68.2666667,76.8 L29.8666667,76.8 L29.8666667,85.3333333 L68.2666667,85.3333333 L68.2666667,136.533333 L51.2,136.533333 L51.2,145.066667 L68.2666667,145.066667 L68.2666667,162.133333 L51.2,162.133333 L51.2,170.666667 L68.2666667,170.666667 L68.2666667,238.933333 C68.2666667,248.308625 75.9580416,256 85.3333333,256 L93.8666667,256 C96.2230816,256 98.1333333,254.089748 98.1333333,251.733333 C98.1333333,249.376918 96.2230816,247.466667 93.8666667,247.466667 L85.3333333,247.466667 C80.5688917,247.466667 76.8,243.697775 76.8,238.933333 L76.8,17.0666667 C76.8,12.3022251 80.5688917,8.53333333 85.3333333,8.53333333 L170.666667,8.53333333 C175.431108,8.53333333 179.2,12.3022251 179.2,17.0666667 L179.2,136.533333 L179.2,145.066667 L179.2,162.133333 L179.2,170.666667 L179.2,187.733333 L179.2,196.266667 L179.2,238.933333 C179.2,243.697775 175.431108,247.466667 170.666667,247.466667 L162.133333,247.466667 C159.776918,247.466667 157.866667,249.376918 157.866667,251.733333 C157.866667,254.089748 159.776918,256 162.133333,256 L170.666667,256 C180.041958,256 187.733333,248.308625 187.733333,238.933333 L187.733333,196.266667 L226.133333,196.266667 L226.133333,187.733333 L187.733333,187.733333 L187.733333,170.666667 L226.133333,170.666667 L226.133333,162.133333 L187.733333,162.133333 L187.733333,145.066667 L226.133333,145.066667 L226.133333,136.533333 L187.733333,136.533333 L187.733333,85.3333333 L226.133333,85.3333333 L226.133333,76.8 L187.733333,76.8 L187.733333,59.7333333 L226.133333,59.7333333 L226.133333,51.2 L187.733333,51.2 L187.733333,21.3333333 L238.933333,21.3333333 C243.697775,21.3333333 247.466667,25.1022251 247.466667,29.8666667 L247.466667,226.133333 C247.466667,230.897775 243.697775,234.666667 238.933333,234.666667 L234.666667,234.666667 C232.310252,234.666667 230.4,236.576918 230.4,238.933333 C230.4,241.289748 232.310252,243.2 234.666667,243.2 L238.933333,243.2 C248.308625,243.2 256,235.508625 256,226.133333 L256,29.8666667 C256,20.4913749 248.308625,12.8 238.933333,12.8 L187.116668,12.8 C185.197227,5.47924907 178.561429,0 170.666667,0 L85.3333333,0 Z M93.8666667,42.6666667 L93.8666667,51.2 L162.133333,51.2 L162.133333,42.6666667 L93.8666667,42.6666667 Z M93.8666667,68.2666667 L93.8666667,76.8 L162.133333,76.8 L162.133333,68.2666667 L93.8666667,68.2666667 Z M98.1333333,128 C95.7769184,128 93.8666667,129.910252 93.8666667,132.266667 C93.8666667,134.623082 95.7769184,136.533333 98.1333333,136.533333 C100.489748,136.533333 102.4,134.623082 102.4,132.266667 C102.4,129.910252 100.489748,128 98.1333333,128 Z M115.2,128 L115.2,136.533333 L162.133333,136.533333 L162.133333,128 L115.2,128 Z M34.1333333,136.533333 C31.7769184,136.533333 29.8666667,138.443585 29.8666667,140.8 C29.8666667,143.156415 31.7769184,145.066667 34.1333333,145.066667 C36.4897483,145.066667 38.4,143.156415 38.4,140.8 C38.4,138.443585 36.4897483,136.533333 34.1333333,136.533333 Z M98.1333333,153.6 C95.7769184,153.6 93.8666667,155.510252 93.8666667,157.866667 C93.8666667,160.223082 95.7769184,162.133333 98.1333333,162.133333 C100.489748,162.133333 102.4,160.223082 102.4,157.866667 C102.4,155.510252 100.489748,153.6 98.1333333,153.6 Z M115.2,153.6 L115.2,162.133333 L162.133333,162.133333 L162.133333,153.6 L115.2,153.6 Z M34.1333333,162.133333 C31.7769184,162.133333 29.8666667,164.043585 29.8666667,166.4 C29.8666667,168.756415 31.7769184,170.666667 34.1333333,170.666667 C36.4897483,170.666667 38.4,168.756415 38.4,166.4 C38.4,164.043585 36.4897483,162.133333 34.1333333,162.133333 Z M98.1333333,179.2 C95.7769184,179.2 93.8666667,181.110252 93.8666667,183.466667 C93.8666667,185.823082 95.7769184,187.733333 98.1333333,187.733333 C100.489748,187.733333 102.4,185.823082 102.4,183.466667 C102.4,181.110252 100.489748,179.2 98.1333333,179.2 Z M115.2,179.2 L115.2,187.733333 L162.133333,187.733333 L162.133333,179.2 L115.2,179.2 Z M98.1333333,204.8 C95.7769184,204.8 93.8666667,206.710252 93.8666667,209.066667 C93.8666667,211.423082 95.7769184,213.333333 98.1333333,213.333333 C100.489748,213.333333 102.4,211.423082 102.4,209.066667 C102.4,206.710252 100.489748,204.8 98.1333333,204.8 Z M115.2,204.8 L115.2,213.333333 L162.133333,213.333333 L162.133333,204.8 L115.2,204.8 Z M38.4,234.666667 C36.0435851,234.666667 34.1333333,236.576918 34.1333333,238.933333 C34.1333333,241.289748 36.0435851,243.2 38.4,243.2 C40.7564149,243.2 42.6666667,241.289748 42.6666667,238.933333 C42.6666667,236.576918 40.7564149,234.666667 38.4,234.666667 Z M55.4666667,234.666667 C53.1102517,234.666667 51.2,236.576918 51.2,238.933333 C51.2,241.289748 53.1102517,243.2 55.4666667,243.2 C57.8230816,243.2 59.7333333,241.289748 59.7333333,238.933333 C59.7333333,236.576918 57.8230816,234.666667 55.4666667,234.666667 Z M200.533333,234.666667 C198.176918,234.666667 196.266667,236.576918 196.266667,238.933333 C196.266667,241.289748 198.176918,243.2 200.533333,243.2 C202.889748,243.2 204.8,241.289748 204.8,238.933333 C204.8,236.576918 202.889748,234.666667 200.533333,234.666667 Z M217.6,234.666667 C215.243585,234.666667 213.333333,236.576918 213.333333,238.933333 C213.333333,241.289748 215.243585,243.2 217.6,243.2 C219.956415,243.2 221.866667,241.289748 221.866667,238.933333 C221.866667,236.576918 219.956415,234.666667 217.6,234.666667 Z M110.933333,247.466667 C108.576918,247.466667 106.666667,249.376918 106.666667,251.733333 C106.666667,254.089748 108.576918,256 110.933333,256 C113.289748,256 115.2,254.089748 115.2,251.733333 C115.2,249.376918 113.289748,247.466667 110.933333,247.466667 Z M128,247.466667 C125.643585,247.466667 123.733333,249.376918 123.733333,251.733333 C123.733333,254.089748 125.643585,256 128,256 C130.356415,256 132.266667,254.089748 132.266667,251.733333 C132.266667,249.376918 130.356415,247.466667 128,247.466667 Z M145.066667,247.466667 C142.710252,247.466667 140.8,249.376918 140.8,251.733333 C140.8,254.089748 142.710252,256 145.066667,256 C147.423082,256 149.333333,254.089748 149.333333,251.733333 C149.333333,249.376918 147.423082,247.466667 145.066667,247.466667 Z",
    id: "Shape"
  }))));
};
var ProgressbarIcon = function ProgressbarIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-progress",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.315",
    y1: "4.167",
    x2: "12.315",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.8,45.771c1.027,1.637,2.24,3.162,3.606,4.536l1.424-1.408 c-1.261-1.269-2.381-2.678-3.329-4.188L9.8,45.771z",
    fill: "url(#SVGID_1__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.592",
    y1: "4.167",
    x2: "7.592",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M6.003,34.906c0.215,1.923,0.646,3.823,1.283,5.646l1.894-0.658 c-0.588-1.682-0.985-3.435-1.183-5.209L6.003,34.906z",
    fill: "url(#SVGID_2__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "7.586",
    y1: "4.167",
    x2: "7.586",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M9.173,24.127l-1.894-0.656C6.643,25.295,6.213,27.196,6,29.121l1.994,0.219 C8.19,27.563,8.587,25.81,9.173,24.127z",
    fill: "url(#SVGID_3__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "12.299",
    y1: "4.167",
    x2: "12.299",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M14.813,15.115l-1.426-1.406c-1.364,1.374-2.576,2.901-3.602,4.538l1.7,1.061 C12.433,17.796,13.552,16.385,14.813,15.115z",
    fill: "url(#SVGID_4__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.846",
    y1: "4.167",
    x2: "20.846",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23.789,9.403l-0.676-1.883c-1.821,0.65-3.574,1.509-5.211,2.551l1.079,1.686 C20.493,10.795,22.11,10.003,23.789,9.403z",
    fill: "url(#SVGID_5__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "20.869",
    y1: "4.167",
    x2: "20.869",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M17.924,53.942c1.64,1.04,3.395,1.896,5.215,2.546l0.676-1.883 c-1.68-0.6-3.3-1.39-4.813-2.351L17.924,53.942z",
    fill: "url(#SVGID_6__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "43.399",
    y1: "4.167",
    x2: "43.399",
    y2: "59.168",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M31.921,6c-1.042,0-2.093,0.063-3.124,0.185l0.237,1.986C29.988,8.058,30.958,8,31.921,8 c13.274,0,24.073,10.767,24.073,24S45.195,56,31.921,56c-0.963,0-1.934-0.058-2.887-0.171l-0.237,1.986 C29.828,57.938,30.879,58,31.921,58C46.302,58,58,46.337,58,32S46.302,6,31.921,6z",
    fill: "url(#SVGID_7__48178)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__48178",
    gradientUnits: "userSpaceOnUse",
    x1: "31.921",
    y1: "20.667",
    x2: "31.921",
    y2: "45.235",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M27.908,41.937c-1.028,0-2.056-0.391-2.839-1.171l-7.606-7.583l2.837-2.828l7.606,7.583 l15.636-15.583l2.837,2.828l-15.63,15.583C29.965,41.546,28.937,41.937,27.908,41.937z",
    fill: "url(#SVGID_8__48178)"
  }));
};
var InteractivePromoIcon = function InteractivePromoIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-promo",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "37",
    y1: "16.125",
    x2: "37",
    y2: "22.38",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M42,22H32c-0.552,0-1-0.448-1-1v-4c0-0.552,0.448-1,1-1h10c0.552,0,1,0.448,1,1v4 C43,21.552,42.552,22,42,22z",
    fill: "url(#SVGID_1__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "39.5",
    y1: "10",
    x2: "39.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58,36c0-2.967-2.167-5.431-5-5.91v-7.004c0-0.777-0.435-1.468-1.135-1.805 c-0.7-0.335-1.511-0.244-2.119,0.241l-7.996,6.396c-0.03,0.024-0.052,0.055-0.081,0.081H30c-2.757,0-5,2.243-5,5h-2 c-1.103,0-2,0.897-2,2v2c0,1.103,0.897,2,2,2h2c0,2.757,2.243,5,5,5v6c0,2.206,1.794,4,4,4s4-1.794,4-4v-6h3.669 c0.029,0.026,0.051,0.057,0.082,0.082l7.995,6.396c0.365,0.292,0.804,0.441,1.247,0.441c0.295,0,0.593-0.066,0.872-0.2 C52.565,50.382,53,49.69,53,48.914V41.91C55.833,41.431,58,38.967,58,36z M23,37v-2h2v2H23z M36,50c0,1.103-0.897,2-2,2 s-2-0.897-2-2v-6h4V50z M30,42c-1.654,0-3-1.346-3-3v-6c0-1.654,1.346-3,3-3h11v12h-3H30z M50.996,48.916L43,42.518V29.479l4-3.197 V36h2V24.684l2-1.598l0.002,25.834C51.002,48.92,51,48.919,50.996,48.916z M53,39.858v-7.716c1.72,0.447,3,2,3,3.858 S54.72,39.411,53,39.858z",
    fill: "url(#SVGID_2__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "31",
    y1: "10",
    x2: "31",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M29,34v2h2v-2h2v-2h-2C29.897,32,29,32.897,29,34z",
    fill: "url(#SVGID_3__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "27.5",
    y1: "10",
    x2: "27.5",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M8,40V15c0-1.654,1.346-3,3-3h33c1.654,0,3,1.346,3,3v4h2v-4c0-2.757-2.243-5-5-5H11 c-2.757,0-5,2.243-5,5v25c0,2.757,2.243,5,5,5h12v-2H11C9.346,43,8,41.654,8,40z",
    fill: "url(#SVGID_4__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "16",
    width: "14",
    height: "2",
    fill: "url(#SVGID_5__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "19",
    y1: "10",
    x2: "19",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "20",
    width: "14",
    height: "2",
    fill: "url(#SVGID_6__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "10",
    x2: "17",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "24",
    width: "10",
    height: "2",
    fill: "url(#SVGID_7__43971)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__43971",
    gradientUnits: "userSpaceOnUse",
    x1: "16",
    y1: "10",
    x2: "16",
    y2: "54.388",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "12",
    y: "28",
    width: "8",
    height: "2",
    fill: "url(#SVGID_8__43971)"
  }));
};
var SocialIcon = function SocialIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-social",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "38.167",
    x2: "28",
    y2: "49.844",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "44",
    r: "5",
    fill: "url(#SVGID_1__44048)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "10",
    x2: "32",
    y2: "56.363",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,11c-6.617,0-12,5.383-12,12c0,2.949,1.074,5.649,2.845,7.741l-6.234,6.234 C32.071,35.742,30.122,35,28,35s-4.071,0.742-5.611,1.975l-5.077-5.077C18.366,30.542,19,28.846,19,27c0-4.411-3.589-8-8-8 s-8,3.589-8,8s3.589,8,8,8c1.846,0,3.542-0.634,4.897-1.688l5.077,5.077C19.742,39.929,19,41.878,19,44c0,4.963,4.037,9,9,9 s9-4.037,9-9c0-2.122-0.742-4.071-1.975-5.611l6.234-6.234C43.351,33.926,46.051,35,49,35c6.617,0,12-5.383,12-12S55.617,11,49,11z M11,33c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S14.309,33,11,33z M28,51c-3.859,0-7-3.141-7-7s3.141-7,7-7s7,3.141,7,7 S31.859,51,28,51z M49,33c-5.514,0-10-4.486-10-10s4.486-10,10-10s10,4.486,10,10S54.514,33,49,33z",
    fill: "url(#SVGID_2__44048)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__44048",
    gradientUnits: "userSpaceOnUse",
    x1: "49",
    y1: "10",
    x2: "49",
    y2: "56.363",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,15c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S53.411,15,49,15z M49,29 c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S52.309,29,49,29z",
    fill: "url(#SVGID_3__44048)"
  }));
};
var TeamMembersIcon = function TeamMembersIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-team-members",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "30",
    y1: "30.75",
    x2: "30",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "30",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_1__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "22",
    y1: "30.75",
    x2: "22",
    y2: "35.17",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "22",
    cy: "33",
    r: "2",
    fill: "url(#SVGID_2__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "36.833",
    x2: "26",
    y2: "41.25",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M23,38c0,1.657,1.343,3,3,3h0c1.657,0,3-1.343,3-3v-1h-6V38z",
    fill: "url(#SVGID_3__43670)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43670",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.75",
    x2: "32",
    y2: "57.323",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M51.114,40.344c0.329-0.77,0.569-1.584,0.716-2.428C54.191,37.518,56,35.473,56,33 c0-2.415-1.721-4.434-4-4.899V27h3.5c1.379,0,2.5-1.121,2.5-2.5S56.879,22,55.5,22H52v-3c0-3.859-3.141-7-7-7H33.715 c-0.866-0.477-1.77-0.885-2.715-1.195V7h-2c-1.2,0-2.266,0.542-3,1.382C25.266,7.542,24.2,7,23,7h-2v3.811 C14.621,12.917,10,18.925,10,26v2h0.026C9.391,28.838,9,29.87,9,31c0,2.533,1.894,4.632,4.339,4.956 c0.165,0.706,0.389,1.389,0.664,2.046C8.968,41.773,6,47.648,6,54v3h40h12v-3C58,48.6,55.436,43.548,51.114,40.344z M54,33 c0,1.302-0.838,2.402-2,2.816v-5.631C53.162,30.598,54,31.698,54,33z M55.5,24c0.275,0,0.5,0.225,0.5,0.5S55.775,25,55.5,25H42 c0-0.333-0.012-0.667-0.033-1H55.5z M43.789,44.874c-1.369-2.668-3.341-5.025-5.794-6.868c0.278-0.664,0.493-1.358,0.659-2.072 C41.1,35.61,43,33.533,43,31c0-1.13-0.391-2.162-1.026-3H42v-1h6v4c0,1.302,0.838,2.402,2,2.816V36c0,3.954-2.532,7.405-6.301,8.588 L43.789,44.874z M35.203,26H36c0.34,0,0.672-0.033,1-0.08v2.792C36.345,28.374,35.563,27.626,35.203,26z M37,30.823V33 c0,6.065-4.935,11-11,11s-11-4.935-11-11v-2.177c1.238-0.356,3.247-1.46,3.83-4.823H33.17C33.753,29.363,35.762,30.466,37,30.823z M36,24h-1h-2H19.101c0.465-2.279,2.484-4,4.899-4h16.899C40.435,22.279,38.415,24,36,24z M41,31c0,1.317-0.859,2.427-2.042,2.829 C38.976,33.553,39,33.28,39,33v-4.816C40.162,28.598,41,29.698,41,31z M39,26.101v-0.786c0.347-0.166,0.679-0.355,0.992-0.573 C39.993,24.828,40,24.914,40,25v1.424C39.682,26.284,39.349,26.172,39,26.101z M45,14c2.757,0,5,2.243,5,5v3h-7.685 C42.75,21.089,43,20.074,43,19v-1h-3.152c-0.881-1.525-1.988-2.87-3.269-4H45z M29,9v1.289c-0.575-0.109-1.159-0.19-1.75-0.236 C27.589,9.429,28.242,9,29,9z M23,9c0.762,0,1.418,0.434,1.756,1.063c-0.595,0.046-1.181,0.119-1.756,0.229V9z M11,31 c0-1.304,0.836-2.416,2-2.829V33c0,0.281,0.009,0.562,0.026,0.838C11.849,33.433,11,32.313,11,31z M14,26 c-0.712,0-1.386,0.155-2,0.424V26c0-7.72,6.28-14,14-14c4.626,0,8.885,2.264,11.486,6H24c-3.519,0-6.432,2.614-6.92,6H17 c0,3.078-1.119,4.258-2,4.713V26H14z M14.937,39.81C17.229,43.52,21.328,46,26,46c4.672,0,8.765-2.486,11.056-6.197 c0.541,0.422,1.053,0.873,1.537,1.349C35.839,45.401,31.104,48,26,48c-5.086,0-9.84-2.612-12.594-6.858 C13.888,40.672,14.399,40.228,14.937,39.81z M44,55h-4v-2h-2v2H14v-2h-2v2H8v-1c0-4.207,1.447-8.182,4.016-11.342 C15.173,47.216,20.41,50,26,50c5.608,0,10.815-2.774,13.972-7.33C42.54,45.843,44,49.835,44,54V55z M56,55h-4v-2h-2v2h-4v-1 c0-2.631-0.53-5.198-1.504-7.574c2.377-0.795,4.334-2.333,5.654-4.311C53.828,44.949,56,49.328,56,54V55z",
    fill: "url(#SVGID_4__43670)"
  }));
};
var TestimonialIcon = function TestimonialIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-testimonials",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "22.938",
    x2: "8",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,26c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_1__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "14",
    y1: "22.938",
    x2: "14",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M16,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_2__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "20",
    y1: "22.938",
    x2: "20",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_3__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "22.938",
    x2: "26",
    y2: "27.125",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,26c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V26z",
    fill: "url(#SVGID_4__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "8",
    y1: "28.813",
    x2: "8",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M10,32c0,0.552-0.448,1-1,1H7c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_5__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "17",
    y1: "28.813",
    x2: "17",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M22,32c0,0.552-0.448,1-1,1h-8c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h8 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_6__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_7__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "26",
    y1: "28.813",
    x2: "26",
    y2: "33.448",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M28,32c0,0.552-0.448,1-1,1h-2c-0.552,0-1-0.448-1-1v-2c0-0.552,0.448-1,1-1h2 c0.552,0,1,0.448,1,1V32z",
    fill: "url(#SVGID_7__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_8__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "28",
    y1: "9.5",
    x2: "28",
    y2: "55.566",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M49,9H19c-2.757,0-5,2.241-5,4.998V17H5c-1.654,0-3,1.344-3,2.998v16C2,37.653,3.346,39,5,39 h9v2.998C14,44.755,16.243,47,19,47h11c0.552,0,1,0.447,1,0.998v4.1c0,1.132,0.658,2.135,1.717,2.617 c0.422,0.193,0.865,0.287,1.302,0.287c0.721,0,1.425-0.256,1.995-0.751l8.077-7.007C44.272,47.086,44.506,47,44.748,47H49 c2.757,0,5-2.245,5-5.002v-28C54,11.241,51.757,9,49,9z M14,35c-1.103,0-2,1-2,2H5c-0.552,0-1-0.45-1-1.002v-16 C4,19.447,4.448,19,5,19h24c0.552,0,1,0.447,1,0.998v16C30,36.55,29.552,37,29,37h-7c0-1-0.897-2-2-2H14z M52,41.998 C52,43.653,50.654,45,49,45h-4.252c-0.724,0-1.424,0.26-1.969,0.734l-8.076,7.007c-0.381,0.328-0.846,0.296-1.156,0.154 C33.383,52.821,33,52.593,33,52.098v-4.1C33,46.344,31.654,45,30,45H19c-1.654,0-3-1.347-3-3.002V39h13c1.654,0,3-1.347,3-3.002v-16 C32,18.344,30.654,17,29,17H16v-3.002C16,12.344,17.346,11,19,11h30c1.654,0,3,1.344,3,2.998V41.998z",
    fill: "url(#SVGID_8__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_9__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "17",
    width: "10",
    height: "2",
    fill: "url(#SVGID_9__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_10__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("rect", {
    x: "37",
    y: "21",
    width: "10",
    height: "2",
    fill: "url(#SVGID_10__43982)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_11__43982",
    gradientUnits: "userSpaceOnUse",
    x1: "42",
    y1: "9.5",
    x2: "42",
    y2: "55.568",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44,25h-4c-1.654,0-3,1.344-3,2.998V39h2v-5h6v5h2V27.998C47,26.344,45.654,25,44,25z M45,32 h-6v-4.002C39,27.447,39.448,27,40,27h4c0.552,0,1,0.447,1,0.998V32z",
    fill: "url(#SVGID_11__43982)"
  }));
};
var ImageComparisonIcon = function ImageComparisonIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "eb-img-comparison",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "7",
    x2: "32",
    y2: "56.807",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M52,7H12c-2.757,0-5,2.243-5,5v40c0,2.757,2.243,5,5,5h40c2.757,0,5-2.243,5-5V12 C57,9.243,54.757,7,52,7z M9,12c0-1.654,1.346-3,3-3h40c0.462,0,0.894,0.113,1.285,0.301L41.154,21.432C38.697,19.3,35.501,18,32,18 c-7.72,0-14,6.28-14,14c0,3.501,1.3,6.697,3.432,9.154L9.301,53.285C9.113,52.894,9,52.462,9,52V12z M22.845,39.741 C21.074,37.649,20,34.949,20,32c0-6.617,5.383-12,12-12c2.949,0,5.649,1.074,7.741,2.845L22.845,39.741z M41.155,24.259 C42.926,26.351,44,29.051,44,32c0,6.617-5.383,12-12,12c-2.949,0-5.649-1.074-7.741-2.845L41.155,24.259z M55,52 c0,1.654-1.346,3-3,3H12c-0.462,0-0.894-0.113-1.285-0.301l12.131-12.131C25.303,44.7,28.499,46,32,46c7.72,0,14-6.28,14-14 c0-3.501-1.3-6.697-3.432-9.154l12.131-12.131C54.887,11.106,55,11.538,55,12V52z",
    fill: "url(#SVGID_1__56353)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "34.691",
    y1: "27.618",
    x2: "34.691",
    y2: "41.826",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32,42c-1.614,0-3.199-0.397-4.618-1.139l13.479-13.479C41.603,28.801,42,30.386,42,32 C42,37.514,37.514,42,32,42z",
    fill: "url(#SVGID_2__56353)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__56353",
    gradientUnits: "userSpaceOnUse",
    x1: "29.879",
    y1: "11.097",
    x2: "29.879",
    y2: "48.982",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M40.98,18.777C38.336,16.976,35.209,16,32,16c-8.822,0-16,7.178-16,16 c0,3.209,0.976,6.336,2.777,8.98L11,48.758V12c0-0.551,0.449-1,1-1h36.758L40.98,18.777z",
    fill: "url(#SVGID_3__56353)"
  }));
};
var TestIcon = function TestIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    className: "eb-category-icon",
    viewBox: "0 0 453 446",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "0%",
    x2: "50%",
    y2: "100%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#2460FF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#B80AFF",
    offset: "100%"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M110.214843,146.445312 L165.730468,146.445312 L165.996093,146.578125 L166.195312,146.578125 C169.515641,146.578125 172.216135,148.282535 174.296875,151.691406 C175.005211,153.10808 175.359375,154.569003 175.359375,156.074219 C175.359375,159.748716 173.544288,162.582021 169.914062,164.574219 C168.674472,165.149742 167.434902,165.4375 166.195312,165.4375 L109.617187,165.4375 C106.960924,165.4375 104.614593,164.220064 102.578125,161.785156 C101.249993,160.014314 100.585937,158.199228 100.585937,156.339844 L100.585937,155.542969 C100.585937,152.621079 102.04686,150.119802 104.96875,148.039062 C106.562507,147.065099 108.134106,146.578125 109.683593,146.578125 L109.949218,146.578125 L110.214843,146.445312 Z M110.082031,193.925781 L138.703125,194.058594 C140.60678,194.058594 142.643218,195.032542 144.8125,196.980469 C146.539071,198.972666 147.402343,201.141915 147.402343,203.488281 C147.402343,206.764339 145.875015,209.442698 142.820312,211.523438 C141.315096,212.408859 139.854173,212.851562 138.4375,212.851562 L109.484375,212.851562 C106.651027,212.851562 104.19402,211.43491 102.113281,208.601562 C101.095046,207.007805 100.585937,205.41407 100.585937,203.820312 L100.585937,203.023438 C100.585937,200.013006 102.157536,197.423188 105.300781,195.253906 C106.894539,194.457027 108.399732,194.058594 109.816406,194.058594 L109.949218,194.058594 C110.03776,194.058594 110.082031,194.014323 110.082031,193.925781 Z M165.664062,194.058594 L166.128906,194.058594 C169.714861,194.058594 172.526031,195.91795 174.5625,199.636719 C175.093752,200.96485 175.359375,202.248692 175.359375,203.488281 C175.359375,207.20705 173.522153,210.06249 169.847656,212.054688 C168.519524,212.58594 167.346359,212.851562 166.328125,212.851562 L165.398437,212.851562 C162.388005,212.851562 159.820323,211.279964 157.695312,208.136719 C156.854162,206.542961 156.433593,204.971362 156.433593,203.421875 C156.433593,199.791649 158.248679,196.958344 161.878906,194.921875 C163.251308,194.346351 164.513015,194.058594 165.664062,194.058594 Z M110.214843,241.207031 L165.730468,241.207031 C165.730468,241.295573 166.416659,241.406249 167.789062,241.539062 C170.091157,242.114586 171.839837,243.15494 173.035156,244.660156 C174.584643,246.475269 175.359375,248.555978 175.359375,250.902344 C175.359375,254.488299 173.544288,257.321604 169.914062,259.402344 C168.807286,259.800783 168.054689,260 167.65625,260 L108.289062,260 C106.739575,260 104.880219,258.959646 102.710937,256.878906 C101.294263,254.975251 100.585937,253.049489 100.585937,251.101562 L100.585937,250.503906 C100.585937,247.227848 102.246077,244.54949 105.566406,242.46875 C106.540369,241.893226 108.045562,241.494793 110.082031,241.273438 C110.082031,241.229166 110.126301,241.207031 110.214843,241.207031 Z M200.175781,145.582031 L242.609375,145.582031 C252.216194,145.582031 260.494757,149.256474 267.445312,156.605469 C273.156279,163.113314 276.011719,170.528604 276.011719,178.851562 C276.011719,188.104213 272.669304,196.050748 265.984375,202.691406 C272.669304,209.022167 276.011719,216.968702 276.011719,226.53125 C276.011719,236.713593 271.783896,245.390589 263.328125,252.5625 C260.539049,254.598969 257.882825,256.148432 255.359375,257.210938 C251.37498,258.716153 248.253918,259.46875 245.996094,259.46875 L203.628906,259.46875 C202.212232,259.46875 200.485687,258.561207 198.449219,256.746094 C196.678377,254.753896 195.792969,252.606782 195.792969,250.304688 L195.792969,202.425781 C195.792969,198.884097 197.608055,196.072927 201.238281,193.992188 C202.787768,193.372393 204.093745,193.0625 205.15625,193.0625 C206.572924,193.106771 207.436196,193.128906 207.746094,193.128906 C214.696649,193.128906 226.649655,193.151041 243.605469,193.195312 C245.951835,193.195312 248.630193,192.199229 251.640625,190.207031 C255.270851,186.930973 257.085938,183.101584 257.085938,178.71875 C257.085938,175.265608 255.735691,171.989599 253.035156,168.890625 C250.290351,166.057277 246.881531,164.640625 242.808594,164.640625 L200.175781,164.640625 C195.881489,164.640625 192.804697,162.559917 190.945312,158.398438 C190.591144,157.24739 190.414062,156.207036 190.414062,155.277344 L190.414062,154.945312 C190.414062,151.713526 191.919256,149.079437 194.929688,147.042969 C196.434903,146.069006 198.183584,145.582031 200.175781,145.582031 Z M217.441406,212.652344 L217.441406,241.140625 L245,241.140625 C251.817742,241.140625 256.466133,237.776075 258.945312,231.046875 C259.388023,229.453117 259.609375,228.10287 259.609375,226.996094 C259.609375,223.365867 258.170587,219.979182 255.292969,216.835938 C252.636705,214.046861 249.028669,212.652344 244.46875,212.652344 L217.441406,212.652344 Z",
    id: "path-2"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-23.1%",
    y: "-22.3%",
    width: "146.2%",
    height: "170.8%",
    filterUnits: "objectBoundingBox",
    id: "filter-3"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: "15",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "11",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-4",
    cx: "318.5",
    cy: "60.5",
    r: "55.5"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-65.8%",
    y: "-44.1%",
    width: "222.5%",
    height: "222.5%",
    filterUnits: "objectBoundingBox",
    id: "filter-5"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-5",
    dy: "19",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "19.5",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-6",
    cx: "319",
    cy: "61",
    r: "17"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-152.9%",
    y: "-111.8%",
    width: "388.2%",
    height: "388.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-7"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-3",
    dy: "11",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "14.5",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0.382304935 0 0 0 0 0.0324290316 0 0 0 0 0.516581633 0 0 0 0.654381793 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "path-8",
    cx: "63.5",
    cy: "348.5",
    r: "9.5"
  }), /*#__PURE__*/React.createElement("filter", {
    x: "-147.4%",
    y: "-89.5%",
    width: "363.2%",
    height: "363.2%",
    filterUnits: "objectBoundingBox",
    id: "filter-9"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dx: "-3",
    dy: "8",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    stdDeviation: "7",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.28161798 0",
    "in": "shadowBlurOuter1"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "79.408%",
    y1: "0%",
    x2: "6.263%",
    y2: "100%",
    id: "linearGradient-10"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#FF710F",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#CB16A9",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "EB-Logo",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "Group-5",
    transform: "translate(29 19)"
  }, /*#__PURE__*/React.createElement("circle", {
    id: "Oval-2",
    fill: "url(#linearGradient-1)",
    cx: "187",
    cy: "208",
    r: "187"
  }), /*#__PURE__*/React.createElement("g", {
    id: "EB"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-3)",
    xlinkHref: "#path-2"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-2"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3",
    opacity: "0.913"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-5)",
    xlinkHref: "#path-4"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-4"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-7)",
    xlinkHref: "#path-6"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#A43DFF",
    xlinkHref: "#path-6"
  })), /*#__PURE__*/React.createElement("g", {
    id: "Oval-3-Copy-2",
    opacity: "0.913",
    transform: "rotate(-7 63.5 348.5)"
  }, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#filter-9)",
    xlinkHref: "#path-8"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#path-8"
  })), /*#__PURE__*/React.createElement("circle", {
    id: "Oval-3-Copy-4",
    fill: "#F5A623",
    cx: "385",
    cy: "117",
    r: "12"
  }), /*#__PURE__*/React.createElement("circle", {
    id: "Oval-3-Copy-5",
    fill: "#D8D8D8",
    cx: "257",
    cy: "9",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M145.182623,334.548531 C139.966285,339.764869 137.156925,346.476118 136.753323,353.300766 C136.311922,360.746058 133.113592,367.759704 127.839945,373.033351 C122.604098,378.270418 115.653858,381.543128 108.259778,381.941852 C100.95349,382.335699 93.769137,385.480378 88.3930654,391.383204 C83.408402,396.856823 80.9099736,403.833889 80.8989995,410.813393 L80.8989995,410.914598 C80.9111929,417.89898 83.4144987,424.878484 88.4064781,430.352103 C99.6170933,442.645492 118.683918,442.977153 130.316425,431.343426 C135.532764,426.127088 138.340904,419.418278 138.745725,412.591191 C139.185907,405.144679 142.384237,398.132253 147.659103,392.857387 C152.894951,387.62032 159.843972,384.350049 167.239271,383.951325 C174.544339,383.557478 181.729912,380.41036 187.104764,374.508753 C192.077234,369.048547 194.575662,362.093429 194.59883,355.130996 L194.59883,354.934682 C194.575662,347.964933 192.073576,341.002499 187.092571,335.541074 C181.332407,329.223671 173.498145,326.06558 165.663883,326.06558 C158.251513,326.06558 150.839143,328.89323 145.182623,334.548531",
    id: "Fill-1",
    fill: "url(#linearGradient-10)",
    opacity: "0.898",
    transform: "rotate(34 137.749 382.946)"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M220.972652,42 C213.584652,42.035 207.609652,48.035 207.609652,55.43 C207.609652,58.85 208.887652,61.971 210.992652,64.341 C213.289652,66.927 214.540652,70.274 214.540652,73.732 L214.539652,73.732 C214.539652,76.922 213.499652,80.038 211.513652,82.514 C209.037652,84.5 205.920652,85.541 202.731652,85.541 C199.272652,85.541 195.925652,84.29 193.340652,81.994 C190.969652,79.888 187.849652,78.609 184.429652,78.609 C176.801652,78.609 170.659652,84.969 171.014652,92.675 C171.330652,99.551 176.908652,105.132 183.784652,105.454 C187.483652,105.627 190.869652,104.303 193.393652,102.036 C195.949652,99.743 199.300652,98.537 202.733652,98.537 C206.191652,98.537 209.539652,99.788 212.125652,102.085 C214.494652,104.189 217.614652,105.469 221.035652,105.469 C222.732652,105.469 224.354652,105.152 225.849652,104.578 C225.856652,104.576 225.863652,104.574 225.869652,104.57 C226.071652,104.492 226.271652,104.411 226.467652,104.323 C226.485652,104.315 226.501652,104.307 226.519652,104.299 C226.705652,104.216 226.888652,104.13 227.070652,104.038 C227.097652,104.024 227.125652,104.009 227.152652,103.995 C227.322652,103.908 227.489652,103.818 227.656652,103.725 C227.693652,103.704 227.729652,103.681 227.765652,103.659 C227.920652,103.569 228.073652,103.479 228.223652,103.384 C228.270652,103.355 228.315652,103.323 228.361652,103.292 C228.499652,103.202 228.637652,103.111 228.772652,103.017 C228.828652,102.977 228.882652,102.936 228.936652,102.896 C229.058652,102.806 229.181652,102.717 229.301652,102.623 C229.366652,102.572 229.427652,102.52 229.491652,102.468 C229.598652,102.381 229.705652,102.295 229.809652,102.205 C229.882652,102.143 229.952652,102.077 230.023652,102.013 C230.115652,101.931 230.207652,101.848 230.296652,101.763 C230.377652,101.687 230.452652,101.608 230.530652,101.531 C230.608652,101.454 230.686652,101.377 230.762652,101.298 C230.847652,101.208 230.929652,101.116 231.012652,101.024 C231.076652,100.952 231.141652,100.883 231.204652,100.811 C231.294652,100.706 231.380652,100.599 231.467652,100.492 C231.518652,100.429 231.572652,100.366 231.621652,100.302 C231.715652,100.182 231.805652,100.06 231.894652,99.938 C231.934652,99.882 231.976652,99.829 232.015652,99.774 C232.110652,99.639 232.201652,99.501 232.291652,99.362 C232.321652,99.317 232.353652,99.271 232.383652,99.224 C232.478652,99.074 232.569652,98.921 232.658652,98.767 C232.679652,98.73 232.702652,98.694 232.723652,98.656 C232.818652,98.491 232.906652,98.322 232.994652,98.152 C233.008652,98.125 233.022652,98.099 233.037652,98.071 C233.129652,97.89 233.214652,97.707 233.298652,97.519 C233.305652,97.503 233.314652,97.486 233.321652,97.469 C233.409652,97.272 233.491652,97.072 233.569652,96.871 L233.578652,96.851 C234.152652,95.356 234.467652,93.733 234.467652,92.037 C234.467652,88.617 233.189652,85.496 231.083652,83.125 C228.787652,80.54 227.536652,77.191 227.536652,73.733 C227.536652,70.301 228.741652,66.949 231.035652,64.395 C233.302652,61.87 234.625652,58.484 234.453652,54.786 C234.131652,47.91 228.550652,42.332 221.673652,42.015 C221.486652,42.006 221.299652,42.001 221.113652,42 L220.972652,42 Z",
    id: "Fill-1",
    fill: "#FFF",
    opacity: "0.097"
  }))));
};
var WrapperIcon = function WrapperIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 64 42",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "50%",
    y1: "-.962%",
    x2: "50%",
    y2: "102.035%",
    id: "linearGradient-1"
  }, /*#__PURE__*/React.createElement("stop", {
    stopColor: "#1A6DFF",
    offset: "0%"
  }), /*#__PURE__*/React.createElement("stop", {
    stopColor: "#C822FF",
    offset: "100%"
  }))), /*#__PURE__*/React.createElement("g", {
    id: "Page-1",
    fill: "none",
    fillRule: "evenodd"
  }, /*#__PURE__*/React.createElement("g", {
    id: "eb-wrapper",
    fill: "url(#linearGradient-1)",
    fillRule: "nonzero"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M3,0 C1.347656,0 0,1.347656 0,3 L0,27 C0,28.652344 1.347656,30 3,30 L20.050781,30 C20.566406,36.699219 26.171875,42 33,42 C39.828125,42 45.433594,36.699219 45.949219,30 L61,30 C62.652344,30 64,28.652344 64,27 L64,3 C64,1.347656 62.652344,0 61,0 L3,0 Z M3,2 L61,2 C61.550781,2 62,2.449219 62,3 L62,27 C62,27.550781 61.550781,28 61,28 L45.949219,28 C45.460938,21.628906 40.371094,16.539063 34,16.050781 L34,5 C34,4.449219 33.554688,4 33,4 C32.445313,4 32,4.449219 32,5 L32,16.050781 C25.628906,16.539063 20.539063,21.628906 20.050781,28 L3,28 C2.449219,28 2,27.550781 2,27 L2,3 C2,2.449219 2.449219,2 3,2 Z M5,4 C4.445313,4 4,4.449219 4,5 C4,5.550781 4.445313,6 5,6 L7,6 C7.554688,6 8,5.550781 8,5 C8,4.449219 7.554688,4 7,4 L5,4 Z M17,4 C16.445313,4 16,4.449219 16,5 L16,25 C16,25.550781 16.445313,26 17,26 C17.554688,26 18,25.550781 18,25 L18,5 C18,4.449219 17.554688,4 17,4 Z M49,4 C48.445313,4 48,4.449219 48,5 L48,25 C48,25.550781 48.445313,26 49,26 C49.554688,26 50,25.550781 50,25 L50,5 C50,4.449219 49.554688,4 49,4 Z M5,9 C4.445313,9 4,9.449219 4,10 C4,10.550781 4.445313,11 5,11 L7,11 C7.554688,11 8,10.550781 8,10 C8,9.449219 7.554688,9 7,9 L5,9 Z M5,14 C4.445313,14 4,14.449219 4,15 C4,15.550781 4.445313,16 5,16 L7,16 C7.554688,16 8,15.550781 8,15 C8,14.449219 7.554688,14 7,14 L5,14 Z M33,18 C39.066406,18 44,22.933594 44,29 C44,35.066406 39.066406,40 33,40 C26.933594,40 22,35.066406 22,29 C22,22.933594 26.933594,18 33,18 Z M5,19 C4.445313,19 4,19.449219 4,20 C4,20.550781 4.445313,21 5,21 L7,21 C7.554688,21 8,20.550781 8,20 C8,19.449219 7.554688,19 7,19 L5,19 Z M33,22 C32.445313,22 32,22.449219 32,23 L32,28 L27,28 C26.445313,28 26,28.449219 26,29 C26,29.550781 26.445313,30 27,30 L32,30 L32,35 C32,35.550781 32.445313,36 33,36 C33.554688,36 34,35.550781 34,35 L34,30 L39,30 C39.554688,30 40,29.550781 40,29 C40,28.449219 39.554688,28 39,28 L34,28 L34,23 C34,22.449219 33.554688,22 33,22 Z M5,24 C4.445313,24 4,24.449219 4,25 C4,25.550781 4.445313,26 5,26 L7,26 C7.554688,26 8,25.550781 8,25 C8,24.449219 7.554688,24 7,24 L5,24 Z",
    id: "Shape"
  }))));
};
var InstagramIcon = function InstagramIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    id: "\u0421\u043B\u043E\u0439_1",
    viewBox: "0 0 64 64"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "6.667",
    x2: "32",
    y2: "57.872",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44,57H20c-7.168,0-13-5.832-13-13V20c0-7.168,5.832-13,13-13h24c7.168,0,13,5.832,13,13v24 C57,51.168,51.168,57,44,57z M20,9C13.935,9,9,13.935,9,20v24c0,6.065,4.935,11,11,11h24c6.065,0,11-4.935,11-11V20 c0-6.065-4.935-11-11-11H20z",
    fill: "url(#SVGID_1__43625)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "32",
    y1: "18.167",
    x2: "32",
    y2: "45.679",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M32,45c-7.168,0-13-5.832-13-13c0-7.168,5.832-13,13-13c7.168,0,13,5.832,13,13 C45,39.168,39.168,45,32,45z M32,23c-4.962,0-9,4.038-9,9c0,4.963,4.038,9,9,9c4.963,0,9-4.037,9-9C41,27.038,36.963,23,32,23z",
    fill: "url(#SVGID_2__43625)"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3__43625",
    gradientUnits: "userSpaceOnUse",
    x1: "46",
    y1: "12.75",
    x2: "46",
    y2: "23.049",
    spreadMethod: "reflect"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#6dc7ff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#e6abff"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "46",
    cy: "18",
    r: "3",
    fill: "url(#SVGID_3__43625)"
  }));
};
var ImageGalleryIcon = function ImageGalleryIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_1_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "35.1",
    x2: "79.881",
    y2: "35.1"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st0g",
    d: "M66.1,2.1H-0.1c-0.9,0-1.6,0.7-1.6,1.6v31.4v31.4c0,0.9,0.7,1.6,1.6,1.6h66.2c0.9,0.2,1.6-0.5,1.6-1.4V35.3 V3.7C67.7,2.8,67,2.1,66.1,2.1z M64.6,36.9v5.8v22.5H1.5V33.8V23.5v-18h63.1V36.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_2_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st1g",
    d: "M12.4,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,31.9,10.8,33.2,12.4,33.2z M12,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V20.2z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_3_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st2g",
    d: "M12.4,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H12.4c-1.7,0-3,1.4-3,3v10C9.4,50.5,10.8,51.8,12.4,51.8z M12,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H12.4c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_4_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "43.836",
    x2: "79.881",
    y2: "43.836"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st3g",
    d: "M37.5,51.8h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,50.5,35.9,51.8,37.5,51.8 z M37.1,38.9c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4H37.5c-0.2,0-0.4-0.2-0.4-0.4V38.9z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_5_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "25.217",
    x2: "79.881",
    y2: "25.217"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st4g",
    d: "M37.5,33.2h15.7c1.7,0,3-1.4,3-3v-10c0-1.7-1.4-3-3-3H37.5c-1.7,0-3,1.4-3,3v10C34.5,31.9,35.9,33.2,37.5,33.2 z M37.1,20.2c0-0.2,0.2-0.4,0.4-0.4h15.7c0.2,0,0.4,0.2,0.4,0.4v10c0,0.2-0.2,0.4-0.4,0.4h0l-4.7-4.9h-0.1l-2.5,2.2l-3.2-4 c0,0,0,0-0.1,0c0,0,0,0-0.1,0l-5,6.7c-0.2-0.1-0.3-0.2-0.3-0.4V20.2z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_6_GALLERY",
    gradientUnits: "userSpaceOnUse",
    x1: "-11.021",
    y1: "22.534",
    x2: "79.881",
    y2: "22.534"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("path", {
    className: "st5g",
    d: "M48.1,23.8c0.7,0,1.2-0.6,1.2-1.2s-0.6-1.2-1.2-1.2s-1.2,0.6-1.2,1.2C46.8,23.1,47.3,23.8,48.1,23.8z"
  }));
};
var HeadingIcon = function HeadingIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 83 63"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "50%",
    x2: "50%",
    y1: "-13.261%",
    y2: "419.291%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "50%",
    x2: "50%",
    y1: "3.125%",
    y2: "96.88%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: "50%",
    x2: "50%",
    y1: ".781%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#6DC7FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#E6ABFF"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "50%",
    x2: "50%",
    y1: ".782%",
    y2: "100.93%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#C822FF"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    fillRule: "nonzero",
    d: "M72.056 0H10.944C7.115 0 4 3.072 4 6.848v49.304C4 59.928 7.115 63 10.944 63h61.112C75.885 63 79 59.928 79 56.152V6.848C79 3.072 75.885 0 72.056 0zm4.166 56.152c0 2.265-1.87 4.109-4.166 4.109H10.944c-2.297 0-4.166-1.844-4.166-4.109V6.848c0-2.265 1.87-4.109 4.166-4.109h61.112c2.297 0 4.166 1.844 4.166 4.109v49.304z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M77.5 26a5.506 5.506 0 00-5.5 5.5c0 3.033 2.467 5.5 5.5 5.5s5.5-2.467 5.5-5.5-2.467-5.5-5.5-5.5z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "77.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M5.5 26A5.506 5.506 0 000 31.5C0 34.533 2.467 37 5.5 37s5.5-2.467 5.5-5.5S8.533 26 5.5 26z"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "5.5",
    cy: "31.5",
    r: "2.5",
    fill: "url(#c)"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("path", {
    fill: "url(#d)",
    d: "M3 12.667h14.452V19H3v-6.333zm30.968-4.223l-6.194 4.223H25.71V6.333L33.968 0H35v8.444h-1.032z",
    transform: "translate(22 17)"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#e)",
    d: "M0 0h6v30H0V0zm16 0h6v30h-6V0zm18 0h6v30h-6V0z",
    transform: "translate(22 17)"
  }))));
};
var SliderIcon = function SliderIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-68.872",
    x2: "-62.187",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "matrix(-1 0 0 1 1.128 0)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M64.8 40.6c-.4 0-.7-.1-1-.4-.6-.6-.6-1.5 0-2.1l2.4-2.5-2.3-3.4c-.5-.7-.3-1.6.4-2.1s1.6-.3 2.1.4l3.6 5.4-4.1 4.3c-.3.2-.7.4-1.1.4z",
    className: "st0"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-132.008",
    x2: "-125.322",
    y1: "35.19",
    y2: "35.19",
    gradientTransform: "translate(132.008)",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M5.2 40.6c-.4 0-.8-.2-1.1-.5L0 35.8l3.6-5.4c.5-.7 1.4-.9 2.1-.4.7.5.9 1.4.4 2.1l-2.3 3.4L6.3 38c.6.6.6 1.5 0 2.1-.4.3-.7.5-1.1.5z",
    className: "st1"
  })), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "10.48",
    x2: "59.603",
    y1: "35",
    y2: "35",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M53 65.2H17.1c-3.6 0-6.6-3-6.6-6.6V11.4c0-3.6 3-6.6 6.6-6.6H53c3.6 0 6.6 3 6.6 6.6v47.2c0 3.6-3 6.6-6.6 6.6zM17.1 7.8c-2 0-3.6 1.6-3.6 3.6v47.2c0 2 1.6 3.6 3.6 3.6H53c2 0 3.6-1.6 3.6-3.6V11.4c0-2-1.6-3.6-3.6-3.6H17.1z",
    className: "st2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "10.809",
    x2: "59.152",
    y1: "40.508",
    y2: "40.508",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_4_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M33.2 53.8L23 41.3 13.2 53.7 10.8 51.8 23 36.6 33.5 49.4 57.1 27.2 59.2 29.4z",
    className: "st3"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "39.404",
    x2: "49.259",
    y1: "21.195",
    y2: "21.195",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_5_SLIDER"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M44.3 26.1c-2.7 0-4.9-2.2-4.9-4.9s2.2-4.9 4.9-4.9 4.9 2.2 4.9 4.9c.1 2.7-2.2 4.9-4.9 4.9zm0-7c-1.2 0-2.1 1-2.1 2.1 0 1.2 1 2.1 2.1 2.1s2.1-1 2.1-2.1c.1-1.2-.9-2.1-2.1-2.1z",
    className: "st4"
  }))));
};
var TypingTextIcon = function TypingTextIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 70 70",
    version: "1.1",
    viewBox: "0 0 70 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.082",
    x2: "86.557",
    y1: "32.808",
    y2: "37.212",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_1_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M63.4 0H6.6C3 0 0 3 0 6.6v56.8C0 67 3 70 6.6 70h56.8c3.6 0 6.6-3 6.6-6.6V6.6C70 3 67 0 63.4 0zM67 63.4c0 2-1.6 3.6-3.6 3.6H6.6c-2 0-3.6-1.6-3.6-3.6V6.6C3 4.6 4.6 3 6.6 3h56.8c2 0 3.6 1.6 3.6 3.6v56.8z",
    className: "st0t"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.763",
    x2: "85.875",
    y1: "48.693",
    y2: "53.097",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_2_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58.8 50.1H44.9c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h13.9c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z",
    className: "st1t"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    x1: "-16.087",
    x2: "86.551",
    y1: "32.94",
    y2: "37.344",
    gradientUnits: "userSpaceOnUse",
    id: "SVGID_3_TYPED"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M45.4 25.2v-6.1c0-1.3-1.2-2.2-2.2-2.2H11.9c-1.3 0-2.2 1.2-2.2 2.2v6.1c0 .7.3 1.3.7 1.6.4.4 1.1.7 1.6.7h2.7c1.3 0 2.2-1.2 2.2-2.2v-.8H24V46h-3.2c-1.3 0-2.2 1.2-2.2 2.2v2.7c0 1.3 1.2 2.2 2.2 2.2H35c1.3 0 2.2-1.2 2.2-2.2v-2.6c.1-.5-.1-1-.5-1.4-.4-.5-1-.8-1.7-.8h-3.8V24.4h7.1v.8c0 1.3 1.2 2.2 2.2 2.2h2.7c1.3 0 2.2-1.1 2.2-2.2zm-5.9-3.3H30c-.7 0-1.2.5-1.2 1.2v24.1c0 .7.5 1.2 1.2 1.2h4.8v2.2H21.1v-2.2h4.2c.7 0 1.2-.5 1.2-1.2v-24c0-.7-.5-1.2-1.2-1.2h-9.6c-.7 0-1.2.5-1.2 1.2V25h-2.4v-5.7H43v5.6h-2.2v-1.8c-.1-.6-.6-1.2-1.3-1.2z",
    className: "st2t"
  }));
};
var InstagramOriginalIcon = function InstagramOriginalIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    id: "SVG_INS_ORG"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "-46.004",
    x2: "-32.933",
    y1: "634.121",
    y2: "647.192",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#a)",
    d: "M352 0H160C71.648 0 0 71.648 0 160v192c0 88.352 71.648 160 160 160h192c88.352 0 160-71.648 160-160V160C512 71.648 440.352 0 352 0zm112 352c0 61.76-50.24 112-112 112H160c-61.76 0-112-50.24-112-112V160C48 98.24 98.24 48 160 48h192c61.76 0 112 50.24 112 112v192z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "b",
    x1: "-42.297",
    x2: "-36.64",
    y1: "637.828",
    y2: "643.485",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("path", {
    fill: "url(#b)",
    d: "M256 128c-70.688 0-128 57.312-128 128s57.312 128 128 128 128-57.312 128-128-57.312-128-128-128zm0 208c-44.096 0-80-35.904-80-80 0-44.128 35.904-80 80-80s80 35.872 80 80c0 44.096-35.904 80-80 80z"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "c",
    x1: "-35.546",
    x2: "-34.792",
    y1: "644.579",
    y2: "645.333",
    gradientTransform: "matrix(32 0 0 -32 1519 20757)",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#FFC107"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.507",
    stopColor: "#F44336"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "0.99",
    stopColor: "#9C27B0"
  })), /*#__PURE__*/React.createElement("circle", {
    cx: "393.6",
    cy: "118.4",
    r: "17.056",
    fill: "url(#c)"
  }));
};
var SaveIcon = function SaveIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 500 500",
    version: "1.1",
    viewBox: "0 0 500 500",
    xmlSpace: "preserve",
    className: "eb-instagram-save-icon"
  }, /*#__PURE__*/React.createElement("path", {
    id: "INS_SAVE",
    d: "M156.4 348c-2.1 0-4.2-.4-6.1-1.4-5.1-2.4-8.4-7.6-8.4-13.2V101.3c0-10.8 8.8-19.7 19.7-19.7h190.6c10.8 0 19.6 8.8 19.6 19.7v232.1c0 5.6-3.3 10.8-8.4 13.2-5.1 2.4-11.2 1.6-15.5-2.1l-91-76.4-91 76.4c-2.8 2.3-6.1 3.5-9.5 3.5zm-6.4-22.3zm213.6 0zm-106.8-85.3c3.4 0 6.7 1.2 9.5 3.5l80.8 67.9V106.3H166.5v205.5l80.9-67.9c2.7-2.3 6-3.5 9.4-3.5zm-6.4 22.3zm12.8 0z",
    className: "st0"
  }));
};
var ParallaxSliderIcon = function ParallaxSliderIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 66 70",
    version: "1.1",
    viewBox: "0 0 66 70",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_1",
    x1: "-16.218",
    x2: "89.025",
    y1: "15.344",
    y2: "18.043",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M68.4 13c-.3-.4-.7-.6-1.1-.6-.3 0-.5.1-.8.2-.6.5-.8 1.3-.4 1.9l2.3 3.3-2.4 2.5c-.5.5-.5 1.3 0 1.9.2.2.6.4.9.4.3 0 .7-.2 1-.5l3.9-4.1-3.4-5z",
    className: "parallax-st0"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_2",
    x1: "-17.074",
    x2: "88.169",
    y1: "48.75",
    y2: "51.448",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M3.5 49.7l2.3-3.3c.4-.6.3-1.4-.4-1.9-.2-.2-.5-.2-.8-.2-.4 0-.9.2-1.1.6l-3.4 5 3.9 4c.3.3.6.5 1 .5.3 0 .7-.1.9-.4.5-.5.5-1.3 0-1.9l-2.4-2.4z",
    className: "parallax-st1"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_3",
    x1: "-16.667",
    x2: "88.576",
    y1: "32.874",
    y2: "35.573",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M58 2L17.4.3c-2.7 0-4.8 2.2-4.8 4.8L10 62.3c0 2.7 2.2 4.8 4.8 4.8h.1l35.8-2.8h.1c2.5-.4 4.1-2 4.6-4.6L61 19l.5-3.6L62.7 7v-.2C62.7 4.1 60.6 2 58 2zm-7.6 59.5l-35.6 2.8c-1.1 0-1.9-.9-1.9-1.9l.7-15.9L26 32l9.5 16.6 21.9-24.2-3.6 26.1-1.2 8.8c-.3 1.3-.9 1.9-2.2 2.2zM36 43.7L26.5 27 13.8 41.8l1.6-36.7c0-1.1.9-2 1.9-2l40.6 1.7c1 0 1.9.8 1.9 1.9L58 19.3 36 43.7z",
    className: "parallax-st2"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_4",
    x1: "-17.353",
    x2: "87.89",
    y1: "59.614",
    y2: "62.312",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M60.5 52.9c-.6-.1-1.3.4-1.4 1l-1.6 10.8c-.2 1-1 1.8-2.1 1.9l-9.8.9c-.7.1-1.1.6-1.1 1.3.1.6.6 1.1 1.2 1.1h.1l9.8-.9c2.2-.2 3.9-1.8 4.2-4l1.6-10.8c.2-.6-.3-1.2-.9-1.3z",
    className: "parallax-st3"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "SVGID_PARA_5",
    x1: "-16.284",
    x2: "88.959",
    y1: "17.925",
    y2: "20.623",
    gradientUnits: "userSpaceOnUse"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1A6DFF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#C822FF"
  })), /*#__PURE__*/React.createElement("path", {
    d: "M42.8 17.1c-.1-.3-.3-.5-.5-.8-.2-.2-.3-.4-.5-.5-.2-.1-.3-.3-.5-.4-.2-.1-.3-.2-.5-.3-.2-.1-.3-.2-.5-.2-.2-.1-.3-.1-.5-.1-.1 0-.2-.1-.3-.1h-.7c-.2 0-.4 0-.5.1-.2 0-.4.1-.5.2-.2.1-.4.2-.5.3-.2.1-.4.2-.5.4-.2.2-.4.3-.5.5-.2.2-.4.5-.6.8-.3.5-.5 1-.6 1.6 0 .2-.1.5-.1.7v1.1c.1.6.2 1.1.5 1.5.1.3.3.5.5.8.2.2.3.4.5.5.2.1.3.2.5.4.2.1.3.2.5.3.2.1.3.1.5.2h1.1c.2 0 .4 0 .5-.1.2 0 .4-.1.5-.1.2-.1.4-.1.5-.2.2-.1.4-.2.5-.3.2-.1.4-.3.5-.4.2-.2.4-.3.5-.5.2-.2.4-.5.6-.8.3-.4.5-.9.6-1.4 0-.2.1-.4.1-.6v-1c-.2-.7-.4-1.2-.6-1.6zM40.5 20c-.1.3-.3.5-.6.7-.2.1-.3.2-.5.3-.2.1-.3.1-.5.1h-.1c-.2 0-.3 0-.5-.1s-.4-.2-.5-.3c-.2-.2-.4-.5-.5-.8-.1-.2-.1-.5-.1-.8 0-.2.1-.4.2-.6.1-.3.3-.6.6-.8.2-.1.3-.3.5-.3.2-.1.3-.1.5-.1h.1c.2 0 .3 0 .4.1.2.1.4.2.5.3.2.2.4.4.5.7.1.2.1.5.1.8.1.3 0 .6-.1.8z",
    className: "parallax-st4"
  }));
};
var CategoryIcon = function CategoryIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    className: "eb-category-icon",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    width: "20",
    height: "20",
    viewBox: "0 0 374 374"
  }, /*#__PURE__*/React.createElement("defs", null, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a",
    x1: "50%",
    x2: "50%",
    y1: "0%",
    y2: "100%"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0%",
    stopColor: "#2460FF"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "100%",
    stopColor: "#B80AFF"
  })), /*#__PURE__*/React.createElement("path", {
    id: "c",
    d: "M135.028 96h103.944l.497.21h.373c6.217 0 11.273 2.692 15.169 8.077 1.326 2.237 1.989 4.545 1.989 6.923 0 5.804-3.398 10.28-10.195 13.426-2.321.91-4.642 1.364-6.963 1.364H133.909c-4.973 0-9.366-1.923-13.179-5.77-2.487-2.796-3.73-5.664-3.73-8.6v-1.26c0-4.615 2.735-8.566 8.206-11.853 2.984-1.538 5.927-2.307 8.828-2.307h.497l.497-.21zm1.242 77l58.078.214c3.862 0 7.995 1.568 12.397 4.705 3.503 3.208 5.255 6.701 5.255 10.48 0 5.275-3.1 9.588-9.298 12.939-3.054 1.425-6.019 2.138-8.893 2.138h-58.752c-5.75 0-10.735-2.281-14.958-6.844-2.066-2.566-3.099-5.132-3.099-7.699v-1.283c0-4.848 3.19-9.018 9.567-12.511 3.234-1.284 6.289-1.925 9.163-1.925h.27c.18 0 .27-.071.27-.214zm105.362 0h.736c5.685 0 10.14 2.968 13.369 8.905.842 2.12 1.263 4.17 1.263 6.148 0 5.936-2.912 10.495-8.737 13.675-2.105.848-3.965 1.272-5.579 1.272h-1.473c-4.772 0-8.843-2.509-12.211-7.527-1.333-2.544-2-5.052-2-7.526 0-5.795 2.877-10.318 8.632-13.569 2.175-.919 4.175-1.378 6-1.378zm-106.604 75h103.944c0 .141 1.284.318 3.854.53 4.31.919 7.584 2.58 9.822 4.982 2.901 2.898 4.352 6.22 4.352 9.965 0 5.724-3.398 10.247-10.195 13.569-2.073.636-3.482.954-4.228.954H131.423c-2.901 0-6.383-1.66-10.444-4.982-2.653-3.04-3.979-6.113-3.979-9.223v-.954c0-5.23 3.108-9.505 9.325-12.827 1.824-.919 4.642-1.555 8.455-1.908 0-.07.083-.106.248-.106z"
  }), /*#__PURE__*/React.createElement("filter", {
    id: "b",
    width: "157.9%",
    height: "144.5%",
    x: "-28.9%",
    y: "-14%",
    filterUnits: "objectBoundingBox"
  }, /*#__PURE__*/React.createElement("feOffset", {
    dy: "15",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), /*#__PURE__*/React.createElement("feGaussianBlur", {
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1",
    stdDeviation: "11"
  }), /*#__PURE__*/React.createElement("feColorMatrix", {
    "in": "shadowBlurOuter1",
    values: "0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
  }))), /*#__PURE__*/React.createElement("g", {
    fill: "none",
    fillRule: "evenodd",
    stroke: "none",
    strokeWidth: "1"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(-69 -69)"
  }, /*#__PURE__*/React.createElement("g", {
    transform: "translate(69 69)"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "187",
    cy: "187",
    r: "187",
    fill: "url(#a)"
  }), /*#__PURE__*/React.createElement("g", null, /*#__PURE__*/React.createElement("use", {
    fill: "#000",
    filter: "url(#b)",
    xlinkHref: "#c"
  }), /*#__PURE__*/React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#c"
  }))))));
};
var ToggleContentIcon = function ToggleContentIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    viewBox: "0 0 66 70"
  }, /*#__PURE__*/React.createElement("linearGradient", {
    id: "a"
  }, /*#__PURE__*/React.createElement("stop", {
    offset: "0",
    stopColor: "#1a6dff"
  }), /*#__PURE__*/React.createElement("stop", {
    offset: "1",
    stopColor: "#c822ff"
  })), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-b",
    x1: "1.959",
    x2: "68.382",
    y1: "47.1",
    y2: "47.1",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "toggle-c",
    x1: "1.959",
    x2: "68.382",
    y1: "47.15",
    y2: "47.15",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "d",
    x1: "1.959",
    x2: "68.382",
    y1: "7.5",
    y2: "7.5",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "e",
    x1: "1.959",
    x2: "68.382",
    y1: "7.6",
    y2: "7.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "f",
    x1: "1.959",
    x2: "68.382",
    y1: "36.6",
    y2: "36.6",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "g",
    x1: "1.959",
    x2: "68.382",
    y1: "43.3",
    y2: "43.3",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("linearGradient", {
    id: "h",
    x1: "1.959",
    x2: "68.382",
    y1: "49.95",
    y2: "49.95",
    gradientUnits: "userSpaceOnUse",
    xlinkHref: "#a"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-b)",
    d: "M26.5 24.2H4.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2 1.6 3.6 3.7 3.6h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c-.1-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H4.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#toggle-c)",
    d: "M61.5 24.2H39.6c-2.1 0-3.7 1.6-3.7 3.7v38.5c0 2.1 1.6 3.7 3.7 3.7h21.9c2.1 0 3.7-1.6 3.7-3.7V28.1c.2-2.3-1.7-3.9-3.7-3.9zm.9 42.1c0 .5-.5.9-.9.9H39.6c-.5 0-.9-.5-.9-.9V28.1c0-.5.5-.9.9-.9h21.9c.5 0 .9.5.9.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#d)",
    d: "M24.8 15h18.9c2.1 0 3.9-1.6 3.9-3.9V3.9C47.6 1.8 46 0 43.7 0H24.8c-2 0-3.9 1.6-3.9 3.9V11c0 2.4 1.6 4 3.9 4zM23.7 4.1c0-.5.5-.9.9-.9h18.9c.5 0 .9.5.9.9v7.1c0 .5-.5.9-.9.9H24.6c-.5 0-.9-.5-.9-.9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#e)",
    d: "M36.8 10.4H42.3V4.8H36.8V9z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M56.6 35.2H44.4V38H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M56.6 41.9H44.4v2.8H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M56.6 48.6H44.4v2.7H56.6z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#f)",
    d: "M21.4 35.2H9.2V38H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#g)",
    d: "M21.4 41.9H9.2v2.8H21.6v-2.8z"
  }), /*#__PURE__*/React.createElement("path", {
    fill: "url(#h)",
    d: "M21.4 48.6H9.2v2.7H21.6v-2.7z"
  }));
};
var TypographyIcon = function TypographyIcon() {
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve",
    style: {
      width: 14
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M92.6 431.3c5.1 0 6.1-.5 10.7-1.5l91.9-18.4c9.7-2.5 19.4-7.1 27.1-14.8L444.9 174c34.2-34.2 34.2-92.9 0-127.1L426 27c-34.2-34.2-93.4-34.2-127.6 0L75.8 250.1c-7.2 7.1-12.3 17.4-14.8 27.1l-19.4 92.9c-2.5 17.4 2.6 34.2 14.8 46.5 9.7 9.6 24 14.7 36.2 14.7zM110 286.9L332.6 63.8c14.8-14.8 41.9-14.8 56.2 0l19.4 19.4c17.4 17.4 17.4 41.9 0 58.7L186.1 365l-94.4 15.8 18.3-93.9zm0 0M442.8 463H66.1c-14.8 0-24.5 9.7-24.5 24.5S53.9 512 66.1 512h374.7c14.8 0 27.1-9.7 27.1-24.5-.6-14.8-12.8-24.5-25.1-24.5zm0 0",
    className: "eb-typography-icon"
  }));
};
var UserIcon = function UserIcon(_ref) {
  var color = _ref.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    style: {
      width: 24
    },
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    fill: color || "#b7b7b7",
    d: "M175.4 249c22.6 16.5 50.5 26.1 80.6 26.1 73.5 0 137.6-63.6 137.6-137.6C393.6 61.7 331.9 0 256 0S118.4 61.7 118.4 137.6c0 45.7 22.4 86.4 57 111.4zm0 0M407.4 285.6c-38.9 39.8-92.8 64.9-151.4 64.9-45.3 0-88.5-14-124.8-40.5-9.9-7.2-19.1-15.1-27.5-23.7C41.2 332.9.5 407.4.5 491.3c0 10.8 8.8 19.7 19.7 19.7h471.6c10.8 0 19.7-8.8 19.7-19.7 0-84.3-41-159.2-104.1-205.7z"
  }));
};
var LeftAlignIcon = function LeftAlignIcon(_ref2) {
  var color = _ref2.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M224.9 72.9H36.3C16.3 72.9 0 89.2 0 109.2c0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M372.5 205.9H36.3c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.4-36.3-36.3-36.3zm0 0M475.7 339H36.3C16.3 339 0 355.3 0 375.3c0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var RightAlignIcon = function RightAlignIcon(_ref3) {
  var color = _ref3.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M475.7 78.1H235.1c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h240.6c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 211.2H115.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h359.8c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 344.2H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var CenterAlignIcon = function CenterAlignIcon(_ref4) {
  var color = _ref4.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M350.3 86.6H161.7c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h188.6c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M424.1 219.7H87.9c-20 0-36.3 16.3-36.3 36.3 0 19.9 16.3 36.3 36.3 36.3h336.2c19.9 0 36.3-16.3 36.3-36.3 0-20-16.4-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};
var JustifyAlignIcon = function JustifyAlignIcon(_ref5) {
  var color = _ref5.color;
  return /*#__PURE__*/React.createElement("svg", {
    xmlns: "http://www.w3.org/2000/svg",
    x: "0",
    y: "0",
    enableBackground: "new 0 0 512 512",
    version: "1.1",
    viewBox: "0 0 512 512",
    xmlSpace: "preserve"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M475.7 86.6H36.3C16.3 86.6 0 103 0 122.9s16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-19.9-16.3-36.3-36.3-36.3zm0 0M475.7 219.7H36.3C16.3 219.7 0 236 0 256c0 19.9 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0M475.7 352.8H36.3c-20 0-36.3 16.3-36.3 36.3 0 20 16.3 36.3 36.3 36.3h439.4c19.9 0 36.3-16.3 36.3-36.3 0-20-16.3-36.3-36.3-36.3zm0 0",
    fill: color || "#a9a9a9"
  }));
};

/***/ }),

/***/ "./util/image-avatar/ImageAvater.js":
/*!******************************************!*\
  !*** ./util/image-avatar/ImageAvater.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/image-avatar/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var useState = wp.element.useState;

var ImageAvater = function ImageAvater(_ref) {
  var imageUrl = _ref.imageUrl,
      onDeleteImage = _ref.onDeleteImage;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      deleteHover = _useState4[0],
      setDeleteHover = _useState4[1];

  var deleteButtonStyle = {
    visibility: hover ? "visible" : "hidden",
    backgroundColor: deleteHover ? "white" : "#64666a",
    color: "#b4b5b7",
    position: "absolute",
    right: 34,
    fontSize: 16,
    alignSelf: "center",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 3,
    cursor: "pointer"
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "image-avatar",
    style: {
      backgroundImage: "url(".concat(imageUrl, ")")
    },
    onMouseEnter: function onMouseEnter() {
      return setHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setHover(false);
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "image-avatar-delete dashicons dashicons-trash",
    onMouseEnter: function onMouseEnter() {
      return setDeleteHover(true);
    },
    onMouseLeave: function onMouseLeave() {
      return setDeleteHover(false);
    },
    style: deleteButtonStyle,
    onClick: function onClick() {
      return onDeleteImage();
    }
  }));
};

ImageAvater.propTypes = {
  imageUrl: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.string.isRequired,
  onDeleteImage: prop_types__WEBPACK_IMPORTED_MODULE_0___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (ImageAvater);

/***/ }),

/***/ "./util/reset-control/index.js":
/*!*************************************!*\
  !*** ./util/reset-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ResetControl = function ResetControl(_ref) {
  var onReset = _ref.onReset,
      children = _ref.children;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "eb-range-controller-container"
  }, children, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "eb-range-reset-button",
    onClick: onReset
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "dashicon dashicons dashicons-image-rotate"
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (ResetControl);

/***/ }),

/***/ "./util/toggle-button/index.js":
/*!*************************************!*\
  !*** ./util/toggle-button/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./util/toggle-button/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_1__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      focusColor = _ref.focusColor,
      onChange = _ref.onChange,
      defaultSelect = _ref.defaultSelect;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSelect || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(selected.value);
  }, [selected]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option, index) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
      className: index ? "individual" : "business",
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control/FontPicker.js":
/*!***********************************************!*\
  !*** ./util/typography-control/FontPicker.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control/constants.js");
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

/**
 * Internal dependencies
 */

/**
 * WordPress dependencies
 */

var __ = wp.i18n.__;
var withInstanceId = wp.compose.withInstanceId;
var BaseControl = wp.components.BaseControl;

function FontFamilyPicker(_ref) {
  var label = _ref.label,
      value = _ref.value,
      help = _ref.help,
      instanceId = _ref.instanceId,
      onChange = _ref.onChange,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["label", "value", "help", "instanceId", "onChange", "className"]);

  var id = "inspector-eb-font-family-".concat(instanceId);
  var fonts = [{
    value: "",
    label: __("Default")
  }, {
    value: "Arial",
    label: "Arial"
  }, {
    value: "Helvetica",
    label: "Helvetica"
  }, {
    value: "Times New Roman",
    label: "Times New Roman"
  }, {
    value: "Georgia",
    label: "Georgia"
  }]; //Add Google Fonts

  Object.keys(_constants__WEBPACK_IMPORTED_MODULE_0__["FONTS"]).map(function (k) {
    fonts.push({
      value: k,
      label: k
    });
  });

  var onChangeValue = function onChangeValue(event) {
    var meta = wp.data.select("core/editor").getEditedPostAttribute("meta");
    var ba = "";
    var googleFontsAttr = ":100,100italic,200,200italic,300,300italic,400,400italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic";
    var link = document.createElement("link");
    link.rel = "stylesheet";

    if (typeof meta !== "undefined" && typeof meta._eb_attr !== "undefined") {
      ba = meta._eb_attr;
    }

    if (ba.length > 0) {
      //Load fonts on the header
      if (!ba.includes(event.target.value)) {
        link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
        document.head.appendChild(link);
      }

      ba = ba.replace("," + event.target.value, "");
      ba = ba + "," + event.target.value;
    } else {
      link.href = "https://fonts.googleapis.com/css?family=" + event.target.value.replace(/ /g, "+") + googleFontsAttr;
      document.head.appendChild(link);
      ba = event.target.value;
    } //Save values to metadata


    wp.data.dispatch("core/editor").editPost({
      meta: {
        _eb_attr: ba
      }
    });
    onChange(event.target.value);
  };

  return /*#__PURE__*/React.createElement(BaseControl, {
    label: label,
    id: id,
    help: help,
    className: className
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: id,
    className: "components-select-control__input",
    onChange: onChangeValue,
    "aria-describedby": !!help ? "".concat(id, "__help") : undefined
  }, props), fonts.map(function (option, index) {
    return /*#__PURE__*/React.createElement("option", {
      key: "".concat(option.label, "-").concat(option.value, "-").concat(index),
      value: option.value,
      selected: value === option.value ? "selected" : ""
    }, option.label);
  })));
}

/* harmony default export */ __webpack_exports__["default"] = (withInstanceId(FontFamilyPicker));

/***/ }),

/***/ "./util/typography-control/constants.js":
/*!**********************************************!*\
  !*** ./util/typography-control/constants.js ***!
  \**********************************************/
/*! exports provided: FONTS, WEIGHTS, TRANSFORMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WEIGHTS", function() { return WEIGHTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSFORMS", function() { return TRANSFORMS; });
var __ = wp.i18n.__;
var FONTS = {
  "Abril Fatface": {
    weight: ["400"]
  },
  Anton: {
    weight: ["400"]
  },
  Arvo: {
    weight: ["400", "700"]
  },
  Asap: {
    weight: ["400", "500", "600", "700"]
  },
  "Barlow Condensed": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Barlow: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Cormorant Garamond": {
    weight: ["300", "400", "500", "600", "700"]
  },
  Faustina: {
    weight: ["400", "500", "600", "700"]
  },
  "Fira Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "IBM Plex Sans": {
    weight: ["100", "200", "300", "400", "500", "600", "700"]
  },
  Inconsolata: {
    weight: ["400", "700"]
  },
  Heebo: {
    weight: ["100", "300", "400", "500", "700", "800", "900"]
  },
  Karla: {
    weight: ["400", "700"]
  },
  Lato: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  Lora: {
    weight: ["400", "700"]
  },
  Merriweather: {
    weight: ["300", "400", "500", "600", "700", "800", "900"]
  },
  Montserrat: {
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
  },
  "Noto Sans": {
    weight: ["400", "700"]
  },
  "Noto Serif": {
    weight: ["400", "700"]
  },
  "Open Sans": {
    weight: ["300", "400", "500", "600", "700", "800"]
  },
  Oswald: {
    weight: ["200", "300", "400", "500", "600", "700"]
  },
  "Playfair Display": {
    weight: ["400", "700", "900"]
  },
  "PT Serif": {
    weight: ["400", "700"]
  },
  Roboto: {
    weight: ["100", "300", "400", "500", "700", "900"]
  },
  Rubik: {
    weight: ["300", "400", "500", "700", "900"]
  },
  Tajawal: {
    weight: ["200", "300", "400", "500", "700", "800", "900"]
  },
  Ubuntu: {
    weight: ["300", "400", "500", "700"]
  },
  Yrsa: {
    weight: ["300", "400", "500", "600", "700"]
  }
};
var WEIGHTS = [{
  label: __("Default"),
  value: ""
}, {
  label: __("Normal"),
  value: "normal"
}, {
  label: __("Bold"),
  value: "bold"
}];
var TRANSFORMS = [{
  label: __("None"),
  value: ""
}, {
  label: __("AA"),
  value: "uppercase"
}, {
  label: __("aa"),
  value: "lowercase"
}, {
  label: __("Aa"),
  value: "capitalize"
}];


/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./util/unit-control/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);



/**
 * WordPress dependencies
 */

var _wp$components = wp.components,
    ButtonGroup = _wp$components.ButtonGroup,
    Button = _wp$components.Button;

var UnitControl = function UnitControl(_ref) {
  var selectedUnit = _ref.selectedUnit,
      unitTypes = _ref.unitTypes,
      _onClick = _ref.onClick;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

UnitControl.propTypes = {
  selectedUnit: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string.isRequired,
  unitTypes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.shape({
    label: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string,
    value: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.string
  }),
  onClick: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "react":
/*!*********************************!*\
  !*** external {"this":"React"} ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map