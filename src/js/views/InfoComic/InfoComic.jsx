import React, { useEffect, useContext, useState} from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";
import { getInfoComic } from "../../service/marvel.js";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

const InfoComic = () => {
    const { comicId } = useParams;

    const { store, actions } = useContext(Context);

    const [ loading, setLoading ] = useState(true)

    const infoComicById = async () => {
        setLoading(false);
        const res = await getInfoComic(comicId);
        const json = await res.json();
        console.log("aqui: ", json)
        actions.setInfoComic(json.data);
    }

    useEffect(() => {
        infoComicById();
    }, [])


    return (
        <>
            { loading ? <Spinner /> :
                (
                <div className="container-info">
                    
                    <div className="row my-3">
                        <div className="container-img-info">
                            {/* <img className="img-info" src={`${store.infoComic.thumbnail.path}.jpg`}></img> */}
                        </div>
                        <div className="col ">
                            <div className="title-info justify-content-center d-flex">
                                <span>{store.infoComic.name}</span>
                            </div>
                            <div className="text-center description-info">
                                <span className="character">{store.infoComic.description}</span>
                            </div>
                        </div> 
                    </div>
                        
                </div>
                )
            }
        </>
    )
};

export default InfoComic;