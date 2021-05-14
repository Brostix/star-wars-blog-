import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const CharacterCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<Card className="container my-3" style={{ width: "18rem" }}>
			<Card.Img variant="top" src="https://images-na.ssl-images-amazon.com/images/I/51MD9V7hvsL.jpg" />
			<Card.Body>
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<div className="myButtons">
					<Link to="/charactersdetails">
						<button className="btn btn-dark">
							<i className="informations fas fa-info-circle" />
						</button>
					</Link>

					<Button
						onClick={() => {
							actions.setFavourite(props.name);
						}}
						className={"favourites"}
						variant="warning">
						😍
					</Button>
				</div>
			</Card.Body>
		</Card>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string
};

export default CharacterCard;
