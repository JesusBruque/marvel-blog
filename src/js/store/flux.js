import { getCharacters } from "../service/marvel.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			comic: []
		},
		actions: {
			getCharacter: () => {
				const store = getStore();
				getCharacters()
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ character: json.data.results });
					})
					.catch((err) => {
						console.log(err);
					});
			},
			getComic: () => {
				const store = getStore();
				getCharacters()
					.then(response => {
						return response.json();
					})
					.then(json => {
						setStore({ comic: json.data.results[id].comics})
					})
			}
		}
	};
};

export default getState;
