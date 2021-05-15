import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/vehiclesdetails.scss";

export const VehicleDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<div id="my-details">
			<img
				className="imgcss card-img-top my-3 container"
				src="https://www.10wallpaper.com/wallpaper/1366x768/1512/Star_wars_fighter-PC_Game_HD_Wallpapers_1366x768.jpg"
				alt=""
			/>
			<div className="card-body">
				<h5 className="cardtextdetails card-title">Description</h5>

				<p className="cardtextdetails card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>

				<Link to="/">
					<button className="btn btn-dark offset">More Details</button>
				</Link>
			</div>
		</div>
	);
};
