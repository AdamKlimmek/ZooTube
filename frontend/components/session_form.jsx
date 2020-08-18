import React from 'react';

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
            email: 'demo.user@demo.io',
            password: 'password'
        });
        setTimeout(() => {
            this.props.processForm(this.state)
        }, 0)
    }

    render() {
        // debugger
        let usernameField;
        let demoUser;

        if (this.props.formType === "Sign Up") {
            demoUser = null;
            usernameField =
                <div>
                    <input type='text'
                        value={this.state.username}
                        placeholder="Username"
                        onChange={this.update('username')}
                    />
                    <br />
                </div>
        } else {
            usernameField = null;
            demoUser = <button onClick={this.handleDemoLogin}>Demo</button>
        };
    
        return (
            <div>
                <h2>{this.props.formType}</h2>
                <form onSubmit={this.handleSubmit}>
                    {usernameField}

                    <div>
                        <input type='text'
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.update('email')}
                            />
                        <br />
                    </div>

                    <div>
                        <input type='password'
                            value={this.state.password}
                            placeholder="Password"
                            onChange={this.update('password')}
                        />
                        <br />
                    </div>

                    <ul>
                        {this.props.errors.map((error, i) => (
                            <li key={`error-${i}`}>
                                {error}
                            </li>
                        ))}
                    </ul>
                    
                    {this.props.navLink}
                    
                    {demoUser}

                    <button>Next</button>
                </form>
            </div>
        );
    }
}

export default SessionForm;
