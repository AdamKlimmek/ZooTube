import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import VideoIndexItem from '../videos/video_index_item';

class SearchVideoIndex extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideos(this.props.match.params.query);
        window.scrollTo(0, 0);
    }

    componentDidUpdate(oldProps) {
        if (oldProps.query && oldProps.query != this.props.match.params.query) {
            this.props.fetchVideos(this.props.match.params.query);
            window.scrollTo(0, 0);
        }
    }
    
    render() {
        const { videos, fetchVideo } = this.props;

        if (!videos) return null;

        let size;
        if (this.props.sideMenuSmall) {
            size = "small"
        } else {
            size = "large"
        }

        let resultsHeader = null;
        if (videos.length === 0) {
            resultsHeader = "No results found"
        } else {
            resultsHeader = "Search results"
        }

        return (
            <div className={`video-index-${size}`}>
                <div className="video-index-list">
                    <div className="video-index-header">{resultsHeader}</div>

                    <div className="video-index-items">
                        {videos.map(video => (
                            <Link to={`/videos/${video.id}`} key={video.id}>
                                <VideoIndexItem video={video} fetchVideo={fetchVideo} />
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        )
    }
};

export default SearchVideoIndex;