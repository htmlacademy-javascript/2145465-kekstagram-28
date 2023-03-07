import { isEscapeKey } from './util.js';
import { createFullComment } from './comments.js';

const buttonExitNode = document.querySelector('#picture-cancel');
const fullPictureSectionNode = document.querySelector('.big-picture');
const fullPictureImgNode = fullPictureSectionNode.querySelector('.big-picture__img').querySelector('img');
const likesCountNode = fullPictureSectionNode.querySelector('.likes-count');
const commentsCountNode = fullPictureSectionNode.querySelector('.comments-count');
const socialCommentsNode = fullPictureSectionNode.querySelector('.social__comments');
const socialOneCommentNode = fullPictureSectionNode.querySelector('.social__comment');
const socialCaptionNode = fullPictureSectionNode.querySelector('.social__caption');
const socialCommentCountNode = fullPictureSectionNode.querySelector('.social__comment-count');
const commentsLoaderNode = fullPictureSectionNode.querySelector('.comments-loader');
const pageBodyNode = document.querySelector('body');

const onFullPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePhotoPopup();
  }
};

const renderFullPhoto = (post) => {
  fullPictureSectionNode.classList.remove('hidden');
  pageBodyNode.classList.add('modal-open');

  socialCommentCountNode.classList.add('hidden');
  commentsLoaderNode.classList.add('hidden');

  fullPictureImgNode.src = post.url;
  likesCountNode.textContent = post.likes;
  commentsCountNode.textContent = String(post.comments.length);
  socialCaptionNode.textContent = post.description;

  createFullComment(post);

  document.addEventListener('keydown', onFullPhotoEscKeydown);
};

function hidePhotoPopup() {
  fullPictureSectionNode.classList.add('hidden');
  pageBodyNode.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
}

buttonExitNode.addEventListener('click', hidePhotoPopup);

export {renderFullPhoto, socialCommentsNode, socialOneCommentNode};
