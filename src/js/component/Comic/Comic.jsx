import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import "./comic.css";

const Comic = (props) => {

    const notAvailable = "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available/portrait_xlarge.jpg"

    return (
        <div className="card card-comic d-inline-block m-2">
            <Link to={`/comics/${props.comicId}`}>
                {
                    props.img !== notAvailable
                        ? <div className="container container-card-character">
                            <img src={props.img} className="card-img-small front"/>
                            <div className="card-denomination back">{props.title}</div>
                        </div>
                        : <div className="container container-card-character">
                            <img src={"https://i.pinimg.com/originals/c9/37/6b/c9376b4acaa7dfdd06cce284aa1084b5.jpg"} className="card-img-small front"/>                          
                            <div className="card-denomination back">{props.title}</div>
                        </div>
                }
                
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