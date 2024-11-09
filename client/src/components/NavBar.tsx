// import React from "react"
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/LoginContext";
import { useContext } from "react";
import Auth from "../utils/auth";
import ThemeContext from "../context/ThemeContext";

const NavBar: React.FC = () => {
	// Add 'Welcome Username' at the end of the navbar if the user is logged in
	const context: any = useContext(UserContext);
	const { loginToken, setLoginToken } = context;

	const themeContext: any = useContext(ThemeContext);
	const { theme, setTheme } = themeContext;

	const navigate = useNavigate();

	async function userLogout() {
		setLoginToken({});
		Auth.logout();
		navigate("/login");
	}
	return (
		<nav className="d-flex container-fluid justify-content-end">
			{theme == "theme-light" ? (
				<div className="text-decoration-none me-3 d-flex align-items-center">
					<div
						className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black"
						onClick={() => setTheme("theme-dark")}
					>
						Change to Dark Theme
					</div>
				</div>
			) : (
				<div className="text-decoration-none me-3 d-flex align-items-center">
					<div
						className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black"
						onClick={() => setTheme("theme-light")}
					>
						Change to Light Theme
					</div>
				</div>
			)}
			{loginToken.username ? (
				<Link
					to="/"
					className="text-decoration-none me-3 d-flex align-items-center"
				>
					<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
						Home
					</div>
				</Link>
			) : (
				""
			)}
			{loginToken.username ? (
				<Link
					to="/login"
					className="text-decoration-none me-3 d-flex align-items-center"
					onClick={userLogout}
				>
					<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
						Logout
					</div>
				</Link>
			) : (
				""
			)}
			{loginToken.username ? (
				<div className="text-decoration-none me-3 d-flex align-items-center">
					{`Welcome back, ${loginToken.username}!`}
				</div>
			) : (
				<Link
					to="/login"
					className="text-decoration-none me-3 d-flex align-items-center"
				>
					<div className="d-flex bg-primary h-50 align-items-center rounded ps-3 pe-3 text-black">
						Login
					</div>
				</Link>
			)}
		</nav>
	);
};

export default NavBar;
