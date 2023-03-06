import { isEscapeKey } from './util.js';

const buttonExit = document.querySelector('#picture-cancel');
const fullPictureSection = document.querySelector('.big-picture');
const fullPictureImg = fullPictureSection.querySelector('.big-picture__img').querySelector('img');
const likesCount = fullPictureSection.querySelector('.likes-count');
const commentsCount = fullPictureSection.querySelector('.comments-count');
const socialComments = fullPictureSection.querySelector('.social__comments');
const socialOneComment = fullPictureSection.querySelector('.social__comment');
const socialCaption = fullPictureSection.querySelector('.social__caption');
const socialCommentCount = fullPictureSection.querySelector('.social__comment-count');
const commentsLoader = fullPictureSection.querySelector('.comments-loader');
const pageBody = document.querySelector('body');

const onFullPhotoEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hidePhotoPopup();
  }
};

function createComment(userComments) {
  const commentFragment = document.createDocumentFragment();

  userComments.comments.forEach((userComment) => {
    const commentItem = socialOneComment.cloneNode(true);

    commentItem.querySelector('.social__picture').src = userComment.avatar;
    commentItem.querySelector('.social__text').textContent = userComment.message;
    commentFragment.append(commentItem);
  });

  socialComments.innerHTML = '';
  socialComments.append(commentFragment);
}

const renderFullPhoto = (post) => {
  fullPictureSection.classList.remove('hidden');
  pageBody.classList.add('modal-open');

  socialCommentCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  fullPictureImg.src = post.url;
  likesCount.textContent = post.likes;
  commentsCount.textContent = post.comments.length;
  socialCaption.textContent = post.description;

  createComment(post);

  document.addEventListener('keydown', onFullPhotoEscKeydown);
};

function hidePhotoPopup() {
  fullPictureSection.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  document.removeEventListener('keydown', onFullPhotoEscKeydown);
}

buttonExit.addEventListener('click', hidePhotoPopup);

export {renderFullPhoto};
