// import React from "react"
// import User from "../interfaces/User";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/userAPI";
import Auth from "../utils/auth";
// import UserContext from "../context/LoginContext";

const Login: React.FC = () => {
	// input variables using useState
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");
	// const context: any = useContext(UserContext);
	// const { setLoggedInUser } = context;
	const navigate = useNavigate();

	// validate input
	function onUsernameChange(e: any) {
		if (e.target.value == "") setWarning("Your username is empty");
		else setWarning("");

		setUsername(e.target.value);
	}
	function onPasswordChange(e: any) {
		if (e.target.value == "") setWarning("Your password is empty");
		else setWarning("");
		setPassword(e.target.value);
	}
	async function submit(e: any) {
		// prevents refreshing
		e.preventDefault();
		// get data from server
		const data = await login(username,password);
		if (!data.token){
			setWarning("An account with that username already exists");
			return;
		}
		Auth.login(data.token);
		navigate('/');
	}

	return (
		<div className="container text-center pt-5 vh-100">
			<img
				src="Moody_logo.svg"
				alt="Moody Logo"
				className="login-logo"
			/>
			<h1>Log in to Moody</h1>
			<form>
				<div className="warnings mb-4">{warning}</div>
				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpUsername" className="form-label">
							Username
						</label>
					</div>
					<div className="col-7">
						<input
							type="text"
							className="form-control"
							id="inpUsername"
							placeholder="Enter your username"
							value={username}
							onChange={onUsernameChange}
						/>
					</div>
				</div>
				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpPassword" className="form-label">
							Password
						</label>
					</div>
					<div className="col-7">
						<input
							type="password"
							className="form-control"
							id="inpPassword"
							placeholder="Password"
							value={password}
							onChange={onPasswordChange}
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					Don't have an account yet?
				</div>
				<div className="mb-3">
					<Link to="/register">Register here</Link>
				</div>
				<div className="row justify-content-center">
					<button
						type="submit"
						className="btn btn-primary col-3"
						onClick={submit}
					>
						Login
					</button>
				</div>
			</form>
		</div>
	);
};

export default Login;
