import PropTypes from "prop-types";

function VideoCard({ title, description, videoLink }) {
	return (
		<div className="video-card">
			<video src={videoLink} type="video/mp4" muted autoPlay loop></video>
			<h3 className="title">{title}</h3>
			<p className="description">{description}</p>
		</div>
	);

	VideoCard.propTypes = {
		title: PropTypes.string,
		description: PropTypes.string,
		videoLink: PropTypes.string,
	};
}

export default VideoCard;
