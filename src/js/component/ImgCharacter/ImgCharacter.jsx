import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./imgCharacter.css";

const ImgCharacter = (props) => {

    const notAvailable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg";

    return (
        <div className="card card-character d-inline-block m-2">
            <Link to={`/characters/${props.comicId}/comics`}>
                {/* {
                    props.img !== notAvailable
                        ? <img src={props.img} className="card-img-small"/>
                        : <br></br>
                } */}
                <img src={props.img} className="card-img-small"/>
            </Link>
        </div>
    )
}

ImgCharacter.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string
}

export default ImgCharacter;