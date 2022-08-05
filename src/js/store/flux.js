import { getCharacters, getComicsById, getComics } from "../service/marvel.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			comic: [],
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
			},
			getComic: () => {
				const store = getStore();
				if (store.comic.length === 0) {
					getComics()
						.then(response => {
							return response.json();
						})
						.then(json => {
							setStore({ comic: json.data.results });
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
