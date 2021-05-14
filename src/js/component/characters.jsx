// import React, { useContext, useEffect, useState } from "react";
// import { Context } from "../store/appContext.js";
// import { CharacterCard } from "./charactercard.jsx";

// const Characters = () => {
// 	console.log("characters");
// 	const { store, actions } = useContext(Context);
// 	const [charactersList, setCharactersList] = useState([]);

// 	useEffect(
// 		() => {
// 			console.log(store.characters);
// 			if (store.characters) {
// 				setCharactersList(
// 					store.characters.map((person, index) => {
// 						console.log(person);
// 						return <CharacterCard key={index.toString()} name={person.name} />;
// 					})
// 				);
// 			}
// 		},
// 		[store.characters]
// 	);

// 	return <div className="text-center mt-5">{charactersList}</div>;
// };
// export default Characters;
