import api from '../../api'
import * as types from '../mutation-type'

const state = {
  categories: []
}

const getters = {
  categories: state => state.categories
}

const actions = {
  getCategories({commit}) {
    api.getCategories().then(response=>{
      var data = response.body.data
      commit(types.REQUEST_CATEGORIES_LIST, {data})
    }, err=>{
      commit(types.REQUEST_CATEGORIES_LIST_FAILURE, err)
    })
  }
}

const mutations = {
  [types.REQUEST_CATEGORIES_LIST] (state, {data} ) {
    state.categories = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}