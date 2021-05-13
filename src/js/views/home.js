import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.scss";
import MyCard from "../component/mycard.jsx";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [vehicleslist, setVehicleList] = useState([]);

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

	return <div>{vehicleslist}</div>;
};
