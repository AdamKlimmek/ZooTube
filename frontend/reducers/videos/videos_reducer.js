import { RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO, REMOVE_VIDEO } from '../../actions/videos_actions';

const videosReducer = (oldState = {}, action) => {
    Object.freeze(oldState);

    let newState = Object.assign({}, oldState);
    switch (action.type) {
        case RECEIVE_ALL_VIDEOS:
            return Object.assign({}, action.videos);
        case RECEIVE_VIDEO:
            return Object.assign({}, oldState, { [action.video.id]: action.video });
        case REMOVE_VIDEO:
            delete newState[action.videoId];
            return newState;
        default:
            return oldState;
    }
};

export default videosReducer;