import React from 'react';

import NavBarContainer from './navbar/navbar_container';
import SideMenuContainer from './sidemenu/side_menu_container';
import VideoIndexContainer from './videos/video_index_container';

const MainComponent = () => {
    return (
        <div>
            <NavBarContainer />
            <div className="main-component">
                <SideMenuContainer />

                <VideoIndexContainer />
            </div>
        </div>
    );
};

export default MainComponent;