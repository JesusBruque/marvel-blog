import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./comic.css";

const Comic = (props) => {

    return (
        <div className="card card-comic d-inline-block m-2">
            <Link to={`/comics/${props.comicId}`}><img src={props.img}/></Link>
        </div>
    )
}

Comic.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string
}

export default Comic;