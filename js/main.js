import './modules/form.js';
import './modules/form-validate.js';
import './modules/edit-photo.js';
import './modules/rendering-photos-other-users.js';
import { closeUserModal } from './modules/form.js';
import { setUserFormSubmit } from './modules/form-validate.js';


setUserFormSubmit(closeUserModal);
