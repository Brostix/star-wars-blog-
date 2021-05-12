import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CharacterCard } from "./charactercard.jsx";


const Characters = props => {

    const { store, actions } = useContext(Context);
    console.log(store, "lalalal")

    const cards = store.people.map((person, index) => {
        return (<CharacterCard key={index.toString()} />)
    });
    return cards;
};
export default CharacterCard;

//   name={person.name} personBirth={person.birth_year}



