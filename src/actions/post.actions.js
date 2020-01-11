import {
  GET_POSTS_FAIL,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  SET_POSTS_DISMISS,
  SET_POSTS_DISMISS_ALL,
  SET_POSTS_READ,
} from '../constants/post.constants';
import { postServices } from '../services';

function getAllPosts(after) {
  return async (dispatch) => {
    try {
      dispatch({ type: GET_POSTS_PENDING });
      const result = await postServices.getAllPosts(after);
      dispatch({
        type: GET_POSTS_SUCCESS,
        data: result,
        after,
      });
    } catch (e) {
      dispatch({ type: GET_POSTS_FAIL, e, errorMsg: 'Something went wrong!' });
    }
  };
}

function readPost(name) {
  return (dispatch) => {
    dispatch({ type: SET_POSTS_READ, name });
  };
}

function dismissPost(name) {
  return (dispatch) => {
    dispatch({ type: SET_POSTS_DISMISS, name });
  };
}

function dismissAllPosts() {
  return (dispatch) => {
    dispatch({ type: SET_POSTS_DISMISS_ALL });
  };
}

export const postActions = {
  getAllPosts,
  readPost,
  dismissPost,
  dismissAllPosts,
};
