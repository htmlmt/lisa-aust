import { fetchRecords } from '@/api';

import store from '../index.js';

const defaultState = {
	quotes: [],
}

let quotesToSave = [];
let offset = '';

const actions = {
	getQuotes: () => {
		fetchQuotesFunction(offset);
	}
}

function fetchQuotesFunction(offset) {
	fetchRecords(offset, 'Quotes', '?view=All')
	.then((response) => {
		quotesToSave = quotesToSave.concat(response.records);

		if (response.offset) {
			fetchQuotesFunction(response.offset);
		} else {
			store.commit('saveQuotes', quotesToSave);
		}
	})
	.catch((error) => {
		// eslint-disable-next-line
		console.error(error);
	});
}

const mutations = {
	saveQuotes(state, quotes) {
		state.quotes = quotes;
	}
}

const getters = {
	quotes: state => state.quotes,
}

export default {
	state: defaultState,
	getters,
	actions,
	mutations,
};
