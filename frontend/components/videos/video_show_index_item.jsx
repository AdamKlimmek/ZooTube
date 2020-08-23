import React from 'react';

const VideoShowIndexItem = ({ video }) => {
    return (
        <div className="video-show-index-item">
            <div className="video-show-index-item-thumbnail">
                <img src={video.thumbnail} />
            </div>

            <div className="video-show-index-item-details">
                <div className="video-show-index-item-title">{video.title}</div>

                <div className="video-show-index-item-uploader-username">{video.uploader}</div>

                <div className="video-show-index-item-views-count">{video.views} Views</div>
            </div>
        </div>
    );
};

export default VideoShowIndexItem;