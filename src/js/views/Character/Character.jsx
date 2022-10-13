import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import { getCharacters } from "../../service/character.js";
import { Pagination } from '@mui/material';

import "./character.css";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Character = () => {
	const { store, actions } = useContext(Context);
	const [currentPage, setCurrentPage] = useState(1)
	const [loading, setLoading] = useState(false);
	
	
	const characters = async () => {
		try {
			setLoading(true);
			const res = await getCharacters(currentPage)
			const json = await res.json();
			actions.setCharacter(json.data);
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		characters();
	}, [currentPage])

	return (
		<>
			{
				loading ? <Spinner />
					: <div className="container-fluid">
						<div className="d-flex">
							<Pagination 
								className="mx-auto my-4" 
								count={15} 
								showFirstButton 
								showLastButton
								page={currentPage}
								defaultPage={1}
								onChange={(event, value) => setCurrentPage(value)}
							/>
						</div>
						<div className="row marvel-card">

							{
								store.character.map(marvel =>
									<Card
										key={marvel.id}
										id={marvel.id}
										img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
										title={marvel.name}
									/>)
							}
						</div>
						<div className="d-flex">
							<Pagination 
								className="mx-auto mb-4"
								count={15} 
								showFirstButton 
								showLastButton
								page={currentPage}
								defaultPage={1}
								onChange={(event, value) => setCurrentPage(value)}
							/>
						</div>

					</div>
			}
		</>
	)
}


export default Character;