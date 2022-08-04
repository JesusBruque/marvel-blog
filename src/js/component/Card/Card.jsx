import React from "react";
import { ProgressPlugin } from "webpack";
import "./card.css";

const Card = (props) => {
    return (
        <div className="card card-marvel">
            <img src={props.img} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <a href="#" className="btn btn-primary">More information</a>
            </div>
        </div>
    )
}

export default Card;