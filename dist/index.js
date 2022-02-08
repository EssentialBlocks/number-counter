/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js ***!
  \****************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * 
 * React FontIconPicker
 * 
 * React Component to show a picker element to pick font-icons & svg
 * 
 * @author Swashata Ghosh <swashata@wpquark.com>
 * @version 1.2.0
 * @link https://github.com/fontIconPicker/react-fonticonpicker
 * @license MIT
 * 
 * Copyright (c) 2022 Swashata Ghosh <swashata@wpquark.com>
 * 
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 * 
 */
!function(e,t){ true?module.exports=t(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"),__webpack_require__(/*! react */ "react"),__webpack_require__(/*! classnames */ "./node_modules/classnames/index.js"),__webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/index.js"),__webpack_require__(/*! react-dom */ "react-dom")):0}(window,(function(e,t,r,n,o){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(t,r){t.exports=e},function(e,r){e.exports=t},function(e,t){e.exports=r},function(e,t){e.exports=n},function(e,t){e.exports=o},,,function(e,t,r){"use strict";r.r(t);var n=r(1),o=r.n(n),a=r(0),i=r.n(a),c=r(2),u=r.n(c),s=r(3);function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function f(){return(f=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function p(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var g=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=y(e);if(t){var o=y(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===l(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return h(e)}(this,r)}}(r);function r(){var e;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return m(h(e=t.call.apply(t,[this].concat(a))),"handleClick",(function(){e.props.onClick()})),m(h(e),"handleKeyDown",(function(t){32!==t.keyCode&&13!==t.keyCode||e.props.onClick()})),m(h(e),"handleDelete",(function(t,r){t.stopPropagation(),e.props.handleDeleteValue(r)})),m(h(e),"handleDeleteKeyboard",(function(t,r){32!==t.keyCode&&13!==t.keyCode||e.props.handleDeleteValue(r)})),m(h(e),"renderEmptyIcon",(function(){return o.a.createElement("span",{className:"rfipbtn__icon--empty"},e.props.noSelectedPlaceholder)})),e}return function(e,t,r){t&&p(e.prototype,t)}(r,[{key:"renderIcon",value:function(e){var t=this;return""===e||null==e?this.renderEmptyIcon():o.a.createElement("span",{className:"rfipbtn__icon",key:e},o.a.createElement("span",{className:"rfipbtn__elm"},this.props.renderIcon(e)),o.a.createElement("span",{className:"rfipbtn__del",onClick:function(r){return t.handleDelete(r,e)},onKeyDown:function(r){return t.handleDeleteKeyboard(r,e)},tabIndex:0,role:"button"},"×"))}},{key:"renderCurrentIcons",value:function(){var e=this;return this.props.isMulti?this.props.value.length?this.props.value.map((function(t){return e.renderIcon(t)})):this.renderEmptyIcon():this.renderIcon(this.props.value)}},{key:"render",value:function(){var e={onClick:this.handleClick,onKeyDown:this.handleKeyDown,onFocus:this.handleFocus,onBlur:this.handleBlur,tabIndex:0},t=u()("rfipbtn__button","rfipbtn__button--".concat(this.props.isOpen?"open":"close")),r=u()(this.props.className);return o.a.createElement("div",f({className:r,ref:this.props.domRef},e),o.a.createElement("div",{className:"rfipbtn__current"},this.renderCurrentIcons()),o.a.createElement("div",{className:t},o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"})))}}]),r}();m(g,"propTypes",{className:i.a.string.isRequired,isOpen:i.a.bool.isRequired,onClick:i.a.func.isRequired,domRef:i.a.object.isRequired,isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,renderIcon:i.a.func.isRequired,handleDeleteValue:i.a.func.isRequired,noSelectedPlaceholder:i.a.string.isRequired});var b=g;function v(e){return(v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function P(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function O(e,t){return(O=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var C=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&O(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=w(e);if(t){var o=w(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===v(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(this,r)}}(r);function r(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),t.apply(this,arguments)}return function(e,t,r){t&&P(e.prototype,t)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipcategory"},o.a.createElement("select",{className:"rfipcategory__select",onChange:this.props.handleCategory,value:this.props.value},this.props.categories.map((function(e,t){return o.a.createElement("option",{className:"rfipcategory__select__option",key:e,value:t},e)}))),o.a.createElement("i",{className:"fipicon-angle-down",role:"presentation","aria-label":"Open"}))}}]),r}();!function(e,t,r){t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r}(C,"propTypes",{handleCategory:i.a.func.isRequired,value:i.a.number.isRequired,categories:i.a.arrayOf(i.a.string).isRequired});var S=C,R=function(e){return o.a.createElement("div",{className:"rfipsearch"},o.a.createElement("input",{type:"text",className:"rfipsearch__input",value:e.value,onChange:e.handleSearch,placeholder:e.placeholder}))};R.propTypes={handleSearch:i.a.func.isRequired,value:i.a.string.isRequired,placeholder:i.a.string.isRequired};var E=R;function _(e){return(_="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function T(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function k(e){return function(e){if(Array.isArray(e))return I(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return I(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?I(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function I(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function N(e){var t=e.getBoundingClientRect(),r=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+r}}function x(e,t){this.givenType=e,this.requiredType=t,this.message="Expected of type: ".concat(this.requiredType,", found: ").concat(this.givenType),this.toString=function(){return"Invalid Source Exception: ".concat(this.message)}}function q(e){return(q="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function D(e){return function(e){if(Array.isArray(e))return A(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return A(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?A(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function M(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function V(e,t){return(V=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function B(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function K(e){return(K=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function F(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var L=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&V(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=K(e);if(t){var o=K(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===q(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return B(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),F(B(n=t.call(this,e)),"handleChangePage",(function(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,o=n.props.currentPage,a=n.state.totalPage;null!==r?"next"===r?o+=1:o-=1:o=parseInt(e.target.value,10)-1,o<0&&(o=0),o>a-1&&(o=a-1),t=o+1,null===r&&Number.isNaN(o)&&(o=0,t=""),n.setState({viewPage:t}),n.props.handleChangePage(o)})),F(B(n),"handlePageKeyBoard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangePage({},t)})),F(B(n),"handleChangeValue",(function(e){n.props.handleChangeValue(e)})),F(B(n),"handleValueKeyboard",(function(e,t){13!==e.keyCode&&32!==e.keyCode||n.handleChangeValue(t)})),n.state={viewPage:n.props.currentPage+1},n}return function(e,t,r){t&&M(e.prototype,t),r&&M(e,r)}(r,[{key:"renderPager",value:function(){var e=this;if(this.state.totalPage<1)return null;var t=this.props.currentPage>0?o.a.createElement("span",{className:"rfipicons__left",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"prev")},onClick:function(t){return e.handleChangePage(t,"prev")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Left"},o.a.createElement("i",{className:"fipicon-angle-left"}))):null,r=this.props.currentPage<this.state.totalPage-1?o.a.createElement("span",{className:"rfipicons__right",role:"button",tabIndex:0,onKeyDown:function(t){return e.handlePageKeyBoard(t,"next")},onClick:function(t){return e.handleChangePage(t,"next")}},o.a.createElement("span",{role:"presentation",className:"rfipicons__label","aria-label":"Right"},o.a.createElement("i",{className:"fipicon-angle-right"}))):null;return o.a.createElement("div",{className:"rfipicons__pager"},o.a.createElement("div",{className:"rfipicons__num"},o.a.createElement("input",{value:this.state.viewPage,onChange:this.handleChangePage,className:"rfipicons__cp",type:"tel",min:1}),o.a.createElement("span",{className:"rfipicons__sp"},"/"),o.a.createElement("span",{className:"rfipicons__tp"},this.state.totalPage)),o.a.createElement("div",{className:"rfipicons__arrow"},t,r))}},{key:"renderIconView",value:function(){var e=this;return this.state.totalPage>0?this.state.iconView.map((function(t,r){var n=u()("rfipicons__icon",{"rfipicons__icon--selected":e.props.value===t||Array.isArray(e.props.value)&&e.props.value.includes(t)});return o.a.createElement("span",{className:n,key:t,title:e.state.titleView[r]},o.a.createElement("span",{className:"rfipicons__ibox",tabIndex:0,role:"button",onClick:function(){return e.handleChangeValue(t)},onKeyDown:function(r){return e.handleValueKeyboard(r,t)}},e.props.renderIcon(t)))})):o.a.createElement("span",{className:"rfipicons__icon--error"},o.a.createElement("span",{className:"rfipicons__ibox--error"},this.props.noIconPlaceholder))}},{key:"render",value:function(){return o.a.createElement("div",{className:"rfipicons"},this.renderPager(),o.a.createElement("div",{className:"rfipicons__selector"},this.renderIconView()))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=r.getCategoryFilteredState(e.currentCategory,e.categories,e.icons),o=r.getCategoryFilteredState(e.currentCategory,e.categories,null===e.search?e.icons:e.search),a=r.getActiveIcons(n,o,e.currentSearch),i=a.activeIcons,c=a.activeTitles,u=e.currentPage,s=e.iconsPerPage,l={iconView:r.getCurrentViewIcons(i,s,u),titleView:r.getCurrentViewIcons(c,s,u),totalPage:Math.ceil(i.length/s)};return""!==t.viewPage&&(l.viewPage=e.currentPage+1),l}},{key:"getActiveIcons",value:function(e,t,r){var n=D(e),o=D(t);if(""===r||null===r)return{activeIcons:n,activeTitles:o};var a=[],i=[];return n.forEach((function(e,n){(function(e,t){e=e.toLowerCase();var r=(t=t.toLowerCase()).length,n=e.length;if(n>r)return!1;if(n===r)return e===t;e:for(var o=0,a=0;o<n;o++){for(var i=e.codePointAt(o);a<r;)if(t.codePointAt(a++)===i)continue e;return!1}return!0})(r,t[n])&&(a.includes(e)||a.push(e),i.includes(t[n])||i.push(t[n]))})),{activeIcons:a,activeTitles:i}}},{key:"getCategoryFilteredState",value:function(e,t,r){var n=null,o=function(e){return null===e?"null":"object"!==_(e)||Array.isArray(e)?Array.isArray(e)?"array":_(e):"object"}(r);if(Array.isArray(t)){if("object"!==o)throw new x(o,"object")}else if("array"!==o)throw new x(o,"array");return 0!==e&&Array.isArray(t)&&(n=t[e]||null),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(Array.isArray(e))return k(e);if(null!==t)return void 0!==e[t]?k(e[t]):[];var r=[],n=function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){T(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},e);return Object.keys(n).forEach((function(e){r=[].concat(k(r),k(n[e]))})),r}(r,n)}},{key:"getCurrentViewIcons",value:function(e,t,r){var n=r*t,o=(r+1)*t;return e.slice(n,o)}}]),r}();F(L,"propTypes",{categories:i.a.arrayOf(i.a.string),currentCategory:i.a.number,isMulti:i.a.bool.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.oneOfType([i.a.number,i.a.string]))]).isRequired,currentSearch:i.a.string.isRequired,handleChangeValue:i.a.func.isRequired,currentPage:i.a.number.isRequired,iconsPerPage:i.a.number.isRequired,handleChangePage:i.a.func.isRequired,renderIcon:i.a.func.isRequired,noIconPlaceholder:i.a.string.isRequired}),F(L,"defaultProps",{categories:null,currentCategory:null,search:null});var H=L;function U(e){return(U="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function W(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function $(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function z(e,t){return(z=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function Y(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function G(e){return(G=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function X(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&z(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=G(e);if(t){var o=G(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===U(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return Y(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),X(Y(n=t.call(this,e)),"handleCategory",(function(e){var t=parseInt(e.target.value,10);Number.isNaN(t)&&(t=0),n.props.handleChangeCategory(t),n.props.handleChangePage(0)})),X(Y(n),"handleSearch",(function(e){var t=e.target.value;n.props.handleChangeSearch(t)})),n.state={},n}return function(e,t,r){t&&$(e.prototype,t),r&&$(e,r)}(r,[{key:"render",value:function(){return o.a.createElement("div",{className:"rfipdropdown__selector"},this.props.showSearch?o.a.createElement(E,{handleSearch:this.handleSearch,value:this.state.searchString,placeholder:this.props.searchPlaceholder}):null,this.props.showCategory&&this.state.categories&&this.state.categories.length?o.a.createElement(S,{handleCategory:this.handleCategory,value:this.props.currentCategory,categories:this.state.categories}):null,o.a.createElement(H,{categories:this.state.categories,currentCategory:this.props.currentCategory,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,value:this.props.value,currentSearch:this.props.currentSearch,handleChangeValue:this.props.handleChangeValue,currentPage:this.props.currentPage,iconsPerPage:this.props.iconsPerPage,handleChangePage:this.props.handleChangePage,renderIcon:this.props.renderIcon,noIconPlaceholder:this.props.noIconPlaceholder}))}}],[{key:"getDerivedStateFromProps",value:function(e){var t=function(e){return Array.isArray(e)?null:Object.keys(e)}(e.icons);return null!==t&&(t=[e.allCatPlaceholder].concat(function(e){return function(e){if(Array.isArray(e))return W(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return W(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?W(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(t))),{categories:t,searchString:e.currentSearch}}}]),r}();X(J,"propTypes",{isMulti:i.a.bool.isRequired,value:i.a.oneOfType([i.a.number,i.a.string,i.a.arrayOf(i.a.any)]).isRequired,currentCategory:i.a.number.isRequired,currentPage:i.a.number.isRequired,currentSearch:i.a.string.isRequired,icons:i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.object,i.a.arrayOf(i.a.string)]),showCategory:i.a.bool.isRequired,showSearch:i.a.bool.isRequired,iconsPerPage:i.a.number.isRequired,allCatPlaceholder:i.a.string.isRequired,searchPlaceholder:i.a.string.isRequired,noIconPlaceholder:i.a.string.isRequired,renderIcon:i.a.func.isRequired,handleChangeValue:i.a.func.isRequired,handleChangeCategory:i.a.func.isRequired,handleChangePage:i.a.func.isRequired,handleChangeSearch:i.a.func.isRequired}),X(J,"defaultProps",{search:null});var Q=J,Z=r(4);function ee(e){return(ee="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function te(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function re(e,t){return(re=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function ne(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ae(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var ie=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&re(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=oe(e);if(t){var o=oe(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ee(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return ne(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ae(ne(n=t.call(this,e)),"syncPortalPosition",(function(){n.resetPortalPosition(),n.fixWindowOverflow()})),ae(ne(n),"fixWindowOverflow",(function(){var e=n.props.domRef.current.offsetWidth,t=n.props.domRef.current.offsetHeight,r=window,o=r.innerWidth,a=r.pageYOffset,i=document.documentElement.clientHeight,c=N(n.props.domRef.current),u=c.left,s=c.top,l=N("self"===n.state.appendRoot?n.props.domRef.current:n.state.appendRoot),f=n.props.btnRef.current,p=n.props.domRef.current,d=N(f),h=getComputedStyle(f),y=(parseInt(h.borderTop,10)||0)+(parseInt(h.borderBottom,10)||0);if(u+e>o-20){var m=d.left+n.props.btnRef.current.offsetWidth-(e+l.left);m+l.left<0&&(m=10-l.left),p.style.left="".concat(m,"px")}t+s-a>i&&d.top-t>0&&("self"===n.state.appendRoot?p.style.top="-".concat(t-y,"px"):p.style.top="".concat(d.top+y-t,"px"))})),n.state={},n.debouncedSyncPortalPosition=function(e,t){var r;return function(){var n=this,o=arguments;clearTimeout(r),r=setTimeout((function(){return e.apply(n,o)}),t)}}(n.syncPortalPosition,250),n}return function(e,t,r){t&&te(e.prototype,t),r&&te(e,r)}(r,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.debouncedSyncPortalPosition),window.addEventListener("scroll",this.debouncedSyncPortalPosition),this.syncPortalPosition()}},{key:"componentDidUpdate",value:function(){this.syncPortalPosition()}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.debouncedSyncPortalPosition),window.removeEventListener("scroll",this.debouncedSyncPortalPosition)}},{key:"positionPortal",value:function(){var e=this.props.domRef.current.style.display;this.props.domRef.current.style.display="none";var t=this.props.btnRef.current,r=N(t),n=N(this.state.appendRoot),o=t.offsetHeight;this.props.domRef.current.style.left="".concat(r.left-n.left,"px"),this.props.domRef.current.style.top="".concat(r.top+o,"px"),this.props.domRef.current.style.display=e}},{key:"resetPortalPosition",value:function(){var e=this.props.domRef.current;"self"===this.state.appendRoot?e.style.top="":this.positionPortal()}},{key:"render",value:function(){var e=u()(this.props.className,this.state.portalClasses),t=o.a.createElement("div",{className:e,ref:this.props.domRef},this.props.children);return"self"===this.state.appendRoot?t:Object(Z.createPortal)(t,this.state.appendRoot)}}],[{key:"getDerivedStateFromProps",value:function(e){var t=r.calculateAppendAndClass(e.appendRoot);return{appendRoot:t.appendRoot,portalClasses:t.portalClasses}}},{key:"calculateAppendAndClass",value:function(e){var t="self",r=u()({"rfipdropdown--portal":!1!==e});return!1!==e&&(t=document.querySelector(e)),{portalClasses:r,appendRoot:t}}}]),r}();ae(ie,"propTypes",{appendRoot:i.a.oneOfType([i.a.bool,i.a.string]),children:i.a.node.isRequired,domRef:i.a.object.isRequired,btnRef:i.a.object.isRequired,className:i.a.string.isRequired}),ae(ie,"defaultProps",{appendRoot:!1});var ce=ie;function ue(e){return(ue="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function se(e){return function(e){if(Array.isArray(e))return le(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return le(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?le(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function le(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function fe(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function pe(e,t){return(pe=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function de(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function he(e){return(he=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function ye(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var me=[],ge=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&pe(e,t)}(r,o.a.PureComponent);var t=function(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=he(e);if(t){var o=he(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return function(e,t){if(t&&("object"===ue(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return de(e)}(this,r)}}(r);function r(e){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,r),ye(de(n=t.call(this,e)),"handleOuterClick",(function(e){var t=e.target;n.isClickWithin(t)||n.closeDropdown()})),ye(de(n),"handleEscapeKeyboard",(function(e){27===e.keyCode&&n.closeDropdown()})),ye(de(n),"isClickWithin",(function(e){return"fipicon-angle-left"===e.className||"fipicon-angle-right"===e.className||"rfipicons__label"===e.className||n.fipButtonRef.current.contains(e)||n.fipDropDownRef.current&&n.fipDropDownRef.current.contains(e)})),ye(de(n),"handleToggle",(function(){n.setState((function(e){return n.handleDropDown(!e.isOpen,!1)}))})),ye(de(n),"closeDropdown",(function(){n.handleDropDown(!1)})),ye(de(n),"handleDropDown",(function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],o={isOpen:e};return o.elemClass=r.getDerivedClassName("rfip",n.props.theme,n.props.isMulti,e),o.btnClass=r.getDerivedClassName("rfipbtn",n.props.theme,n.props.isMulti,e),o.ddClass=r.getDerivedClassName("rfipdropdown",n.props.theme,n.props.isMulti,e),t&&n.setState(o),o})),ye(de(n),"handleChangeValue",(function(e){var t;n.props.isMulti?(t=se(n.state.value)).includes(e)?(t=t.filter((function(t){return t!==e}))).length||(t=me):t.push(e):t=e===n.state.value?"":e,n.setState({value:t,isOpen:!n.props.closeOnSelect}),n.props.onChange(t)})),ye(de(n),"handleDeleteValue",(function(e){var t;t=n.props.isMulti?n.state.value.filter((function(t){return t!==e})):r.getDerivedValue(t,n.props.isMulti),n.setState({value:t}),n.props.onChange(t)})),ye(de(n),"handleChangePage",(function(e){n.setState({currentPage:e})})),ye(de(n),"handleChangeCategory",(function(e){n.setState({currentCategory:e,currentPage:0})})),ye(de(n),"handleChangeSearch",(function(e){n.setState({currentSearch:e,currentPage:0})})),ye(de(n),"resetPortalStyle",(function(e){["maxHeight","paddingTop","paddingBottom"].forEach((function(t){e.style[t]=null}))})),ye(de(n),"handlePortalEnter",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t);n.fipPortalComputedStyle={height:r.height,paddingTop:r.paddingTop,paddingBottom:r.paddingBottom},["maxHeight","paddingTop","paddingBottom"].forEach((function(e){t.style[e]="0px"}))})),ye(de(n),"handlePortalEntering",(function(e){var t=e.childNodes[0];t.style.maxHeight=n.fipPortalComputedStyle.height,t.style.paddingTop=n.fipPortalComputedStyle.paddingTop,t.style.paddingBottom=n.fipPortalComputedStyle.paddingBottom})),ye(de(n),"handlePortalEntered",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t),n.props.showSearch&&void 0===window.orientation&&-1===navigator.userAgent.indexOf("IEMobile")&&t.querySelector(".rfipsearch__input").focus()})),ye(de(n),"handlePortalExit",(function(e){var t=e.childNodes[0];n.resetPortalStyle(t);var r=getComputedStyle(t).height;t.style.maxHeight=r})),ye(de(n),"handlePortalExiting",(function(e){var t=e.childNodes[0];t.style.maxHeight="0px",t.style.paddingTop="0px",t.style.paddingBottom="0px"})),ye(de(n),"renderIcon",(function(e){if("function"==typeof n.props.renderFunc)return n.props.renderFunc(e);if("class"===n.props.renderUsing)return o.a.createElement("i",{className:e});var t=ye({},n.props.renderUsing,n.props.convertHex?function(e){return String.fromCodePoint(parseInt(e,10))}(e):e);return o.a.createElement("i",t)})),n.fipButtonRef=o.a.createRef(),n.fipDropDownRef=o.a.createRef(),n.state={currentCategory:0,currentPage:0,isOpen:!1,currentSearch:""},n.fipPortalComputedStyle=null,n}return function(e,t,r){t&&fe(e.prototype,t),r&&fe(e,r)}(r,[{key:"componentDidMount",value:function(){var e=this;["click"].forEach((function(t){document.addEventListener(t,e.handleOuterClick,!1)})),document.addEventListener("keydown",this.handleEscapeKeyboard,!1),this.props.onChange(this.state.value)}},{key:"componentWillUnmount",value:function(){var e=this;["click"].forEach((function(t){document.removeEventListener(t,e.handleOuterClick,!1)})),document.removeEventListener("keydown",this.handleEscapeKeyboard,!1)}},{key:"render",value:function(){var e={currentCategory:this.state.currentCategory,currentPage:this.state.currentPage,currentSearch:this.state.currentSearch,value:this.state.value,isMulti:this.props.isMulti,icons:this.props.icons,search:this.props.search,showCategory:this.props.showCategory,showSearch:this.props.showSearch,iconsPerPage:this.props.iconsPerPage,allCatPlaceholder:this.props.allCatPlaceholder,searchPlaceholder:this.props.searchPlaceholder,noIconPlaceholder:this.props.noIconPlaceholder,renderIcon:this.renderIcon,handleChangeValue:this.handleChangeValue,handleChangeCategory:this.handleChangeCategory,handleChangePage:this.handleChangePage,handleChangeSearch:this.handleChangeSearch};return o.a.createElement("div",{className:this.state.elemClass,ref:this.fipRef},o.a.createElement(b,{className:this.state.btnClass,isOpen:this.state.isOpen,onClick:this.handleToggle,domRef:this.fipButtonRef,isMulti:this.props.isMulti,value:this.state.value,renderIcon:this.renderIcon,handleDeleteValue:this.handleDeleteValue,noSelectedPlaceholder:this.props.noSelectedPlaceholder}),o.a.createElement(s.CSSTransition,{classNames:"fipappear",timeout:300,in:this.state.isOpen,unmountOnExit:!0,onEnter:this.handlePortalEnter,onEntering:this.handlePortalEntering,onEntered:this.handlePortalEntered,onExit:this.handlePortalExit,onExiting:this.handlePortalExiting},o.a.createElement(ce,{appendRoot:this.props.appendTo,domRef:this.fipDropDownRef,btnRef:this.fipButtonRef,className:this.state.ddClass},o.a.createElement(Q,e))))}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n={};return n.elemClass=r.getDerivedClassName("rfip",e.theme,e.isMulti,t.isOpen),n.btnClass=r.getDerivedClassName("rfipbtn",e.theme,e.isMulti,t.isOpen),n.ddClass=r.getDerivedClassName("rfipdropdown",e.theme,e.isMulti,t.isOpen),n.value=r.getDerivedValue(e.value,e.isMulti),e.showCategory||0===t.currentCategory||(n.currentCategory=0,n.currentPage=0),e.showSearch||""===t.currentSearch||(n.currentSearch="",n.currentPage=0),n}},{key:"getDerivedClassName",value:function(e,t,r,n){return u()(e,"".concat(e,"--").concat(t),ye({},"".concat(e,"--multi"),r),"".concat(e,"--").concat(n?"open":"close"))}},{key:"getDerivedValue",value:function(e,t){var r=e;return t?r=Array.isArray(e)?se(e):me:"number"!=typeof e&&"string"!=typeof e&&(r=""),r}}]),r}();ye(ge,"propTypes",{icons:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.objectOf(i.a.oneOfType([i.a.arrayOf(i.a.number),i.a.arrayOf(i.a.string)]))]).isRequired,search:i.a.oneOfType([i.a.objectOf(i.a.arrayOf(i.a.string)),i.a.arrayOf(i.a.string)]),iconsPerPage:i.a.number,theme:i.a.string,onChange:i.a.func.isRequired,showCategory:i.a.bool,showSearch:i.a.bool,value:i.a.oneOfType([i.a.arrayOf(i.a.string),i.a.arrayOf(i.a.number),i.a.number,i.a.string]),isMulti:i.a.bool,renderUsing:i.a.string,convertHex:i.a.bool,renderFunc:i.a.func,appendTo:i.a.oneOfType([i.a.bool,i.a.string]),allCatPlaceholder:i.a.string,searchPlaceholder:i.a.string,noIconPlaceholder:i.a.string,noSelectedPlaceholder:i.a.string,closeOnSelect:i.a.bool}),ye(ge,"defaultProps",{search:null,iconsPerPage:20,theme:"default",showCategory:!0,showSearch:!0,value:null,isMulti:!1,renderUsing:"class",convertHex:!0,renderFunc:null,appendTo:!1,allCatPlaceholder:"Show from all",searchPlaceholder:"Search Icons",noIconPlaceholder:"No icons found",noSelectedPlaceholder:"Select icon",closeOnSelect:!1}),ye(ge,"displayName","FontIconPicker");var be=ge;t.default=be}]).default}));
//# sourceMappingURL=fonticonpicker.react.js.map

/***/ }),

/***/ "./src/attributes.js":
/*!***************************!*\
  !*** ./src/attributes.js ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





 // import {
// 	generateDimensionsAttributes,
// 	generateTypographyAttributes,
// 	generateBackgroundAttributes,
// 	generateBorderShadowAttributes,
// 	generateResponsiveRangeAttributes,
// } from "../../../util/helpers";

var _window$EBNumberCount = window.EBNumberCounterControls,
    generateDimensionsAttributes = _window$EBNumberCount.generateDimensionsAttributes,
    generateTypographyAttributes = _window$EBNumberCount.generateTypographyAttributes,
    generateBackgroundAttributes = _window$EBNumberCount.generateBackgroundAttributes,
    generateBorderShadowAttributes = _window$EBNumberCount.generateBorderShadowAttributes,
    generateResponsiveRangeAttributes = _window$EBNumberCount.generateResponsiveRangeAttributes;
/* harmony default export */ __webpack_exports__["default"] = (_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread(_objectSpread({
  // the following 4 attributes is must required for responsive options and asset generation for frontend
  // responsive control attributes ⬇
  resOption: {
    type: "string",
    "default": "Desktop"
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
  //
  //
  //
  // this attribute is for selecting the desired design preset from the layout design presets options ⬇
  layoutPreset: {
    type: "string",
    "default": "preset1"
  },
  // .eb-counter-wrapper flex-direction
  rootFlexDirection: {
    type: "string",
    "default": "column"
  },
  // .icon-img-wrapper align-self property
  mediaAlignSelf: {
    type: "string",
    "default": "center"
  },
  //
  contentsAlignSelf: {
    type: "string"
  },
  // .counter-contents-wrapper text-alignment
  contentAlignment: {
    type: "string",
    "default": "center"
  },
  //
  media: {
    type: "string",
    "default": "none" // default: "icon",

  },
  //
  selectedIcon: {
    type: "string",
    // source: "attribute",
    // selector: ".eb-infobox-icon-data-selector",
    // attribute: "data-icon",
    "default": "far fa-gem"
  },
  //
  iconColor: {
    type: "string"
  },
  //
  useIconBg: {
    type: "boolean",
    "default": true
  },
  //
  iconBgType: {
    type: "string",
    "default": "gradient"
  },
  //
  iconBgColor: {
    type: "string"
  },
  //
  iconBgGradient: {
    type: "string",
    "default": "linear-gradient(45deg,#ffc2de,#ff46a1)"
  },
  //
  //
  imageUrl: {
    type: "string"
  },
  imageId: {
    type: "string"
  },
  isMediaImgHeightAuto: {
    type: "boolean",
    "default": true
  }
}, generateTypographyAttributes(Object.values(_constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_0__))), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperMargin)), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgPadding, {
  top: 20,
  bottom: 20,
  right: 20,
  left: 20
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgRadius, {
  top: 20,
  bottom: 20,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.mediaBgMargin, {
  top: 15,
  isLinked: false
})), generateDimensionsAttributes(_constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_1__.wrapperPadding, {
  top: 30,
  bottom: 30,
  right: 10,
  left: 10,
  isLinked: false
})), generateBackgroundAttributes(_constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_2__.WrapBg, {
  isBgDefaultGradient: true,
  defaultBgGradient: "linear-gradient(45deg,#7967ff,#c277f2)"
})), generateBorderShadowAttributes(_constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_3__.wrpBdShadow)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rgNumTitle, {
  defaultRange: 20
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rgNumPrefix)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.rgNumSuffix)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaIconSize, {
  defaultRange: 50
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageWidth, {
  defaultRange: 300
})), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaImageHeight)), generateResponsiveRangeAttributes(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_4__.mediaContentGap, {
  defaultRange: 20,
  noUnits: true
})));

/***/ }),

/***/ "./src/constants/backgroundsConstants.js":
/*!***********************************************!*\
  !*** ./src/constants/backgroundsConstants.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "WrapBg": function() { return /* binding */ WrapBg; }
/* harmony export */ });
// each and every const here has to be totally unique from one another
var WrapBg = "wrpBG_";

/***/ }),

/***/ "./src/constants/borderShadowConstants.js":
/*!************************************************!*\
  !*** ./src/constants/borderShadowConstants.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrpBdShadow": function() { return /* binding */ wrpBdShadow; }
/* harmony export */ });
var wrpBdShadow = "wrp_";

