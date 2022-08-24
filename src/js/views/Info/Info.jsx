import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";
import Slider from "../../component/Slider/Slider.jsx";

const Info = () => {
    const  {id} = useParams();

    const {store, actions} = useContext(Context);

    const [loading, setLoading] = useState(false);

    const comicsById = async () => {
        try {
            setLoading(true);
            actions.getComicByCharacter(id);
            
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        comicsById();
    }, [])


    return (
        <div className="container info">
            <div className="row text-center">
				<h1 className="character">{store.character.name}</h1>
			</div>
            
            {
                loading ? <Spinner /> 
                : store.comicByCharacter.map((marvel) => 
                <Slider 
						key={marvel.id}
						id={marvel.id}
						img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
						title={marvel.name}
					/>
            )}
        </div>
    )
}

export default Info;