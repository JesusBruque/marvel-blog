import React from "react";
import "./spinner.css";

const Spinner = () => {
    return (
        <div className="d-flex justify-content-center mt-3">
            <div className="spinner-grow" role="status">
              <span className="visually-hidden spinner">Loading...</span>
            </div>
        </div>
    )
}

export default Spinner;