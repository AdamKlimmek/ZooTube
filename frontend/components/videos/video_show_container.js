import React from 'react';
import { connect } from 'react-redux';

import { fetchVideo, fetchVideos, patchVideoViews } from '../../actions/videos_actions';
import { filterVideos } from '../../util/selectors';
import { postLike, patchLike, deleteLike } from '../../actions/likes_actions';
import { toggleSideMenu, toggleShowPage } from '../../actions/ui_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    let currentUser = state.entities.users[state.session.currentUser];
    let currentUserLike = state.entities.likes;
    let videosArray = Object.values(state.entities.videos);
    let filterCriterion = parseInt(ownProps.match.params.videoId);
    // let shuffledVideos = shuffleVideos(filterVideos(videosArray, filterCriterion));

    return ({
        video: video,
        currentUser: currentUser,
        currentUserLike: currentUserLike,
        videosArray: filterVideos(videosArray, filterCriterion),
        sideMenuSmall: state.ui.sideMenuSmall
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    patchVideoViews: (video) => dispatch(patchVideoViews(video)),
    postLike: (like) => dispatch(postLike(like)),
    patchLike: (like) => dispatch(patchLike(like)),
    deleteLike: (likeId) => dispatch(deleteLike(likeId)),
    toggleSideMenu: () => dispatch(toggleSideMenu()),
    toggleShowPage: () => dispatch(toggleShowPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);