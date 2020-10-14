(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@chartshq/muze"), require("react"));
	else if(typeof define === 'function' && define.amd)
		define("@chartshq/react-muze/components", ["@chartshq/muze", "react"], factory);
	else if(typeof exports === 'object')
		exports["@chartshq/react-muze/components"] = factory(require("@chartshq/muze"), require("react"));
	else
		root["@chartshq/react-muze/components"] = factory(root["muze"], root["React"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__chartshq_muze__, __WEBPACK_EXTERNAL_MODULE_react__) {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@chartshq/muze/dist/muze.css":
/*!***************************************************!*\
  !*** ./node_modules/@chartshq/muze/dist/muze.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../css-loader/dist/cjs.js!./muze.css */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/@chartshq/muze/dist/muze.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/@chartshq/muze/dist/muze.css?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/@chartshq/muze/dist/muze.css":
/*!*****************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/@chartshq/muze/dist/muze.css ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".muze-simple-axis text{text-align:center;font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif}.muze-ticks{font-style:\\\"normal\\\";fill:#858585}.muze-tick-lines,.muze-ticks{font-size:12px;text-align:center;font-weight:400;font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif}.muze-tick-lines{stroke:#efefef}.muze-axis-name{font-size:14px;text-align:center;font-weight:400;font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;fill:#5f5f5f}.muze-axis-name.hidden{display:none}.muze-fadeout-interaction{stroke-opacity:.3}.muze-layer-line{stroke-linejoin:round;stroke-width:2px;stroke:#1f77b4}.muze-layer-area{stroke-linejoin:round}.muze-layer-arc-highlight{fill:#7f7f7f!important}.muze-layer-arc-fadeout{fill-opacity:.3!important}.muze-layer-arc-selected{fill:#e6e6e6!important}.muze-layer-arc{fill:#1f77b4}.muze-layer-text text{font-size:12px;fill:#000}.muze-layer-text rect{fill:#7f7f7f;fill-opacity:.3}.muze-layer-text-highlight{fill-opacity:1}.muze-layer-text-fadeout{fill-opacity:.3!important}.muze-layer-text-selected{fill:#000!important}.muze-layer-point{fill-opacity:.5;pointer-events:none}.muze-layer-path-unhighlight{stroke-width:0px}.muze-layer-path-highlight{stroke-width:1px;stroke:#000;fill-opacity:0}.muze-layer-bar,.muze-layer-bar-highlight{fill-opacity:1}.muze-layer-bar-fadeout{fill-opacity:.2!important}.muze-layer-bar-selected{fill:#4682b4!important}.muze-layer-tick{stroke-opacity:.7;stroke:#f44336}.muze-layer-tick-highlight{stroke-opacity:1}.muze-layer-tick-fadeout{stroke-opacity:.3!important;stroke:#7f7f7f!important}.muze-layer-tick-selected{stroke:#000!important}.muze-selection-box-group{fill:#d3d3d3;fill-opacity:.3;stroke:#b4b4b4;pointer-events:all}.muze-selection-box-group rect{cursor:all-scroll}.muze-tooltip-box{opacity:1;border:1px solid hsla(0,0%,59.2%,.19);background:#fbfbfb;-webkit-box-shadow:2px 2px 3px 0 hsla(0,0%,82.7%,.5);box-shadow:2px 2px 3px 0 hsla(0,0%,82.7%,.5);font-size:12px;color:#5f5f5f;-webkit-border-radius:1px;border-radius:1px;padding-top:4px;display:inline-block;pointer-events:none;z-index:9999999999;text-align:left;will-change:transform}.muze-tooltip-row{padding-bottom:2px;padding-top:2px;overflow:auto}.muze-tooltip-parent-container{pointer-events:none;z-index:9999999999}.muze-tooltip-stacked-row{color:#828282;margin-left:10px;font-size:12px;font-weight:600;line-height:\\\"15px\\\"}.muze-tooltip-stacked-row-key{margin-left:10px}.muze-tooltip-stacked-row-value{margin-left:2px}.muze-tooltip-stacked-percentage{font-size:10px;color:#828282;margin-left:-20px;margin-right:20px;float:right;line-height:17px}.muze-tooltip-selected-row{background-color:#ebebeb}.muze-tooltip-row:last-child{padding-bottom:4px}.muze-tooltip-value{color:#5f5f5f;float:right;margin-left:10px}.muze-tooltip-connectors path{stroke-width:2px;stroke:#c7c7be;stroke-linejoin:round;stroke-linecap:round}.muze-tooltip-html-container{margin-left:10px;margin-right:10px}.muze-tooltip-content svg{margin-left:10px;margin-right:5px}.muze-tooltip-value{margin-right:24px;margin-left:24px}.muze-tooltip-first{font-weight:600;font-size:15px;margin-left:15px}.muze-tooltip-table-tbody td{padding:3px}.muze-tooltip-table-row-0{font-weight:700}.muze-tooltip-content-parent-container :last-child{border-bottom:none}.muze-tooltip-content-parent-container{display:inline-block}.muze-tooltip-content-container-highlightSummary{border-right:1px solid #e9e9e9}.muze-tooltip-content-container-selectionSummary-crosstab{display:inline-block}.muze-tooltip-content-container-selectionSummary-default{border-bottom:1px solid #e9e9e9}.muze-tooltip-content-container-highlightSummary-crosstab{float:left}.muze-tooltip-content-container-selectionSummary .muze-tooltip-content{margin-left:3px;margin-right:3px}.muze-crossband{stroke-opacity:0;fill:grey;fill-opacity:.2}.muze-crossline{stroke:#979797;stroke-dasharray:5,7;fill:#979797;opacity:.65}.muze-anchors-group{pointer-events:none}.muze-anchors-group-lower .muze-layer-point,.muze-anchors-group-upper .muze-layer-point,.muze-anchors-group .muze-layer-point,.muze-brush-anchors-lower .muze-layer-point,.muze-brush-anchors-upper .muze-layer-point,.muze-persistent-anchors-lower .muze-layer-point,.muze-persistent-anchors-upper .muze-layer-point,.muze-persistent-anchors .muze-layer-point{fill-opacity:1}.muze-axis-ticks-highlight{font-weight:700;fill:#595959}.muze-axis-ticks-unhighlight{font-weight:400;fill:#858585}.muze-visual-unit{background:transparent}.muze-axis-zero-line{stroke-width:1px}.muze-grid-band-x-0,.muze-grid-band-y-0{fill-opacity:0}.muze-unit{-webkit-touch-callout:none;-webkit-user-select:none}.muze-tracker{opacity:0}.muze-legend-box,.muze-legend-item-info,.muze-legend-title{font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif}.muze-legend-box{line-height:10px!important;height:100px;display:inline-block}.muze-legend-title{display:table;-webkit-box-align:center;-webkit-align-items:center;align-items:center;float:left;text-align:left;font-size:14px;height:30px;fill:#5f5f5f;font-weight:600}.muze-legend-title-text{display:table-cell;vertical-align:middle}.muze-legend-overflow{text-align:center}.muze-legend-icon,.muze-legend-icon-svg{cursor:pointer}.muze-overflow-y{overflow-y:scroll}.muze-overflow-x{overflow-x:scroll}.muze-legend-fadeout{fill-opacity:.3}.muze-legend-fadeout path{stroke-width:1px;fill-opacity:0}.muze-legend-brighten{fill-opacity:1}.muze-legend-item-info{float:left;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;cursor:pointer;font-size:12px}.muze-legend-item-info.center{-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.muze-legend-item-info.start{-webkit-box-pack:start;-webkit-justify-content:flex-start;justify-content:flex-start}.muze-legend-item-info.end{-webkit-box-pack:end;-webkit-justify-content:flex-end;justify-content:flex-end}.muze-legend-selection-box{fill:#d3d3d3;fill-opacity:.3;stroke:#b4b4b4;cursor:all-scroll;pointer-events:all}.muze-legend-marker{stroke:#e2e2e2;stroke-width:1px;fill:#797474}.muze-legend-marker-show{display:block}.muze-legend-marker-hide{display:none}.muze-legend-marker-text-container{position:relative}.muze-legend-marker-text{position:absolute}.muze-legend-marker-text div{text-shadow:-1px -1px 0 #fff,1px -1px 0 #fff,-1px 1px 0 #fff,1px 1px 0 #fff;pointer-events:none}.muze-text-cell{font-size:12px;color:#5f5f5f;font-weight:400;font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:15px;white-space:nowrap;-webkit-transform-origin:0 0;transform-origin:0 0}.muze-header-cell{font-size:16px}.muze-header-cell,.muze-subheader-cell{text-align:center;color:#858585;font-weight:800;font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif;line-height:1;white-space:nowrap}.muze-subheader-cell{font-size:15px}.muze-scroll-bar{background:#f8f8f8;position:relative;font-size:10px}.muze-scroll-arrow{float:left;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;background:#a2a2a2;color:#fff}.muze-scroll-arrow-left{height:100%;width:20px;-webkit-border-top-right-radius:3px;border-top-right-radius:3px;-webkit-border-bottom-right-radius:3px;border-bottom-right-radius:3px}.muze-scroll-arrow-right{height:100%;width:20px;-webkit-border-top-left-radius:3px;border-top-left-radius:3px}.muze-scroll-arrow-right,.muze-scroll-arrow-top{-webkit-border-bottom-left-radius:3px;border-bottom-left-radius:3px}.muze-scroll-arrow-top{width:100%;height:20px;-webkit-border-bottom-right-radius:3px;border-bottom-right-radius:3px}.muze-scroll-arrow-bottom{width:100%;height:20px;-webkit-border-top-left-radius:3px;border-top-left-radius:3px;-webkit-border-top-right-radius:3px;border-top-right-radius:3px}.muze-scroll-rect{float:left;position:relative}.muze-scroll-mover{position:absolute;-webkit-border-radius:3px;background:#a2a2a2;cursor:-webkit-grab;border-radius:3px}.muze-scroll-mover:active{cursor:-webkit-grabbing}.muze-scroll-arrow-chevron{position:relative;text-align:center;padding:1px;margin-bottom:0}.muze-scroll-arrow-chevron:after,.muze-scroll-arrow-chevron:before{content:\\\"\\\";position:absolute;background:#fff}#muze-scroll-arrow-chevron-bottom,#muze-scroll-arrow-chevron-top{height:1px;width:6px}#muze-scroll-arrow-chevron-left,#muze-scroll-arrow-chevron-right{width:1px;height:6px}#muze-scroll-arrow-chevron-bottom:before{top:0;left:0;height:100%;width:51%;-webkit-transform:skew(0deg,35deg);transform:skew(0deg,35deg)}#muze-scroll-arrow-chevron-bottom:after{right:0;width:50%}#muze-scroll-arrow-chevron-bottom:after,#muze-scroll-arrow-chevron-top:before{top:0;height:100%;-webkit-transform:skew(0deg,-35deg);transform:skew(0deg,-35deg)}#muze-scroll-arrow-chevron-top:before{left:0;width:51%}#muze-scroll-arrow-chevron-top:after{top:0;right:0;height:100%;width:50%;-webkit-transform:skew(0deg,35deg);transform:skew(0deg,35deg)}#muze-scroll-arrow-chevron-right:before{top:0;left:0;height:51%;width:100%;-webkit-transform:skew(35deg,0deg);transform:skew(35deg,0deg)}#muze-scroll-arrow-chevron-right:after{bottom:0;left:0;width:100%;height:50%;-webkit-transform:skew(-35deg,0deg);transform:skew(-35deg,0deg)}#muze-scroll-arrow-chevron-left:before{bottom:0;left:0;width:100%;height:51%;-webkit-transform:skew(35deg,0deg);transform:skew(35deg,0deg)}#muze-scroll-arrow-chevron-left:after{top:0;left:0;width:100%;height:50%;-webkit-transform:skew(-35deg,0deg);transform:skew(-35deg,0deg)}.muze-grid-normal{border-color:#ebebeb!important}.muze-grid-normal .muze-axis-name{font-size:12px!important;line-height:15px!important}.muze-grid-dark{border-color:#cbcbcb!important}.muze-grid-dark .muze-axis-name{font-size:12px!important;line-height:15px!important}.muze-grid-dark-bottom{border-bottom-color:#cbcbcb!important}.muze-grid-darker-top{border-top-color:#979797!important}.muze-grid-dark-top{border-top-color:#cbcbcb!important}.muze-grid-dark-right{border-right-color:#cbcbcb!important}.muze-grid-darker-bottom{border-bottom-color:#979797!important}.muze-grid-dark-left{border-left-color:#cbcbcb!important}.muze-grid-none-left{border-left-color:transparent!important}.muze-grid-none-right{border-right-color:transparent!important}.muze-grid-none-top{border-top-color:transparent!important}.muze-grid-none-bottom{border-bottom-color:transparent!important}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdh18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdo18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdg18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdv18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdj18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSdi18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight Italic\\\"),local(\\\"SourceSansPro-ExtraLightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZYokSds18S0xR41.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkidh18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkido18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkidg18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkidv18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkidj18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkidi18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:300;src:local(\\\"Source Sans Pro Light Italic\\\"),local(\\\"SourceSansPro-LightItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZMkids18S0xR41.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7qsDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7jsDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7rsDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7ksDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7osDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7psDJB9cme_xc.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:400;src:local(\\\"Source Sans Pro Italic\\\"),local(\\\"SourceSansPro-Italic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK1dSBYKcSV-LCoeQqfX1RYOo3qPZ7nsDJB9cme.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdh18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdo18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdg18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdv18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdj18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCdi18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:600;src:local(\\\"Source Sans Pro SemiBold Italic\\\"),local(\\\"SourceSansPro-SemiBoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZY4lCds18S0xR41.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdh18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdo18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdg18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdv18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdj18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSdi18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:700;src:local(\\\"Source Sans Pro Bold Italic\\\"),local(\\\"SourceSansPro-BoldItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZclSds18S0xR41.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydh18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydo18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydg18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydv18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydj18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklydi18S0xR41YDw.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:italic;font-weight:900;src:local(\\\"Source Sans Pro Black Italic\\\"),local(\\\"SourceSansPro-BlackItalic\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKwdSBYKcSV-LCoeQqfX1RYOo3qPZZklyds18S0xR41.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmhdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wkxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wmRdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:200;src:local(\\\"Source Sans Pro ExtraLight\\\"),local(\\\"SourceSansPro-ExtraLight\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdu3cOWxw.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmhdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwkxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwmRdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:300;src:local(\\\"Source Sans Pro Light\\\"),local(\\\"SourceSansPro-Light\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdu3cOWxw.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNa7lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qPK7lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNK7lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qO67lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qN67lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qNq7lujVj9_mf.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:400;src:local(\\\"Source Sans Pro Regular\\\"),local(\\\"SourceSansPro-Regular\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xK3dSBYKcSV-LCoeQqfX1RYOo3qOK7lujVj9w.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmhdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwkxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwmRdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:600;src:local(\\\"Source Sans Pro SemiBold\\\"),local(\\\"SourceSansPro-SemiBold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3i54rwlxdu3cOWxw.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmhdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwkxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwmRdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:700;src:local(\\\"Source Sans Pro Bold\\\"),local(\\\"SourceSansPro-Bold\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3ig4vwlxdu3cOWxw.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmhdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0460-052f,U+1c80-1c88,U+20b4,U+2de0-2dff,U+a640-a69f,U+fe2e-fe2f}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwkxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0400-045f,U+0490-0491,U+04b0-04b1,U+2116}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmxdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+1f??}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0370-03ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmBdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0102-0103,U+0110-0111,U+1ea0-1ef9,U+20ab}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwmRdu3cOWxy40.woff2) format(\\\"woff2\\\");unicode-range:U+0100-024f,U+0259,U+1e??,U+2020,U+20a0-20ab,U+20ad-20cf,U+2113,U+2c60-2c7f,U+a720-a7ff}@font-face{font-family:Source Sans Pro;font-style:normal;font-weight:900;src:local(\\\"Source Sans Pro Black\\\"),local(\\\"SourceSansPro-Black\\\"),url(https://fonts.gstatic.com/s/sourcesanspro/v11/6xKydSBYKcSV-LCoeQqfX1RYOo3iu4nwlxdu3cOWxw.woff2) format(\\\"woff2\\\");unicode-range:U+00??,U+0131,U+0152-0153,U+02bb-02bc,U+02c6,U+02da,U+02dc,U+2000-206f,U+2074,U+20ac,U+2122,U+2191,U+2193,U+2212,U+2215,U+feff,U+fffd}.muze-group-container,.muze-subtitle-cell,.muze-title-cell{font-family:Source Sans Pro,Helvetica Neue,Helvetica,Arial,sans-serif}.muze-group-container{font-size:12px;line-height:15px;-webkit-tap-highlight-color:rgba(0,0,0,0);line-height:1.42857143;color:#5f5f5f;background-color:transparent;margin:0}.muze-group-container *,.muze-group-container :after,.muze-group-container :before{-webkit-box-sizing:border-box;box-sizing:border-box}.muze-group-container .muze-table-arrow{margin:5px;width:0;height:0;position:absolute;opacity:.5;z-index:10;cursor:pointer}.muze-group-container .muze-table-arrow:hover{opacity:1}.muze-group-container .muze-table-arrow-right{left:100%;border-left:15px solid #4682b4}.muze-group-container .muze-table-arrow-left,.muze-group-container .muze-table-arrow-right{top:-webkit-calc(50% - 25px);top:calc(50% - 25px);border-top:20px solid transparent;border-bottom:20px solid transparent}.muze-group-container .muze-table-arrow-left{right:100%;border-right:15px solid #4682b4}.muze-group-container .muze-table-arrow-bottom{top:100%;border-top:15px solid #4682b4}.muze-group-container .muze-table-arrow-bottom,.muze-group-container .muze-table-arrow-top{left:-webkit-calc(50% - 25px);left:calc(50% - 25px);border-left:20px solid transparent;border-right:20px solid transparent}.muze-group-container .muze-table-arrow-top{bottom:100%;border-bottom:15px solid #4682b4}.muze-group-container .table-row-nested{visibility:hidden;border-top:none}.muze-group-container svg{display:block;width:inherit;height:inherit;float:left;vertical-align:top}.muze-group-container .axisName.hidden{opacity:0}.muze-group-container .axisName{opacity:1}.muze-group-container .grid-td svg{max-width:100%;max-height:100%}.muze-group-container .domain{opacity:0}.muze-board{float:left}.muze-layout-container{float:left;position:relative}.muze-board-legend,.muze-legend-section{text-align:center;float:left}.muze-legend-horizontal-section{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-wrap:wrap;flex-wrap:wrap}.muze-legend-components{text-align:center;float:left}.muze-grid-layout,.muze-grid-layout-container,.muze-grid-layout-row{float:left;position:relative}.muze-grid-table{background-color:transparent;border-spacing:0;table-layout:fixed}.muze-grid-td,.muze-grid-th{padding:0}.muze-table-header{width:inherit;height:inherit}.muze-grid-layout,.muze-layout-grid-container{float:left;position:relative}.muze-grid-top{position:relative;top:100%;-webkit-transform:translateY(-100%);transform:translateY(-100%)}.muze-grid div{float:left}.muze-grid div,.muze-grid table{border-collapse:collapse}.muze-title-cell{font-size:24px;font-weight:700;color:#5f5f5f}.muze-grid-headers{font-size:12px}.muze-subtitle-cell{font-size:16px;font-weight:400;color:#b1b1b1}.domain{opacity:0}.muze-group-container,.muze-layout-container,.muze-legend-container{float:left}.muze-message-container{background-color:#f1f1f1;display:table;border:1px solid #c3c9d0}.muze-message-container-child{display:table-cell;vertical-align:middle}.muze-message-container-child-img{text-align:center}.muze-message-container-child-img svg{display:unset;float:unset}.muze-message-container-child-message{color:#4f708c;text-align:center;font-weight:600}.hidden{display:none}\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/@chartshq/muze/dist/muze.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Canvas/style.scss":
/*!********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Canvas/style.scss ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".muze-chart {\\n    display: inline-block;\\n} \", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/style.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/components/Muze/style.scss":
/*!******************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/components/Muze/style.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \".muze-wrapper {\\n    height: 100%;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Muze/style.scss?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/index.js ***!
  \*****************************************************/
/*! exports provided: v1, v3, v4, v5, NIL, version, validate, stringify, parse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v1_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v1.js */ \"./node_modules/uuid/dist/esm-browser/v1.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v1\", function() { return _v1_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _v3_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./v3.js */ \"./node_modules/uuid/dist/esm-browser/v3.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v3\", function() { return _v3_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _v4_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./v4.js */ \"./node_modules/uuid/dist/esm-browser/v4.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v4\", function() { return _v4_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _v5_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./v5.js */ \"./node_modules/uuid/dist/esm-browser/v5.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"v5\", function() { return _v5_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _nil_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nil.js */ \"./node_modules/uuid/dist/esm-browser/nil.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"NIL\", function() { return _nil_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./version.js */ \"./node_modules/uuid/dist/esm-browser/version.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"version\", function() { return _version_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"validate\", function() { return _validate_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"]; });\n\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"stringify\", function() { return _stringify_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"]; });\n\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"parse\", function() { return _parse_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"]; });\n\n\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/index.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/md5.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/md5.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/*\n * Browser-compatible JavaScript MD5\n *\n * Modification of JavaScript MD5\n * https://github.com/blueimp/JavaScript-MD5\n *\n * Copyright 2011, Sebastian Tschan\n * https://blueimp.net\n *\n * Licensed under the MIT license:\n * https://opensource.org/licenses/MIT\n *\n * Based on\n * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message\n * Digest Algorithm, as defined in RFC 1321.\n * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009\n * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet\n * Distributed under the BSD License\n * See http://pajhome.org.uk/crypt/md5 for more info.\n */\nfunction md5(bytes) {\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = new Uint8Array(msg.length);\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes[i] = msg.charCodeAt(i);\n    }\n  }\n\n  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));\n}\n/*\n * Convert an array of little-endian words to an array of bytes\n */\n\n\nfunction md5ToHexEncodedArray(input) {\n  var output = [];\n  var length32 = input.length * 32;\n  var hexTab = '0123456789abcdef';\n\n  for (var i = 0; i < length32; i += 8) {\n    var x = input[i >> 5] >>> i % 32 & 0xff;\n    var hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);\n    output.push(hex);\n  }\n\n  return output;\n}\n/**\n * Calculate output length with padding and bit length\n */\n\n\nfunction getOutputLength(inputLength8) {\n  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;\n}\n/*\n * Calculate the MD5 of an array of little-endian words, and a bit length.\n */\n\n\nfunction wordsToMd5(x, len) {\n  /* append padding */\n  x[len >> 5] |= 0x80 << len % 32;\n  x[getOutputLength(len) - 1] = len;\n  var a = 1732584193;\n  var b = -271733879;\n  var c = -1732584194;\n  var d = 271733878;\n\n  for (var i = 0; i < x.length; i += 16) {\n    var olda = a;\n    var oldb = b;\n    var oldc = c;\n    var oldd = d;\n    a = md5ff(a, b, c, d, x[i], 7, -680876936);\n    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);\n    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);\n    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);\n    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);\n    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);\n    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);\n    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);\n    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);\n    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);\n    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);\n    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);\n    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);\n    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);\n    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);\n    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);\n    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);\n    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);\n    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);\n    b = md5gg(b, c, d, a, x[i], 20, -373897302);\n    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);\n    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);\n    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);\n    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);\n    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);\n    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);\n    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);\n    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);\n    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);\n    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);\n    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);\n    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);\n    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);\n    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);\n    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);\n    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);\n    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);\n    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);\n    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);\n    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);\n    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);\n    d = md5hh(d, a, b, c, x[i], 11, -358537222);\n    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);\n    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);\n    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);\n    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);\n    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);\n    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);\n    a = md5ii(a, b, c, d, x[i], 6, -198630844);\n    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);\n    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);\n    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);\n    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);\n    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);\n    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);\n    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);\n    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);\n    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);\n    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);\n    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);\n    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);\n    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);\n    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);\n    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);\n    a = safeAdd(a, olda);\n    b = safeAdd(b, oldb);\n    c = safeAdd(c, oldc);\n    d = safeAdd(d, oldd);\n  }\n\n  return [a, b, c, d];\n}\n/*\n * Convert an array bytes to an array of little-endian words\n * Characters >255 have their high-byte silently ignored.\n */\n\n\nfunction bytesToWords(input) {\n  if (input.length === 0) {\n    return [];\n  }\n\n  var length8 = input.length * 8;\n  var output = new Uint32Array(getOutputLength(length8));\n\n  for (var i = 0; i < length8; i += 8) {\n    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;\n  }\n\n  return output;\n}\n/*\n * Add integers, wrapping at 2^32. This uses 16-bit operations internally\n * to work around bugs in some JS interpreters.\n */\n\n\nfunction safeAdd(x, y) {\n  var lsw = (x & 0xffff) + (y & 0xffff);\n  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);\n  return msw << 16 | lsw & 0xffff;\n}\n/*\n * Bitwise rotate a 32-bit number to the left.\n */\n\n\nfunction bitRotateLeft(num, cnt) {\n  return num << cnt | num >>> 32 - cnt;\n}\n/*\n * These functions implement the four basic operations the algorithm uses.\n */\n\n\nfunction md5cmn(q, a, b, x, s, t) {\n  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);\n}\n\nfunction md5ff(a, b, c, d, x, s, t) {\n  return md5cmn(b & c | ~b & d, a, b, x, s, t);\n}\n\nfunction md5gg(a, b, c, d, x, s, t) {\n  return md5cmn(b & d | c & ~d, a, b, x, s, t);\n}\n\nfunction md5hh(a, b, c, d, x, s, t) {\n  return md5cmn(b ^ c ^ d, a, b, x, s, t);\n}\n\nfunction md5ii(a, b, c, d, x, s, t) {\n  return md5cmn(c ^ (b | ~d), a, b, x, s, t);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (md5);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/md5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/nil.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/nil.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('00000000-0000-0000-0000-000000000000');\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/nil.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/parse.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/parse.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction parse(uuid) {\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  var v;\n  var arr = new Uint8Array(16); // Parse ########-....-....-....-............\n\n  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;\n  arr[1] = v >>> 16 & 0xff;\n  arr[2] = v >>> 8 & 0xff;\n  arr[3] = v & 0xff; // Parse ........-####-....-....-............\n\n  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;\n  arr[5] = v & 0xff; // Parse ........-....-####-....-............\n\n  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;\n  arr[7] = v & 0xff; // Parse ........-....-....-####-............\n\n  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;\n  arr[9] = v & 0xff; // Parse ........-....-....-....-############\n  // (Use \"/\" to avoid 32-bit truncation when bit-shifting high-order bytes)\n\n  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;\n  arr[11] = v / 0x100000000 & 0xff;\n  arr[12] = v >>> 24 & 0xff;\n  arr[13] = v >>> 16 & 0xff;\n  arr[14] = v >>> 8 & 0xff;\n  arr[15] = v & 0xff;\n  return arr;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (parse);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/parse.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/regex.js":
/*!*****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/regex.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/regex.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/rng.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/rng.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return rng; });\n// Unique ID creation requires a high quality random # generator. In the browser we therefore\n// require the crypto API and do not support built-in fallback to lower quality random number\n// generators (like Math.random()).\n// getRandomValues needs to be invoked in a context where \"this\" is a Crypto implementation. Also,\n// find the complete implementation of crypto (msCrypto) on IE11.\nvar getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto !== 'undefined' && typeof msCrypto.getRandomValues === 'function' && msCrypto.getRandomValues.bind(msCrypto);\nvar rnds8 = new Uint8Array(16);\nfunction rng() {\n  if (!getRandomValues) {\n    throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');\n  }\n\n  return getRandomValues(rnds8);\n}\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/rng.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/sha1.js":
/*!****************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/sha1.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// Adapted from Chris Veness' SHA1 code at\n// http://www.movable-type.co.uk/scripts/sha1.html\nfunction f(s, x, y, z) {\n  switch (s) {\n    case 0:\n      return x & y ^ ~x & z;\n\n    case 1:\n      return x ^ y ^ z;\n\n    case 2:\n      return x & y ^ x & z ^ y & z;\n\n    case 3:\n      return x ^ y ^ z;\n  }\n}\n\nfunction ROTL(x, n) {\n  return x << n | x >>> 32 - n;\n}\n\nfunction sha1(bytes) {\n  var K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];\n  var H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];\n\n  if (typeof bytes === 'string') {\n    var msg = unescape(encodeURIComponent(bytes)); // UTF8 escape\n\n    bytes = [];\n\n    for (var i = 0; i < msg.length; ++i) {\n      bytes.push(msg.charCodeAt(i));\n    }\n  } else if (!Array.isArray(bytes)) {\n    // Convert Array-like to Array\n    bytes = Array.prototype.slice.call(bytes);\n  }\n\n  bytes.push(0x80);\n  var l = bytes.length / 4 + 2;\n  var N = Math.ceil(l / 16);\n  var M = new Array(N);\n\n  for (var _i = 0; _i < N; ++_i) {\n    var arr = new Uint32Array(16);\n\n    for (var j = 0; j < 16; ++j) {\n      arr[j] = bytes[_i * 64 + j * 4] << 24 | bytes[_i * 64 + j * 4 + 1] << 16 | bytes[_i * 64 + j * 4 + 2] << 8 | bytes[_i * 64 + j * 4 + 3];\n    }\n\n    M[_i] = arr;\n  }\n\n  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);\n  M[N - 1][14] = Math.floor(M[N - 1][14]);\n  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;\n\n  for (var _i2 = 0; _i2 < N; ++_i2) {\n    var W = new Uint32Array(80);\n\n    for (var t = 0; t < 16; ++t) {\n      W[t] = M[_i2][t];\n    }\n\n    for (var _t = 16; _t < 80; ++_t) {\n      W[_t] = ROTL(W[_t - 3] ^ W[_t - 8] ^ W[_t - 14] ^ W[_t - 16], 1);\n    }\n\n    var a = H[0];\n    var b = H[1];\n    var c = H[2];\n    var d = H[3];\n    var e = H[4];\n\n    for (var _t2 = 0; _t2 < 80; ++_t2) {\n      var s = Math.floor(_t2 / 20);\n      var T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[_t2] >>> 0;\n      e = d;\n      d = c;\n      c = ROTL(b, 30) >>> 0;\n      b = a;\n      a = T;\n    }\n\n    H[0] = H[0] + a >>> 0;\n    H[1] = H[1] + b >>> 0;\n    H[2] = H[2] + c >>> 0;\n    H[3] = H[3] + d >>> 0;\n    H[4] = H[4] + e >>> 0;\n  }\n\n  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (sha1);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/sha1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/stringify.js":
/*!*********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/stringify.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n/**\n * Convert array of 16 byte values to UUID string format of the form:\n * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX\n */\n\nvar byteToHex = [];\n\nfor (var i = 0; i < 256; ++i) {\n  byteToHex.push((i + 0x100).toString(16).substr(1));\n}\n\nfunction stringify(arr) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  // Note: Be careful editing this code!  It's been tuned for performance\n  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434\n  var uuid = (byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]]).toLowerCase(); // Consistency check for valid UUID.  If this throws, it's likely due to one\n  // of the following:\n  // - One or more input array values don't map to a hex octet (leading to\n  // \"undefined\" in the uuid)\n  // - Invalid input values for the RFC `version` or `variant` fields\n\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Stringified UUID is invalid');\n  }\n\n  return uuid;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (stringify);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/stringify.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v1.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v1.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n // **`v1()` - Generate time-based UUID**\n//\n// Inspired by https://github.com/LiosK/UUID.js\n// and http://docs.python.org/library/uuid.html\n\nvar _nodeId;\n\nvar _clockseq; // Previous uuid creation time\n\n\nvar _lastMSecs = 0;\nvar _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details\n\nfunction v1(options, buf, offset) {\n  var i = buf && offset || 0;\n  var b = buf || new Array(16);\n  options = options || {};\n  var node = options.node || _nodeId;\n  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not\n  // specified.  We do this lazily to minimize issues related to insufficient\n  // system entropy.  See #189\n\n  if (node == null || clockseq == null) {\n    var seedBytes = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n    if (node == null) {\n      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)\n      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];\n    }\n\n    if (clockseq == null) {\n      // Per 4.2.2, randomize (14 bit) clockseq\n      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;\n    }\n  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,\n  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so\n  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'\n  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.\n\n\n  var msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock\n  // cycle to simulate higher resolution clock\n\n  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)\n\n  var dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression\n\n  if (dt < 0 && options.clockseq === undefined) {\n    clockseq = clockseq + 1 & 0x3fff;\n  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new\n  // time interval\n\n\n  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {\n    nsecs = 0;\n  } // Per 4.2.1.2 Throw error if too many uuids are requested\n\n\n  if (nsecs >= 10000) {\n    throw new Error(\"uuid.v1(): Can't create more than 10M uuids/sec\");\n  }\n\n  _lastMSecs = msecs;\n  _lastNSecs = nsecs;\n  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch\n\n  msecs += 12219292800000; // `time_low`\n\n  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;\n  b[i++] = tl >>> 24 & 0xff;\n  b[i++] = tl >>> 16 & 0xff;\n  b[i++] = tl >>> 8 & 0xff;\n  b[i++] = tl & 0xff; // `time_mid`\n\n  var tmh = msecs / 0x100000000 * 10000 & 0xfffffff;\n  b[i++] = tmh >>> 8 & 0xff;\n  b[i++] = tmh & 0xff; // `time_high_and_version`\n\n  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version\n\n  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)\n\n  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`\n\n  b[i++] = clockseq & 0xff; // `node`\n\n  for (var n = 0; n < 6; ++n) {\n    b[i + n] = node[n];\n  }\n\n  return buf || Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(b);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v1);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/v1.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v3.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v3.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _md5_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./md5.js */ \"./node_modules/uuid/dist/esm-browser/md5.js\");\n\n\nvar v3 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v3', 0x30, _md5_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v3);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/v3.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v35.js":
/*!***************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v35.js ***!
  \***************************************************/
/*! exports provided: DNS, URL, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DNS\", function() { return DNS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"URL\", function() { return URL; });\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n/* harmony import */ var _parse_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./parse.js */ \"./node_modules/uuid/dist/esm-browser/parse.js\");\n\n\n\nfunction stringToBytes(str) {\n  str = unescape(encodeURIComponent(str)); // UTF8 escape\n\n  var bytes = [];\n\n  for (var i = 0; i < str.length; ++i) {\n    bytes.push(str.charCodeAt(i));\n  }\n\n  return bytes;\n}\n\nvar DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';\nvar URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';\n/* harmony default export */ __webpack_exports__[\"default\"] = (function (name, version, hashfunc) {\n  function generateUUID(value, namespace, buf, offset) {\n    if (typeof value === 'string') {\n      value = stringToBytes(value);\n    }\n\n    if (typeof namespace === 'string') {\n      namespace = Object(_parse_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(namespace);\n    }\n\n    if (namespace.length !== 16) {\n      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');\n    } // Compute hash of namespace and value, Per 4.3\n    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =\n    // hashfunc([...namespace, ... value])`\n\n\n    var bytes = new Uint8Array(16 + value.length);\n    bytes.set(namespace);\n    bytes.set(value, namespace.length);\n    bytes = hashfunc(bytes);\n    bytes[6] = bytes[6] & 0x0f | version;\n    bytes[8] = bytes[8] & 0x3f | 0x80;\n\n    if (buf) {\n      offset = offset || 0;\n\n      for (var i = 0; i < 16; ++i) {\n        buf[offset + i] = bytes[i];\n      }\n\n      return buf;\n    }\n\n    return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(bytes);\n  } // Function#name is not settable on some platforms (#270)\n\n\n  try {\n    generateUUID.name = name; // eslint-disable-next-line no-empty\n  } catch (err) {} // For CommonJS default export support\n\n\n  generateUUID.DNS = DNS;\n  generateUUID.URL = URL;\n  return generateUUID;\n});\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/v35.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v4.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v4.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _rng_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rng.js */ \"./node_modules/uuid/dist/esm-browser/rng.js\");\n/* harmony import */ var _stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stringify.js */ \"./node_modules/uuid/dist/esm-browser/stringify.js\");\n\n\n\nfunction v4(options, buf, offset) {\n  options = options || {};\n  var rnds = options.random || (options.rng || _rng_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`\n\n  rnds[6] = rnds[6] & 0x0f | 0x40;\n  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided\n\n  if (buf) {\n    offset = offset || 0;\n\n    for (var i = 0; i < 16; ++i) {\n      buf[offset + i] = rnds[i];\n    }\n\n    return buf;\n  }\n\n  return Object(_stringify_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(rnds);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (v4);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/v4.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/v5.js":
/*!**************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/v5.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _v35_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./v35.js */ \"./node_modules/uuid/dist/esm-browser/v35.js\");\n/* harmony import */ var _sha1_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sha1.js */ \"./node_modules/uuid/dist/esm-browser/sha1.js\");\n\n\nvar v5 = Object(_v35_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])('v5', 0x50, _sha1_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n/* harmony default export */ __webpack_exports__[\"default\"] = (v5);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/v5.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/validate.js":
/*!********************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/validate.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _regex_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./regex.js */ \"./node_modules/uuid/dist/esm-browser/regex.js\");\n\n\nfunction validate(uuid) {\n  return typeof uuid === 'string' && _regex_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].test(uuid);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (validate);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/validate.js?");

/***/ }),

