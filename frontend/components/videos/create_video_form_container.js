import { connect } from 'react-redux';

import { postVideo, clearErrors } from '../../actions/videos_actions';
import VideoForm from './video_form';

const mapStateToProps = (state) => ({
    video: {
        title: "",
        description: "",
        videoFile: null,
        thumbnail: null
    },
    formType: "Upload",
    errors: state.errors.videoErrors
});

const mapDispatchToProps = (dispatch) => ({
    processForm: (formData) => dispatch(postVideo(formData)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(VideoForm);

