(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@chartshq/muze"));
	else if(typeof define === 'function' && define.amd)
		define("@chartshq/react-muze/configurations", ["@chartshq/muze"], factory);
	else if(typeof exports === 'object')
		exports["@chartshq/react-muze/configurations"] = factory(require("@chartshq/muze"));
	else
		root["@chartshq/react-muze/configurations"] = factory(root["muze"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__chartshq_muze__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/configurations/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/configurations/Axes/index.ts":
/*!******************************************!*\
  !*** ./src/configurations/Axes/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nvar linear_axis_1 = __webpack_require__(/*! ./linear-axis */ \"./src/configurations/Axes/linear-axis.ts\");\nObject.defineProperty(exports, \"LinearAxis\", { enumerable: true, get: function () { return linear_axis_1.LinearAxis; } });\nvar radial_axis_1 = __webpack_require__(/*! ./radial-axis */ \"./src/configurations/Axes/radial-axis.ts\");\nObject.defineProperty(exports, \"RadialAxis\", { enumerable: true, get: function () { return radial_axis_1.RadialAxis; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Axes/index.ts?");

/***/ }),

/***/ "./src/configurations/Axes/linear-axis.ts":
/*!************************************************!*\
  !*** ./src/configurations/Axes/linear-axis.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LinearAxis = void 0;\nclass LinearAxis {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new LinearAxis();\n    }\n    name(name) {\n        this._config.name = name;\n        return this;\n    }\n    show(show) {\n        this._config.show = show;\n        return this;\n    }\n    showAxisName(showAxisName) {\n        this._config.showAxisName = showAxisName;\n        return this;\n    }\n    axisNamePadding(axisNamePadding) {\n        this._config.axisNamePadding = axisNamePadding;\n        return this;\n    }\n    padding(padding) {\n        this._config.padding = padding;\n        return this;\n    }\n    showInnerTicks(showInnerTicks) {\n        this._config.showInnerTicks = showInnerTicks;\n        return this;\n    }\n    numberOfTicks(numberOfTicks) {\n        this._config.numberOfTicks = numberOfTicks;\n        return this;\n    }\n    tickFormat(format) {\n        this._config.tickFormat = format;\n        return this;\n    }\n    labels(labelConfig) {\n        this._config.labels = labelConfig;\n        return this;\n    }\n    interpolator(type) {\n        this._config.interpolator = type;\n        return this;\n    }\n    nice(isNice) {\n        this._config.nice = isNice;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.LinearAxis = LinearAxis;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Axes/linear-axis.ts?");

/***/ }),

/***/ "./src/configurations/Axes/radial-axis.ts":
/*!************************************************!*\
  !*** ./src/configurations/Axes/radial-axis.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.RadialAxis = void 0;\nclass RadialAxis {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new RadialAxis();\n    }\n    range(range) {\n        this._config.range = range;\n        return this;\n    }\n    domain(domain) {\n        this._config.domain = domain;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.RadialAxis = RadialAxis;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Axes/radial-axis.ts?");

/***/ }),

/***/ "./src/configurations/Behaviours/behaviours.ts":
/*!*****************************************************!*\
  !*** ./src/configurations/Behaviours/behaviours.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Behaviours = void 0;\nconst muze_1 = __importDefault(__webpack_require__(/*! @chartshq/muze */ \"@chartshq/muze\"));\nclass Behaviours {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Behaviours();\n    }\n    for(_for) {\n        this._config.for = _for;\n        return this;\n    }\n    on(_on) {\n        this._config.on = _on;\n        return this;\n    }\n    dissociateFrom(_dissociateFrom) {\n        this._config.dissociateBehaviour = _dissociateFrom;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Behaviours = Behaviours;\nBehaviours.GenericBehaviour = muze_1.default.Behaviours.standards.GenericBehaviour;\nBehaviours.PersistentBehaviour = muze_1.default.Behaviours.standards.PersistentBehaviour;\nBehaviours.VolatileBehaviour = muze_1.default.Behaviours.standards.VolatileBehaviour;\nBehaviours.BrushBehaviour = muze_1.default.Behaviours.behaviouralActions.BrushBehaviour;\nBehaviours.FilterBehaviour = muze_1.default.Behaviours.behaviouralActions.FilterBehaviour;\nBehaviours.HighlightBeahviour = muze_1.default.Behaviours.behaviouralActions.HighlightBeahviour;\nBehaviours.SelectBehaviour = muze_1.default.Behaviours.behaviouralActions.SelectBehaviour;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Behaviours/behaviours.ts?");

/***/ }),

/***/ "./src/configurations/Behaviours/index.ts":
/*!************************************************!*\
  !*** ./src/configurations/Behaviours/index.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Behaviours = void 0;\nconst behaviours_1 = __webpack_require__(/*! ./behaviours */ \"./src/configurations/Behaviours/behaviours.ts\");\nObject.defineProperty(exports, \"Behaviours\", { enumerable: true, get: function () { return behaviours_1.Behaviours; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Behaviours/index.ts?");

/***/ }),

