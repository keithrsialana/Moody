// import React from "react"
// TODO: Implement context stuff
// TODO: Import User
// import User from "../interfaces/User";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
	// input variables using useState
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [warning, setWarning] = useState("");

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
		try {
			const response = await fetch(`/api/user/${username}`, {
				headers: {
					"Content-Type": "application/json",
				},
			});

			// if bad response, error
			if (!response.ok) {
				throw new Error("Invalid user API response, check network tab!");
			}
			// else, validate information
			const data = response.json();

			if (await validateLogin(username, password))
				// TODO: Do something here
				console.log(data);
			else
				setWarning("Wrong username or password");


		} catch (error) {
			console.warn({ message: "there was an error", error: error });
		}
	}

	async function validateLogin(user: string, pass: string):Promise<boolean> {
		try {
			const response = await fetch("/api/login", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({
					username: user,
					password: pass,
				}),
			});

			const data = response.json();
			console.log(`validateLogin = ${data}`);
			
			// TODO: might not be the right return
			if (response.ok) return true;
			else return false;

		} catch (error) {
			throw new Error(
				"Something went wrong with validating the login information"
			);
		}
	}

	return (
		<div className="container text-center pt-5 vh-100">
			<img
				src="../../public/Moody_logo.svg"
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
