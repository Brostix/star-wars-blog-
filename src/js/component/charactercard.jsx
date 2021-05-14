import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";
const CharacterCard = props => {
	console.log(props.name);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51MD9V7hvsL.jpg" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>

				<Link to="/charactersdetails">
					<button className="btn btn-dark">
						<i className="informations fas fa-info-circle" />
					</button>
				</Link>

				<Button className={"favourites"} variant="warning">
					😍
				</Button>
			</Card.Body>
		</Card>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string,
	personSpecie: PropTypes.string
};

export default CharacterCard;
