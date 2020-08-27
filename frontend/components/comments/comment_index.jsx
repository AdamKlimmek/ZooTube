import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import CommentIndexItem from './comment_index_item';

class CommentIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: "",
            inputFocused: false
        }

        this.handleFocus = this.handleFocus.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleFocus() {
            this.setState({ inputFocused: true });
    }

    handleCancel() {
        this.setState({ body: "", inputFocused: false });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.postComment({
            body: this.state.body,
            video_id: this.props.video.id
        });

        this.setState({ body: "", inputFocused: false });
    }
    
    render() {
        const { video, comments, currentUser } = this.props;

        let commentCountText;
        if (comments.length === 1) {
            commentCountText = "Comment"
        } else {
            commentCountText = "Comments"
        }

        let commenterIcon;
        let clickable;
        let placeholderText;
        if (currentUser) {
            commenterIcon = <div className="comment-user-icon">{currentUser.username[0].toUpperCase()}</div>
            clickable = "clickable"
            placeholderText = "Add a public comment..."
        } else {
            commenterIcon = <FontAwesomeIcon icon={faUserCircle} className="unknown-user-icon"/>
            clickable = "not-clickable"
            placeholderText = "Sign in to leave a comment..."
        }

        let commentButtonActivity;
        let cancelButtonActivity;
        if (!this.state.inputFocused) {
            commentButtonActivity = "hidden"
            cancelButtonActivity = "hidden"
        } else {
            if (this.state.body === "") {
                commentButtonActivity = ""
                cancelButtonActivity = ""
                document.getElementsByClassName("comment-form-comment-button")[0].disabled = true;
            } else {
                commentButtonActivity = ""
                cancelButtonActivity = ""
                document.getElementsByClassName("comment-form-comment-button")[0].disabled = false;
            }
        }

        return (
            <div className="comment-index">
                <div className="comments-count">{comments.length} {commentCountText}</div>

                <div className={`comment-form ${clickable}`}>
                    <form className="comment-form-top" onSubmit={this.handleSubmit}>
                        {commenterIcon}

                        <div className="comment-form-body-input-container">
                            <input type="text"
                                className="comment-form-body-input"
                                value={this.state.body}
                                onFocus={this.handleFocus}
                                onChange={this.update('body')}
                                placeholder={placeholderText}
                            />
                        </div>

                        <input type='submit' className='comment-form-submit' />
                    </form>

                    <div className="comment-form-bottom">
                        <button className={`comment-form-cancel-button ${commentButtonActivity}`} onClick={this.handleCancel}>CANCEL</button>

                        <button className={`comment-form-comment-button ${cancelButtonActivity}`} onClick={this.handleSubmit}>COMMENT</button>
                    </div>
                </div>
            
                <ul className="comment-index-list">
                    {comments.map(comment => (
                        <CommentIndexItem
                            comment={comment}
                            currentUser={currentUser}
                            deleteComment={this.props.deleteComment}
                            fetchVideo={this.props.fetchVideo}
                            key={comment.id} />
                    ))}
                </ul> 
            </div>
        )
    }
};

export default CommentIndex;