import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Context } from "../store/appContext.js";

const CharacterCard = props => {
	const { store, actions } = useContext(Context);
	return (
		<Card style={{ width: "18rem" }}>
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title>Hola</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
				<Button variant="primary">Go somewhere</Button>
			</Card.Body>
		</Card>
	);
};
CharacterCard.propTypes = {
	name: PropTypes.string,
	personSpecie: PropTypes.string,
	personBirth: PropTypes.string
};
export default CharacterCard;
