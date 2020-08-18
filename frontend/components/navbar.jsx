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
            </div>
        )

        const profileIcon = () => (
            <div>
                User Profile
                <button onClick={this.props.signout}>SIGN OUT</button>
            </div>
        )

        return (
            <div>
                {(user) ? profileIcon() : loginLink()}
            </div>
        )
    }
};

export default NavBar;