/***/ "./node_modules/uuid/dist/esm-browser/version.js":
/*!*******************************************************!*\
  !*** ./node_modules/uuid/dist/esm-browser/version.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _validate_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./validate.js */ \"./node_modules/uuid/dist/esm-browser/validate.js\");\n\n\nfunction version(uuid) {\n  if (!Object(_validate_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(uuid)) {\n    throw TypeError('Invalid UUID');\n  }\n\n  return parseInt(uuid.substr(14, 1), 16);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (version);\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./node_modules/uuid/dist/esm-browser/version.js?");

/***/ }),

/***/ "./src/components/Canvas/Chart/CanvasBuilder/CanvasBuilder.ts":
/*!********************************************************************!*\
  !*** ./src/components/Canvas/Chart/CanvasBuilder/CanvasBuilder.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CanvasBuilder = void 0;\nclass CanvasBuilder {\n    constructor(canvas) {\n        this._config = {\n            canvas,\n        };\n    }\n    static config(canvas) {\n        return new CanvasBuilder(canvas);\n    }\n    canvas() {\n        return this._config.canvas;\n    }\n    data(data) {\n        this._config.data = data;\n        return this;\n    }\n    rows(rows) {\n        this._config.rows = rows;\n        return this;\n    }\n    columns(columns) {\n        this._config.columns = columns;\n        return this;\n    }\n    width(width) {\n        this._config.width = width;\n        return this;\n    }\n    height(height) {\n        this._config.height = height;\n        return this;\n    }\n    color(color) {\n        this._config.color = color;\n        return this;\n    }\n    size(size) {\n        this._config.size = size;\n        return this;\n    }\n    shape(shape) {\n        this._config.shape = shape;\n        return this;\n    }\n    detail(detail) {\n        this._config.detail = detail;\n        return this;\n    }\n    title(title) {\n        this._config.title = title;\n        return this;\n    }\n    subtitle(subtitle) {\n        this._config.subtitle = subtitle;\n        return this;\n    }\n    config(config) {\n        this._config.config = config;\n        return this;\n    }\n    mount(mount) {\n        this._config.mount = mount;\n        return this;\n    }\n    layers(layers) {\n        this._config.layers = layers;\n        return this;\n    }\n    transform(callback) {\n        this._config.transform = callback;\n        return this;\n    }\n    create() {\n        const { canvas, data, rows, columns, width, height, color, size, shape, detail, title, subtitle, config, mount, layers, transform, } = this._config;\n        if (canvas) {\n            canvas\n                .data(data)\n                .rows(rows)\n                .columns(columns)\n                .width(width)\n                .height(height)\n                .color(color)\n                .size(size)\n                .shape(shape)\n                .detail(detail)\n                .title(title && title.content, Object.assign({}, title))\n                .subtitle(subtitle && subtitle.content, Object.assign({}, subtitle))\n                .config(config)\n                .layers(layers)\n                .transform(transform)\n                .mount(mount);\n        }\n    }\n}\nexports.CanvasBuilder = CanvasBuilder;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/Chart/CanvasBuilder/CanvasBuilder.ts?");

/***/ }),

