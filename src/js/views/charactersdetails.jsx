import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../styles/charactersdetails.scss";

export const CharactersDetails = () => {
	const { store, actions } = useContext(Context);
	const [allDetails, setAllDetails] = useState({});
	const DETAILS = useParams();

	useEffect(() => {
		if (store.details.length !== 0) {
			let myDetail = store.characters.find(character => character.name == DETAILS.name);

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
				setAllDetails(store.details);
			}
		},
		[store.details]
	);

	return allDetails.properties ? (
		<Card id="my-details" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://cdn.alfabetajuega.com/wp-content/uploads/2020/10/baby-yoda-tapabocas-780x405.jpg"
			/>
			<Card.Body>
				<Card.Title>NAME: {allDetails.properties.name}</Card.Title>
				<Card.Text>GENDER: {allDetails.properties.gender}</Card.Text>
				<Card.Text>HEIGHT: {allDetails.properties.height}</Card.Text>

				<Link to="/">
					<button className="btn btn-dark">
						<i className="fas fa-home" />
					</button>
				</Link>
			</Card.Body>
		</Card>
	) : (
		""
	);
};
