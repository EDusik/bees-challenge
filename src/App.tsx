import { Route, Routes } from "react-router-dom";
import { Home } from "pages/home/Home";
import { Companies } from "pages/companies/Companies";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/companies" element={<Companies />} />
		</Routes>
	);
}

export default App;
