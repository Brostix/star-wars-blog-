import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/vehiclesdetails.scss";

export const VehicleDetails = () => {
	const { store, actions } = useContext(Context);
	const [allVehicleDetails, setAllVehicleDetails] = useState({});
	const VEHICLEDETAILS = useParams();

	useEffect(() => {
		if (store.details.lenght !== 0) {
			let myDetail = store.vehicles.find(vehicle => vehicle.name == VEHICLEDETAILS.name);
			localStorage.setItem("details", JSON.stringify(myDetail.url));
			actions.getDetails(myDetail.url);
		} else {
			const url = localStorage.getItem("details");
			actions.getDetails(JSON.parse(url));
		}
	}, []);

	useEffect(
		() => {
			if (store.details) {
				setAllVehicleDetails(store.details);
			}
		},
		[store.details]
	);

	return allVehicleDetails.properties ? (
		<div className="container card myvehicles">
			<img
				className="imgcss card-img-top my-3 container"
				src="https://www.10wallpaper.com/wallpaper/1366x768/1512/Star_wars_fighter-PC_Game_HD_Wallpapers_1366x768.jpg"
				alt=""
			/>
			<div className="card-body">
				<h5 className=" card-title">{allVehicleDetails.properties}</h5>

				<p className=" card-text" />

				<Link to="/">
					<button className="btn btn-dark offset">
						<i className="fas fa-home" />
					</button>
				</Link>
			</div>
		</div>
	) : (
		""
	);
};
