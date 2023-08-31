import PropTypes from "prop-types";

function PageHeading({ title, subheading }) {
	return (
		<section className="heading">
			<h1 className="title">
				Lobe <span>{title}</span>
			</h1>
			<p className="subheading">{subheading}</p>
		</section>
	);
}

PageHeading.propTypes = {
	title: PropTypes.string,
	subheading: PropTypes.string,
};

export default PageHeading;
