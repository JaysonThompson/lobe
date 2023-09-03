import { BiPlayCircle } from "react-icons/bi";

import ConfettiButton from "./ConfettiButton";
import VideoModal from "./VideoModal";
import { openModal } from "../utils";

import videoTour from "../assets/videos/TourVideo.mp4";
import homeVideo from "../assets/videos/Home.mp4";

export default function Hero() {
	const titleArray = [
		"indentify plants",
		"see gestures",
		"count reps",
		"feel emotions",
		"sense colors",
		"check safety",
	];
	let i = 1;
	setInterval(() => {
		document.querySelector(".alternating-text").textContent = titleArray[i];
		i = ++i % titleArray.length;
	}, 4950);

	return (
		<section className="hero-container">
			<div className="heading">
				<h1 className="title">
					Train apps to <br />
					<span className="alternating-text">indentify plants</span>
				</h1>
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
			<video src={homeVideo} autoPlay loop></video>
		</section>
	);
}
