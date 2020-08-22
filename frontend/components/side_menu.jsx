import React from 'react';
import { Link } from 'react-router-dom';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class SideMenu extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="side-menu">
                <div className="side-menu-links">
                    <Link to="/" replace className="side-menu-link">
                        <FontAwesomeIcon icon={faHome} className="side-menu-link-icon" />
                        <span>Home</span>
                    </Link>

                    <Link to="/videos/new" className="side-menu-link">
                        <FontAwesomeIcon icon={faVideo} className="side-menu-link-icon" />
                        <span>Upload</span>
                    </Link>

                    <a href="https://github.com/AdamKlimmek/" className="side-menu-link" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="side-menu-link-icon" />
                        <span>Github</span>
                    </a>

                    <a href="https://www.linkedin.com/in/adamklimmek/" className="side-menu-link" target="_blank">
                        <FontAwesomeIcon icon={faLinkedin} className="side-menu-link-icon" />
                        <span>LinkedIn</span>
                    </a>
                </div>
            </div>
        )
    }
};

export default SideMenu;