/***/ "./src/configurations/Border/border.ts":
/*!*********************************************!*\
  !*** ./src/configurations/Border/border.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Border = void 0;\nclass Border {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Border();\n    }\n    showRowBorders(region) {\n        this._config.showRowBorders = region;\n        return this;\n    }\n    showColBorders(region) {\n        this._config.showColBorders = region;\n        return this;\n    }\n    showValueBorders(region) {\n        this._config.showValueBorders = region;\n        return this;\n    }\n    width(width) {\n        this._config.width = width;\n        return this;\n    }\n    style(style) {\n        this._config.style = style;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Border = Border;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Border/border.ts?");

/***/ }),

/***/ "./src/configurations/Border/index.ts":
/*!********************************************!*\
  !*** ./src/configurations/Border/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Border = void 0;\nconst border_1 = __webpack_require__(/*! ./border */ \"./src/configurations/Border/border.ts\");\nObject.defineProperty(exports, \"Border\", { enumerable: true, get: function () { return border_1.Border; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Border/index.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/encoding.ts":
/*!*************************************************!*\
  !*** ./src/configurations/Encoding/encoding.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Encoding = void 0;\nconst layers_1 = __webpack_require__(/*! ./layers */ \"./src/configurations/Encoding/layers/index.ts\");\nclass Encoding {\n}\nexports.Encoding = Encoding;\nEncoding.Arc = layers_1.ArcLayerEncoding;\nEncoding.Area = layers_1.AreaLayerEncoding;\nEncoding.Bar = layers_1.BarLayerEncoding;\nEncoding.Line = layers_1.LineLayerEncoding;\nEncoding.Point = layers_1.PointLayerEncoding;\nEncoding.Text = layers_1.TextLayerEncoding;\nEncoding.Tick = layers_1.TickLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/encoding.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/index.ts":
/*!**********************************************!*\
  !*** ./src/configurations/Encoding/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Encoding = void 0;\nconst encoding_1 = __webpack_require__(/*! ./encoding */ \"./src/configurations/Encoding/encoding.ts\");\nObject.defineProperty(exports, \"Encoding\", { enumerable: true, get: function () { return encoding_1.Encoding; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/index.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/arc/arc.ts":
/*!*******************************************************!*\
  !*** ./src/configurations/Encoding/layers/arc/arc.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ArcLayerEncoding = void 0;\nclass ArcLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new ArcLayerEncoding();\n    }\n    strokeWidth(strokeWidth) {\n        this._config.strokeWidth = strokeWidth;\n        return this;\n    }\n    strokeLinejoin(strokeLinejoin) {\n        this._config.strokeLinejoin = strokeLinejoin;\n        return this;\n    }\n    angle(angle) {\n        this._config.angle = angle;\n        return this;\n    }\n    radius(radius) {\n        this._config.radius = radius;\n        return this;\n    }\n    opacity(opacity) {\n        this._config.opacity = opacity;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    shape(shape) {\n        this._config.shape = shape;\n        return this;\n    }\n    size(size) {\n        this._config.size = size;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.ArcLayerEncoding = ArcLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/arc/arc.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/area/area.ts":
/*!*********************************************************!*\
  !*** ./src/configurations/Encoding/layers/area/area.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AreaLayerEncoding = void 0;\nclass AreaLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new AreaLayerEncoding();\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    x(x) {\n        if (x) {\n            this._config.x = {\n                field: x\n            };\n        }\n        return this;\n    }\n    y(y) {\n        if (y) {\n            this._config.y = {\n                field: y\n            };\n        }\n        return this;\n    }\n    y0(y0) {\n        if (y0) {\n            this._config.y0 = {\n                field: y0\n            };\n        }\n        return this;\n    }\n    strokeOpacity(strokeOpacity) {\n        this._config.strokeOpacity = strokeOpacity;\n        return this;\n    }\n    fillOpacity(fillOpacity) {\n        this._config.fillOpacity = fillOpacity;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.AreaLayerEncoding = AreaLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/area/area.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/bar/bar.ts":
/*!*******************************************************!*\
  !*** ./src/configurations/Encoding/layers/bar/bar.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BarLayerEncoding = void 0;\nclass BarLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new BarLayerEncoding();\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    x(x) {\n        if (x !== undefined) {\n            this._config.x = {\n                field: x\n            };\n        }\n        return this;\n    }\n    y(y) {\n        if (y !== undefined) {\n            this._config.y = {\n                field: y\n            };\n        }\n        return this;\n    }\n    x0(x0) {\n        if (x0 !== undefined) {\n            this._config.x0 = {\n                field: x0\n            };\n        }\n        return this;\n    }\n    y0(y0) {\n        if (y0 !== undefined) {\n            this._config.y0 = {\n                field: y0\n            };\n        }\n        return this;\n    }\n    stroke(stroke) {\n        this._config.stroke = stroke;\n        return this;\n    }\n    strokeWidth(strokeWidth) {\n        this._config.strokeWidth = strokeWidth;\n        return this;\n    }\n    strokePosition(strokePosition) {\n        this._config.strokePosition = strokePosition;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.BarLayerEncoding = BarLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/bar/bar.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/index.ts":
/*!*****************************************************!*\
  !*** ./src/configurations/Encoding/layers/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TickLayerEncoding = exports.TextLayerEncoding = exports.PointLayerEncoding = exports.LineLayerEncoding = exports.BarLayerEncoding = exports.AreaLayerEncoding = exports.ArcLayerEncoding = void 0;\nconst arc_1 = __webpack_require__(/*! ./arc/arc */ \"./src/configurations/Encoding/layers/arc/arc.ts\");\nObject.defineProperty(exports, \"ArcLayerEncoding\", { enumerable: true, get: function () { return arc_1.ArcLayerEncoding; } });\nconst area_1 = __webpack_require__(/*! ./area/area */ \"./src/configurations/Encoding/layers/area/area.ts\");\nObject.defineProperty(exports, \"AreaLayerEncoding\", { enumerable: true, get: function () { return area_1.AreaLayerEncoding; } });\nconst bar_1 = __webpack_require__(/*! ./bar/bar */ \"./src/configurations/Encoding/layers/bar/bar.ts\");\nObject.defineProperty(exports, \"BarLayerEncoding\", { enumerable: true, get: function () { return bar_1.BarLayerEncoding; } });\nconst line_1 = __webpack_require__(/*! ./line/line */ \"./src/configurations/Encoding/layers/line/line.ts\");\nObject.defineProperty(exports, \"LineLayerEncoding\", { enumerable: true, get: function () { return line_1.LineLayerEncoding; } });\nconst point_1 = __webpack_require__(/*! ./point/point */ \"./src/configurations/Encoding/layers/point/point.ts\");\nObject.defineProperty(exports, \"PointLayerEncoding\", { enumerable: true, get: function () { return point_1.PointLayerEncoding; } });\nconst text_1 = __webpack_require__(/*! ./text/text */ \"./src/configurations/Encoding/layers/text/text.ts\");\nObject.defineProperty(exports, \"TextLayerEncoding\", { enumerable: true, get: function () { return text_1.TextLayerEncoding; } });\nconst tick_1 = __webpack_require__(/*! ./tick/tick */ \"./src/configurations/Encoding/layers/tick/tick.ts\");\nObject.defineProperty(exports, \"TickLayerEncoding\", { enumerable: true, get: function () { return tick_1.TickLayerEncoding; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/index.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/line/line.ts":
