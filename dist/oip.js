(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["oip"] = factory();
	else
		root["oip"] = factory();
})(window, function() {
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: ComponentConfiguration, ComponentManager, TemplateFromUrlComponentLoader, CommonComponents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _infrastructure_ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infrastructure/ComponentConfiguration.js */ \"./src/infrastructure/ComponentConfiguration.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentConfiguration\", function() { return _infrastructure_ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _infrastructure_ComponentManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infrastructure/ComponentManager.js */ \"./src/infrastructure/ComponentManager.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"ComponentManager\", function() { return _infrastructure_ComponentManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _infrastructure_TemplateFromUrlComponentLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infrastructure/TemplateFromUrlComponentLoader.js */ \"./src/infrastructure/TemplateFromUrlComponentLoader.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"TemplateFromUrlComponentLoader\", function() { return _infrastructure_TemplateFromUrlComponentLoader_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _infrastructure_CommonComponents_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./infrastructure/CommonComponents.js */ \"./src/infrastructure/CommonComponents.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"CommonComponents\", function() { return _infrastructure_CommonComponents_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n\n// import {ComponentManager, ComponentManagerInstance } from \"./infrastructure/ComponentManager.js\";\n// import {TemplateFromUrlComponentLoader} from \"./infrastructure/TemplateFromUrlComponentLoader.js\";\n\n// module.exports.ComponentConfiguration = ComponentConfiguration;\n// module.exports.ComponentManager = ComponentManagerInstance;\n// module.exports.TemplateFromUrlComponentLoader = TemplateFromUrlComponentLoader;\n\n\n\n\n\n\n\n// export default function () {\n//     console.log('oip');\n// }\n\n//# sourceURL=webpack://oip/./src/index.js?");

/***/ }),

/***/ "./src/infrastructure/CommonComponents.js":
/*!************************************************!*\
  !*** ./src/infrastructure/CommonComponents.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComponentConfiguration.js */ \"./src/infrastructure/ComponentConfiguration.js\");\n/* eslint-disable no-param-reassign */\n\n\nfunction setupSimpleViewModel(viewModel, value, id = null, prefix = 'component-') {\n\tif (ko.isObservable(value))\n\t\tviewModel.value = value;\n\telse\n\t\tviewModel.value = ko.observable(value || false);\n\n\t// ToDo: Fix the auto-id bug\n\tviewModel.id = `${prefix}${(id && ko.unwrap(id)) || new Date().getTime()}`;\n}\n\nconst ToggleSwitch = new _ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n\t'toggle',\n\tfunction viewModel(params) {\n\t\tsetupSimpleViewModel(this, params.value, params.id, 'toggle-switch-');\n\t},\n\t'/app/components/toggleswitch.html'\n);\n\nconst Slider = new _ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\n\t'slider',\n\tfunction viewModel(params) {\n\t\tsetupSimpleViewModel(this, params.value, params.id, 'slider-');\n\t},\n\t'/app/components/slider.html'\n);\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([\n\tToggleSwitch, Slider\n]);\n\n\n//# sourceURL=webpack://oip/./src/infrastructure/CommonComponents.js?");

/***/ }),

/***/ "./src/infrastructure/ComponentConfiguration.js":
/*!******************************************************!*\
  !*** ./src/infrastructure/ComponentConfiguration.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentConfiguration; });\nclass ComponentConfiguration {\n\tconstructor(name, viewModelInstance, viewUrl = null, preProcessor = null, postProcessor = null) {\n\t\tthis.name = name;\n\t\tthis.viewModelInstance = viewModelInstance;\n\t\tthis.viewUrl = viewUrl;\n\t\tthis.preProcessor = preProcessor;\n\t\tthis.postProcessor = postProcessor;\n\t}\n}\n\n\n//# sourceURL=webpack://oip/./src/infrastructure/ComponentConfiguration.js?");

/***/ }),

/***/ "./src/infrastructure/ComponentManager.js":
/*!************************************************!*\
  !*** ./src/infrastructure/ComponentManager.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable class-methods-use-this */\nclass ComponentManager {\n\tinit(componentLoader) {\n\t\tko.components.loaders.unshift(componentLoader);\n\t}\n\n\tregister(components) {\n\t\tcomponents.forEach((component) => {\n\t\t\tconsole.log('processing component', component);\n\t\t\tconst registration = {\n\t\t\t\tviewModel: {\n\t\t\t\t\tinstance: component.viewModelInstance\n\t\t\t\t},\n\t\t\t\ttemplate: {\n\t\t\t\t\tfromUrl: component.viewUrl || `/app/views/${component.viewModelInstance.constructor.name.replace('ViewModel', 'View')}.html`,\n\t\t\t\t\tprocessors: {\n\t\t\t\t\t\tpre: component.preProcessor,\n\t\t\t\t\t\tpost: component.postProcessor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tif (typeof (component.viewModelInstance) === 'function') {\n\t\t\t\tregistration.viewModel = component.viewModelInstance;\n\t\t\t} else {\n\t\t\t\tregistration.viewModel = {\n\t\t\t\t\tinstance: component.viewModelInstance\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tko.components.register(component.name, registration);\n\t\t});\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ComponentManager());\n\n\n//# sourceURL=webpack://oip/./src/infrastructure/ComponentManager.js?");

/***/ }),

/***/ "./src/infrastructure/TemplateFromUrlComponentLoader.js":
/*!**************************************************************!*\
  !*** ./src/infrastructure/TemplateFromUrlComponentLoader.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TemplateFromUrlComponentLoader; });\nclass TemplateFromUrlComponentLoader {\n\tconstructor(viewPath = '') {\n\t\tthis.viewPath = viewPath;\n\t\tif (this.viewPath && !this.viewPath.endsWith('/'))\n\t\t\tthis.viewPath += '/';\n\t}\n\n\tloadTemplate(name, templateConfig, callback) {\t\t\n\t\tif (templateConfig.fromUrl) {\n\t\t\t// Uses jQuery's ajax facility to load the markup from a file\n\t\t\tconst fullUrl = `${this.viewPath}${templateConfig.fromUrl}?cacheAge=${templateConfig.maxCacheAge}`;\n\n\t\t\t$.get(fullUrl, (markupString) => {\n\t\t\t\tif (templateConfig.processors && templateConfig.processors.pre)\n\t\t\t\t\ttemplateConfig.processors.pre();\n\n\t\t\t\t// We need an array of DOM nodes, not a string.\n\t\t\t\t// We can use the default loader to convert to the\n\t\t\t\t// required format.\n\t\t\t\tko.components.defaultLoader.loadTemplate(name, markupString, callback);\n\t\t\t\tif (templateConfig.processors && templateConfig.processors.post)\n\t\t\t\t\ttemplateConfig.processors.post();\n\t\t\t});\n\t\t} else {\n\t\t\t// Unrecognized config format. Let another loader handle it.\n\t\t\tcallback(null);\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack://oip/./src/infrastructure/TemplateFromUrlComponentLoader.js?");

/***/ })

/******/ });
});