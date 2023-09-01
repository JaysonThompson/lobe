import { useState } from "react";
import PropTypes from "prop-types";
import ConfettiExplosion from "react-confetti-explosion";

function ConfettiButton({ label, styleClass }) {
	const [isExploding, setIsExploding] = useState(false);

	function explodeConfetti() {
		setIsExploding(true);
	}

	return (
		<button onClick={explodeConfetti} className={styleClass}>
			{isExploding && (
				<ConfettiExplosion
					particleCount={1000}
					particleSize={4}
					duration={3000}
					onComplete={() => setIsExploding(false)}
					colors={["#04ddb2", "#f34747"]}
					force={0.8}
					width={2000}
				/>
			)}
			{label}
		</button>
	);
}

ConfettiButton.propTypes = {
	label: PropTypes.string,
	styleClass: PropTypes.string,
};

export default ConfettiButton;
