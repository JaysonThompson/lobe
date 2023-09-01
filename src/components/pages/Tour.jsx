import PageHeading from "../PageHeading";
import FinalCallToAction from "../FinalCallToAction";

import videoImage from "../../../assets/Video.jpg";
import tourVideo from "../../../assets/videos/TourVideo.mp4";

export default function Tour() {
	function openModal() {
		const modal = document.querySelector("#modal");
		modal.showModal();
	}

	function closeModal() {
		const modal = document.querySelector("#modal");
		modal.close();
	}

	return (
		<div>
			<PageHeading
				title="Tour"
				subheading="Build your first machine learning model in ten minutes. No code or experience required."
			/>
			<div className="tour-video-container" onClick={openModal}>
				<img
					className="open-video"
					src={videoImage}
					alt="Learn more about Lobe by watching our video."
				/>
			</div>
			<dialog className="modal" id="modal">
				<video src={tourVideo} autoPlay muted controls />
				<button className="close-button" onClick={closeModal}>
					X
				</button>
			</dialog>
			<FinalCallToAction />
		</div>
	);
}
