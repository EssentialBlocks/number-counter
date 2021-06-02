(window["webpackJsonp_counter"] = window["webpackJsonp_counter"] || []).push([["style-index"],{

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
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
/******/ 	var jsonpArray = window["webpackJsonp_counter"] = window["webpackJsonp_counter"] || [];
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

/***/ "./src/ResPanelBody.js":
/*!*****************************!*\
  !*** ./src/ResPanelBody.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);


function ResPanelBody(props) {
  // console.log("----------ResPanelBody", { props });
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

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["PanelBody"], {
    title: title,
    initialOpen: initialOpen
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-resButtons"
  }, /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-desktop ".concat(resOption == "desktop" && "active"),
    onClick: handleDesktopBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-desktop"
  })), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-tab ".concat(resOption == "tab" && "active"),
    onClick: handleTabBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-tablet"
  })), /*#__PURE__*/React.createElement("button", {
    className: "eb-res-btn eb-res-btn-mobile ".concat(resOption == "mobile" && "active"),
    onClick: handleMobileBtnClick
  }, /*#__PURE__*/React.createElement("span", {
    "class": "dashicons dashicons-smartphone"
  }))), children));
}

/* harmony default export */ __webpack_exports__["default"] = (ResPanelBody);

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "desktop"
  },
  // blockId attribute for making unique className and other uniqueness ⬇
  blockId: {
    type: "string"
  },
  blockRoot: {
    type: "string",
    "default": "essential_block"
  },
  // blockMeta is for keeping all the styles ⬇
  blockMeta: {
    type: "object"
  },
  // counter settings attributes ⬇
  startValue: {
    type: "string",
    "default": "0"
  },
  target: {
    type: "string",
    "default": "50000"
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
    type: "string"
  },
  // color attributes ⬇
  titleColor: {
    type: "string" // default: "#566162",

  },
  numberColor: {
    type: "string" // default: "#3074ff",

  },
  numPrefixColor: {
    type: "string" // default: "#3074ff",

  },
  numSuffixColor: {
    type: "string" // default: "#3074ff",

  },
  // spacing attributes ⬇
  gapNumTitle: {
    type: "number"
  },
  gapNumPrefix: {
    type: "number"
  },
  gapNumSuffix: {
    type: "number"
  },
  TABgapNumTitle: {
    type: "number"
  },
  TABgapNumPrefix: {
    type: "number"
  },
  TABgapNumSuffix: {
    type: "number"
  },
  MOBgapNumTitle: {
    type: "number"
  },
  MOBgapNumPrefix: {
    type: "number"
  },
  MOBgapNumSuffix: {
    type: "number"
  }
}, Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateTypographyAttributes"])(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__["wrapperMargin"])), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateDimensionsAttributes"])(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__["wrapperPadding"], {
  top: 30,
  bottom: 30,
  right: 10,
  left: 10
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBackgroundAttributes"])(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__["WrapBg"], {
  isBgDefaultGradient: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
})), Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["generateBorderShadowAttributes"])(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__["wrpBdShadow"])));

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/*! exports provided: WrapBg */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WrapBg", function() { return WrapBg; });
// each and every const here has to be totally unique from one another
var WrapBg = "wrpBG_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/*! exports provided: wrpBdShadow */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrpBdShadow", function() { return wrpBdShadow; });
var wrpBdShadow = "wrp_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/*! exports provided: wrapperMargin, wrapperPadding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperMargin", function() { return wrapperMargin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "wrapperPadding", function() { return wrapperPadding; });
var wrapperMargin = "wrapperMargin";
var wrapperPadding = "wrapperPadding";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
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

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/*! exports provided: typoPrefix_title, typoPrefix_number, typoPrefix_numPrefix, typoPrefix_numSuffix */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_title", function() { return typoPrefix_title; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_number", function() { return typoPrefix_number; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_numPrefix", function() { return typoPrefix_numPrefix; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "typoPrefix_numSuffix", function() { return typoPrefix_numSuffix; });
var typoPrefix_title = "title";
var typoPrefix_number = "number";
var typoPrefix_numPrefix = "prefix";
var typoPrefix_numSuffix = "suffix";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor.scss */ "./src/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _util_helpers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/helpers */ "./util/helpers/index.js");
function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */








var Edit = function Edit(props) {
  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      clientId = props.clientId;
  var resOption = attributes.resOption,
      blockId = attributes.blockId,
      blockMeta = attributes.blockMeta,
      target = attributes.target,
      duration = attributes.duration,
      counterTitle = attributes.counterTitle,
      counterSuffix = attributes.counterSuffix,
      counterPrefix = attributes.counterPrefix,
      startValue = attributes.startValue,
      isShowSeparator = attributes.isShowSeparator,
      separator = attributes.separator,
      wrapperFlexDirection = attributes.wrapperFlexDirection,
      _attributes$titleColo = attributes.titleColor,
      titleColor = _attributes$titleColo === void 0 ? "#fff" : _attributes$titleColo,
      _attributes$numberCol = attributes.numberColor,
      numberColor = _attributes$numberCol === void 0 ? "#fff" : _attributes$numberCol,
      numPrefixColor = attributes.numPrefixColor,
      numSuffixColor = attributes.numSuffixColor,
      _attributes$gapNumTit = attributes.gapNumTitle,
      gapNumTitle = _attributes$gapNumTit === void 0 ? 20 : _attributes$gapNumTit,
      gapNumPrefix = attributes.gapNumPrefix,
      gapNumSuffix = attributes.gapNumSuffix,
      TABgapNumTitle = attributes.TABgapNumTitle,
      TABgapNumPrefix = attributes.TABgapNumPrefix,
      TABgapNumSuffix = attributes.TABgapNumSuffix,
      MOBgapNumTitle = attributes.MOBgapNumTitle,
      MOBgapNumPrefix = attributes.MOBgapNumPrefix,
      MOBgapNumSuffix = attributes.MOBgapNumSuffix;
  var counterRef = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useRef"])(null);

  var CounterAnimation = function CounterAnimation() {
    var time = duration && Math.floor(Math.abs(duration)) > 499 ? Math.floor(Math.abs(duration)) - 200 : 300;
    var endTarget = target ? Math.floor(Math.abs(target)) : 0;
    var cleanStartValue = startValue && Math.floor(Math.abs(startValue)) < endTarget ? Math.floor(Math.abs(startValue)) : 0;
    var increaseBy = (endTarget - cleanStartValue) / time * 53;
    var timeoutIdInside;
    var timeoutId = setTimeout(function () {
      function updateCount() {
        cleanStartValue += increaseBy;
        counterRef.current.innerText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["textInsideForEdit"])(Math.floor(cleanStartValue), isShowSeparator, separator);

        if (cleanStartValue < endTarget) {
          timeoutIdInside = setTimeout(function () {
            updateCount();
          }, 53);
        } else {
          counterRef.current.innerText = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["textInsideForEdit"])(endTarget, isShowSeparator, separator);
        }
      }

      updateCount();
    }, 200);
    return function () {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdInside);
    };
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    return CounterAnimation();
  }, [target, duration, startValue, separator, isShowSeparator]); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var bodyClasses = document.body.className;

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    // const current_block_id = attributes.blockId;
    var BLOCK_PREFIX = "eb-counter";
    var unique_id = BLOCK_PREFIX + "-" + Math.random().toString(36).substr(2, 7);
    /**
     * Define and Generate Unique Block ID
     */

    if (!blockId) {
      setAttributes({
        blockId: unique_id
      });
    }
    /**
     * Assign New Unique ID when duplicate BlockId found
     * Mostly happens when User Duplicate a Block
     */


    var all_blocks = wp.data.select("core/block-editor").getBlocks(); // console.log({ all_blocks });

    var duplicateFound = false;

    var fixDuplicateBlockId = function fixDuplicateBlockId(blocks) {
      if (duplicateFound) return;

      var _iterator = _createForOfIteratorHelper(blocks),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var item = _step.value;
          var innerBlocks = item.innerBlocks;

          if (item.attributes.blockId === blockId) {
            if (item.clientId !== clientId) {
              setAttributes({
                blockId: unique_id
              }); // console.log("found a duplicate");

              duplicateFound = true;
              return;
            } else if (innerBlocks.length > 0) {
              fixDuplicateBlockId(innerBlocks);
            }
          } else if (innerBlocks.length > 0) {
            fixDuplicateBlockId(innerBlocks);
          }
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
    };

    fixDuplicateBlockId(all_blocks); // console.log({ blockId });
  }, []);
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
    className: "eb-guten-block-main-parent-wrapper"
  }); //
  // CSS/styling Codes Starts from Here
  //
  // function to generate typography styles for an element based on it's prefix

  var _generateTypographySt = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["typoPrefix_title"],
    defaultFontSize: 40
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["typoPrefix_number"],
    defaultFontSize: 40
  }),
      numberTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      numberTypoStylesTab = _generateTypographySt2.typoStylesTab,
      numberTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["typoPrefix_numPrefix"]
  }),
      numPrefixTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      numPrefixTypoStylesTab = _generateTypographySt3.typoStylesTab,
      numPrefixTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  var _generateTypographySt4 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateTypographyStyles"])({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_5__["typoPrefix_numSuffix"]
  }),
      numSuffixTypoStylesDesktop = _generateTypographySt4.typoStylesDesktop,
      numSuffixTypoStylesTab = _generateTypographySt4.typoStylesTab,
      numSuffixTypoStylesMobile = _generateTypographySt4.typoStylesMobile;

  var _generateDimensionsCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_6__["wrapperMargin"],
    styleFor: "margin"
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateDimensionsControlStyles"])({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_6__["wrapperPadding"],
    styleFor: "padding"
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateBackgroundCo = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateBackgroundControlStyles"])({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_7__["WrapBg"]
  }),
      backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      overlyStyles = _generateBackgroundCo.overlyStyles;

  var _generateBorderShadow = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["generateBorderShadowStyles"])({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_8__["wrpBdShadow"],
    attributes: attributes
  }),
      bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
      bdShadowStyesTab = _generateBorderShadow.styesTab,
      bdShadowStyesMobile = _generateBorderShadow.styesMobile,
      bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile;

  var wrapperStylesDesktop = "\n\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-title,\n\t.eb-counter-wrapper.").concat(blockId, " h4.eb-counter-number {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, "{\n\t\ttext-align: center;\n\t\tdisplay: flex;\n\n\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t\n\t\t").concat(gapNumTitle ? "gap: ".concat(gapNumTitle, "px;") : " ", "\n\t\t").concat(wrapperFlexDirection ? "flex-direction: ".concat(wrapperFlexDirection, ";") : " ", "\n\t\n\t\t").concat(backgroundStylesDesktop, "\n\t\t").concat(bdShadowStyesDesktop, "\n\t}\n\n\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlyStyles, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\t\n\t\t").concat(bdShadowStylesHoverDesktop, "\n\t}\n\t");
  var wrapperStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, "{\n\t\t").concat(wrapperMarginStylesTab, "\n\t\t").concat(wrapperPaddingStylesTab, "\n\t\t").concat(backgroundStylesTab, "\n\t\t").concat(bdShadowStyesTab, "\n\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(TABgapNumTitle) ? "gap: ".concat(TABgapNumTitle, "px;") : " ", "\t\t\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\t\n\t\t").concat(bdShadowStylesHoverTab, "\n\t}\n\t");
  var wrapperStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, "{\n\t\t").concat(wrapperMarginStylesMobile, "\n\t\t").concat(wrapperPaddingStylesMobile, "\n\t\t").concat(backgroundStylesMobile, "\n\t\t").concat(bdShadowStyesMobile, "\n\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(MOBgapNumTitle) ? "gap: ".concat(MOBgapNumTitle, "px;") : " ", "\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\t\n\t\t").concat(bdShadowStylesHoverMobile, "\n\t}\n\t");
  var numberStylesDesktop = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesDesktop, "\n\t\t").concat(numberColor ? " color : ".concat(numberColor, ";") : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(gapNumPrefix) ? "padding-left: ".concat(gapNumPrefix, "px;") : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(gapNumSuffix) ? "padding-right: ".concat(gapNumSuffix, "px;") : " ", "\n\t}\n\t");
  var numberStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesTab, "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(TABgapNumPrefix) ? "padding-left: ".concat(TABgapNumPrefix, "px;") : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(TABgapNumSuffix) ? "padding-right: ".concat(TABgapNumSuffix, "px;") : " ", "\n\t} ");
  var numberStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesMobile, "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(MOBgapNumPrefix) ? "padding-left: ".concat(MOBgapNumPrefix, "px;") : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["hasVal"])(MOBgapNumSuffix) ? "padding-right: ".concat(MOBgapNumSuffix, "px;") : " ", "\n\t}");
  var titleStylesDesktop = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesDesktop, "\n\t\t").concat(titleColor ? "color : ".concat(titleColor, ";") : " ", "\n\t}\n\t");
  var titleStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesTab, "\n\t}  ");
  var titleStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesMobile, "\n\t} ");
  var numPrefixStylesDesktop = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesDesktop, "\n\t\t").concat(numPrefixColor ? "color : ".concat(numPrefixColor, ";") : " ", "\n\t}\n\t");
  var numPrefixStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesTab, "\n\t}  ");
  var numPrefixStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesMobile, "\n\t}  ");
  var numSuffixStylesDesktop = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesDesktop, "\n\t\t").concat(numSuffixColor ? "color : ".concat(numSuffixColor, ";") : " ", "\n\t}\n\t");
  var numSuffixStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesTab, "\n\t} ");
  var numSuffixStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesMobile, "\n\t}\n\n\t");
  var desktopAllStyles = "\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(wrapperStylesDesktop) ? wrapperStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numberStylesDesktop) ? numberStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(titleStylesDesktop) ? titleStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numPrefixStylesDesktop) ? numPrefixStylesDesktop : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numSuffixStylesDesktop) ? numSuffixStylesDesktop : " ", "\n\t");
  var tabAllStyles = "\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(wrapperStylesTab) ? wrapperStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numberStylesTab) ? numberStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(titleStylesTab) ? titleStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numPrefixStylesTab) ? numPrefixStylesTab : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numSuffixStylesTab) ? numSuffixStylesTab : " ", "\n\t");
  var mobileAllStyles = "\n\t\t".concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(wrapperStylesMobile) ? wrapperStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numberStylesMobile) ? numberStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(titleStylesMobile) ? titleStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numPrefixStylesMobile) ? numPrefixStylesMobile : " ", "\n\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["isCssExists"])(numSuffixStylesMobile) ? numSuffixStylesMobile : " ", "\n\t"); //
  // CSS/styling Codes Ends Here
  //
  // Set All Style in "blockMeta" Attribute

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var styleObject = {
      desktop: desktopAllStyles,
      tab: tabAllStyles,
      mobile: mobileAllStyles
    };

    if (JSON.stringify(blockMeta) != JSON.stringify(styleObject)) {
      setAttributes({
        blockMeta: styleObject
      });
    }
  }, [attributes]); // console.log("--edit theke", { attributes });

  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_4__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "tab" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["softMinifyCssStrings"])(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(Object(_util_helpers__WEBPACK_IMPORTED_MODULE_9__["softMinifyCssStrings"])(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-counter-wrapper")
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eb-counter-number"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-prefix"
  }, counterPrefix), /*#__PURE__*/React.createElement("span", {
    ref: counterRef,
    className: "eb-counter eb-counter-number"
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-suffix"
  }, counterSuffix)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "h3",
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

/***/ "./src/editor.scss":
/*!*************************!*\
  !*** ./src/editor.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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
    d: "M60.7 61.1H5.3c-2.9 0-5.3-2.4-5.3-5.3V14.2c0-2.9 2.4-5.3 5.3-5.3h55.4c2.9 0 5.3 2.4 5.3 5.3v41.6c0 2.9-2.4 5.3-5.3 5.3zM5.3 11.8c-1.3 0-2.4 1.1-2.4 2.4v41.6c0 1.3 1.1 2.4 2.4 2.4h55.4c1.3 0 2.4-1.1 2.4-2.4V14.2c0-1.3-1.1-2.4-2.4-2.4H5.3z"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    r: "1.3"
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
    d: "M55.9 28.7h-6v-1.8h8v1.7l-4.5 15.9h-2l4.5-15.8z"
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
    d: "M33.1 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
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
    d: "M12.5 43.2h-1.2c-.2 0-.3-.2-.3-.3V28.7c0-.2.2-.3.3-.3h1.2c.2 0 .3.2.3.3v14.2c.1.2-.1.3-.3.3z"
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
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icon */ "./src/icon.js");