/***/ "./src/components/Canvas/Chart/CanvasBuilder/index.ts":
/*!************************************************************!*\
  !*** ./src/components/Canvas/Chart/CanvasBuilder/index.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CanvasBuilder = void 0;\nconst CanvasBuilder_1 = __webpack_require__(/*! ./CanvasBuilder */ \"./src/components/Canvas/Chart/CanvasBuilder/CanvasBuilder.ts\");\nObject.defineProperty(exports, \"CanvasBuilder\", { enumerable: true, get: function () { return CanvasBuilder_1.CanvasBuilder; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/Chart/CanvasBuilder/index.ts?");

/***/ }),

/***/ "./src/components/Canvas/Chart/Config/index.ts":
/*!*****************************************************!*\
  !*** ./src/components/Canvas/Chart/Config/index.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Config = void 0;\nclass Config {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Config();\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Config = Config;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/Chart/Config/index.ts?");

/***/ }),

/***/ "./src/components/Canvas/Chart/helpers/index.ts":
/*!******************************************************!*\
  !*** ./src/components/Canvas/Chart/helpers/index.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.configSanitizer = exports.getLegendConfig = void 0;\nconst Headers_1 = __webpack_require__(/*! ../../../../configurations/Headers */ \"./src/configurations/Headers/index.ts\");\nexports.getLegendConfig = (legendConfig, legendType) => {\n    const { position = \"right\", show = \"true\", textWidth, textFormatter, title, border, borderColor, padding, } = legendConfig;\n    const defaultFn = (val) => val;\n    const sanitizedLegendConfig = {\n        position,\n    };\n    sanitizedLegendConfig[legendType] = sanitizedLegendConfig[legendType] || {\n        show,\n    };\n    if (textWidth) {\n        sanitizedLegendConfig[legendType].item = {\n            text: {\n                width: textWidth,\n                formatter: textFormatter || defaultFn,\n            },\n        };\n    }\n    if (title) {\n        sanitizedLegendConfig[legendType].title = {\n            text: title,\n        };\n    }\n    if (border) {\n        sanitizedLegendConfig[legendType].border = border;\n    }\n    if (borderColor) {\n        sanitizedLegendConfig[legendType].borderColor = borderColor;\n    }\n    if (padding) {\n        sanitizedLegendConfig[legendType].padding = padding;\n    }\n    return sanitizedLegendConfig;\n};\nexports.configSanitizer = (config, context) => {\n    const { xAxis = null, yAxis = null, colorLegend = {}, sizeLegend = {}, shapeLegend = {}, scrollBar = {}, colorScheme = null, data: globalDm, crossInteractive = false, } = context;\n    const { rows, columns, operation = (dm) => dm, color, size = null, shape = null, detail = null, width = 600, height = 400, colorLegend: canvasColorLegend = null, sizeLegend: canvasSizeLegend = null, shapeLegend: canvasShapeLegend = null, gridLines = {}, gridBands = {}, scrollBar: canvasScrollBar = null, showHeaders = false, xAxis: canvasXAxis, yAxis: canvasYAxis, className, colorScheme: canvasColorScheme = null, tooltips = [], crossInteractive: canvasCrossInteractive = false, sideEffects = {}, sort, border, transform, radiusAxis, autoGroupBy = true, facetRows, highlightExact = false, propagationBehaviourMap, } = config;\n    let { title, subtitle } = config;\n    if (typeof title === \"string\") {\n        title = Headers_1.Headers.config().content(title).create();\n    }\n    if (typeof subtitle === \"string\") {\n        subtitle = Headers_1.Headers.config().content(subtitle).create();\n    }\n    let canvasData = globalDm;\n    let chartColor = (color || {});\n    if (typeof color === \"string\") {\n        chartColor = {\n            field: color,\n        };\n    }\n    if (canvasData) {\n        canvasData = operation(globalDm);\n    }\n    if (!chartColor.range) {\n        if (canvasColorScheme) {\n            chartColor.range = canvasColorScheme;\n        }\n        else if (colorScheme) {\n            chartColor.range = colorScheme;\n        }\n    }\n    const sideEffectsMap = (sideEffects.on || []).reduce((acc, elem, i) => {\n        acc[elem] = sideEffects.for[i];\n        return acc;\n    }, {});\n    return {\n        data: canvasData,\n        rows,\n        columns,\n        width,\n        height,\n        color: chartColor,\n        size,\n        shape,\n        detail,\n        title,\n        subtitle,\n        xAxis: canvasXAxis || xAxis,\n        yAxis: canvasYAxis || yAxis,\n        legend: Object.assign(Object.assign(Object.assign({}, exports.getLegendConfig(canvasColorLegend || colorLegend, \"color\")), exports.getLegendConfig(canvasSizeLegend || sizeLegend, \"size\")), exports.getLegendConfig(canvasShapeLegend || shapeLegend, \"shape\")),\n        gridLines,\n        gridBands,\n        scrollBar: canvasScrollBar || scrollBar,\n        showHeaders,\n        className,\n        tooltips,\n        crossInteractive: canvasCrossInteractive,\n        canvasSideEffects: sideEffectsMap,\n        sort,\n        border,\n        transform,\n        radiusAxis,\n        autoGroupBy: {\n            disabled: !autoGroupBy,\n        },\n        facet: {\n            rows: Object.assign({}, facetRows),\n        },\n        highlight: {\n            exact: highlightExact,\n        },\n        propagationBehaviourMap,\n    };\n};\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/Chart/helpers/index.ts?");

