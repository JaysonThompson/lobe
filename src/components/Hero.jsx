import { BiPlayCircle } from "react-icons/bi";

import ConfettiButton from "./ConfettiButton";
import VideoModal from "./VideoModal";
import { openModal } from "../utils";

import videoTour from "../assets/videos/TourVideo.mp4";

export default function Hero() {
	const titleArray = [
		"indentify plants",
		"see gestures",
		"count reps",
		"feel emotioins",
		"sense colors",
		"check safety",
	];

	const titleLoop = titleArray.map((title) => {
		setTimeout(() => {
			return title;
		}, 500);
	});
	console.log(titleLoop);
	console.log(titleArray);

	return (
		<section className="hero-container">
			<div className="heading">
				<h1 className="title">Train apps to {titleLoop}</h1>
				<p className="subheading">
					Lobe helps you train machine learning models with a free,
					easy to use tool.
				</p>
				<div className="buttons-container">
					<ConfettiButton
						styleClass="download-btn large"
						label="Download"
					/>
					<button onClick={openModal} className="video-tour">
						Watch Tour <BiPlayCircle />
					</button>
				</div>
				<VideoModal videoFile={videoTour} />
			</div>
		</section>
	);
}
