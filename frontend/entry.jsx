import React from 'react';
import ReactDOM from 'react-dom';

import configureStore from './store/store';
import Root from './components/root';
// import { signup, signin, signout } from "./actions/session_actions";

document.addEventListener('DOMContentLoaded', () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { currentUser: window.currentUser.id },
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }

    // testing
    // window.signup = signup;
    // window.signin = signin;
    // window.signout = signout;
    window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // testing

    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
});