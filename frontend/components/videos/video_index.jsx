import React from 'react';

import VideoIndexItem from './video_index_item';
import { Link } from 'react-router-dom';

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
                    <Link to={`/videos/${video.id}`} key={video.id}>
                        <VideoIndexItem video={video} fetchVideo={this.props.fetchVideo}  />
                    </Link>
                ))}
            </div>
        )
    }
};

export default VideoIndex;