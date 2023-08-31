import { Link, NavLink } from "react-router-dom";

export default function Header() {
	const active = {
		color: "#333",
		fontWeight: "500",
		transform: "translateY(-1px) scale3d(1.03, 1.03, 1.03)",
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
						className="nav-link"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Overview
					</NavLink>
					<NavLink
						to="examples"
						className="nav-link"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Examples
					</NavLink>
					<NavLink
						to="tour"
						className="nav-link"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Tour
					</NavLink>
					<NavLink
						to="blog"
						className="nav-link"
						style={({ isActive }) => (isActive ? active : null)}
					>
						Blog
					</NavLink>
					<NavLink
						to="help"
						className="nav-link"
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
