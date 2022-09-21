import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../store/appContext";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {

	const { store, actions } = useContext(Context);
	console.log(store);

	const [ copyCharacter, setCopyCharacter ] = useState([]);

	useEffect(() => {
		setCopyCharacter(store.character)
	}, [store.character])

	const handleChange = (e) => {
		const search = e.target.value
		console.log(search)
		if(search === ""){
			actions.setCharacter(copyCharacter)
		} else {
			const filterCharacter = store.character.filter((marvel) => {
				const nameMarvel = store.character.name;
				if(nameMarvel.toLowerCase().indexOf(search.toLowerCase()) >= 0){
					return character;
				}
			})
			console.log(filterCharacter)
			//actions.setCharacter(filterCharacter)
		}
	} 

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container-fluid">
				<Link to={"/"}><img className="logo mr-3" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png"/></Link>
				<form className="d-flex" onChange={handleChange}>
					<input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
					<button className="btn btn-outline-success" type="submit">Search</button>
				</form>
			</div>
		</nav>
	);
};
