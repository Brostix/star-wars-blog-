import React, { useContext } from "react";
import { Context } from "../store/appContext";

import "../../styles/home.scss";
import MyCard from "../component/mycard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	console.log("HOME", store.vehicles);
	return store.vehicles.map((element, index) => {
		return <MyCard key={index.toString()} />;
	});
};
