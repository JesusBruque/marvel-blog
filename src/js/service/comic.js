import { hash, URL } from "./index.js";

export const getInfoComic = (comicId) => {
    const url = `${URL}:443/v1/public/comics/${comicId}?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}

export const getCharacterByComic = (comicId) => {
    const url = `${URL}:443/v1/public/comics/${comicId}/characters?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}