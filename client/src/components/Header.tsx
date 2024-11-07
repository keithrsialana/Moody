// import React from "react"
import { Link } from "react-router-dom";
import NavBar from "./NavBar";
const Header = () => {
	return (
		<div className="">
			<Link to={"/"}>
				<img
					src="../../public/favicon.svg"
					alt="Moody Logo"
					className="header-logo"
				/>
			</Link>
			<NavBar />
		</div>
	);
};

export default Header;
