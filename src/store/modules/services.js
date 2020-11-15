import { fetchRecords } from '@/api';

import store from '../index.js';

const defaultState = {
	services: [],
}

let servicesToSave = [];
let offset = '';

const actions = {
	getServices: () => {
		fetchServicesFunction(offset);
	}
}

function fetchServicesFunction(offset) {
	fetchRecords(offset, 'Services', '?view=All')
	.then((response) => {
		servicesToSave = servicesToSave.concat(response.records);

		if (response.offset) {
			fetchServicesFunction(response.offset);
		} else {
			store.commit('saveServices', servicesToSave);
		}
	})
	.catch((error) => {
		// eslint-disable-next-line
		console.error(error);
	});
}

const mutations = {
	saveServices(state, services) {
		state.services = services;
	}
}

const getters = {
	services: state => state.services,
}

export default {
	state: defaultState,
	getters,
	actions,
	mutations,
};
