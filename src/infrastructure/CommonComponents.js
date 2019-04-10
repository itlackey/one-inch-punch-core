/* eslint-disable no-param-reassign */
import ComponentConfiguration from './ComponentConfiguration.js';

function setupSimpleViewModel(viewModel, value, id = null, prefix = 'component-') {
	if (ko.isObservable(value))
		viewModel.value = value;
	else
		viewModel.value = ko.observable(value || false);

	// ToDo: Fix the auto-id bug
	viewModel.id = `${prefix}${(id && ko.unwrap(id)) || new Date().getTime()}`;
}

const ToggleSwitch = new ComponentConfiguration(
	'toggle',
	function viewModel(params) {
		setupSimpleViewModel(this, params.value, params.id, 'toggle-switch-');
	},
	'/app/components/toggleswitch.html'
);

const Slider = new ComponentConfiguration(
	'slider',
	function viewModel(params) {
		setupSimpleViewModel(this, params.value, params.id, 'slider-');
	},
	'/app/components/slider.html'
);


export default [
	ToggleSwitch, Slider
];