/***/ }),

/***/ "./src/constants/dimensionsConstants.js":
/*!**********************************************!*\
  !*** ./src/constants/dimensionsConstants.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "wrapperMargin": function() { return /* binding */ wrapperMargin; },
/* harmony export */   "wrapperPadding": function() { return /* binding */ wrapperPadding; },
/* harmony export */   "mediaBgPadding": function() { return /* binding */ mediaBgPadding; },
/* harmony export */   "mediaBgMargin": function() { return /* binding */ mediaBgMargin; },
/* harmony export */   "mediaBgRadius": function() { return /* binding */ mediaBgRadius; }
/* harmony export */ });
var wrapperMargin = "wrapperMargin";
var wrapperPadding = "wrapperPadding"; //

var mediaBgPadding = "mdBgPd";
var mediaBgMargin = "mdBgMg";
var mediaBgRadius = "mdBgRs";

/***/ }),

/***/ "./src/constants/index.js":
/*!********************************!*\
  !*** ./src/constants/index.js ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SEPARATOR_OPTIONS": function() { return /* binding */ SEPARATOR_OPTIONS; },
/* harmony export */   "LAYOUT_OPTIONS": function() { return /* binding */ LAYOUT_OPTIONS; },
/* harmony export */   "FONT_WEIGHTS": function() { return /* binding */ FONT_WEIGHTS; },
/* harmony export */   "TEXT_TRANSFORM": function() { return /* binding */ TEXT_TRANSFORM; },
/* harmony export */   "TEXT_DECORATION": function() { return /* binding */ TEXT_DECORATION; },
/* harmony export */   "FONT_SIZE_UNITS": function() { return /* binding */ FONT_SIZE_UNITS; },
/* harmony export */   "LETTER_SPACING_LINE_HEIGHT_UNITS": function() { return /* binding */ LETTER_SPACING_LINE_HEIGHT_UNITS; },
/* harmony export */   "BACKGROUND_TYPES": function() { return /* binding */ BACKGROUND_TYPES; },
/* harmony export */   "BACKGROUND_SIZES": function() { return /* binding */ BACKGROUND_SIZES; },
/* harmony export */   "BORDER_STYLES": function() { return /* binding */ BORDER_STYLES; },
/* harmony export */   "SHADOW_HOVER_OPTIONS": function() { return /* binding */ SHADOW_HOVER_OPTIONS; },
/* harmony export */   "LAYOUT_TYPES": function() { return /* binding */ LAYOUT_TYPES; },
/* harmony export */   "MEDIA_TYPES": function() { return /* binding */ MEDIA_TYPES; },
/* harmony export */   "CONTENTS_ALIGNMENTS": function() { return /* binding */ CONTENTS_ALIGNMENTS; },
/* harmony export */   "MEDIA_ALIGNMENTS_ON_FLEX_COLUMN": function() { return /* binding */ MEDIA_ALIGNMENTS_ON_FLEX_COLUMN; },
/* harmony export */   "MEDIA_ALIGNMENTS_ON_FLEX_ROW": function() { return /* binding */ MEDIA_ALIGNMENTS_ON_FLEX_ROW; },
/* harmony export */   "CONTENTS_ALIGNMENTS_ON_FLEX_ROW": function() { return /* binding */ CONTENTS_ALIGNMENTS_ON_FLEX_ROW; },
/* harmony export */   "ICON_IMAGE_BG_TYPES": function() { return /* binding */ ICON_IMAGE_BG_TYPES; },
/* harmony export */   "sizeUnitTypes": function() { return /* binding */ sizeUnitTypes; },
/* harmony export */   "imgHeightUnits": function() { return /* binding */ imgHeightUnits; },
/* harmony export */   "HEADER_TAGS": function() { return /* binding */ HEADER_TAGS; }
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);

