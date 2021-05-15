import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";
const CharacterCard = props => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-3" style={{ width: "18rem" }}>
			<Card.Img
				className="imgcss"
				variant="top"
				src="https://images-na.ssl-images-amazon.com/images/I/51MD9V7hvsL.jpg"
			/>
			<Card.Body className="cardtext">
				<Card.Title>{props.name}</Card.Title>
				<Card.Text>
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<div className="myButtons">
					<Link to={"/charactersdetails/".concat(props.name)}>
						<button className="btn btn-dark">
							<i className="informations fas fa-info-circle" />
						</button>
					</Link>

					<button
						type="button"
						id="favorite-button"
						className="btn btn-outline-dark favourites"
						onClick={() => {
							actions.setFavourite(props.name);
						}}>
						{store.favourites.includes(props.name) ? (
							<i className="fas fa-heart" />
						) : (
							<i className="far fa-heart" />
						)}
					</button>
				</div>
			</Card.Body>
		</div>
	);
};

CharacterCard.propTypes = {
	name: PropTypes.string
};

export default CharacterCard;
