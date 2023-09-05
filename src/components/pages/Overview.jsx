import Hero from "../Hero";
import FinalCallToAction from "../FinalCallToAction";

import MadeEasy from "../../assets/MadeEasy.jpg";

export default function Overview() {
	return (
		<div id="overview">
			<Hero />
			<section className="made-easy">
				<div className="heading">
					<h1 className="title">
						Machine learning <br />
						made <span>easy</span>
					</h1>
					<p className="subheading">
						Lobe has everything you need to bring your machine
						learning ideas to life. Just show it examples of what
						you want it to learn, and it automatically trains a
						custom machine learning model that can be shipped in
						your app.
					</p>
				</div>
				<img
					className="made-easy-img"
					src={MadeEasy}
					alt="Machine Learning Made Easy"
				/>
			</section>
			<FinalCallToAction />
		</div>
	);
}
