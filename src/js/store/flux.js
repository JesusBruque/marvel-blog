const getState = ({ getStore, setStore }) => {
	return {
		store: {
			character: [],
			characterById: [],
			infoComic: [],
			comicByCharacter: [],
			characterByComic: []
		},
		actions: {
			setCharacter: (character) => {
				setStore({character: character.results})
			},
			setCharacterById: (characterById) => {
				setStore({characterById: characterById.results[0]})
			},
			setComicByCharacter: (comicByCharacter) => {
				setStore({comicByCharacter: comicByCharacter.results})
			},
			setInfoComic: (infoComic) => {
				setStore({infoComic: infoComic.results[0]})
			},
			setCharacterByComic: (characterByComic) => {
				setStore({characterByComic: characterByComic.results})
			}

		}
	};
};

export default getState;
