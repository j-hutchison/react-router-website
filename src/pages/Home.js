import classes from "./Home.module.css";
import Hero from "../components/Hero";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<div>
			<Hero></Hero>
			<Gallery></Gallery>
			<Footer></Footer>
		</div>
	);
};

export default Home;
