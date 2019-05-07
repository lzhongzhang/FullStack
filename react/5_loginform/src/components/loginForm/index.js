import React from 'react';
import './style.css';

class LoginFrom extends React.Component { 
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",
            isLogin: false
        };
    }

    handleChangUserName = e => {
        this.setState({ username: e.target.value });
    }

    handleChangPassword = e => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = e => {
        e.preventDefault();
        const { username, password} = this.state;
        let today = new Date();
        let tomorrow = new Date();
        let yesterday = new Date();
        let day = today.getDate();
        let month = today.getMonth() + 1;
        let year = today.getFullYear();

        if (username === "today") {
            let todayString = year.toString() + (month.toString().length === 1 ? "0" : "") + 
            month.toString() + (day.toString().length === 1 ? "0" : "") + day.toString();
            if (todayString === password) {
                this.setState({ username: "", password: "", isLogin: true});
            } else {
                alert("Username and password don't match!!");
            }
        } else if (username === "tomorrow") {
            tomorrow.setDate(today.getDate() + 1);
            day = tomorrow.getDate();
            month = tomorrow.getMonth() + 1;
            year = tomorrow.getFullYear();

            let tomorrowString = year.toString() + (month.toString().length === 1 ? "0" : "") + 
            month.toString() + (day.toString().length === 1 ? "0" : "") + day.toString();
            if (tomorrowString === password) {
                this.setState({ username: "", password: "", isLogin: true});
            } else {
                alert("Username and password don't match!");
            }
        } else if (username === "yesterday") {
            yesterday.setDate(today.getDate() - 1);
            day = yesterday.getDate();
            month = yesterday.getMonth() + 1;
            year = yesterday.getFullYear();

            let yesterdayString = year.toString() + (month.toString().length === 1 ? "0" : "") + 
            month.toString() + (day.toString().length === 1 ? "0" : "") + 
            day.toString();
            if (yesterdayString === password) {
                this.setState({ username: "", password: "", isLogin: true});
            } else {
                alert("Username and password don't match!!");
            }
        } else {
            alert("Please enter right username!");
        }
    }

    handleLogout = e => {
        this.setState({ username: "", password: "", isLogin: false })
    }

    render() {
        const { username, password, isLogin} = this.state;
        return (
            !isLogin ? (
            <form className='form' onSubmit={this.handleSubmit}>
                <div>
                    <label>
                        Username
                        <div>
                            <input type="text" value={username} onChange={this.handleChangUserName} />
                        </div>
                        
                    </label>
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
            </form>) : (
                <div className="form">
                    <h2>Congrations, you logged in successfully!</h2>
                    <button className="btn" onClick={this.handleLogout}>Logout</button>
                </div>
            )
        );
    }
}

export default LoginFrom;