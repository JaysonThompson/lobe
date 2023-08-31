import PageHeading from "../PageHeading";
import FinalCallToAction from "../FinalCallToAction";

import videoImage from "../../assets/Video.jpg";

export default function Tour() {
	return (
		<div>
			<PageHeading
				title="Tour"
				subheading="Build your first machine learning model in ten minutes. No code or experience required."
			/>
			<div className="tour-video-container">
				<img
					src={videoImage}
					alt="Learn more about Lobe by watching our video."
				/>
			</div>
			<FinalCallToAction />
		</div>
	);
}
