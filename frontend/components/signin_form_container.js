import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { signin, clearErrors } from '../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
    formType: "Sign In",
    navLink: <Link to="/signup">Create Account</Link>,
    errors: state.errors.sessionErrors,
});

const mapDispatchToProps = dispatch => ({
    processForm: formUser => dispatch(signin(formUser)),
    clearErrors: () => dispatch(clearErrors())
});

export default connect(mapStateToProps, mapDispatchToProps)(SessionForm);