import * as LikesApiUtil from '../util/likes_api_util';

export const RECEIVE_LIKE = 'RECEIVE_LIKE';
export const REMOVE_LIKE = 'REMOVE_LIKE';

export const receiveLike = like => ({
    type: RECEIVE_LIKE,
    like
});

export const removeLike = likeId => ({
    type: REMOVE_LIKE,
    likeId
});

export const postLike = (like) => dispatch => (
    LikesApiUtil.postLike(like).then(
        (like) => dispatch(receiveLike(like))
    )
);

export const patchLike = (like) => dispatch => (
    LikesApiUtil.patchLike(like).then(
        (like) => dispatch(receiveLike(like))
    )
);

export const deleteLike = (likeId) => dispatch => (
    LikesApiUtil.deleteLike(likeId).then(
        (like) => dispatch(removeLike(like.id))
    )
);
