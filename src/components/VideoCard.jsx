import PropTypes from "prop-types";

function VideoCard({ title, description, videoLink }) {
	return (
		<div className="video-card">
			<video src={videoLink} type="video/mp4" muted autoPlay loop></video>
			<div className="video-card-content">
				<h2 className="title">{title}</h2>
				<p className="description">{description}</p>
			</div>
		</div>
	);
}

VideoCard.propTypes = {
	title: PropTypes.string,
	description: PropTypes.string,
	videoLink: PropTypes.string,
};

export default VideoCard;
