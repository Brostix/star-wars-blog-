import { useState } from "react";
import react from "react";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			vehicles: []
		},

		actions: {
			getVehicles: () => {
				let Vehicles = [];
				fetch("https://www.swapi.tech/api/vehicles")
					.then(function(response) {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then(function(responseAsJson) {
						console.log("conosle.log del fetch flux:", responseAsJson);
						// este es el return del fetch "responseAsJson" el cual se le hace un "map" y un ".push" para que entre al array vacio
						// que esta en la linea 12 "Let Vehicles = []"
						responseAsJson.results.map(element => Vehicles.push(element));
						//se abre la funcion "setStore" donde se coloca "vehicles" porque estamos llamando a la linea 7 y ": Vehicles" que es
						//nuestra variable de array vacio donde esta esa lista de vehiculos
						setStore({ vehicles: Vehicles });
					})
					.catch(function(error) {
						"Looks like there was a problem! ", error;
					});
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
