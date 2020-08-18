import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        const user = this.props.currentUser;
        
        const loginLink = () => (
            <div>
                <Link to='/signin'>SIGN IN</Link>
                {/* <button onClick={this.props.signout}>SIGN OUT</button> */}
            </div>
        )

        const profileIcon = () => (
            <div className="user-profile">
                <div className="user-profile-icon">{user.username[0]}</div>
                <div className="user-profile-dropdown-menu">
                    I'm a dropdown menu
                </div>
            </div>
            
        )

        return (
            <div className="navbar">
                <div className="navbar-left">
                    <p>left</p>
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