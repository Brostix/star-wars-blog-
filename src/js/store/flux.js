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
			setFavourite: addFavourite => {
				if (!getStore().favourites.includes(addFavourite)) {
					setStore({ favourites: [...getStore().favourites, addFavourite] });
				}
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
						console.log("conosle.log del fetch flux:", responseAsJson);
						// este es el return del fetch "responseAsJson" el cual lo metemos en el setStore llamando vehicles que es mi store (linea 7)
						// y se coloca asi nombre del store: response
						setStore({ vehicles: responseAsJson.results });
						//se abre la funcion "setStore" donde se coloca "vehicles" porque estamos llamando a la linea 7 y ": Vehicles" que es
						//nuestra variable de array vacio donde esta esa lista de vehiculos
					})
					.catch(function(error) {
						"Looks like there was a problem! ", error;
					});
			},

			setFavorites: element => {
				console.log("este es set favorites", setFavorites);
				setStore({ favourites: [...getStore().favourites, element] });
			},
			deleteFavourite: indexToDelete => {
				setStore({ favourites: getStore().favourites.filter((_, index) => index !== indexToDelete) });
			}
		}
	};
};

export default getState;
