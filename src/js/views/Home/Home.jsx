import React, { useEffect } from "react";
import "./home.css";

//Service
import {getCharacters} from "../../service/marvel.js";

const Home = () => {

	const characters = async () => {
		try {
			const res = await getCharacters();
			const data = await res.json();
			console.log(data);
		} catch(err) {	
			console.log(err);
		}
	}
	
	useEffect = (() => {
		characters();
	}, [])

	return (
		<div>
		
		</div>
	)
}


export default Home;
