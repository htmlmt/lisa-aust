import { fetchRecords } from '@/api';

import store from '../index.js';

const defaultState = {
	photos: [],
}

let photosToSave = [];
let offset = '';

const actions = {
	getPhotos: ({ commit }, data) => {
		fetchPhotosFunction(offset);
	}
}

function fetchPhotosFunction(offset) {
	fetchRecords(offset, 'Photos', '?view=All')
	.then((response) => {
		photosToSave = photosToSave.concat(response.records);

		if (response.offset) {
			fetchPhotosFunction(response.offset);
		} else {
			store.commit('savePhotos', photosToSave);
		}
	})
	.catch((error) => {
		// eslint-disable-next-line
		console.error(error);
	});
}

const mutations = {
	savePhotos(state, photos) {
		state.photos = photos;
	}
}

const getters = {
	photos: state => state.photos,
};

export default {
	state: defaultState,
	actions,
	mutations,
	getters,
};