/***/ }),

/***/ "./src/components/Canvas/Chart/index.ts":
/*!**********************************************!*\
  !*** ./src/components/Canvas/Chart/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.createChart = void 0;\nconst CanvasBuilder_1 = __webpack_require__(/*! ./CanvasBuilder */ \"./src/components/Canvas/Chart/CanvasBuilder/index.ts\");\nconst Tooltip_1 = __webpack_require__(/*! ../../../configurations/Tooltip */ \"./src/configurations/Tooltip/index.ts\");\nconst helpers_1 = __webpack_require__(/*! ./helpers */ \"./src/components/Canvas/Chart/helpers/index.ts\");\nconst Config_1 = __webpack_require__(/*! ./Config */ \"./src/components/Canvas/Chart/Config/index.ts\");\nexports.createChart = (state, props, mountPoint, context) => {\n    const { canvas, layerConfig } = state;\n    const { data, rows, columns, width, height, color, detail, size, shape, title, subtitle, xAxis, yAxis, legend, gridLines, gridBands, scrollBar, showHeaders, className, tooltips, crossInteractive, canvasSideEffects, sort = {}, border = {}, radiusAxis, transform, autoGroupBy, facet, highlight, propagationBehaviourMap, } = helpers_1.configSanitizer(props, context);\n    if (canvas && data && mountPoint) {\n        if (propagationBehaviourMap) {\n            context.addPropagationBehaviour(canvas, propagationBehaviourMap);\n        }\n        context.addChildChart(canvas);\n        crossInteractive && context.addCrossInteraction(canvas);\n        const config = Config_1.Config.config().create({\n            axes: {\n                x: xAxis,\n                y: yAxis,\n                radius: Object.assign({}, radiusAxis),\n            },\n            legend,\n            gridLines,\n            gridBands,\n            scrollBar,\n            showHeaders,\n            interaction: {\n                tooltip: (() => {\n                    const x = Tooltip_1.resolveMultiTooltips(tooltips);\n                    console.log(\"tooltips\", x);\n                    console.log(\"x\", x);\n                    return x ? x : {};\n                })(),\n                behaviours: {\n                    highlight: Object.assign({}, highlight),\n                },\n            },\n            border,\n            autoGroupBy,\n            facet,\n            sort,\n        });\n        CanvasBuilder_1.CanvasBuilder.config(canvas)\n            .data(data)\n            .rows(rows)\n            .columns(columns)\n            .width(width)\n            .height(height)\n            .transform(transform)\n            .color(color)\n            .size(size)\n            .shape(shape)\n            .detail(detail)\n            .title(title)\n            .subtitle(subtitle)\n            .layers(Object.values(layerConfig))\n            .config(config)\n            .mount(mountPoint)\n            .create();\n        const canvasClass = className\n            ? `${className} muze-${canvas.alias()}`\n            : `muze-${canvas.alias()}`;\n        mountPoint.classList.add(...canvasClass.split(\" \"));\n    }\n};\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/Chart/index.ts?");

