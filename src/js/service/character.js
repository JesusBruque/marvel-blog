import { hash, URL } from "./index.js";

export const getCharacters = (currentPage) => {
    const page = (currentPage - 1) * 100
    const url = `${URL}:443/v1/public/characters?orderBy=name&limit=100&offset=${page}&ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}

export const getCharactersById = (id) => {
    const url = `${URL}:443/v1/public/characters/${id}?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}

export const getComicsById = (id) => {
    const url = `${URL}:443/v1/public/characters/${id}/comics?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}

