import { renderFullPhoto } from './rendering-full-photos.js';
import { debounce, shuffleArr } from './util.js';
import { RANDOM_PICS_COUNT, RERENDER_DELAY } from './variables.js';
import { getData } from './api.js';
import { showAlert } from './messages.js';


const galleryUsersPhotosNode = document.querySelector('.pictures');
const templateUsersPhotosNode = document.querySelector('#picture').content.querySelector('.picture');
const fragmentGaleryPhotos = document.createDocumentFragment();
const filterPostsNode = document.querySelector('.img-filters');
const filtersContainerNode = document.querySelector('.img-filters');
const filterButtonsNodes = document.querySelectorAll('.img-filters__button');

const renderUserPosts = (userPosts) => {
  userPosts.forEach((userPost) => {
    const userPhoto = templateUsersPhotosNode.cloneNode(true);

    userPhoto.querySelector('.picture__comments').textContent = userPost.comments.length;
    userPhoto.querySelector('.picture__likes').textContent = userPost.likes;
    userPhoto.querySelector('.picture__img').src = userPost.url;

    fragmentGaleryPhotos.appendChild(userPhoto);

    userPhoto.addEventListener('click', () => {
      renderFullPhoto(userPost);
    });
  });

  galleryUsersPhotosNode.appendChild(fragmentGaleryPhotos);
  return galleryUsersPhotosNode;
};

const makeButtonActive = (evt) => {
  filterButtonsNodes.forEach((option) => {
    if (evt.target.classList.contains('img-filters__button')) {
      option.classList.remove('img-filters__button--active');
    }
  });
  if (evt.target.classList.contains('img-filters__button')) {
    evt.target.classList.add('img-filters__button--active');
  }
};

const switchPhotosByFilter = (posts, evt) => {
  if (evt.target.classList.contains('img-filters__button')) {
    document.querySelectorAll('.picture').forEach((pic) => {
      pic.remove();
    });
  }
  let photosList = posts;
  switch (evt.target.id) {
    case 'filter-default':
      renderUserPosts(photosList);
      break;
    case 'filter-random':
      photosList = shuffleArr(posts).slice(0, RANDOM_PICS_COUNT);
      renderUserPosts(photosList);
      break;
    case 'filter-discussed':
      photosList = posts
        .slice()
        .sort((a, b) => {
          if (a.comments.length < b.comments.length) {
            return 1;
          } else {
            return -1;
          }
        });
      renderUserPosts(photosList);
      break;
  }
};

getData()
  .then((posts) => {
    renderUserPosts(posts);
    filterPostsNode.classList.remove('img-filters--inactive');
    filtersContainerNode.addEventListener('click', debounce((evt) => switchPhotosByFilter(posts, evt), RERENDER_DELAY,));
    filtersContainerNode.addEventListener('click', (evt) => makeButtonActive(evt));
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );
