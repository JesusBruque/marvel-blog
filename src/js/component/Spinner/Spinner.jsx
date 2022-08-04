import React from "react";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;