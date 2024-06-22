/** @format */

import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../Authentication/AuthProvider";

const PrivateNavlink = () => {
	const { user } = useContext(AuthContext);
	if (user) {
		return (
			<>
				
				<NavLink to={"/add-craft-item"}>
					<li>
						<a>Add Craft Item</a>
					</li>
				</NavLink>
				<NavLink to={"/my-art-and-craft"}>
					<li>
						<a>My Art & Craft List</a>
					</li>
				</NavLink>
			</>
		);
	}
};

export default PrivateNavlink;