/*!*********************************************************!*\
  !*** ./src/configurations/Encoding/layers/line/line.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LineLayerEncoding = void 0;\nclass LineLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new LineLayerEncoding();\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    x(x) {\n        if (x) {\n            this._config.x = {\n                field: x\n            };\n        }\n        return this;\n    }\n    y(y) {\n        if (y) {\n            this._config.y = {\n                field: y\n            };\n        }\n        return this;\n    }\n    strokeOpacity(strokeOpacity) {\n        this._config.strokeOpacity = strokeOpacity;\n        return this;\n    }\n    fillOpacity(fillOpacity) {\n        this._config.fillOpacity = fillOpacity;\n        return this;\n    }\n    strokeWidth(strokeWidth) {\n        this._config.strokeWidth = strokeWidth;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.LineLayerEncoding = LineLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/line/line.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/point/point.ts":
/*!***********************************************************!*\
  !*** ./src/configurations/Encoding/layers/point/point.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.PointLayerEncoding = void 0;\nclass PointLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new PointLayerEncoding();\n    }\n    size(size) {\n        this._config.size = size;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    stroke(stroke) {\n        this._config.stroke = stroke;\n        return this;\n    }\n    strokeWidth(strokeWidth) {\n        this._config.strokeWidth = strokeWidth;\n        return this;\n    }\n    fill(fill) {\n        this._config.fill = fill;\n        return this;\n    }\n    shape(shape) {\n        this._config.shape = shape;\n        return this;\n    }\n    x(x) {\n        this._config.x = {\n            field: x\n        };\n        return this;\n    }\n    y(y) {\n        this._config.y = {\n            field: y\n        };\n        return this;\n    }\n    strokeOpacity(strokeOpacity) {\n        this._config.strokeOpacity = strokeOpacity;\n        return this;\n    }\n    fillOpacity(fillOpacity) {\n        this._config.fillOpacity = fillOpacity;\n        return this;\n    }\n    strokePosition(strokePosition) {\n        this._config.strokePosition = strokePosition;\n        return this;\n    }\n    interaction(interaction) {\n        this._config.interaction = interaction;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.PointLayerEncoding = PointLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/point/point.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/text/text.ts":
/*!*********************************************************!*\
  !*** ./src/configurations/Encoding/layers/text/text.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TextLayerEncoding = void 0;\nclass TextLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new TextLayerEncoding();\n    }\n    x(x) {\n        this._config.x = x;\n        return this;\n    }\n    y(y) {\n        this._config.y = y;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    size(size) {\n        this._config.size = size;\n        return this;\n    }\n    radius(radius) {\n        this._config.radius = radius;\n        return this;\n    }\n    angle(angle) {\n        this._config.angle = angle;\n        return this;\n    }\n    text(text) {\n        this._config.text = text;\n        return this;\n    }\n    rotation(rotation) {\n        this._config.rotation = rotation;\n        return this;\n    }\n    alignmentBaseline(alignmentBaseline) {\n        this._config.alignmentBaseline = alignmentBaseline;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.TextLayerEncoding = TextLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/text/text.ts?");

/***/ }),