/**
 * Internal dependencies
 */





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])("number-counter/number-counter", {
  apiVersion: 2,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Number Counter", "number-counter"),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!", "block"),
  category: "widgets",
  icon: _icon__WEBPACK_IMPORTED_MODULE_6__["default"],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_5__["default"],
  keywords: [Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("EB counter", "number-counter"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("counter", "number-counter"), Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("counter up", "number-counter")],
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _util_color_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/color-control */ "./util/color-control/index.js");
/* harmony import */ var _util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _util_reset_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _util_typography_control_v2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../util/typography-control-v2 */ "./util/typography-control-v2/index.js");
/* harmony import */ var _util_background_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/background-control */ "./util/background-control/index.js");
/* harmony import */ var _util_border_shadow_control__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/border-shadow-control */ "./util/border-shadow-control/index.js");
/* harmony import */ var _ResPanelBody__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ResPanelBody */ "./src/ResPanelBody.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */














var Inspector = function Inspector(props) {
  // console.log("--------inspector:", { props });
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
      gapNumTitle = attributes.gapNumTitle,
      gapNumPrefix = attributes.gapNumPrefix,
      gapNumSuffix = attributes.gapNumSuffix,
      TABgapNumTitle = attributes.TABgapNumTitle,
      TABgapNumPrefix = attributes.TABgapNumPrefix,
      TABgapNumSuffix = attributes.TABgapNumSuffix,
      MOBgapNumTitle = attributes.MOBgapNumTitle,
      MOBgapNumPrefix = attributes.MOBgapNumPrefix,
      MOBgapNumSuffix = attributes.MOBgapNumSuffix; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var bodyClasses = document.body.className; // console.log("----log from inspector useEffect with empty []", {
    // 	bodyClasses,
    // });

    if (!/eb\-res\-option\-/i.test(bodyClasses)) {
      document.body.classList.add("eb-res-option-desktop");
      setAttributes({
        resOption: "desktop"
      });
    } else {
      var _resOption = bodyClasses.match(/eb-res-option-[^\s]+/g)[0].split("-")[3];
      setAttributes({
        resOption: _resOption
      });
    }
  }, []); // this useEffect is for mimmiking css for all the eb blocks on resOption changing

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var allEbBlocksWrapper = document.querySelectorAll(".eb-guten-block-main-parent-wrapper:not(.is-selected) > style"); // console.log("---inspector", { allEbBlocksWrapper });

    if (allEbBlocksWrapper.length < 1) return;
    allEbBlocksWrapper.forEach(function (styleTag) {
      var cssStrings = styleTag.textContent;
      var minCss = cssStrings.replace(/\s+/g, " ");
      var regexCssMimmikSpace = /(?<=mimmikcssStart\s\*\/).+(?=\/\*\smimmikcssEnd)/i;
      var newCssStrings = " ";

      if (resOption === "tab") {
        var tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, tabCssStrings);
      } else if (resOption === "mobile") {
        var _tabCssStrings = (minCss.match(/(?<=tabcssStart\s\*\/).+(?=\/\*\stabcssEnd)/i) || [" "])[0];
        var mobCssStrings = (minCss.match(/(?<=mobcssStart\s\*\/).+(?=\/\*\smobcssEnd)/i) || [" "])[0]; // console.log({ tabCssStrings, mobCssStrings });

        newCssStrings = minCss.replace(regexCssMimmikSpace, "".concat(_tabCssStrings, " ").concat(mobCssStrings));
      } else {
        newCssStrings = minCss.replace(regexCssMimmikSpace, " ");
      }

      styleTag.textContent = newCssStrings;
    });
  }, [resOption]);

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
  }; // console.log("---from inspector outside without any useEffect: ", {
  // 	resOption,
  // });


  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InspectorControls"], {
    key: "controls"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Counter Settings"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-counter-start-value"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Starting Number"),
    value: startValue,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        startValue: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-counter-end-value"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ending Number"),
    value: target,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        target: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-counter-duration"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Animation Duration"),
    value: duration,
    type: "number",
    onChange: function onChange(value) {
      return !/[\-\.]/.test(value) && setAttributes({
        duration: value
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-counter-prefix"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number Prefix"),
    value: counterPrefix,
    onChange: function onChange(counterPrefix) {
      return setAttributes({
        counterPrefix: counterPrefix
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["BaseControl"], {
    id: "eb-counter-suffix"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number Suffix"),
    value: counterSuffix,
    onChange: function onChange(counterSuffix) {
      return setAttributes({
        counterSuffix: counterSuffix
      });
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Layouts"),
    options: _constants__WEBPACK_IMPORTED_MODULE_11__["LAYOUT_OPTIONS"],
    value: layoutLabel,
    onChange: function onChange(value) {
      return handleLayoutChange(value);
    }
  }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Thousand Separator"),
    checked: isShowSeparator,
    onChange: function onChange() {
      return setAttributes({
        isShowSeparator: !isShowSeparator
      });
    }
  }), isShowSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Separator"),
    options: _constants__WEBPACK_IMPORTED_MODULE_11__["SEPARATOR_OPTIONS"],
    value: separastorSelectLabel,
    onChange: function onChange(value) {
      return handleSeparatorChange(value);
    }
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Typography"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Title",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_12__["typoPrefix_title"],
    resRequiredProps: resRequiredProps
  }), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Number",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_12__["typoPrefix_number"],
    resRequiredProps: resRequiredProps
  }), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Number prefix",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_12__["typoPrefix_numPrefix"],
    resRequiredProps: resRequiredProps
  }), /*#__PURE__*/React.createElement(_util_typography_control_v2__WEBPACK_IMPORTED_MODULE_7__["default"], {
    baseLabel: "Number Suffix",
    typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_12__["typoPrefix_numSuffix"],
    resRequiredProps: resRequiredProps
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Colors"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number"),
    color: numberColor,
    onChange: function onChange(numberColor) {
      return setAttributes({
        numberColor: numberColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Title"),
    color: titleColor,
    onChange: function onChange(titleColor) {
      return setAttributes({
        titleColor: titleColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number Prefix"),
    color: numPrefixColor,
    onChange: function onChange(numPrefixColor) {
      return setAttributes({
        numPrefixColor: numPrefixColor
      });
    }
  }), /*#__PURE__*/React.createElement(_util_color_control__WEBPACK_IMPORTED_MODULE_4__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number Suffix"),
    color: numSuffixColor,
    onChange: function onChange(numSuffixColor) {
      return setAttributes({
        numSuffixColor: numSuffixColor
      });
    }
  })), /*#__PURE__*/React.createElement(_ResPanelBody__WEBPACK_IMPORTED_MODULE_10__["default"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Spacing"),
    initialOpen: false,
    resRequiredProps: resRequiredProps
  }, resOption == "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        gapNumTitle: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Title Gap"),
    value: gapNumTitle,
    onChange: function onChange(gapNumTitle) {
      return setAttributes({
        gapNumTitle: gapNumTitle
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        gapNumPrefix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Prefix Gap"),
    value: gapNumPrefix,
    onChange: function onChange(gapNumPrefix) {
      return setAttributes({
        gapNumPrefix: gapNumPrefix
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        gapNumSuffix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Suffix Gap"),
    value: gapNumSuffix,
    onChange: function onChange(gapNumSuffix) {
      return setAttributes({
        gapNumSuffix: gapNumSuffix
      });
    },
    min: 0,
    max: 100
  }))), resOption == "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABgapNumTitle: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Title Gap"),
    value: TABgapNumTitle,
    onChange: function onChange(TABgapNumTitle) {
      return setAttributes({
        TABgapNumTitle: TABgapNumTitle
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABgapNumPrefix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Prefix Gap"),
    value: TABgapNumPrefix,
    onChange: function onChange(TABgapNumPrefix) {
      return setAttributes({
        TABgapNumPrefix: TABgapNumPrefix
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        TABgapNumSuffix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Suffix Gap"),
    value: TABgapNumSuffix,
    onChange: function onChange(TABgapNumSuffix) {
      return setAttributes({
        TABgapNumSuffix: TABgapNumSuffix
      });
    },
    min: 0,
    max: 100
  }))), resOption == "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBgapNumTitle: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Title Gap"),
    value: MOBgapNumTitle,
    onChange: function onChange(MOBgapNumTitle) {
      return setAttributes({
        MOBgapNumTitle: MOBgapNumTitle
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBgapNumPrefix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Prefix Gap"),
    value: MOBgapNumPrefix,
    onChange: function onChange(MOBgapNumPrefix) {
      return setAttributes({
        MOBgapNumPrefix: MOBgapNumPrefix
      });
    },
    min: 0,
    max: 100
  })), /*#__PURE__*/React.createElement(_util_reset_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    onReset: function onReset() {
      return setAttributes({
        MOBgapNumSuffix: undefined
      });
    }
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Number & Suffix Gap"),
    value: MOBgapNumSuffix,
    onChange: function onChange(MOBgapNumSuffix) {
      return setAttributes({
        MOBgapNumSuffix: MOBgapNumSuffix
      });
    },
    min: 0,
    max: 100
  })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Margin Padding"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_13__["wrapperMargin"],
    baseLabel: "Margin"
  }), /*#__PURE__*/React.createElement(_util_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_5__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_13__["wrapperPadding"],
    baseLabel: "Padding"
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Counter Background"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_background_control__WEBPACK_IMPORTED_MODULE_8__["default"], {
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_14__["WrapBg"],
    resRequiredProps: resRequiredProps
  })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Counter Border & Shadow"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_util_border_shadow_control__WEBPACK_IMPORTED_MODULE_9__["default"], {
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_15__["wrpBdShadow"],
    resRequiredProps: resRequiredProps
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */

var Save = function Save(_ref) {
  var attributes = _ref.attributes;
  var blockId = attributes.blockId,
      target = attributes.target,
      duration = attributes.duration,
      counterTitle = attributes.counterTitle,
      counterSuffix = attributes.counterSuffix,
      counterPrefix = attributes.counterPrefix,
      startValue = attributes.startValue,
      isShowSeparator = attributes.isShowSeparator,
      separator = attributes.separator;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-counter-wrapper")
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eb-counter-number"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-prefix"
  }, counterPrefix), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter eb-counter-number",
    "data-duration": duration ? Math.floor(Math.abs(duration)) : 0,
    "data-startValue": startValue ? Math.floor(Math.abs(startValue)) : 0,
    "data-target": target ? Math.floor(Math.abs(target)) : 0,
    "data-separator": separator,
    "data-isShowSeparator": isShowSeparator
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-suffix"
  }, counterSuffix)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"].Content, {
    tagName: "h3",
    className: "eb-counter-title",
    value: counterTitle
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./util/background-control/index.js":
/*!******************************************!*\
  !*** ./util/background-control/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BackgroundControl; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gradient-color-controller */ "./util/gradient-color-controller/index.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */




/**
 * Internal dependencies
 */





var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};

var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};

var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

