// import React from "react"
import { Link } from "react-router-dom";
import UserContext from "../context/LoginContext";
import { useContext } from "react";
import User from "../interfaces/User";

const NavBar: React.FC = () => {
	// TODO: Add 'Welcome Username' at the end of the navbar if the user is logged in
	const context: any = useContext(UserContext);
	const { loggedInUser, setLoggedInUser } = context;

	async function logout() {
		setLoggedInUser({} as User);
	}
	return (
		<nav className="d-flex container-fluid justify-content-end">
			<Link to="/" className="text-decoration-none me-3 d-flex align-items-center">
				<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
					Home
				</div>
			</Link>
			{loggedInUser.username ? (
				<Link to="/login" className="text-decoration-none me-3 d-flex align-items-center" onClick={logout}				>
					<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
						Logout
					</div>
				</Link>
			) : ("")}
			{loggedInUser.username ? (
				<div className="text-decoration-none me-3 d-flex align-items-center">
					{`Welcome back, ${loggedInUser.username}!`}
				</div>
			) : (
				<Link to="/login" className="text-decoration-none me-3 d-flex align-items-center">
					<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
						Login
					</div>
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
