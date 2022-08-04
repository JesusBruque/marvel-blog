const md5 = require("blueimp-md5");
const URL = "https://gateway.marvel.com";

export const getCharacters = () => {
    let hash = md5("1df8550560530a94fc37acf5a459c55c5320cd0ccf4fd4402353df0c24dc86227345cb0ee");
    const url = `${URL}:443/v1/public/characters?ts=1&apikey=f4fd4402353df0c24dc86227345cb0ee&hash=${hash}`
    console.log(url);
    return fetch(url);
}

