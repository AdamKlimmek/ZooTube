import React from 'react';
import { connect } from 'react-redux';

import { fetchVideo, patchVideo, deleteVideo, clearErrors } from '../../actions/videos_actions';
import VideoForm from './video_form';

const mapStateToProps = (state, ownProps) => ({
    video: state.entities.videos[ownProps.match.params.videoId],
    formType: "Update",
    errors: state.errors.videoErrors
});

const mapDispatchToProps = (dispatch) => ({
    fetchVideo: videoId => dispatch(fetchVideo(videoId)),
    processForm: (formData, video) => dispatch(patchVideo(formData, video)),
    deleteVideo: videoId => dispatch(deleteVideo(videoId)),
    clearErrors: () => dispatch(clearErrors())
});


class EditVideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
    }
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
    }
    
    render() {
        const { video, formType, errors, processForm, clearErrors } = this.props;
        if (!video) return null;
        
        return (
            <VideoForm 
            video={video}
            formType={formType}
            errors={errors}
            processForm={processForm}
            clearErrors={clearErrors}
            />
        );
    };
};
    
export default connect(mapStateToProps, mapDispatchToProps)(EditVideoForm);