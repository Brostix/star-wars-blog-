const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			favourites: [],
			urlCharacter: "https://www.swapi.tech/api/people",
			details: []
		},

		actions: {
			getCharacters: () => {
				fetch(getStore().urlCharacter)
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load People!");
						}
						return response.json();
					})
					.then(jsonPeople => {
						setStore({ characters: [...getStore().characters, ...jsonPeople.results] });
						if (jsonPeople.next) {
							setStore({ urlCharacter: jsonPeople.next });
							getActions().getCharacters();
						}
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},

			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ vehicles: responseAsJson.results });
					})
					.catch(function(error) {
						"Looks like there was a problem! ", error;
					});
			},

			setFavourite: addFavourite => {
				if (!getStore().favourites.includes(addFavourite)) {
					setStore({ favourites: [...getStore().favourites, addFavourite] });
				}
			},
			deleteFavourite: indexToDelete => {
				setStore({ favourites: getStore().favourites.filter((_, index) => index !== indexToDelete) });
			},
			getDetails: url => {
				fetch(url)
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load People!");
						}
						return response.json();
					})
					.then(jsonDetails => {
						setStore({ details: jsonDetails.result });
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			}
		}
	};
};

export default getState;
