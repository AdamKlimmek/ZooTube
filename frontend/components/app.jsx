import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import { AuthRoute, ProtectedRoute } from '../util/route_util';
import SigninFormContainer from './session/signin_form_container';
import SignupFormContainer from './session/signup_form_container';
import VideoShowContainer from './videos/video_show_container';
import CreateVideoFormContainer from './videos/create_video_form_container';
import EditVideoFormContainer from './videos/edit_video_form_container';
import MainComponent from './main_component';

const App = () => (
    <div>
        <Switch>
            <AuthRoute path="/signin" component={SigninFormContainer} />
            <AuthRoute path="/signup" component={SignupFormContainer} />
            <ProtectedRoute path="/videos/new" component={CreateVideoFormContainer} />
            <ProtectedRoute path="/videos/:videoId/edit" component={EditVideoFormContainer} />
            <Route exact path="/videos/:videoId" component={VideoShowContainer} />
            <Route path='/' component={MainComponent} />
            <Redirect to='/' />
        </Switch> 
    </div>
);

export default App;