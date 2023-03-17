import {randomListPosts} from './modules/posts.js';
import {renderUserPosts} from './modules/rendering-photos-other-users.js';
import './modules/form.js';
import './modules/form-validate.js';

const usersPosts = randomListPosts();

renderUserPosts(usersPosts);
