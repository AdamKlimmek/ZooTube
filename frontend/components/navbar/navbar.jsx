import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faBars, faUserCircle, faVideo, faSearch } from '@fortawesome/free-solid-svg-icons';

import Dropdown from './dropdown';

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchField: "",
            childVisible: false
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        this.toggleChildVisibility = this.toggleChildVisibility.bind(this);
    }

    handleInput(e) {
        this.setState({ searchField: e.currentTarget.value });
    }

    handleSearch(e) {
        e.preventDefault();
        
        if (this.state.searchField !== "") {
            this.props.history.push(`/search/${this.state.searchField}`)
        }

        this.setState({ searchField: "" });
    }

    toggleChildVisibility() {
        this.setState({ childVisible: !this.state.childVisible })
    }

    render() {
        const currentUser = this.props.currentUser;
        
        const loginLink = () => (
                <Link to='/signin' className="user-signin">
                    <FontAwesomeIcon icon={faUserCircle} />
                    <div>SIGN IN</div>
                </Link>
        )

        const profileIcon = () => (
            <div className="user">
                <div className="user-icon" onClick={this.toggleChildVisibility}>{currentUser.username[0].toUpperCase()}</div>
                <Dropdown
                    currentUser={this.props.currentUser}
                    signout={this.props.signout}
                    isVisible={this.state.childVisible}
                    toggleVisibility={this.toggleChildVisibility}
                    />
            </div>
        )
        
        return (
            <div className="navbar">
                <div className="navbar-left">
                    <FontAwesomeIcon icon={faBars} className="navbar-bars-icon" onClick={e => this.props.toggleSideMenu()}/>
                    <Link to="/" replace className="navbar-logo">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>ZooTube</span>
                    </Link>
                </div>

                <div className="navbar-search">
                    <form className="navbar-search-input" onSubmit={this.handleSearch}>
                        <input type="text"
                            placeholder="Search"
                            value={this.state.searchField}
                            onChange={this.handleInput}
                        />

                        <input type="submit" className="hidden"/>
                    </form>

                    <button className="navbar-search-button" onClick={this.handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className="navbar-right">
                    <Link to="/videos/new">
                        <FontAwesomeIcon icon={faVideo} className="navbar-upload-video" />
                    </Link>

                    {(currentUser) ? profileIcon() : loginLink()}
                </div>
            </div>
        )
    }
};

export default withRouter(NavBar);