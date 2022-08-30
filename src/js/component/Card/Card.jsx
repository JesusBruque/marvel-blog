import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./card.css";

const Card = (props) => {
    return (
        <div className="card card-marvel">
            <div className="container-title">
                <h5 className="card-title">{props.title}</h5>
            </div>
            <div className="container-img">
                <img src={props.img} className="card-img"/>
            </div>
            <div className="container-button mt-2">
                <Link to={`/characters/${props.id}/comics`} className="button btn btn-secondary">More information</Link>
            </div>
        </div>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Card;