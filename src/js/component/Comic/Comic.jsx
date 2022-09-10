import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./comic.css";

const Comic = (props) => {

    const notAvailable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg"

    return (
        <div className="card card-comic d-inline-block m-2">
            <Link to={`/comics/${props.comicId}`}>
                {/* {
                    props.img == notAvailable
                        ? <></>
                        : 
                } */}
                <img src={props.img} className="card-img-small"/>
                
            </Link>
        </div>
    )
}

Comic.propTypes = {
    comicId: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Comic;