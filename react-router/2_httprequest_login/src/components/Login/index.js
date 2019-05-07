import React from 'react';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
    }

    componentDidMount() {
        if (this.props.authenticated) {
            this.props.history.push('/');
        }
    }

    handleChangUserName = e => {
        this.setState({username: e.target.value});
    }

    handleChangPassword = e => {
        this.setState({password: e.target.value});
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.username === "username" && this.state.password === "password") {
            this.props.loginHandler();
            this.props.history.push('/');
        } else {
            alert("Your login information is incorrect!")
        }
    }
    
    render() {
        const { username, password } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                        <div>
                            <input type="text" value={username} onChange={this.handleChangUserName} />
                        </div>
                    </label>
                </div>
                <div>
                    <label>
                        Password
                        <div>
                            <input type="text" value={password} onChange={this.handleChangPassword} />
                        </div>
                    </label>
                </div>
                <div>
                    <input className="btn" type="submit" value="Submit" />
                </div>
            </form>
        );
    }
}

export default Login;