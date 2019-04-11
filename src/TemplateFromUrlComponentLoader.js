export default class TemplateFromUrlComponentLoader {
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
