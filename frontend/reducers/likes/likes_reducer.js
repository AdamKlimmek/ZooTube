import { RECEIVE_LIKE, REMOVE_LIKE } from '../../actions/likes_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const likeReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_LIKE:
            return action.like;
        case RECEIVE_VIDEO:
            if (action.video.currentUserLike) {
                return action.video.currentUserLike;
            } else {
                return {};
            }
        case REMOVE_LIKE:
            return {};
        default:
            return oldState;
    }
};

export default likeReducer;