import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Services from "./pages/Services";

import classes from "./App.module.css";

function App() {
	return (
		<div className={classes.app}>
			<Navbar></Navbar>
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
