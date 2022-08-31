import classes from "./Gallery.module.css";
import Card from "./Card";

import image1 from "../../assets/images/img-9.jpg";
import image2 from "../../assets/images/img-2.jpg";
import image3 from "../../assets/images/img-3.jpg";
import image4 from "../../assets/images/img-4.jpg";
import image5 from "../../assets/images/img-8.jpg";

const Gallery = (props) => {
	const card1 = {
		img: image1,
		tag: "Adventure",
		text: "Explore the hidden waterfall deep inside the Amazon Jungle",
		size: "lg",
	};
	const card2 = {
		img: image2,
		tag: "Adventure",
		text: "Explore the hidden waterfall deep inside the Amazon Jungle",
		size: "lg",
	};
	const card3 = {
		img: image3,
		tag: "Adventure",
		text: "Explore the hidden waterfall deep inside the Amazon Jungle",
		size: "sm",
	};
	const card4 = {
		img: image4,
		tag: "Adventure",
		text: "Explore the hidden waterfall deep inside the Amazon Jungle",
		size: "sm",
	};
	const card5 = {
		img: image5,
		tag: "Adventure",
		text: "Explore the hidden waterfall deep inside the Amazon Jungle",
		size: "sm",
	};

	return (
		<>
			<h2 className={classes["gallery-heading"]}>
				Check out these EPIC destinations!
			</h2>
			<div className={classes.gallery}>
				<Card data={card1}></Card>
				<Card data={card2}></Card>
				<Card data={card3}></Card>
				<Card data={card4}></Card>
				<Card data={card5}></Card>
			</div>
		</>
	);
};

export default Gallery;
