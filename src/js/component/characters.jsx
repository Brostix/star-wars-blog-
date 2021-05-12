import React, { useContext } from "react";
import { Context } from "../store/appContext.js";
import { CharacterCard } from "./charactercard.jsx";


const Characters = props => {

    const { store, actions } = useContext(Context);
    const cards = store.people.map((person, index) => {
        return (<CharacterCard key={index.toString()} name={person.name} />)
    });
    return cards;
};
export default Characters;




