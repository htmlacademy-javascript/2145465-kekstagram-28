import {TEXT_MESSAGES, USER_AVATAR_MAX_ID, USER_AVATAR_MIN_ID, COMMENT_AUTHOR_NAMES} from './variables.js';
import {getRandomInteger, getCommentNextId, shuffleArr, getArrRandomElem} from './util.js';

const addCommentMessage = () => {
  const commentMinCount = 1;
  const commentMaxCount = 2;
  const commentCount = getRandomInteger(commentMinCount, commentMaxCount);
  return shuffleArr(TEXT_MESSAGES).slice(0, commentCount).join(' ');
};

const addComment = () => ({
  id: getCommentNextId(),
  avatar: `img/avatar-${getRandomInteger(USER_AVATAR_MIN_ID, USER_AVATAR_MAX_ID)}.svg`,
  message: addCommentMessage(),
  name: getArrRandomElem(COMMENT_AUTHOR_NAMES)
});

export {addCommentMessage, addComment};
