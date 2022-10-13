import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./imgCharacter.css";

const ImgCharacter = (props) => {

    const notAvailable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg";

    return (
        <div className="card card-character d-inline-block m-2">
            <Link to={`/characters/${props.comicId}/comics`}>
                {
                    props.img !== notAvailable
                        ? <div className="container-card-character">
                            <img src={props.img} className="card-img-small"/>
                            <div className="card-name">{props.name}</div>
                        </div>
                        : <div className="container-card-character">
                            <img src={"https://i.pinimg.com/originals/c9/37/6b/c9376b4acaa7dfdd06cce284aa1084b5.jpg"} className="card-img-small"/>                           
                            <div className="card-name">{props.name}</div>
                        </div>

                }
                
            </Link>
        </div>
    )
}

ImgCharacter.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string,
    name: PropTypes.string
}

export default ImgCharacter;