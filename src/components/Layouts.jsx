import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router";

export default function Layouts() {
	return (
		<div className="main">
			<Header />
			<div className="main-content">
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}