var SEPARATOR_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dot", "essential-blocks"),
  value: "Dot"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Space", "essential-blocks"),
  value: "Space"
}];
var LAYOUT_OPTIONS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Default", "essential-blocks"),
  value: "Default"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Reverse", "essential-blocks"),
  value: "Reverse"
}];
var FONT_WEIGHTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("100", "essential-blocks"),
  value: "100"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("200", "essential-blocks"),
  value: "200"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("300", "essential-blocks"),
  value: "300"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("400", "essential-blocks"),
  value: "400"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("500", "essential-blocks"),
  value: "500"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("600", "essential-blocks"),
  value: "600"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("700", "essential-blocks"),
  value: "700"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("800", "essential-blocks"),
  value: "800"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("900", "essential-blocks"),
  value: "900"
}];
var TEXT_TRANSFORM = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Lowercase", "essential-blocks"),
  value: "lowercase"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Capitalize", "essential-blocks"),
  value: "capitalize"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Uppercase", "essential-blocks"),
  value: "uppercase"
}];
var TEXT_DECORATION = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Initial", "essential-blocks"),
  value: "initial"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Overline", "essential-blocks"),
  value: "overline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Line Through", "essential-blocks"),
  value: "line-through"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline", "essential-blocks"),
  value: "underline"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Underline Oveline", "essential-blocks"),
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
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Fill", "essential-blocks"),
  value: "fill"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks"),
  value: "gradient"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image", "essential-blocks"),
  value: "image"
}];
var BACKGROUND_SIZES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto", "essential-blocks"),
  value: "auto"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Cover", "essential-blocks"),
  value: "cover"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Contain", "essential-blocks"),
  value: "contain"
}];
var BORDER_STYLES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("None", "essential-blocks"),
  value: "none"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dashed", "essential-blocks"),
  value: "dashed"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Solid", "essential-blocks"),
  value: "solid"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Dotted", "essential-blocks"),
  value: "dotted"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Double", "essential-blocks"),
  value: "double"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Groove", "essential-blocks"),
  value: "groove"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Inset", "essential-blocks"),
  value: "inset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Outset", "essential-blocks"),
  value: "outset"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ridge", "essential-blocks"),
  value: "ridge"
}];
var SHADOW_HOVER_OPTIONS = [{
  label: "Normal",
  value: "normal"
}, {
  label: "Hover",
  value: "hover"
}]; //
//
//
//

var LAYOUT_TYPES = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 1", "essential-blocks"),
  value: "preset1"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 2", "essential-blocks"),
  value: "preset2"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 3", "essential-blocks"),
  value: "preset3"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Preset 4", "essential-blocks"),
  value: "preset4"
}];
var MEDIA_TYPES = ["image", "icon", "none"];
var CONTENTS_ALIGNMENTS = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "left"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "right"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_COLUMN = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Left", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Center", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Right", "essential-blocks"),
  value: "flex-end"
}];
var MEDIA_ALIGNMENTS_ON_FLEX_ROW = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "flex-start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "flex-end"
}];
var CONTENTS_ALIGNMENTS_ON_FLEX_ROW = [{
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Top", "essential-blocks"),
  value: "start"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Middle", "essential-blocks"),
  value: "center"
}, {
  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Bottom", "essential-blocks"),
  value: "end"
}];
var ICON_IMAGE_BG_TYPES = [{
  label: "Fill",
  value: "fill"
}, {
  label: "Gradient",
  value: "gradient"
}];
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
var imgHeightUnits = [{
  label: "px",
  value: "px"
}, {
  label: "em",
  value: "em"
}, {
  label: "vh",
  value: "vh"
}];
var HEADER_TAGS = ["h1", "h2", "h3", "h4", "h5", "h6"];

/***/ }),

/***/ "./src/constants/rangeNames.js":
/*!*************************************!*\
  !*** ./src/constants/rangeNames.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "rgNumTitle": function() { return /* binding */ rgNumTitle; },
/* harmony export */   "rgNumPrefix": function() { return /* binding */ rgNumPrefix; },
/* harmony export */   "rgNumSuffix": function() { return /* binding */ rgNumSuffix; },
/* harmony export */   "mediaIconSize": function() { return /* binding */ mediaIconSize; },
/* harmony export */   "mediaImageWidth": function() { return /* binding */ mediaImageWidth; },
/* harmony export */   "mediaImageHeight": function() { return /* binding */ mediaImageHeight; },
/* harmony export */   "mediaContentGap": function() { return /* binding */ mediaContentGap; }
/* harmony export */ });
var rgNumTitle = "rgNT";
var rgNumPrefix = "rgNP";
var rgNumSuffix = "rgNS"; //

var mediaIconSize = "mIconZ";
var mediaImageWidth = "imgW";
var mediaImageHeight = "imgH";
var mediaContentGap = "mcGap";

/***/ }),

/***/ "./src/constants/typographyPrefixConstants.js":
/*!****************************************************!*\
  !*** ./src/constants/typographyPrefixConstants.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "typoPrefix_title": function() { return /* binding */ typoPrefix_title; },
/* harmony export */   "typoPrefix_number": function() { return /* binding */ typoPrefix_number; },
/* harmony export */   "typoPrefix_numPrefix": function() { return /* binding */ typoPrefix_numPrefix; },
/* harmony export */   "typoPrefix_numSuffix": function() { return /* binding */ typoPrefix_numSuffix; }
/* harmony export */ });
var typoPrefix_title = "title";
var typoPrefix_number = "number";
var typoPrefix_numPrefix = "prefix";
var typoPrefix_numSuffix = "suffix";

/***/ }),

/***/ "./src/edit.js":
/*!*********************!*\
  !*** ./src/edit.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _inspector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./inspector */ "./src/inspector.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/**
 * WordPress dependencies
 */





/**
 * Internal dependencies
 */







 // import {
// 	textInsideForEdit,
// 	softMinifyCssStrings,
// 	generateDimensionsControlStyles,
// 	generateTypographyStyles,
// 	generateBackgroundControlStyles,
// 	generateBorderShadowStyles,
// 	generateResponsiveRangeStyles,
// 	mimmikCssForPreviewBtnClick,
// 	duplicateBlockIdFix,
// } from "../../../util/helpers";

