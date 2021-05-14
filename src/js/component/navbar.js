import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const [myList, setMyList] = useState([]);

	useEffect(
		() => {
			setMyList(
				store.favourites.map((singleFavourite, index) => {
					console.log(singleFavourite, "marittiello");
					return (
						<li key={index.toString()}>
							{singleFavourite}
							<button>
								<i className="far fa-trash-alt" />
							</button>
						</li>
					);
				})
			);
		},
		[store.favourites]
	);

	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">React Boilerplate</span>
			</Link>

			<Dropdown>
				<Dropdown.Toggle variant="success" id="dropdown-basic">
					Dropdown Button
				</Dropdown.Toggle>

				<Dropdown.Menu>
					<Dropdown.Item href="#/action-1">
						<ul>{myList}</ul>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
