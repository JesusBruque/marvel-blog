import React from "react";
import PropTypes from "prop-types";

import { Navbar } from "./Navbar/Navbar.jsx";

const Layout = (props) => {
    return (
        <>
            <header>
                <Navbar />
            </header>
            <div>
                {props.children}
            </div>                      
        </>
    )
};

Layout.propTypes = {
    children: PropTypes.object
}

export default Layout;