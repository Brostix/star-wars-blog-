import { useState } from "react";
import react from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: [],
			favorites: []
		},

		actions: {
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

			//se crea ser favorites porque es mi funcion de guardado en el store de flux en donde le digo
			//                          \/-- funcion de guardado con los 3 puntos que es un spread operator que saca uno a uno los elementos y le decimos que los meta en favorites, cada elemento
			//setStore({favorites: [...getStore().favorites, element] })
			//             /\--caja donde se esta guardando los elementos en el store de mi >>flux<<
			setFavorites: element => {
				console.log("este es set favorites", setFavorites);
				setStore({ favorites: [...getStore().favorites, element] });
			}

			// // Use getActions to call a function within a fuction
			// exampleFunction: () => {
			//     getActions().changeColor(0, "green");
			// },
			// loadSomeData: () => {

			// 	/**
			// 		fetch().then().then(data => setStore({ vehicles: data.bar }))
			// 	*/
			// },
			// changeColor: (index, color) => {
			//     //get the store
			//     const store = getStore();

			//     //we have to loop the entire demo array to look for the respective index
			//     //and change its color
			//     const demo = store.demo.map((elm, i) => {
			//         if (i === index) elm.background = color;
			//         return elm;
			//     });

			//     //reset the global store
			//     setStore({ vehicles: [demo] });
			// }
		}
	};
};

export default getState;
