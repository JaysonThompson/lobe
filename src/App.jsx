import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layouts from "./components/Layouts";
import Overview from "./components/pages/Overview";
import Examples from "./components/pages/Examples";
import Tour from "./components/pages/Tour";
import Blog from "./components/pages/Blog";
import Help from "./components/pages/Help";

import "./App.css";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Layouts />}>
					<Route index path="overview" element={<Overview />} />
					<Route path="examples" element={<Examples />} />
					<Route path="tour" element={<Tour />} />
					<Route path="blog" element={<Blog />} />
					<Route path="help" element={<Help />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
