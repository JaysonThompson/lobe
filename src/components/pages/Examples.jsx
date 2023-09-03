import VideoCard from "../VideoCard";
import PageHeading from "../PageHeading";
import FinalCallToAction from "../FinalCallToAction";

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
		<>
			<PageHeading
				title="Examples"
				subheading="One tool, endless possibilities. Discover all the machine learning models you can train with Lobe."
			/>
			<section className="video-container">{videoCardEl}</section>
			<FinalCallToAction />
		</>
	);
}
