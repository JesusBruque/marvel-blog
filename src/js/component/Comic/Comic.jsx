import React from "react";
import "./comic.css";
import PropTypes from "prop-types";

const Comic = (props) => {
    return (
        <div className="card card-comic">
            <img src={props.img} className="card-img" alt="..."/>
        </div>
    )
}

Comic.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
}

export default Comic;