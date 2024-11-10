// Static class that handles all the API calls
class Spotify {
	accessToken = "";
	// TODO: Create functions the grab data from the spotify API
	generateAuthCode() {
		const clientID = process.env.S_CLIENTID;
		const redirectURI = process.env.S_REDIRECT || "";
		const scopes = process.env.S_SCOPES || "";
		const authUrl = `https://accounts.spotify.com/authorize?response_type=code&client_id=${clientID}&scope=${encodeURIComponent(
			scopes
		)}&redirect_uri=${encodeURIComponent(redirectURI)}`;

		window.location.href = authUrl;
	}
	
}

export default new Spotify();