/***/ }),

/***/ "./src/components/Canvas/index.tsx":
/*!*****************************************!*\
  !*** ./src/components/Canvas/index.tsx ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst muze_context_1 = __webpack_require__(/*! ../../utils/context/muze-context */ \"./src/utils/context/muze-context.tsx\");\nconst canvas_context_1 = __webpack_require__(/*! ../../utils/context/canvas-context */ \"./src/utils/context/canvas-context.tsx\");\n__webpack_require__(/*! ./style.scss */ \"./src/components/Canvas/style.scss\");\nconst Chart_1 = __webpack_require__(/*! ./Chart */ \"./src/components/Canvas/Chart/index.ts\");\nclass Canvas extends react_1.default.Component {\n    constructor(props) {\n        super(props);\n        this.setLayerConfig = (config, id) => {\n            const { layerConfig } = this.state;\n            if (!config) {\n                let newData = Object.assign({}, this.state.layerConfig);\n                delete newData[id];\n                this.setState({ layerConfig: newData });\n            }\n            else if (!layerConfig[id]) {\n                this.setState((prevState) => ({\n                    layerConfig: Object.assign(Object.assign({}, prevState.layerConfig), { [id]: config }),\n                }));\n            }\n            else if (layerConfig[id]) {\n                this.setState((prevState) => {\n                    let newData = prevState.layerConfig;\n                    let item = Object.keys(newData).find((d) => d === id);\n                    Object.assign(newData[item], config);\n                    return {\n                        layerConfig: newData,\n                    };\n                });\n            }\n        };\n        this.state = {\n            canvas: null,\n            layerConfig: {},\n        };\n        this.mountRef = react_1.default.createRef();\n    }\n    componentDidMount() {\n        const { env } = this.context;\n        this.setState({ canvas: env.canvas() });\n    }\n    componentDidUpdate() {\n        const { data } = this.context;\n        const mountPoint = this.mountRef.current;\n        if (data && mountPoint) {\n            Chart_1.createChart(this.state, this.props, mountPoint, this.context);\n        }\n    }\n    shouldComponentUpdate(nextProps, nextState) {\n        const nextStateLen = Object.keys(nextState.layerConfig).length;\n        const stateLen = Object.keys(this.state.layerConfig).length;\n        if (nextStateLen !== stateLen)\n            return true;\n        return false;\n    }\n    render() {\n        const { className, children } = this.props;\n        const { layerConfig } = this.state;\n        const computedClassName = className\n            ? `muze-chart ${className}`\n            : \"muze-chart\";\n        return (react_1.default.createElement(canvas_context_1.CanvasProvider, { values: {\n                setLayerConfig: this.setLayerConfig,\n                layerConfig,\n            } },\n            children,\n            react_1.default.createElement(\"div\", { ref: this.mountRef, className: computedClassName })));\n    }\n}\nexports.default = Canvas;\nCanvas.contextType = muze_context_1.Context;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/index.tsx?");

