import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js as well
import { MoodProvider } from "./context/MoodContext";
import { UserProvider } from "./context/LoginContext";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";
import { useContext } from "react";
// import React from 'react';

function App() {
	const themeContext = useContext(ThemeContext);
	console.log(themeContext);
	// const {theme} = themeContext;
	return (
		<ThemeProvider>
			{/* <div className={theme}> */}
			<div className="theme-light">
				<UserProvider>
					<Header />
					<MoodProvider>
						<main>
							{/* Renders the matched route component */}
							<Outlet />
						</main>
					</MoodProvider>
					<Footer />
				</UserProvider>
			</div>
		</ThemeProvider>
	);
}

export default App;
