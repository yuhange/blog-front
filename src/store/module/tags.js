import api from '../../api'
import * as types from '../mutation-type'

const state = {
  tags: []
}

const getters = {
  tags: state => state.tags
}

const actions = {
  getTags({commit}) {
    api.getCategories().then(response=>{
      var data = response.body.data
      commit(types.REQUEST_TAGS_LIST, {data})
    }, err=>{
      commit(types.REQUEST_TAGS_LIST_FAILURE, err)
    })
  }
}

const mutations = {
  [types.REQUEST_TAGS_LIST] (state, {data} ) {
    state.tags = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}