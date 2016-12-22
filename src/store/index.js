import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as getters from './getters.js'
import post from './module/post'
import categories from './module/categories'
import tags from './module/tags'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		post,
		categories,
		tags
	},
})