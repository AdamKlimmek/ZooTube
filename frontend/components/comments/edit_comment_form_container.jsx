import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { fetchComment, patchComment, clearErrors } from '../../actions/comments_actions';

const mapStateToProps = (state, ownProps) => {
    let comment = state.entities.comments[ownProps.match.params.commentId];
    let errors = state.errors.commentErrors;

    return ({
        comment: comment,
        errors: errors
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchComment: commentId => dispatch(fetchComment(commentId)),
    patchComment: (formData, comment) => dispatch(patchComment(formData, comment)),
    clearErrors: () => dispatch(clearErrors())
});

class EditCommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            body: this.props.comment.body,
        }

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.props.fetchComment(this.props.match.params.commentId),
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData();
        formData.append('comment[body]', this.state.body);

        this.props.patchComment(formData, this.props.comment).then(
            () => this.props.history.goBack()
        )
    }
    
    render() {
        if (!this.props.comment) return null;
        
        return (
            <div className="edit-comment-form">
                <div className="edit-comment-form-header">
                    <span>Edit Comment</span>
                    <button onClick={e => this.props.history.goBack()}>x</button>
                </div>

                <form className="edit-comment-form-body-errors" onSubmit={this.handleSubmit}>
                    <div className="edit-comment-form-body">
                        <textarea
                            className="edit-comment-form-body-input"
                            value={this.state.body}
                            onChange={this.update('body')}
                        />

                        <ul className="edit-comment-form-errors-list">
                            {this.props.errors.map((error, i) => (
                                <li className="edit-comment-form-error" key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="edit-comment-form-footer">
                        <button className="edit-comment-form-submit-button">Submit</button>
                    </div>
                </form>
            </div>
        )
    }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditCommentForm));