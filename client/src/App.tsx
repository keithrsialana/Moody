import Header from "./components/Header";
import Footer from "./components/Footer";
import { Outlet } from "react-router-dom";
import "./styles/main.scss";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Includes Popper.js as well
import { MoodProvider } from "./context/MoodContext";
import { UserProvider } from "./context/LoginContext";
import ThemeContext from "./context/ThemeContext";
import { useContext } from "react";
// import React from 'react';

const App: React.FC = () => {
	// console.log(themeContext);
	const themeContext: any = useContext(ThemeContext);
	const { theme } = themeContext;

	return (
		<div className={theme}>
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
	);
};

export default App;