/***/ "./src/configurations/Encoding/layers/tick/tick.ts":
/*!*********************************************************!*\
  !*** ./src/configurations/Encoding/layers/tick/tick.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TickLayerEncoding = void 0;\nclass TickLayerEncoding {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new TickLayerEncoding();\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    x(x) {\n        this._config.x = {\n            field: x\n        };\n        return this;\n    }\n    y(y) {\n        this._config.y = {\n            field: y\n        };\n        return this;\n    }\n    x0(x0) {\n        this._config.x0 = {\n            field: x0\n        };\n        return this;\n    }\n    y0(y0) {\n        this._config.y0 = {\n            field: y0\n        };\n        return this;\n    }\n    radius(radius) {\n        this._config.radius = radius;\n        return this;\n    }\n    radius0(radius0) {\n        this._config.radius0 = radius0;\n        return this;\n    }\n    angle(angle) {\n        this._config.angle = angle;\n        return this;\n    }\n    angle0(angle0) {\n        this._config.angle0 = angle0;\n        return this;\n    }\n    strokeOpacity(strokeOpacity) {\n        this._config.strokeOpacity = strokeOpacity;\n        return this;\n    }\n    fillOpacity(fillOpacity) {\n        this._config.fillOpacity = fillOpacity;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.TickLayerEncoding = TickLayerEncoding;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Encoding/layers/tick/tick.ts?");

/***/ }),

/***/ "./src/configurations/GridBands/gridbands.ts":
/*!***************************************************!*\
  !*** ./src/configurations/GridBands/gridbands.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridBands = void 0;\nclass GridBands {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new GridBands();\n    }\n    showHorizontal(showHorizontal) {\n        this._config.x = {\n            show: showHorizontal\n        };\n        return this;\n    }\n    showVertical(showVertical) {\n        this._config.y = {\n            show: showVertical\n        };\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.GridBands = GridBands;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/GridBands/gridbands.ts?");

/***/ }),

/***/ "./src/configurations/GridBands/index.ts":
/*!***********************************************!*\
  !*** ./src/configurations/GridBands/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridBands = void 0;\nconst gridbands_1 = __webpack_require__(/*! ./gridbands */ \"./src/configurations/GridBands/gridbands.ts\");\nObject.defineProperty(exports, \"GridBands\", { enumerable: true, get: function () { return gridbands_1.GridBands; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/GridBands/index.ts?");

/***/ }),

/***/ "./src/configurations/GridLines/gridlines.ts":
/*!***************************************************!*\
  !*** ./src/configurations/GridLines/gridlines.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridLines = void 0;\nclass GridLines {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new GridLines();\n    }\n    showHorizontal(showHorizontal) {\n        this._config.x = {\n            show: showHorizontal\n        };\n        return this;\n    }\n    showVertical(showVertical) {\n        this._config.y = {\n            show: showVertical\n        };\n        return this;\n    }\n    show(show) {\n        this._config.show = show;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.GridLines = GridLines;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/GridLines/gridlines.ts?");

/***/ }),

/***/ "./src/configurations/GridLines/index.ts":
/*!***********************************************!*\
  !*** ./src/configurations/GridLines/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.GridLines = void 0;\nconst gridlines_1 = __webpack_require__(/*! ./gridlines */ \"./src/configurations/GridLines/gridlines.ts\");\nObject.defineProperty(exports, \"GridLines\", { enumerable: true, get: function () { return gridlines_1.GridLines; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/GridLines/index.ts?");

/***/ }),

/***/ "./src/configurations/Headers/constants.ts":
/*!*************************************************!*\
  !*** ./src/configurations/Headers/constants.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ALIGNMENT = exports.POSITION = void 0;\nvar POSITION;\n(function (POSITION) {\n    POSITION[\"TOP\"] = \"top\";\n    POSITION[\"BOTTOM\"] = \"bottom\";\n})(POSITION = exports.POSITION || (exports.POSITION = {}));\n;\nvar ALIGNMENT;\n(function (ALIGNMENT) {\n    ALIGNMENT[\"LEFT\"] = \"left\";\n    ALIGNMENT[\"RIGHT\"] = \"right\";\n})(ALIGNMENT = exports.ALIGNMENT || (exports.ALIGNMENT = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Headers/constants.ts?");

/***/ }),

/***/ "./src/configurations/Headers/headers.ts":
/*!***********************************************!*\
  !*** ./src/configurations/Headers/headers.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Headers = void 0;\nclass Headers {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Headers();\n    }\n    content(content) {\n        this._config.content = content;\n        return this;\n    }\n    position(position) {\n        this._config.position = position;\n        return this;\n    }\n    align(alignment) {\n        this._config.align = alignment;\n        return this;\n    }\n    padding(padding) {\n        this._config.padding = padding;\n        return this;\n    }\n    className(className) {\n        this._config.className = className;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Headers = Headers;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Headers/headers.ts?");

/***/ }),

