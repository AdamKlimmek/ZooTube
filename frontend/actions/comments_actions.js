import * as CommentsApiUtil from '../util/comments_api_util';

export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const RECEIVE_COMMENT_ERRORS = 'RECEIVE_COMMENT_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveComment = comment => ({
    type: RECEIVE_COMMENT,
    comment
});

export const removeComment = commentId => ({
    type: REMOVE_COMMENT,
    commentId
});

export const receiveErrors = errors => ({
    type: RECEIVE_COMMENT_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const postComment = (comment) => dispatch => (
    CommentsApiUtil.postComment(comment).then(
        comment => dispatch(receiveComment(comment)),
        errors => dispatch(receiveErrors(errors))
    )
);

export const patchComment = (comment) => dispatch => (
    CommentsApiUtil.patchComment(comment).then(
        comment => dispatch(receiveComment(comment)),
        errors => dispatch(receiveErrors(errors))
    )
);

export const deleteComment = (commentId) => dispatch => (
    CommentsApiUtil.deleteComment(commentId).then(
        comment => dispatch(removeComment(comment.id))
    )
);
