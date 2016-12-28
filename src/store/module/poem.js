import api from '../../api'
import * as types from '../mutation-type'

const state = {
  poems: [],
  poem: {}
}

const getters = {
  poems: state => state.poems,
  poem: state => state.poem
}

const actions = {
  getPoems({commit}) {
    api.getPoems().then(response=>{
      var data = response.body.data
      // console.log(data)
      commit(types.REQUEST_POEMS, {data})
    }, err=>{
      commit(types.REQUEST_POEMS_FAILURE, err)
    })
  },

  getPoem({commit}, id) {
    api.getPoem(id).then(response=>{
      var data = response.body.data

      commit(types.REQUEST_POEM, {data})
    }, err=>{
      commit(types.REQUEST_POEM_FAILURE, {data})
    })
  }
}

const mutations = {
  [types.REQUEST_POEMS] (state, {data} ) {
    state.poems = data
  },
  [types.REQUEST_POEM] (state, {data}) {
    state.poem = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}