import { connect } from 'react-redux';

import { fetchVideo, fetchVideos, patchVideoViews } from '../../actions/videos_actions';
import VideoShow from './video_show';


const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    videosArray: Object.values(state.entities.videos),
    currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({
    fetchVideo: (videoId) => dispatch(fetchVideo(videoId)),
    fetchVideos: () => dispatch(fetchVideos()),
    patchVideoViews: (video) => dispatch(patchVideoViews(video))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoShow);