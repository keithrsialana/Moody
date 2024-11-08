import React, { Dispatch, ReactNode, SetStateAction } from "react";

interface ThemeContextType {
	theme: string;
	setTheme: Dispatch<SetStateAction<string>>;
}

interface ThemeProviderProps {
	children: ReactNode;
}

export const ThemeContext = React.createContext<ThemeContextType | undefined>(
	undefined
);

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
	const [theme, setTheme] = React.useState<string>("theme-light");

	return (
		<ThemeContext.Provider value={{ theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContext;
