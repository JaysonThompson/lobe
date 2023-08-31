import VideoCard from "../VideoCard";
import { videoCardData } from "../../constants";

export default function Examples() {
	const videoCardEl = videoCardData.map(
		({ title, description, videoLink }, index) => {
			return (
				<VideoCard
					key={index + 1}
					title={title}
					description={description}
					videoLink={videoLink}
				/>
			);
		}
	);

	return (
		<div>
			<section className="heading">
				<h1 className="title">
					Lobe <span>Examples</span>
				</h1>
				<p className="subheading">
					One tool, endless possibilities. Discover all the machine
					learning models you can train in Lobe.
				</p>
			</section>
			<section className="video-container">{videoCardEl}</section>
		</div>
	);
}