function WithResBtns(_ref4) {
  var children = _ref4.children,
      resRequiredProps = _ref4.resRequiredProps,
      label = _ref4.label;
  var setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  return /*#__PURE__*/React.createElement("div", {
    className: "newWithResWrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "resBtns"
  }, /*#__PURE__*/React.createElement("span", {
    className: "resLabel"
  }, label), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleDesktopBtnClick({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleTabBtnClick({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleMobileBtnClick({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

var ImageAvatar = function ImageAvatar(_ref5) {
  var imageUrl = _ref5.imageUrl,
      onDeleteImage = _ref5.onDeleteImage;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      _useState2 = _slicedToArray(_useState, 2),
      hover = _useState2[0],
      setHover = _useState2[1];

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
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

function BackgroundControl(_ref6) {
  var resRequiredProps = _ref6.resRequiredProps,
      controlName = _ref6.controlName;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes,
      resOption = resRequiredProps.resOption;
  var backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      bgImageID = attributes["".concat(controlName, "bgImageID")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      isBgOverly = attributes["".concat(controlName, "isBgOverly")],
      overlyType = attributes["".concat(controlName, "overlyType")],
      _attributes$ = attributes["".concat(controlName, "overlyColor")],
      overlyColor = _attributes$ === void 0 ? "#00000080" : _attributes$,
      overlyGradient = attributes["".concat(controlName, "overlyGradient")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Type")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], null, [{
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fill"),
    value: "fill"
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient"),
    value: "gradient"
  }, {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Image"),
    value: "image"
  }].map(function (_ref7) {
    var value = _ref7.value,
        label = _ref7.label;
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isPrimary: backgroundType === value,
      isSecondary: backgroundType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundType"), value));
      }
    }, label);
  }))), backgroundType === "fill" && /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Color"),
    color: backgroundColor,
    onChange: function onChange(backgroundColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundColor"), backgroundColor));
    }
  }), backgroundType === "gradient" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient"),
    initialOpen: false
  }, /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gradientColor: gradientColor,
    onChange: function onChange(gradientColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "gradientColor"), gradientColor));
    }
  })), backgroundType === "image" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Background Image")
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["MediaUpload"], {
    onSelect: function onSelect(_ref8) {
      var _setAttributes4;

      var url = _ref8.url,
          id = _ref8.id;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "".concat(controlName, "bgImageURL"), url), _defineProperty(_setAttributes4, "".concat(controlName, "bgImageID"), id), _setAttributes4));
    },
    type: "image",
    value: bgImageID,
    render: function render(_ref9) {
      var open = _ref9.open;
      return !bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
        className: "eb-infobox-inspector-panel-img-btn components-button",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Upload Image"),
        icon: "format-image",
        onClick: open
      }), /*#__PURE__*/React.createElement("span", {
        style: {
          padding: "10px 0",
          display: "block"
        }
      }));
    }
  }), bgImageURL && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageAvatar, {
    imageUrl: bgImageURL,
    onDeleteImage: function onDeleteImage() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImageURL"), null));
    }
  }), resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: bgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(bgImgPos) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgPos"), bgImgPos));
    }
  })), bgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: bgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosXUnit"), bgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: bgImgcustomPosX,
    min: 0,
    max: bgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(bgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosX"), bgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: bgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosYUnit"), bgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: bgImgcustomPosY,
    min: 0,
    max: bgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: bgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgcustomPosY"), bgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: bgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(bgImgRepeat) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgRepeat"), bgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: backgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(backgroundSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "backgroundSize"), backgroundSize));
    }
  })), backgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: bgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(bgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSizeUnit"), bgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: bgImgCustomSize,
    min: 0,
    max: bgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: bgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(bgImgCustomSize) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgCustomSize"), bgImgCustomSize));
    }
  })))), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: TABbgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbgImgPos) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgPos"), TABbgImgPos));
    }
  })), TABbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: TABbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosXUnit"), TABbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: TABbgImgcustomPosX,
    min: 0,
    max: TABbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(TABbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosX"), TABbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: TABbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosYUnit"), TABbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: TABbgImgcustomPosY,
    min: 0,
    max: TABbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: TABbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgcustomPosY"), TABbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: TABbgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(TABbgImgRepeat) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgRepeat"), TABbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: TABbackgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(TABbackgroundSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "backgroundSize"), TABbackgroundSize));
    }
  })), TABbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: TABbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(TABbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSizeUnit"), TABbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: TABbgImgCustomSize,
    min: 0,
    max: TABbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: TABbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(TABbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "bgImgCustomSize"), TABbgImgCustomSize));
    }
  })))), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: MOBbgImgPos,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Center"),
      value: "center center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Left"),
      value: "center left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Right"),
      value: "center right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Center"),
      value: "top center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Left"),
      value: "top left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Top Right"),
      value: "top right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Center"),
      value: "bottom center"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Left"),
      value: "bottom left"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Bottom Right"),
      value: "bottom right"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbgImgPos) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgPos"), MOBbgImgPos));
    }
  })), MOBbgImgPos === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: MOBbgImgcustomPosXUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosXUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosXUnit"), MOBbgImgcustomPosXUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "X Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: MOBbgImgcustomPosX,
    min: 0,
    max: MOBbgImgcustomPosXUnit === "px" ? 2000 : 100,
    onChange: function onChange(MOBbgImgcustomPosX) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosX"), MOBbgImgcustomPosX));
    }
  })), /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: MOBbgImgcustomPosYUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgcustomPosYUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosYUnit"), MOBbgImgcustomPosYUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Y Position"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: MOBbgImgcustomPosY,
    min: 0,
    max: MOBbgImgcustomPosYUnit === "px" ? 2000 : 100,
    step: MOBbgImgcustomPosYUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgcustomPosY) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgcustomPosY"), MOBbgImgcustomPosY));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    label: "Attachment",
    value: bgImgAttachment,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Scroll"),
      value: "scroll"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Fixed"),
      value: "fixed"
    }],
    onChange: function onChange(bgImgAttachment) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "bgImgAttachment"), bgImgAttachment));
    }
  }), bgImgAttachment === "fixed" && /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "-10px",
      paddingBottom: "10px"
    }
  }, /*#__PURE__*/React.createElement("i", null, "Note: Attachment Fixed works only on desktop.")), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Repeat"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: MOBbgImgRepeat,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("No-repeat"),
      value: "no-repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat"),
      value: "repeat"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-x"),
      value: "repeat-x"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Repeat-y"),
      value: "repeat-y"
    }],
    onChange: function onChange(MOBbgImgRepeat) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgRepeat"), MOBbgImgRepeat));
    }
  })), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Size"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["SelectControl"], {
    value: MOBbackgroundSize,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
      value: ""
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Auto"),
      value: "auto"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Cover"),
      value: "cover"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Contain"),
      value: "contain"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Custom"),
      value: "custom"
    }],
    onChange: function onChange(MOBbackgroundSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "backgroundSize"), MOBbackgroundSize));
    }
  })), MOBbackgroundSize === "custom" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_5__["default"], {
    selectedUnit: MOBbgImgCustomSizeUnit,
    unitTypes: [{
      label: "px",
      value: "px"
    }, {
      label: "em",
      value: "em"
    }, {
      label: "%",
      value: "%"
    }],
    onClick: function onClick(MOBbgImgCustomSizeUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSizeUnit"), MOBbgImgCustomSizeUnit));
    }
  }), /*#__PURE__*/React.createElement(WithResBtns, {
    resRequiredProps: resRequiredProps,
    label: "Width"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["RangeControl"], {
    value: MOBbgImgCustomSize,
    min: 0,
    max: MOBbgImgCustomSizeUnit === "px" ? 2000 : 100,
    step: MOBbgImgCustomSizeUnit === "px" ? 1 : 0.1,
    onChange: function onChange(MOBbgImgCustomSize) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "bgImgCustomSize"), MOBbgImgCustomSize));
    }
  }))))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ToggleControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Enable Overly"),
    checked: isBgOverly,
    onChange: function onChange() {
      return setAttributes(_defineProperty({}, "".concat(controlName, "isBgOverly"), !isBgOverly));
    }
  }), isBgOverly && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overly Type")
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["ButtonGroup"], {
    id: "eb-infobox-infobox-background"
  }, [{
    label: "Fill",
    value: "fill"
  }, {
    label: "Gradient",
    value: "gradient"
  }].map(function (_ref10) {
    var value = _ref10.value,
        label = _ref10.label;
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_2__["Button"], {
      isLarge: true,
      isPrimary: overlyType === value,
      isSecondary: overlyType !== value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "overlyType"), value));
      }
    }, label);
  }))), overlyType === "fill" && /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_6__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overly"),
    color: overlyColor,
    onChange: function onChange(overlyColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlyColor"), overlyColor));
    }
  }), overlyType === "gradient" && /*#__PURE__*/React.createElement(_gradient_color_controller__WEBPACK_IMPORTED_MODULE_4__["default"], {
    gradientColor: overlyGradient,
    onChange: function onChange(overlyGradient) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "overlyGradient"), overlyGradient));
    }
  }) //   <PanelBody title={__("Gradient")} initialOpen={false}>
  // </PanelBody>
  )));
}

/***/ }),

/***/ "./util/border-shadow-control/index.js":
/*!*********************************************!*\
  !*** ./util/border-shadow-control/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BorderShadowControl; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _color_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../color-control */ "./util/color-control/index.js");
/* harmony import */ var _reset_control__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../reset-control */ "./util/reset-control/index.js");
/* harmony import */ var _dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dimensions-control-v2 */ "./util/dimensions-control-v2/index.js");
/* harmony import */ var _typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../typography-control-v2/Icon */ "./util/typography-control-v2/Icon.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */





function BorderShadowControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      noBorder = _ref.noBorder,
      noShadow = _ref.noShadow;
  var setAttributes = resRequiredProps.setAttributes,
      attributes = resRequiredProps.attributes;
  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      borderColor = attributes["".concat(controlName, "borderColor")],
      shadowType = attributes["".concat(controlName, "shadowType")],
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      hOffset = attributes["".concat(controlName, "hOffset")],
      vOffset = attributes["".concat(controlName, "vOffset")],
      blur = attributes["".concat(controlName, "blur")],
      spread = attributes["".concat(controlName, "spread")],
      hoverShadowColor = attributes["".concat(controlName, "hoverShadowColor")],
      hoverHOffset = attributes["".concat(controlName, "hoverHOffset")],
      hoverVOffset = attributes["".concat(controlName, "hoverVOffset")],
      hoverBlur = attributes["".concat(controlName, "hoverBlur")],
      hoverSpread = attributes["".concat(controlName, "hoverSpread")],
      inset = attributes["".concat(controlName, "inset")],
      transitionTime = attributes["".concat(controlName, "transitionTime")],
      BorderType = attributes["".concat(controlName, "BorderType")],
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      HborderColor = attributes["".concat(controlName, "HborderColor")];
  return /*#__PURE__*/React.createElement(React.Fragment, null, noBorder !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    id: "eb-infobox-border-hover-ptions"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
    id: "eb-infobox-border-hover-ptions"
  }, [{
    label: "Normal",
    value: "normal"
  }, {
    label: "Hover",
    value: "hover"
  }].map(function (_ref2) {
    var value = _ref2.value,
        label = _ref2.label;
    return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
      isLarge: true,
      isSecondary: BorderType !== value,
      isPrimary: BorderType === value,
      onClick: function onClick() {
        return setAttributes(_defineProperty({}, "".concat(controlName, "BorderType"), value));
      }
    }, label);
  }))), BorderType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Style"),
    value: borderStyle,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
      value: "none"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dashed"),
      value: "dashed"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Solid"),
      value: "solid"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dotted"),
      value: "dotted"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Double"),
      value: "double"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Groove"),
      value: "groove"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
      value: "inset"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset"),
      value: "outset"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(borderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderStyle"), borderStyle));
    }
  }), borderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color"),
    color: borderColor,
    onChange: function onChange(borderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "borderColor"), borderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Bdr_"),
    baseLabel: "Border Width"
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "Rds_"),
    baseLabel: "Border Radius"
  })), BorderType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["SelectControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Style"),
    value: HborderStyle,
    options: [{
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
      value: "none"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dashed"),
      value: "dashed"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Solid"),
      value: "solid"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Dotted"),
      value: "dotted"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Double"),
      value: "double"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Groove"),
      value: "groove"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
      value: "inset"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Outset"),
      value: "outset"
    }, {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Ridge"),
      value: "ridge"
    }],
    onChange: function onChange(HborderStyle) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderStyle"), HborderStyle));
    }
  }), HborderStyle !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Border Color"),
    color: HborderColor,
    onChange: function onChange(HborderColor) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "HborderColor"), HborderColor));
    }
  }), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HBdr_"),
    baseLabel: "Border Width"
  })), /*#__PURE__*/React.createElement(_dimensions_control_v2__WEBPACK_IMPORTED_MODULE_4__["default"], {
    forBorderRadius: true,
    resRequiredProps: resRequiredProps,
    controlName: "".concat(controlName, "HRds_"),
    baseLabel: "Border Radius"
  }))), noShadow !== true && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Box Shadow"),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref3) {
      var isOpen = _ref3.isOpen,
          onToggle = _ref3.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_typography_control_v2_Icon__WEBPACK_IMPORTED_MODULE_5__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control",
        style: {
          minWidth: "230px",
          padding: "10px"
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
        id: "eb-infobox-shadow-hover-ptions"
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ButtonGroup"], {
        id: "eb-infobox-shadow-hover-ptions"
      }, [{
        label: "Normal",
        value: "normal"
      }, {
        label: "Hover",
        value: "hover"
      }].map(function (_ref4) {
        var value = _ref4.value,
            label = _ref4.label;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
          isLarge: true,
          isSecondary: shadowType !== value,
          isPrimary: shadowType === value,
          onClick: function onClick() {
            return setAttributes(_defineProperty({}, "".concat(controlName, "shadowType"), value));
          }
        }, label);
      }))), shadowType === "normal" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Color"),
        color: shadowColor,
        onChange: function onChange(shadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "shadowColor"), shadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
        value: hOffset,
        onChange: function onChange(hOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hOffset"), hOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
        value: vOffset,
        onChange: function onChange(vOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "vOffset"), vOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Blur"),
        value: blur,
        onChange: function onChange(blur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "blur"), blur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Spread"),
        value: spread,
        onChange: function onChange(spread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "spread"), spread));
        },
        min: 0,
        max: 20
      }))), shadowType === "hover" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_color_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Hover Shadow Color"),
        color: hoverShadowColor,
        onChange: function onChange(hoverShadowColor) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverShadowColor"), hoverShadowColor));
        }
      }), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Horizontal Offset"),
        value: hoverHOffset,
        onChange: function onChange(hoverHOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverHOffset"), hoverHOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Vertical Offset"),
        value: hoverVOffset,
        onChange: function onChange(hoverVOffset) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverVOffset"), hoverVOffset));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Blur"),
        value: hoverBlur,
        onChange: function onChange(hoverBlur) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverBlur"), hoverBlur));
        },
        min: 0,
        max: 20
      })), /*#__PURE__*/React.createElement(_reset_control__WEBPACK_IMPORTED_MODULE_3__["default"], {
        onReset: function onReset() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), undefined));
        }
      }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Shadow Spread"),
        value: hoverSpread,
        onChange: function onChange(hoverSpread) {
          return setAttributes(_defineProperty({}, "".concat(controlName, "hoverSpread"), hoverSpread));
        },
        min: 0,
        max: 20
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ToggleControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Inset"),
        checked: inset,
        onChange: function onChange() {
          return setAttributes(_defineProperty({}, "".concat(controlName, "inset"), !inset));
        }
      })));
    }
  }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    id: "eb-infobox-transition-time"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["TextControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Transition"),
    value: transitionTime,
    type: "number",
    onChange: function onChange(transitionTime) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "transitionTime"), transitionTime));
    }
  })));
}

