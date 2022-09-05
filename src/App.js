import { useEffect, useState, useRef } from "react";
import {
	Routes,
	Route,
	Navigate,
	useHistory,
	useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

import classes from "./App.module.css";

function App() {
	const [showMobileNavbar, setShowMobileNavbar] = useState(false);

	// useLocation gets data about the current page/url the user is visiting
	const location = useLocation();

	const firstRender = useRef(true);

	const getterSetter = (value) => {
		if (value === "get") {
			return showMobileNavbar;
		}
		if (value === "toggle") {
			return setShowMobileNavbar(!showMobileNavbar);
		}
		return showMobileNavbar;
	};

	useEffect(() => {
		firstRender.current.value
			? (firstRender.current.value = false)
			: getterSetter("toggle");
	}, [location]);

	return (
		<div className={classes.app}>
			<Navbar getterSetter={getterSetter}></Navbar>
			<main>
				<Routes>
					<Route path="/" element={<Navigate replace to="/home" />} />
					<Route path="/home" element={<Home />} />
					<Route path="/products" element={<Products />} />
					<Route path="/services" element={<Services />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
