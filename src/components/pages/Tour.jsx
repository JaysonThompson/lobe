import PageHeading from "../PageHeading";
import FinalCallToAction from "../FinalCallToAction";
import VideoModal from "../VideoModal";

import videoImage from "../../assets/Video.jpg";
import videoTour from "../../assets/videos/TourVideo.mp4";

import { openModal } from "../../utils";

export default function Tour() {
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
			<VideoModal videoFile={videoTour} />
			<FinalCallToAction />
		</div>
	);
}
