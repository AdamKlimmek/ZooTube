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
        let size;
        if (this.props.sideMenuSmall) {
            size = "small"
        } else {
            size = "large"
        }

        return (
            <div className={`video-index-${size}`}>
                <div className="video-index-list">
                    <div className="video-index-header">Recommended</div>
                    
                    <div className="video-index-items">
                        {this.props.videos.map(video => (
                            <Link to={`/videos/${video.id}`} key={video.id}>
                                <VideoIndexItem video={video} fetchVideo={this.props.fetchVideo}  />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default VideoIndex;