import React, { useContext, useState, useEffect } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/characters.jsx";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/charactercard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [charactersList, setCharactersList] = useState([]);

	useEffect(
		() => {
			setCharactersList(
				store.characters.map((person, index) => {
					return <CharacterCard key={index.toString()} name={person.name} />;
				})
			);
		},
		[store.characters]
	);

	return <div className="text-center mt-5">{charactersList}</div>;
};
