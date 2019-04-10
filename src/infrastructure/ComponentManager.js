/* eslint-disable class-methods-use-this */
class ComponentManager {
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

export default new ComponentManager();
