import Vue from 'vue';
import Vuex from 'vuex';

import photosModule from './modules/photos';
import quotesModule from './modules/quotes';
import sectionsModule from './modules/sections';
import servicesModule from './modules/services';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {},
    mutations: {},
    getters: {},
    modules: {
		photos: photosModule,
		quotes: quotesModule,
		sections: sectionsModule,
		services: servicesModule,
    },
});
