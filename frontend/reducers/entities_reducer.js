import { combineReducers } from 'redux';

import usersReducer from './users/users_reducer';
import videosReducer from './videos/videos_reducer';
import likesReducer from './likes/likes_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    likes: likesReducer,
});

export default entitiesReducers;