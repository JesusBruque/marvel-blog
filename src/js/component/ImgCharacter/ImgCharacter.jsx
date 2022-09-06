import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./imgCharacter.css";

const ImgCharacter = (props) => {

    return (
        <div className="card card-character d-inline-block m-2">
            <Link to={`/characters/${props.comicId}/comics`}><img src={props.img} className="card-img"/></Link>
        </div>
    )
}

ImgCharacter.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string
}

export default ImgCharacter;