/***/ }),

/***/ "./src/components/Canvas/style.scss":
/*!******************************************!*\
  !*** ./src/components/Canvas/style.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Canvas/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Canvas/style.scss?");

/***/ }),

/***/ "./src/components/Layer/index.tsx":
/*!****************************************!*\
  !*** ./src/components/Layer/index.tsx ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst muze_1 = __importDefault(__webpack_require__(/*! @chartshq/muze */ \"@chartshq/muze\"));\nconst uuid_1 = __webpack_require__(/*! uuid */ \"./node_modules/uuid/dist/esm-browser/index.js\");\nconst canvas_context_1 = __webpack_require__(/*! ../../utils/context/canvas-context */ \"./src/utils/context/canvas-context.tsx\");\nclass Layer extends react_1.default.Component {\n    constructor(props) {\n        super(props);\n        this.id = uuid_1.v4();\n    }\n    componentWillUnmount() {\n        const { setLayerConfig } = this.context;\n        setLayerConfig(null, this.id);\n    }\n    updateLayerConfig() {\n        return Object.keys(this.props).reduce((acc, prop, index) => {\n            if (this.props[prop] !== undefined) {\n                if (prop === \"transformType\") {\n                    acc.transform = {\n                        type: this.props[prop],\n                    };\n                }\n                else if (prop === \"interactionStyle\") {\n                    acc.interaction = Object.assign({}, this.props[prop]);\n                }\n                else {\n                    acc[prop] = this.props[prop];\n                }\n            }\n            return acc;\n        }, {});\n    }\n    componentDidMount() {\n        const { setLayerConfig } = this.context;\n        const config = this.updateLayerConfig();\n        setLayerConfig(config, this.id);\n    }\n    componentDidUpdate() {\n        const { setLayerConfig } = this.context;\n        const config = this.updateLayerConfig();\n        setLayerConfig(config, this.id);\n    }\n    render() {\n        return react_1.default.createElement(react_1.default.Fragment, null);\n    }\n}\nLayer.Operators = {\n    compose: muze_1.default.layerFactory.composeLayers,\n};\nLayer.contextType = canvas_context_1.Context;\nexports.default = Layer;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Layer/index.tsx?");

/***/ }),

/***/ "./src/components/Muze/index.tsx":
/*!***************************************!*\
  !*** ./src/components/Muze/index.tsx ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nconst react_1 = __importDefault(__webpack_require__(/*! react */ \"react\"));\nconst muze_1 = __importDefault(__webpack_require__(/*! @chartshq/muze */ \"@chartshq/muze\"));\n__webpack_require__(/*! @chartshq/muze/dist/muze.css */ \"./node_modules/@chartshq/muze/dist/muze.css\");\nconst muze_context_1 = __webpack_require__(/*! ../../utils/context/muze-context */ \"./src/utils/context/muze-context.tsx\");\n__webpack_require__(/*! ./style.scss */ \"./src/components/Muze/style.scss\");\nconst constants_1 = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\nclass Muze extends react_1.default.Component {\n    constructor(props) {\n        super(props);\n        this.componentDidMount = () => __awaiter(this, void 0, void 0, function* () {\n            const { env } = this.state;\n            if (!env) {\n                this.setState({ env: yield muze_1.default() });\n            }\n        });\n        this.addCrossInteraction = (canvas) => {\n            const { interactiveCharts } = this.state;\n            if (!interactiveCharts[canvas.alias()]) {\n                this.setState({\n                    interactiveCharts: Object.assign(Object.assign({}, this.state.interactiveCharts), { [canvas.alias()]: canvas }),\n                });\n            }\n        };\n        this.addChildChart = (canvas) => {\n            const { allCharts } = this.state;\n            if (!allCharts[canvas.alias()]) {\n                this.setState({\n                    allCharts: Object.assign(Object.assign({}, this.state.allCharts), { [canvas.alias()]: canvas }),\n                });\n            }\n        };\n        this.addPropagationBehaviour = (canvas, config) => {\n            const { propagationBehaviour } = this.state;\n            if (!propagationBehaviour[canvas.alias()]) {\n                this.setState({\n                    propagationBehaviour: Object.assign(Object.assign({}, this.state.propagationBehaviour), { [canvas.alias()]: config }),\n                });\n            }\n        };\n        this.state = {\n            env: null,\n            interactiveCharts: {},\n            propagationBehaviour: {},\n            allCharts: {},\n        };\n    }\n    static get sideEffects() {\n        return Muze._sideEffects;\n    }\n    static get behaviours() {\n        return Muze._behaviours;\n    }\n    static get physicalActions() {\n        return Muze._physicalActions;\n    }\n    componentDidUpdate() {\n        const { interactiveCharts, allCharts, propagationBehaviour } = this.state;\n        const { sideEffects, behaviours, crossInteractive } = this.props;\n        const interactiveChartsLen = Object.values(interactiveCharts).length;\n        const canvases = crossInteractive && !interactiveChartsLen\n            ? Object.values(allCharts)\n            : Object.values(interactiveCharts);\n        let sideEffectsMap = {};\n        let physicalBehaviouralMap = {};\n        sideEffectsMap = (sideEffects.on || []).reduce((acc, elem, i) => {\n            acc[elem] = sideEffects.for;\n            return acc;\n        }, {});\n        physicalBehaviouralMap = (behaviours.on || []).reduce((acc, elem, i) => {\n            acc[elem] = {\n                behaviours: behaviours.for,\n            };\n            return acc;\n        }, {});\n        const actionModel = muze_1.default.ActionModel.for(...canvases)\n            .enableCrossInteractivity()\n            .mapSideEffects(sideEffectsMap)\n            .registerPhysicalBehaviouralMap(physicalBehaviouralMap);\n        Object.keys(propagationBehaviour).forEach((key) => {\n            if (allCharts[key]) {\n                actionModel\n                    .for(allCharts[key])\n                    .registerPropagationBehaviourMap(propagationBehaviour[key]);\n            }\n        });\n        Muze.sideEffects.forEach((item) => {\n            actionModel.registerSideEffects(item);\n        });\n        Muze.behaviours.forEach((item) => {\n            actionModel.registerBehaviouralActions(item);\n        });\n        const actions = Muze.physicalActions.entries();\n        [...actions].forEach((action) => {\n            muze_1.default.ActionModel.registerPhysicalActions({\n                [action[0]]: action[1],\n            });\n        });\n        if (sideEffects.dissociateSideEffect) {\n            actionModel.dissociateSideEffect(sideEffects.dissociateSideEffect);\n        }\n        if (behaviours.dissociateBehaviour) {\n            actionModel.dissociateBehaviour(behaviours.dissociateBehaviour);\n        }\n    }\n    render() {\n        const { env } = this.state;\n        const { data, children, xAxis, yAxis, colorLegend, sizeLegend, shapeLegend, scrollBar, colorScheme, crossInteractive, } = this.props;\n        return (env && (react_1.default.createElement(\"div\", { className: \"muze-wrapper\" },\n            react_1.default.createElement(muze_context_1.MuzeProvider, { values: {\n                    env,\n                    data,\n                    xAxis,\n                    yAxis,\n                    colorLegend,\n                    sizeLegend,\n                    shapeLegend,\n                    scrollBar,\n                    colorScheme,\n                    crossInteractive,\n                    addCrossInteraction: this.addCrossInteraction,\n                    addChildChart: this.addChildChart,\n                    addPropagationBehaviour: this.addPropagationBehaviour,\n                } }, children))));\n    }\n}\nexports.default = Muze;\nMuze.defaultProps = {\n    sideEffects: {},\n    behaviours: {},\n};\nMuze.Utils = muze_1.default.utils;\nMuze._sideEffects = new Map();\nMuze._behaviours = new Map();\nMuze._physicalActions = new Map();\nMuze.DataModel = Object.assign(muze_1.default.DataModel, constants_1.DataModelConstants);\nMuze.Operators = {\n    share: muze_1.default.Operators.share,\n    html: muze_1.default.Operators.html,\n    registerSideEffects: (effects) => {\n        effects.forEach((effect) => {\n            Muze._sideEffects.set(effect.formalName(), effect);\n        });\n    },\n    registerBehaviours: (behaviours) => {\n        behaviours.forEach((beh) => {\n            Muze._behaviours.set(beh.formalName(), beh);\n        });\n    },\n    registerPhysicalActions: (action) => {\n        Object.keys(action).forEach((key) => {\n            Muze._physicalActions.set(key, action[key]);\n        });\n    },\n};\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Muze/index.tsx?");

