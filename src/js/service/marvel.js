const URL = "http(s)://gateway.marvel.com";

export const getCharacters = () => {
    const url = URL + ":443/v1/public/characters?apikey=f4fd4402353df0c24dc86227345cb0ee";
    return fetch(url);
}