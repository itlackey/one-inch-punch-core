(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
	typeof define === 'function' && define.amd ? define(['exports'], factory) :
	(global = global || self, factory(global.oip = {}));
}(this, function (exports) { 'use strict';

	/* eslint-disable class-methods-use-this */
	class ComponentManager {
		static instance() {
			
		}
		init(componentLoader) {
			ko.components.loaders.unshift(componentLoader);
		}

		register(components) {
			components.forEach((component) => {
				console.log('processing component', component);
				const registration = {
					viewModel: {
						instance: component.viewModelInstance
					},
					template: {
						fromUrl: component.viewUrl || `/app/views/${component.viewModelInstance.constructor.name.replace('ViewModel', 'View')}.html`,
						processors: {
							pre: component.preProcessor,
							post: component.postProcessor
						}
					}
				};

				if (typeof (component.viewModelInstance) === 'function') {
					registration.viewModel = component.viewModelInstance;
				} else {
					registration.viewModel = {
						instance: component.viewModelInstance
					};
				}

				ko.components.register(component.name, registration);
			});
		}
	}

	function ComponentManagerFactory() {
		return new ComponentManager();
	}

	class ComponentConfiguration {
		constructor(name, viewModelInstance, viewUrl = null, preProcessor = null, postProcessor = null) {
			this.name = name;
			this.viewModelInstance = viewModelInstance;
			this.viewUrl = viewUrl;
			this.preProcessor = preProcessor;
			this.postProcessor = postProcessor;
		}
	}

	class TemplateFromUrlComponentLoader {
		constructor(viewPath = '') {
			this.viewPath = viewPath;
			if (this.viewPath && !this.viewPath.endsWith('/'))
				this.viewPath += '/';
		}

		loadTemplate(name, templateConfig, callback) {		
			if (templateConfig.fromUrl) {
				// Uses jQuery's ajax facility to load the markup from a file
				const fullUrl = `${this.viewPath}${templateConfig.fromUrl}?cacheAge=${templateConfig.maxCacheAge}`;

				$.get(fullUrl, (markupString) => {
					if (templateConfig.processors && templateConfig.processors.pre)
						templateConfig.processors.pre();

					// We need an array of DOM nodes, not a string.
					// We can use the default loader to convert to the
					// required format.
					ko.components.defaultLoader.loadTemplate(name, markupString, callback);
					if (templateConfig.processors && templateConfig.processors.post)
						templateConfig.processors.post();
				});
			} else {
				// Unrecognized config format. Let another loader handle it.
				callback(null);
			}
		}
	}

	const ComponentManager$1 = ComponentManagerFactory();

	exports.ComponentConfiguration = ComponentConfiguration;
	exports.ComponentManager = ComponentManager$1;
	exports.TemplateFromUrlComponentLoader = TemplateFromUrlComponentLoader;

}));
