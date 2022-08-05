import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"}><img className="logo mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"/></Link>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav me-auto mb-2 mb-lg-0">
						<li className="nav-item">
							<Link className="nav-link active" aria-current="page" to={"/"}>Characters</Link>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Comics</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Creators</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Events</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Series</a>
						</li>
						<li className="nav-item">
							<a className="nav-link active" aria-current="page" href="#">Stories</a>
						</li>
					</ul>
					<form className="d-flex">
						<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
						<button className="btn btn-outline-success" type="submit">Search</button>
					</form>
				</div>
			</div>
		</nav>
	);
};
