import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";
import { getCharactersById, getComicsById } from "../../service/marvel.js";

import "./info.css";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";
import Comic from "../../component/Comic/Comic.jsx";

const Info = () => {
    const  {id} = useParams();

    const {store, actions} = useContext(Context);
    console.log(store);

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
                    <div className="row text-center title-info">
                        <h1 className="character">{store.characterById.name}</h1>
                    </div>
                    <div className="row">
                        <div className="col-6">
                            <img className="img-info" src={`${store.characterById.thumbnail.path}.jpg`}></img>
                        </div>
                        <div className="container-comic">
                            <div className="col-6 row horizontal-scroll">
                            {
                                store.comicByCharacter.map(marvel => 
                                <Comic 
                                    key={marvel.id}
                                    id={marvel.id}
                                    img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
                                />)
                            }
                            </div>
                        </div>
                        
                    </div>
                        
                </div>
                )
            }

            {/* {
                    loading ? <Spinner /> 
                    : store.comicByCharacter.map((marvel) => 
                    <Slider 
                            key={marvel.id}
                            id={marvel.id}
                            img={`${marvel.thumbnail.path}/portrait_fantastic.jpg`}
                            title={marvel.name}
                        />
                )} */}
        </>
        
    )
}

export default Info;