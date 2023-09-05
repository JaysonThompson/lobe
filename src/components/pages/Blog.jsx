import FinalCallToAction from "../FinalCallToAction";
import PageHeading from "../PageHeading";
import BlogCard from "../BlogCard";

import { blogCardData } from "../../constants";

const blogCards = blogCardData.map(
	({ title, intro, releaseDate, image }, index) => {
		return (
			<BlogCard
				key={index}
				title={title}
				intro={intro}
				releaseDate={releaseDate}
				image={image}
			/>
		);
	}
);

export default function Blog() {
	return (
		<div id="blog">
			<PageHeading
				title="Blog"
				subheading="Read about our newest releases, and get tips on how to create custom machine learning models with Lobe."
			/>
			<div className="blog-card-container">{blogCards}</div>
			<FinalCallToAction />
		</div>
	);
}