/***/ "./src/configurations/Headers/index.ts":
/*!*********************************************!*\
  !*** ./src/configurations/Headers/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ALIGNMENT = exports.POSITION = exports.Headers = void 0;\nconst headers_1 = __webpack_require__(/*! ./headers */ \"./src/configurations/Headers/headers.ts\");\nObject.defineProperty(exports, \"Headers\", { enumerable: true, get: function () { return headers_1.Headers; } });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/configurations/Headers/constants.ts\");\nObject.defineProperty(exports, \"POSITION\", { enumerable: true, get: function () { return constants_1.POSITION; } });\nObject.defineProperty(exports, \"ALIGNMENT\", { enumerable: true, get: function () { return constants_1.ALIGNMENT; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Headers/index.ts?");

/***/ }),

/***/ "./src/configurations/Legend/constants.ts":
/*!************************************************!*\
  !*** ./src/configurations/Legend/constants.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LEGEND_POSITION = void 0;\nvar LEGEND_POSITION;\n(function (LEGEND_POSITION) {\n    LEGEND_POSITION[\"TOP\"] = \"top\";\n    LEGEND_POSITION[\"RIGHT\"] = \"right\";\n    LEGEND_POSITION[\"BOTTOM\"] = \"bottom\";\n    LEGEND_POSITION[\"LEFT\"] = \"left\";\n})(LEGEND_POSITION = exports.LEGEND_POSITION || (exports.LEGEND_POSITION = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Legend/constants.ts?");

/***/ }),

/***/ "./src/configurations/Legend/index.ts":
/*!********************************************!*\
  !*** ./src/configurations/Legend/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LEGEND_POSITION = exports.Legend = void 0;\nconst legend_1 = __webpack_require__(/*! ./legend */ \"./src/configurations/Legend/legend.ts\");\nObject.defineProperty(exports, \"Legend\", { enumerable: true, get: function () { return legend_1.Legend; } });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/configurations/Legend/constants.ts\");\nObject.defineProperty(exports, \"LEGEND_POSITION\", { enumerable: true, get: function () { return constants_1.LEGEND_POSITION; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Legend/index.ts?");

/***/ }),

/***/ "./src/configurations/Legend/legend.ts":
/*!*********************************************!*\
  !*** ./src/configurations/Legend/legend.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Legend = void 0;\nclass Legend {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Legend();\n    }\n    position(position) {\n        this._config.position = position;\n        return this;\n    }\n    show(show) {\n        this._config.show = show;\n        return this;\n    }\n    title(title) {\n        this._config.title = title;\n        return this;\n    }\n    border(border) {\n        this._config.border = border;\n        return this;\n    }\n    borderColor(borderColor) {\n        this._config.borderColor = borderColor;\n        return this;\n    }\n    padding(padding) {\n        this._config.padding = padding;\n        return this;\n    }\n    textWidth(textWidth) {\n        this._config.textWidth = textWidth;\n        return this;\n    }\n    textFormatter(textFormatter) {\n        this._config.textFormatter = textFormatter;\n        return this;\n    }\n    item(legendItem) {\n        this._config.item = legendItem;\n        return this;\n    }\n    marker(marker) {\n        this._config.marker = marker;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Legend = Legend;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Legend/legend.ts?");

/***/ }),

/***/ "./src/configurations/RetinalEncoding/Color/index.ts":
/*!***********************************************************!*\
  !*** ./src/configurations/RetinalEncoding/Color/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Color = void 0;\nclass Color {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Color();\n    }\n    field(value) {\n        this._config.field = value || null;\n        return this;\n    }\n    range(value) {\n        this._config.range = value;\n        return this;\n    }\n    step(isStep) {\n        this._config.step = isStep;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Color = Color;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/RetinalEncoding/Color/index.ts?");

/***/ }),

/***/ "./src/configurations/RetinalEncoding/Shape/index.ts":
/*!***********************************************************!*\
  !*** ./src/configurations/RetinalEncoding/Shape/index.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Shape = void 0;\nclass Shape {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Shape();\n    }\n    field(field) {\n        this._config.field = field || null;\n        return this;\n    }\n    range(range) {\n        this._config.range = range;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Shape = Shape;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/RetinalEncoding/Shape/index.ts?");

/***/ }),

/***/ "./src/configurations/RetinalEncoding/Size/index.ts":
/*!**********************************************************!*\
  !*** ./src/configurations/RetinalEncoding/Size/index.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Size = void 0;\nclass Size {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Size();\n    }\n    field(field) {\n        this._config.field = field || null;\n        return this;\n    }\n    range(range) {\n        this._config.range = range;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Size = Size;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/RetinalEncoding/Size/index.ts?");

/***/ }),

/***/ "./src/configurations/RetinalEncoding/index.ts":
/*!*****************************************************!*\
  !*** ./src/configurations/RetinalEncoding/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Shape = exports.Size = exports.Color = void 0;\nconst Color_1 = __webpack_require__(/*! ./Color */ \"./src/configurations/RetinalEncoding/Color/index.ts\");\nObject.defineProperty(exports, \"Color\", { enumerable: true, get: function () { return Color_1.Color; } });\nconst Size_1 = __webpack_require__(/*! ./Size */ \"./src/configurations/RetinalEncoding/Size/index.ts\");\nObject.defineProperty(exports, \"Size\", { enumerable: true, get: function () { return Size_1.Size; } });\nconst Shape_1 = __webpack_require__(/*! ./Shape */ \"./src/configurations/RetinalEncoding/Shape/index.ts\");\nObject.defineProperty(exports, \"Shape\", { enumerable: true, get: function () { return Shape_1.Shape; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/RetinalEncoding/index.ts?");

