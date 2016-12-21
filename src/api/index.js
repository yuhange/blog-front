import {PostResource} from './resources'

export default {
  getPostList:function (options) {
    return PostResource.get({id: 'getPostList', ...options})
  }
}