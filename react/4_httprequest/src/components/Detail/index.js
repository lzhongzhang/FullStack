import React from 'react';
import './style.css';


const Detail = props => {
    let len = Object.keys(props).length;
    if (len > 0) {
        return (
            <div className="detail">
                <h3>Details</h3>
                <div className="content">
                    <p>name: {props.name}</p>
                    <p>location: {props.location}</p>
                    <p>following: {props.following}</p>
                    <p>followers: {props.followers}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="detail">
                <h3>Details</h3>
                <div className="content"></div>
            </div>
        )
    }

};

export default Detail;