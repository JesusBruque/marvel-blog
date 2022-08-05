import { getCharacters, getComicsById } from "../service/marvel.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			comicByCharacter: []
		},
		actions: {
			getCharacter: () => {
				const store = getStore();
				if (store.character.length === 0) {
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
				}
			},
			getComicByCharacter: (id) => {
				const store = getStore();
				if (store.comicByCharacter.length === 0) {
					getComicsById(id)
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ comicByCharacter: json.data.results})
						})
						.catch((err) => {
							console.log(err);
						});
				}
			}
		}
	};
};

export default getState;
