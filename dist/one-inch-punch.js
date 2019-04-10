"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ComponentConfiguration = _interopRequireDefault(require("./ComponentConfiguration.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

/* eslint-disable no-param-reassign */
function setupSimpleViewModel(viewModel, value) {
  var id = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var prefix = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 'component-';
  if (ko.isObservable(value)) viewModel.value = value;else viewModel.value = ko.observable(value || false); // ToDo: Fix the auto-id bug

  viewModel.id = "".concat(prefix).concat(id && ko.unwrap(id) || new Date().getTime());
}

var ToggleSwitch = new _ComponentConfiguration["default"]('toggle', function viewModel(params) {
  setupSimpleViewModel(this, params.value, params.id, 'toggle-switch-');
}, '/app/components/toggleswitch.html');
var Slider = new _ComponentConfiguration["default"]('slider', function viewModel(params) {
  setupSimpleViewModel(this, params.value, params.id, 'slider-');
}, '/app/components/slider.html');
var _default = [ToggleSwitch, Slider];
exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ComponentConfiguration = function ComponentConfiguration(name, viewModelInstance) {
  var viewUrl = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  var preProcessor = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
  var postProcessor = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

  _classCallCheck(this, ComponentConfiguration);

  this.name = name;
  this.viewModelInstance = viewModelInstance;
  this.viewUrl = viewUrl;
  this.preProcessor = preProcessor;
  this.postProcessor = postProcessor;
};

exports["default"] = ComponentConfiguration;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable class-methods-use-this */
var ComponentManager =
/*#__PURE__*/
function () {
  function ComponentManager() {
    _classCallCheck(this, ComponentManager);
  }

  _createClass(ComponentManager, [{
    key: "init",
    value: function init(componentLoader) {
      ko.components.loaders.unshift(componentLoader);
    }
  }, {
    key: "register",
    value: function register(components) {
      components.forEach(function (component) {
        console.log('processing component', component);
        var registration = {
          viewModel: {
            instance: component.viewModelInstance
          },
          template: {
            fromUrl: component.viewUrl || "/app/views/".concat(component.viewModelInstance.constructor.name.replace('ViewModel', 'View'), ".html"),
            processors: {
              pre: component.preProcessor,
              post: component.postProcessor
            }
          }
        };

        if (typeof component.viewModelInstance === 'function') {
          registration.viewModel = component.viewModelInstance;
        } else {
          registration.viewModel = {
            instance: component.viewModelInstance
          };
        }

        ko.components.register(component.name, registration);
      });
    }
  }]);

  return ComponentManager;
}();

var _default = new ComponentManager();

exports["default"] = _default;
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var TemplateFromUrlComponentLoader =
/*#__PURE__*/
function () {
  function TemplateFromUrlComponentLoader() {
    var viewPath = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

    _classCallCheck(this, TemplateFromUrlComponentLoader);

    this.viewPath = viewPath;
    if (this.viewPath && !this.viewPath.endsWith('/')) this.viewPath += '/';
  }

  _createClass(TemplateFromUrlComponentLoader, [{
    key: "loadTemplate",
    value: function loadTemplate(name, templateConfig, callback) {
      if (templateConfig.fromUrl) {
        // Uses jQuery's ajax facility to load the markup from a file
        var fullUrl = "".concat(this.viewPath).concat(templateConfig.fromUrl, "?cacheAge=").concat(templateConfig.maxCacheAge);
        $.get(fullUrl, function (markupString) {
          if (templateConfig.processors && templateConfig.processors.pre) templateConfig.processors.pre(); // We need an array of DOM nodes, not a string.
          // We can use the default loader to convert to the
          // required format.

          ko.components.defaultLoader.loadTemplate(name, markupString, callback);
          if (templateConfig.processors && templateConfig.processors.post) templateConfig.processors.post();
        });
      } else {
        // Unrecognized config format. Let another loader handle it.
        callback(null);
      }
    }
  }]);

  return TemplateFromUrlComponentLoader;
}();

exports["default"] = TemplateFromUrlComponentLoader;
//# sourceMappingURL=one-inch-punch.js.map
