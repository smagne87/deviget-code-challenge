import posts from '../../reducers/posts.reducers';
import { GET_POSTS_FAIL, GET_POSTS_PENDING, GET_POSTS_SUCCESS } from '../../constants/post.constants';

describe('Reducers posts', () => {
  it('Should set loading to true', () => {
    const action = { type: GET_POSTS_PENDING };
    const obj = posts(undefined, action);
    expect(obj.loading).toBe(true);
  });
  it('Should set fail to true with error message', () => {
    const errorMsg = 'Error message';
    const action = { type: GET_POSTS_FAIL, errorMsg };
    const obj = posts(undefined, action);
    expect(obj.fail).toBe(true);
    expect(obj.errorMsg).toBe(errorMsg);
  });
  it('Should set dummy posts', () => {
    const action = { type: GET_POSTS_SUCCESS, data: { data: { children: [{ name: 'test' }], dist: 10 } } };
    const obj = posts(undefined, action);
    expect(obj.fail).toBe(false);
    expect(obj.loading).toBe(false);
    expect(obj.count).toBe(10);
    expect(obj.posts.length).toBe(1);
  });
});
