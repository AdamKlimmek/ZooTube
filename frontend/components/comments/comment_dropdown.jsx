import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

class CommentDropdown extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick, false);
    }

    handleClick(e) {
        let verticalEllipsis = document.getElementsByClassName(`vertical-ellipsis-${this.props.comment.id}`)[0];
        let commentDropdown = document.getElementsByClassName(`comment-dropdown-${this.props.comment.id}`)[0];

        if (this.props.isVisible && !verticalEllipsis.contains(e.target) && !commentDropdown.contains(e.target)) {
            this.props.toggleVisibility();
        }
    }

    handleDelete() {
        this.props.deleteComment(this.props.comment.id).then(
            () => this.props.fetchVideo(this.props.match.params.videoId));
    }

    render() {

        let key = this.props.comment.id;

        let setVisibility;
        if (this.props.isVisible) {
            setVisibility = ""
        } else {
            setVisibility = "hidden"
        };

        return (
            <div className={`comment-dropdown-menu ${setVisibility}`}>
                <Link to={`/comments/${this.props.comment.id}/edit`} className="comment-dropdown-button">
                    <FontAwesomeIcon icon={faPen} className="icon-pen"/>
                    <span>Edit</span>
                </Link>

                <div className="comment-dropdown-button">
                    <FontAwesomeIcon icon={faTrash} className="icon-trash"/>
                    <button onClick={this.handleDelete}>Delete</button>
                </div>
            </div>
        )
    }
};

export default withRouter(CommentDropdown);