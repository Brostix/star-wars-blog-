const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			characters: [],
			vehicles: [],
			favourites: localStorage.getItem("favourites") ? JSON.parse(localStorage.getItem("favourites")) : [],
			urlCharacter: "https://www.swapi.tech/api/people",
			urlVehicles: "https://www.swapi.tech/api/vehicles",
			details: []
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
				fetch(getStore().urlVehicles)
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						setStore({ vehicles: [...getStore().vehicles, ...responseAsJson.results] });
						if (responseAsJson.next) {
							setStore({ urlVehicles: responseAsJson.next });
							getActions().getVehicles();
						}
					})
					.catch(function(error) {
						"Looks like there was a problem! ", error;
					});
			},

			setFavourite: addFavourite => {
				const favourites = getStore().favourites;

				if (!favourites.includes(addFavourite)) {
					setStore({ favourites: [...favourites, addFavourite] });
					localStorage.setItem("favourites", JSON.stringify(favourites));
				}
			},
			deleteFavourite: indexToDelete => {
				const favourites = getStore().favourites;
				setStore({ favourites: favourites.filter((_, index) => index !== indexToDelete) });
				localStorage.setItem("favourites", JSON.stringify(favourites));
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
