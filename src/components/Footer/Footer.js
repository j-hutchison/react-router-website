import classes from "./Footer.module.css";
import SocialNavbar from "./SocialNavbar";

const Footer = () => {
	const aboutUsLinks = [
		"How it works",
		"Testimonials",
		"Careers",
		"Investors",
		"Terms of Service",
	];
	const contacttUsLinks = [
		"Contact",
		"Support",
		"Destinations",
		"Sponsorships",
	];
	const videosLinks = ["Submit Video", "Ambassadors", "Agency", "Influencer"];
	const socialMediaLinks = ["Instagram", "Fracebook", "Youtube", "Twitter"];

	const mapLinks = (el) => {
		return (
			<li className={classes["footer-list-item"]}>
				<a className={classes["footer-link"]} href="./home">
					{el}
				</a>
			</li>
		);
	};

	return (
		<footer className={classes.footer}>
			<strong>
				Join the Adventure newsletter to receiver our best vacation deals
			</strong>
			<span>You can subscribe at any time.</span>
			<section className={classes["subscribe"]}>
				<input
					className={classes["subscribe-input"]}
					type="text"
					placeholder="Your Email"
				/>
				<button className={classes["subscribe-btn"]}>Subscribe</button>
			</section>
			<section className={classes["sitemap"]}>
				<div>
					<h3 className={classes["sitemap-heading"]}>About Us</h3>
					<ul className={classes["sitemap-list"]}>
						{aboutUsLinks.map(mapLinks)}
					</ul>
				</div>
				<div>
					<h3 className={classes["sitemap-heading"]}>Contact Us</h3>
					<ul className={classes["sitemap-list"]}>
						{contacttUsLinks.map(mapLinks)}
					</ul>
				</div>
				<div>
					<h3 className={classes["sitemap-heading"]}>Videos</h3>
					<ul className={classes["sitemap-list"]}>
						{videosLinks.map(mapLinks)}
					</ul>
				</div>
				<div>
					<h3 className={classes["sitemap-heading"]}>Social Media</h3>
					<ul className={classes["sitemap-list"]}>
						{socialMediaLinks.map(mapLinks)}
					</ul>
				</div>
			</section>
			<SocialNavbar></SocialNavbar>
		</footer>
	);
};

export default Footer;
