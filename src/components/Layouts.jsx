import Header from "./Header";
import Footer from "./Footer";

import { Outlet } from "react-router";

export default function Layouts() {
	return (
		<>
			<Header />
			<main className="main">
				<Outlet />
			</main>
			<Footer />
		</>
	);
}