/***/ }),

/***/ "./util/color-control/index.js":
/*!*************************************!*\
  !*** ./util/color-control/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var ColorControl = function ColorControl(_ref) {
  var label = _ref.label,
      color = _ref.color,
      onChange = _ref.onChange;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      bgColor = _useState2[0],
      setBgColor = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(bgColor);
  }, [bgColor]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    // console.log("----color-useEffect-fired", { color, bgColor });
    setBgColor(color);
  }, []); // console.log({ color, bgColor });

  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: label || "",
    className: "eb-color-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        text: bgColor || "default"
      }, /*#__PURE__*/React.createElement("div", {
        className: "eb-color-ball",
        style: bgColor && colorBallStyles
      }, /*#__PURE__*/React.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: bgColor
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": bgColor || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: bgColor,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setBgColor("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  }), bgColor && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    isSmall: true,
    className: "eb-color-undo",
    icon: "image-rotate",
    style: {
      transform: "scaleX(-1) rotate(90deg)"
    },
    onClick: function onClick() {
      setBgColor(undefined);
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ColorControl);

/***/ }),

/***/ "./util/dimensions-control-v2/dimensions.js":
/*!**************************************************!*\
  !*** ./util/dimensions-control-v2/dimensions.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DimensionsControl; });
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


function DimensionsControl(_ref) {
  var top = _ref.top,
      right = _ref.right,
      bottom = _ref.bottom,
      left = _ref.left,
      onChange = _ref.onChange,
      neededProps = _ref.neededProps;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])({
    top: top,
    right: right,
    bottom: bottom,
    left: left
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dimensions = _useState2[0],
      setDimensions = _useState2[1];

  var baseLabel = neededProps.baseLabel,
      resOption = neededProps.resOption,
      forBorderRadius = neededProps.forBorderRadius,
      handleDesktopBtnClick = neededProps.handleDesktopBtnClick,
      handleTabBtnClick = neededProps.handleTabBtnClick,
      handleMobileBtnClick = neededProps.handleMobileBtnClick;

  var _useState3 = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isLinked = _useState4[0],
      setIsLinked = _useState4[1];

  var onButtonClick = function onButtonClick() {
    return setIsLinked(!isLinked);
  };

  var onInputChange = function onInputChange(event) {
    var _event$target = event.target,
        name = _event$target.name,
        value = _event$target.value;

    if (isLinked) {
      setDimensions({
        top: value,
        right: value,
        bottom: value,
        left: value
      });
    } else {
      setDimensions(function (prevDimensions) {
        return _objectSpread(_objectSpread({}, prevDimensions), {}, _defineProperty({}, name, value));
      });
    }
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(dimensions);
  }, [dimensions]);
  return /*#__PURE__*/React.createElement("div", {
    className: "dimention-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "withResWrapperInDimension"
  }, /*#__PURE__*/React.createElement("div", {
    className: "dimention-label"
  }, baseLabel), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleDesktopBtnClick();
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleTabBtnClick();
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return handleMobileBtnClick();
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), /*#__PURE__*/React.createElement("div", {
    className: "input-container"
  }, /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "top",
    value: dimensions.top,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Top")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "right",
    value: dimensions.right,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Right")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "bottom",
    value: dimensions.bottom,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Bottom")), /*#__PURE__*/React.createElement("div", {
    className: "input-wrapper"
  }, /*#__PURE__*/React.createElement("input", {
    type: "number",
    name: "left",
    value: dimensions.left,
    onChange: onInputChange
  }), /*#__PURE__*/React.createElement("label", {
    className: "dimentions-input-label"
  }, forBorderRadius ? " " : "Left")), /*#__PURE__*/React.createElement("button", {
    className: "linked-btn components-button is-button dashicons dashicons-".concat(isLinked ? "admin-links is-primary" : "editor-unlink is-default"),
    onClick: onButtonClick
  })));
}

/***/ }),

/***/ "./util/dimensions-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/dimensions-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResponsiveDimensionsControl; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _dimensions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dimensions */ "./util/dimensions-control-v2/dimensions.js");
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../unit-control */ "./util/unit-control/index.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




function ResponsiveDimensionsControl(_ref) {
  var resRequiredProps = _ref.resRequiredProps,
      controlName = _ref.controlName,
      baseLabel = _ref.baseLabel,
      forBorderRadius = _ref.forBorderRadius;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")];
  var UNITS = [{
    label: "px",
    value: "px"
  }, {
    label: "em",
    value: "em"
  }, {
    label: "%",
    value: "%"
  }];
  var neededProps = {
    resOption: resOption,
    baseLabel: baseLabel,
    forBorderRadius: forBorderRadius,
    handleDesktopBtnClick: function handleDesktopBtnClick() {
      document.body.classList.add("eb-res-option-desktop");
      document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
      setAttributes({
        resOption: "desktop"
      });
    },
    handleTabBtnClick: function handleTabBtnClick() {
      document.body.classList.add("eb-res-option-tab");
      document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
      setAttributes({
        resOption: "tab"
      });
    },
    handleMobileBtnClick: function handleMobileBtnClick() {
      document.body.classList.add("eb-res-option-mobile");
      document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
      setAttributes({
        resOption: "mobile"
      });
    }
  };
  return /*#__PURE__*/React.createElement(React.Fragment, null, resOption == "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: dimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(dimensionUnit) {
      return setAttributes(_defineProperty({}, "".concat(controlName, "Unit"), dimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_1__["default"], {
    top: dimensionTop,
    right: dimensionRight,
    bottom: dimensionBottom,
    left: dimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref2) {
      var _setAttributes2;

      var top = _ref2.top,
          right = _ref2.right,
          bottom = _ref2.bottom,
          left = _ref2.left;
      return setAttributes((_setAttributes2 = {}, _defineProperty(_setAttributes2, "".concat(controlName, "Top"), top), _defineProperty(_setAttributes2, "".concat(controlName, "Right"), right), _defineProperty(_setAttributes2, "".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes2, "".concat(controlName, "Left"), left), _setAttributes2));
    }
  })), resOption == "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: TABdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(TABdimensionUnit) {
      return setAttributes(_defineProperty({}, "TAB".concat(controlName, "Unit"), TABdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_1__["default"], {
    top: TABdimensionTop,
    right: TABdimensionRight,
    bottom: TABdimensionBottom,
    left: TABdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref3) {
      var _setAttributes4;

      var top = _ref3.top,
          right = _ref3.right,
          bottom = _ref3.bottom,
          left = _ref3.left;
      return setAttributes((_setAttributes4 = {}, _defineProperty(_setAttributes4, "TAB".concat(controlName, "Top"), top), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Right"), right), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes4, "TAB".concat(controlName, "Left"), left), _setAttributes4));
    }
  })), resOption == "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
    selectedUnit: MOBdimensionUnit,
    unitTypes: UNITS,
    onClick: function onClick(MOBdimensionUnit) {
      return setAttributes(_defineProperty({}, "MOB".concat(controlName, "Unit"), MOBdimensionUnit));
    }
  }), /*#__PURE__*/React.createElement(_dimensions__WEBPACK_IMPORTED_MODULE_1__["default"], {
    top: MOBdimensionTop,
    right: MOBdimensionRight,
    bottom: MOBdimensionBottom,
    left: MOBdimensionLeft,
    neededProps: neededProps,
    onChange: function onChange(_ref4) {
      var _setAttributes6;

      var top = _ref4.top,
          right = _ref4.right,
          bottom = _ref4.bottom,
          left = _ref4.left;
      return setAttributes((_setAttributes6 = {}, _defineProperty(_setAttributes6, "MOB".concat(controlName, "Top"), top), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Right"), right), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Bottom"), bottom), _defineProperty(_setAttributes6, "MOB".concat(controlName, "Left"), left), _setAttributes6));
    }
  })));
}

/***/ }),

/***/ "./util/gradient-color-controller/constants.js":
/*!*****************************************************!*\
  !*** ./util/gradient-color-controller/constants.js ***!
  \*****************************************************/
/*! exports provided: GRADIENT_TYPE, RADIAL_TYPES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GRADIENT_TYPE", function() { return GRADIENT_TYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RADIAL_TYPES", function() { return RADIAL_TYPES; });
var GRADIENT_TYPE = [{
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

/***/ }),

/***/ "./util/gradient-color-controller/helper.js":
/*!**************************************************!*\
  !*** ./util/gradient-color-controller/helper.js ***!
  \**************************************************/
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

// Parses the gradient color string
var parseGradientColor = function parseGradientColor(gradientColor) {
  var angle = 45,
      colorOnePosition = 0,
      colorTwoPosition = 100,
      radialShape = "ellipse",
      radialX = 50,
      radialY = 50;

  var _ref = gradientColor.match(/\#[a-f\d]{3,8}|rgba?\([\d\,\.]{3,16}\)/gi) || ["#0000", "#0000"],
      _ref2 = _slicedToArray(_ref, 2),
      colorOne = _ref2[0],
      colorTwo = _ref2[1];

  var _ref3 = gradientColor.match(/\w{6}(?=-)/i) || ["linear"],
      _ref4 = _slicedToArray(_ref3, 1),
      gradientType = _ref4[0];

  if (gradientType == "linear") {
    angle = gradientColor.match(/\d{1,3}(?=deg)/i)[0];

    var _ref5 = gradientColor.match(/\d{1,3}(?=\%)/gi) || [0, 100];

    var _ref6 = _slicedToArray(_ref5, 2);

    colorOnePosition = _ref6[0];
    colorTwoPosition = _ref6[1];
  } else {
    radialShape = (gradientColor.match(/\w+(?= at)/i) || [])[0];
    radialX = (gradientColor.match(/(?<=at )\d{1,3}/i) || [])[0];
    radialY = (gradientColor.match(/(?<=% )\d{1,3}/i) || [])[0];
    colorOnePosition = (gradientColor.match(/\d{1,3}(?=% ,)/gi) || [])[0];
    colorTwoPosition = (gradientColor.match(/\d{1,3}(?=%\))/gi) || [])[0];
  }

  return {
    gradientType: gradientType,
    angle: parseInt(angle),
    colorOne: colorOne,
    colorTwo: colorTwo,
    colorOnePosition: parseInt(colorOnePosition),
    colorTwoPosition: parseInt(colorTwoPosition),
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
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../toggle-button */ "./util/toggle-button/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants */ "./util/gradient-color-controller/constants.js");
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helper */ "./util/gradient-color-controller/helper.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */






var colorBallStyles = {
  padding: 2,
  borderRadius: 0,
  background: "white",
  border: "1px solid #ebebeb"
};
var colorStyles = {
  height: 16,
  width: 16,
  borderRadius: "0%",
  boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)"
};

var GradientColorControl = function GradientColorControl(_ref) {
  var gradientColor = _ref.gradientColor,
      onChange = _ref.onChange;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("linear"),
      _useState2 = _slicedToArray(_useState, 2),
      gradientType = _useState2[0],
      setGradientType = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("transparent"),
      _useState4 = _slicedToArray(_useState3, 2),
      colorOne = _useState4[0],
      setColorOne = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState6 = _slicedToArray(_useState5, 2),
      colorOnePosition = _useState6[0],
      setColorOnePosition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("transparent"),
      _useState8 = _slicedToArray(_useState7, 2),
      colorTwo = _useState8[0],
      setColorTwo = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(100),
      _useState10 = _slicedToArray(_useState9, 2),
      colorTwoPosition = _useState10[0],
      setColorTwoPosition = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      angle = _useState12[0],
      setAngle = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])("ellipse"),
      _useState14 = _slicedToArray(_useState13, 2),
      radialShape = _useState14[0],
      setRadialShape = _useState14[1];

  var _useState15 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(50),
      _useState16 = _slicedToArray(_useState15, 2),
      radialX = _useState16[0],
      setRadialX = _useState16[1];

  var _useState17 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(50),
      _useState18 = _slicedToArray(_useState17, 2),
      radialY = _useState18[0],
      setRadialY = _useState18[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var _parseGradientColor = Object(_helper__WEBPACK_IMPORTED_MODULE_6__["parseGradientColor"])(gradientColor),
        gradientType = _parseGradientColor.gradientType,
        angle = _parseGradientColor.angle,
        colorOne = _parseGradientColor.colorOne,
        colorTwo = _parseGradientColor.colorTwo,
        colorOnePosition = _parseGradientColor.colorOnePosition,
        colorTwoPosition = _parseGradientColor.colorTwoPosition,
        radialShape = _parseGradientColor.radialShape,
        radialX = _parseGradientColor.radialX,
        radialY = _parseGradientColor.radialY;

    setGradientType(gradientType);
    setAngle(angle);
    setColorOne(colorOne);
    setColorTwo(colorTwo);
    setColorOnePosition(colorOnePosition);
    setColorTwoPosition(colorTwoPosition);
    setRadialShape(radialShape);
    setRadialX(radialX);
    setRadialY(radialY);
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "eb-gradient-control"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Gradient Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    defaultSelected: gradientType === "linear" ? _constants__WEBPACK_IMPORTED_MODULE_5__["GRADIENT_TYPE"][0] : _constants__WEBPACK_IMPORTED_MODULE_5__["GRADIENT_TYPE"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_5__["GRADIENT_TYPE"],
    onChange: function onChange(gradientType) {
      return setGradientType(gradientType);
    }
  })), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Radial Type"),
    className: "eb-gradient-toggle-label"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_toggle_button__WEBPACK_IMPORTED_MODULE_4__["default"], {
    defaultSelected: radialShape === "ellipse" ? _constants__WEBPACK_IMPORTED_MODULE_5__["RADIAL_TYPES"][0] : _constants__WEBPACK_IMPORTED_MODULE_5__["RADIAL_TYPES"][1],
    options: _constants__WEBPACK_IMPORTED_MODULE_5__["RADIAL_TYPES"],
    onChange: function onChange(radialShape) {
      return setRadialShape(radialShape);
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: "First Color",
    className: "eb-color-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        text: colorOne || "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "eb-color-ball",
        style: colorOne && colorBallStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorOne
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorOne || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: colorOne,
        onChangeComplete: function onChangeComplete(_ref3) {
          var rgb = _ref3.rgb;
          setColorOne("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["BaseControl"], {
    label: "Second Color",
    className: "eb-color-base"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Dropdown"], {
    renderToggle: function renderToggle(_ref4) {
      var isOpen = _ref4.isOpen,
          onToggle = _ref4.onToggle;
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["Tooltip"], {
        text: colorTwo || "default"
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        className: "eb-color-ball",
        style: colorTwo && colorBallStyles
      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: _objectSpread(_objectSpread({}, colorStyles), {}, {
          backgroundColor: colorTwo
        }),
        "aria-expanded": isOpen,
        onClick: onToggle,
        "aria-label": colorTwo || "default"
      })));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["ColorPicker"], {
        color: colorTwo,
        onChangeComplete: function onChangeComplete(_ref5) {
          var rgb = _ref5.rgb;
          setColorTwo("rgba(".concat(rgb.r, ",").concat(rgb.g, ",").concat(rgb.b, ",").concat(rgb.a, ")"));
        }
      });
    }
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("First Color Position"),
    value: colorOnePosition,
    onChange: function onChange(colorOnePosition) {
      return setColorOnePosition(colorOnePosition);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Second Color Position"),
    value: colorTwoPosition,
    onChange: function onChange(colorTwoPosition) {
      return setColorTwoPosition(colorTwoPosition);
    },
    min: 0,
    max: 100
  }), gradientType === "linear" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Angle"),
    value: angle,
    onChange: function onChange(angle) {
      return setAngle(angle);
    },
    min: 0,
    max: 360
  }), gradientType === "radial" && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center X Position"),
    value: radialX,
    onChange: function onChange(radialX) {
      return setRadialX(radialX);
    },
    min: 0,
    max: 100
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__["RangeControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Center Y Position"),
    value: radialY,
    onChange: function onChange(radialY) {
      return setRadialY(radialY);
    },
    min: 0,
    max: 100
  })));
};

