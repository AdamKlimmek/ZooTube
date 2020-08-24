import { connect } from 'react-redux';

import { fetchVideo, fetchVideos, patchVideoViews } from '../../actions/videos_actions';
import { filterVideos } from '../../util/selectors';
import { toggleSideMenu, toggleShowPage } from '../../actions/ui_actions';
import VideoShow from './video_show';

const mapStateToProps = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    let videosArray = Object.values(state.entities.videos);
    let filterCriterion = parseInt(ownProps.match.params.videoId);

    return ({
        video: video,
        videosArray: filterVideos(videosArray, filterCriterion),
        currentUser: state.entities.users[state.session.currentUser],
        sideMenuSmall: state.ui.sideMenuSmall
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    patchVideoViews: (video) => dispatch(patchVideoViews(video)),
    toggleSideMenu: () => dispatch(toggleSideMenu()),
    toggleShowPage: () => dispatch(toggleShowPage())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);