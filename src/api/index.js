import {API_ROOT} from '../constant'
import VueResource from 'vue-resource'
import Vue from 'vue'
Vue.use(VueResource)
export default {
  getPostList: () => {
    return Vue.resource(API_ROOT).get()
  },
  getCategories: () => {
    return Vue.resource(API_ROOT+'categories').get()
  },
  getTags: () => {
    return Vue.resource(API_ROOT+'tags').get()
  },
  getQuestions: ()=> {
  	return Vue.resource(API_ROOT+'leetcode').get()
  },
  getQuestion: (id)=> {
  	return Vue.resource(API_ROOT+'leetcode/leetcode-question/'+id).get()
  },
  getTodos: () => {
    return Vue.resource(API_ROOT+'todo').get()
  },
  getHistoryTodos: () => {
    return Vue.resource(API_ROOT + 'todohistory').get()
  },
  getPoems: () => {
  	return Vue.resource(API_ROOT + 'poems').get()
  },
  getPoem: (id) => {
  	return Vue.resource(API_ROOT + 'poem/'+id).get()
  }
}