/***/ }),

/***/ "./src/configurations/ScrollBar/constants.ts":
/*!***************************************************!*\
  !*** ./src/configurations/ScrollBar/constants.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SCROLL_HORIZONTAL = exports.SCROLL_VERTICAL = void 0;\nvar SCROLL_VERTICAL;\n(function (SCROLL_VERTICAL) {\n    SCROLL_VERTICAL[\"LEFT\"] = \"left\";\n    SCROLL_VERTICAL[\"RIGHT\"] = \"right\";\n})(SCROLL_VERTICAL = exports.SCROLL_VERTICAL || (exports.SCROLL_VERTICAL = {}));\n;\nvar SCROLL_HORIZONTAL;\n(function (SCROLL_HORIZONTAL) {\n    SCROLL_HORIZONTAL[\"TOP\"] = \"top\";\n    SCROLL_HORIZONTAL[\"BOTTOM\"] = \"bottom\";\n})(SCROLL_HORIZONTAL = exports.SCROLL_HORIZONTAL || (exports.SCROLL_HORIZONTAL = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/ScrollBar/constants.ts?");

/***/ }),

/***/ "./src/configurations/ScrollBar/index.ts":
/*!***********************************************!*\
  !*** ./src/configurations/ScrollBar/index.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SCROLL_HORIZONTAL = exports.SCROLL_VERTICAL = exports.ScrollBar = void 0;\nconst scrollbar_1 = __webpack_require__(/*! ./scrollbar */ \"./src/configurations/ScrollBar/scrollbar.ts\");\nObject.defineProperty(exports, \"ScrollBar\", { enumerable: true, get: function () { return scrollbar_1.ScrollBar; } });\nconst constants_1 = __webpack_require__(/*! ./constants */ \"./src/configurations/ScrollBar/constants.ts\");\nObject.defineProperty(exports, \"SCROLL_VERTICAL\", { enumerable: true, get: function () { return constants_1.SCROLL_VERTICAL; } });\nObject.defineProperty(exports, \"SCROLL_HORIZONTAL\", { enumerable: true, get: function () { return constants_1.SCROLL_HORIZONTAL; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/ScrollBar/index.ts?");

/***/ }),

/***/ "./src/configurations/ScrollBar/scrollbar.ts":
/*!***************************************************!*\
  !*** ./src/configurations/ScrollBar/scrollbar.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ScrollBar = void 0;\nclass ScrollBar {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new ScrollBar();\n    }\n    verticalAlign(verticalAlign) {\n        this._config.vertical = {\n            align: verticalAlign\n        };\n        return this;\n    }\n    horizontalAlign(horizontalAlign) {\n        this._config.horizontal = {\n            align: horizontalAlign\n        };\n        return this;\n    }\n    thickness(scrollThickness) {\n        this._config.thickness = scrollThickness;\n        return this;\n    }\n    speed(speed) {\n        this._config.speed = speed;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.ScrollBar = ScrollBar;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/ScrollBar/scrollbar.ts?");

/***/ }),

/***/ "./src/configurations/SideEffects/index.ts":
/*!*************************************************!*\
  !*** ./src/configurations/SideEffects/index.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SideEffects = void 0;\nconst side_effects_1 = __webpack_require__(/*! ./side-effects */ \"./src/configurations/SideEffects/side-effects.ts\");\nObject.defineProperty(exports, \"SideEffects\", { enumerable: true, get: function () { return side_effects_1.SideEffects; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/SideEffects/index.ts?");

/***/ }),

/***/ "./src/configurations/SideEffects/side-effects.ts":
/*!********************************************************!*\
  !*** ./src/configurations/SideEffects/side-effects.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SideEffects = void 0;\nconst muze_1 = __importDefault(__webpack_require__(/*! @chartshq/muze */ \"@chartshq/muze\"));\nclass SideEffects {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new SideEffects();\n    }\n    for(_for) {\n        this._config.for = _for;\n        return this;\n    }\n    on(_on) {\n        this._config.on = _on;\n        return this;\n    }\n    dissociateFrom(_dissociateFrom) {\n        this._config.dissociateSideEffect = _dissociateFrom;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.SideEffects = SideEffects;\nSideEffects.GenericSideEffect = muze_1.default.SideEffects.standards.GenericSideEffect;\nSideEffects.SpawnableSideEffect = muze_1.default.SideEffects.standards.SpawnableSideEffect;\nSideEffects.SurrogateSideEffect = muze_1.default.SideEffects.standards.SurrogateSideEffect;\nSideEffects.AnchorEffect = muze_1.default.SideEffects.sideEffects.AnchorEffect;\nSideEffects.AxisLabelHighLighter = muze_1.default.SideEffects.sideEffects.AxisLabelHighLighter;\nSideEffects.BrushAnchors = muze_1.default.SideEffects.sideEffects.BrushAnchors;\nSideEffects.Crossline = muze_1.default.SideEffects.sideEffects.Crossline;\nSideEffects.FilterEffect = muze_1.default.SideEffects.sideEffects.FilterEffect;\nSideEffects.FragmentedTooltip = muze_1.default.SideEffects.sideEffects.FragmentedTooltip;\nSideEffects.PersistentAnchors = muze_1.default.SideEffects.sideEffects.PersistentAnchors;\nSideEffects.PlotHighlighter = muze_1.default.SideEffects.sideEffects.PlotHighlighter;\nSideEffects.SelectionBox = muze_1.default.SideEffects.sideEffects.SelectionBox;\nSideEffects.Tooltip = muze_1.default.SideEffects.sideEffects.Tooltip;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/SideEffects/side-effects.ts?");

