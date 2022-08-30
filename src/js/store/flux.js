import { getCharacters } from "../service/marvel.js";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			character: [],
			characterById: [],
			infoComic: [],
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
			setInfoComic: (infoComic) => {
				setStore({infoComic: infoComic.results})
			}
		}
	};
};

export default getState;
