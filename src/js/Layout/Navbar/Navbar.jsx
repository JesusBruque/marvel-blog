import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"}><img className="logo mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"/></Link>
				<form className="d-flex">
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};
