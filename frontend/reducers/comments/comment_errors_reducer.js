import { RECEIVE_COMMENT, RECEIVE_COMMENT_ERRORS, CLEAR_ERRORS } from '../../actions/comments_actions';

const commentErrorsReducer = (state = [], action) => {
    Object.freeze(state);

    switch (action.type) {
        case RECEIVE_COMMENT:
            return [];
        case RECEIVE_COMMENT_ERRORS:
            return [action.errors.responseJSON];
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};

export default commentErrorsReducer;