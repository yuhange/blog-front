import api from '../../api'
import * as types from '../mutation-type'

const state = {
  questions: [],
  question: {}
}

const getters = {
  questions: state => state.questions,
  question: state => state.question
}

const actions = {
  getQuestions({commit}) {
    api.getQuestions().then(response=>{
      var data = response.body.data
      commit(types.REQUEST_QUESTIONS, {data})
    }, err=>{
      commit(types.REQUEST_QUESTIONS_FAILURE, err)
    })
  },

  getQuestion({commit}, id) {
    api.getQuestion(id).then(response=>{
      var data = response.body.data
      commit(types.REQUEST_QUESTION, {data})
    }, err=>{
      commit(types.REQUEST_QUESTION_FAILURE, {data})
    })
  }
}

const mutations = {
  [types.REQUEST_QUESTIONS] (state, {data} ) {
    state.questions = data
  },
  [types.REQUEST_QUESTION] (state, {data}) {
    state.question = data
  }
}

export default {
  state,
  actions,
  getters,
  mutations
}