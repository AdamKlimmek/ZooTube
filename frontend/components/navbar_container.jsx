import { connect } from 'react-redux';

import { signin, signout } from '../actions/session_actions';
import NavBar from './navbar';

const mapStateToProps = (state) => ({
    currentUser: state.entities.users[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({
    // signin: (formUser) => dispatch(signin(formUser)),
    signout: () => dispatch(signout())
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);