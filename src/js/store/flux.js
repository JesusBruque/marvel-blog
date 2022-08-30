import { getCharacters, getCharactersById, getComics, getComicsById } from "../service/marvel.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			characterById: {},
			comic: [],
			comicByCharacter: []
		},
		actions: {
			setCharacter: () => {
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
			setCharacterById: (characterById) => {
				setStore({characterById: characterById.results[0]})
			},
			setComicByCharacter: (comicByCharacter) => {
				setStore({comicByCharacter: comicByCharacter.results})
			},
			setComic: () => {
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
