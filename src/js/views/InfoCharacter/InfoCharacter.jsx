import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";
import { getCharactersById, getComicsById } from "../../service/character.js";

import "./infoCharacter.css";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";
import Comic from "../../component/Comic/Comic.jsx";

const InfoCharacter = () => {
    const  {id} = useParams();

    const {store, actions} = useContext(Context);

    const [loading, setLoading] = useState(true);

    const charactersById = async () => {
        try { 
            const res = await getCharactersById(id);
            const json = await res.json();
            actions.setCharacterById(json.data);
            
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    const comicsById = async () => {
        try { 
            const res = await getComicsById(id);
            const json = await res.json();
            actions.setComicByCharacter(json.data);
            
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        charactersById();
        comicsById();
    }, [])


    return (
        <>
            { loading ? <Spinner /> :
                (
                <div className="container-info">
                    
                    <div className="row my-3">
                        <div className="container-img-info">
                            <img className="img-info" src={`${store.characterById.thumbnail.path}.jpg`}></img>
                        </div>
                        <div className="col ">
                            <div className="title-info justify-content-center d-flex">
                                <span>{store.characterById.name}</span>
                            </div>
                            <div className="text-center description-info">
                                <span className="character">{store.characterById.description}</span>
                            </div>
                        </div> 
                    </div>

                    <h2>COMICS</h2>
                    <div className="container-comic">
                    
                        {
                            store.comicByCharacter.map(marvel => 
                            <Comic
                                key={marvel.id}
                                comicId={marvel.id}
                                img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
                            />)
                        }
                        
                    </div>
                        
                </div>
                )
            }
        </>
        
    )
}

export default InfoCharacter;