var _window$EBNumberCount = window.EBNumberCounterControls,
    textInsideForEdit = _window$EBNumberCount.textInsideForEdit,
    softMinifyCssStrings = _window$EBNumberCount.softMinifyCssStrings,
    generateDimensionsControlStyles = _window$EBNumberCount.generateDimensionsControlStyles,
    generateTypographyStyles = _window$EBNumberCount.generateTypographyStyles,
    generateBackgroundControlStyles = _window$EBNumberCount.generateBackgroundControlStyles,
    generateBorderShadowStyles = _window$EBNumberCount.generateBorderShadowStyles,
    generateResponsiveRangeStyles = _window$EBNumberCount.generateResponsiveRangeStyles,
    duplicateBlockIdFix = _window$EBNumberCount.duplicateBlockIdFix;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";

var Edit = function Edit(props) {
  var isSelected = props.isSelected,
      attributes = props.attributes,
      setAttributes = props.setAttributes,
      className = props.className,
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
      mediaImgWidthUnit = attributes["".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth, "Unit")],
      TABmediaImgWidthUnit = attributes["TAB".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth, "Unit")],
      MOBmediaImgWidthUnit = attributes["MOB".concat(_constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth, "Unit")],
      rootFlexDirection = attributes.rootFlexDirection,
      contentAlignment = attributes.contentAlignment,
      mediaAlignSelf = attributes.mediaAlignSelf,
      contentsAlignSelf = attributes.contentsAlignSelf,
      media = attributes.media,
      selectedIcon = attributes.selectedIcon,
      useIconBg = attributes.useIconBg,
      iconBgType = attributes.iconBgType,
      imageUrl = attributes.imageUrl,
      imageId = attributes.imageId,
      iconColor = attributes.iconColor,
      iconBgColor = attributes.iconBgColor,
      iconBgGradient = attributes.iconBgGradient,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto,
      mIconZUnit = attributes.mIconZUnit,
      mIconZRange = attributes.mIconZRange,
      TABmIconZUnit = attributes.TABmIconZUnit,
      TABmIconZRange = attributes.TABmIconZRange,
      MOBmIconZUnit = attributes.MOBmIconZUnit,
      MOBmIconZRange = attributes.MOBmIconZRange;
  var counterRef = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);

  var CounterAnimation = function CounterAnimation() {
    var time = duration && Math.floor(Math.abs(duration)) > 499 ? Math.floor(Math.abs(duration)) - 200 : 300;
    var endTarget = target ? Math.floor(Math.abs(target)) : 0;
    var cleanStartValue = startValue && Math.floor(Math.abs(startValue)) < endTarget ? Math.floor(Math.abs(startValue)) : 0;
    var increaseBy = (endTarget - cleanStartValue) / time * 53;
    var timeoutIdInside;
    var timeoutId = setTimeout(function () {
      function updateCount() {
        cleanStartValue += increaseBy;
        counterRef.current.innerText = textInsideForEdit(Math.floor(cleanStartValue), isShowSeparator, separator);

        if (cleanStartValue < endTarget) {
          timeoutIdInside = setTimeout(function () {
            updateCount();
          }, 53);
        } else {
          counterRef.current.innerText = textInsideForEdit(endTarget, isShowSeparator, separator);
        }
      }

      updateCount();
    }, 200);
    return function () {
      clearTimeout(timeoutId);
      clearTimeout(timeoutIdInside);
    };
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return CounterAnimation();
  }, [target, duration, startValue, separator, isShowSeparator]); // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // this useEffect is for creating a unique blockId for each block's unique className

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var BLOCK_PREFIX = "eb-counter";
    duplicateBlockIdFix({
      BLOCK_PREFIX: BLOCK_PREFIX,
      blockId: blockId,
      setAttributes: setAttributes,
      select: _wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select,
      clientId: clientId
    });
  }, []); // // this useEffect is for mimmiking css when responsive options clicked from wordpress's 'preview' button
  // useEffect(() => {
  // 	mimmikCssForPreviewBtnClick({
  // 		domObj: document,
  // 		select,
  // 	});
  // }, []);

  var blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, "eb-guten-block-main-parent-wrapper")
  }); //
  // CSS/styling Codes Starts from Here
  //
  // styles for generateTypographyStyles starts ⬇

  var _generateTypographySt = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_title,
    defaultFontSize: 40
  }),
      titleTypoStylesDesktop = _generateTypographySt.typoStylesDesktop,
      titleTypoStylesTab = _generateTypographySt.typoStylesTab,
      titleTypoStylesMobile = _generateTypographySt.typoStylesMobile;

  var _generateTypographySt2 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_number,
    defaultFontSize: 40
  }),
      numberTypoStylesDesktop = _generateTypographySt2.typoStylesDesktop,
      numberTypoStylesTab = _generateTypographySt2.typoStylesTab,
      numberTypoStylesMobile = _generateTypographySt2.typoStylesMobile;

  var _generateTypographySt3 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_numPrefix
  }),
      numPrefixTypoStylesDesktop = _generateTypographySt3.typoStylesDesktop,
      numPrefixTypoStylesTab = _generateTypographySt3.typoStylesTab,
      numPrefixTypoStylesMobile = _generateTypographySt3.typoStylesMobile;

  var _generateTypographySt4 = generateTypographyStyles({
    attributes: attributes,
    prefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_7__.typoPrefix_numSuffix
  }),
      numSuffixTypoStylesDesktop = _generateTypographySt4.typoStylesDesktop,
      numSuffixTypoStylesTab = _generateTypographySt4.typoStylesTab,
      numSuffixTypoStylesMobile = _generateTypographySt4.typoStylesMobile; // styles for generateTypographyStyles end
  // styles for generateDimensionsControlStyles starts ⬇


  var _generateDimensionsCo = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapperMargin,
    styleFor: "margin"
  }),
      wrapperMarginStylesDesktop = _generateDimensionsCo.dimensionStylesDesktop,
      wrapperMarginStylesTab = _generateDimensionsCo.dimensionStylesTab,
      wrapperMarginStylesMobile = _generateDimensionsCo.dimensionStylesMobile;

  var _generateDimensionsCo2 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.wrapperPadding,
    styleFor: "padding"
  }),
      wrapperPaddingStylesDesktop = _generateDimensionsCo2.dimensionStylesDesktop,
      wrapperPaddingStylesTab = _generateDimensionsCo2.dimensionStylesTab,
      wrapperPaddingStylesMobile = _generateDimensionsCo2.dimensionStylesMobile;

  var _generateDimensionsCo3 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBgPadding,
    styleFor: "padding"
  }),
      mediaBgPaddingDesktop = _generateDimensionsCo3.dimensionStylesDesktop,
      mediaBgPaddingTab = _generateDimensionsCo3.dimensionStylesTab,
      mediaBgPaddingMobile = _generateDimensionsCo3.dimensionStylesMobile;

  var _generateDimensionsCo4 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBgRadius,
    styleFor: "border-radius"
  }),
      mediaRadiusStylesDesktop = _generateDimensionsCo4.dimensionStylesDesktop,
      mediaRadiusStylesTab = _generateDimensionsCo4.dimensionStylesTab,
      mediaRadiusStylesMobile = _generateDimensionsCo4.dimensionStylesMobile;

  var _generateDimensionsCo5 = generateDimensionsControlStyles({
    attributes: attributes,
    controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_8__.mediaBgMargin,
    styleFor: "margin"
  }),
      mediaBgMarginStylesDesktop = _generateDimensionsCo5.dimensionStylesDesktop,
      mediaBgMarginStylesTab = _generateDimensionsCo5.dimensionStylesTab,
      mediaBgMarginStylesMobile = _generateDimensionsCo5.dimensionStylesMobile; // styles for generateDimensionsControlStyles end
  // styles for generateBackgroundControlStyles starts ⬇


  var _generateBackgroundCo = generateBackgroundControlStyles({
    attributes: attributes,
    controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_9__.WrapBg
  }),
      backgroundStylesDesktop = _generateBackgroundCo.backgroundStylesDesktop,
      hoverBackgroundStylesDesktop = _generateBackgroundCo.hoverBackgroundStylesDesktop,
      backgroundStylesTab = _generateBackgroundCo.backgroundStylesTab,
      hoverBackgroundStylesTab = _generateBackgroundCo.hoverBackgroundStylesTab,
      backgroundStylesMobile = _generateBackgroundCo.backgroundStylesMobile,
      hoverBackgroundStylesMobile = _generateBackgroundCo.hoverBackgroundStylesMobile,
      overlayStylesDesktop = _generateBackgroundCo.overlayStylesDesktop,
      hoverOverlayStylesDesktop = _generateBackgroundCo.hoverOverlayStylesDesktop,
      overlayStylesTab = _generateBackgroundCo.overlayStylesTab,
      hoverOverlayStylesTab = _generateBackgroundCo.hoverOverlayStylesTab,
      overlayStylesMobile = _generateBackgroundCo.overlayStylesMobile,
      hoverOverlayStylesMobile = _generateBackgroundCo.hoverOverlayStylesMobile,
      bgTransitionStyle = _generateBackgroundCo.bgTransitionStyle,
      ovlTransitionStyle = _generateBackgroundCo.ovlTransitionStyle; // styles for generateBackgroundControlStyles end
  // styles for generateBorderShadowStyles starts ⬇


  var _generateBorderShadow = generateBorderShadowStyles({
    controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_10__.wrpBdShadow,
    attributes: attributes
  }),
      bdShadowStyesDesktop = _generateBorderShadow.styesDesktop,
      bdShadowStyesTab = _generateBorderShadow.styesTab,
      bdShadowStyesMobile = _generateBorderShadow.styesMobile,
      bdShadowStylesHoverDesktop = _generateBorderShadow.stylesHoverDesktop,
      bdShadowStylesHoverTab = _generateBorderShadow.stylesHoverTab,
      bdShadowStylesHoverMobile = _generateBorderShadow.stylesHoverMobile,
      bdShadowTransitionStyle = _generateBorderShadow.transitionStyle; // styles for generateBorderShadowStyles end
  // styles for generateResponsiveRangeStyles starts ⬇


  var _generateResponsiveRa = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaIconSize,
    customUnit: "px",
    property: "font-size",
    attributes: attributes
  }),
      iconSizeDesktop = _generateResponsiveRa.rangeStylesDesktop,
      iconSizeTab = _generateResponsiveRa.rangeStylesTab,
      iconSizeMobile = _generateResponsiveRa.rangeStylesMobile;

  var _generateResponsiveRa2 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaContentGap,
    customUnit: "px",
    property: "gap",
    attributes: attributes
  }),
      contentMediaGapDesktop = _generateResponsiveRa2.rangeStylesDesktop,
      contentMediaGapTab = _generateResponsiveRa2.rangeStylesTab,
      contentMediaGapMobile = _generateResponsiveRa2.rangeStylesMobile;

  var _generateResponsiveRa3 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageHeight,
    property: "height",
    attributes: attributes
  }),
      mediaImgHeightDesktop = _generateResponsiveRa3.rangeStylesDesktop,
      mediaImgHeightTab = _generateResponsiveRa3.rangeStylesTab,
      mediaImgHeightMobile = _generateResponsiveRa3.rangeStylesMobile;

  var _generateResponsiveRa4 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.mediaImageWidth,
    property: "width",
    attributes: attributes
  }),
      mediaImgWidthDesktop = _generateResponsiveRa4.rangeStylesDesktop,
      mediaImgWidthTab = _generateResponsiveRa4.rangeStylesTab,
      mediaImgWidthMobile = _generateResponsiveRa4.rangeStylesMobile;

  var _generateResponsiveRa5 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.rgNumTitle,
    property: "gap",
    attributes: attributes
  }),
      numTitleGapDesktop = _generateResponsiveRa5.rangeStylesDesktop,
      numTitleGapTab = _generateResponsiveRa5.rangeStylesTab,
      numTitleGapMobile = _generateResponsiveRa5.rangeStylesMobile;

  var _generateResponsiveRa6 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.rgNumPrefix,
    property: "padding-left",
    attributes: attributes
  }),
      numPrefixGapDesktop = _generateResponsiveRa6.rangeStylesDesktop,
      numPrefixGapTab = _generateResponsiveRa6.rangeStylesTab,
      numPrefixGapMobile = _generateResponsiveRa6.rangeStylesMobile;

  var _generateResponsiveRa7 = generateResponsiveRangeStyles({
    controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_11__.rgNumSuffix,
    property: "padding-right",
    attributes: attributes
  }),
      numSuffixGapDesktop = _generateResponsiveRa7.rangeStylesDesktop,
      numSuffixGapTab = _generateResponsiveRa7.rangeStylesTab,
      numSuffixGapMobile = _generateResponsiveRa7.rangeStylesMobile; // styles for generateResponsiveRangeStyles end


  var wrapperStylesDesktop = "\n\n\t.eb-counter-wrapper.".concat(blockId, " .eb-counter-title,\n\t.eb-counter-wrapper.").concat(blockId, " h4.eb-counter-number {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " > * {\n\t\tposition: relative;\n\t}\t\n\n\t.eb-counter-wrapper.").concat(blockId, "{\n\t\toverflow:hidden;\n\t\tdisplay: flex;\n\t\tflex-direction:").concat(rootFlexDirection, ";\n\t\t").concat(media !== "none" ? "".concat(contentMediaGapDesktop) : "", "\n\t\t").concat(wrapperMarginStylesDesktop, "\n\t\t").concat(wrapperPaddingStylesDesktop, "\n\t\t").concat(backgroundStylesDesktop, "\n\t\t").concat(bdShadowStyesDesktop, "\n\t\ttransition:").concat(bgTransitionStyle, ", ").concat(bdShadowTransitionStyle, ";\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .counter-contents-wrapper{\n\t\tdisplay:flex;\n\t\tflex:1;\n\t\ttext-align: ").concat(contentAlignment || "center", ";\n\t\t").concat(contentsAlignSelf && media !== "none" ? "justify-content:".concat(contentsAlignSelf, ";") : "", "\n\t\t").concat(wrapperFlexDirection ? "flex-direction: ".concat(wrapperFlexDirection, ";") : " ", "\n\t\t").concat(numTitleGapDesktop, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\n\t\t").concat(hoverBackgroundStylesDesktop, "\n\t\t").concat(bdShadowStylesHoverDesktop, "\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesDesktop, "\n\t\ttransition:").concat(ovlTransitionStyle, ";\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesDesktop, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesDesktop, "\n\t\t").concat(numberColor ? " color : ".concat(numberColor, ";") : " ", "\n\t\t").concat(numPrefixGapDesktop, "\n\t\t").concat(numSuffixGapDesktop, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesDesktop, "\n\t\t").concat(titleColor ? "color : ".concat(titleColor, ";") : " ", "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesDesktop, "\n\t\t").concat(numPrefixColor ? "color : ".concat(numPrefixColor, ";") : " ", "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesDesktop, "\n\t\t").concat(numSuffixColor ? "color : ".concat(numSuffixColor, ";") : " ", "\n\t}\n\n\n\n\t").concat(media !== "none" ? "\n\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\talign-self: ").concat(mediaAlignSelf, ";\n\t\t\t\t").concat(mediaBgMarginStylesDesktop, "\n\t\t\t}\n\n\t\t\t").concat(media === "image" ? "\n\n\t\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper{\n\t\t\t\t\t\t").concat(mediaImgWidthUnit === "%" ? mediaImgWidthDesktop : " ", "\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper img {\n\t\t\t\t\t\t\n\t\t\t\t\t\t").concat(imageUrl ? mediaRadiusStylesDesktop : " ", "\n\t\t\t\t\t\t\n\t\t\t\t\t\t").concat(mediaImgWidthUnit === "%" ? "width: 100%;" : mediaImgWidthDesktop, "\n\t\t\t\t\t\t").concat(isMediaImgHeightAuto ? "height:auto;" : mediaImgHeightDesktop, "\n\t\t\t\t\t\t\n\t\t\t\t\t}\n\n\t\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-image-wrapper{\n\t\t\t\t\t\t").concat(imageUrl ? " " : mediaRadiusStylesDesktop, "\n\t\t\t\t\t}\n\t\t\t\t\t") : " ", "\n\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .eb-icon {\n\t\t\t\t\t\t\t\t\n\t\t\t\t\t").concat(mediaBgPaddingDesktop, "\n\t\t\t\t\t").concat(mediaRadiusStylesDesktop, "\n\n\t\t\t\t\t").concat(useIconBg ? "".concat(iconBgType === "fill" ? "background-color: ".concat(iconBgColor, ";") : iconBgType === "gradient" ? "background-image: ".concat(iconBgGradient, ";") : " ") : " ", "\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .eb-icon > span{\n\t\t\t\t\tcolor: ").concat(iconColor || "#fff", ";\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper .eb-counter-icon-data-selector {\n\t\t\t\t\t").concat(iconSizeDesktop, "\n\t\t\t\t\theight:").concat(mIconZRange).concat(mIconZUnit, ";\n\t\t\t\t\twidth:").concat(mIconZRange).concat(mIconZUnit, ";\n\t\t\t\t\tdisplay:flex;\n\t\t\t\t\tjustify-content:center;\n\t\t\t\t\talign-items:center;\n\t\t\t\t}\n\n\t\t\t\t") : "", "\n\t\t\t") : " ", "\n\t");
  var wrapperStylesTab = "\n\t.eb-counter-wrapper.".concat(blockId, "{\n\t\t").concat(media !== "none" ? "".concat(contentMediaGapTab) : "", "\n\t\t").concat(wrapperMarginStylesTab, "\n\t\t").concat(wrapperPaddingStylesTab, "\n\t\t").concat(backgroundStylesTab, "\n\t\t").concat(bdShadowStyesTab, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\t\n\t\t").concat(hoverBackgroundStylesTab, "\n\t\t").concat(bdShadowStylesHoverTab, "\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesTab, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesTab, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .counter-contents-wrapper{\n\t\t").concat(numTitleGapTab, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesTab, "\n\t\t").concat(numPrefixGapTab, "\n\t\t").concat(numSuffixGapTab, "\n\t} \n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesTab, "\n\t} \n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesTab, "\n\t}  \n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesTab, "\n\t} \n\n\n\t").concat(media !== "none" ? "\n\n\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\t").concat(mediaBgMarginStylesTab, "\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .eb-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\t\t\t\t\t\t").concat(mediaBgPaddingTab, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper .eb-counter-icon-data-selector {\n\t\t\t\t\t\t").concat(iconSizeTab, "\n\t\t\t\t\t\t").concat(TABmIconZRange ? "height:".concat(TABmIconZRange).concat(TABmIconZUnit, ";") : "", "\n\t\t\t\t\t\t").concat(TABmIconZRange ? "width:".concat(TABmIconZRange).concat(TABmIconZUnit, ";") : "", "\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\t\t\t\t\t\t\n\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper{\n\t\t\t\t\t").concat(TABmediaImgWidthUnit === "%" ? mediaImgWidthTab : mediaImgWidthUnit === "%" ? "width: auto;" : " ", "\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(TABmediaImgWidthUnit === "%" ? mediaImgWidthUnit === "%" ? " " : "width: 100%;" : mediaImgWidthTab, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "" : mediaImgHeightTab, "\n\t\t\t\t\t\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-image-wrapper{\n\t\t\t\t\t").concat(mediaRadiusStylesTab, "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t") : " ", "\n\n\t");
  var wrapperStylesMobile = "\n\t.eb-counter-wrapper.".concat(blockId, "{\n\t\t").concat(media !== "none" ? "".concat(contentMediaGapMobile) : "", "\n\t\t").concat(wrapperMarginStylesMobile, "\n\t\t").concat(wrapperPaddingStylesMobile, "\n\t\t").concat(backgroundStylesMobile, "\n\t\t").concat(bdShadowStyesMobile, "\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":hover{\t\t\n\t\t").concat(hoverBackgroundStylesMobile, "\n\t\t").concat(bdShadowStylesHoverMobile, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, ":before{\n\t\t").concat(overlayStylesMobile, "\n\t}\n\t\n\t.eb-counter-wrapper.").concat(blockId, ":hover:before{\n\t\t").concat(hoverOverlayStylesMobile, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .counter-contents-wrapper{\n\t\t").concat(numTitleGapMobile, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-number{\n\t\t").concat(numberTypoStylesMobile, "\n\t\t").concat(numPrefixGapMobile, "\n\t\t").concat(numSuffixGapMobile, "\n\t}\n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-title{\n\t\t").concat(titleTypoStylesMobile, "\n\t} \n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-prefix{\n\t\t").concat(numPrefixTypoStylesMobile, "\n\t}  \n\n\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-suffix{\n\t\t").concat(numSuffixTypoStylesMobile, "\n\t}\n\n\n\n\t").concat(media !== "none" ? "\n\n\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper {\n\t\t\t\t").concat(mediaBgMarginStylesMobile, "\t\t\t\t\n\t\t\t}\n\t\t\t\n\t\t\t").concat(media === "icon" ? "\n\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .eb-icon {\n\t\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\t\t\t\t\t\t").concat(mediaBgPaddingMobile, "\t\t\t\t\n\t\t\t\t\t}\n\t\t\t\t\t\n\t\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper .eb-counter-icon-data-selector {\n\t\t\t\t\t\t").concat(iconSizeMobile, "\n\t\t\t\t\t\t").concat(MOBmIconZRange ? "height:".concat(MOBmIconZRange).concat(MOBmIconZUnit, ";") : "", "\n\t\t\t\t\t\t").concat(MOBmIconZRange ? "width:".concat(MOBmIconZRange).concat(MOBmIconZUnit, ";") : "", "\n\t\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\n\t\t\t\n\t\t\t").concat(media === "image" ? "\n\t\t\t\t\t\t\n\t\t\t\t.eb-counter-wrapper.".concat(blockId, " .icon-img-wrapper{\n\t\t\t\t\t").concat(MOBmediaImgWidthUnit === "%" ? mediaImgWidthMobile : mediaImgWidthUnit === "%" ? "width: auto;" : " ", "\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .icon-img-wrapper img {\n\t\t\t\t\t\n\t\t\t\t\t").concat(MOBmediaImgWidthUnit === "%" ? mediaImgWidthUnit === "%" ? " " : "width: 100%;" : mediaImgWidthMobile, "\n\t\t\t\t\t\n\t\t\t\t\t").concat(isMediaImgHeightAuto ? "" : mediaImgHeightMobile, "\n\t\t\t\t\t\n\t\t\t\t}\n\n\t\t\t\t.eb-counter-wrapper.").concat(blockId, " .eb-counter-image-wrapper{\n\t\t\t\t\t").concat(mediaRadiusStylesMobile, "\n\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t") : " ", "\n\t\t") : " ", "\n\n\n\n\t");
  var desktopAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesDesktop, "\n\t"));
  var tabAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesTab, "\n\t"));
  var mobileAllStyles = softMinifyCssStrings("\n\t\t".concat(wrapperStylesMobile, "\n\t")); //
  // CSS/styling Codes Ends Here
  //
  // Set All Style in "blockMeta" Attribute

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
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
  }, [attributes]);
  return [isSelected && /*#__PURE__*/React.createElement(_inspector__WEBPACK_IMPORTED_MODULE_6__["default"], {
    attributes: attributes,
    setAttributes: setAttributes
  }), /*#__PURE__*/React.createElement("div", blockProps, /*#__PURE__*/React.createElement("style", null, "\n\t\t\t\t".concat(desktopAllStyles, "\n\n\t\t\t\t/* mimmikcssStart */\n\n\t\t\t\t").concat(resOption === "Tablet" ? tabAllStyles : " ", "\n\t\t\t\t").concat(resOption === "Mobile" ? tabAllStyles + mobileAllStyles : " ", "\n\n\t\t\t\t/* mimmikcssEnd */\n\n\t\t\t\t@media all and (max-width: 1024px) {\t\n\n\t\t\t\t\t/* tabcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(tabAllStyles), "\n\t\t\t\t\t/* tabcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t\n\t\t\t\t@media all and (max-width: 767px) {\n\t\t\t\t\t\n\t\t\t\t\t/* mobcssStart */\t\t\t\n\t\t\t\t\t").concat(softMinifyCssStrings(mobileAllStyles), "\n\t\t\t\t\t/* mobcssEnd */\t\t\t\n\t\t\t\t\n\t\t\t\t}\n\t\t\t\t")), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-counter-wrapper")
  }, media === "icon" ? /*#__PURE__*/React.createElement("div", {
    className: "icon-img-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-icon "
  }, /*#__PURE__*/React.createElement("span", {
    "data-icon": selectedIcon,
    className: "eb-counter-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "image" ? /*#__PURE__*/React.createElement("div", {
    className: "icon-img-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-counter-image-wrapper"
  }, /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
    onSelect: function onSelect(_ref) {
      var id = _ref.id,
          url = _ref.url;
      return setAttributes({
        imageUrl: url,
        imageId: id
      });
    },
    type: "image",
    value: imageId,
    render: function render(_ref2) {
      var open = _ref2.open;

      if (!imageUrl) {
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-infobox-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      } else {
        return /*#__PURE__*/React.createElement("img", {
          className: "eb-counter-image",
          src: imageUrl
        });
      }
    }
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "counter-contents-wrapper"
  }, /*#__PURE__*/React.createElement("h4", {
    className: "eb-counter-number"
  }, /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-prefix"
  }, counterPrefix), /*#__PURE__*/React.createElement("span", {
    ref: counterRef,
    className: "eb-counter eb-counter-number"
  }, "0"), /*#__PURE__*/React.createElement("span", {
    className: "eb-counter-suffix"
  }, counterSuffix)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.RichText, {
    tagName: "h3",
    className: "eb-counter-title",
    value: counterTitle,
    formattingControl: ["bold", "italic"],
    onChange: function onChange(counterTitle) {
      return setAttributes({
        counterTitle: counterTitle
      });
    }
  }))))];
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var example = {
  attributes: {
    target: "500000",
    duration: "1000",
    counterTitle: "Active Users",
    counterSuffix: "+",
    isShowSeparator: true,
    separator: ",",
    wrapperFlexDirection: "column"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (example);

/***/ }),

