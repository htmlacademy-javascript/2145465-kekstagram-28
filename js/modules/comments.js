import {TEXT_MESSAGES, USER_AVATAR_MAX_ID, USER_AVATAR_MIN_ID, COMMENT_AUTHOR_NAMES} from './variables.js';
import {getRandomInteger, getCommentNextId, shuffleArr, getArrRandomElem} from './util.js';
import { socialCommentsNode, socialOneCommentNode } from './rendering-full-photos.js';

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

function createFullComment(userComments) {
  const commentFragment = document.createDocumentFragment();

  userComments.comments.forEach((userComment) => {
    const commentItem = socialOneCommentNode.cloneNode(true);

    commentItem.querySelector('.social__picture').src = userComment.avatar;
    commentItem.querySelector('.social__text').textContent = userComment.message;
    commentFragment.append(commentItem);
  });

  socialCommentsNode.innerHTML = '';
  socialCommentsNode.append(commentFragment);
}

export {addCommentMessage, addComment, createFullComment};
