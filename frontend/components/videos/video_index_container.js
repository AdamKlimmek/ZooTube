import { connect } from 'react-redux';

import { fetchVideo, fetchVideos } from '../../actions/videos_actions';
import VideoIndex from './video_index';

const mapStateToProps = (state) => ({
    videos: Object.values(state.entities.videos),
    sideMenuSmall: state.ui.sideMenuSmall
});

const mapDispatchToProps = (dispatch) => ({
    fetchVideos: () => dispatch(fetchVideos()),
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoIndex);