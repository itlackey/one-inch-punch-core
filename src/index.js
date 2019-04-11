import ComponentConfiguration from "./infrastructure/ComponentConfiguration.js";
// import {ComponentManager, ComponentManagerInstance } from "./infrastructure/ComponentManager.js";
// import {TemplateFromUrlComponentLoader} from "./infrastructure/TemplateFromUrlComponentLoader.js";

// module.exports.ComponentConfiguration = ComponentConfiguration;
// module.exports.ComponentManager = ComponentManagerInstance;
// module.exports.TemplateFromUrlComponentLoader = TemplateFromUrlComponentLoader;

export { default as ComponentConfiguration } from './infrastructure/ComponentConfiguration.js';
export { default as ComponentManager } from './infrastructure/ComponentManager.js';
export { default as TemplateFromUrlComponentLoader } from './infrastructure/TemplateFromUrlComponentLoader.js';
export { default as CommonComponents }  from './infrastructure/CommonComponents.js';


// export default function () {
//     console.log('oip');
// }