const renderUserPosts = (userPosts) => {
  const galeryUsersPhotos = document.querySelector('.pictures');
  const templateUsersPhotos = document.querySelector('#picture').content.querySelector('.picture');
  const fragmentGaleryPhotos = document.createDocumentFragment();

  userPosts.forEach((userPost) => {
    const userPhoto = templateUsersPhotos.cloneNode(true);

    userPhoto.querySelector('.picture__likes').textContent = userPost.likes;
    userPhoto.querySelector('.picture__comments').textContent = userPost.comments.length;
    userPhoto.querySelector('.picture__img').src = userPost.url;

    fragmentGaleryPhotos.appendChild(userPhoto);
  });

  galeryUsersPhotos.appendChild(fragmentGaleryPhotos);

  return galeryUsersPhotos;
};

export { renderUserPosts };
