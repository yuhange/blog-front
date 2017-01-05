import api from '../../api'
import * as types from '../mutation-type'

const state = {
  posts: [],
  post: {}
}

const getters = {
  posts: state => state.posts,
  post: state => state.post
}

const actions = {
  getPostList({commit}) {
    api.getPostList().then(response=>{
      var data = response.body.data
      commit(types.REQUEST_POST_LIST, {data})
    }, err=>{
      commit(types.REQUEST_POST_LIST_FAILURE, err)
    })
  },
  getPostById({commit}, id) {
    api.getPostById(id).then(response=> {
      var data = response.body.data
      var marked = require('marked');
      marked.setOptions({
        renderer: new marked.Renderer(),
        gfm: true,
        tables: true,
        breaks: false,
        pedantic: false,
        sanitize: true,
        smartLists: true,
        smartypants: false,
        highlight: function (code) {
          return require('highlight.js').highlightAuto(code).value;
        }
      });
      data.content = marked(data.content);
      commit(types.REQUEST_POST_BY_ID, {data})
    }, err=>{
      commit(types.REQUEST_POST_BY_ID_FAILURE, err)
    })
  }
}

const mutations = {
  [types.REQUEST_POST_LIST] (state, {data} ) {
    state.posts = data
  },
  [types.REQUEST_POST_BY_ID] (state, {data}) {
    state.post = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}