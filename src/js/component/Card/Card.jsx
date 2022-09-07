import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./card.css";

const Card = (props) => {
    return (
        <Link to={`/characters/${props.id}/comics`} className="card card-marvel">
            <div className="card card-marvel">
                {
                    props.img == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg"
                        ? <img src={"https://i.pinimg.com/originals/c9/37/6b/c9376b4acaa7dfdd06cce284aa1084b5.jpg"} className="card-img" />
                        : <img src={props.img} className="card-img" />
                }
                <div className="container-title">
                    <h5 className="card-title">{props.title}</h5>
                </div>

            </div>
        </Link>
    )
}

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Card;