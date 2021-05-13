import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function MyCard(props) {
	return (
		<div className="mycard card my-3 container" style={{ width: "25rem" }}>
			<img
				className="card-img-top"
				src="https://p4.wallpaperbetter.com/wallpaper/716/383/649/star-wars-x-wing-at-at-walker-at-st-walker-tie-fighter-hd-wallpaper-preview.jpg"
				alt=""
			/>
			<div className="card-body">
				<h5 className="card-title text-white">{props.name}</h5>
				<p className="card-text text-white">
					Some quick example text to build on the card title and make up the bulk of the cards content.
				</p>
				<div className="buttons">
					<Link to="/vehicledetails">
						<button className="btn btn-dark">More Details</button>
					</Link>
					<button className="btn btn-dark">
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
