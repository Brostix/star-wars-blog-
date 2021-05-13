import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../styles/demo.scss";

export const VehicleDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<Card style={{ width: "18rem" }} className="my-3 container">
			<Card.Img
				className="mt-2"
				variant="top"
				src="https://www.10wallpaper.com/wallpaper/1366x768/1512/Star_wars_fighter-PC_Game_HD_Wallpapers_1366x768.jpg"
			/>
			<Card.Body>
				<Card.Title>Description </Card.Title>
				<Card.Text />
				<Card className="justify-content-start">
					<Link to="/">
						<span className="btn btn-dark" href="#" role="button">
							Go back
						</span>
					</Link>
				</Card>
			</Card.Body>
		</Card>
	);
};
