import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import { getCharacters } from "../../service/character.js";
import "./character.css";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Character = () => {
	const {store, actions} = useContext(Context);
	
	const [loading, setLoading] = useState(false);

	const characters = async () => {
		try {
			setLoading(true);
			const res = await getCharacters();
            const json = await res.json();
			actions.setCharacter(json.data);
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


export default Character;