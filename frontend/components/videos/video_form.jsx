import React from 'react';

class VideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            uploader_id: 1,
            views: 0,
            videoFile: null,
            videoUrl: null,
            thumbnailFile: null,
            thumbnailUrl: null
        }

        this.handleVideoFile = this.handleVideoFile.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleVideoFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();

        fileReader.onloadend = () => {
            this.setState({ videoFile: file, videoUrl: fileReader.result });
        };
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }
    
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    
                    <input type='text'
                        value={this.state.title}
                        onChange={this.update('title')}
                        placeholder="Title"
                    />
                    
                    <input type='textarea'
                        value={this.state.description}
                        onChange={this.update('description')}
                        placeholder="Description"
                    />

                    <input type="file"
                        onChange={this.handleVideoFile}
                    />
                    
                    <input type='submit' />
                </form>
            </div>
        )
    }
};

export default VideoForm;