import { renderFullPhoto } from './rendering-full-photos.js';

const renderUserPosts = (userPosts) => {
  const galleryUsersPhotos = document.querySelector('.pictures');
  const templateUsersPhotos = document.querySelector('#picture').content.querySelector('.picture');
  const fragmentGaleryPhotos = document.createDocumentFragment();

  userPosts.forEach((userPost) => {
    const userPhoto = templateUsersPhotos.cloneNode(true);

    userPhoto.querySelector('.picture__likes').textContent = userPost.likes;
    userPhoto.querySelector('.picture__comments').textContent = userPost.comments.length;
    userPhoto.querySelector('.picture__img').src = userPost.url;

    fragmentGaleryPhotos.appendChild(userPhoto);

    userPhoto.addEventListener('click', () => {
      renderFullPhoto(userPost);
    });
  });

  galleryUsersPhotos.appendChild(fragmentGaleryPhotos);

  return galleryUsersPhotos;
};

export { renderUserPosts };
