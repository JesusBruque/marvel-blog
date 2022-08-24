import React from "react";
import ReactDom from "react-dom";
import { Carousel } from "react-responsive-carousel";
import PropTypes from "prop-types";

const Slider = (props) => {
    return (
        <Carousel showArrows={true} >
                <div>
                    <img src={props.img} />
                    <p className="legend">Legend 1</p>
                </div>
                
            </Carousel>
    )
};

Slider.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string
}

export default Slider;