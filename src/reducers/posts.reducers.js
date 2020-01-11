import {
  GET_POSTS_FAIL,
  GET_POSTS_PENDING,
  GET_POSTS_SUCCESS,
  SET_POSTS_DISMISS,
  SET_POSTS_DISMISS_ALL,
  SET_POSTS_READ,
} from '../constants/post.constants';

const initialState = {
  loading: true,
  fail: false,
  errorMsg: '',
  posts: [],
  count: 0,
  after: '',
  dismissPosts: [],
  readPosts: [],
};

const posts = (state = initialState, action) => {
  if (!action || !action.type) {
    return state;
  }
  switch (action.type) {
    case GET_POSTS_FAIL:
      return {
        ...state,
        fail: true,
        loading: false,
        errorMsg: action.errorMsg,
        count: 0,
      };
    case GET_POSTS_PENDING:
      return {
        ...state,
        fail: false,
        loading: true,
      };
    case GET_POSTS_SUCCESS:
      return {
        ...state,
        fail: false,
        loading: false,
        posts: [...new Set([
          ...state.posts,
          ...action.data.data.children,
        ])],
        count: action.data.data.dist,
        after: action.data.data.after,
      };
    case SET_POSTS_DISMISS_ALL:
      return {
        ...state,
        dismissPosts: state.posts.map(p => p.data.name),
      };
    case SET_POSTS_DISMISS:
      return {
        ...state,
        dismissPosts: [...state.dismissPosts, action.name],
      };
    case SET_POSTS_READ:
      return {
        ...state,
        readPosts: [...state.readPosts, action.name],
      };
    default:
      return state;
  }
};

export default posts;