/***/ }),

/***/ "./src/components/Muze/style.scss":
/*!****************************************!*\
  !*** ./src/components/Muze/style.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./src/components/Muze/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/Muze/style.scss?");

/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Layer = exports.Canvas = void 0;\nconst Muze_1 = __importDefault(__webpack_require__(/*! ./Muze */ \"./src/components/Muze/index.tsx\"));\nconst Canvas_1 = __importDefault(__webpack_require__(/*! ./Canvas */ \"./src/components/Canvas/index.tsx\"));\nexports.Canvas = Canvas_1.default;\nconst Layer_1 = __importDefault(__webpack_require__(/*! ./Layer */ \"./src/components/Layer/index.tsx\"));\nexports.Layer = Layer_1.default;\nexports.default = Muze_1.default;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/components/index.ts?");

/***/ }),

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
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TOOLTIP_MODE = exports.TOOLTIP_TYPE = exports.Tooltip = exports.resolveMultiTooltips = void 0;\nconst types_1 = __webpack_require__(/*! ./types */ \"./src/configurations/Tooltip/types.ts\");\nObject.defineProperty(exports, \"TOOLTIP_TYPE\", { enumerable: true, get: function () { return types_1.TooltipType; } });\nObject.defineProperty(exports, \"TOOLTIP_MODE\", { enumerable: true, get: function () { return types_1.TooltipMode; } });\nclass Tooltip {\n    constructor() {\n        this._config = {};\n    }\n    static config() {\n        return new Tooltip();\n    }\n    on(type) {\n        this._config._type = type;\n        return this;\n    }\n    mode(mode) {\n        this._config.mode = mode;\n        return this;\n    }\n    formatter(func) {\n        this._config.formatter = func;\n        return this;\n    }\n    displayFields(fields) {\n        this._config.displayFields = fields;\n        return this;\n    }\n    create(options = {}) {\n        return Object.assign(Object.assign({}, this._config), options);\n    }\n}\nexports.Tooltip = Tooltip;\nfunction resolveMultiTooltips(tooltips) {\n    if (!tooltips) {\n        return null;\n    }\n    let hiSum;\n    let selSum;\n    tooltips.forEach((tooltip) => {\n        switch (tooltip._type) {\n            case types_1.TooltipType.HIGHLIGHT:\n                hiSum = tooltip;\n                delete hiSum._type;\n                break;\n            case types_1.TooltipType.SELECT:\n                selSum = tooltip;\n                delete selSum._type;\n                break;\n            default:\n                break;\n        }\n    });\n    return hiSum && selSum\n        ? {\n            highlightSummary: hiSum,\n            selectionSummary: selSum,\n        }\n        : hiSum\n            ? Object.assign({}, hiSum) : selSum\n            ? {\n                selectionSummary: selSum,\n            }\n            : null;\n}\nexports.resolveMultiTooltips = resolveMultiTooltips;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/configurations/Tooltip/tooltip.ts?");

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

/***/ "./src/constants/datamodel/aggregations.ts":
/*!*************************************************!*\
  !*** ./src/constants/datamodel/aggregations.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AggregationType = void 0;\nvar AggregationType;\n(function (AggregationType) {\n    AggregationType[\"SUM\"] = \"sum\";\n    AggregationType[\"AVG\"] = \"avg\";\n    AggregationType[\"MIN\"] = \"min\";\n    AggregationType[\"MAX\"] = \"max\";\n    AggregationType[\"FIRST\"] = \"first\";\n    AggregationType[\"LAST\"] = \"last\";\n    AggregationType[\"COUNT\"] = \"count\";\n    AggregationType[\"STD\"] = \"std\";\n})(AggregationType = exports.AggregationType || (exports.AggregationType = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/aggregations.ts?");

/***/ }),

/***/ "./src/constants/datamodel/fields.ts":
/*!*******************************************!*\
  !*** ./src/constants/datamodel/fields.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.ROW_ID = exports.FieldSubtype = exports.FieldType = void 0;\nvar FieldType;\n(function (FieldType) {\n    FieldType[\"MEASURE\"] = \"measure\";\n    FieldType[\"DIMENSION\"] = \"dimension\";\n})(FieldType = exports.FieldType || (exports.FieldType = {}));\nvar FieldSubtype;\n(function (FieldSubtype) {\n    FieldSubtype[\"CATEGORICAL\"] = \"categorical\";\n    FieldSubtype[\"TEMPORAL\"] = \"temporal\";\n    FieldSubtype[\"BINNED\"] = \"binned\";\n    FieldSubtype[\"CONTINUOUS\"] = \"continuous\";\n    FieldSubtype[\"ROWID\"] = \"__id\";\n})(FieldSubtype = exports.FieldSubtype || (exports.FieldSubtype = {}));\nexports.ROW_ID = '__id__';\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/fields.ts?");

/***/ }),

/***/ "./src/constants/datamodel/filtering-modes.ts":
/*!****************************************************!*\
  !*** ./src/constants/datamodel/filtering-modes.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.FilteringModesType = void 0;\nvar FilteringModesType;\n(function (FilteringModesType) {\n    FilteringModesType[\"NORMAL\"] = \"normal\";\n    FilteringModesType[\"INVERSE\"] = \"inverse\";\n    FilteringModesType[\"ALL\"] = \"all\";\n})(FilteringModesType = exports.FilteringModesType || (exports.FilteringModesType = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/filtering-modes.ts?");

/***/ }),

/***/ "./src/constants/datamodel/index.ts":
/*!******************************************!*\
  !*** ./src/constants/datamodel/index.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortOrder = exports.LogicalOperators = exports.ComparisonOperators = exports.Operations = exports.InvalidType = exports.FilteringModesType = exports.FieldSubtype = exports.FieldType = exports.AggregationType = void 0;\nconst aggregations_1 = __webpack_require__(/*! ./aggregations */ \"./src/constants/datamodel/aggregations.ts\");\nObject.defineProperty(exports, \"AggregationType\", { enumerable: true, get: function () { return aggregations_1.AggregationType; } });\nconst fields_1 = __webpack_require__(/*! ./fields */ \"./src/constants/datamodel/fields.ts\");\nObject.defineProperty(exports, \"FieldType\", { enumerable: true, get: function () { return fields_1.FieldType; } });\nObject.defineProperty(exports, \"FieldSubtype\", { enumerable: true, get: function () { return fields_1.FieldSubtype; } });\nconst filtering_modes_1 = __webpack_require__(/*! ./filtering-modes */ \"./src/constants/datamodel/filtering-modes.ts\");\nObject.defineProperty(exports, \"FilteringModesType\", { enumerable: true, get: function () { return filtering_modes_1.FilteringModesType; } });\nconst invalid_data_1 = __webpack_require__(/*! ./invalid-data */ \"./src/constants/datamodel/invalid-data.ts\");\nObject.defineProperty(exports, \"InvalidType\", { enumerable: true, get: function () { return invalid_data_1.InvalidType; } });\nconst miscellaneous_1 = __webpack_require__(/*! ./miscellaneous */ \"./src/constants/datamodel/miscellaneous.ts\");\nObject.defineProperty(exports, \"Operations\", { enumerable: true, get: function () { return miscellaneous_1.Operations; } });\nconst selections_1 = __webpack_require__(/*! ./selections */ \"./src/constants/datamodel/selections.ts\");\nObject.defineProperty(exports, \"ComparisonOperators\", { enumerable: true, get: function () { return selections_1.ComparisonOperators; } });\nObject.defineProperty(exports, \"LogicalOperators\", { enumerable: true, get: function () { return selections_1.LogicalOperators; } });\nconst sort_1 = __webpack_require__(/*! ./sort */ \"./src/constants/datamodel/sort.ts\");\nObject.defineProperty(exports, \"SortOrder\", { enumerable: true, get: function () { return sort_1.SortOrder; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/index.ts?");

/***/ }),

