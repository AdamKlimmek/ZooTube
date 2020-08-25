import React from 'react';
import Dropzone from 'react-dropzone';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVideo, faCheck, faCamera, faSpinner, faFolderOpen } from '@fortawesome/free-solid-svg-icons';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: this.props.video.title,
            description: this.props.video.description,
            thumbnail: this.props.video.thumbnail,
            thumbnailFile: null,
            videoFile: null,
        }

        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleVideoFile(acceptedFiles) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({ videoFile: file });
        };

        reader.readAsDataURL(file);
    }

    handleThumbnailFile(acceptedFiles) {
        const file = acceptedFiles[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            this.setState({ thumbnailFile: file, thumbnail: reader.result });
        };

        reader.readAsDataURL(file);
    }

    handleSubmit(e) {
        e.preventDefault();

        // if (!this.state.thumbnailFile) {
        //     const fs = require('fs');

        //     const myfile = 'https://zootube-pro.s3-us-west-1.amazonaws.com/default_thumbnail.jpeg';
        //     const file = fs.readFileSync(myfile,'utf8');

        // }

        // const reader = new FileReader();

        // reader.onloadend = () => {
        //     this.setState({ thumbnailFile: file, thumbnail: reader.result });
        // };

        // reader.readAsDataURL(file);
        
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[video]', this.state.videoFile);
        formData.append('video[thumbnail]', this.state.thumbnailFile);

        if (this.props.formType === "Upload") {
            this.props.processForm(formData).then(
                () => this.props.history.push('/')
            )
        } else {
            this.props.processForm(formData, this.props.video).then(
                () => this.props.history.goBack()
            )
        }
    }

    handleDelete(e) {
        e.preventDefault();
        this.props.deleteVideo(this.props.match.params.videoId);
        this.props.history.push('/');
    }
    
    render() {
        let setVisibility;
        if (this.props.formType === "Upload") {
            setVisibility = ""
        } else {
            setVisibility = "hidden"
        }

        let videoAttachmentState;
        if (this.state.videoFile) {
            videoAttachmentState = <FontAwesomeIcon icon={faCheck} className="video-attached"/>
        } else {
            videoAttachmentState = <FontAwesomeIcon icon={faVideo} className="video-not-attached"/>
        }

        let thumbnailAttachmentState;
        if (this.state.thumbnail) {
            thumbnailAttachmentState = <div className="thumbnail-attached"><img src={this.state.thumbnail} /></div>
        } else {
            thumbnailAttachmentState = <FontAwesomeIcon icon={faCamera} className="thumbnail-not-attached"/>
        }

        const videoAttachingState = <FontAwesomeIcon icon={faFolderOpen} className="video-not-attached" />;
        const thumbnailAttachingState = <FontAwesomeIcon icon={faFolderOpen} className="thumbnail-not-attached-small" />;

        let deleteButton;
        if (this.props.formType === "Upload") {
            deleteButton = <div></div>
        } else {
            deleteButton = <button className="video-form-button" onClick={this.handleDelete}>Delete</button>
        }

        return (
            <div className="video-form">
                <div className="video-form-header">
                    <span>{this.props.formType} video</span>
                    <button onClick={e => this.props.history.goBack()}>x</button>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="video-form-upper-body">
                        <label htmlFor="video-form-video-input" className={setVisibility}>
                            <Dropzone onDrop={this.handleVideoFile} accept="video/*">
                                {({ getRootProps, getInputProps, isDragActive }) => (
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input type="file" id="video-form-video-input" accept="video/*" />
                                        <span>{isDragActive ? videoAttachingState : videoAttachmentState}</span>
                                    </div>
                                )}
                            </Dropzone>
                        </label>

                        <label htmlFor="video-form-thumbnail-input">
                            <Dropzone onDrop={this.handleThumbnailFile} accept="image/*">
                                {({ getRootProps, getInputProps, isDragActive }) => (
                                    <div {...getRootProps({ className: "dropzone" })}>
                                        <input type="file" id="video-form-thumbnail-input" accept="image/*" />
                                        <span>{isDragActive ? thumbnailAttachingState : thumbnailAttachmentState}</span>
                                    </div>
                                )}
                            </Dropzone>
                        </label>
                    </div>

                    <div className="video-form-lower-body">
                        <input type='text'
                            className="video-form-title-input"
                            value={this.state.title}
                            onChange={this.update('title')}
                            placeholder="Title"
                        />
                        
                        <textarea
                            className="video-form-description-input"
                            value={this.state.description}
                            onChange={this.update('description')}
                            placeholder="Description"
                        />
                        
                        <ul className="video-form-errors-list">
                            {this.props.errors.map((error, i) => (
                                <li className="video-form-error" key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="video-form-footer">
                        {deleteButton}
                        <button className="video-form-button">{this.props.formType}</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(VideoForm);