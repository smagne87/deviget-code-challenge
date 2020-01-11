import axios from 'axios';

const url = process.env.REACT_APP_REDDIT_API_URL;
const subReddit = process.env.REACT_APP_REDDIT_SUBREDDIT;

async function getAllPosts(after) {
  try {
    const config = {
      params: {
        after,
      },
    };
    const result = await axios.get(`${url}r/${subReddit}/top/.json`, config);
    return result.data;
  } catch (e) {
    throw e;
  }
}

export const postServices = {
  getAllPosts,
};
