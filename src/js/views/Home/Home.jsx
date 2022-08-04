import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import "./home.css";

//Service
import {getCharacters} from "../../service/marvel.js";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Home = () => {
	const {store, actions} = useContext(Context);
	console.log(store);

	const [loading, setLoading] = useState(false);

	const characters = async () => {
		try {
			setLoading(true);
			const res = await getCharacters();
			const json = await res.json();
			console.log(json);
			actions.getCharacter(json.data);
		} catch(err) {	
			console.log(err);
		} finally {
			setLoading(false);
		}
	}
	
	useEffect(() => {
		characters();
	}, [])

	return (
		<div className="container-fluid">
			<div className="row text-center container-type">
				<h1 className="character">CHARACTERS</h1>
			</div>
			<div className="row marvel-card">
				{
					loading ? <Spinner /> 
					: store.character.map(marvel => 
					<Card 
						key={marvel.id}
						id={marvel.id}
						img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
						title={marvel.name}
					/>)
				}
			</div>
		</div>
	)
}


export default Home;
