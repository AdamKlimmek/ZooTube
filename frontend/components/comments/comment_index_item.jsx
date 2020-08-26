import React from 'react';

class CommentIndexItem extends React.Component {
    constructor(props) {
        super(props);
            
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit() {

    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id);
    }
    
    render() {
        const { comment, currentUser } = this.props;

        let editButton;
        let deleteButton;
        if (currentUser && currentUser.id === comment.user_id) {
            // editButton =

            deleteButton =
                <button className="comment-delete-button" onClick={this.handleDelete}>Delete</button>
        } else {
            editButton = <div></div>
            deleteButton = <div></div>
        }

        return (
            <li className="comment-index-item">
                <div className="comment-info">
                    <div className="comment-user-icon">{comment.commenterUsername[0].toUpperCase()}</div>

                    <div className="comment-text">
                        <div className="commenter-username">{comment.commenterUsername}</div>

                        <p className="comment-body">{comment.body}</p>
                    </div>
                </div>

                <div className="comment-buttons">
                    {editButton}
                    {deleteButton}
                </div>
            </li>
        )
    }
};

export default CommentIndexItem;