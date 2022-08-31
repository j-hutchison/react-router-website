import classes from "./Hero.module.css";
import video1 from "../assets/videos/video-1.mp4";

const Hero = () => {
	return (
		<div className={classes.hero}>
			<video id={classes["hero-bg-video"]} loop autoPlay muted>
				<source src={video1} type="video/mp4" />
			</video>

			<div className={classes["hero-content"]}>
				<h1 className={classes["heading-primary"]}>Adventure Awaits</h1>
				<h2 className={classes["heading-secondary"]}>
					What are you waiting for?
				</h2>
				<div className={classes.cta}>
					<button className={`${classes["btn-transparent"]} ${classes.btn}`}>
						Get Started
					</button>
					<button
						className={`${classes["btn-white"]} ${classes.btn} ${classes["btn-w-icon"]}`}
					>
						<span>Watch Trailer</span>
						<i className="fa-solid fa-circle-play"></i>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
