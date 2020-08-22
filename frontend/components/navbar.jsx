import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUserCircle, faVideo } from '@fortawesome/free-solid-svg-icons';

import Dropdown from './dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisible: false
        }

        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    }

    toggleChildVisibility() {
        this.setState({ childVisible: !this.state.childVisible })
    }
    
    render() {
        const user = this.props.currentUser;
        
        const loginLink = () => (
            <div className="user-signin">
                <FontAwesomeIcon icon={faUserCircle} />
                <Link to='/signin'>SIGN IN</Link>
            </div>
        )

        const profileIcon = () => (
            <div className="user">
                <div className="user-icon" onClick={this.toggleChildVisibility}>{user.username[0].toUpperCase()}</div>
                <Dropdown
                    user={this.props.currentUser}
                    signout={this.props.signout}
                    isVisible={this.state.childVisible}
                    toggleVisibility={this.toggleChildVisibility}
                    />
            </div>
        )
        
        
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <FontAwesomeIcon icon={faBars} className="navbar-bars-icon"/>
                    <Link to="/" replace className="navbar-logo">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>ZooTube</span>
                    </Link>
                </div>

                <div className="navbar-search">
                    <p>search</p>
                </div>

                <div className="navbar-right">
                    <Link to="/videos/new">
                        <FontAwesomeIcon icon={faVideo} className="navbar-upload-video" />
                    </Link>

                    {(user) ? profileIcon() : loginLink()}
                </div>
            </div>
        )
    }
};

export default NavBar;