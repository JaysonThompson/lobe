import { Link, NavLink } from "react-router-dom";

export default function Header() {
	const active = {
		color: "#333",
		fontWeight: "500",
	};
	return (
		<div className="header-container">
			<header className="header">
				<div className="site-logo">
					<Link className="logo" to="/">
						lobe
					</Link>
				</div>
				<nav className="nav">
					<NavLink
						to="overview"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Overview
					</NavLink>
					<NavLink
						to="examples"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Examples
					</NavLink>
					<NavLink
						to="tour"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Tour
					</NavLink>
					<NavLink
						to="blog"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Blog
					</NavLink>
					<NavLink
						to="help"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Help
					</NavLink>
				</nav>
				<button className="download-btn">Download</button>
			</header>
		</div>
	);
}