GradientColorControl.propTypes = {
  gradientColor: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  onChange: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (GradientColorControl);

/***/ }),

/***/ "./util/helpers/index.js":
/*!*******************************!*\
  !*** ./util/helpers/index.js ***!
  \*******************************/
/*! exports provided: hasVal, generateBackgroundAttributes, generateDimensionsAttributes, generateTypographyAttributes, generateBorderShadowAttributes, textInsideForEdit, generateRandomNumber, hardMinifyCssStrings, softMinifyCssStrings, isCssExists, generateTypographyStyles, generateDimensionsControlStyles, generateBorderShadowStyles, generateBackgroundControlStyles, generateResponsiveRangeAttributes, generateResponsiveRangeStyles, getFlipTransform, getButtonClasses, getBackgroundImage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hasVal", function() { return hasVal; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundAttributes", function() { return generateBackgroundAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsAttributes", function() { return generateDimensionsAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyAttributes", function() { return generateTypographyAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowAttributes", function() { return generateBorderShadowAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textInsideForEdit", function() { return textInsideForEdit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateRandomNumber", function() { return generateRandomNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hardMinifyCssStrings", function() { return hardMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "softMinifyCssStrings", function() { return softMinifyCssStrings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isCssExists", function() { return isCssExists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateTypographyStyles", function() { return generateTypographyStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateDimensionsControlStyles", function() { return generateDimensionsControlStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBorderShadowStyles", function() { return generateBorderShadowStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateBackgroundControlStyles", function() { return generateBackgroundControlStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeAttributes", function() { return generateResponsiveRangeAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "generateResponsiveRangeStyles", function() { return generateResponsiveRangeStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getFlipTransform", function() { return getFlipTransform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getButtonClasses", function() { return getButtonClasses; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBackgroundImage", function() { return getBackgroundImage; });
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// check if range controller input numbers  has value
var hasVal = function hasVal(val) {
  return val || val === 0;
}; // function to generate Background control's attributes

var generateBackgroundAttributes = function generateBackgroundAttributes(controlName) {
  var _objectSpread3;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var isBgDefaultGradient = defaults.isBgDefaultGradient,
      defaultFillColor = defaults.defaultFillColor,
      _defaults$defaultBgGr = defaults.defaultBgGradient,
      defaultBgGradient = _defaults$defaultBgGr === void 0 ? "linear-gradient(45deg,#00000000,#00000000)" : _defaults$defaultBgGr;
  var bgColorAttr = defaultFillColor ? _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string",
    "default": defaultFillColor
  }) : _defineProperty({}, "".concat(controlName, "backgroundColor"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_defineProperty({}, "".concat(controlName, "backgroundType"), {
    type: "string",
    "default": isBgDefaultGradient === true ? "gradient" : "fill"
  }), bgColorAttr), {}, (_objectSpread3 = {}, _defineProperty(_objectSpread3, "".concat(controlName, "gradientColor"), {
    type: "string",
    "default": defaultBgGradient
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImageURL"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImageID"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgAttachment"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "isBgOverly"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_objectSpread3, "".concat(controlName, "overlyType"), {
    type: "string",
    "default": "fill"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "overlyColor"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "".concat(controlName, "overlyGradient"), {
    type: "string",
    "default": "linear-gradient(45deg,#000000cc,#00000000)"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "TAB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "backgroundSize"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgCustomSize"), {
    type: "number",
    "default": 100
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgCustomSizeUnit"), {
    type: "string",
    "default": "%"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgPos"), {
    type: "string"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosX"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosXUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosY"), {
    type: "number",
    "default": 0
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgcustomPosYUnit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread3, "MOB".concat(controlName, "bgImgRepeat"), {
    type: "string"
  }), _objectSpread3));
}; // function to generate New Dimensions-Control's attributes for multiple Dimensions control based on the array of values(prefixs)

var generateDimensionsAttributes = function generateDimensionsAttributes(controlName) {
  var _objectSpread5;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var top = defaults.top,
      right = defaults.right,
      bottom = defaults.bottom,
      left = defaults.left;
  var desktopTop = hasVal(top) ? _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string",
    "default": "".concat(top)
  }) : _defineProperty({}, "".concat(controlName, "Top"), {
    type: "string"
  });
  var desktopRight = hasVal(right) ? _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string",
    "default": "".concat(right)
  }) : _defineProperty({}, "".concat(controlName, "Right"), {
    type: "string"
  });
  var desktopBottom = hasVal(bottom) ? _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string",
    "default": "".concat(bottom)
  }) : _defineProperty({}, "".concat(controlName, "Bottom"), {
    type: "string"
  });
  var desktopLeft = hasVal(left) ? _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string",
    "default": "".concat(left)
  }) : _defineProperty({}, "".concat(controlName, "Left"), {
    type: "string"
  });
  return _objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_defineProperty({}, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), desktopTop), desktopRight), desktopBottom), desktopLeft), {}, (_objectSpread5 = {}, _defineProperty(_objectSpread5, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread5, "TAB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "TAB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "TAB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "TAB".concat(controlName, "Left"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread5, "MOB".concat(controlName, "Top"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "MOB".concat(controlName, "Right"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "MOB".concat(controlName, "Bottom"), {
    type: "string"
  }), _defineProperty(_objectSpread5, "MOB".concat(controlName, "Left"), {
    type: "string"
  }), _objectSpread5));
}; // function to generate typography attributes for multiple typography control based on the array of prefix

var generateTypographyAttributes = function generateTypographyAttributes(prefixArray) {
  var typoAttrs = prefixArray.reduce(function (total, current) {
    var _result;

    var result = (_result = {}, _defineProperty(_result, "".concat(current, "FontFamily"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "FontWeight"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextTransform"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "TextDecoration"), {
      type: "string"
    }), _defineProperty(_result, "".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "TAB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "TAB".concat(current, "LineHeight"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "SizeUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "FontSize"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacingUnit"), {
      type: "string",
      "default": "px"
    }), _defineProperty(_result, "MOB".concat(current, "LetterSpacing"), {
      type: "number"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeightUnit"), {
      type: "string",
      "default": "em"
    }), _defineProperty(_result, "MOB".concat(current, "LineHeight"), {
      type: "number"
    }), _result);
    return _objectSpread(_objectSpread({}, total), result);
  }, {}); // console.log({ typoAttrs });

  return typoAttrs;
}; // Important: the following "generateBorderShadowAttributes" function must be declared below the "generateDimensionsAttributes" function declaration
// function to generate BorderShadow control's attributes

var generateBorderShadowAttributes = function generateBorderShadowAttributes(controlName) {
  var _objectSpread6, _shdAttrs;

  var defaults = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _defaults$bdrDefaults = defaults.bdrDefaults,
      bdrDefaults = _defaults$bdrDefaults === void 0 ? {
    top: 1,
    right: 1,
    bottom: 1,
    left: 1
  } : _defaults$bdrDefaults,
      _defaults$rdsDefaults = defaults.rdsDefaults,
      rdsDefaults = _defaults$rdsDefaults === void 0 ? {} : _defaults$rdsDefaults,
      _defaults$noBorder = defaults.noBorder,
      noBorder = _defaults$noBorder === void 0 ? false : _defaults$noBorder,
      _defaults$noShadow = defaults.noShadow,
      noShadow = _defaults$noShadow === void 0 ? false : _defaults$noShadow;

  var bdrAttrs = _objectSpread(_objectSpread(_objectSpread(_objectSpread((_objectSpread6 = {}, _defineProperty(_objectSpread6, "".concat(controlName, "BorderType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "borderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "borderStyle"), {
    type: "string",
    "default": "none"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "HborderColor"), {
    type: "string"
  }), _defineProperty(_objectSpread6, "".concat(controlName, "HborderStyle"), {
    type: "string",
    "default": "none"
  }), _objectSpread6), generateDimensionsAttributes("".concat(controlName, "Bdr_"), bdrDefaults)), generateDimensionsAttributes("".concat(controlName, "Rds_"), rdsDefaults)), generateDimensionsAttributes("".concat(controlName, "HBdr_"))), generateDimensionsAttributes("".concat(controlName, "HRds_")));

  var shdAttrs = (_shdAttrs = {}, _defineProperty(_shdAttrs, "".concat(controlName, "hOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "vOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "blur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "spread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "inset"), {
    type: "boolean",
    "default": false
  }), _defineProperty(_shdAttrs, "".concat(controlName, "shadowType"), {
    type: "string",
    "default": "normal"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverHOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverVOffset"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverBlur"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverSpread"), {
    type: "number"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverShadowColor"), {
    type: "string"
  }), _defineProperty(_shdAttrs, "".concat(controlName, "hoverInset"), {
    type: "boolean",
    "default": false
  }), _shdAttrs);

  if (noBorder === true) {
    return _objectSpread(_objectSpread({}, shdAttrs), {}, _defineProperty({}, "".concat(controlName, "transitionTime"), {
      type: "string",
      "default": "500"
    }));
  } else if (noShadow === true) {
    return _objectSpread(_objectSpread({}, bdrAttrs), {}, _defineProperty({}, "".concat(controlName, "transitionTime"), {
      type: "string",
      "default": "500"
    }));
  } else {
    return _objectSpread(_objectSpread(_objectSpread({}, bdrAttrs), shdAttrs), {}, _defineProperty({}, "".concat(controlName, "transitionTime"), {
      type: "string",
      "default": "500"
    }));
  } // const result = {
  //   // Border Shadow attributes ⬇
  //   // border attributes ⬇
  //   [`${controlName}BorderType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}borderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}borderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   [`${controlName}HborderColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}HborderStyle`]: {
  //     type: "string",
  //     default: "none",
  //   },
  //   // shadow attributes  ⬇
  //   [`${controlName}hOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}vOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}blur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}spread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}shadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}inset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}shadowType`]: {
  //     type: "string",
  //     default: "normal",
  //   },
  //   [`${controlName}hoverHOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverVOffset`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverBlur`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverSpread`]: {
  //     type: "number",
  //   },
  //   [`${controlName}hoverShadowColor`]: {
  //     type: "string",
  //   },
  //   [`${controlName}hoverInset`]: {
  //     type: "boolean",
  //     default: false,
  //   },
  //   [`${controlName}transitionTime`]: {
  //     type: "string",
  //     default: "500",
  //   },
  //   ...generateDimensionsAttributes(`${controlName}Bdr_`, bdrDefaults),
  //   ...generateDimensionsAttributes(`${controlName}Rds_`, rdsDefaults),
  //   ...generateDimensionsAttributes(`${controlName}HBdr_`),
  //   ...generateDimensionsAttributes(`${controlName}HRds_`),
  // };
  // console.log("---generateBorderShadowAttributes:", { result });
  // return result;

}; // helper Functions: function 'textInsideForEdit' is for setting the innertext depending on whether separator should be shown and which separator should be shown

var textInsideForEdit = function textInsideForEdit(value, isShowSeparator, separator) {
  return isShowSeparator ? value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, separator) : value.toString();
}; // generateRandomNumber function is for generating a random number

var generateRandomNumber = function generateRandomNumber() {
  return Math.floor(Math.random() * 1000000000);
}; // hardMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var hardMinifyCssStrings = function hardMinifyCssStrings(cssString) {
  // console.log({ cssString });
  return cssString.replace(/\s+/g, " ").replace(/(?<=\:).+(?=\;)/g, function (match) {
    // console.log({ match, g1, offset, string });
    return match.trim().replace(/\s+/g, "__s_p_a_c_e__");
  }) // .replace(/\s+(?!(?:[\w\d\.\-\#]+\{))/g, "")
  .replace(/\s+(?![\w\d\.\-\#]+\{)/g, "").replace(/\s+/g, " ").replace(/__s_p_a_c_e__/g, " ");
}; // softMinifyCssStrings is for minifying the css which is in the style tag as a string  for view.js

var softMinifyCssStrings = function softMinifyCssStrings(cssString) {
  return cssString.replace(/\s+/g, " ");
}; // check if css string is empty or not.

var isCssExists = function isCssExists(cssString) {
  return /.+(?=\:(?!hover)(?!focus))/.test(cssString);
}; //
// function to generate typography styles for an element based on it's prefix

var generateTypographyStyles = function generateTypographyStyles(_ref11) {
  var prefixConstant = _ref11.prefixConstant,
      defaultFontSize = _ref11.defaultFontSize,
      attributes = _ref11.attributes;
  var fontFamily = attributes["".concat(prefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(prefixConstant, "FontWeight")],
      textTransform = attributes["".concat(prefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(prefixConstant, "TextDecoration")],
      _attributes$ = attributes["".concat(prefixConstant, "FontSize")],
      fontSize = _attributes$ === void 0 ? defaultFontSize : _attributes$,
      sizeUnit = attributes["".concat(prefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(prefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(prefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(prefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(prefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(prefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(prefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(prefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(prefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(prefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(prefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(prefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(prefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(prefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(prefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(prefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(prefixConstant, "LineHeight")];
  var typoStylesDesktop = "\n\t\t\t".concat(fontFamily ? "font-family: ".concat(fontFamily, ";") : " ", "\n\t\t\t").concat(hasVal(fontSize) ? "font-size: ".concat(fontSize).concat(sizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(lineHeight) ? "line-height: ".concat(lineHeight).concat(lineHeightUnit, ";") : " ", "\n\t\t\t").concat(fontWeight ? "font-weight: ".concat(fontWeight, ";") : " ", "\n\t\t\t").concat(textDecoration ? "text-decoration: ".concat(textDecoration, ";") : " ", "\n\t\t\t").concat(textTransform ? "text-transform: ".concat(textTransform, ";") : " ", "\n\t\t\t").concat(hasVal(letterSpacing) ? "letter-spacing: ".concat(letterSpacing).concat(letterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesTab = "\n\t\t\t".concat(hasVal(TABfontSize) ? "font-size: ".concat(TABfontSize).concat(TABsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABlineHeight) ? "line-height: ".concat(TABlineHeight).concat(TABlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(TABletterSpacing) ? "letter-spacing: ".concat(TABletterSpacing).concat(TABletterSpacingUnit, ";") : " ", "\n\t\t");
  var typoStylesMobile = "\n\t\t\t".concat(hasVal(MOBfontSize) ? "font-size: ".concat(MOBfontSize).concat(MOBsizeUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBlineHeight) ? "line-height: ".concat(MOBlineHeight).concat(MOBlineHeightUnit, ";") : " ", "\n\t\t\t").concat(hasVal(MOBletterSpacing) ? "letter-spacing: ".concat(MOBletterSpacing).concat(MOBletterSpacingUnit, ";") : " ", "\n\t\t");
  return {
    typoStylesDesktop: typoStylesDesktop,
    typoStylesTab: typoStylesTab,
    typoStylesMobile: typoStylesMobile
  };
}; //
// function to generate dimensions-controls styles for an element based on it's controlName(prefix)

var generateDimensionsControlStyles = function generateDimensionsControlStyles(_ref12) {
  var controlName = _ref12.controlName,
      styleFor = _ref12.styleFor,
      attributes = _ref12.attributes;
  var dimensionUnit = attributes["".concat(controlName, "Unit")],
      dimensionTop = attributes["".concat(controlName, "Top")],
      dimensionRight = attributes["".concat(controlName, "Right")],
      dimensionBottom = attributes["".concat(controlName, "Bottom")],
      dimensionLeft = attributes["".concat(controlName, "Left")],
      TABdimensionUnit = attributes["TAB".concat(controlName, "Unit")],
      TABdimensionTop = attributes["TAB".concat(controlName, "Top")],
      TABdimensionRight = attributes["TAB".concat(controlName, "Right")],
      TABdimensionBottom = attributes["TAB".concat(controlName, "Bottom")],
      TABdimensionLeft = attributes["TAB".concat(controlName, "Left")],
      MOBdimensionUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBdimensionTop = attributes["MOB".concat(controlName, "Top")],
      MOBdimensionRight = attributes["MOB".concat(controlName, "Right")],
      MOBdimensionBottom = attributes["MOB".concat(controlName, "Bottom")],
      MOBdimensionLeft = attributes["MOB".concat(controlName, "Left")]; // console.log({ controlName, attributes });

  var dimensionStylesDesktop = " ";
  var dimensionStylesTab = " ";
  var dimensionStylesMobile = " ";

  if (styleFor === "border") {
    dimensionStylesDesktop = "\n\t\t".concat(dimensionTop ? "border-top-width: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, "; z-index:999;") : " ", "\n\t\t").concat(dimensionRight ? "border-right-width: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionLeft ? "border-left-width: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionBottom ? "border-bottom-width: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "border-top-width: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "border-right-width: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "border-left-width: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "border-bottom-width: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "border-top-width: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "border-right-width: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "border-left-width: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "border-bottom-width: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  } else if (styleFor === "border-radius") {
    dimensionStylesDesktop = "\n\t\t\t".concat(dimensionTop ? "border-top-left-radius: ".concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionRight ? "border-top-right-radius: ".concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t\t").concat(dimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "border-top-left-radius: ".concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "border-top-right-radius: ".concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "border-top-left-radius: ".concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "border-top-right-radius: ".concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "border-bottom-left-radius: ".concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "border-bottom-right-radius: ".concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  } else {
    dimensionStylesDesktop = "\n\t\t".concat(dimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(dimensionTop)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(dimensionRight)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(dimensionLeft)).concat(dimensionUnit, ";") : " ", "\n\t\t").concat(dimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(dimensionBottom)).concat(dimensionUnit, ";") : " ", "\n\t\n\t\t");
    dimensionStylesTab = "\n\t\t\t".concat(TABdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(TABdimensionTop)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(TABdimensionRight)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(TABdimensionLeft)).concat(TABdimensionUnit, ";") : " ", "\n\t\t\t").concat(TABdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(TABdimensionBottom)).concat(TABdimensionUnit, ";") : " ", "\n\n\t\t");
    dimensionStylesMobile = "\n\t\t\t".concat(MOBdimensionTop ? "".concat(styleFor, "-top: ").concat(parseFloat(MOBdimensionTop)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionRight ? "".concat(styleFor, "-right: ").concat(parseFloat(MOBdimensionRight)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionLeft ? "".concat(styleFor, "-left: ").concat(parseFloat(MOBdimensionLeft)).concat(MOBdimensionUnit, ";") : " ", "\n\t\t\t").concat(MOBdimensionBottom ? "".concat(styleFor, "-bottom: ").concat(parseFloat(MOBdimensionBottom)).concat(MOBdimensionUnit, ";") : " ", "\n\n\t\t");
  } // console.log({
  //   dimensionStylesDesktop,
  //   // dimensionStylesTab,
  //   // dimensionStylesMobile,
  // });


  return {
    dimensionStylesDesktop: dimensionStylesDesktop,
    dimensionStylesTab: dimensionStylesTab,
    dimensionStylesMobile: dimensionStylesMobile
  };
}; // Important: the following "generateBorderShadowStyles" function must be declared below the "generateDimensionsControlStyles" function declaration
// function to generate BorderShadow control's Styles for an element based on it's controlName(prefix)

var generateBorderShadowStyles = function generateBorderShadowStyles(_ref13) {
  var controlName = _ref13.controlName,
      attributes = _ref13.attributes,
      noBorder = _ref13.noBorder,
      noShadow = _ref13.noShadow;
  var borderStylesDesktop = "";
  var borderStylesTab = "";
  var borderStylesMobile = "";
  var radiusStylesDesktop = "";
  var radiusStylesTab = "";
  var radiusStylesMobile = "";
  var HborderStylesDesktop = "";
  var HborderStylesTab = "";
  var HborderStylesMobile = "";
  var HradiusStylesDesktop = "";
  var HradiusStylesTab = "";
  var HradiusStylesMobile = "";

  if (noBorder !== true) {
    var _generateDimensionsCo = generateDimensionsControlStyles({
      controlName: "".concat(controlName, "Bdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_borderStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
        F_borderStylesTab = _generateDimensionsCo.dimensionStylesTab,
        F_borderStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

    var _generateDimensionsCo2 = generateDimensionsControlStyles({
      controlName: "".concat(controlName, "Rds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_radiusStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
        F_radiusStylesTab = _generateDimensionsCo2.dimensionStylesTab,
        F_radiusStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

    var _generateDimensionsCo3 = generateDimensionsControlStyles({
      controlName: "".concat(controlName, "HBdr_"),
      styleFor: "border",
      attributes: attributes
    }),
        F_HborderStylesDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
        F_HborderStylesTab = _generateDimensionsCo3.dimensionStylesTab,
        F_HborderStylesMobile = _generateDimensionsCo3.dimensionStylesMobile;

    var _generateDimensionsCo4 = generateDimensionsControlStyles({
      controlName: "".concat(controlName, "HRds_"),
      styleFor: "border-radius",
      attributes: attributes
    }),
        F_HradiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
        F_HradiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
        F_HradiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

    borderStylesDesktop = F_borderStylesDesktop;
    borderStylesTab = F_borderStylesTab;
    borderStylesMobile = F_borderStylesMobile;
    radiusStylesDesktop = F_radiusStylesDesktop;
    radiusStylesTab = F_radiusStylesTab;
    radiusStylesMobile = F_radiusStylesMobile;
    HborderStylesDesktop = F_HborderStylesDesktop;
    HborderStylesTab = F_HborderStylesTab;
    HborderStylesMobile = F_HborderStylesMobile;
    HradiusStylesDesktop = F_HradiusStylesDesktop;
    HradiusStylesTab = F_HradiusStylesTab;
    HradiusStylesMobile = F_HradiusStylesMobile;
  } // const {
  //   dimensionStylesDesktop: borderStylesDesktop,
  //   dimensionStylesTab: borderStylesTab,
  //   dimensionStylesMobile: borderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Bdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: radiusStylesDesktop,
  //   dimensionStylesTab: radiusStylesTab,
  //   dimensionStylesMobile: radiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}Rds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HborderStylesDesktop,
  //   dimensionStylesTab: HborderStylesTab,
  //   dimensionStylesMobile: HborderStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HBdr_`,
  //   styleFor: "border",
  //   attributes,
  // });
  // const {
  //   dimensionStylesDesktop: HradiusStylesDesktop,
  //   dimensionStylesTab: HradiusStylesTab,
  //   dimensionStylesMobile: HradiusStylesMobile,
  // } = generateDimensionsControlStyles({
  //   controlName: `${controlName}HRds_`,
  //   styleFor: "border-radius",
  //   attributes,
  // });


  var borderStyle = attributes["".concat(controlName, "borderStyle")],
      _attributes$2 = attributes["".concat(controlName, "borderColor")],
      borderColor = _attributes$2 === void 0 ? "#333333" : _attributes$2,
      HborderStyle = attributes["".concat(controlName, "HborderStyle")],
      _attributes$3 = attributes["".concat(controlName, "HborderColor")],
      HborderColor = _attributes$3 === void 0 ? borderColor : _attributes$3,
      shadowColor = attributes["".concat(controlName, "shadowColor")],
      _attributes$4 = attributes["".concat(controlName, "hOffset")],
      hOffset = _attributes$4 === void 0 ? 0 : _attributes$4,
      _attributes$5 = attributes["".concat(controlName, "vOffset")],
      vOffset = _attributes$5 === void 0 ? 0 : _attributes$5,
      _attributes$6 = attributes["".concat(controlName, "blur")],
      blur = _attributes$6 === void 0 ? 0 : _attributes$6,
      _attributes$7 = attributes["".concat(controlName, "spread")],
      spread = _attributes$7 === void 0 ? 0 : _attributes$7,
      inset = attributes["".concat(controlName, "inset")],
      _attributes$8 = attributes["".concat(controlName, "hoverShadowColor")],
      hoverShadowColor = _attributes$8 === void 0 ? shadowColor : _attributes$8,
      _attributes$9 = attributes["".concat(controlName, "hoverHOffset")],
      hoverHOffset = _attributes$9 === void 0 ? hOffset : _attributes$9,
      _attributes$10 = attributes["".concat(controlName, "hoverVOffset")],
      hoverVOffset = _attributes$10 === void 0 ? vOffset : _attributes$10,
      _attributes$11 = attributes["".concat(controlName, "hoverBlur")],
      hoverBlur = _attributes$11 === void 0 ? blur : _attributes$11,
      _attributes$12 = attributes["".concat(controlName, "hoverSpread")],
      hoverSpread = _attributes$12 === void 0 ? spread : _attributes$12,
      transitionTime = attributes["".concat(controlName, "transitionTime")];
  var styesDesktop = "  \n    ".concat(noBorder !== true ? "\n        ".concat(radiusStylesDesktop, "\n        ").concat(borderStyle !== "none" && borderColor ? "\n            ".concat(borderStylesDesktop, "\n            border-color: ").concat(borderColor, ";\n            border-style: ").concat(borderStyle, ";\n            ") : " ", "\n        ") : " ", "\n  \n    ").concat(noShadow !== true ? shadowColor ? "box-shadow: ".concat(shadowColor, " ").concat(hOffset, "px ").concat(vOffset, "px ").concat(blur, "px ").concat(spread, "px ").concat(inset ? "inset" : "", ";") : " " : " ", "\n\n    transition: ").concat(transitionTime ? "".concat(transitionTime / 1000, "s") : ".5s", ";\n\n  ");
  var styesTab = "  \n  ".concat(noBorder !== true ? "\n      ".concat(borderColor ? borderStylesTab : " ", "\n      ").concat(radiusStylesTab, "\n      ") : " ", "\n    \n  ");
  var styesMobile = "\n  ".concat(noBorder !== true ? "\n      ".concat(borderColor ? borderStylesMobile : " ", "\n      ").concat(radiusStylesMobile, "\n      ") : " ", "\n  ");
  var stylesHoverDesktop = "\n  ".concat(noBorder !== true ? "\n      ".concat(HborderStyle !== "none" ? "\n            ".concat(HborderColor !== borderColor ? "border-color: ".concat(HborderColor, ";") : " ", " \n            ").concat(HborderStyle !== borderStyle ? "border-style: ".concat(HborderStyle, ";") : " ", "\n            ").concat(HborderStylesDesktop, "\n          ") : " ", "\n\n      ").concat(HradiusStylesDesktop, "    \n      ") : " ", "   \n   \n  ").concat(noShadow !== true ? hoverShadowColor ? "box-shadow: ".concat(hoverShadowColor, " ").concat(hoverHOffset, "px ").concat(hoverVOffset, "px ").concat(hoverBlur, "px ").concat(hoverSpread, "px ").concat(inset ? "inset" : " ", ";") : " " : " ", "\n\n  ");
  var stylesHoverTab = "\n  ".concat(noBorder !== true ? "\n      ".concat(HborderStyle !== "none" ? HborderStylesTab : " ", "\n      ").concat(HradiusStylesTab, "  \n      ") : " ", "\n  ");
  var stylesHoverMobile = "\n  ".concat(noBorder !== true ? "\n      ".concat(HborderStyle !== "none" ? HborderStylesMobile : " ", "\n      ").concat(HradiusStylesMobile, "\n      ") : " ", "\n   \n  ");
  return {
    styesDesktop: styesDesktop,
    styesTab: styesTab,
    styesMobile: styesMobile,
    stylesHoverDesktop: stylesHoverDesktop,
    stylesHoverTab: stylesHoverTab,
    stylesHoverMobile: stylesHoverMobile
  };
}; // function to generate Background control styles based on the unique controlName(prefix)

var generateBackgroundControlStyles = function generateBackgroundControlStyles(_ref14) {
  var controlName = _ref14.controlName,
      attributes = _ref14.attributes;
  var backgroundType = attributes["".concat(controlName, "backgroundType")],
      backgroundColor = attributes["".concat(controlName, "backgroundColor")],
      gradientColor = attributes["".concat(controlName, "gradientColor")],
      bgImageURL = attributes["".concat(controlName, "bgImageURL")],
      backgroundSize = attributes["".concat(controlName, "backgroundSize")],
      bgImgCustomSize = attributes["".concat(controlName, "bgImgCustomSize")],
      bgImgCustomSizeUnit = attributes["".concat(controlName, "bgImgCustomSizeUnit")],
      bgImgPos = attributes["".concat(controlName, "bgImgPos")],
      bgImgcustomPosX = attributes["".concat(controlName, "bgImgcustomPosX")],
      bgImgcustomPosXUnit = attributes["".concat(controlName, "bgImgcustomPosXUnit")],
      bgImgcustomPosY = attributes["".concat(controlName, "bgImgcustomPosY")],
      bgImgcustomPosYUnit = attributes["".concat(controlName, "bgImgcustomPosYUnit")],
      bgImgAttachment = attributes["".concat(controlName, "bgImgAttachment")],
      bgImgRepeat = attributes["".concat(controlName, "bgImgRepeat")],
      _attributes$13 = attributes["".concat(controlName, "overlyColor")],
      overlyColor = _attributes$13 === void 0 ? "#00000080" : _attributes$13,
      overlyType = attributes["".concat(controlName, "overlyType")],
      isBgOverly = attributes["".concat(controlName, "isBgOverly")],
      overlyGradient = attributes["".concat(controlName, "overlyGradient")],
      TABbackgroundSize = attributes["TAB".concat(controlName, "backgroundSize")],
      TABbgImgCustomSize = attributes["TAB".concat(controlName, "bgImgCustomSize")],
      TABbgImgCustomSizeUnit = attributes["TAB".concat(controlName, "bgImgCustomSizeUnit")],
      TABbgImgPos = attributes["TAB".concat(controlName, "bgImgPos")],
      TABbgImgcustomPosX = attributes["TAB".concat(controlName, "bgImgcustomPosX")],
      TABbgImgcustomPosXUnit = attributes["TAB".concat(controlName, "bgImgcustomPosXUnit")],
      TABbgImgcustomPosY = attributes["TAB".concat(controlName, "bgImgcustomPosY")],
      TABbgImgcustomPosYUnit = attributes["TAB".concat(controlName, "bgImgcustomPosYUnit")],
      TABbgImgRepeat = attributes["TAB".concat(controlName, "bgImgRepeat")],
      MOBbackgroundSize = attributes["MOB".concat(controlName, "backgroundSize")],
      MOBbgImgCustomSize = attributes["MOB".concat(controlName, "bgImgCustomSize")],
      MOBbgImgCustomSizeUnit = attributes["MOB".concat(controlName, "bgImgCustomSizeUnit")],
      MOBbgImgPos = attributes["MOB".concat(controlName, "bgImgPos")],
      MOBbgImgcustomPosX = attributes["MOB".concat(controlName, "bgImgcustomPosX")],
      MOBbgImgcustomPosXUnit = attributes["MOB".concat(controlName, "bgImgcustomPosXUnit")],
      MOBbgImgcustomPosY = attributes["MOB".concat(controlName, "bgImgcustomPosY")],
      MOBbgImgcustomPosYUnit = attributes["MOB".concat(controlName, "bgImgcustomPosYUnit")],
      MOBbgImgRepeat = attributes["MOB".concat(controlName, "bgImgRepeat")];
  var backgroundStylesDesktop = "\n    background-image: ".concat(backgroundType === "image" && bgImageURL ? "url(\"".concat(bgImageURL, "\")") : backgroundType === "gradient" ? gradientColor : "none", ";\n\n    ").concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(backgroundSize && backgroundSize !== "custom" ? "background-size: ".concat(backgroundSize, ";") : backgroundSize === "custom" ? "background-size: ".concat(bgImgCustomSize).concat(bgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(bgImgPos && bgImgPos !== "custom" ? "background-position: ".concat(bgImgPos, ";") : bgImgPos === "custom" ? "background-position: ".concat(bgImgcustomPosX).concat(bgImgcustomPosXUnit, " ").concat(bgImgcustomPosY).concat(bgImgcustomPosYUnit, ";") : " ", "\n\n        ").concat(bgImgAttachment ? "background-attachment: ".concat(bgImgAttachment, ";") : " ", "\n\n        ").concat(bgImgRepeat ? "background-repeat: ".concat(bgImgRepeat, ";") : " ", "\n        \n        ").concat(isBgOverly ? "\n              z-index: 2;\n              position: relative;\n            " : " ", "\t\n        ") : " ", "\n  \n\t\t").concat(backgroundColor ? "background-color: ".concat(backgroundColor, ";") : " ", "\n\n  ");
  var backgroundStylesTab = "\n    ".concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(TABbackgroundSize && TABbackgroundSize !== "custom" ? "background-size: ".concat(TABbackgroundSize, ";") : TABbackgroundSize === "custom" ? "background-size: ".concat(TABbgImgCustomSize).concat(TABbgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(TABbgImgPos && TABbgImgPos !== "custom" ? "background-position: ".concat(TABbgImgPos, ";") : TABbgImgPos === "custom" ? "background-position: ".concat(TABbgImgcustomPosX).concat(TABbgImgcustomPosXUnit, " ").concat(TABbgImgcustomPosY).concat(TABbgImgcustomPosYUnit, ";") : " ", "\n\n        ").concat(TABbgImgRepeat ? "background-repeat: ".concat(TABbgImgRepeat, ";") : " ", "\n\n        ") : " ", "\n\n    ").concat(backgroundType === "image" ? "background-attachment: scroll;" : " ", "\n\n  ");
  var backgroundStylesMobile = "\n    ".concat(backgroundType === "image" && bgImageURL ? "\n        ".concat(MOBbackgroundSize && MOBbackgroundSize !== "custom" ? "background-size: ".concat(MOBbackgroundSize, ";") : MOBbackgroundSize === "custom" ? "background-size: ".concat(MOBbgImgCustomSize).concat(MOBbgImgCustomSizeUnit, " auto;") : " ", "\n\n        ").concat(MOBbgImgPos && MOBbgImgPos !== "custom" ? "background-position: ".concat(MOBbgImgPos, ";") : MOBbgImgPos === "custom" ? "background-position: ".concat(MOBbgImgcustomPosX).concat(MOBbgImgcustomPosXUnit, " ").concat(MOBbgImgcustomPosY).concat(MOBbgImgcustomPosYUnit, ";") : " ", "\n\n        ").concat(MOBbgImgRepeat ? "background-repeat: ".concat(MOBbgImgRepeat, ";") : " ", "\n\n        ") : " ", "\n\n  ");
  var overlyStyles = "\n  \n    ".concat(backgroundType === "image" && isBgOverly ? "\n          content: \"\";\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          right: 0;\n          left: 0;\n          z-index: -1;\n\n          ".concat(overlyType === "fill" ? "background-color: ".concat(overlyColor, ";") : overlyType === "gradient" ? "background-image: ".concat(overlyGradient, ";") : " ", "\n      ") : " ", "\n  \n  \n  ");
  return {
    backgroundStylesDesktop: backgroundStylesDesktop,
    backgroundStylesTab: backgroundStylesTab,
    backgroundStylesMobile: backgroundStylesMobile,
    overlyStyles: overlyStyles
  };
}; // function to generate responsive range controller attributes for multiple range control based on the array of prefix

var generateResponsiveRangeAttributes = function generateResponsiveRangeAttributes(controlName) {
  var _objectSpread11;

  var defaultRange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  var desktop = defaultRange ? _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number",
    "default": "".concat(defaultRange)
  }) : _defineProperty({}, "".concat(controlName, "Range"), {
    type: "number"
  });

  var result = _objectSpread(_objectSpread(_defineProperty({}, "".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), desktop), {}, (_objectSpread11 = {}, _defineProperty(_objectSpread11, "TAB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread11, "TAB".concat(controlName, "Range"), {
    type: "number"
  }), _defineProperty(_objectSpread11, "MOB".concat(controlName, "Unit"), {
    type: "string",
    "default": "px"
  }), _defineProperty(_objectSpread11, "MOB".concat(controlName, "Range"), {
    type: "number"
  }), _objectSpread11));

  return _objectSpread({}, result);
}; // function to generate responsive range control styles for an element based on it's prefix

var generateResponsiveRangeStyles = function generateResponsiveRangeStyles(_ref17) {
  var controlName = _ref17.controlName,
      property = _ref17.property,
      attributes = _ref17.attributes;
  var desktopSizeUnit = attributes["".concat(controlName, "Unit")],
      desktopRange = attributes["".concat(controlName, "Range")],
      TABsizeUnit = attributes["TAB".concat(controlName, "Unit")],
      TABrange = attributes["TAB".concat(controlName, "Range")],
      MOBsizeUnit = attributes["MOB".concat(controlName, "Unit")],
      MOBrange = attributes["MOB".concat(controlName, "Range")];
  var size = isNaN(parseFloat(desktopRange)) ? "" : desktopSizeUnit;
  var rangeStylesDesktop = desktopRange ? property + ":" + desktopRange + size + ";" : "";
  var rangeStylesTab = TABrange ? property + ":" + TABrange + TABsizeUnit + ";" : "";
  var rangeStylesMobile = MOBrange ? property + ":" + MOBrange + MOBsizeUnit + ";" : "";
  return {
    rangeStylesDesktop: rangeStylesDesktop,
    rangeStylesTab: rangeStylesTab,
    rangeStylesMobile: rangeStylesMobile
  };
}; // Return flilp value based on type

var getFlipTransform = function getFlipTransform(flipType) {
  switch (flipType) {
    case "flip-left":
      return "rotateY(-180deg)";

    case "flip-right":
      return "rotateY(180deg)";

    case "flip-up":
      return "rotateX(180deg)";

    case "flip-bottom":
      return "rotateX(-180deg)";

    case "zoom-in":
      return "scale(1.1)";

    case "zoom-out":
      return "scale(0.8)";
  }
}; // Return css class names based on button style name

var getButtonClasses = function getButtonClasses(buttonStyle) {
  switch (buttonStyle) {
    case "styleOne":
      return "btn-gradient blue";

    case "styleTwo":
      return "btn-gradient purple";

    case "styleThree":
      return "btn-gradient orange";

    case "custom":
      return "";
  }
};
var getBackgroundImage = function getBackgroundImage(type, gradientValue, imageURL) {
  switch (type) {
    case "fill":
      return "none";

    case "gradient":
      return gradientValue;

    case "image":
      if (imageURL) {
        return "url(".concat(imageURL, ")");
      }

      return "none";
  }
};

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
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



var ToggleButton = function ToggleButton(_ref) {
  var options = _ref.options,
      onChange = _ref.onChange,
      defaultSelected = _ref.defaultSelected;

  var _useState = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useState"])(defaultSelected || options[0]),
      _useState2 = _slicedToArray(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    onChange(selected.value);
  }, [selected]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (defaultSelected) {
      setSelected(defaultSelected);
    }
  }, [defaultSelected]);
  return /*#__PURE__*/React.createElement("div", {
    id: "switch",
    className: "eb-switch-control"
  }, options.map(function (option) {
    return /*#__PURE__*/React.createElement("label", null, /*#__PURE__*/React.createElement("input", {
      type: "radio",
      name: "gh",
      placeholder: "name",
      onChange: function onChange() {
        return setSelected(option);
      }
    }), /*#__PURE__*/React.createElement("span", {
      style: {
        color: selected.value === option.value ? "white" : "black"
      }
    }, option.label));
  }), /*#__PURE__*/React.createElement("span", {
    className: "slideBg",
    style: {
      backgroundColor: "#551ef7",
      transform: selected == options[0] ? "translateX(0)" : "translateX(100%)"
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ToggleButton);

/***/ }),

/***/ "./util/typography-control-v2/FontPicker.js":
/*!**************************************************!*\
  !*** ./util/typography-control-v2/FontPicker.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
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
var BaseControl = wp.components.BaseControl; // import { __ } from "@wordpress/i18n";
// import { withInstanceId } from "@wordpress/compose";
// import { BaseControl } from "@wordpress/components";

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

/***/ "./util/typography-control-v2/Icon.js":
/*!********************************************!*\
  !*** ./util/typography-control-v2/Icon.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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

/* harmony default export */ __webpack_exports__["default"] = (TypographyIcon);

/***/ }),

