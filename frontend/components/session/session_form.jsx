import React from 'react';
import ReactDOM from 'react-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

class SessionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
    }

    componentDidMount() {
        this.props.clearErrors();
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.processForm(this.state);
    }

    handleDemoLogin() {
        this.setState({ 
            email: 'demo.user@demo.com',
            password: 'password'
        });
        setTimeout(() => {
            this.props.processForm(this.state)
        }, 0)
    }

    render() {
        let usernameField;
        let demoUser;

        if (this.props.formType === "Sign Up") {
            demoUser = null;
            usernameField =
                <div className="session-form-input">
                    <input type='text'
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                    <br />
                </div>
        } else {
            usernameField = null;
            demoUser = <button className="session-form-button" onClick={this.handleDemoLogin} onKeyDown={e => e.key !== 'Enter'}>Demo</button>
        };
    
        return (
            <div className="session-form">
                <div className="session-form-header">
                    <div className="session-form-logo">
                        <FontAwesomeIcon icon={faYoutube} />
                        <span>ZooTube</span>
                    </div>

                    <h2 className="session-form-type">{this.props.formType}</h2>

                    <p className="session-form-prompt">to continue to ZooTube</p>
                </div>

                <form onSubmit={this.handleSubmit}>
                    <div className="session-form-body">
                        {usernameField}

                        <div className="session-form-input">
                            <input type='text'
                                value={this.state.email}
                                placeholder="Email"
                                onChange={this.update('email')}
                                />
                            <br />
                        </div>

                        <div className="session-form-input">
                            <input type='password'
                                value={this.state.password}
                                placeholder="Password"
                                onChange={this.update('password')}
                            />
                            <br />
                        </div>

                        <ul className="session-form-errors-list">
                            {this.props.errors.map((error, i) => (
                                <li className="session-form-error" key={`error-${i}`}>
                                    {error}
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    <div className="session-form-footer">
                        <div className="session-form-links-and-buttons">
                            {this.props.navLink}
                            
                            {demoUser}

                            <button className="session-form-button">Next</button>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default SessionForm;
