import React, { useContext, useState, useEffect } from "react";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/charactercard.jsx";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [charactersList, setCharactersList] = useState([]);

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

	return <div className="text-center mt-5">{charactersList}</div>;
};