/***/ "./src/icon.js":
/*!*********************!*\
  !*** ./src/icon.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CounterIcon": function() { return /* binding */ CounterIcon; }
/* harmony export */ });
var CounterIcon = function CounterIcon() {
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
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit */ "./src/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./save */ "./src/save.js");
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icon */ "./src/icon.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../block.json */ "./block.json");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style.scss */ "./src/style.scss");
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _example__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./example */ "./src/example.js");
/**
 * WordPress dependeincies
 */

/**
 * Internal dependencies
 */






 // import deprecated from "./deprecated";


var _EBNumberCounterContr = EBNumberCounterControls,
    ebConditionalRegisterBlockType = _EBNumberCounterContr.ebConditionalRegisterBlockType;
ebConditionalRegisterBlockType(_block_json__WEBPACK_IMPORTED_MODULE_4__, {
  icon: _icon__WEBPACK_IMPORTED_MODULE_3__.CounterIcon,
  keywords: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("EB number counter", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("counter", "essential-blocks"), (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("counter up", "essential-blocks")],
  attributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"],
  edit: _edit__WEBPACK_IMPORTED_MODULE_1__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_2__["default"],
  example: _example__WEBPACK_IMPORTED_MODULE_7__["default"] // deprecated,

});

/***/ }),