/***/ }),

/***/ "./src/configurations/Tooltip/index.ts":
/*!*********************************************!*\
  !*** ./src/configurations/Tooltip/index.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TOOLTIP_MODE = exports.TOOLTIP_TYPE = exports.resolveMultiTooltips = exports.Tooltip = void 0;\nconst tooltip_1 = __webpack_require__(/*! ./tooltip */ \"./src/configurations/Tooltip/tooltip.ts\");\nObject.defineProperty(exports, \"Tooltip\", { enumerable: true, get: function () { return tooltip_1.Tooltip; } });\nObject.defineProperty(exports, \"resolveMultiTooltips\", { enumerable: true, get: function () { return tooltip_1.resolveMultiTooltips; } });\nObject.defineProperty(exports, \"TOOLTIP_TYPE\", { enumerable: true, get: function () { return tooltip_1.TOOLTIP_TYPE; } });\nObject.defineProperty(exports, \"TOOLTIP_MODE\", { enumerable: true, get: function () { return tooltip_1.TOOLTIP_MODE; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Tooltip/index.ts?");

/***/ }),

/***/ "./src/configurations/Tooltip/tooltip.ts":
/*!***********************************************!*\
  !*** ./src/configurations/Tooltip/tooltip.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TOOLTIP_MODE = exports.TOOLTIP_TYPE = exports.Tooltip = exports.resolveMultiTooltips = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/configurations/Tooltip/types.ts\");\nObject.defineProperty(exports, \"TOOLTIP_TYPE\", { enumerable: true, get: function () { return types_1.TooltipType; } });\nObject.defineProperty(exports, \"TOOLTIP_MODE\", { enumerable: true, get: function () { return types_1.TooltipMode; } });\nclass Tooltip {\n    constructor() {\n        this._config = { _type: types_1.TooltipType.HIGHLIGHT };\n    }\n    static config() {\n        return new Tooltip();\n    }\n    on(type) {\n        this._config._type = type;\n        return this;\n    }\n    mode(mode) {\n        this._config.mode = mode;\n        return this;\n    }\n    formatter(func) {\n        this._config.formatter = func;\n        return this;\n    }\n    displayFields(fields) {\n        this._config.displayFields = fields;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Tooltip = Tooltip;\nfunction resolveMultiTooltips(tooltips) {\n    if (!tooltips) {\n        return null;\n    }\n    let hiSum;\n    let selSum;\n    tooltips.forEach((tooltip) => {\n        switch (tooltip._type) {\n            case types_1.TooltipType.HIGHLIGHT:\n                hiSum = tooltip;\n                delete hiSum._type;\n                break;\n            case types_1.TooltipType.SELECT:\n                selSum = tooltip;\n                delete selSum._type;\n                break;\n            default:\n                break;\n        }\n    });\n    return hiSum && selSum\n        ? {\n            highlightSummary: hiSum,\n            selectionSummary: selSum,\n        }\n        : hiSum\n            ? Object.assign({}, hiSum) : selSum\n            ? {\n                selectionSummary: selSum,\n            }\n            : null;\n}\nexports.resolveMultiTooltips = resolveMultiTooltips;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Tooltip/tooltip.ts?");

/***/ }),

/***/ "./src/configurations/Tooltip/types.ts":
/*!*********************************************!*\
  !*** ./src/configurations/Tooltip/types.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TooltipMode = exports.TooltipType = void 0;\nvar TooltipType;\n(function (TooltipType) {\n    TooltipType[\"HIGHLIGHT\"] = \"highlight\";\n    TooltipType[\"SELECT\"] = \"select\";\n})(TooltipType = exports.TooltipType || (exports.TooltipType = {}));\nvar TooltipMode;\n(function (TooltipMode) {\n    TooltipMode[\"FRAGMENTED\"] = \"fragmented\";\n    TooltipMode[\"CONSOLIDATED\"] = \"consolidated\";\n})(TooltipMode = exports.TooltipMode || (exports.TooltipMode = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Tooltip/types.ts?");

/***/ }),

