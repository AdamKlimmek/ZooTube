import React from 'react';
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom';

import NavBarContainer from './navbar/navbar_container';
import SideMenuContainer from './sidemenu/side_menu_container';
import SearchVideoIndexContainer from './search/search_video_index_container';
import VideoIndexContainer from './videos/video_index_container';

const MainComponent = () => {
    return (
        <div className="main-component">
            <NavBarContainer />
            <div className="main-content">
                <SideMenuContainer />

                <Switch>
                    <Route exact path='/search/:query' component={SearchVideoIndexContainer} />
                    <Route exact path='/' component={VideoIndexContainer} />
                    <Redirect to='/' />
                </Switch>
            </div>
        </div>
    );
};

export default MainComponent;