/***/ "./src/inspector.js":
/*!**************************!*\
  !*** ./src/inspector.js ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fonticonpicker/react-fonticonpicker */ "./node_modules/@fonticonpicker/react-fonticonpicker/dist/fonticonpicker.react.js");
/* harmony import */ var _fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./attributes */ "./src/attributes.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./constants */ "./src/constants/index.js");
/* harmony import */ var _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants/typographyPrefixConstants */ "./src/constants/typographyPrefixConstants.js");
/* harmony import */ var _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./constants/dimensionsConstants */ "./src/constants/dimensionsConstants.js");
/* harmony import */ var _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./constants/backgroundsConstants */ "./src/constants/backgroundsConstants.js");
/* harmony import */ var _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./constants/borderShadowConstants */ "./src/constants/borderShadowConstants.js");
/* harmony import */ var _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./constants/rangeNames */ "./src/constants/rangeNames.js");
/**
 * WordPress dependencies
 */





/**
 * External dependencies
 */


/**
 * Internal dependencies
 */

 // import ColorControl from "../../../util/color-control";
// import ResponsiveDimensionsControl from "../../../util/dimensions-control-v2";
// import ResponsiveRangeController from "../../../util/responsive-range-control";
// import TypographyDropdown from "../../../util/typography-control-v2";
// import BackgroundControl from "../../../util/background-control";
// import BorderShadowControl from "../../../util/border-shadow-control";
// import {
// 	mimmikCssForResBtns,
// 	mimmikCssOnPreviewBtnClickWhileBlockSelected,
// } from "../../../util/helpers";
// import faIcons from "../../../util/faIcons.js";
// import ImageAvatar from "../../../util/image-avatar/";
// import GradientColorControl from "../../../util/gradient-color-controller";

var _window$EBNumberCount = window.EBNumberCounterControls,
    ColorControl = _window$EBNumberCount.ColorControl,
    ResponsiveDimensionsControl = _window$EBNumberCount.ResponsiveDimensionsControl,
    ResponsiveRangeController = _window$EBNumberCount.ResponsiveRangeController,
    TypographyDropdown = _window$EBNumberCount.TypographyDropdown,
    BackgroundControl = _window$EBNumberCount.BackgroundControl,
    BorderShadowControl = _window$EBNumberCount.BorderShadowControl,
    GradientColorControl = _window$EBNumberCount.GradientColorControl,
    ImageAvatar = _window$EBNumberCount.ImageAvatar,
    faIcons = _window$EBNumberCount.faIcons;
var editorStoreForGettingPreivew = eb_style_handler.editor_type === "edit-site" ? "core/edit-site" : "core/edit-post";







var Inspector = function Inspector(props) {
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
      layoutPreset = attributes.layoutPreset,
      rootFlexDirection = attributes.rootFlexDirection,
      contentAlignment = attributes.contentAlignment,
      mediaAlignSelf = attributes.mediaAlignSelf,
      contentsAlignSelf = attributes.contentsAlignSelf,
      media = attributes.media,
      selectedIcon = attributes.selectedIcon,
      iconColor = attributes.iconColor,
      useIconBg = attributes.useIconBg,
      iconBgType = attributes.iconBgType,
      iconBgColor = attributes.iconBgColor,
      iconBgGradient = attributes.iconBgGradient,
      imageUrl = attributes.imageUrl,
      imageId = attributes.imageId,
      isMediaImgHeightAuto = attributes.isMediaImgHeightAuto; // this useEffect is for setting the resOption attribute to desktop/tab/mobile depending on the added 'eb-res-option-' class only the first time once

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    setAttributes({
      resOption: (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.select)(editorStoreForGettingPreivew).__experimentalGetPreviewDeviceType()
    });
  }, []); // // this useEffect is for mimmiking css for all the eb blocks on resOption changing
  // useEffect(() => {
  // 	mimmikCssForResBtns({
  // 		domObj: document,
  // 		resOption,
  // 	});
  // }, [resOption]);
  // // this useEffect is to mimmik css for responsive preview in the editor page when clicking the buttons in the 'Preview button of wordpress' located beside the 'update' button while any block is selected and it's inspector panel is mounted in the DOM
  // useEffect(() => {
  // 	const cleanUp = mimmikCssOnPreviewBtnClickWhileBlockSelected({
  // 		domObj: document,
  // 		select,
  // 		setAttributes,
  // 	});
  // 	return () => {
  // 		cleanUp();
  // 	};
  // }, []);

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

  var handlePresetChange = function handlePresetChange(layoutPreset) {
    switch (layoutPreset) {
      case "preset1":
        setAttributes({
          rootFlexDirection: "column",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset2":
        setAttributes({
          rootFlexDirection: "column-reverse",
          contentAlignment: "center",
          mediaAlignSelf: "center"
        });
        break;

      case "preset3":
        setAttributes({
          rootFlexDirection: "row",
          contentAlignment: "left",
          mediaAlignSelf: "flex-start"
        });
        break;

      case "preset4":
        setAttributes({
          rootFlexDirection: "row-reverse",
          contentAlignment: "right",
          mediaAlignSelf: "flex-start"
        });
        break;
    }

    setAttributes({
      layoutPreset: layoutPreset
    });
  };

  var resRequiredProps = {
    setAttributes: setAttributes,
    resOption: resOption,
    attributes: attributes,
    objAttributes: _attributes__WEBPACK_IMPORTED_MODULE_6__["default"]
  };
  return /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.InspectorControls, {
    key: "controls"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-panel-control"
  }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TabPanel, {
    className: "eb-parent-tab-panel",
    activeClass: "active-tab" // onSelect={onSelect}
    ,
    tabs: [{
      name: "general",
      title: "General",
      className: "eb-tab general"
    }, {
      name: "styles",
      title: "Style",
      className: "eb-tab styles"
    }, {
      name: "advance",
      title: "Advanced",
      className: "eb-tab advance"
    }]
  }, function (tab) {
    return /*#__PURE__*/React.createElement("div", {
      className: "eb-tab-controls" + tab.name
    }, tab.name === "general" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody // initialOpen={false}
    , null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-infobox-image-icon",
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media Options", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-image-icon"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.MEDIA_TYPES.map(function (value) {
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isSecondary: media !== value,
        isPrimary: media === value,
        onClick: function onClick() {
          return setAttributes({
            media: value
          });
        }
      }, value);
    })))), media !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody // initialOpen={false}
    , null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Layout Preset ", "essential-blocks"),
      value: layoutPreset,
      options: _constants__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_TYPES,
      onChange: handlePresetChange
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media & content spacing", "Infobox"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.mediaContentGap,
      resRequiredProps: resRequiredProps,
      min: 0,
      max: 500,
      step: 1,
      noUnits: true
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Counter Settings", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-counter-start-value"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Starting Number", "essential-blocks"),
      value: startValue,
      type: "number",
      onChange: function onChange(value) {
        return !/[\-\.]/.test(value) && setAttributes({
          startValue: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-counter-end-value"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Ending Number", "essential-blocks"),
      value: target,
      type: "number",
      onChange: function onChange(value) {
        return !/[\-\.]/.test(value) && setAttributes({
          target: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-counter-duration"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Animation Duration", "essential-blocks"),
      value: duration,
      type: "number",
      onChange: function onChange(value) {
        return !/[\-\.]/.test(value) && setAttributes({
          duration: value
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-counter-prefix"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number Prefix", "essential-blocks"),
      value: counterPrefix,
      onChange: function onChange(counterPrefix) {
        return setAttributes({
          counterPrefix: counterPrefix
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-counter-suffix"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number Suffix", "essential-blocks"),
      value: counterSuffix,
      onChange: function onChange(counterSuffix) {
        return setAttributes({
          counterSuffix: counterSuffix
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Content layouts", "essential-blocks"),
      options: _constants__WEBPACK_IMPORTED_MODULE_7__.LAYOUT_OPTIONS,
      value: layoutLabel,
      onChange: function onChange(value) {
        return handleLayoutChange(value);
      }
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Thousand Separator", "essential-blocks"),
      checked: isShowSeparator,
      onChange: function onChange() {
        return setAttributes({
          isShowSeparator: !isShowSeparator
        });
      }
    }), isShowSeparator && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Separator", "essential-blocks"),
      options: _constants__WEBPACK_IMPORTED_MODULE_7__.SEPARATOR_OPTIONS,
      value: separastorSelectLabel,
      onChange: function onChange(value) {
        return handleSeparatorChange(value);
      }
    }))), tab.name === "styles" && /*#__PURE__*/React.createElement(React.Fragment, null, media !== "none" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Media", "essential-blocks")
    }, media === "icon" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Icon", "essential-blocks")
    }, /*#__PURE__*/React.createElement((_fonticonpicker_react_fonticonpicker__WEBPACK_IMPORTED_MODULE_5___default()), {
      icons: faIcons,
      onChange: function onChange(icon) {
        return setAttributes({
          selectedIcon: icon
        });
      },
      value: selectedIcon,
      appendTo: "body",
      isMulti: false
    })), selectedIcon && /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Icon Size", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.mediaIconSize,
      resRequiredProps: resRequiredProps,
      min: 8,
      max: 200,
      step: 1
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: iconColor,
      onChange: function onChange(iconColor) {
        return setAttributes({
          iconColor: iconColor
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBgPadding,
      baseLabel: "Padding"
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Use Background", "essential-blocks"),
      checked: useIconBg,
      onChange: function onChange() {
        return setAttributes({
          useIconBg: !useIconBg
        });
      }
    }), useIconBg && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Type", "essential-blocks")
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-infobox-background"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.ICON_IMAGE_BG_TYPES.map(function (_ref) {
      var value = _ref.value,
          label = _ref.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isPrimary: iconBgType === value,
        isSecondary: iconBgType !== value,
        onClick: function onClick() {
          return setAttributes({
            iconBgType: value
          });
        }
      }, label);
    }))), iconBgType === "fill" && /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "essential-blocks"),
      color: iconBgColor,
      onChange: function onChange(iconBgColor) {
        return setAttributes({
          iconBgColor: iconBgColor
        });
      }
    }), iconBgType === "gradient" && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient", "essential-blocks") // initialOpen={false}

    }, /*#__PURE__*/React.createElement(GradientColorControl, {
      gradientColor: iconBgGradient,
      onChange: function onChange(iconBgGradient) {
        return setAttributes({
          iconBgGradient: iconBgGradient
        });
      }
    })))), media === "image" && !imageUrl && /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
      onSelect: function onSelect(_ref2) {
        var id = _ref2.id,
            url = _ref2.url;
        return setAttributes({
          imageUrl: url,
          imageId: id
        });
      },
      type: "image",
      value: imageId,
      render: function render(_ref3) {
        var open = _ref3.open;
        return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          className: "eb-background-control-inspector-panel-img-btn components-button",
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Upload Image", "essential-blocks"),
          icon: "format-image",
          onClick: open
        });
      }
    }), media === "image" && imageUrl && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ImageAvatar, {
      imageUrl: imageUrl,
      onDeleteImage: function onDeleteImage() {
        return setAttributes({
          imageUrl: null
        });
      }
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Width", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.mediaImageWidth,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.sizeUnitTypes,
      min: 0,
      max: 500,
      step: 1
    }), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Auto Image Height", "essential-blocks"),
      checked: isMediaImgHeightAuto,
      onChange: function onChange() {
        return setAttributes({
          isMediaImgHeightAuto: !isMediaImgHeightAuto
        });
      }
    }), !isMediaImgHeightAuto && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Image Height", "essential-blocks"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.mediaImageHeight,
      resRequiredProps: resRequiredProps,
      units: _constants__WEBPACK_IMPORTED_MODULE_7__.imgHeightUnits,
      min: 0,
      max: 500,
      step: 1
    }))), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      forBorderRadius: true,
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBgRadius,
      baseLabel: "Border Radius"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.mediaBgMargin,
      baseLabel: "Margin"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Alignments", "essential-blocks")
    }, media !== "none" && /*#__PURE__*/React.createElement(React.Fragment, null, (rootFlexDirection === "row" || rootFlexDirection === "row-reverse") && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-infobox-alignments",
      label: "Media Vertical alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.MEDIA_ALIGNMENTS_ON_FLEX_ROW.map(function (_ref4) {
      var value = _ref4.value,
          label = _ref4.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isSecondary: mediaAlignSelf !== value,
        isPrimary: mediaAlignSelf === value,
        onClick: function onClick() {
          return setAttributes({
            mediaAlignSelf: value
          });
        }
      }, label);
    }))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-infobox-alignments",
      label: "Content Vertical alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.CONTENTS_ALIGNMENTS_ON_FLEX_ROW.map(function (_ref5) {
      var value = _ref5.value,
          label = _ref5.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isSecondary: contentsAlignSelf !== value,
        isPrimary: contentsAlignSelf === value,
        onClick: function onClick() {
          return setAttributes({
            contentsAlignSelf: value
          });
        }
      }, label);
    })))), (rootFlexDirection === "column" || rootFlexDirection === "column-reverse") && /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-infobox-alignments",
      label: "Media alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.MEDIA_ALIGNMENTS_ON_FLEX_COLUMN.map(function (_ref6) {
      var value = _ref6.value,
          label = _ref6.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isSecondary: mediaAlignSelf !== value,
        isPrimary: mediaAlignSelf === value,
        onClick: function onClick() {
          return setAttributes({
            mediaAlignSelf: value
          });
        }
      }, label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
      id: "eb-infobox-alignments",
      label: "Contents alignments"
    }, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
      id: "eb-infobox-alignments"
    }, _constants__WEBPACK_IMPORTED_MODULE_7__.CONTENTS_ALIGNMENTS.map(function (_ref7) {
      var value = _ref7.value,
          label = _ref7.label;
      return /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button // isLarge
      , {
        isSecondary: contentAlignment !== value,
        isPrimary: contentAlignment === value,
        onClick: function onClick() {
          return setAttributes({
            contentAlignment: value
          });
        }
      }, label);
    })))), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number", "essential-blocks")
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_number,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: numberColor,
      onChange: function onChange(numberColor) {
        return setAttributes({
          numberColor: numberColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "essential-blocks")
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_title,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: titleColor,
      onChange: function onChange(titleColor) {
        return setAttributes({
          titleColor: titleColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number prefix", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_numPrefix,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: numPrefixColor,
      onChange: function onChange(numPrefixColor) {
        return setAttributes({
          numPrefixColor: numPrefixColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number Suffix", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(TypographyDropdown, {
      baseLabel: "Typography",
      typographyPrefixConstant: _constants_typographyPrefixConstants__WEBPACK_IMPORTED_MODULE_8__.typoPrefix_numSuffix,
      resRequiredProps: resRequiredProps
    }), /*#__PURE__*/React.createElement(ColorControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color", "essential-blocks"),
      color: numSuffixColor,
      onChange: function onChange(numSuffixColor) {
        return setAttributes({
          numSuffixColor: numSuffixColor
        });
      }
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Spacing", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number & Title", "Number-counter"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.rgNumTitle,
      resRequiredProps: resRequiredProps,
      max: 100
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number & Prefix", "Number-counter"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.rgNumPrefix,
      resRequiredProps: resRequiredProps,
      max: 100
    }), /*#__PURE__*/React.createElement(ResponsiveRangeController, {
      baseLabel: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Number & Suffix", "Number-counter"),
      controlName: _constants_rangeNames__WEBPACK_IMPORTED_MODULE_12__.rgNumSuffix,
      resRequiredProps: resRequiredProps,
      max: 100
    }))), tab.name === "advance" && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Margin Padding", "essential-blocks")
    }, /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapperMargin,
      baseLabel: "Margin"
    }), /*#__PURE__*/React.createElement(ResponsiveDimensionsControl, {
      resRequiredProps: resRequiredProps,
      controlName: _constants_dimensionsConstants__WEBPACK_IMPORTED_MODULE_9__.wrapperPadding,
      baseLabel: "Padding"
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background", "essential-blocks"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BackgroundControl, {
      controlName: _constants_backgroundsConstants__WEBPACK_IMPORTED_MODULE_10__.WrapBg,
      resRequiredProps: resRequiredProps
    })), /*#__PURE__*/React.createElement(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Border & Shadow"),
      initialOpen: false
    }, /*#__PURE__*/React.createElement(BorderShadowControl, {
      controlName: _constants_borderShadowConstants__WEBPACK_IMPORTED_MODULE_11__.wrpBdShadow,
      resRequiredProps: resRequiredProps
    }))));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Inspector);

