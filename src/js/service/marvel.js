const md5 = require("blueimp-md5");
const URL = "https://gateway.marvel.com";
let hash = md5("1df8550560530a94fc37acf5a459c55c5320cd0ccf4fd4402353df0c24dc86227345cb0ee");

export const getCharacters = () => {
    const url = `${URL}:443/v1/public/characters?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    console.log(url);
    return fetch(url);
}

export const getComicsById = (id) => {
    const url = `${URL}:443/v1/public/characters/${id}/comics?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    return fetch(url);
}

export const getComics = () => {
    const url = `${URL}:443/v1/public/comics?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`;
    console.log(url);
    return fetch(url);
}