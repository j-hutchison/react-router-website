import classes from "./Products.module.css";
import bg from "../assets/images/img-1.jpg";

const Products = () => {
	return (
		<div className={classes.products}>
			<h1>PRODUCTS PAGE</h1>
			<img className={classes.bg} src={bg} alt="bg" />
		</div>
	);
};

export default Products;
