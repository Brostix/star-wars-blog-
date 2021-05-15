const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			favourites: []
		},

		actions: {
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(response => {
						if (!response.ok) {
							throw new Error("I can't load People!");
						}
						return response.json();
					})
					.then(jsonPeople => {
						setStore({ characters: jsonPeople.results });
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
			}
		}
	};
};

export default getState;
