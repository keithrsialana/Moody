import Auth from "../utils/auth";

const getUsers = async () => {
	try {
		const response = await fetch("/api/users", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Auth.getToken()}`,
			},
		});
		const data = await response.json();

		if (!response.ok) {
			throw new Error("Invalid user API response, check network tab!");
		}

		return data;
	} catch (err) {
		console.log("Error from data retrieval:", err);
		return [];
	}
};

const getUserByUsername = async (username: string) => {
	try {
		const response = await fetch("/api/user/", {
			headers: {
				"Content-Type": "application/json",
				Authorization: `Bearer ${Auth.getToken()}`,
			},
			body: JSON.stringify({
				username: username,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error("Invalid user API response, check network tab!");
		}

		return data;
	} catch (err) {
		console.log("Error from data retrieval:", err);
		return [];
	}
};

const registerUser = async (username: string, password: string) => {
	try {
		const response = await fetch("/auth/register/", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error("Invalid user API response, check network tab!");
		}

		return data;
	} catch (err) {
		console.log("Error from data retrieval:", err);
		return [];
	}
};

const login = async (username:string, password:string) => {
	try {
		const response = await fetch("/auth/login/", {
			method: 'POST',
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		});

		const data = await response.json();

		if (!response.ok) {
			throw new Error("Invalid user API response, check network tab!");
		}

		return data;
	} catch (err) {
		console.log("Error from data retrieval:", err);
		return [];
	}
}

export { getUserByUsername, getUsers, registerUser };
