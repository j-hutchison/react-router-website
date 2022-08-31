import classes from "./Card.module.css";

const Card = (props) => {
	const { img, tag, text, size: cardSize } = props.data;

	return (
		<figure className={`${classes[cardSize]} ${classes["card"]}`}>
			<img className={classes["card-image"]} src={img} alt="Sunset" />
			<div className={classes["caption-container"]}>
				<figcaption className={classes["card-caption"]}>{text}</figcaption>
			</div>
			<span className={classes["card-tag"]}>
				<span className={classes["card-tag-text"]}>{tag}</span>
			</span>
		</figure>
	);
};

export default Card;
