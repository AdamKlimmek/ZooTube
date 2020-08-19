import React from 'react';

import NavBarContainer from './navbar_container';
import SideMenuContainer from './side_menu_container';

const MainComponent = () => {
    return (
        <div>
            <NavBarContainer />
            <div className="main-app-container">
                <SideMenuContainer />
            </div>
        </div>
    );
};

export default MainComponent;