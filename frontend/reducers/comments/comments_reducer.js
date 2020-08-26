import { RECEIVE_COMMENT, REMOVE_COMMENT } from '../../actions/comments_actions';
import { RECEIVE_VIDEO } from '../../actions/videos_actions';

const commentsReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return Object.assign({}, oldState, { [action.comment.id]: action.comment })
        case RECEIVE_VIDEO:
            if (action.video.comments) {
                return action.video.comments;
            } else {
                return {};
            }
        case REMOVE_COMMENT:
            let newState = Object.assign({}, oldState);
            delete newState[action.commentId];
            return newState;
        default:
            return oldState;
    }
};

export default commentsReducer;