import api from '../../api'
import * as types from '../mutation-type'

const state = {
  posts: []
}

const getters = {
  posts: state => state.posts
}

const actions = {
  getPostList({commit}) {
    api.getPostList().then(response=>{
      var data = response.body.data
      commit(types.REQUEST_POST_LIST, {data})
    }, err=>{
      commit(types.REQUEST_POST_LIST_FAILURE, err)
    })
  }
}

const mutations = {
  [types.REQUEST_POST_LIST] (state, {data} ) {
    state.posts = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}