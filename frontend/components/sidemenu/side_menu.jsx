import React from 'react';
import { Link } from 'react-router-dom';
 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faVideo, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

class SideMenu extends React.Component {
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
        let modalScreen = document.getElementsByClassName("modal-screen")[0];
        
        if (modalScreen && modalScreen.contains(e.target)) {
            this.props.toggleSideMenu();
        }
    }

    render() {
        let size;
        let modalScreen = null;

        if (this.props.onShowPage && this.props.sideMenuSmall) {
            size = "hidden";
        } else if (this.props.onShowPage && !this.props.sideMenuSmall) {
            size = "modal";
            modalScreen = <div className="modal-screen"></div>;
        } else if (this.props.sideMenuSmall) {
            size = "small";
        } else {
            size = "large";
        }

        return (
            <div className="side-menu">
                <div className={`${size}-side-menu`}>
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
    
                    {modalScreen}
                </div>
    
                <div className={`${size}-spacer`}></div>
            </div>
        )
    }
};

export default SideMenu;