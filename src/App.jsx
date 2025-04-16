import React from "react";
import Menu from "./pages/Menu";
import { HashRouter,Routes,Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header.jsx"
import WelcomeSection from "./components/WelcomeSection.jsx"

function App() {
  return (
    <>

	<Header />
	<HashRouter>
		<Routes>
			<Route path="/menu" element={<Menu></Menu>}></Route>
			<Route path="/" element={<Home></Home>}></Route>
		</Routes>

	</HashRouter>

      
    </>
  );
}

export default App;
