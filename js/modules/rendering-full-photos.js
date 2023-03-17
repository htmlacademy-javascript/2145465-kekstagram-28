import { isEscapeKey } from './util.js';
import { COMMENT_NUMBERS_TO_SHOW } from './variables.js';

const buttonExitNode = document.querySelector('#picture-cancel');
const fullPictureSectionNode = document.querySelector('.big-picture');
const fullPictureImgNode = fullPictureSectionNode.querySelector('.big-picture__img').querySelector('img');
const likesCountNode = fullPictureSectionNode.querySelector('.likes-count');
const commentsCountNode = fullPictureSectionNode.querySelector('.comments-count');
const socialCommentsNode = fullPictureSectionNode.querySelector('.social__comments');
const socialOneCommentNode = fullPictureSectionNode.querySelector('.social__comment');
const socialCaptionNode = fullPictureSectionNode.querySelector('.social__caption');
const commentsLoaderNode = fullPictureSectionNode.querySelector('.comments-loader');
const commentsCountShowNode = fullPictureSectionNode.querySelector('.comments-count--show');

const pageBodyNode = document.querySelector('body');


let copyComments = [];

const onFullPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePhotoPopup();
  }
};

function createFullComment(userComments) {
  if (!userComments.length) {
    return;
  }
  const commentFragment = document.createDocumentFragment();

  userComments.forEach((userComment) => {
    const commentItem = socialOneCommentNode.cloneNode(true);

    commentItem.querySelector('.social__picture').src = userComment.avatar;
    commentItem.querySelector('.social__text').textContent = userComment.message;
    commentFragment.append(commentItem);
  });

  socialCommentsNode.append(commentFragment);
}

const showCommentsLoader = () => {
  commentsLoaderNode.classList.remove('hidden');
  commentsLoaderNode.addEventListener('click', loadMoreComments);
};

const hideCommentsLoader = () => {
  commentsLoaderNode.classList.add('hidden');
  commentsLoaderNode.removeEventListener('click', loadMoreComments);
};

function loadMoreComments() {
  showCommentsLoader();

  createFullComment(copyComments.splice(0, COMMENT_NUMBERS_TO_SHOW));

  commentsCountShowNode.textContent = document.querySelectorAll('.social__comment').length;

  if (!copyComments.length) {
    hideCommentsLoader();
  }
}

const renderFullPhoto = (post) => {
  fullPictureSectionNode.classList.remove('hidden');
  pageBodyNode.classList.add('modal-open');

  fullPictureImgNode.src = post.url;
  likesCountNode.textContent = post.likes;
  commentsCountNode.textContent = String(post.comments.length);
  socialCaptionNode.textContent = post.description;
  socialCommentsNode.innerHTML = '';

  copyComments = [...post.comments];
  loadMoreComments();

  document.addEventListener('keydown', onFullPhotoEscKeydown);
};

function hidePhotoPopup() {
  fullPictureSectionNode.classList.add('hidden');
  pageBodyNode.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
}

buttonExitNode.addEventListener('click', hidePhotoPopup);

export {renderFullPhoto, socialCommentsNode, socialOneCommentNode, pageBodyNode};