/***/ }),

/***/ "./src/save.js":
/*!*********************!*\
  !*** ./src/save.js ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
      separator = attributes.separator,
      media = attributes.media,
      selectedIcon = attributes.selectedIcon,
      imageUrl = attributes.imageUrl;
  return /*#__PURE__*/React.createElement("div", _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps.save(), /*#__PURE__*/React.createElement("div", {
    className: "".concat(blockId, " eb-counter-wrapper")
  }, media === "icon" ? /*#__PURE__*/React.createElement("div", {
    className: "icon-img-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-icon "
  }, /*#__PURE__*/React.createElement("span", {
    "data-icon": selectedIcon,
    className: "eb-counter-icon-data-selector  ".concat(selectedIcon)
  }))) : null, media === "image" ? /*#__PURE__*/React.createElement("div", {
    className: "icon-img-wrapper"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eb-counter-image-wrapper"
  }, /*#__PURE__*/React.createElement("img", {
    className: "eb-counter-image",
    src: imageUrl
  }))) : null, /*#__PURE__*/React.createElement("div", {
    className: "counter-contents-wrapper"
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
  }, counterSuffix)), /*#__PURE__*/React.createElement(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.RichText.Content, {
    tagName: "h3",
    className: "eb-counter-title",
    value: counterTitle
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./node_modules/dom-helpers/class/addClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/addClass.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports["default"] = addClass;

var _hasClass = _interopRequireDefault(__webpack_require__(/*! ./hasClass */ "./node_modules/dom-helpers/class/hasClass.js"));

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass.default)(element, className)) if (typeof element.className === 'string') element.className = element.className + ' ' + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + ' ' + className);
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/hasClass.js":
/*!****************************************************!*\
  !*** ./node_modules/dom-helpers/class/hasClass.js ***!
  \****************************************************/
/***/ (function(module, exports) {

"use strict";


exports.__esModule = true;
exports["default"] = hasClass;

function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/dom-helpers/class/removeClass.js":
/*!*******************************************************!*\
  !*** ./node_modules/dom-helpers/class/removeClass.js ***!
  \*******************************************************/
/***/ (function(module) {

"use strict";


function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp('(^|\\s)' + classToRemove + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}

module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else if (typeof element.className === 'string') element.className = replaceClassName(element.className, className);else element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
};

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/object-assign/index.js":
/*!*********************************************!*\
  !*** ./node_modules/object-assign/index.js ***!
  \*********************************************/
/***/ (function(module) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
  var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");

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
    } catch (x) { /**/ }
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
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
var has = __webpack_require__(/*! ./lib/has */ "./node_modules/prop-types/lib/has.js");
var checkPropTypes = __webpack_require__(/*! ./checkPropTypes */ "./node_modules/prop-types/checkPropTypes.js");

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
    bigint: createPrimitiveTypeChecker('bigint'),
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
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
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
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
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

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
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
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
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
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
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

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
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
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
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
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

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
/***/ (function(module) {

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

/***/ "./node_modules/prop-types/lib/has.js":
/*!********************************************!*\
  !*** ./node_modules/prop-types/lib/has.js ***!
  \********************************************/
/***/ (function(module) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),

/***/ "./node_modules/react-is/cjs/react-is.development.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-is/cjs/react-is.development.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports) {

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
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (false) {} else {
  module.exports = __webpack_require__(/*! ./cjs/react-is.development.js */ "./node_modules/react-is/cjs/react-is.development.js");
}


/***/ }),

/***/ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js":
/*!****************************************************************************!*\
  !*** ./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "polyfill": function() { return /* binding */ polyfill; }
/* harmony export */ });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),

/***/ "./node_modules/react-transition-group/CSSTransition.js":
/*!**************************************************************!*\
  !*** ./node_modules/react-transition-group/CSSTransition.js ***!
  \**************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _addClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/addClass */ "./node_modules/dom-helpers/class/addClass.js"));

var _removeClass = _interopRequireDefault(__webpack_require__(/*! dom-helpers/class/removeClass */ "./node_modules/dom-helpers/class/removeClass.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var addClass = function addClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _addClass.default)(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return (0, _removeClass.default)(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](http://www.nganimate.org/) library, you should use it if you're
 * using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity: 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**.
 */


var CSSTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;

    _this.onEnter = function (node, appearing) {
      var _this$getClassNames = _this.getClassNames(appearing ? 'appear' : 'enter'),
          className = _this$getClassNames.className;

      _this.removeClasses(node, 'exit');

      addClass(node, className);

      if (_this.props.onEnter) {
        _this.props.onEnter(node, appearing);
      }
    };

    _this.onEntering = function (node, appearing) {
      var _this$getClassNames2 = _this.getClassNames(appearing ? 'appear' : 'enter'),
          activeClassName = _this$getClassNames2.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onEntering) {
        _this.props.onEntering(node, appearing);
      }
    };

    _this.onEntered = function (node, appearing) {
      var appearClassName = _this.getClassNames('appear').doneClassName;

      var enterClassName = _this.getClassNames('enter').doneClassName;

      var doneClassName = appearing ? appearClassName + " " + enterClassName : enterClassName;

      _this.removeClasses(node, appearing ? 'appear' : 'enter');

      addClass(node, doneClassName);

      if (_this.props.onEntered) {
        _this.props.onEntered(node, appearing);
      }
    };

    _this.onExit = function (node) {
      var _this$getClassNames3 = _this.getClassNames('exit'),
          className = _this$getClassNames3.className;

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      addClass(node, className);

      if (_this.props.onExit) {
        _this.props.onExit(node);
      }
    };

    _this.onExiting = function (node) {
      var _this$getClassNames4 = _this.getClassNames('exit'),
          activeClassName = _this$getClassNames4.activeClassName;

      _this.reflowAndAddClass(node, activeClassName);

      if (_this.props.onExiting) {
        _this.props.onExiting(node);
      }
    };

    _this.onExited = function (node) {
      var _this$getClassNames5 = _this.getClassNames('exit'),
          doneClassName = _this$getClassNames5.doneClassName;

      _this.removeClasses(node, 'exit');

      addClass(node, doneClassName);

      if (_this.props.onExited) {
        _this.props.onExited(node);
      }
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + '-' : '';
      var className = isStringClassNames ? prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? className + '-active' : classNames[type + 'Active'];
      var doneClassName = isStringClassNames ? className + '-done' : classNames[type + 'Done'];
      return {
        className: className,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$getClassNames6 = this.getClassNames(type),
        className = _this$getClassNames6.className,
        activeClassName = _this$getClassNames6.activeClassName,
        doneClassName = _this$getClassNames6.doneClassName;

    className && removeClass(node, className);
    activeClassName && removeClass(node, activeClassName);
    doneClassName && removeClass(node, doneClassName);
  };

  _proto.reflowAndAddClass = function reflowAndAddClass(node, className) {
    // This is for to force a repaint,
    // which is necessary in order to transition styles when adding a class name.
    if (className) {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
      /* eslint-enable no-unused-expressions */

      addClass(node, className);
    }
  };

  _proto.render = function render() {
    var props = _extends({}, this.props);

    delete props.classNames;
    return _react.default.createElement(_Transition.default, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(_react.default.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, _Transition.default.propTypes, {
  /**
   * The animation classNames applied to the component as it enters, exits or
   * has finished the transition. A single name can be provided and it will be
   * suffixed for each stage: e.g.
   *
   * `classNames="fade"` applies `fade-enter`, `fade-enter-active`,
   * `fade-enter-done`, `fade-exit`, `fade-exit-active`, `fade-exit-done`,
   * `fade-appear`, `fade-appear-active`, and `fade-appear-done`.
   *
   * **Note**: `fade-appear-done` and `fade-enter-done` will _both_ be applied.
   * This allows you to define different behavior for when appearing is done and
   * when regular entering is done, using selectors like
   * `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply an
   * epic entrance animation when element first appears in the DOM using
   * [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   * simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: _PropTypes.classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : 0;
var _default = CSSTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/ReplaceTransition.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-transition-group/ReplaceTransition.js ***!
  \******************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = __webpack_require__(/*! react-dom */ "react-dom");

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

/**
 * The `<ReplaceTransition>` component is a specialized `Transition` component
 * that animates between two children.
 *
 * ```jsx
 * <ReplaceTransition in>
 *   <Fade><div>I appear first</div></Fade>
 *   <Fade><div>I replace the above</div></Fade>
 * </ReplaceTransition>
 * ```
 */
var ReplaceTransition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(ReplaceTransition, _React$Component);

  function ReplaceTransition() {
    var _this;

    for (var _len = arguments.length, _args = new Array(_len), _key = 0; _key < _len; _key++) {
      _args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(_args)) || this;

    _this.handleEnter = function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return _this.handleLifecycle('onEnter', 0, args);
    };

    _this.handleEntering = function () {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      return _this.handleLifecycle('onEntering', 0, args);
    };

    _this.handleEntered = function () {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return _this.handleLifecycle('onEntered', 0, args);
    };

    _this.handleExit = function () {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return _this.handleLifecycle('onExit', 1, args);
    };

    _this.handleExiting = function () {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return _this.handleLifecycle('onExiting', 1, args);
    };

    _this.handleExited = function () {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return _this.handleLifecycle('onExited', 1, args);
    };

    return _this;
  }

  var _proto = ReplaceTransition.prototype;

  _proto.handleLifecycle = function handleLifecycle(handler, idx, originalArgs) {
    var _child$props;

    var children = this.props.children;

    var child = _react.default.Children.toArray(children)[idx];

    if (child.props[handler]) (_child$props = child.props)[handler].apply(_child$props, originalArgs);
    if (this.props[handler]) this.props[handler]((0, _reactDom.findDOMNode)(this));
  };

  _proto.render = function render() {
    var _this$props = this.props,
        children = _this$props.children,
        inProp = _this$props.in,
        props = _objectWithoutPropertiesLoose(_this$props, ["children", "in"]);

    var _React$Children$toArr = _react.default.Children.toArray(children),
        first = _React$Children$toArr[0],
        second = _React$Children$toArr[1];

    delete props.onEnter;
    delete props.onEntering;
    delete props.onEntered;
    delete props.onExit;
    delete props.onExiting;
    delete props.onExited;
    return _react.default.createElement(_TransitionGroup.default, props, inProp ? _react.default.cloneElement(first, {
      key: 'first',
      onEnter: this.handleEnter,
      onEntering: this.handleEntering,
      onEntered: this.handleEntered
    }) : _react.default.cloneElement(second, {
      key: 'second',
      onEnter: this.handleExit,
      onEntering: this.handleExiting,
      onEntered: this.handleExited
    }));
  };

  return ReplaceTransition;
}(_react.default.Component);

ReplaceTransition.propTypes =  true ? {
  in: _propTypes.default.bool.isRequired,
  children: function children(props, propName) {
    if (_react.default.Children.count(props[propName]) !== 2) return new Error("\"" + propName + "\" must be exactly two transition components.");
    return null;
  }
} : 0;
var _default = ReplaceTransition;
exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/Transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/react-transition-group/Transition.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = exports.EXITING = exports.ENTERED = exports.ENTERING = exports.EXITED = exports.UNMOUNTED = void 0;

var PropTypes = _interopRequireWildcard(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactDom = _interopRequireDefault(__webpack_require__(/*! react-dom */ "react-dom"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _PropTypes = __webpack_require__(/*! ./utils/PropTypes */ "./node_modules/react-transition-group/utils/PropTypes.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var UNMOUNTED = 'unmounted';
exports.UNMOUNTED = UNMOUNTED;
var EXITED = 'exited';
exports.EXITED = EXITED;
var ENTERING = 'entering';
exports.ENTERING = ENTERING;
var ENTERED = 'entered';
exports.ENTERED = ENTERED;
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 0 },
 *   entered:  { opacity: 1 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

exports.EXITING = EXITING;

var Transition =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context.transitionGroup; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  var _proto = Transition.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: null // allows for nested Transitions

    };
  };

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  }; // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }


  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      var node = _reactDom.default.findDOMNode(this);

      if (nextStatus === ENTERING) {
        this.performEnter(node, mounting);
      } else {
        this.performExit(node);
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(node, mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context.transitionGroup ? this.context.transitionGroup.isMounting : mounting;
    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(node);
      });
      return;
    }

    this.props.onEnter(node, appearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(node, appearing);

      _this2.onTransitionEnd(node, enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(node, appearing);
        });
      });
    });
  };

  _proto.performExit = function performExit(node) {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts(); // no exit animation skip right to EXITED

    if (!exit) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(node);
      });
      return;
    }

    this.props.onExit(node);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(node);

      _this3.onTransitionEnd(node, timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(node);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(node, timeout, handler) {
    this.setNextCallback(handler);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      this.props.addEndListener(node, this.nextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        childProps = _objectWithoutPropertiesLoose(_this$props, ["children"]); // filter props for Transtition


    delete childProps.in;
    delete childProps.mountOnEnter;
    delete childProps.unmountOnExit;
    delete childProps.appear;
    delete childProps.enter;
    delete childProps.exit;
    delete childProps.timeout;
    delete childProps.addEndListener;
    delete childProps.onEnter;
    delete childProps.onEntering;
    delete childProps.onEntered;
    delete childProps.onExit;
    delete childProps.onExiting;
    delete childProps.onExited;

    if (typeof children === 'function') {
      return children(status, childProps);
    }

    var child = _react.default.Children.only(children);

    return _react.default.cloneElement(child, childProps);
  };

  return Transition;
}(_react.default.Component);

Transition.contextTypes = {
  transitionGroup: PropTypes.object
};
Transition.childContextTypes = {
  transitionGroup: function transitionGroup() {}
};
Transition.propTypes =  true ? {
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`, `'unmounted'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * Normally a component is not transitioned if it is shown when the `<Transition>` component mounts.
   * If you want to transition on the first mount set `appear` to `true`, and the
   * component will transition in as soon as the `<Transition>` mounts.
   *
   * > Note: there are no specific "appear" states. `appear` only adds an additional `enter` transition.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = _PropTypes.timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. **Note:** Timeouts are still used as a fallback if provided.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func // Name the function so it is clearer in the documentation

} : 0;

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = 0;
Transition.EXITED = 1;
Transition.ENTERING = 2;
Transition.ENTERED = 3;
Transition.EXITING = 4;

var _default = (0, _reactLifecyclesCompat.polyfill)(Transition);

exports["default"] = _default;

/***/ }),

