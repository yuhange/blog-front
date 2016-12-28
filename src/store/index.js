import Vue from 'vue'
import Vuex from 'vuex'
// import * as actions from './actions.js'
// import * as getters from './getters.js'
import post from './module/post'
import categories from './module/categories'
import tags from './module/tags'
import leetcode from './module/leetcode'
import todos from './module/todos'
import poem from './module/poem'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		post,
		categories,
		tags,
		leetcode,
		todos,
		poem
	},
})