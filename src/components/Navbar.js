import { NavLink } from "react-router-dom";
import classes from "./Navbar.module.css";

const Navbar = (props) => {
	const navStyles = (navData) => {
		return `${classes["menu-item-link"]} ${navData.isActive && classes.active}`;
	};

	const btnNavStyles = (navData) => {
		return `${classes["menu-item-btn"]}`;
	};

	const showMobileNavbar = props.getterSetter();
	const handleMobileMenuBtnClick = () => {
		props.getterSetter("toggle");
	};

	return (
		<header>
			<nav className={classes.navbar}>
				<div>
					<NavLink className={(navData) => classes.logo} to="/home">
						<span>TRVL</span>
						<i className="fa-brands fa-typo3"></i>
					</NavLink>
				</div>
				<div className={classes.heightFix}>
					<div
						onClick={handleMobileMenuBtnClick}
						className={classes["mobile-menubars"]}
					>
						<i className="fa-solid fa-bars"></i>
					</div>
					<ul
						className={`${classes.menu} ${
							showMobileNavbar ? classes.transition : classes["transition-away"]
						}`}
					>
						<li className={classes["menu-item"]}>
							<NavLink className={navStyles} to="/home">
								Home
							</NavLink>
						</li>
						<li className={classes["menu-item"]}>
							<NavLink className={navStyles} to="/services">
								Services
							</NavLink>
						</li>
						<li className={classes["menu-item"]}>
							<NavLink className={navStyles} to="/products">
								Products
							</NavLink>
						</li>
						<li
							className={`${classes["menu-item"]} ${classes["menu-item-center"]}`}
						>
							<NavLink className={btnNavStyles} to="/sign-up">
								Sign Up
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
