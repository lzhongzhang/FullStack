import React from 'react';
import axios from 'axios';

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detail: null,
            err: null
        };
    }

    componentDidMount() {
        if (!this.props.authenticated) {
            this.props.history.push('/login');
        } else {
            const userId = this.props.match.params.userId;
            axios.get(`https://api.github.com/users/${userId}`)
            .then(res => {
            console.log(res);
            this.setState({detail: res.data, err: null});
            })
            .catch(err => {
            console.log(err);
            this.setState({err: err});
            alert(err);
            });
        }
    }

    render() {
        const { detail } = this.state;
        if (detail) {
            return (
                <div>
                    <h3>Details</h3>
                    <div className="content">
                        <p>name: {detail.name}</p>
                        <p>location: {detail.location}</p>
                        <p>following: {detail.following}</p>
                        <p>followers: {detail.followers}</p>
                    </div>
                    <br />
                    <button onClick={() => {this.props.history.push('/list')}}>Go Back</button>
                </div>
            );
        } else {
            return (
                <h2>
                    No data matched here!
                </h2>
            );
        }
        
    }
}

export default Detail;