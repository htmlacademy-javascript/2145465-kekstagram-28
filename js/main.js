import {randomListPosts} from './modules/posts.js';
import {renderUserPosts} from './modules/rendering-photos-other-users.js';

const usersPosts = randomListPosts();

renderUserPosts(usersPosts);


