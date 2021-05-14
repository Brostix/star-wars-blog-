import React, { useContext } from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

function MyCard(props) {
	const { store, actions } = useContext(Context);

	return (
		<div className="mycard card my-3 container" style={{ width: "25rem" }}>
			<img
				className="card-img-top my-3 container"
				src="https://p4.wallpaperbetter.com/wallpaper/716/383/649/star-wars-x-wing-at-at-walker-at-st-walker-tie-fighter-hd-wallpaper-preview.jpg"
				alt=""
			/>
			<div className="card-body">
				<h5 className="card-title">{props.name}</h5>
				<p className="card-text">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="buttons">
					<Link to="/vehicledetails">
						<button className="btn btn-dark">More Details</button>
					</Link>
					<button
						className="btn btn-dark"
						onClick={event => {
							actions.setFavorites;
						}}>
						<i className="fas fa-thumbs-up" />
					</button>
				</div>
			</div>
		</div>
	);
}

MyCard.propTypes = {
	name: PropTypes.string
};

export default MyCard;
