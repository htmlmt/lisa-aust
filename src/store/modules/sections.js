import { fetchRecords } from '@/api';

import store from '../index.js';

const defaultState = {
	sections: [],
}

let sectionsToSave = [];
let offset = '';

const actions = {
	getSections: () => {
		fetchSectionsFunction(offset);
	}
}

function fetchSectionsFunction(offset) {
	fetchRecords(offset, 'Sections', '?view=All')
	.then((response) => {
		sectionsToSave = sectionsToSave.concat(response.records);

		if (response.offset) {
			fetchSectionsFunction(response.offset);
		} else {
			store.commit('saveSections', sectionsToSave);
		}
	})
	.catch((error) => {
		// eslint-disable-next-line
		console.error(error);
	});
}

const mutations = {
	saveSections(state, sections) {
		state.sections = sections;
	}
}

const getters = {
	sections: state => state.sections,
}

export default {
	state: defaultState,
	getters,
	actions,
	mutations,
};
