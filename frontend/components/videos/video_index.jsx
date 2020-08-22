import React from 'react';

import VideoIndexItem from './video_index_item';

class VideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos();
    }
    
    render() {
        return (
            <div className="video-index">
                {this.props.videos.map(video => (
                    <VideoIndexItem video={video} fetchVideo={this.props.fetchVideo} key={video.id}/>
                ))}
            </div>
        )
    }
};

export default VideoIndex;