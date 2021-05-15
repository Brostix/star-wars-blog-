import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
import "../../styles/charactersdetails.scss";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [myList, setMyList] = useState([]);

	useEffect(
		() => {
			setMyList(
				store.favourites.map((singleFavourite, index) => {
					console.log(singleFavourite, "marittiello");
					return (
						<li className="string-favorite" key={index.toString()}>
							{singleFavourite}
							<button
								className="button-delete"
								onClick={() => {
									console.log("delete", index);
									actions.deleteFavourite(index);
								}}>
								<i className="fab fa-galactic-republic" />
							</button>
						</li>
					);
				})
			);
		},
		[store.favourites]
	);

	return (
		<nav id="navbar" className="navbar  mb-3">
			<Link to="/">
				<img
					src="https://tendencybook.com/wp-content/uploads/2019/08/star-wars-.png"
					className="navbar-brand mb-0"
				/>
			</Link>

			<Dropdown>
				<Dropdown.Toggle variant="dark" id="dropdown-basic">
					<i className="fab fa-jedi-order" />
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item id="dropdown-favorite" href="#/action-1">
						<ul>{myList}</ul>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
