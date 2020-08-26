import { connect } from 'react-redux';

import { postComment, patchComment, deleteComment } from '../../actions/comments_actions';
import CommentIndex from './comment_index';

const mapStateToProps = (state, ownProps) => {
    let video = ownProps.video;
    let comments = Object.values(state.entities.comments).reverse();

    let currentUser;
    if (state.session.currentUser === null) {
        currentUser = null;
    } else {
        currentUser = state.entities.users[state.session.currentUser];
    }

    return ({
        video: video,
        comments: comments,
        currentUser: currentUser
    })
};

const mapDispatchToProps = (dispatch) => ({
    postComment: (comment) => dispatch(postComment(comment)),
    patchComment: (comment) => dispatch(patchComment(comment)),
    deleteComment: (commentId) => dispatch(deleteComment(commentId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CommentIndex);