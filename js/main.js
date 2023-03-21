import {renderUserPosts} from './modules/rendering-photos-other-users.js';
import './modules/form.js';
import './modules/form-validate.js';
import './modules/edit-photo.js';
import { closeUserModal } from './modules/form.js';
import { setUserFormSubmit } from './modules/form-validate.js';
import { showAlert } from './modules/util.js';
import { getData } from './modules/api.js';

getData()
  .then((posts) => {
    renderUserPosts(posts);
  })
  .catch(
    (err) => {
      showAlert(err.message);
    }
  );

setUserFormSubmit(closeUserModal);
