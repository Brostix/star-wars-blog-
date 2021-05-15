import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";

import "../../styles/charactersdetails.scss";

export const CharactersDetails = () => {
	const { store, actions } = useContext(Context);

	return (
		<Card id="my-details" style={{ width: "18rem" }}>
			<Card.Img
				variant="top"
				src="https://cdn.alfabetajuega.com/wp-content/uploads/2020/10/baby-yoda-tapabocas-780x405.jpg"
			/>
			<Card.Body>
				<Card.Title>CHARACTER NAME</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>

				<Link to="/">
					<button className="btn btn-dark">
						<i className="fas fa-home" />
					</button>
				</Link>
			</Card.Body>
		</Card>
	);
};
//---------------------------------------
// <Card style={{ width: "18rem" }} className="my-3 container">
// 	<Card.Img
// 		className="mt-2"
// 		variant="top"
// 		src="https://images-na.ssl-images-amazon.com/images/I/51MD9V7hvsL.jpg"
// 	/>
// 	<Card.Body>
// 		<Card.Title>Description </Card.Title>
// 		<Card.Text />
// 		<Card className="justify-content-start">
// 			<Link to="/">
// 				<button className="btn btn-dark" href="#" role="button">
// 					HOME
// 				</button>
// 			</Link>
// 		</Card>
// 	</Card.Body>
// </Card>
//-----------------------------------------
