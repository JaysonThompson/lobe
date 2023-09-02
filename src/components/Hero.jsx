import { BiPlayCircle } from "react-icons/bi";

import ConfettiButton from "./ConfettiButton";
import VideoModal from "./VideoModal";
import { openModal } from "../utils";

import videoTour from "../assets/videos/TourVideo.mp4";

export default function Hero() {
	return (
		<div className="hero-container">
			<div className="heading">
				<h1 className="title">
					Train apps to <span> Identify Plants</span>
				</h1>
				<p className="subheading">
					Lobe helps you train machine learning models with a free,
					easy to use tool.
				</p>
			</div>
			<div className="buttons-container">
				<ConfettiButton
					styleClass="download-btn large"
					label="Download"
				/>
				<button onClick={openModal} className="video-tour">
					Watch Tour <BiPlayCircle height={39} width={39} />
				</button>
			</div>
			<VideoModal videoFile={videoTour} />
		</div>
	);
}
