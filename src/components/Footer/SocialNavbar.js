import { NavLink } from "react-router-dom";
import classes from "./SocialNavbar.module.css";

const SocialNavbar = () => {
	return (
		<nav className={classes["social-navbar"]}>
			<div>
				<NavLink className={(navData) => classes.logo} to="/home">
					<span>TRVL</span>
					<i className="fa-brands fa-typo3"></i>
				</NavLink>
			</div>
			<div className={classes["social-copyright"]}>&#169; Copyright</div>
			<div className={classes["socials"]}>
				<ul className={classes["socials-icons"]}>
					<li className={classes["socials-icon"]}>
						<a href="./home">
							<i class="fa-brands fa-facebook-f"></i>
						</a>
					</li>
					<li className={classes["socials-icon"]}>
						<a href="./home">
							<i class="fa-brands fa-instagram"></i>
						</a>
					</li>
					<li className={classes["socials-icon"]}>
						<a href="./home">
							<i class="fa-brands fa-youtube"></i>
						</a>
					</li>
					<li className={classes["socials-icon"]}>
						<a href="./home">
							<i class="fa-brands fa-twitter"></i>
						</a>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default SocialNavbar;
