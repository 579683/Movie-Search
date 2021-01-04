import React from 'react';
import {Link} from "react-router-dom";
import "./Navigation.css";

const Navigation = props => {
    return (
        <div className="nav-main">
            <div className="nav-content">
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>/</p>
                <p>{props.movieInfos}</p>
            </div>
        </div>
    );
};

export default Navigation;