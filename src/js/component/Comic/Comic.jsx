import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useParams } from "react-router";

import "./comic.css";

const Comic = (props) => {

    const { comicId } = useParams;

    return (
        <div className="card card-comic d-inline-block m-2">
            <Link to={`/comics/${props.comicId}`}><img src={props.img} className="card-img"/></Link>
        </div>
    )
}

Comic.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string
}

export default Comic;