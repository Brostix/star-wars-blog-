import React, { useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import Characters from "../component/charactercard.jsx";
import { Context } from "../store/appContext.js";
import CharacterCard from "../component/charactercard.jsx";
export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log(store.characters);
	const cards = store.characters.map((person, index) => {
		return <CharacterCard key={index.toString()} />;
	});
	return <div className="text-center mt-5">{cards}</div>;
};
