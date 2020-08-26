import { combineReducers } from 'redux';

import usersReducer from './users/users_reducer';
import videosReducer from './videos/videos_reducer';
import likeReducer from './likes/likes_reducer';
import commentsReducer from './comments/comments_reducer';

const entitiesReducers = combineReducers({
    users: usersReducer,
    videos: videosReducer,
    like: likeReducer,
    comments: commentsReducer,
});

export default entitiesReducers;