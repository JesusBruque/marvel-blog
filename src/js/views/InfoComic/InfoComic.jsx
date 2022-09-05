import React, { useEffect, useContext, useState} from "react";
import { Context } from "../../store/appContext.js";
import {useParams} from "react-router-dom";
import { getInfoComic } from "../../service/comic.js";

import "./infoComic.css";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";

const InfoComic = () => {
    const { comicId } = useParams;
    console.log("params", comicId)

    const { store, actions } = useContext(Context);
    console.log(store)

    const [ loading, setLoading ] = useState(false)

    const infoComicById = async () => {
        try {
            setLoading(true);
            const res = await getInfoComic(comicId);
            console.log("res", res)
            const json = await res.json();
            console.log("json", json)
            actions.setInfoComic(json.data);
        } catch (err){
            console.log(err);
        } finally {
            setLoading(false)
        }
        
    }

    useEffect(() => {
        infoComicById();
    }, [])


    return (
        <>
            { loading ? <Spinner /> :
                (
                <div className="container-info-comic">
                    
                    <div className="row my-3">
                        <div className="container-img-info">
                            {/* <img className="img-info" src={`${store.infoComic.thumbnail.path}.jpg`}></img> */}
                        </div>
                        <div className="col ">
                            <div className="title-info-comic justify-content-center d-flex">
                                <div className="name-comic">{store.infoComic.title}</div>
                            </div>
                            <div className="details">
                                <span>Number of pages: {store.infoComic.pageCount}</span>
                            </div>
                            <div className="text-center description-info-comic">
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