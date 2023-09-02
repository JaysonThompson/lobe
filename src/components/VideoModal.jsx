import PropTypes from "prop-types";

import { closeModal } from "../utils";

function VideoModal({ videoFile }) {
	return (
		<dialog className="modal" id="modal">
			<video src={videoFile} muted controls />
			<button className="close-button" onClick={closeModal}>
				X
			</button>
		</dialog>
	);
}

VideoModal.propTypes = {
	videoFile: PropTypes.string,
};

export default VideoModal;
