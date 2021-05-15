import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function MyCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="container my-3" style={{ width: "18rem" }}>
			<Card.Img
				className="imgcss"
				variant="top"
				src="https://p4.wallpaperbetter.com/wallpaper/716/383/649/star-wars-x-wing-at-at-walker-at-st-walker-tie-fighter-hd-wallpaper-preview.jpg"
			/>
			<Card.Body className="cardtext">
				<Card.Title>{props.name}</Card.Title>
				<Card.Text classhName="">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</Card.Text>
				<div className="myButtons">
					<Link to="/vehicledetails">
						<button className="btn btn-dark">
							<i className="informations fas fa-info-circle" />
						</button>
					</Link>

					<button
						id="favorite-button"
						type="button"
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
}

MyCard.propTypes = {
	name: PropTypes.string
};

export default MyCard;
