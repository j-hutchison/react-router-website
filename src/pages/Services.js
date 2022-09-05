import classes from "./Services.module.css";
import bg from "../assets/images/img-2.jpg";

const Services = () => {
	return (
		<div className={classes.services}>
			<h1>SERVICES PAGE</h1>
			<img className={classes.bg} src={bg} alt="bg" />
		</div>
	);
};

export default Services;
