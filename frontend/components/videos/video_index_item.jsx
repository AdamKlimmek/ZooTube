import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { video } = this.props;

        if (!video) return null;

        if (video.thumbnail === "") {
            video.thumbnail = window.defaultThumbnailURL;
        }

        return (
            <div className="video-index-item" key={video.id}>
                <div className="video-index-item-thumbnail">
                    <img src={video.thumbnail} />
                </div>

                <div className="video-index-item-body">
                    <div className={`video-index-item-uploader-icon ${video.uploaderColor}`}>{video.uploader[0].toUpperCase()}</div>

                    <div className="video-index-item-info">
                        <span className="video-index-item-title">{video.title}</span>

                        <div className="video-index-item-uploader-username">{video.uploader}</div>

                        <div className="video-index-item-other-data"> 
                            <span className="video-index-item-views-count">{video.views} views</span>
                            <FontAwesomeIcon icon={faCircle} className="video-circle-divider" />
                            <span className="video-index-item-creation-date">{video.creationDate}</span>
                        </div>
                    </div>
                    
                </div>

            </div>
        )
    }
};

export default VideoIndexItem;