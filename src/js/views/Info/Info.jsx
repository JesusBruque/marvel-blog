import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";

//Service
import { getComicsById } from "../../service/marvel.js";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

const Info = () => {
    const { id } = useParams();

    const {store, actions} = useContext(Context);
	console.log(store);

    const [loading, setLoading] = useState(false);

    const comicsById = async (id) => {
        try {
            setLoading(true);
            const res = await getComicsById(id);
            const json = await res.json();
            console.log(json);
            actions.getComicByCharacter(json.data);
            actions.getCharacter(json.data);
            console.log(store);
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        comicsById(id);
    }, [])


    return (
        <div className="container info">
            <div className="row text-center">
				<h1 className="character">{store.character.name}</h1>
			</div>
            {
                loading ? <Spinner /> 
                : store.comicByCharacter.map((marvel) => 
                    <ul>
                        <li key={marvel.id}>{marvel.title}</li>
                    </ul>
            )}
        </div>
    )
}

export default Info;