/***/ "./src/constants/datamodel/invalid-data.ts":
/*!*************************************************!*\
  !*** ./src/constants/datamodel/invalid-data.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.InvalidType = exports.InvalidData = void 0;\nvar InvalidData;\n(function (InvalidData) {\n    InvalidData[\"UNDEFINED\"] = \"\";\n})(InvalidData = exports.InvalidData || (exports.InvalidData = {}));\nvar InvalidType;\n(function (InvalidType) {\n    InvalidType[\"NULL\"] = \"null\";\n    InvalidType[\"UNDEFINED\"] = \"undefined\";\n    InvalidType[\"NAN\"] = \"NaN\";\n    InvalidType[\"NIL\"] = \"nil\";\n    InvalidType[\"NA\"] = \"na\";\n    InvalidType[\"EMPTY_STRING\"] = \"\";\n})(InvalidType = exports.InvalidType || (exports.InvalidType = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/invalid-data.ts?");

/***/ }),

/***/ "./src/constants/datamodel/miscellaneous.ts":
/*!**************************************************!*\
  !*** ./src/constants/datamodel/miscellaneous.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.Operations = void 0;\nvar Operations;\n(function (Operations) {\n    Operations[\"SELECT\"] = \"select\";\n    Operations[\"GROUPBY\"] = \"groupBy\";\n    Operations[\"PROJECT\"] = \"project\";\n    Operations[\"SPLIT\"] = \"split\";\n    Operations[\"SORT\"] = \"sort\";\n    Operations[\"CALCULATE\"] = \"calculate_variable\";\n})(Operations = exports.Operations || (exports.Operations = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/miscellaneous.ts?");

/***/ }),

/***/ "./src/constants/datamodel/selections.ts":
/*!***********************************************!*\
  !*** ./src/constants/datamodel/selections.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.LogicalOperators = exports.ComparisonOperators = void 0;\nvar ComparisonOperators;\n(function (ComparisonOperators) {\n    ComparisonOperators[\"EQUAL\"] = \"eq\";\n    ComparisonOperators[\"NOT_EQUAL\"] = \"neq\";\n    ComparisonOperators[\"GREATER_THAN\"] = \"gt\";\n    ComparisonOperators[\"LESS_THAN\"] = \"lt\";\n    ComparisonOperators[\"GREATER_THAN_EQUAL\"] = \"gte\";\n    ComparisonOperators[\"LESS_THAN_EQUAL\"] = \"lte\";\n    ComparisonOperators[\"IN\"] = \"in\";\n    ComparisonOperators[\"NIN\"] = \"nin\";\n    ComparisonOperators[\"EQUAL_TO\"] = \"eq\";\n    ComparisonOperators[\"NOT_EQUAL_TO\"] = \"neq\";\n})(ComparisonOperators = exports.ComparisonOperators || (exports.ComparisonOperators = {}));\nvar LogicalOperators;\n(function (LogicalOperators) {\n    LogicalOperators[\"AND\"] = \"and\";\n    LogicalOperators[\"OR\"] = \"or\";\n})(LogicalOperators = exports.LogicalOperators || (exports.LogicalOperators = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/selections.ts?");

/***/ }),

/***/ "./src/constants/datamodel/sort.ts":
/*!*****************************************!*\
  !*** ./src/constants/datamodel/sort.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SortOrder = void 0;\nvar SortOrder;\n(function (SortOrder) {\n    SortOrder[\"ASC\"] = \"asc\";\n    SortOrder[\"DESC\"] = \"desc\";\n    SortOrder[\"NO_ORDER\"] = \"\";\n})(SortOrder = exports.SortOrder || (exports.SortOrder = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/datamodel/sort.ts?");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.TOOLTIP_TYPE = exports.SCROLL_HORIZONTAL = exports.SCROLL_VERTICAL = exports.ALIGNMENT = exports.POSITION = exports.LEGEND_POSITION = exports.MuzeConstants = exports.DataModelConstants = void 0;\nconst DataModelConstants = __importStar(__webpack_require__(/*! ./datamodel */ \"./src/constants/datamodel/index.ts\"));\nexports.DataModelConstants = DataModelConstants;\nconst MuzeConstants = __importStar(__webpack_require__(/*! ./muze */ \"./src/constants/muze/index.ts\"));\nexports.MuzeConstants = MuzeConstants;\nconst configurations_1 = __webpack_require__(/*! ../configurations */ \"./src/configurations/index.ts\");\nObject.defineProperty(exports, \"LEGEND_POSITION\", { enumerable: true, get: function () { return configurations_1.LEGEND_POSITION; } });\nObject.defineProperty(exports, \"POSITION\", { enumerable: true, get: function () { return configurations_1.POSITION; } });\nObject.defineProperty(exports, \"ALIGNMENT\", { enumerable: true, get: function () { return configurations_1.ALIGNMENT; } });\nObject.defineProperty(exports, \"SCROLL_VERTICAL\", { enumerable: true, get: function () { return configurations_1.SCROLL_VERTICAL; } });\nObject.defineProperty(exports, \"SCROLL_HORIZONTAL\", { enumerable: true, get: function () { return configurations_1.SCROLL_HORIZONTAL; } });\nObject.defineProperty(exports, \"TOOLTIP_TYPE\", { enumerable: true, get: function () { return configurations_1.TOOLTIP_TYPE; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/index.ts?");

/***/ }),

/***/ "./src/constants/muze/border.ts":
/*!**************************************!*\
  !*** ./src/constants/muze/border.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BORDER_POSITION = exports.BORDER_STYLE = void 0;\nvar BORDER_STYLE;\n(function (BORDER_STYLE) {\n    BORDER_STYLE[\"DASHED\"] = \"dashed\";\n    BORDER_STYLE[\"SOLID\"] = \"solid\";\n})(BORDER_STYLE = exports.BORDER_STYLE || (exports.BORDER_STYLE = {}));\nvar BORDER_POSITION;\n(function (BORDER_POSITION) {\n    BORDER_POSITION[\"TOP\"] = \"top\";\n    BORDER_POSITION[\"BOTTOM\"] = \"bottom\";\n    BORDER_POSITION[\"RIGHT\"] = \"right\";\n    BORDER_POSITION[\"LEFT\"] = \"left\";\n})(BORDER_POSITION = exports.BORDER_POSITION || (exports.BORDER_POSITION = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/muze/border.ts?");

/***/ }),

/***/ "./src/constants/muze/index.ts":
/*!*************************************!*\
  !*** ./src/constants/muze/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.BORDER_STYLE = exports.BORDER_POSITION = exports.SORT_ORDER = void 0;\nconst sort_order_1 = __webpack_require__(/*! ./sort-order */ \"./src/constants/muze/sort-order.ts\");\nObject.defineProperty(exports, \"SORT_ORDER\", { enumerable: true, get: function () { return sort_order_1.SORT_ORDER; } });\nconst border_1 = __webpack_require__(/*! ./border */ \"./src/constants/muze/border.ts\");\nObject.defineProperty(exports, \"BORDER_POSITION\", { enumerable: true, get: function () { return border_1.BORDER_POSITION; } });\nObject.defineProperty(exports, \"BORDER_STYLE\", { enumerable: true, get: function () { return border_1.BORDER_STYLE; } });\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/muze/index.ts?");

/***/ }),

/***/ "./src/constants/muze/sort-order.ts":
/*!******************************************!*\
  !*** ./src/constants/muze/sort-order.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.SORT_ORDER = void 0;\nvar SORT_ORDER;\n(function (SORT_ORDER) {\n    SORT_ORDER[\"ASC\"] = \"asc\";\n    SORT_ORDER[\"DESC\"] = \"desc\";\n})(SORT_ORDER = exports.SORT_ORDER || (exports.SORT_ORDER = {}));\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/constants/muze/sort-order.ts?");

/***/ }),

/***/ "./src/utils/context/canvas-context.tsx":
/*!**********************************************!*\
  !*** ./src/utils/context/canvas-context.tsx ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.CanvasProvider = exports.Context = void 0;\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst Context = React.createContext(null);\nexports.Context = Context;\nconst CanvasProvider = ({ values, children }) => {\n    return React.createElement(Context.Provider, { value: values }, children);\n};\nexports.CanvasProvider = CanvasProvider;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/utils/context/canvas-context.tsx?");

/***/ }),

/***/ "./src/utils/context/muze-context.tsx":
/*!********************************************!*\
  !*** ./src/utils/context/muze-context.tsx ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\n}) : (function(o, m, k, k2) {\n    if (k2 === undefined) k2 = k;\n    o[k2] = m[k];\n}));\nvar __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {\n    Object.defineProperty(o, \"default\", { enumerable: true, value: v });\n}) : function(o, v) {\n    o[\"default\"] = v;\n});\nvar __importStar = (this && this.__importStar) || function (mod) {\n    if (mod && mod.__esModule) return mod;\n    var result = {};\n    if (mod != null) for (var k in mod) if (k !== \"default\" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);\n    __setModuleDefault(result, mod);\n    return result;\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MuzeProvider = exports.Context = void 0;\nconst React = __importStar(__webpack_require__(/*! react */ \"react\"));\nconst Context = React.createContext(null);\nexports.Context = Context;\nconst MuzeProvider = ({ values, children, }) => {\n    return React.createElement(Context.Provider, { value: values }, children);\n};\nexports.MuzeProvider = MuzeProvider;\n\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/./src/utils/context/muze-context.tsx?");

/***/ }),

/***/ "@chartshq/muze":
/*!****************************************************************************************************************!*\
  !*** external {"root":"muze","amd":"@chartshq/muze","commonjs2":"@chartshq/muze","commonjs":"@chartshq/muze"} ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE__chartshq_muze__;\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/external_%7B%22root%22:%22muze%22,%22amd%22:%22@chartshq/muze%22,%22commonjs2%22:%22@chartshq/muze%22,%22commonjs%22:%22@chartshq/muze%22%7D?");

/***/ }),

/***/ "react":
/*!**************************************************************************************!*\
  !*** external {"root":"React","amd":"react","commonjs2":"react","commonjs":"react"} ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://@chartshq/react-muze/%5Bname%5D/external_%7B%22root%22:%22React%22,%22amd%22:%22react%22,%22commonjs2%22:%22react%22,%22commonjs%22:%22react%22%7D?");

/***/ })

/******/ });
});