/***/ "./node_modules/react-transition-group/TransitionGroup.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/TransitionGroup.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports["default"] = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _reactLifecyclesCompat = __webpack_require__(/*! react-lifecycles-compat */ "./node_modules/react-lifecycles-compat/react-lifecycles-compat.es.js");

var _ChildMapping = __webpack_require__(/*! ./utils/ChildMapping */ "./node_modules/react-transition-group/utils/ChildMapping.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var values = Object.values || function (obj) {
  return Object.keys(obj).map(function (k) {
    return obj[k];
  });
};

var defaultProps = {
  component: 'div',
  childFactory: function childFactory(child) {
    return child;
  }
  /**
   * The `<TransitionGroup>` component manages a set of transition components
   * (`<Transition>` and `<CSSTransition>`) in a list. Like with the transition
   * components, `<TransitionGroup>` is a state machine for managing the mounting
   * and unmounting of components over time.
   *
   * Consider the example below. As items are removed or added to the TodoList the
   * `in` prop is toggled automatically by the `<TransitionGroup>`.
   *
   * Note that `<TransitionGroup>`  does not define any animation behavior!
   * Exactly _how_ a list item animates is up to the individual transition
   * component. This means you can mix and match animations across different list
   * items.
   */

};

var TransitionGroup =
/*#__PURE__*/
function (_React$Component) {
  _inheritsLoose(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;

    var handleExited = _this.handleExited.bind(_assertThisInitialized(_assertThisInitialized(_this))); // Initial children should all be entering, dependent on appear


    _this.state = {
      handleExited: handleExited,
      firstRender: true
    };
    return _this;
  }

  var _proto = TransitionGroup.prototype;

  _proto.getChildContext = function getChildContext() {
    return {
      transitionGroup: {
        isMounting: !this.appeared
      }
    };
  };

  _proto.componentDidMount = function componentDidMount() {
    this.appeared = true;
    this.mounted = true;
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.mounted = false;
  };

  TransitionGroup.getDerivedStateFromProps = function getDerivedStateFromProps(nextProps, _ref) {
    var prevChildMapping = _ref.children,
        handleExited = _ref.handleExited,
        firstRender = _ref.firstRender;
    return {
      children: firstRender ? (0, _ChildMapping.getInitialChildMapping)(nextProps, handleExited) : (0, _ChildMapping.getNextChildMapping)(nextProps, prevChildMapping, handleExited),
      firstRender: false
    };
  };

  _proto.handleExited = function handleExited(child, node) {
    var currentChildMapping = (0, _ChildMapping.getChildMapping)(this.props.children);
    if (child.key in currentChildMapping) return;

    if (child.props.onExited) {
      child.props.onExited(node);
    }

    if (this.mounted) {
      this.setState(function (state) {
        var children = _extends({}, state.children);

        delete children[child.key];
        return {
          children: children
        };
      });
    }
  };

  _proto.render = function render() {
    var _this$props = this.props,
        Component = _this$props.component,
        childFactory = _this$props.childFactory,
        props = _objectWithoutPropertiesLoose(_this$props, ["component", "childFactory"]);

    var children = values(this.state.children).map(childFactory);
    delete props.appear;
    delete props.enter;
    delete props.exit;

    if (Component === null) {
      return children;
    }

    return _react.default.createElement(Component, props, children);
  };

  return TransitionGroup;
}(_react.default.Component);

TransitionGroup.childContextTypes = {
  transitionGroup: _propTypes.default.object.isRequired
};
TransitionGroup.propTypes =  true ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: _propTypes.default.any,

  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: _propTypes.default.node,

  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: _propTypes.default.bool,

  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: _propTypes.default.bool,

  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: _propTypes.default.func
} : 0;
TransitionGroup.defaultProps = defaultProps;

var _default = (0, _reactLifecyclesCompat.polyfill)(TransitionGroup);

exports["default"] = _default;
module.exports = exports["default"];

/***/ }),

/***/ "./node_modules/react-transition-group/index.js":
/*!******************************************************!*\
  !*** ./node_modules/react-transition-group/index.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


var _CSSTransition = _interopRequireDefault(__webpack_require__(/*! ./CSSTransition */ "./node_modules/react-transition-group/CSSTransition.js"));

var _ReplaceTransition = _interopRequireDefault(__webpack_require__(/*! ./ReplaceTransition */ "./node_modules/react-transition-group/ReplaceTransition.js"));

var _TransitionGroup = _interopRequireDefault(__webpack_require__(/*! ./TransitionGroup */ "./node_modules/react-transition-group/TransitionGroup.js"));

var _Transition = _interopRequireDefault(__webpack_require__(/*! ./Transition */ "./node_modules/react-transition-group/Transition.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  Transition: _Transition.default,
  TransitionGroup: _TransitionGroup.default,
  ReplaceTransition: _ReplaceTransition.default,
  CSSTransition: _CSSTransition.default
};

/***/ }),

/***/ "./node_modules/react-transition-group/utils/ChildMapping.js":
/*!*******************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/ChildMapping.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;
exports.getInitialChildMapping = getInitialChildMapping;
exports.getNextChildMapping = getNextChildMapping;

var _react = __webpack_require__(/*! react */ "react");

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children, mapFn) {
  var mapper = function mapper(child) {
    return mapFn && (0, _react.isValidElement)(child) ? mapFn(child) : child;
  };

  var result = Object.create(null);
  if (children) _react.Children.map(children, function (c) {
    return c;
  }).forEach(function (child) {
    // run the map function here instead so that the key is the computed one
    result[child.key] = mapper(child);
  });
  return result;
}
/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */


function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    return key in next ? next[key] : prev[key];
  } // For each key of `next`, the list of keys to insert before that key in
  // the combined list


  var nextKeysPending = Object.create(null);
  var pendingKeys = [];

  for (var prevKey in prev) {
    if (prevKey in next) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i;
  var childMapping = {};

  for (var nextKey in next) {
    if (nextKeysPending[nextKey]) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }

    childMapping[nextKey] = getValueForKey(nextKey);
  } // Finally, add the keys which didn't appear before any key in `next`


  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

function getProp(child, prop, props) {
  return props[prop] != null ? props[prop] : child.props[prop];
}

function getInitialChildMapping(props, onExited) {
  return getChildMapping(props.children, function (child) {
    return (0, _react.cloneElement)(child, {
      onExited: onExited.bind(null, child),
      in: true,
      appear: getProp(child, 'appear', props),
      enter: getProp(child, 'enter', props),
      exit: getProp(child, 'exit', props)
    });
  });
}

function getNextChildMapping(nextProps, prevChildMapping, onExited) {
  var nextChildMapping = getChildMapping(nextProps.children);
  var children = mergeChildMappings(prevChildMapping, nextChildMapping);
  Object.keys(children).forEach(function (key) {
    var child = children[key];
    if (!(0, _react.isValidElement)(child)) return;
    var hasPrev = key in prevChildMapping;
    var hasNext = key in nextChildMapping;
    var prevChild = prevChildMapping[key];
    var isLeaving = (0, _react.isValidElement)(prevChild) && !prevChild.props.in; // item is new (entering)

    if (hasNext && (!hasPrev || isLeaving)) {
      // console.log('entering', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: true,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    } else if (!hasNext && hasPrev && !isLeaving) {
      // item is old (exiting)
      // console.log('leaving', key)
      children[key] = (0, _react.cloneElement)(child, {
        in: false
      });
    } else if (hasNext && hasPrev && (0, _react.isValidElement)(prevChild)) {
      // item hasn't changed transition states
      // copy over the last transition props;
      // console.log('unchanged', key)
      children[key] = (0, _react.cloneElement)(child, {
        onExited: onExited.bind(null, child),
        in: prevChild.props.in,
        exit: getProp(child, 'exit', nextProps),
        enter: getProp(child, 'enter', nextProps)
      });
    }
  });
  return children;
}

/***/ }),

/***/ "./node_modules/react-transition-group/utils/PropTypes.js":
/*!****************************************************************!*\
  !*** ./node_modules/react-transition-group/utils/PropTypes.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.classNamesShape = exports.timeoutsShape = void 0;

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var timeoutsShape =  true ? _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.shape({
  enter: _propTypes.default.number,
  exit: _propTypes.default.number,
  appear: _propTypes.default.number
}).isRequired]) : 0;
exports.timeoutsShape = timeoutsShape;
var classNamesShape =  true ? _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.shape({
  enter: _propTypes.default.string,
  exit: _propTypes.default.string,
  active: _propTypes.default.string
}), _propTypes.default.shape({
  enter: _propTypes.default.string,
  enterDone: _propTypes.default.string,
  enterActive: _propTypes.default.string,
  exit: _propTypes.default.string,
  exitDone: _propTypes.default.string,
  exitActive: _propTypes.default.string
})]) : 0;
exports.classNamesShape = classNamesShape;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = window["React"];

/***/ }),

/***/ "react-dom":
/*!***************************!*\
  !*** external "ReactDOM" ***!
  \***************************/
/***/ (function(module) {

"use strict";
module.exports = window["ReactDOM"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["data"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

"use strict";
module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "./block.json":
/*!********************!*\
  !*** ./block.json ***!
  \********************/
/***/ (function(module) {

"use strict";
module.exports = JSON.parse('{"apiVersion":"2","name":"number-counter/number-counter","title":"Number Counter","category":"widgets","description":"Put spotlight in important data using Counter block for Gutenberg. Customize the designs by adding proper Animation effects with flexibility and many more!","textdomain":"number-counter","supports":{"html":false,"align":["wide","full"]},"editorScript":"file:./dist/index.js"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"dist": 0,
/******/ 			"style-dist": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkcounter"] = self["webpackChunkcounter"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["style-dist"], function() { return __webpack_require__("./src/index.js"); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map