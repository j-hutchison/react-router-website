import classes from "./Navbar.module.css";

const Navbar = () => {
	return (
		<header>
			<nav className={classes.navbar}>
				<div className={classes.logo}>
					<span className={classes["logo-text"]}>TRVL</span>
					<i className="fa-brands fa-typo3"></i>
				</div>
				<div className={classes.menu}>
					<ul>
						<li className={classes["menu-item"]}>Home</li>
						<li className={classes["menu-item"]}>Services</li>
						<li className={classes["menu-item"]}>Products</li>
						<li className={classes["menu-item"]}>Sign Up</li>
					</ul>
				</div>
			</nav>
		</header>
	);
};

export default Navbar;
