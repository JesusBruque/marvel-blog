import React, { useEffect, useContext, useState} from "react";
import { Context } from "../../store/appContext.js";
import "./comic.css";

//Service
import { getComics } from "../../service/marvel.js";

//Components
import Card from "../../component/Card/Card.jsx";
import Spinner from "../../component/Spinner/Spinner.jsx";

const Comic = () => {
    const { store, actions} = useContext(Context);
    console.log(store);

    const [loading, setLoading] = useState(false);

    const comics = async () => {
        try {
            setLoading(true);
            const res = await getComics();
            const json = await res.json();
            console.log(json);
            actions.setComic(json.data);
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        comics();
    }, [])

    return(
        <div className="container-fluid">
        <div className="row text-center container-type">
            <h1 className="character">COMICS</h1>
        </div>
        <div className="row marvel-card">
            {
                loading ? <Spinner /> 
                : store.comic.map(marvel => 
                <Card 
                    key={marvel.id}
                    id={marvel.id}
                    img={`${marvel.thumbnail.path}/portrait_large.jpg`}
                    title={marvel.title}
                />)
            }
        </div>
    </div>
    )
}

export default Comic;