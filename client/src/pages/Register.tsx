// import React from "react"
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Auth from "../utils/auth";
import { registerUser } from "../api/userAPI";
import UserContext from "../context/LoginContext";


const Register: React.FC = () => {
	// input variables using useState
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirm, setPasswordConfirm] = useState("");
	const [warning, setWarning] = useState("");
	const context:any = useContext(UserContext);
	const {setLoginToken} = context;
	const navigate = useNavigate();

	// // set user login context
	// const context: any = useContext(UserContext);

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
	function onPasswordConfirmChange(e: any) {
		if (e.target.value == "") setWarning("Your confirm password is empty");
		else setWarning("");
		setPasswordConfirm(e.target.value);
	}

	async function submit(e: any) {
		e.preventDefault();
		if (username == "" || password == "" || passwordConfirm == "") {
			setWarning(
				"You have an empty field, please fill it out before registering"
			);
			return;
		}
		// check if the passwords are the same
		try {
			if (password === passwordConfirm) {
				const newUser: any = await registerUser(username, password);
				// if bad response, error
				if (!newUser.token) {
					setWarning("An account with that username already exists");
					return;
				} else {
					setLoginToken({newUser,username});
					Auth.login(newUser.token);
					// redirect user to home page if creation was successful
					navigate("/");
				}
			} else {
				setWarning("Your passwords do not match");
			}
		} catch (error: any) {
			throw new Error("There was a problem with trying to register the user");
		}
	}

	return (
		<div className="container text-center pt-5 vh-100">
			<h1>Welcome to</h1>
			<img src="Moody_text_colored.svg" alt="Moody Logo" className="w-25" />
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
				<div className="row mb-3 justify-content-center">
					<div className="col-3">
						<label htmlFor="inpPasswordConfirm" className="form-label">
							Confirm Password
						</label>
					</div>
					<div className="col-7">
						<input
							type="password"
							className="form-control"
							id="inpPasswordConfirm"
							placeholder="Password"
							value={passwordConfirm}
							onChange={onPasswordConfirmChange}
						/>
					</div>
				</div>
				<div className="row justify-content-center">
					Already have an account?
				</div>
				<div className="mb-3">
					<Link to="/login">Login here</Link>
				</div>
				<div className="row justify-content-center">
					<button
						type="submit"
						className="btn btn-primary col-3"
						onClick={submit}
					>
						Register
					</button>
				</div>
			</form>
		</div>
	);
};

export default Register;
