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

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _infrastructure_ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./infrastructure/ComponentConfiguration.js */ \"./src/infrastructure/ComponentConfiguration.js\");\n/* harmony import */ var _infrastructure_ComponentManager_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./infrastructure/ComponentManager.js */ \"./src/infrastructure/ComponentManager.js\");\n/* harmony import */ var _infrastructure_TemplateFromUrlComponentLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./infrastructure/TemplateFromUrlComponentLoader.js */ \"./src/infrastructure/TemplateFromUrlComponentLoader.js\");\n\n\n\n\nmodule.exports.ComponentConfiguration = _infrastructure_ComponentConfiguration_js__WEBPACK_IMPORTED_MODULE_0__;\nmodule.exports.ComponentManager = _infrastructure_ComponentManager_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nmodule.exports.TemplateFromUrlComponentLoader = _infrastructure_TemplateFromUrlComponentLoader_js__WEBPACK_IMPORTED_MODULE_2__;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/infrastructure/ComponentConfiguration.js":
/*!******************************************************!*\
  !*** ./src/infrastructure/ComponentConfiguration.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return ComponentConfiguration; });\nclass ComponentConfiguration {\n\tconstructor(name, viewModelInstance, viewUrl = null, preProcessor = null, postProcessor = null) {\n\t\tthis.name = name;\n\t\tthis.viewModelInstance = viewModelInstance;\n\t\tthis.viewUrl = viewUrl;\n\t\tthis.preProcessor = preProcessor;\n\t\tthis.postProcessor = postProcessor;\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/infrastructure/ComponentConfiguration.js?");

/***/ }),

/***/ "./src/infrastructure/ComponentManager.js":
/*!************************************************!*\
  !*** ./src/infrastructure/ComponentManager.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* eslint-disable class-methods-use-this */\nclass ComponentManager {\n\tinit(componentLoader) {\n\t\tko.components.loaders.unshift(componentLoader);\n\t}\n\n\tregister(components) {\n\t\tcomponents.forEach((component) => {\n\t\t\tconsole.log('processing component', component);\n\t\t\tconst registration = {\n\t\t\t\tviewModel: {\n\t\t\t\t\tinstance: component.viewModelInstance\n\t\t\t\t},\n\t\t\t\ttemplate: {\n\t\t\t\t\tfromUrl: component.viewUrl || `/app/views/${component.viewModelInstance.constructor.name.replace('ViewModel', 'View')}.html`,\n\t\t\t\t\tprocessors: {\n\t\t\t\t\t\tpre: component.preProcessor,\n\t\t\t\t\t\tpost: component.postProcessor\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t};\n\n\t\t\tif (typeof (component.viewModelInstance) === 'function') {\n\t\t\t\tregistration.viewModel = component.viewModelInstance;\n\t\t\t} else {\n\t\t\t\tregistration.viewModel = {\n\t\t\t\t\tinstance: component.viewModelInstance\n\t\t\t\t};\n\t\t\t}\n\n\t\t\tko.components.register(component.name, registration);\n\t\t});\n\t}\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new ComponentManager());\n\n\n//# sourceURL=webpack:///./src/infrastructure/ComponentManager.js?");

/***/ }),

/***/ "./src/infrastructure/TemplateFromUrlComponentLoader.js":
/*!**************************************************************!*\
  !*** ./src/infrastructure/TemplateFromUrlComponentLoader.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return TemplateFromUrlComponentLoader; });\nclass TemplateFromUrlComponentLoader {\n\tconstructor(viewPath = '') {\n\t\tthis.viewPath = viewPath;\n\t\tif (this.viewPath && !this.viewPath.endsWith('/'))\n\t\t\tthis.viewPath += '/';\n\t}\n\n\tloadTemplate(name, templateConfig, callback) {\t\t\n\t\tif (templateConfig.fromUrl) {\n\t\t\t// Uses jQuery's ajax facility to load the markup from a file\n\t\t\tconst fullUrl = `${this.viewPath}${templateConfig.fromUrl}?cacheAge=${templateConfig.maxCacheAge}`;\n\n\t\t\t$.get(fullUrl, (markupString) => {\n\t\t\t\tif (templateConfig.processors && templateConfig.processors.pre)\n\t\t\t\t\ttemplateConfig.processors.pre();\n\n\t\t\t\t// We need an array of DOM nodes, not a string.\n\t\t\t\t// We can use the default loader to convert to the\n\t\t\t\t// required format.\n\t\t\t\tko.components.defaultLoader.loadTemplate(name, markupString, callback);\n\t\t\t\tif (templateConfig.processors && templateConfig.processors.post)\n\t\t\t\t\ttemplateConfig.processors.post();\n\t\t\t});\n\t\t} else {\n\t\t\t// Unrecognized config format. Let another loader handle it.\n\t\t\tcallback(null);\n\t\t}\n\t}\n}\n\n\n//# sourceURL=webpack:///./src/infrastructure/TemplateFromUrlComponentLoader.js?");

/***/ })

/******/ });