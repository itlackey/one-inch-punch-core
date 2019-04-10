export default class ComponentConfiguration {
	constructor(name, viewModelInstance, viewUrl = null, preProcessor = null, postProcessor = null) {
		this.name = name;
		this.viewModelInstance = viewModelInstance;
		this.viewUrl = viewUrl;
		this.preProcessor = preProcessor;
		this.postProcessor = postProcessor;
	}
}
