import api from '../api'
import * as types from './mutation-type'

export const getPostList = ({ dispatch }, options, isAdd) => {
  dispatch(types.REQUEST_POST_LIST)
  api.getPostList(options).then(response => {
    if(!response.ok){
      return dispatch(types.GET_POST_LIST_FAILURE)
    }
    dispatch(types.POST_LIST,{
        postList: json.data,
        isMore:isMore
    })
  }, response => {
    dispatch(types.GET_POST_LIST_FAILURE)
  })
}
