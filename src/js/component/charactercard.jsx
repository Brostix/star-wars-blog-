import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";

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

				<Button className={"informations"} variant="success">
					More informations
				</Button>

				<Button className={"favourites"} variant="danger">
					add to favourites
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
