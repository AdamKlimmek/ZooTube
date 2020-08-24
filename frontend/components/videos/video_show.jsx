import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import NavBarContainer from '../navbar/navbar_container';
import SideMenuContainer from '../sidemenu/side_menu_container'
import VideoShowIndexItem from './video_show_index_item';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);

        this.handleVideoEnded = this.handleVideoEnded.bind(this);
    }

    componentDidMount() {
        this.props.toggleShowPage();
        this.props.fetchVideo(this.props.match.params.videoId);
        this.props.fetchVideos();
    }

    componentWillUnmount() {
        this.props.toggleShowPage();
    }
    
    handleVideoEnded() {
        const newVideoData = {
            views: this.props.video.views + 1,
            id: this.props.video.id
        }
        this.props.patchVideoViews(newVideoData);

        setTimeout(() => {
            this.props.history.push(`/videos/${this.props.videosArray[0].id}`);
        }, 5000);
    }

    render() {
        const { video, currentUser } = this.props;

        if (!video) return null;

        let editButton;
        if (currentUser && currentUser.id === video.uploader_id) {
            editButton = <Link to={`/videos/${video.id}/edit`}>
                            <button className="video-edit-button">Edit</button>
                        </Link>
        } else {
            editButton = <div></div>
        }

        return (
            <div className="video-show">
                <NavBarContainer />

                <SideMenuContainer />

                <div className="video-show-content">

                    <div className="video-show-left-col">
                        <video className="video-player"
                            src={video.videoURL}
                            controls
                            height="500"
                            width="900"
                            autoPlay
                            onEnded={this.handleVideoEnded}
                        ></video>

                        <div className="video-show-details">
                            <div className="video-show-details-top">
                                <div className="video-title-edit">
                                    <div className="video-title">{video.title}</div>
                                    {editButton}
                                </div>

                                <div className="video-stats">
                                    <div className="video-left-stats">
                                        <div className="video-views">{video.views} Views</div>
                                        <FontAwesomeIcon icon={faCircle} className="video-circle-divider" />
                                        <div className="video-creation-date">{video.creationDate}</div>
                                    </div>
                                    
                                    <div className="video-likes"></div>
                                </div>
                            </div>

                            <div className="video-show-details-bottom">
                                <div className="video-uploader-info">
                                    <div className="video-uploader-icon">{video.uploader[0].toUpperCase()}</div>
                                    <div className="video-uploader-username">{video.uploader}</div>
                                </div>
                                
                                <div className="video-description">{video.description}</div>
                            </div>
                        </div>
                    </div>

                    <div className="video-show-right-col">
                        <div className="video-show-index-up-next">Up Next</div>

                        <div className="video-show-index">
                            {this.props.videosArray.map(video => (
                                <Link to={`/videos/${video.id}`} key={video.id} className="video-show-index-link">
                                    <VideoShowIndexItem video={video} key={video.id} />
                                </Link>
                            ))}
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
};

export default withRouter(VideoShow);