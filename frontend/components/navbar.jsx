import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Dropdown from './dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            childVisible: false
        }

        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
        this.toggleDropdownChild = this.toggleDropdownChild.bind(this);
    }

    toggleChildVisibility() {
        if (this.state.childVisible) {
            this.setState({ childVisible: false })
        } else {
            this.setState({ childVisible: true })
        }
    }

    toggleDropdownChild(childState) {
        this.setState({ childVisible: childState });
    }
    
    render() {
        const user = this.props.currentUser;
        
        const loginLink = () => (
            <div>
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
                    toggleDropdownChild={this.toggleDropdownChild}
                />
            </div>
            
        )

        return (
            <div className="navbar">
                <div className="navbar-left">
                    <FontAwesomeIcon icon={faBars} className="navbar-bars-icon"/>
                    <div className="navbar-logo">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>ZooTube</span>
                    </div>
                </div>

                <div className="navbar-search">
                    <p>search</p>
                </div>

                <div className="navbar-right">
                    {(user) ? profileIcon() : loginLink()}
                </div>
            </div>
        )
    }
};

export default NavBar;