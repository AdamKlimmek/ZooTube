import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class Dropdown extends React.Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick, false);
    }

    componentWillUnmount() {
        document.removeEventListener("click", this.handleClick, false);
    }

    handleClick(e) {
        let userIcon = document.getElementsByClassName("user-icon")[0];
        let userDropdown = document.getElementsByClassName("user-dropdown")[0];
        
        if (this.props.isVisible && !userIcon.contains(e.target) && !userDropdown.contains(e.target)) {
             this.props.toggleVisibility();
        }
    }
    
    render() {
        const user = this.props.user;
    
        let setVisibility;
        if (this.props.isVisible) {
            setVisibility = ""
        } else {
            setVisibility = "hidden"
        };

        return (
            <div className={`user-dropdown ${setVisibility}`}>
                <div className="user-dropdown-header">
                    <div className="user-dropdown-icon user-icon">{user.username[0].toUpperCase()}</div>
                    
                    <div className="user-dropdown-info">
                        <div className="user-dropdown-username">{user.username}</div>
                        <div className="user-dropdown-email">{user.email}</div>
                    </div>
                </div>

                <div className="user-dropdown-links">
                    <a href="/" className="user-dropdown-link">
                        <FontAwesomeIcon icon={faHome} className="user-dropdown-link-icon"/>
                        <span>Home</span>
                    </a>

                    <a href="/" className="user-dropdown-link">
                        <FontAwesomeIcon icon={faVideo} className="user-dropdown-link-icon"/>
                        <span>Upload</span>
                    </a>

                    <a href="https://github.com/AdamKlimmek/" className="user-dropdown-link" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="user-dropdown-link-icon"/>
                        <span>Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/adamklimmek/" className="user-dropdown-link" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="user-dropdown-link-icon"/>
                        <span>LinkedIn</span>
                    </a>

                    <button className="user-dropdown-link" onClick={this.props.signout}>
                        <FontAwesomeIcon icon={faSignOutAlt} className="user-dropdown-link-icon"/>
                        <span>Sign Out</span>
                    </button>
                </div>
            </div>
        )
    }
};

export default Dropdown;