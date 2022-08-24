import React from "react";
import "./carousel.css";
import PropTypes from "prop-types";

const Carousel = (props) => {
    return (
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active ">
                    <div className="">{props.title}</div>
                    <img src={props.img} className="carousel-img" alt="..." />
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}

Carousel.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Carousel;