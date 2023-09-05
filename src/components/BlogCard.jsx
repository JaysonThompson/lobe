import PropTypes from "prop-types";

function BlogCard({ title, intro, image, releaseDate }) {
	return (
		<div className="blog-card">
			<img src={image} alt={title} className="blog-image" />
			<div className="blog-card-content">
				<h2 className="title">{title}</h2>
				<p className="description">{intro}</p>
				<p className="release-date">Released: {releaseDate}</p>
			</div>
		</div>
	);
}

BlogCard.propTypes = {
	title: PropTypes.string,
	intro: PropTypes.string,
	image: PropTypes.string,
	releaseDate: PropTypes.string,
};

export default BlogCard;
