import PageHeading from "../PageHeading";
import FinalCallToAction from "../FinalCallToAction";
import VideoModal from "../VideoModal";

import videoImage from "../../assets/Video.jpg";
import videoTour from "../../assets/videos/TourVideo.mp4";

import { openModal } from "../../utils";

export default function Tour() {
	return (
		<>
			<PageHeading
				title="Tour"
				subheading="Build your first machine learning model in ten minutes. No code or experience required."
			/>
			<section className="tour-video-container" onClick={openModal}>
				<img
					className="open-video"
					src={videoImage}
					alt="Learn more about Lobe by watching our video."
				/>
			</section>
			<VideoModal videoFile={videoTour} />
			<FinalCallToAction />
		</>
	);
}
