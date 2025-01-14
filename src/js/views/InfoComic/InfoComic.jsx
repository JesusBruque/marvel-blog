import React, { useEffect, useContext, useState } from "react";
import { Context } from "../../store/appContext.js";
import { useParams } from "react-router-dom";
import { getInfoComic, getCharacterByComic } from "../../service/comic.js";

import "./infoComic.css";

//Components
import Spinner from "../../component/Spinner/Spinner.jsx";
import ImgCharacter from "../../component/ImgCharacter/ImgCharacter.jsx";

const InfoComic = () => {
    const { comicId } = useParams();

    const { store, actions } = useContext(Context);

    const [loading, setLoading] = useState(true);
    const [onSaleDate, setOnSaleDate] = useState("");

    const infoComicById = async () => {
        try {

            const res = await getInfoComic(comicId);
            if (res.status == 200) {
                const json = await res.json();
                actions.setInfoComic(json.data);
                setOnSaleDate(json.data.results[0].dates[0].date);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }

    }

    const charactersComic = async () => {
        try {
            const res = await getCharacterByComic(comicId);
            const json = await res.json();
            actions.setCharacterByComic(json.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false)
        }
    }

    const description = () => {
        let originalString = store.infoComic.description
        return (
                originalString.replace(/(<([^>]+)>)/gi, "")
            )
    }

    useEffect(() => {
        infoComicById();
        charactersComic();
    }, [])

    return (
        <>
            {loading ? <Spinner /> :
                (
                    <div className="container-infoComic">
                        <div className="container-info-comic">
                            <div className="container-img-details row my-3">
                                <div className="container-img-info">
                                    <img className="img-info" src={`${store.infoComic.thumbnail.path}.jpg`}></img>
                                </div>
                                <div className="col container-details">
                                    <div className="title-info-comic justify-content-center d-flex">
                                        <div className="name-comic">{store.infoComic.title}</div>
                                    </div>
                                    <div className="details">
                                        {
                                            store.infoComic.pageCount == 0
                                                ? <div></div>
                                                : <span className="mx-2 p-1">Number of pages: {store.infoComic.pageCount}</span>
                                        }
                                        <span className="mx-2 p-1">
                                            Price :{" "}
                                            {"$" + store.infoComic.prices.find((price) => price.type === "printPrice")?.price ||
                                                "-"}
                                        </span>
                                        <span className="mx-2 p-1">
                                            Published :{" "}
                                            {onSaleDate ? new Date(onSaleDate).toLocaleDateString() : "-"}
                                        </span>
                                    </div>
                                    <div className="text-center description-info-comic">
                                        <div className="description">{description()}</div>
                                    </div>
                                </div>
                            </div>
                            <h2>CHARACTERS</h2>
                            <div className="container-comic">

                                {
                                    store.characterByComic.map(marvel =>
                                        <ImgCharacter
                                            key={marvel.id}
                                            name={marvel.name}
                                            comicId={marvel.id}
                                            img={`${marvel.thumbnail.path}/portrait_xlarge.jpg`}
                                        />)
                                }
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    )
};

export default InfoComic;