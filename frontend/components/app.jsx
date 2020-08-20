import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SigninFormContainer from './signin_form_container';
import SignupFormContainer from './signup_form_container';
import CreateVideoFormContainer from './videos/create_video_form_container';
import MainComponent from './main_component';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/signin" component={SigninFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/videos/new" component={CreateVideoFormContainer} />
            <Route path='/' component={MainComponent} />
            <Redirect to='/' />
        </Switch> 
    </div>
);

export default App;