/***/ "./src/configurations/index.ts":
/*!*************************************!*\
  !*** ./src/configurations/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TOOLTIP_TYPE = exports.SCROLL_HORIZONTAL = exports.SCROLL_VERTICAL = exports.ALIGNMENT = exports.POSITION = exports.LEGEND_POSITION = exports.Border = exports.Behaviours = exports.SideEffects = exports.Tooltip = exports.Encoding = exports.ScrollBar = exports.GridBands = exports.GridLines = exports.Headers = exports.Shape = exports.Size = exports.Color = exports.Legend = exports.Axes = void 0;\nconst Axes = __importStar(__webpack_require__(/*! ./Axes */ \"./src/configurations/Axes/index.ts\"));\nexports.Axes = Axes;\nconst Legend_1 = __webpack_require__(/*! ./Legend */ \"./src/configurations/Legend/index.ts\");\nObject.defineProperty(exports, \"Legend\", { enumerable: true, get: function () { return Legend_1.Legend; } });\nObject.defineProperty(exports, \"LEGEND_POSITION\", { enumerable: true, get: function () { return Legend_1.LEGEND_POSITION; } });\nconst RetinalEncoding_1 = __webpack_require__(/*! ./RetinalEncoding */ \"./src/configurations/RetinalEncoding/index.ts\");\nObject.defineProperty(exports, \"Color\", { enumerable: true, get: function () { return RetinalEncoding_1.Color; } });\nObject.defineProperty(exports, \"Size\", { enumerable: true, get: function () { return RetinalEncoding_1.Size; } });\nObject.defineProperty(exports, \"Shape\", { enumerable: true, get: function () { return RetinalEncoding_1.Shape; } });\nconst Headers_1 = __webpack_require__(/*! ./Headers */ \"./src/configurations/Headers/index.ts\");\nObject.defineProperty(exports, \"Headers\", { enumerable: true, get: function () { return Headers_1.Headers; } });\nObject.defineProperty(exports, \"POSITION\", { enumerable: true, get: function () { return Headers_1.POSITION; } });\nObject.defineProperty(exports, \"ALIGNMENT\", { enumerable: true, get: function () { return Headers_1.ALIGNMENT; } });\nconst GridLines_1 = __webpack_require__(/*! ./GridLines */ \"./src/configurations/GridLines/index.ts\");\nObject.defineProperty(exports, \"GridLines\", { enumerable: true, get: function () { return GridLines_1.GridLines; } });\nconst GridBands_1 = __webpack_require__(/*! ./GridBands */ \"./src/configurations/GridBands/index.ts\");\nObject.defineProperty(exports, \"GridBands\", { enumerable: true, get: function () { return GridBands_1.GridBands; } });\nconst ScrollBar_1 = __webpack_require__(/*! ./ScrollBar */ \"./src/configurations/ScrollBar/index.ts\");\nObject.defineProperty(exports, \"ScrollBar\", { enumerable: true, get: function () { return ScrollBar_1.ScrollBar; } });\nObject.defineProperty(exports, \"SCROLL_VERTICAL\", { enumerable: true, get: function () { return ScrollBar_1.SCROLL_VERTICAL; } });\nObject.defineProperty(exports, \"SCROLL_HORIZONTAL\", { enumerable: true, get: function () { return ScrollBar_1.SCROLL_HORIZONTAL; } });\nconst Encoding_1 = __webpack_require__(/*! ./Encoding */ \"./src/configurations/Encoding/index.ts\");\nObject.defineProperty(exports, \"Encoding\", { enumerable: true, get: function () { return Encoding_1.Encoding; } });\nconst SideEffects_1 = __webpack_require__(/*! ./SideEffects */ \"./src/configurations/SideEffects/index.ts\");\nObject.defineProperty(exports, \"SideEffects\", { enumerable: true, get: function () { return SideEffects_1.SideEffects; } });\nconst Behaviours_1 = __webpack_require__(/*! ./Behaviours */ \"./src/configurations/Behaviours/index.ts\");\nObject.defineProperty(exports, \"Behaviours\", { enumerable: true, get: function () { return Behaviours_1.Behaviours; } });\nconst Tooltip_1 = __webpack_require__(/*! ./Tooltip */ \"./src/configurations/Tooltip/index.ts\");\nObject.defineProperty(exports, \"Tooltip\", { enumerable: true, get: function () { return Tooltip_1.Tooltip; } });\nObject.defineProperty(exports, \"TOOLTIP_TYPE\", { enumerable: true, get: function () { return Tooltip_1.TOOLTIP_TYPE; } });\nconst Border_1 = __webpack_require__(/*! ./Border */ \"./src/configurations/Border/index.ts\");\nObject.defineProperty(exports, \"Border\", { enumerable: true, get: function () { return Border_1.Border; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/index.ts?");

/***/ }),

/***/ "@chartshq/muze":
/*!****************************************************************************************************************!*\
  !*** external {"root":"muze","amd":"@chartshq/muze","commonjs2":"@chartshq/muze","commonjs":"@chartshq/muze"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__chartshq_muze__;\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/external_%7B%22root%22:%22muze%22,%22amd%22:%22@chartshq/muze%22,%22commonjs2%22:%22@chartshq/muze%22,%22commonjs%22:%22@chartshq/muze%22%7D?");

/***/ })

/******/ });
});