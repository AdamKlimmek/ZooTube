import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signup, clearErrors } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    formType: "Sign Up",
    navLink: <Link to="/signin" className="session-form-link">Sign in instead</Link>,
    errors: state.errors.sessionErrors
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signup(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);