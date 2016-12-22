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
}