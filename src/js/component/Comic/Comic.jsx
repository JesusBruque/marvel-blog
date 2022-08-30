import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./comic.css";

const Comic = (props) => {
    return (
        <div className="card card-comic d-inline-block m-2">
            <img src={props.img} className="card-img"/>
        </div>
    )
}

Comic.propTypes = {
    img: PropTypes.string,
}

export default Comic;