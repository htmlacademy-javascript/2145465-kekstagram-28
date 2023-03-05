import {addDescription, getRandomInteger, shuffleArr} from './util.js';
import {POST_MIN_LIKES, POST_MAX_LIKES, COMMENT_MAX_COUNT, COMMENT_MIN_COUNT, POSTS_PHOTO_COUNT} from './variables.js';
import {addComment} from './comments.js';


const addPost = (_, index) => {
  const id = index + 1;
  return {
    id,
    url: `photos/${id}.jpg`,
    description: addDescription(),
    likes: getRandomInteger(POST_MIN_LIKES, POST_MAX_LIKES),
    comments: Array.from({ length: getRandomInteger(COMMENT_MIN_COUNT, COMMENT_MAX_COUNT) }, addComment),
  };
};

const posts = () => Array.from({ length: POSTS_PHOTO_COUNT }, addPost);

const randomListPosts = () => shuffleArr(posts());


export {addPost, randomListPosts};
