import React from "react";
import { Card } from "react-bootstrap";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";

function MyCard(props) {
	return (
		<Card style={{ width: "18rem" }} className="my-3 container">
			<Card.Img
				className="mt-2"
				variant="top"
				src="https://p4.wallpaperbetter.com/wallpaper/716/383/649/star-wars-x-wing-at-at-walker-at-st-walker-tie-fighter-hd-wallpaper-preview.jpg"
			/>
			<Card.Body>
				<Card.Title />
				<Card.Text>
					<h4>{props.name}</h4>
				</Card.Text>
				<Card className="d-flex justify-content-start">
					<Link to="/vehicledetails">
						<button className="btn btn-dark">More Details</button>
					</Link>
				</Card>
			</Card.Body>
		</Card>
	);
}

MyCard.propTypes = {
	name: PropTypes.string
};

export default MyCard;
