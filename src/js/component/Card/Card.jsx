import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Heart from "react-heart";

import "./card.css";

const Card = (props) => {

    const [active, setActive] = useState(false);

    return (
        
            <div className="card card-marvel">
                <div className="heart">
                    <Heart isActive={active} onClick={() => setActive(!active)} style = {{fill: active ? "red" : "black", stroke: active ? "black":"white"}} animationScale = {1.2} animationTrigger = "both" animationDuration = {.2} className = {`customHeart${active ? " active": ""}`}/>
                </div>
                <Link to={`/characters/${props.id}/comics`} className="card card-marvel">
                {
                    props.img == "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg"
                        ? <img src={"https://i.pinimg.com/originals/c9/37/6b/c9376b4acaa7dfdd06cce284aa1084b5.jpg"} style={{opacity: 0.7}} className="card-img" />
                        : <img src={props.img} className="card-img" />
                }
                <div className="container-title">
                    <h5 className="card-title">{props.title}</h5>
                </div>
                </Link>

            </div>
        
    )
}

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Card;