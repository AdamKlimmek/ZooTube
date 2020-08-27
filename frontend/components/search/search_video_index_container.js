import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchVideo, fetchVideos } from '../../actions/videos_actions';
import SearchVideoIndex from './search_video_index';

const mapStateToProps = (state, ownProps) => {
    return({
        query: ownProps.match.params.query,
        videos: Object.values(state.entities.videos),
        sideMenuSmall: state.ui.sideMenuSmall
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchVideos: query => dispatch(fetchVideos(query)),
    fetchVideo: videoId => dispatch(fetchVideo(videoId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SearchVideoIndex));