/***/ "./util/typography-control-v2/WithResButtons.js":
/*!******************************************************!*\
  !*** ./util/typography-control-v2/WithResButtons.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WithResButtons; });
/* harmony import */ var _typoHelpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typoHelpers */ "./util/typography-control-v2/typoHelpers.js");

function WithResButtons(_ref) {
  var className = _ref.className,
      children = _ref.children,
      resOption = _ref.resOption,
      setAttributes = _ref.setAttributes;
  return /*#__PURE__*/React.createElement("div", {
    className: "wrap_res ".concat(className || " ")
  }, /*#__PURE__*/React.createElement("div", {
    className: "resIcons"
  }, /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleDesktopBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-desktop ".concat(resOption === "desktop" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleTabBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-tablet ".concat(resOption === "tab" ? "active" : " ")
  }), /*#__PURE__*/React.createElement("span", {
    onClick: function onClick() {
      return Object(_typoHelpers__WEBPACK_IMPORTED_MODULE_0__["handleMobileBtnClick"])({
        setAttributes: setAttributes
      });
    },
    "class": "typoResButton dashicons dashicons-smartphone ".concat(resOption === "mobile" ? "active" : " ")
  })), children);
}

/***/ }),

/***/ "./util/typography-control-v2/constants.js":
/*!*************************************************!*\
  !*** ./util/typography-control-v2/constants.js ***!
  \*************************************************/
/*! exports provided: FONTS, sizeUnitTypes, optionsFontWeights, optionsTextTransforms, optionsTextDecorations, optionsLhLsp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FONTS", function() { return FONTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sizeUnitTypes", function() { return sizeUnitTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsFontWeights", function() { return optionsFontWeights; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextTransforms", function() { return optionsTextTransforms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsTextDecorations", function() { return optionsTextDecorations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "optionsLhLsp", function() { return optionsLhLsp; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

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
var sizeUnitTypes = [{
  label: "px",
  value: "px"
}, {
  label: "%",
  value: "%"
}, {
  label: "em",
  value: "em"
}];
var optionsFontWeights = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("100"),
  value: "100"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("200"),
  value: "200"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("300"),
  value: "300"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("400"),
  value: "400"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("500"),
  value: "500"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("600"),
  value: "600"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("700"),
  value: "700"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("800"),
  value: "800"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("900"),
  value: "900"
}];
var optionsTextTransforms = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "none"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Lowercase"),
  value: "lowercase"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Capitalize"),
  value: "capitalize"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Uppercase"),
  value: "uppercase"
}];
var optionsTextDecorations = [{
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Default"),
  value: ""
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("None"),
  value: "initial"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Overline"),
  value: "overline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Line Through"),
  value: "line-through"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline"),
  value: "underline"
}, {
  label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__["__"])("Underline Oveline"),
  value: "underline overline"
}];
var optionsLhLsp = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}];

/***/ }),

/***/ "./util/typography-control-v2/index.js":
/*!*********************************************!*\
  !*** ./util/typography-control-v2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _unit_control__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unit-control */ "./util/typography-control-v2/unit-control.js");
/* harmony import */ var _FontPicker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FontPicker */ "./util/typography-control-v2/FontPicker.js");
/* harmony import */ var _Icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Icon */ "./util/typography-control-v2/Icon.js");
/* harmony import */ var _WithResButtons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./WithResButtons */ "./util/typography-control-v2/WithResButtons.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants */ "./util/typography-control-v2/constants.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









function TypographyDropdown(_ref) {
  var baseLabel = _ref.baseLabel,
      typographyPrefixConstant = _ref.typographyPrefixConstant,
      resRequiredProps = _ref.resRequiredProps;
  var attributes = resRequiredProps.attributes,
      setAttributes = resRequiredProps.setAttributes,
      resOption = resRequiredProps.resOption;
  var fontFamily = attributes["".concat(typographyPrefixConstant, "FontFamily")],
      fontWeight = attributes["".concat(typographyPrefixConstant, "FontWeight")],
      textTransform = attributes["".concat(typographyPrefixConstant, "TextTransform")],
      textDecoration = attributes["".concat(typographyPrefixConstant, "TextDecoration")],
      fontSize = attributes["".concat(typographyPrefixConstant, "FontSize")],
      sizeUnit = attributes["".concat(typographyPrefixConstant, "SizeUnit")],
      letterSpacing = attributes["".concat(typographyPrefixConstant, "LetterSpacing")],
      letterSpacingUnit = attributes["".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      lineHeight = attributes["".concat(typographyPrefixConstant, "LineHeight")],
      lineHeightUnit = attributes["".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABsizeUnit = attributes["TAB".concat(typographyPrefixConstant, "SizeUnit")],
      TABletterSpacingUnit = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      TABlineHeightUnit = attributes["TAB".concat(typographyPrefixConstant, "LineHeightUnit")],
      TABfontSize = attributes["TAB".concat(typographyPrefixConstant, "FontSize")],
      TABletterSpacing = attributes["TAB".concat(typographyPrefixConstant, "LetterSpacing")],
      TABlineHeight = attributes["TAB".concat(typographyPrefixConstant, "LineHeight")],
      MOBsizeUnit = attributes["MOB".concat(typographyPrefixConstant, "SizeUnit")],
      MOBletterSpacingUnit = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacingUnit")],
      MOBlineHeightUnit = attributes["MOB".concat(typographyPrefixConstant, "LineHeightUnit")],
      MOBfontSize = attributes["MOB".concat(typographyPrefixConstant, "FontSize")],
      MOBletterSpacing = attributes["MOB".concat(typographyPrefixConstant, "LetterSpacing")],
      MOBlineHeight = attributes["MOB".concat(typographyPrefixConstant, "LineHeight")];
  return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["BaseControl"], {
    label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(baseLabel),
    className: "eb-typography-base"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Dropdown"], {
    className: "eb-typography-dropdown",
    contentClassName: "my-popover-content-classname",
    position: "bottom right",
    renderToggle: function renderToggle(_ref2) {
      var isOpen = _ref2.isOpen,
          onToggle = _ref2.onToggle;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["Button"], {
        isSmall: true,
        onClick: onToggle,
        "aria-expanded": isOpen
      }, /*#__PURE__*/React.createElement(_Icon__WEBPACK_IMPORTED_MODULE_4__["default"], null));
    },
    renderContent: function renderContent() {
      return /*#__PURE__*/React.createElement("div", {
        className: "eb-panel-control eb-typography-component-panel",
        style: {
          padding: "0.2rem"
        }
      }, /*#__PURE__*/React.createElement(_FontPicker__WEBPACK_IMPORTED_MODULE_3__["default"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Family"),
        value: fontFamily,
        onChange: function onChange(FontFamily) {
          setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontFamily"), FontFamily));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forFontSize",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: sizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(sizeUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "SizeUnit"), sizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: fontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: sizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: sizeUnit === "em" ? 10 : 300
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(TABsizeUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "SizeUnit"), TABsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: TABfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: TABsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: TABsizeUnit === "em" ? 10 : 300
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBsizeUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["sizeUnitTypes"],
        onClick: function onClick(MOBsizeUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "SizeUnit"), MOBsizeUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Size"),
        value: MOBfontSize,
        onChange: function onChange(FontSize) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "FontSize"), FontSize));
        },
        step: MOBsizeUnit === "em" ? 0.1 : 1,
        min: 0,
        max: MOBsizeUnit === "em" ? 10 : 300
      }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Font Weight"),
        value: fontWeight,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsFontWeights"],
        onChange: function onChange(FontWeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "FontWeight"), FontWeight));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Text Transform"),
        value: textTransform,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextTransforms"],
        onChange: function onChange(TextTransform) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextTransform"), TextTransform));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["SelectControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Text Decoration"),
        value: textDecoration,
        options: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsTextDecorations"],
        onChange: function onChange(TextDecoration) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "TextDecoration"), TextDecoration));
        }
      }), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLetterSpacing",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: letterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LetterSpacingUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacingUnit"), LetterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: letterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: letterSpacingUnit === "em" ? 10 : 100,
        step: letterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacingUnit"), TABletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: TABletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: TABletterSpacingUnit === "em" ? 10 : 100,
        step: TABletterSpacingUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBletterSpacingUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBletterSpacingUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacingUnit"), MOBletterSpacingUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Letter Spacing"),
        value: MOBletterSpacing,
        onChange: function onChange(LetterSpacing) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LetterSpacing"), LetterSpacing));
        },
        min: 0,
        max: MOBletterSpacingUnit === "em" ? 10 : 100,
        step: MOBletterSpacingUnit === "em" ? 0.1 : 1
      }))), /*#__PURE__*/React.createElement(_WithResButtons__WEBPACK_IMPORTED_MODULE_5__["default"], {
        className: "forLineHeight",
        resOption: resOption,
        setAttributes: setAttributes
      }, resOption === "desktop" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: lineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(LineHeightUnit) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeightUnit"), LineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: lineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: lineHeightUnit === "em" ? 10 : 600,
        step: lineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "tab" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: TABlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(TABlineHeightUnit) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeightUnit"), TABlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: TABlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "TAB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: TABlineHeightUnit === "em" ? 10 : 600,
        step: TABlineHeightUnit === "em" ? 0.1 : 1
      })), resOption === "mobile" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_unit_control__WEBPACK_IMPORTED_MODULE_2__["default"], {
        selectedUnit: MOBlineHeightUnit,
        unitTypes: _constants__WEBPACK_IMPORTED_MODULE_6__["optionsLhLsp"],
        onClick: function onClick(MOBlineHeightUnit) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeightUnit"), MOBlineHeightUnit));
        }
      }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_0__["RangeControl"], {
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])("Line Height"),
        value: MOBlineHeight,
        onChange: function onChange(LineHeight) {
          return setAttributes(_defineProperty({}, "MOB".concat(typographyPrefixConstant, "LineHeight"), LineHeight));
        },
        min: 0,
        max: MOBlineHeightUnit === "em" ? 10 : 600,
        step: MOBlineHeightUnit === "em" ? 0.1 : 1
      }))));
    }
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (TypographyDropdown);

/***/ }),

/***/ "./util/typography-control-v2/typoHelpers.js":
/*!***************************************************!*\
  !*** ./util/typography-control-v2/typoHelpers.js ***!
  \***************************************************/
/*! exports provided: handleDesktopBtnClick, handleTabBtnClick, handleMobileBtnClick */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleDesktopBtnClick", function() { return handleDesktopBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleTabBtnClick", function() { return handleTabBtnClick; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleMobileBtnClick", function() { return handleMobileBtnClick; });
var handleDesktopBtnClick = function handleDesktopBtnClick(_ref) {
  var setAttributes = _ref.setAttributes;
  document.body.classList.add("eb-res-option-desktop");
  document.body.classList.remove("eb-res-option-tab", "eb-res-option-mobile");
  setAttributes({
    resOption: "desktop"
  });
};
var handleTabBtnClick = function handleTabBtnClick(_ref2) {
  var setAttributes = _ref2.setAttributes;
  document.body.classList.add("eb-res-option-tab");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-mobile");
  setAttributes({
    resOption: "tab"
  });
};
var handleMobileBtnClick = function handleMobileBtnClick(_ref3) {
  var setAttributes = _ref3.setAttributes;
  document.body.classList.add("eb-res-option-mobile");
  document.body.classList.remove("eb-res-option-desktop", "eb-res-option-tab");
  setAttributes({
    resOption: "mobile"
  });
};

/***/ }),

/***/ "./util/typography-control-v2/unit-control.js":
/*!****************************************************!*\
  !*** ./util/typography-control-v2/unit-control.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "./util/unit-control/index.js":
/*!************************************!*\
  !*** ./util/unit-control/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    className: "eb-unit-control-btn-group"
  }, unitTypes.map(function (unit) {
    return /*#__PURE__*/React.createElement(Button, {
      className: "eb-unit-control-btn ".concat(unit.value === selectedUnit && "eb-unit-active"),
      isSmall: true,
      isPrimary: unit.value === selectedUnit,
      onClick: function onClick() {
        return _onClick(unit.value);
      }
    }, unit.label);
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (UnitControl);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["React"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map