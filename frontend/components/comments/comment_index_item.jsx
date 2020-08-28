import React from 'react';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import CommentDropdown from './comment_dropdown.jsx';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisible: false
        }

        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    }

    toggleChildVisibility() {
        this.setState({ childVisible: !this.state.childVisible })
    }

    render() {
        const { comment, currentUser, patchComment, deleteComment, fetchVideo } = this.props;
      
        let setVisibility;
        if (this.props.currentUser && this.props.comment && this.props.currentUser.id === this.props.comment.user_id) {
            setVisibility = ""
        } else {
            setVisibility = "hidden"
        }; 

        const commentDropdown = (
            <div className={`comment-dropdown comment-dropdown-${comment.id} ${setVisibility}`}>
                <CommentDropdown
                    currentUser={currentUser}
                    comment={comment}
                    patchComment={patchComment}
                    deleteComment={deleteComment}
                    fetchVideo={fetchVideo}
                    isVisible={this.state.childVisible}
                    toggleVisibility={this.toggleChildVisibility}
                />

                <div className={`vertical-ellipsis vertical-ellipsis-${comment.id}`} onClick={this.toggleChildVisibility}>
                    <FontAwesomeIcon icon={faEllipsisV} />
                </div>
            </div>
        )

        return (
            <li className="comment-index-item">
                <div className="comment-info">
                    <div className={`comment-user-icon ${comment.commenterColor}`}>{comment.commenterUsername[0].toUpperCase()}</div>

                    <div className="comment-text">
                        <div className="commenter-username">{comment.commenterUsername}</div>

                        <p className="comment-body">{comment.body}</p>
                    </div>
                </div>

                <div className="comment-buttons">
                    {commentDropdown}
                </div>
            </li>
        )
    }
};

export default withRouter(CommentIndexItem);