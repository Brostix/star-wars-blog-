import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import { Context } from "../store/appContext";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
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
						<ul>
							<li>{store.favourites}</li>
						</ul>
					</Dropdown.Item>
				</Dropdown.Menu>
			</Dropdown>
		</nav>
	);
};
