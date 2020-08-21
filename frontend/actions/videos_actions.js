import * as VideosApiUtil from '../util/videos_api_util';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_VIDEO_ERRORS = 'RECEIVE_VIDEO_ERRORS';
export const CLEAR_ERRORS = 'CLEAR_ERRORS';

export const receiveAllVideos = videos => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
});

export const receiveVideo = video => ({
    type: RECEIVE_VIDEO,
    video
});

export const removeVideo = videoId => ({
    type: REMOVE_VIDEO,
    videoId
});

export const receiveErrors = errors => ({
    type: RECEIVE_VIDEO_ERRORS,
    errors
});

export const clearErrors = () => ({
    type: CLEAR_ERRORS,
});

export const fetchVideos = () => dispatch => (
    VideosApiUtil.fetchVideos().then(
        videos => dispatch(receiveAllVideos(videos))
    )
);

export const fetchVideo = (videoId) => dispatch => (
    VideosApiUtil.fetchVideo(videoId).then(
        video => dispatch(receiveVideo(video))
    )
);

export const postVideo = (formData) => dispatch => (
    VideosApiUtil.postVideo(formData).then(
        video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveErrors(errors))
    )
);

export const patchVideo = (formData, video) => dispatch => (
    VideosApiUtil.patchVideo(formData, video).then(
        video => dispatch(receiveVideo(video)),
        errors => dispatch(receiveErrors(errors))
    )
);

export const deleteVideo = (videoId) => dispatch => (
    VideosApiUtil.deleteVideo(videoId).then(
        video => dispatch(removeVideo(video.id)),
        errors => dispatch(receiveErrors(errors))
    )
);