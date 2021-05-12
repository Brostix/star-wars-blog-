import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";

function MyCard(props) {
	return (
		<Card style={{ width: "18rem" }} className="my-3 container">
			<Card.Img variant="top" src="holder.js/100px180" />
			<Card.Body>
				<Card.Title />
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<Card className="justify-content-center">
					<Button variant="btn btn-dark">More details</Button>
					<Button variant="btn btn-dark">❤</Button>
				</Card>
			</Card.Body>
		</Card>
	);
}

MyCard.propTypes = {
	name: PropTypes.string
};

export default MyCard;
