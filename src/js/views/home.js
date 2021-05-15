import React, { useContext, useState, useEffect, Fragment } from "react";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/charactercard.jsx";
import "../../styles/home.scss";
import MyCard from "../component/mycard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [charactersList, setCharactersList] = useState([]);
	const [vehicleslist, setVehicleList] = useState([]);
	console.log("home");

	useEffect(
		() => {
			if (store.characters) {
				console.log(store);
				setCharactersList(
					store.characters.map((person, index) => {
						return <CharacterCard key={index.toString()} name={person.name} />;
					})
				);
			}
		},
		[store.characters]
	);
	useEffect(
		() => {
			if (store.vehicles) {
				setVehicleList(
					store.vehicles.map((element, index) => {
						return <MyCard key={index.toString()} name={element.name} />;
					})
				);
			}
		},
		[store.vehicles]
	);

	return (
		<Fragment>
			<h1>Characters</h1>
			<div className="mainDiv">{charactersList}</div>
			<h1>Vehicles</h1>
			<div className="mainDiv">{vehicleslist}</div>
		</Fragment>
	);
};
