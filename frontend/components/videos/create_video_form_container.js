import { connect } from 'react-redux';

import { postVideo } from '../../actions/videos_actions';
import VideoForm from './video_form';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formData) => dispatch(postVideo(formData))
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);

